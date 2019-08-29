import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { MeetingModel } from './meeting.model';
import { MeetingService } from './meeting.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: MeetingModel[];
  currentmeeting: MeetingModel;

  constructor(
    private service: MeetingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[MeetingsComponent] ngOnInit()');
    this.currentmeeting = new MeetingModel();

    this.service.getMeetings()
      .then(res => {
        
        
          
        

        this.meetings = res;
        console.log('[MeetingsComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[meeting.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.meetings = data.meetings; 
        this.currentmeeting = new MeetingModel(); 
      }
    });
  }

  findMeetings() {
    console.log('[meeting.component] findMeetings');
    this.service.findMeetings(this.currentmeeting.MeetingID)
      .then(res => {
        this.meetings = res;
       })
      .catch(err => console.log('error', err));
  }

  createMeeting() {
    console.log('[MeetingsComponent] in createMeeting()');
    
    return this.service.createMeeting(this.currentmeeting); 
  }

  selectMeeting(id: any) {
    console.log('[MeetingsComponent] in selectselectMeeting(' + id + ')');

    this.meetings.forEach(r => {
      if (r.MeetingID === id) {
        console.log('found ', r);
        this.currentmeeting = (r as MeetingModel);
        this.currentmeeting.MeetingID = id;
      }
      return;
    });
  }

  updateMeeting() {
    console.log('[MeetingsComponent] in updateMeeting()');
    return this.service.updateMeeting(this.currentmeeting); 
  }

  deleteMeeting(id: any) {
    console.log('[MeetingsComponent] deleteMeeting(' + id + ')');
    this.meetings = this.meetings.filter(p => p.MeetingID !== id);
    
    return this.service.deleteMeeting(id);
  }
}
