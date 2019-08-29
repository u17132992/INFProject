import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
import { ServiceTypeModel } from './service-type.model';
import { ServiceTypeService } from './service-type.service';

@Component({
  selector: 'app-pet',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypesComponent implements OnInit {
  servicetypes: ServiceTypeModel[];
  servicetype: ServiceTypeModel;

  constructor(
    private service: ServiceTypeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[ServiceTypesComponent] ngOnInit()');
    this.servicetype = new ServiceTypeModel();

    this.service.getServiceTypes()
      .then(res => {
        this.servicetypes = res;
      })
      .catch(err => console.log('[ServiceTypesComponent] Error when loading service types', err));

    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[ServiceTypeComponent | ngOnInit()] data:', data);
      if (data) {
        this.servicetypes = data.servicetypes;
      }
    });
  }

  findServiceTypes() {
    console.log('[ServiceTypeComponent] findServiceTypes');
    this.service.getServiceTypes()
      .then(res => {
        this.servicetypes = res;
      })
      .catch(err => console.log('error', err));
  }

  createServiceType() {
    console.log('[ServiceTypeComponent] in createServiceType()');
    return this.service.createServiceType(this.servicetype);
  }

  selectServiceType(id: any) {
    console.log('[ServiceTypeComponent] | selectServiceType(' + id + ')');

    this.servicetypes.forEach(r => {
      
      if (r.TypeID === id) {
        console.log('found ', r);
        this.servicetype = (r as ServiceTypeModel);
        this.servicetype.TypeID = id;
      }
      return;
    });
  }

  updateServiceType() {
    console.log('[ServiceTypeComponent] | updateServiceType()');
    return this.service.updateServiceType(this.servicetype);
  }

  deleteServiceType(id: any) {
    console.log('[ServiceTypeComponent] deleteServiceType(' + id + ')');
    this.servicetypes = this.servicetypes.filter(p => p.TypeID !== id);
    return this.service.deleteServiceType(id);
  }
}

