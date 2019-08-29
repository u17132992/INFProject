import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { TitleModel } from './title.model';
import { TitlesService } from './title.service';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitlesComponent implements OnInit {

  Titles: TitleModel[];
  currentTitle: TitleModel;

  constructor(
    private service: TitlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[TitlesComponent] ngOnInit()');
    this.currentTitle = new TitleModel();

    this.service.getTitles()
      .then(res => {

        this.Titles = res;
        console.log('[TitlesComponent] ngOnInit())');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[Title.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.Titles = data.Titles;
        this.currentTitle = new TitleModel(); 
      }
    });
  }

  findTitles() {
    console.log('[Title.component] findTitles');
    this.service.findTitles(this.currentTitle.TitleID)
      .then(res => {
        this.Titles = res;
       })
      .catch(err => console.log('error', err));
  }

  createTitle() {
    console.log('[TitlesComponent] in createTitle()');
  
    return this.service.createTitle(this.currentTitle);
  }

  selectTitle(id: any) {
    console.log('[TitlesComponent] in selectselectTitle(' + id + ')');

    this.Titles.forEach(r => {
      
      if (r.TitleID === id) {
        console.log('found ', r);
        this.currentTitle = (r as TitleModel);
        this.currentTitle.TitleID = id;
      }
      return;
    });
  }

  updateTitle() {
    console.log('[TitlesComponent] in updateTitle()');
    return this.service.updateTitle(this.currentTitle); 
  }

  deleteTitle(id: any) {
    console.log('[TitlesComponent] deleteTitle(' + id + ')');
    this.Titles = this.Titles.filter(p => p.TitleID !== id);
   

    return this.service.deleteTitle(id); 
    
  }
}
