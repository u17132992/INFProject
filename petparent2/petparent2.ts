import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { PetparentProvider }  from '../../providers/petparent/petparent'
import { PetParent } from '../../app/petparent';  


 
@IonicPage()
@Component({
  selector: 'page-petparent2',
  templateUrl: 'petparent2.html',
}) 
export class Petparent2Page{
   dataSaved = false;  
  petparentForm: any;  
  allPetParents: Observable<PetParent[]>;  
  petparentIdUpdate = null;  
  massage = null;  
  constructor(private Formbulider: FormBuilder, private petparentProvider:PetparentProvider) { }  

  ngOnInit() {this.petparentForm = this.Formbulider.group({  
    Name: new FormControl('', Validators.required),  
    Surname: new FormControl('', Validators.required),   
    EmailAddress: new FormControl('', Validators.required),   
    PhoneNr: new FormControl('', Validators.required),  
    ParentAddress: new FormControl('', Validators.required)
    
  });  
  this.loadAllPetParents();  
}  
loadAllPetParents() {  
  this.allPetParents = this.petparentProvider.getAllPetParent();  
}  
onFormSubmit() {  
  this.dataSaved = false;  
  const petparent = this.petparentForm.value;  
  this.CreatePetParent(petparent);  
  this.petparentForm.reset();  
}  
loadPetParentToEdit(petparentId: string) {  
  this.petparentProvider.getPetParentById(petparentId).subscribe(petparent=> {  
    this.massage = null;  
    this.dataSaved = false;  
    this.petparentIdUpdate = petparent.PetParentID;  
    this.petparentForm.controls['Name'].setValue(petparent.Name);  
   this.petparentForm.controls['Surname'].setValue(petparent.Surname);  
    this.petparentForm.controls['EmailAddress'].setValue(petparent.EmailAddress);  
    this.petparentForm.controls['PhoneNr'].setValue(petparent.PhoneNr);  
    this.petparentForm.controls['ParentAddress'].setValue(petparent.ParentAddress);  
  });  

}  
CreatePetParent(petparent: PetParent) {  
  if (this.petparentIdUpdate == null) {  
    this.petparentProvider.createPetParent(petparent).subscribe(  
      () => {  
        this.dataSaved = true;  
        this.massage = 'Record saved Successfully';  
        this.loadAllPetParents();  
        this.petparentIdUpdate = null;  
        this.petparentForm.reset();  
      }  
    );  
  } else {  
    petparent.PetParentID = this.petparentIdUpdate;  
    this.petparentProvider.updatePetParent(petparent).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Change Success';  
      this.loadAllPetParents();  
      this.petparentIdUpdate = null;  
      this.petparentForm.reset();  
    });  
  }  
}   
deletePetParent(petparentId: string) {  
  if (confirm("Are you sure you want to delete this ?")) {   
  this.petparentProvider.deletePetParentById(petparentId).subscribe(() => {  
    this.dataSaved = true;  
    this.massage = 'Record Deleted Succefully';  
    this.loadAllPetParents();  
    this.petparentIdUpdate = null;  
    this.petparentForm.reset();  

  });  
}  
}  
resetForm() {  
  this.petparentForm.reset();  
  this.massage = null;  
  this.dataSaved = false;  
}  
}  



