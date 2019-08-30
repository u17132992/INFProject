import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
import { PotentialSitterModel } from './potential-sitter.model';
import { PotentialSitterService } from './potential-sitter.service';

@Component({
  selector: 'app-potential-sitter',
  templateUrl: './potential-sitter.component.html',
  styleUrls: ['./potential-sitter.component.css']
})
export class PotentialSittersComponent implements OnInit {

  potentialsitters: PotentialSitterModel[];
  currentpotentialsitters: PotentialSitterModel;

  constructor(
    private service: PotentialSitterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[PotentialSittersComponent] ngOnInit()');
    this.currentpotentialsitters = new PotentialSitterModel();

    this.service.getPotentialSitters()
      .then(res => {
      
        this.potentialsitters = res;
        console.log('[PotentialSittersComponent] ngOnInit())');
      })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[potentialsitterscomponent|ngOnInit()] data:', data);
      if (data) {
        this.potentialsitters = data.potentialsitters; 
        this.currentpotentialsitters = new PotentialSitterModel(); 
      }
    });
  }

  findPotentialSitters() {
    console.log('[suburb.component] findPotentialSitters');
    this.service.findPotentialSitters(this.currentpotentialsitters.SitterID)
      .then(res => {
        this.potentialsitters = res;
      })
      .catch(err => console.log('error', err));
  }

  createPotentialSitter() {
    console.log('[PotentialSittersComponent] in createPotentialSitter()');
    
    return this.service.createPotentialSitter(this.currentpotentialsitters); 
  }

  selectPotentialSitter(id: any) {
    console.log('[PotentialSittersComponent] in selectselectPotentialSitter(' + id + ')');

    this.potentialsitters.forEach(r => {
      
      if (r.PetSitterID === id) {
        console.log('found ', r);
        this.currentpotentialsitters = (r as PotentialSitterModel);
        this.currentpotentialsitters.PetSitterID = id;
      }
      return;
    });
  }

  updatePotentialSitter() {
    console.log('[PotentialSittersComponent] in updatePotentialSitter()');
    return this.service.updatePotentialSitter(this.currentpotentialsitters); 
  }

  deletePotentialSitter(id: any) {
    console.log('[PotentialSittersComponent] deletePotentialSitter(' + id + ')');
    this.potentialsitters = this.potentialsitters.filter(p => p.PetSitterID !== id);
    

    return this.service.deletePotentialSitter(id);
  }
}
