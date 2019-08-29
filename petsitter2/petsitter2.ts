import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { PetsitterProvider } from '../../providers/petsitter/petsitter';  
import { PetSitter } from '../../app/petsitter'; 

@IonicPage()
@Component({
  selector: 'page-petsitter2',
  templateUrl: 'petsitter2.html',
}) 
export class Petsitter2Page {
  dataSaved = false;  
  petsitterForm: any;  
  allPetSitters: Observable<PetSitter[]>;  
  petsitterIdUpdate = null;  
  massage = null;  
  constructor(private Formbulider: FormBuilder, private petsitterProvider:PetsitterProvider) { }  

  ngOnInit() {this.petsitterForm = this.Formbulider.group({  
    PetSitterName: new FormControl('', Validators.required),  
    PetSitterSurname: new FormControl('', Validators.required),   
    PetSitterEmailAddress: new FormControl('', Validators.required),   
    PetSitterPhoneNum: new FormControl('', Validators.required),  
    PetSitterAddress: new FormControl('', Validators.required),
    About: new FormControl('', Validators.required),
    Area: new FormControl('', Validators.required)
    
    
  });  
  this.loadAllPetSitters();  
}  
loadAllPetSitters() {  
  this.allPetSitters = this.petsitterProvider.getAllPetSitter();  
}  
onFormSubmit() {  
  this.dataSaved = false;  
  const petsitter = this.petsitterForm.value;  
  this.CreatePetSitter(petsitter);  
  this.petsitterForm.reset();  
}  
loadPetSitterToEdit(petsitterId: string) {  
  this.petsitterProvider.getPetSitterById(petsitterId).subscribe(petsitter=> {  
    this.massage = null;  
    this.dataSaved = false;  
    this.petsitterIdUpdate = petsitter.PetSitterID;  
    this.petsitterForm.controls['PetSitterName'].setValue(petsitter.PetSitterName);  
   this.petsitterForm.controls['PetSitterSurname'].setValue(petsitter.PetSitterSurname);  
    this.petsitterForm.controls['PetSitterEmailAddress'].setValue(petsitter.PetSitterEmailAddress);  
    this.petsitterForm.controls['PetSitterPhoneNum'].setValue(petsitter.PetSitterPhoneNum);  
    this.petsitterForm.controls['PetSitterAddress'].setValue(petsitter.PetSitterAddress);  
    this.petsitterForm.controls['About'].setValue(petsitter.About); 
    this.petsitterForm.controls['Area'].setValue(petsitter.Area); 
  });  

}  
CreatePetSitter(petsitter: PetSitter) {  
  if (this.petsitterIdUpdate == null) {  
    this.petsitterProvider.createPetSitter(petsitter).subscribe(  
      () => {  
        this.dataSaved = true;  
        this.massage = 'Record saved Successfully';  
        this.loadAllPetSitters();  
        this.petsitterIdUpdate = null;  
        this.petsitterForm.reset();  
      }   
    );  
  } else {  
    petsitter.PetSitterID = this.petsitterIdUpdate;  
    this.petsitterProvider.updatePetSitter(petsitter).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Change Success';  
      this.loadAllPetSitters();  
      this.petsitterIdUpdate = null;  
      this.petsitterForm.reset();  
    });  
  }  
}   
deletePetSitter(petsitterId: string) {  
  if (confirm("Are you sure you want to delete this ?")) {   
  this.petsitterProvider.deletePetSitterById(petsitterId).subscribe(() => {  
    this.dataSaved = true;  
    this.massage = 'Record Deleted Succefully';  
    this.loadAllPetSitters();  
    this.petsitterIdUpdate = null;  
    this.petsitterForm.reset();  

  });  
}  
}  
resetForm() {  
  this.petsitterForm.reset();  
  this.massage = null;  
  this.dataSaved = false;  
}  
}  
