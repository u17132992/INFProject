import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
// import {ToastrService} from 'ngx-toastr';
import { PetParentModel } from './pet-parent.model';
import { PetParentsService } from './pet-parents.service';
// import {Router} from '@angular/router';

// other Entities referenced
import { TitleModel } from './title.model';
import { TitlesService } from './title.service';

import { SuburbModel } from './suburb.model';
import { SuburbsService } from './suburbs.service';

// import { ConstantsService } from './constants.service';


@Component({
  selector: 'app-pet-parent',
  templateUrl: './pet-parent.component.html',
  styleUrls: ['./pet-parent.component.css']
})

export class PetParentsComponent implements OnInit {
  // userRoleTag: string;

  petparents: PetParentModel[]; 
  petparent: PetParentModel;
  suburbs: SuburbModel[];
  titles: TitleModel[];

  constructor(
    private service: PetParentsService,
    private suburbsService: SuburbsService,
    private titleService: TitlesService,
    private route: ActivatedRoute,
    // private CONSTANTS: ConstantsService
    // private toastr: ToastrService,
    // private router: Router
  ) {
    // this.userRoleTag = this.CONSTANTS.userRoleTag;
  }

  ngOnInit(): void {

    console.log('[pet-parent.component.ts] ngOnInit()');
    this.service.getPetParents()
      .then(res => {
        this.petparents = res;
      })
      .catch(err => console.log('[pet-parent.component.ts] Error when loading parents', err));

    this.suburbsService.getSuburbs()
      .then(res2 => {
        this.suburbs = res2;
      })
      .catch(err => console.log('[pet-parent.component.ts] Error when loading suburbs', err));

    this.titleService.getTitles()
      .then(res3 => {
        this.titles = res3;
      })
      .catch(err => console.log('[pet-parent.component.ts] Error when loading titles', err));

  }


  findPetParent(id: number) {
    console.log('[PetParentComponent] findPetParent:' + this.petparent.PetParentID);
    this.service.findPetParent(id);
    // this.petparents = this.petparents.filter(p => p.PetParentID != p.PetParentID);
    this.petparents = this.petparents.filter(p => p.PetParentID === id);
  }

  createPetParent() {
    console.log('[PetParentComponent] in createPetParent()');
    this.service.createPetParent(this.petparent);

    const id = this.petparent.PetParentID;
    this.petparents = this.petparents.filter(p => p.PetParentID === id);
    // },
    // error => {
    //   console.log(error);
    //   if(error.error.error.code) {
    //     this.toastr.error("A book with this name already exists!", "Error");
    //   } else if(error.error.error.price.path == 'price') {
    //     this.toastr.error("Price should be in numbers", "Error");
    //   } else if(error.error.error.isbn.path == 'isbn') {
    //     this.toastr.error("ISBN should be in numbers", "Error");
    //   } else {
    //     this.toastr.error(error.error.message, "Error");
    //   }
  }

  selectPetParent(id: any) {
    console.log('[PetParentComponent] in selectPetParent(' + id + ')');
    this.petparents = this.petparents.filter(p => p.PetParentID = id);
    this.service.findPetParent(id);
  }

  updatePetParent() {
    console.log('[PetParentComponent] in updatePetParent()');
    this.petparents = this.petparents.filter(p => p.PetParentID = p.PetParentID);
    this.service.createPetParent(this.petparent); 
  }

  deletePetParent(id: any) {
    console.log('[pet-parents.component.ts] deletePetParent(' + id + ')');
    this.petparents = this.petparents.filter(p => p.PetParentID !== id);
    // update the MODEL, so that screen will update via data-binding

    return this.service.deletePetParent(id);
    // return this.petparentApi.deleteById<Petparent>(petparentId)
    // .toPromise();
  }
}
