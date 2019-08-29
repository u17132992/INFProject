import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { CityModel } from './city.model';
import { CitiesService } from './cities.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CitiesComponent implements OnInit {

  cities: CityModel[];
  currentcity: CityModel;

  constructor(
    private service: CitiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[CitiesComponent] ngOnInit()');
    this.currentcity = new CityModel();

    this.service.getCities()
      .then(res => {
        
        
          
        

        this.cities = res;
        console.log('[CitiesComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[city.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.cities = data.cities; 
        this.currentcity = new CityModel(); 
      }
    });
  }

  findCities() {
    console.log('[city.component] findCities');
    this.service.findCities(this.currentcity.CityID)
      .then(res => {
        this.cities = res;
       })
      .catch(err => console.log('error', err));
  }

  createCity() {
    console.log('[CitiesComponent] in createCity()');
    
    return this.service.createCity(this.currentcity); 
  }

  selectCity(id: any) {
    console.log('[CitiesComponent] in selectselectCity(' + id + ')');

    this.cities.forEach(r => {
      
      if (r.CityID === id) {
        console.log('found ', r);
        this.currentcity = (r as CityModel);
        this.currentcity.CityID = id;
      }
      return;
    });
  }

  updateCity() {
    console.log('[CitiesComponent] in updateCity()');
    return this.service.updateCity(this.currentcity); 
  }

  deleteCity(id: any) {
    console.log('[CitiesComponent] deleteCity(' + id + ')');
    this.cities = this.cities.filter(p => p.CityID !== id);
    

    return this.service.deleteCity(id); 
    
    
  }
}
