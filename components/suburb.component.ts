import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
import { ConstantsService } from './constants.service';


import { SuburbModel } from './suburb.model';
import { SuburbsService } from './suburbs.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-suburb',
  templateUrl: './suburb.component.html',
  styleUrls: ['./suburb.component.css']
})
export class SuburbsComponent implements OnInit {
  distFolderLocation: string;
  userRoleTag: string;

  suburbs: SuburbModel[];
  currentsuburb: SuburbModel;

  constructor(private CONSTANTS: ConstantsService,
              private service: SuburbsService,
              private route: ActivatedRoute
  ) {
    this.distFolderLocation = this.CONSTANTS.distFolderLocation;
    this.userRoleTag = this.CONSTANTS.userRoleTag;
  }

  ngOnInit(): void {
    console.log('[SuburbsComponent] ngOnInit()');
    this.currentsuburb = new SuburbModel();

    this.service.getSuburbs()
      .then(res => {
        
        
        
        

        this.suburbs = res;
        console.log('[SuburbsComponent] ngOnInit())');
      })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[suburb.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.suburbs = data.suburbs; 
        this.currentsuburb = new SuburbModel(); 
      }
    });
  }

  findSuburbs() {
    console.log('[suburb.component] findSuburbs');
    this.service.findSuburbs(this.currentsuburb.SuburbID)
      .then(res => {
        this.suburbs = res;
      })
      .catch(err => console.log('error', err));
  }

  createSuburb() {
    console.log('[SuburbsComponent] in createSuburb()');
    
    return this.service.createSuburb(this.currentsuburb); 
  }

  selectSuburb(id: any) {
    console.log('[SuburbsComponent] in selectselectSuburb(' + id + ')');

    this.suburbs.forEach(r => {
      
      if (r.SuburbID === id) {
        console.log('found ', r);
        this.currentsuburb = (r as SuburbModel);
        this.currentsuburb.SuburbID = id;
      }
      return;
    });
  }

  updateSuburb() {
    console.log('[SuburbsComponent] in updateSuburb()');
    return this.service.updateSuburb(this.currentsuburb); 
  }

  deleteSuburb(id: any) {
    console.log('[SuburbsComponent] deleteSuburb(' + id + ')');
    this.suburbs = this.suburbs.filter(p => p.SuburbID !== id);
    

    return this.service.deleteSuburb(id); 
    
    
  }
}
