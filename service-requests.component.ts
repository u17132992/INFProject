import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { ConstantsService } from './constants.service';

import { ServiceRequestModel } from './service-requests.model';
import { ServiceRequestsService } from './service-requests.service';

import { ServiceTypeModel } from './service-type.model';
import { ServiceTypeService } from './service-type.service';


import { PetParentModel } from './pet-parent.model';

import { SuburbModel } from './suburb.model';
import { SuburbsService } from './suburbs.service';

import { CityModel } from './city.model';
import { CitiesService } from './cities.service';

import { PetServiceInstructionModel } from './pet-service-instruction.model';
import { PetServiceInstructionService } from './pet-service-instruction.service';

import { PetModel } from './pet.model';
import { PetService } from './pet.service';

@Component({
  selector: 'app-service-requests',
  templateUrl: './service-requests.component.html',
  styleUrls: ['./service-requests.component.css']
})
export class ServiceRequestsComponent implements OnInit {
  currentpetparent: PetParentModel;

  servicerequests: ServiceRequestModel[];
  currentservicerequest: ServiceRequestModel;

  petlist: PetModel[];

  psilist: PetServiceInstructionModel[];
  currentpsi: PetServiceInstructionModel;

  suburbs: SuburbModel[];
  cities: CityModel[];
  stypes: ServiceTypeModel[];

  
  NoOfPanels = 4;
  selectedPanel = 1;

  
  isServiceRequestInitiated = false;

  constructor(private CONSTANTS: ConstantsService,
    private service: ServiceRequestsService,
    private petService: PetService,
    private psiService: PetServiceInstructionService,
    private suburbsService: SuburbsService,
    private citiesService: CitiesService,
    private stypeService: ServiceTypeService,
    private route: ActivatedRoute
  ) {
    this.currentpetparent = this.CONSTANTS.currentPPUser;
    console.log('[ServiceRequestsComponent] Using Parent ', this.currentpetparent);
  }

  ngOnInit(): void {
    console.log('[ServiceRequestsComponent | ngOnInit()] init started');
    this.currentservicerequest = new ServiceRequestModel();
    this.currentservicerequest.DateStart = new Date();
    this.currentservicerequest.DateEnd = new Date();

    
    this.service.findServiceRequestsForParent(this.currentpetparent.PetParentID)
      .then(res => {
        this.servicerequests = res;

        console.log('[ServiceRequestComponent] Loading Pets for parent : this.currentpetparent.PetParentID');

      })
      .catch(srerr => console.log('[ServiceRequestComponent] Error when loading Service Requests', srerr));

    this.petService.findPetsForParent(this.currentpetparent.PetParentID)
      .then(pets => {
        console.log('Found Pets for parent: ', pets);
        this.petlist = pets;
      })
      .catch(err => console.log('[ServiceRequestComponent] Error when finding Pets for Parent', err));


    
    this.suburbsService.getSuburbs()
      .then(res2 => {
        console.log(res2);
        this.suburbs = res2;
      })
      .catch(err => console.log('[ServiceRequestComponent] Error when loading suburbs', err));

    
    this.citiesService.getCities()
      .then(res2 => {
        console.log(res2);
        this.cities = res2;
      })
      .catch(err => console.log('[ServiceRequestComponent] Error when loading cities', err));

    
    this.stypeService.getServiceTypes()
      .then(res3 => {
        console.log(res3);
        this.stypes = res3;
      })
      .catch(err => console.log('[ServiceRequestComponent] Error when loading service types', err));

    this.currentpsi = new PetServiceInstructionModel();

  }

  
  
  
  
  
  
  
  


  findServicerequests() {
    console.log('[ServiceRequestComponent] findServicerequests');
    this.service.findServiceRequests(this.currentservicerequest.RequestID)
      .then(res => {
        this.servicerequests = res;
      })
      .catch(err => console.log('error', err));
  }

  findNextID(): number { 
    console.log('[ServiceRequestComponent] findNextID');

    
    
    
    
    return 8;
  }

  newServiceRequest() {
    console.log('[ServiceRequestsComponent | newServiceRequest]');

    this.currentservicerequest = new ServiceRequestModel();
    this.currentpsi = new PetServiceInstructionModel();

    
    
    console.log('Using PP:', this.currentpetparent);

    this.currentservicerequest.PetParentID = this.currentpetparent.PetParentID;

    console.log('RequestID allocated:' + this.currentservicerequest.RequestID);

    this.isServiceRequestInitiated = true;

    
    
    

    
    
    
    
    

    
    
    
    
    
    

    this.navigateForward();
    
  }



