import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { PetTypeModel } from './pet-type.model';
import { PetTypeService } from './pet-type.service';

@Component({
  selector: 'app-pet-type',
  templateUrl: './pet-type.component.html',
  styleUrls: ['./pet-type.component.css']
})
export class PetTypesComponent implements OnInit {
  pettypes: PetTypeModel[];
  currentpettype: PetTypeModel;

  constructor(
    private service: PetTypeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[PetTypesComponent] ngOnInit()');
    this.currentpettype = new PetTypeModel();

    this.service.getPetTypes()
      .then(res => {
        this.pettypes = res;
      })
      .catch(err => console.log('[PetTypesComponent] Error when loading sitters', err));

    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[PetTypeComponent | ngOnInit()] data:', data);
      if (data) {
        this.pettypes = data.pettypes;
      }
    });
  }

  findPetTypes() {
    console.log('[PetTypeComponent] findPetTypes');
    this.service.getPetTypes()
      .then(res => {
        this.pettypes = res;
      })
      .catch(err => console.log('error', err));
  }

  createPetType() {
    console.log('[PetTypeComponent] in createPetType()');

    this.service.createPetType(this.currentpettype);

    const id = this.currentpettype.PetTypeID;
    console.log('[PetTypeComponent] switching to ID:' + id);
    this.pettypes = this.pettypes.filter(p => p.PetTypeID === id);

  }

  selectPetType(id: any) {
    console.log('[PetTypeComponent] | selectPetType(' + id + ')');

    this.pettypes.forEach(r => {
      // console.log('checking ', p);
      if (r.PetTypeID === id) {
        console.log('found ', r);
        this.currentpettype = (r as PetTypeModel);
        this.currentpettype.PetTypeID = id;
      }
      return;
    });
  }

  updatePetType() {
    console.log('[PetTypeComponent] | updatePetType()');
    return this.service.updatePetType(this.currentpettype);
  }

  deletePetType(id: any) {
    console.log('[PetTypeComponent] deletePetType(' + id + ')');
    this.pettypes = this.pettypes.filter(p => p.PetTypeID !== id);
    return this.service.deletePetType(id);
  }
}

