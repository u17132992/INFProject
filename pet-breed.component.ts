import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { PetBreedModel } from './pet-breed.model';
import { PetBreedService } from './pet-breed.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pet-breed',
  templateUrl: './pet-breed.component.html',
  styleUrls: ['./pet-breed.component.css']
})
export class PetBreedsComponent implements OnInit {

  petbreeds: PetBreedModel[];
  currentpetbreed: PetBreedModel;

  constructor(
    private service: PetBreedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[PetBreedsComponent] ngOnInit()');
    this.currentpetbreed = new PetBreedModel();

    this.service.getPetBreeds()
      .then(res => {
        
        
          
        

        this.petbreeds = res;
        console.log('[PetBreedsComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[petbreed.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.petbreeds = data.petbreeds; 
        this.currentpetbreed = new PetBreedModel(); 
      }
    });
  }

  findPetBreeds() {
    console.log('[petbreed.component] findPetBreeds');
    this.service.findPetBreeds(this.currentpetbreed.PetBreedID)
      .then(res => {
        this.petbreeds = res;
       })
      .catch(err => console.log('error', err));
  }

  createPetBreed() {
    console.log('[PetBreedsComponent] in createPetBreed()');
    
    return this.service.createPetBreed(this.currentpetbreed); 
  }

  selectPetBreed(id: any) {
    console.log('[PetBreedsComponent] in selectselectPetBreed(' + id + ')');

    this.petbreeds.forEach(r => {
      if (r.PetBreedID === id) {
        console.log('found ', r);
        this.currentpetbreed = (r as PetBreedModel);
        this.currentpetbreed.PetBreedID = id;
      }
      return;
    });
  }

  updatePetBreed() {
    console.log('[PetBreedsComponent] in updatePetBreed()');
    return this.service.updatePetBreed(this.currentpetbreed); 
  }

  deletePetBreed(id: any) {
    console.log('[PetBreedsComponent] deletePetBreed(' + id + ')');
    this.petbreeds = this.petbreeds.filter(p => p.PetBreedID !== id);
    
    return this.service.deletePetBreed(id);
  }
}
