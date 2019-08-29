import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { PetSitter } from '../../app/petsitter';  


@Injectable()
export class PetsitterProvider {
  url = 'https://ionicapi.conveyor.cloud/Api/PetSitter';  
constructor(private http: HttpClient) { }  
getAllPetSitter(): Observable<PetSitter[]> {  
  return this.http.get<PetSitter[]>(this.url + '/AllPetSitterDetails');  
}  
getPetSitterById(petsitterId: string): Observable<PetSitter> {  
  return this.http.get<PetSitter>(this.url + '/GetPetSitterDetailsById/' + petsitterId);  
}  
createPetSitter(petsitter: PetSitter): Observable<PetSitter> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<PetSitter>(this.url + '/InsertPetSitterDetails/',  
  petsitter, httpOptions);   
}  
updatePetSitter(petsitter: PetSitter): Observable<PetSitter> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.put<PetSitter>(this.url + '/UpdatePetSitterDetails/',  
  petsitter, httpOptions);  
}  
deletePetSitterById(petsitterid: string): Observable<number> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.delete<number>(this.url + '/DeletePetSitterDetails?id=' +petsitterid,  
httpOptions);  
}  
}  