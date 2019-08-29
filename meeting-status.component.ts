import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { MeetingStatusModel } from './meeting-status.model';
import { MeetingStatusService } from './meeting-status.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-meeting-status',
  templateUrl: './meeting-status.component.html',
  styleUrls: ['./meeting-status.component.css']
})
export class MeetingstatusesComponent implements OnInit {

  meetingstatuses: MeetingStatusModel[];
  currentmeetingstatus: MeetingStatusModel;

  constructor(
    private service: MeetingStatusService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[MeetingstatusesComponent] ngOnInit()');
    this.currentmeetingstatus = new MeetingStatusModel();

    this.service.getMeetingStatus()
      .then(res => {
        
        
          
        

        this.meetingstatuses = res;
        console.log('[MeetingstatusesComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[meetingstatus.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.meetingstatuses = data.meetingstatuses; 
        this.currentmeetingstatus = new MeetingStatusModel(); 
      }
    });
  }

  findMeetingstatuses() {
    console.log('[meetingstatus.component] findMeetingstatuses');
    this.service.findMeetingStatus(this.currentmeetingstatus.MeeetingStatusID)
      .then(res => {
        this.meetingstatuses = res;
       })
      .catch(err => console.log('error', err));
  }

  createMeetingstatus() {
    console.log('[MeetingstatusesComponent] in createMeetingstatus()');
    
    return this.service.createMeetingStatus(this.currentmeetingstatus); 
  }

  selectMeetingstatus(id: any) {
    console.log('[MeetingstatusesComponent] in selectselectMeetingstatus(' + id + ')');

    this.meetingstatuses.forEach(r => {
      if (r.MeeetingStatusID === id) {
        console.log('found ', r);
        this.currentmeetingstatus = (r as MeetingStatusModel);
        this.currentmeetingstatus.MeeetingStatusID = id;
      }
      return;
    });
  }

  updateMeetingstatus() {
    console.log('[MeetingstatusesComponent] in updateMeetingstatus()');
    return this.service.updateMeetingStatus(this.currentmeetingstatus); 
  }

  deleteMeetingstatus(id: any) {
    console.log('[MeetingstatusesComponent] deleteMeetingstatus(' + id + ')');
    this.meetingstatuses = this.meetingstatuses.filter(p => p.MeeetingStatusID !== id);
    
    return this.service.deleteMeetingStatus(id);
  }
}
