import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { MeetingResponseModel } from './meeting-response.model';
import { MeetingResponseService } from './meeting-response.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-meeting-response',
  templateUrl: './meeting-response.component.html',
  styleUrls: ['./meeting-response.component.css']
})
export class MeetingResponsesComponent implements OnInit {

  meetingresponses: MeetingResponseModel[];
  currentmeetingresponse: MeetingResponseModel;

  constructor(
    private service: MeetingResponseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[MeetingResponsesComponent] ngOnInit()');
    this.currentmeetingresponse = new MeetingResponseModel();

    this.service.getMeetingResponses()
      .then(res => {
        
        
          
        

        this.meetingresponses = res;
        console.log('[MeetingResponsesComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[meetingresponse.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.meetingresponses = data.meetingresponses;
        this.currentmeetingresponse = new MeetingResponseModel();
      }
    });
  }

  findMeetingResponses() {
    console.log('[meetingresponse.component] findMeetingResponses');
    this.service.findMeetingResponses(this.currentmeetingresponse.MeetingResponseID)
      .then(res => {
        this.meetingresponses = res;
       })
      .catch(err => console.log('error', err));
  }

  createMeetingResponse() {
    console.log('[MeetingResponsesComponent] in createMeetingResponse()');
    return this.service.createMeetingResponse(this.currentmeetingresponse);
  }

  selectMeetingResponse(id: any) {
    console.log('[MeetingResponsesComponent] in selectselectMeetingResponse(' + id + ')');

    this.meetingresponses.forEach(r => {
      if (r.MeetingResponseID === id) {
        console.log('found ', r);
        this.currentmeetingresponse = (r as MeetingResponseModel);
        this.currentmeetingresponse.MeetingResponseID = id;
      }
      return;
    });
  }

  updateMeetingResponse() {
    console.log('[MeetingResponsesComponent] in updateMeetingResponse()');
    return this.service.updateMeetingResponse(this.currentmeetingresponse); 
  }

  deleteMeetingResponse(id: any) {
    console.log('[MeetingResponsesComponent] deleteMeetingResponse(' + id + ')');
    this.meetingresponses = this.meetingresponses.filter(p => p.MeetingResponseID !== id);
    
    return this.service.deleteMeetingResponse(id);
  }
}
