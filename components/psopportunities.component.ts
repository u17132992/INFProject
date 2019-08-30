import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ParamMap } from '@angular/router'; 
import { ConstantsService } from './constants.service';

import { ServiceRequestModel } from './service-requests.model';
import { ServiceRequestsService } from './service-requests.service';


import { SuburbModel } from './suburb.model';
import { SuburbsService } from './suburbs.service';

import { CityModel } from './city.model';
import { CitiesService } from './cities.service';

import { ServiceTypeModel } from './service-type.model';
import { ServiceTypeService } from './service-type.service';

import { PetServiceInstructionModel } from './pet-service-instruction.model';
import { PetServiceInstructionService } from './pet-service-instruction.service';

import { PotentialSitterModel } from './potential-sitter.model';
import { PotentialSitterService } from './potential-sitter.service';

import { SystemUserModel } from './systemuser.model';
import { SystemUsersService } from './systemuser.service';

import { PetSitterModel } from './pet-sitter.model';
import { PetSittersService } from './pet-sitters.service';



@Component({
  selector: 'app-psopportunities',
  templateUrl: './psopportunities.component.html',
  styleUrls: ['./psopportunities.component.css']
})
export class PSOpportunitiesComponent implements OnInit {
  
  
  currentSysUserID: number;
  currentSysUser: SystemUserModel;
  currentpetsitter: PetSitterModel;

  psopportunities: ServiceRequestModel[];
  selectedopp: ServiceRequestModel;
  
  petserviceinstructions: PetServiceInstructionModel[];

  suburbs: SuburbModel[];
  cities: CityModel[];
  stypes: ServiceTypeModel[];

  
  NoOfPanels = 3;
  selectedPanel = 1;

  constructor(
    private CONSTANTS: ConstantsService,
    private service: ServiceRequestsService,
    private suburbsService: SuburbsService,
    private citiesService: CitiesService,
    private stypeService: ServiceTypeService,
    private petserviceinstrService: PetServiceInstructionService,
    private potentialSitterService: PotentialSitterService,
    private petSitterService: PetSittersService,
    private suService: SystemUsersService,
    private route: ActivatedRoute
  ) {
    this.currentpetsitter = this.CONSTANTS.currentPSUser;
    this.currentSysUser = this.CONSTANTS.currentSysUser;
    console.log('[ServiceRequestsComponent] Using Sitter ', this.currentpetsitter);
  }

  ngOnInit(): void { 
    console.log('[PSOpportunitiesComponent] ngOnInit()');

    
    this.selectedopp = new ServiceRequestModel();

    this.service.findServiceRequestsSTATUS('CAPTURED_WITH_PETS')
      .then(res => {
        this.psopportunities = res;
        

        this.suburbsService.getSuburbs()
          .then(res2 => {
            console.log(res2);
            this.suburbs = res2;
          })
          .catch(err => console.log('[PSOpportunitiesComponent] Error when loading suburbs', err));

        this.citiesService.getCities()
          .then(res2 => {
            console.log(res2);
            this.cities = res2;
          })
          .catch(err => console.log('[PSOpportunitiesComponent] Error when loading cities', err));

        this.stypeService.getServiceTypes()
          .then(res3 => {
            console.log(res3);
            this.stypes = res3;
          })
          .catch(err => console.log('[PSOpportunitiesComponent] Error when loading service types', err));
      })
      .catch(err => console.log('[PSOpportunitiesComponent] Error when loading Pet Sitting Opportunities', err));

    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[OpportunityComponent | ngOnInit()] data:', data);
      if (data) {
        this.psopportunities = data.psopportunities; 
      }
    });
  }

  findOpportunities() {
    console.log('[OpportunityComponent] findOpportunities');
    this.service.getServiceRequests()
      .then(res => {
        this.psopportunities = res;
      })
      .catch(err => console.log('error', err));
  }

  selectOpportunity(id: any) {
    console.log('[OpportunityComponent] | selectOpportunity (' + id + ')');

    this.psopportunities.forEach(r => {
      
      if (r.RequestID === id) {
        this.selectedopp = (r as ServiceRequestModel);
        this.selectedopp.RequestID = id;
      }

      
      console.log('[PSOpportunitiesComponent] Loading PSI for ServiceReq (Opp)' + id);

      this.petserviceinstrService.findPSIForServiceRequest(id)
        .then(psi => {
          console.log(psi);
          this.petserviceinstructions = psi;

          this.selectedPanel = 2;
        })
        .catch(err => console.log('[PSOpportunitiesComponent] Error when loading PSI for request', err));

    });
  }

  applyForOpportunity(oppId) {
    console.log('[PSOpportunities | applyForOpportunity]' + oppId);

    const app = new PotentialSitterModel();
    app.SitterName = this.currentpetsitter.PetSitterName;
    app.SitterSurname = this.currentpetsitter.PetSitterSurname;
    app.PetSitterID = this.currentpetsitter.PetSitterID;
    app.RequestID = this.selectedopp.RequestID;
    app.PetParentID = this.selectedopp.PetParentID;

    
    console.log('Search cities...', this.cities);
    this.cities.forEach(r => {
      if (r.CityID === this.currentpetsitter.CityId) {
        console.log('found city', r);
        const tCity = (r as CityModel);
        app.SitterCity = tCity.CityName;
      }
    })
    
    this.selectedopp.StatusDescription = 'APPLIED';
    this.service.updateServiceRequest(this.selectedopp)
    .then (res => {
      console.log('[PSOpportunities | applyForOpportunity] Opportunity APPLIED FOR');

      
      this.service.findServiceRequestsSTATUS('CREATED_WITH_PETS')
      .then(res2 => {
        this.psopportunities = res2;
      })
      .catch(srerr => console.log('[ServiceRequestComponent] Error when loading avaiable Service Requests', srerr));

      this.navigateStart();

    })
    ;

    this.potentialSitterService.createPotentialSitter(app)
      .then(res => {
        console.log('Created new PotentialSitter: ', res);
      })
      .catch(err => {
        console.log('Problem when creating new Potential Sitter!', err);
      });
  }

  updateOpportunity() {
    console.log('[OpportunityComponent] | updateOpportunity()');
    return this.service.updateServiceRequest(this.selectedopp); 
  }

  deleteOpportunity(id: any) {
    console.log('[OpportunityComponent] deleteOpportunity(' + id + ')');
    this.psopportunities = this.psopportunities.filter(p => p.RequestID !== id);
    

    return this.service.deleteServiceRequest(id); 
    
    
  }

  navigateStart() {
    this.selectedPanel = 1;
    console.log('[PSOpp/navigateStart:]' + this. selectedPanel);
  }

  navigateForward() {
    this.selectedPanel = this.selectedPanel + 1;
    if (this.selectedPanel > this.NoOfPanels) {
      this.selectedPanel = 1;
    }
    console.log('[PSOpp/navigateFW:]' + this. selectedPanel);
  }

  navigateBackward() {
    if (this.selectedPanel > 1) {
      this.selectedPanel = this.selectedPanel - 1;
    }
    console.log('[PSOpp/navigateBW:]' + this. selectedPanel);
  }
}