  createServiceRequest() {
    console.log('[ServiceRequestsComponent | createServiceRequest]');
    console.log(this.currentservicerequest);

    
    
    console.log('Using PP:', this.currentpetparent);
    console.log('RequestID:' + this.currentservicerequest.RequestID);

    this.currentservicerequest.PetParentID = this.currentpetparent.PetParentID;
    this.currentservicerequest.StatusDescription = 'CAPTURED';

    this.service.createServiceRequest(this.currentservicerequest)
      .then(res => {
        this.currentservicerequest = res;

        
        
        
        
        
      });
    this.navigateForward();
  }

  updateServiceRequest() {
    console.log('[ServiceRequestsComponent] in updateServiceRequest(). Updating SR:', this.currentservicerequest);

    if (this.currentservicerequest.RequestID === undefined) {
      this.currentservicerequest.StatusDescription = 'CAPTURED';
      this.createServiceRequest();
    } else {
      console.log('[ServiceRequestsComponent | updateServiceRequest] Updating ' + this.psilist.length + ' PSI');

      this.service.updateServiceRequest(this.currentservicerequest)
        .then(res => {
          this.currentservicerequest = res;
        });

      this.psilist.forEach(psii => {
        psii.RequestID = this.currentservicerequest.RequestID;
        this.psiService.updatePSI(psii);
      });
    }
    
  }

  deleteServiceRequest(id: any) {
    console.log('[ServiceRequestsComponent] deleteServiceRequest(' + id + ')');
    this.servicerequests = this.servicerequests.filter(p => p.RequestID !== id);
    

    return this.service.deleteServiceRequest(id); 
    
    
  }

  selectServiceRequest(id: any) {
    console.log('[ServiceRequestsComponent | selectServiceRequest] (' + id + ')');

    this.servicerequests.forEach(r => {
      
      if (r.RequestID === id) {
        console.log('found ', r);
        this.currentservicerequest = (r as ServiceRequestModel);
        this.currentservicerequest.RequestID = id;
      }

      
      console.log('[ServiceRequestsComponent | selectServiceRequest] Loading PSI for SR (' + id + ')');
      this.psiService.findPSIForServiceRequest(this.currentservicerequest.RequestID)
        .then(psi => {
          this.psilist = psi;

          

          
          
          
          

          
          
          
          
          

          
          
          
          
          
          
          
          
          
          
        }).catch(err => console.log('[ServiceRequestComponent] Error when loading PSI', err));

      this.navigateForward();
      return;
    });
  }

 
  newPSI() {
    console.log('[ServiceRequestsComponent | newServiceRequest]');

    this.currentpsi = new PetServiceInstructionModel();
  }

  createPSI() {
    console.log('[ServiceRequestsComponent | createPSI] for ' + this.currentservicerequest.RequestID);

    console.log('[createPSI] for RequestID:' + this.currentservicerequest.RequestID);
    console.log('[createPSI] PetID (this.currentpsi):' + this.currentpsi.PetID);

    this.currentpsi.RequestID = this.currentservicerequest.RequestID;
    this.currentpsi.PetParentID = this.currentpetparent.PetParentID;
    this.currentpsi.PetID = this.currentpsi.PetID;

    


    this.psiService.createPSI(this.currentpsi).then(res => {
      if (this.currentservicerequest.StatusDescription !== 'CAPTURED_WITH_PETS') {
        this.currentservicerequest.StatusDescription = 'CAPTURED_WITH_PETS';
        this.service.updateServiceRequest(this.currentservicerequest);
      }
    });

    
    this.psiService.findPSIForServiceRequest(this.currentservicerequest.RequestID)
      .then(res2 => {
        this.psilist = res2;
      })
      .catch(srerr => console.log('[ServiceRequestComponent] Error when loading Service Requests', srerr));
  }

  selectPSI(id: any) {
    console.log('[ServiceRequests | selectPSI, ID:]' + id + ')');

    this.psilist.forEach(r => {
      
      if (r.PetServiceInstructionID === id) {
        console.log('selected PSI ', r);
        this.currentpsi = (r as PetServiceInstructionModel);
      }
      return;
    });
  }

  updatePSI() {
    console.log('[ServiceRequests | updatePSI()');
    return this.psiService.updatePSI(this.currentpsi); 
  }

  deletePSI(id: any) {
    console.log('[PSIsComponent] deletePSI(' + id + ')');
    this.psilist = this.psilist.filter(p => p.PetServiceInstructionID !== id);
    

    return this.psiService.deletePSI(id);
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