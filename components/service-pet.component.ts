import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { ServicePetModel } from './service-pet.model';
import { ServicePetService } from './service-pet.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-servicepet',
  templateUrl: './service-pet.component.html',
  styleUrls: ['./service-pet.component.css']
})
export class ServicePetsComponent implements OnInit {

  servicepets: ServicePetModel[];
  currentservicepet: ServicePetModel;

  constructor(
    private service: ServicePetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[ServicePetsComponent] ngOnInit()');
    this.currentservicepet = new ServicePetModel();

    this.service.getServicePets()
      .then(res => {
        
        
          
        

        this.servicepets = res;
        console.log('[ServicePetsComponent | ngOnInit]');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[ServicePetsComponent | ngOnInit data:', data);
      if (data) {
        this.servicepets = data.servicepets; 
        this.currentservicepet = new ServicePetModel(); 
      }
    });
  }

  findServicePets() {
    console.log('[service-pet.component] findServicePets');
    this.service.findServicePets(this.currentservicepet.PetID)
      .then(res => {
        this.servicepets = res;
       })
      .catch(err => console.log('error', err));
  }

  createServicePet() {
    console.log('[ServicePetsComponent] in createServicePet()');
    
    return this.service.createServicePet(this.currentservicepet); 
  }

  selectServicePet(id: any) {
    console.log('[ServicePetsComponent] in selectselectServicePet(' + id + ')');

    this.servicepets.forEach(r => {
      if (r.PetID === id) {
        console.log('found ', r);
        this.currentservicepet = (r as ServicePetModel);
        this.currentservicepet.PetID = id;
      }
      return;
    });
  }

  updateServicePet() {
    console.log('[ServicePetsComponent] in updateServicePet()');
    return this.service.updateServicePet(this.currentservicepet); 
  }

  deleteServicePet(id: any) {
    console.log('[ServicePetsComponent] deleteServicePet(' + id + ')');
    this.servicepets = this.servicepets.filter(p => p.PetID !== id);
    
    return this.service.deleteServicePet(id);
  }
}
