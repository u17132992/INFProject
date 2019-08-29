import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { AppComponent } from '../app.component';
import { SystemUserModel } from './systemuser.model';
import { SystemUsersService } from './systemuser.service';
import { PetSitterModel } from './pet-sitter.model';
import { PetSittersService } from './pet-sitters.service';
import { PetParentsService } from './pet-parents.service';
import { PetParentModel } from './pet-parent.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
  

  systemusers: SystemUserModel[];
  currentsystemuser: SystemUserModel;
  currentPetSitterUser: PetSitterModel;
  currentPetParentUser: PetParentModel;


 
 
  distFolderLocation: string; 
 

  constructor(
    
    private suUserService: SystemUsersService,
    private ppUserService: PetParentsService,
    private psUserService: PetSittersService
  ) {
    
    

  }

  ngOnInit(): void {
    console.log('[home.component.ts] ngOnInit()');
    

    this.currentsystemuser = new SystemUserModel();

    this.suUserService.getSystemUsers()
      .then(res => {
        console.log('retrieved users:', res);
        this.systemusers = res;
      })
      .catch(err => console.log('home.component.ts] Error when reading users...'));
  }
}

