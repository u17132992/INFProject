import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { UserRoleModel } from './user-role.model';
import { UserRolesService } from './user-role.service';


@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRolesComponent implements OnInit {

  UserRoles: UserRoleModel[];
  currentUserRole: UserRoleModel;

  constructor(
    private service: UserRolesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[UserRolesComponent] ngOnInit()');
    this.currentUserRole = new UserRoleModel();

    this.service.getUserRoles()
      .then(res => {

        this.UserRoles = res;
        console.log('[UserRolesComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[UserRole.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.UserRoles = data.UserRoles; 
        this.currentUserRole = new UserRoleModel(); 
      }
    });
  }

  findUserRoles() {
    console.log('[UserRole.component] findUserRoles');
    this.service.findUserRoles(this.currentUserRole.UserRoleID)
      .then(res => {
        this.UserRoles = res;
       })
      .catch(err => console.log('error', err));
  }

  createUserRole() {
    console.log('[UserRolesComponent] in createUserRole()');
    
    return this.service.createUserRole(this.currentUserRole); 
  }

  selectUserRole(id: any) {
    console.log('[UserRolesComponent] in selectselectUserRole(' + id + ')');

    this.UserRoles.forEach(r => {
      
      if (r.UserRoleID === id) {
        console.log('found ', r);
        this.currentUserRole = (r as UserRoleModel);
        this.currentUserRole.UserRoleID = id;
      }
      return;
    });
  }

  updateUserRole() {
    console.log('[UserRolesComponent] in updateUserRole()');
    return this.service.updateUserRole(this.currentUserRole); 
  }

  deleteUserRole(id: any) {
    console.log('[UserRolesComponent] deleteUserRole(' + id + ')');
    this.UserRoles = this.UserRoles.filter(p => p.UserRoleID !== id);
    

    return this.service.deleteUserRole(id); 
    
    
  }
}
