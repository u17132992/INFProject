import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstructionModel } from './instruction.model';

@Injectable({
  providedIn: 'root'
})

export class InstructionService {

  constructor(private http: HttpClient) { }

  getInstructions(): Promise<InstructionModel[]> {
    console.log('[InstructionsService | getInstructions] Loading Instructions via API/MSSQL');
    // return this.http.get<InstructionModel[]>('http://localhost:3000/api/Instructions')
    // .toPromise()
    // .then(res => res);

    return new Promise<InstructionModel[]>((resolve, reject) => {
      this.http.get<InstructionModel[]>('http://localhost:3000/api/Instructions')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[InstructionsService | getInstructions] Failure')
        );
    });
  }

  findInstructions(id: number): Promise<InstructionModel[]> {
    console.log('[InstructionsService | findInstructions] Finding Instructions via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Instructions?filter={"where":{"InstructionID":' + id + '}}';
    console.log(findURL);

    return new Promise<InstructionModel[]>((resolve, reject) => {
      this.http.get<InstructionModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[InstructionsService | findInstructions] Failure')
        );
    });
  }

  deleteInstruction(id: number): Promise<string> {
    console.log('[InstructionsService | deleteInstruction](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Instructions/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[InstructionsService | deleteInstructions] Failure')
        );
    });
  }

  createInstruction(newRec: any): Promise<InstructionModel> {
    console.log('[InstructionsService | createInstruction (newRec)]');

    return new Promise<InstructionModel>((resolve, reject) => {
      const data = new InstructionModel();
      data.InstructionID = newRec.InstructionID;
      data.SignificantOtherNr = newRec.SignificantOtherNr;
      data.CommunicationLevel = newRec.CommunicationLevel;
      data.StayingSitterFood = newRec.StayingSitterFood;
      data.VisitingSitterFood = newRec.VisitingSitterFood;
      data.SelectedFoodItems = newRec.SelectedFoodItems;
      data.StayingElectronics = newRec.StayingElectronics;
      data.VisitingTV = newRec.VisitingTV;
      data.VisitingLights = newRec.VisitingLights;
      data.CertainElectronics = newRec.CertainElectronics;
      data.StayingWifi = newRec.StayingWifi;
      data.WifiConnectionDetails = newRec.WifiConnectionDetails;
      data.RefuseDay = newRec.RefuseDay;
      data.AccessAndSecurity = newRec.AccessAndSecurity;
      data.StayingAdditionalNotes = newRec.StayingAdditionalNotes;
      data.VisitingAdditionalNotes = newRec.VisitingAdditionalNotes;
      data.StayingVisitorDetails = newRec.StayingVisitorDetails;
      data.StayingVisitationFriends = newRec.StayingVisitationFriends;
      data.StayingVisitorsAdditionalNotes = newRec.StayingVisitorsAdditionalNotes;
      data.EmergencyNearby = newRec.EmergencyNearby;
      data.EmergencyHolidayAdditional = newRec.EmergencyHolidayAdditional;
      data.VetinarianDetails = newRec.VetinarianDetails;
      data.VetenarianPayment = newRec.VetenarianPayment;

      this.http.put<InstructionModel>('http://localhost:3000/api/Instructions', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[InstructionsService | createInstruction] Failure')
        );
    });
  }

  updateInstruction(pt: any): Promise<InstructionModel> {
    console.log('[InstructionsService | updateInstruction()');
    console.log(pt);

    return new Promise<InstructionModel>((resolve, reject) => {
      this.http.put<InstructionModel>('http://localhost:3000/api/Instructions/' + pt.InstructionID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[InstructionsService | updateInstruction] Failure')
        );
    });
  }
}
