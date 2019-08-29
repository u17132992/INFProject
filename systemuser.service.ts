import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bcrypt } from 'bcryptjs';
import { SystemUserModel } from './systemuser.model';

@Injectable()
export class SystemUsersService {

  constructor(private http: HttpClient) {
  }

  login(su: SystemUserModel): Promise<SystemUserModel> {
    console.log('[system-user.service.ts] login() attempt for user: ' + su.EmailAddress);

    return new Promise<SystemUserModel>((resolve, reject) => {

      const tPath = 'http://localhost:3000/api/SystemUsers?filter={"where":{"EmailAddress":"' + su.EmailAddress + '"}}';

      this.http.get<SystemUserModel>(tPath)
        .subscribe(res => {
          const cu = res as SystemUserModel;
         
          if (res === null) {
            console.log('No user found!', res);
            reject('Auth failure');
          } else if ((cu.EmailAddress) && (cu[0].EmailAddress.length < 1)) {
            console.log('No e-mail address:', res);
            reject('Auth failure');
          }

        

          resolve(res);
        },
          err => reject('Auth failure')
        );
    });
  }


  getSystemUsers(): Promise<SystemUserModel[]> {
    console.log('[SystemUsersService.service | getSystemUsers] Loading SystemUsers via API/MSSQL');
    

    return new Promise<SystemUserModel[]>((resolve, reject) => {
      this.http.get<SystemUserModel[]>('http://localhost:3000/api/SystemUsers')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SystemUsersService.service | getSystemUsers] Failure')
        );
    });
  }

  findSystemUsers(id: number): Promise<SystemUserModel[]> {
    console.log('[SystemUsersService.service | findSystemUsers] Finding SystemUsers via API/MSSQL');
   
    const findURL = 'http://localhost:3000/api/SystemUsers?filter={"where":{"SystemUserID":' + id + '}}';
    console.log(findURL);

    return new Promise<SystemUserModel[]>((resolve, reject) => {
      this.http.get<SystemUserModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SystemUsersService.service | findSystemUsers] Failure')
        );
    });
  }

  deleteSystemUser(id: number): Promise<string> {
    console.log('[pet-sitters.service.ts] in deleteSystemUser(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/SystemUsers/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SystemUsersService.service | deleteSystemUsers] Failure')
        );
    });
  }

  createSystemUser(systemuser: any): Promise<SystemUserModel> {
    console.log('[pet-sitters.service.ts] in createSystemUser()');

    return new Promise<SystemUserModel>((resolve, reject) => {
      const data = new SystemUserModel(); 
      data.UserID = systemuser.UserID;
      data.EmailAddress = systemuser.EmailAddress;
      data.UserPassword = systemuser.UserPassword;
      data.GUID = systemuser.GUID;
      data.GUIDExpiry = systemuser.GUIDExpiry;
      data.UserRoleID = systemuser.UserRoleID;
      data.PetParentID = systemuser.PetParentID;
      data.PetSitterID = systemuser.PetSitterID;

      this.http.put<SystemUserModel>('http://localhost:3000/api/SystemUsers', data)
        .subscribe(res => { 
          resolve(res);
        },
          err => reject('[SystemUsersService.service | createSystemUser] Failure')
        );
    });
  }

  updateSystemUser(systemuser: any): Promise<SystemUserModel> {
    console.log('[pet-sitters.service.ts] in updateSystemUser()');
    console.log(systemuser);

    return new Promise<SystemUserModel>((resolve, reject) => {
     
      this.http.put<SystemUserModel>('http://localhost:3000/api/SystemUsers/' + systemuser.SystemUserID, systemuser)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SystemUsersService.service | updateSystemUser] Failure')
        );
    });
  }
}
