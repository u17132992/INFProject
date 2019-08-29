import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingModel } from './meeting.model';

@Injectable({
  providedIn: 'root'
})

export class MeetingService {

  constructor(private http: HttpClient) { }

  getMeetings(): Promise<MeetingModel[]> {
    console.log('[MeetingsService | getMeetings] Loading Meetings via API/MSSQL');
    // return this.http.get<MeetingModel[]>('http://localhost:3000/api/Meetings')
    // .toPromise()
    // .then(res => res);

    return new Promise<MeetingModel[]>((resolve, reject) => {
      this.http.get<MeetingModel[]>('http://localhost:3000/api/Meetings')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingsService | getMeetings] Failure')
        );
    });
  }

  findMeetings(id: number): Promise<MeetingModel[]> {
    console.log('[MeetingsService | findMeetings] Finding Meetings via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Meetings?filter={"where":{"MeetingID":' + id + '}}';
    console.log(findURL);

    return new Promise<MeetingModel[]>((resolve, reject) => {
      this.http.get<MeetingModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingsService | findMeetings] Failure')
        );
    });
  }

  deleteMeeting(id: number): Promise<string> {
    console.log('[MeetingsService | deleteMeeting](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Meetings/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingsService | deleteMeetings] Failure')
        );
    });
  }

  createMeeting(newRec: any): Promise<MeetingModel> {
    console.log('[MeetingsService | createMeeting (newRec)]');

    return new Promise<MeetingModel>((resolve, reject) => {
      const data = new MeetingModel();
      data.MeetingID = newRec.MeetingID;
      data.MeetingDate1 = newRec.MeetingDate1;
      data.MeetingTime1 = newRec.MeetingTime1;
      data.MeetingDate2 = newRec.MeetingDate2;
      data.MeetingTime2 = newRec.MeetingTime2;
      data.MeetingDate3 = newRec.MeetingDate3;
      data.MeetingTime3 = newRec.MeetingTime3;
      data.MeetingLocation = newRec.MeetingLocation;
      data.MeetingResponseID = newRec.MeetingResponseID;
      data.MeeetingStatusID = newRec.MeeetingStatusID;
      data.PetSitterID = newRec.PetSitterID;
      data.RequestID = newRec.RequestID;
      data.PetParentID = newRec.PetParentID;

      this.http.put<MeetingModel>('http://localhost:3000/api/Meetings', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingsService | createMeeting] Failure')
        );
    });
  }

  updateMeeting(pt: any): Promise<MeetingModel> {
    console.log('[MeetingsService | updateMeeting()');
    console.log(pt);

    return new Promise<MeetingModel>((resolve, reject) => {
      this.http.put<MeetingModel>('http://localhost:3000/api/Meetings/' + pt.MeetingID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingsService | updateMeeting] Failure')
        );
    });
  }
}
