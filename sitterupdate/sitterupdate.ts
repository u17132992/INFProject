import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { PetupdateProvider }  from '../../providers/petupdate/petupdate'
import { PetUpdate } from '../../app/petupdate';  
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.config';


@IonicPage()
@Component({
  selector: 'page-sitterupdate',
  templateUrl: 'sitterupdate.html',
})
export class SitterupdatePage { dataSaved = false;  
  petupdateForm: any;  
  allPetUpdates: Observable<PetUpdate[]>;  
  petupdateIdUpdate = null;  
  massage = null;  
  constructor( private camera: Camera,private Formbulider: FormBuilder, private petupdateProvider:PetupdateProvider) { 
    initializeApp(FIREBASE_CONFIG);

    
  }  
  async takePhoto1() {
    try{
    
    
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    
    const result = await this.camera.getPicture(options);
    
    const image = 'data:image/jpeg;base64,' + result ;
    const pictures = storage().ref('picture1/pic1');
    pictures.putString(image, 'data_url');
    }
    catch (e) {
      console.error(e);
    }
    }
    
    async takePhoto2() {
      try{
      
      
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }
      
      const result = await this.camera.getPicture(options);
      
      const image = 'data:image/jpeg;base64,' + result ;
      const pictures = storage().ref('picture2/pic2');
      pictures.putString(image, 'data_url');
      }
      catch (e) {
        console.error(e);
      }
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
onFormSubmit() {  
  this.dataSaved = false;  
  const petupdate = this.petupdateForm.value;  
  this.CreatePetUpdate(petupdate);  
  this.petupdateForm.reset();  
}  
loadPetUpdateToEdit(petupdateId: string) {  
  this.petupdateProvider.getPetUpdateById(petupdateId).subscribe(petupdate=> {  
    this.massage = null;  
    this.dataSaved = false;  
    this.petupdateIdUpdate = petupdate.PetUpdateID;  
    this.petupdateForm.controls['UpdateDate'].setValue(petupdate.UpdateDate);  
   this.petupdateForm.controls['NameDescription'].setValue(petupdate.NameDescription);  
    this.petupdateForm.controls['FeedingStatus'].setValue(petupdate.FeedingStatus);  
    this.petupdateForm.controls['WalkingStatus'].setValue(petupdate.WalkingStatus);  
    this.petupdateForm.controls['GroomedStatus'].setValue(petupdate.GroomedStatus);  
  });  

}  
CreatePetUpdate(petupdate: PetUpdate) {  
  if (this.petupdateIdUpdate == null) {  
    this.petupdateProvider.createPetUpdate(petupdate).subscribe(  
      () => {  
        this.dataSaved = true;  
        this.massage = 'Record saved Successfully';  
        this.loadAllPetUpdates();  
        this.petupdateIdUpdate = null;  
        this.petupdateForm.reset();  
      }  
    );  
  } else {  
    petupdate.PetUpdateID = this.petupdateIdUpdate;  
    this.petupdateProvider.updatePetUpdate(petupdate).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Success';  
      this.loadAllPetUpdates();  
      this.petupdateIdUpdate = null;  
      this.petupdateForm.reset();  
    });  
  }  
}   
deletePetUpdate(petupdateId: string) {  
  if (confirm("Are you sure you want to delete this ?")) {   
  this.petupdateProvider.deletePetUpdateById(petupdateId).subscribe(() => {  
    this.dataSaved = true;  
    this.massage = 'Record Deleted Succefully';  
    this.loadAllPetUpdates();  
    this.petupdateIdUpdate = null;  
    this.petupdateForm.reset();  

  });  
}  
}  
resetForm() {  
  this.petupdateForm.reset();  
  this.massage = null;  
  this.dataSaved = false;  
}  
}  