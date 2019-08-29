import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { PetSitterStatusModel } from './pet-sitter-status.model';
import { PetSitterStatusService } from './pet-sitter-status.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pet-sitter-status',
  templateUrl: './pet-sitter-status.component.html',
  styleUrls: ['./pet-sitter-status.component.css']
})
export class PetSitterStatusesComponent implements OnInit {

  petsitterstatuses: PetSitterStatusModel[];
  currentpetsitterstatus: PetSitterStatusModel;

  constructor(
    private service: PetSitterStatusService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[PetSitterStatusesComponent] ngOnInit()');
    this.currentpetsitterstatus = new PetSitterStatusModel();

    this.service.getPetSitterStatuses()
      .then(res => {
        // this.service.getsomethingelse(...)
        // .then(
          // this.petsitterstatuses = res;
        // )

        this.petsitterstatuses = res;
        console.log('[PetSitterStatusesComponent | ngOnInit]');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[PetSitterStatusesComponent | ngOnInit] data:', data);
      if (data) {
        this.petsitterstatuses = data.petsitterstatuses;
        this.currentpetsitterstatus = new PetSitterStatusModel();
      }
    });
  }

  findPetSitterStatuses() {
    console.log('[PetSitterStatusesComponent | findPetSitterStatuses]');
    this.service.findPetSitterStatuses(this.currentpetsitterstatus.SitterStatusID)
      .then(res => {
        this.petsitterstatuses = res;
       })
      .catch(err => console.log('error', err));
  }

  createPetSitterStatus() {
    console.log('[PetSitterStatusesComponent] in createPetSitterStatus()');
    return this.service.createPetSitterStatus(this.currentpetsitterstatus);
  }

  selectPetSitterStatus(id: any) {
    console.log('[PetSitterStatusesComponent] in selectselectPetSitterStatus(' + id + ')');

    this.petsitterstatuses.forEach(r => {
      if (r.SitterStatusID === id) {
        console.log('found ', r);
        this.currentpetsitterstatus = (r as PetSitterStatusModel);
        this.currentpetsitterstatus.SitterStatusID = id;
      }
      return;
    });
  }

  updatePetSitterStatus() {
    console.log('[PetSitterStatusesComponent] in updatePetSitterStatus()');
    return this.service.updatePetSitterStatus(this.currentpetsitterstatus);
  }

  deletePetSitterStatus(id: any) {
    console.log('[PetSitterStatusesComponent] deletePetSitterStatus(' + id + ')');
    this.petsitterstatuses = this.petsitterstatuses.filter(p => p.SitterStatusID !== id);
    // update the MODEL, so that screen will update via data-binding
    return this.service.deletePetSitterStatus(id);
  }
}
