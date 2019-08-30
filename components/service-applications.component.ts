import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { ConstantsService } from './constants.service';

import { ServiceRequestModel } from './service-requests.model';
import { ServiceRequestsService } from './service-requests.service';

import { PotentialSitterModel } from './potential-sitter.model';
import { PotentialSitterService } from './potential-sitter.service';

import { PetSitterModel } from './pet-sitter.model';
import { PetSittersService } from './pet-sitters.service';

import { PetParentModel } from './pet-parent.model';
import { MeetingModel } from './meeting.model';

@Component({
  selector: 'app-service-applications',
  templateUrl: './service-applications.component.html',
  styleUrls: ['./service-applications.component.css']
})
export class ServiceApplicantsComponent implements OnInit {
  currentpetparent: PetParentModel;
  currentsitter: PetSitterModel;

  potsitters: PotentialSitterModel[];
  currentpotsitter: PotentialSitterModel;

  servicerequests: ServiceRequestModel[];
  currentservicerequest: ServiceRequestModel;

  currentmeeting: MeetingModel;

  
  NoOfPanels = 3;
  selectedPanel = 1;

  
  

  constructor(private CONSTANTS: ConstantsService,
    private petsitterservice: PetSittersService,
    private potentialsitterservice: PotentialSitterService,
    private servicerequestservice: ServiceRequestsService,
    private route: ActivatedRoute
  ) {
    this.currentpetparent = this.CONSTANTS.currentPPUser;
    console.log('[ServiceApplicantsComponent] Using Parent ', this.currentpetparent);
  }

  ngOnInit(): void {
    this.currentpetparent = this.CONSTANTS.currentPPUser;
    console.log('[ServiceApplicantsComponent] Using Parent ', this.currentpetparent);

    console.log('[ServiceApplicantsComponent | ngOnInit()] init started');
    this.currentservicerequest = new ServiceRequestModel();

    
    
    
    
    

    

    
    

    

    
    this.potentialsitterservice.findPotentialSittersForParent(this.currentpetparent.PetParentID)
      .then(psitters => {
        console.log('Found Potential Sitters: ', psitters);
        this.potsitters = psitters;
      })
      .catch(err => console.log('[ServiceApplicantsComponent] Error when finding Potential Sitters', err));

    
    
    
    
    
    
    
    
  }
    
    

    
    

    
    
    

    

    

    

    
    
    



    
    
    

    
    
    
    

    
    

    
    
    

    
    
    
    
    
    
    
    

    
    

    
    
    
    
    

    
    
    
    

    
    
    
    
    
    
    

    
    
    
    

    
    
    
    

    selectViewApplicant(id: any) {
      console.log('[ServiceApplicantsComponent | selectViewApplicant] (' + id + ')');

      this.potsitters.forEach(p => {
        
        if (p.SitterID === id) {
          console.log('found ', p);
          this.currentpotsitter = (p as PotentialSitterModel);
          this.currentpotsitter.SitterID = id;
        }

        this.navigateForward();
        return;
      });
    }

    setupMeetings() {
      console.log('[ServiceRequestComponent | setupMeetings]');
    }

    navigateStart() {
      this.selectedPanel = 1;
      console.log('[PSOpp/navigateStart:]' + this.selectedPanel);
    }

    navigateForward() {
      this.selectedPanel = this.selectedPanel + 1;
      if (this.selectedPanel > this.NoOfPanels) {
        this.selectedPanel = 1;
      }
      console.log('[PSOpp/navigateFW:]' + this.selectedPanel);
    }

    navigateBackward() {
      if (this.selectedPanel > 1) {
        this.selectedPanel = this.selectedPanel - 1;
      }
      console.log('[PSOpp/navigateBW:]' + this.selectedPanel);
    }
   
    
    

    
    

    
    

    
    

    
    
    

    


    
    
    
    
    
    

    
    
    
    
    
    
    

    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    
    
    
    

    
    

    
  }