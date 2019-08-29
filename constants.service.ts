import { Injectable } from '@angular/core';
import { SystemUserModel } from './systemuser.model';
import { PetSitterModel } from './pet-sitter.model';
import { PetParentModel } from './pet-parent.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly baseAppUrl: string = 'http://localhost:3000'
  readonly distFolderLocation: string = 'Petcetera/';

  public userRoleTag: string;

  public currentSysUser: SystemUserModel;
  public currentPSUser: PetSitterModel;
  public currentPPUser: PetParentModel;

  constructor() { }
}
