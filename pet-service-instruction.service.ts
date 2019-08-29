import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetServiceInstructionModel } from './pet-service-instruction.model';

@Injectable()
export class PetServiceInstructionService {

  constructor(private http: HttpClient) { }

  getPSI(): Promise<PetServiceInstructionModel[]> {
    console.log('[PSIService | getPSI] Loading PSI via API/MSSQL');
    // return this.http.get<PetServiceInstructionModel[]>('http://localhost:3000/api/PetServiceInstructions')
    // .toPromise()
    // .then(res => res);

    return new Promise<PetServiceInstructionModel[]>((resolve, reject) => {
      this.http.get<PetServiceInstructionModel[]>('http://localhost:3000/api/PetServiceInstructions')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PSIService | getPSI] Failure')
        );
    });
  }

  findPSI(id: number): Promise<PetServiceInstructionModel[]> {
    console.log('[PSIService | findPSI] Finding PSI via API/MSSQL');
    const findURL = 'http://localhost:3000/api/PetServiceInstructions?filter={"where":{"PetServiceInstructionID":' + id + '}}';
    console.log(findURL);

    return new Promise<PetServiceInstructionModel[]>((resolve, reject) => {
      this.http.get<PetServiceInstructionModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PSIService | findPSI] Failure')
        );
    });
  }

  findPSIForServiceRequest(srid: number): Promise<PetServiceInstructionModel[]> {
    console.log('[PSIService | findPSIForServiceRequest] Finding PSI for Service Request' + srid);
    const findURL = 'http://localhost:3000/api/PetServiceInstructions?filter={"where":{"RequestID":' + srid + '}}';
    console.log(findURL);

    return new Promise<PetServiceInstructionModel[]>((resolve, reject) => {
      this.http.get<PetServiceInstructionModel[]>(findURL)
        .subscribe(res => {
          console.log('[PSIService | findPSIForServiceRequest] Retrieved PSI: ', res);
          resolve(res);
        },
          err => reject('[PSIService | findPSIForServiceRequest] Failure')
        );
    });
  }

  deletePSI(id: number): Promise<string> {
    console.log('[psis.service.ts] in deletePetServiceInstruction(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/PetServiceInstructions/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PSIService | deletePSI] Failure')
        );
    });
  }

  createPSI(psi: any): Promise<PetServiceInstructionModel> {
    console.log('[psis.service.ts] in createPetServiceInstruction():', psi);

    return new Promise<PetServiceInstructionModel>((resolve, reject) => {
      const data = new PetServiceInstructionModel(); // this is the PetServiceInstruction model also imported from the SDK
      data.PetServiceInstructionID = Math.floor((Math.random() * 10000) + 1);//psi.PetServiceInstructionID;
      data.AdditionalPetNotes = psi.AdditionalPetNotes;
      data.NameDescription = psi.NameDescription;
      data.FeedingInstructions = psi.FeedingInstructions;
      data.DailyWalks = psi.DailyWalks;
      data.DailyGrooming = psi.DailyGrooming;
      data.AdditionalPetNotes = psi.AdditionalPetNotes;
      data.RequestID = psi.RequestID;
      data.PetParentID = psi.PetParentID;
      data.InstructionID = psi.InstructionID;
      data.PetID = psi.PetID;

      this.http.put<PetServiceInstructionModel>('http://localhost:3000/api/PetServiceInstructions', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PSIService | createPetServiceInstruction] Failure')
        );
    });
  }

  updatePSI(psi: any): Promise<PetServiceInstructionModel> {
    console.log('[psis.service.ts] in updatePetServiceInstruction()');
    console.log(psi);

    return new Promise<PetServiceInstructionModel>((resolve, reject) => {
      // AK 2019/08/19 changed from PATCH to PUT
      this.http.put<PetServiceInstructionModel>('http://localhost:3000/api/PetServiceInstructions/' + psi.PetServiceInstructionID, psi)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PSIService | updatePetServiceInstruction] Failure')
        );
    });
  }

}
