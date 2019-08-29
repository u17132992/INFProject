import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
import { PetSitterModel } from './pet-sitter.model';
import { PetSittersService } from './pet-sitters.service';


import { SuburbModel } from './suburb.model';
import { SuburbsService } from './suburbs.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pet-sitter',
  templateUrl: './pet-sitter.component.html',
  styleUrls: ['./pet-sitter.component.css']
})
export class PetSittersComponent implements OnInit {
  genders: Gender[];

  petsitters: PetSitterModel[];
  currentpetsitter: PetSitterModel;

  suburbs: SuburbModel[];

  constructor(
    private service: PetSittersService,
    private suburbsService: SuburbsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    console.log('[PetSittersComponent] ngOnInit()');
    this.currentpetsitter = new PetSitterModel();

    this.genders = [
      { value: 'M', viewValue: 'Male' },
      { value: 'F', viewValue: 'Female' }
    ];

    this.service.getPetSitters()
      .then(res => {
        this.petsitters = res;
        

        this.suburbsService.getSuburbs()
          .then(res2 => {
            console.log(res2);
            this.suburbs = res2;
          })
          .catch(err => console.log('[PetSittersComponent] Error when loading suburbs', err));
      })
      .catch(err => console.log('[PetSittersComponent] Error when loading sitters', err));

    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[PetSitterComponent | ngOnInit()] data:', data);
      if (data) {
        this.petsitters = data.petsitters; 
      }
    });
  }

  findPetSitters() {
    console.log('[PetSitterComponent] findPetSitters');
    this.service.findPetSitters(this.currentpetsitter.PetSitterID)
      .then(res => {
        this.petsitters = res;
      })
      .catch(err => console.log('error', err));
  }

  createPetSitter() {
    console.log('[PetSitterComponent] in createPetSitter()');
    
    return this.service.createPetSitter(this.currentpetsitter); 
  }

  selectPetSitter(id: any) {
    console.log('[PetSitterComponent] | selectPetSitter(' + id + ')');

    

    this.petsitters.forEach(r => {
      
      if (r.PetSitterID === id) {
        console.log('found ', r);
        this.currentpetsitter = (r as PetSitterModel);
        this.currentpetsitter.PetSitterID = id;
      }
      return;
    });
  }

  updatePetSitter() {
    console.log('[PetSitterComponent] | updatePetSitter()');
    return this.service.updatePetSitter(this.currentpetsitter); 
  }

  deletePetSitter(id: any) {
    console.log('[PetSitterComponent] deletePetSitter(' + id + ')');
    this.petsitters = this.petsitters.filter(p => p.PetSitterID !== id);
    

    return this.service.deletePetSitter(id); 
    
    
  }
}
