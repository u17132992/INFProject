import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SystemUsersService } from './components/systemuser.service';
import { SystemUserModel } from './components/systemuser.model';
import { ConstantsService } from './components/constants.service';
import { resolve } from 'url';
import { PetSittersService } from './components/pet-sitters.service';
import { PetParentsService } from './components/pet-parents.service';
import { PetParentModel } from './components/pet-parent.model';
import { PetSitterModel } from './components/pet-sitter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userRoleTag: string; // populate from CONSTANTS
  currentsystemuser: SystemUserModel;
  currentPPUser: PetParentModel;
  currentPSUser: PetSitterModel;
  systemusers: SystemUserModel[];

  public isLoggedIn = false;

  public displayLogin = true;
  public displayModule = false;
  response: any;

  constructor(
    private suService: SystemUsersService,
    private ppUserService: PetParentsService,
    private psUserService: PetSittersService,

    // private toastr: ToastrService,
    private router: Router,
    private CONSTANTS: ConstantsService
  ) {
    const title = 'Petcetera';
  }

  ngOnInit() {
    console.log('[app.component.ts] ngOnInit()');

    console.warn('[app.component.ts] CONSTANTS.userRoleTag = ' + this.CONSTANTS.userRoleTag);
    console.warn('[app.component.ts] this.userRoleTag = ' + this.userRoleTag);
    this.userRoleTag = this.CONSTANTS.userRoleTag;

    this.currentsystemuser = new SystemUserModel();

    this.suService.getSystemUsers()
      .then(res => {
        console.log('retrieved users:', res);
        this.systemusers = res;
      })
      .catch(err => console.log('app.component.ts] Error when reading users...'));
  }

  signin() {
    console.log('app.component.ts: signin() called');
    this.suService.login(this.currentsystemuser).then(su => {
      console.log(su);

      if (su[0].UserID === undefined) {
        console.log('Warning: System user not found (undefined)!');
      }
      if (su[0].UserID === null) {
        console.log('Warning: System user not found (null)!');
      }

      if (su[0].UserID !== null) {
        this.isLoggedIn = true;
        console.log('System user found: ' + su[0].EmailAddress + ' Role type:' + su[0].UserRoleID);
        this.currentsystemuser = su[0];
        this.CONSTANTS.currentSysUser = su[0];

        if (su[0].UserRoleID === 1) {
          this.userRoleTag = 'admin';
        } else if (su[0].UserRoleID === 2) {
          this.userRoleTag = 'petparent';
        } else if (su[0].UserRoleID === 3) {
          this.userRoleTag = 'petsitter';
        }
        // Store in Constants
        this.CONSTANTS.userRoleTag = this.userRoleTag;

        // Find associate PetSitter
        this.psUserService.findPetSitters(su[0].PetSitterID)
          .then(psUsers => {
            console.log('[AppComponent] Found PetSitterUser:', psUsers[0]);
            this.currentPSUser = psUsers[0];
            this.CONSTANTS.currentPSUser = psUsers[0];
          })
          .catch(err => {
            console.log('[AppComponentt] PetSitterUser not found!');
          });

        /* Find associate PetParent */
      
        this.ppUserService.findPetParent(su[0].PetParentID)
          .then(ppUser => {
            console.log('[AppComponent] Found PetParentUser:', ppUser);
            this.currentPPUser = ppUser;
            this.CONSTANTS.currentPPUser = ppUser;
          });
      }

      // this.toastr.success('Success! Role type:' + su[0].UserRoleID);
      // set type and token

      this.displayLogin = false;
      this.displayModule = true;

      // if (this.CONSTANTS.userRoleTag === 'petparent') {
      //   this.router.navigateByUrl('/pet-parent');
      // } else if (this.CONSTANTS.userRoleTag === 'petsitter') {
      //   this.router.navigateByUrl('/pet-sitter');

    }, err => {
      console.log('Auth Failure!');
      // this.toastr.error('Login failure. Please try again');
    });
  }
}
