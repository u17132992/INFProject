import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { ServicePriceModel } from './service-price.model';
import { ServicePriceService } from './service-price.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-service-price',
  templateUrl: './service-price.component.html',
  styleUrls: ['./service-price.component.css']
})
export class ServicePricesComponent implements OnInit {

  serviceprices: ServicePriceModel[];
  currentserviceprice: ServicePriceModel;

  constructor(
    private service: ServicePriceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[ServicePricesComponent] ngOnInit()');
    this.currentserviceprice = new ServicePriceModel();

    this.service.getServicePrices()
      .then(res => {
        
        
          
        

        this.serviceprices = res;
        console.log('[ServicePricesComponent | ngOnInit]');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[ServicePricesComponent | ngOnInit] data:', data);
      if (data) {
        this.serviceprices = data.serviceprices;
        this.currentserviceprice = new ServicePriceModel();
      }
    });
  }

  findServicePrices() {
    console.log('[ServicePricesComponent | findServicePrices]');
    this.service.findServicePrices(this.currentserviceprice.PriceID)
      .then(res => {
        this.serviceprices = res;
       })
      .catch(err => console.log('error', err));
  }

  createServicePrice() {
    console.log('[ServicePricesComponent] in createServicePrice()');
    return this.service.createServicePrice(this.currentserviceprice);
  }

  selectServicePrice(id: any) {
    console.log('[ServicePricesComponent] in selectselectServicePrice(' + id + ')');

    this.serviceprices.forEach(r => {
      if (r.PriceID === id) {
        console.log('found ', r);
        this.currentserviceprice = (r as ServicePriceModel);
        this.currentserviceprice.PriceID = id;
      }
      return;
    });
  }

  updateServicePrice() {
    console.log('[ServicePricesComponent] in updateServicePrice()');
    return this.service.updateServicePrice(this.currentserviceprice);
  }

  deleteServicePrice(id: any) {
    console.log('[ServicePricesComponent] deleteServicePrice(' + id + ')');
    this.serviceprices = this.serviceprices.filter(p => p.PriceID !== id);
    
    return this.service.deleteServicePrice(id);
  }
}
