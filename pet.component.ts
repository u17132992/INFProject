import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
import { PetModel } from './pet.model';
import { PetService } from './pet.service';
import { PetTypeService } from './pet-type.service';
import { PetTypeModel } from './pet-type.model';
import { ConstantsService } from './constants.service';
import { PetParentModel } from './pet-parent.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetsComponent implements OnInit {
  pets: PetModel[];
  currentpet: PetModel;
  pettypes: PetTypeModel[];
  currentpetparent: PetParentModel;

  constructor(private CONSTANTS: ConstantsService,
    private service: PetService,
    private route: ActivatedRoute,
    private petTypesService: PetTypeService
  ) {
    this.currentpetparent = this.CONSTANTS.currentPPUser;
    console.log('[PetsComponent] Using Parent ', this.currentpetparent);
  }

  ngOnInit(): void {
    this.currentpet = new PetModel();

    
    
    console.log('[PetsComponent] Looking for pets for parent:' + this.currentpetparent.PetParentID);
    
    this.service.findPetsForParent(this.currentpetparent.PetParentID)
      .then(res => {
        console.log('[PetsComponent] Found pets for parent:', res);
        this.pets = res;

        console.log('[PetsComponent] Loading Pet types');
        this.petTypesService.getPetTypes()
          .then(res2 => {
            console.log(res2);
            this.pettypes = res2;
          })
          .catch(err => console.log('[PetsComponent] Error when loading pet types', err));

      })
      .catch(err => console.log('[PetsComponent] Error when loading sitters', err));

    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[PetComponent | ngOnInit()] data:', data);
      if (data) {
        this.pets = data.pets;
      }
    });
  }

  findPets() {
    console.log('[PetComponent] findPets');
    this.service.getPets()
      .then(res => {
        this.pets = res;
      })
      .catch(err => console.log('error', err));
  }

  createPet() {
    console.log('[PetComponent] in createPet()');
    this.currentpet.PetParentID = this.currentpetparent.PetParentID;
    return this.service.createPet(this.currentpet);
  }

  selectPet(id: any) {
    console.log('[PetComponent] | selectPet(' + id + ')');

    this.pets.forEach(r => {
      
      if (r.PetID === id) {
        console.log('found ', r);
        this.currentpet = (r as PetModel);
        this.currentpet.PetID = id;
      }
      return;
    });
  }

  updatePet() {
    console.log('[PetComponent] | updatePet()');
    return this.service.updatePet(this.currentpet);
  }

  deletePet(id: any) {
    console.log('[PetComponent] deletePet(' + id + ')');
    this.pets = this.pets.filter(p => p.PetID !== id);
    return this.service.deletePet(id);
  }
}

