import { NumberValueAccessor } from '@angular/forms';

export class SystemUserModel {
    UserID: number;
    EmailAddress: string;
    UserPassword: string;
    GUID: string;
    GUIDExpiry: Date;
    UserRoleID: number;
    PetParentID: number;
    PetSitterID: number;
}
