import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { PetupdateProvider }  from '../../providers/petupdate/petupdate'
import { PetUpdate } from '../../app/petupdate'; 


@IonicPage()
@Component({
  selector: 'page-parentupdates',
  templateUrl: 'parentupdates.html',
})
export class ParentupdatesPage {
  petupdateForm: any;  
  allPetUpdates: Observable<PetUpdate[]>;  
  petupdateIdUpdate = null;  
  massage = null;  
  constructor(private Formbulider: FormBuilder, private petupdateProvider:PetupdateProvider) {
  }
  ngOnInit() {this.petupdateForm = this.Formbulider.group({  
    UpdateDate: new FormControl('', Validators.required),  
    NameDescription: new FormControl('', Validators.required),   
    FeedingStatus: new FormControl('', Validators.required),   
    WalkingStatus: new FormControl('', Validators.required),  
    GroomedStatus: new FormControl('', Validators.required)
    
  });  
  this.loadAllPetUpdates();  
}  
loadAllPetUpdates() {  
  this.allPetUpdates = this.petupdateProvider.getAllPetUpdate();  
}  
}