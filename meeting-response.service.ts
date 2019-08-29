import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingResponseModel } from './meeting-response.model';

@Injectable({
  providedIn: 'root'
})

export class MeetingResponseService {

  constructor(private http: HttpClient) { }

  getMeetingResponses(): Promise<MeetingResponseModel[]> {
    console.log('[MeetingResponsesService | getMeetingResponses] Loading MeetingResponses via API/MSSQL');
    // return this.http.get<MeetingResponseModel[]>('http://localhost:3000/api/MeetingResponses')
    // .toPromise()
    // .then(res => res);

    return new Promise<MeetingResponseModel[]>((resolve, reject) => {
      this.http.get<MeetingResponseModel[]>('http://localhost:3000/api/MeetingResponses')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingResponsesService | getMeetingResponses] Failure')
        );
    });
  }

  findMeetingResponses(id: number): Promise<MeetingResponseModel[]> {
    console.log('[MeetingResponsesService | findMeetingResponses] Finding MeetingResponses via API/MSSQL');
    const findURL = 'http://localhost:3000/api/MeetingResponses?filter={"where":{"MeetingResponseID":' + id + '}}';
    console.log(findURL);

    return new Promise<MeetingResponseModel[]>((resolve, reject) => {
      this.http.get<MeetingResponseModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingResponsesService | findMeetingResponses] Failure')
        );
    });
  }

  deleteMeetingResponse(id: number): Promise<string> {
    console.log('[MeetingResponsesService | deleteMeetingResponse](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/MeetingResponses/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingResponsesService | deleteMeetingResponses] Failure')
        );
    });
  }

  createMeetingResponse(newRec: any): Promise<MeetingResponseModel> {
    console.log('[MeetingResponsesService | createMeetingResponse (newRec)]');

    return new Promise<MeetingResponseModel>((resolve, reject) => {
      const data = new MeetingResponseModel();
      data.MeetingResponseID = newRec.MeetingResponseID;
      data.ResponseDescription = newRec.ResponseDescription;

      this.http.put<MeetingResponseModel>('http://localhost:3000/api/MeetingResponses', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingResponsesService | createMeetingResponse] Failure')
        );
    });
  }

  updateMeetingResponse(pt: any): Promise<MeetingResponseModel> {
    console.log('[MeetingResponsesService | updateMeetingResponse()');
    console.log(pt);

    return new Promise<MeetingResponseModel>((resolve, reject) => {
      this.http.put<MeetingResponseModel>('http://localhost:3000/api/MeetingResponses/' + pt.MeetingResponseID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[MeetingResponsesService | updateMeetingResponse] Failure')
        );
    });
  }
}
