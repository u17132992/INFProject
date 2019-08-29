import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { PetParent } from '../../app/petparent';  

/*
  Generated class for the PetparentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PetparentProvider {
  url = "https://ionicapi.conveyor.cloud/Api/PetParent";  
constructor(private http: HttpClient) { }  
getAllPetParent(): Observable<PetParent[]> {  
  return this.http.get<PetParent[]>(this.url + '/AllPetParentDetails');  
}  
getPetParentById(petparentId: string): Observable<PetParent> {  
  return this.http.get<PetParent>(this.url + '/GetPetParentDetailsById/' + petparentId);  
}  
createPetParent(petparent: PetParent): Observable<PetParent> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<PetParent>(this.url + '/InsertPetParentDetails/',  
  petparent, httpOptions);  
}  
updatePetParent(petparent: PetParent): Observable<PetParent> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.put<PetParent>(this.url + '/UpdatePetParentDetails/',  
  petparent, httpOptions);  
}  
deletePetParentById(petparentid: string): Observable<number> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.delete<number>(this.url + '/DeletePetParentDetails?id=' +petparentid,  
httpOptions);  
}  
}  