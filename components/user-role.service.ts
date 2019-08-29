import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRoleModel } from './user-role.model';

@Injectable()
export class UserRolesService {

  constructor(private http: HttpClient) { }

  getUserRoles(): Promise<UserRoleModel[]> {
    console.log('[UserRolesService | getUserRoles] Loading UserRoles via API/MSSQL');
   
    return new Promise<UserRoleModel[]>((resolve, reject) => {
      this.http.get<UserRoleModel[]>('http://localhost:3000/api/UserRoles')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[UserRolesService | getUserRoles] Failure')
        );
    });
  }

  findUserRoles(id: number): Promise<UserRoleModel[]> {
    console.log('[UserRolesService | findUserRoles] Finding UserRoles via API/MSSQL');
    const findURL = 'http://localhost:3000/api/UserRoles?filter={"where":{"UserRoleID":' + id + '}}';
    console.log(findURL);

    return new Promise<UserRoleModel[]>((resolve, reject) => {
      this.http.get<UserRoleModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[UserRolesService | findUserRoles] Failure')
        );
    });
  }

  deleteUserRole(id: number): Promise<string> {
    console.log('[user-roles.service.ts] in deleteUserRole(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/UserRoles/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[UserRolesService | deleteUserRoles] Failure')
        );
    });
  }

  createUserRole(ur: any): Promise<UserRoleModel> {
    console.log('[user-roles.service.ts] in createUserRole()');

    return new Promise<UserRoleModel>((resolve, reject) => {
      const data = new UserRoleModel(); 
      data.UserRoleID = ur.UserRoleID;
      data.UserRoleDescription = ur.UserRoleDescription;

      this.http.put<UserRoleModel>('http://localhost:3000/api/UserRoles', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[UserRolesService | createUserRole] Failure')
        );
    });
  }

  updateUserRole(ur: any): Promise<UserRoleModel> {
    console.log('[user-roles.service.ts] in updateUserRole()');
    console.log(ur);

    return new Promise<UserRoleModel>((resolve, reject) => {
     
      this.http.put<UserRoleModel>('http://localhost:3000/api/UserRoles/' + ur.UserRoleID, ur)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[UserRolesService | updateUserRole] Failure')
        );
    });
  }
}
