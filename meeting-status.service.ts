import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingStatusModel } from './meeting-status.model';

@Injectable({
  providedIn: 'root'
})

export class MeetingStatusService {

  constructor(private http: HttpClient) { }

  getMeetingStatus(): Promise<MeetingStatusModel[]> {
    console.log('[MeetingStatusService | getMeetingStatus] Loading MeetingStatus via API/MSSQL');
    // return this.http.get<MeetingStatusModel[]>('http://localhost:3000/api/MeetingStatus')
    // .toPromise()
    // .then(res => res);

    return new Promise<MeetingStatusModel[]>((resolve, reject) => {
      this.http.get<MeetingStatusModel[]>('http://localhost:3000/api/MeetingStatus')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingStatusService | getMeetingStatus] Failure')
        );
    });
  }

  findMeetingStatus(id: number): Promise<MeetingStatusModel[]> {
    console.log('[MeetingStatusService | findMeetingStatus] Finding MeetingStatus via API/MSSQL');
    const findURL = 'http://localhost:3000/api/MeetingStatus?filter={"where":{"MeetingStatusID":' + id + '}}';
    console.log(findURL);

    return new Promise<MeetingStatusModel[]>((resolve, reject) => {
      this.http.get<MeetingStatusModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingStatusService | findMeetingStatus] Failure')
        );
    });
  }

  deleteMeetingStatus(id: number): Promise<string> {
    console.log('[MeetingStatusService | deleteMeetingStatus](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/MeetingStatus/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingStatusService | deleteMeetingStatus] Failure')
        );
    });
  }

  createMeetingStatus(newRec: any): Promise<MeetingStatusModel> {
    console.log('[MeetingStatusService | createMeetingStatus (newRec)]');

    return new Promise<MeetingStatusModel>((resolve, reject) => {
      const data = new MeetingStatusModel();
      data.MeeetingStatusID = newRec.MeeetingStatusID;
      data.DateRequested = newRec.DateRequested;

      this.http.put<MeetingStatusModel>('http://localhost:3000/api/MeetingStatus', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingStatusService | createMeetingStatus] Failure')
        );
    });
  }

  updateMeetingStatus(pt: any): Promise<MeetingStatusModel> {
    console.log('[MeetingStatusService | updateMeetingStatus()');
    console.log(pt);

    return new Promise<MeetingStatusModel>((resolve, reject) => {
      this.http.put<MeetingStatusModel>('http://localhost:3000/api/MeetingStatus/' + pt.MeetingStatusID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingStatusService | updateMeetingStatus] Failure')
        );
    });
  }
}
