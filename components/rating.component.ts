import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { RatingModel } from './rating.model';
import { RatingService } from './rating.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingsComponent implements OnInit {

  ratings: RatingModel[];
  currentrating: RatingModel;

  constructor(
    private service: RatingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[RatingsComponent] ngOnInit()');
    this.currentrating = new RatingModel();

    this.service.getRatings()
      .then(res => {
        
        
          
        

        this.ratings = res;
        console.log('[RatingsComponent | ngOnInit]');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[RatingsComponent | ngOnInit] data:', data);
      if (data) {
        this.ratings = data.ratings;
        this.currentrating = new RatingModel();
      }
    });
  }

  findRatings() {
    console.log('[RatingsComponent | findRatings]');
    this.service.findRatings(this.currentrating.RatingID)
      .then(res => {
        this.ratings = res;
       })
      .catch(err => console.log('error', err));
  }

  createRating() {
    console.log('[RatingsComponent] in createRating()');
    return this.service.createRating(this.currentrating);
  }

  selectRating(id: any) {
    console.log('[RatingsComponent] in selectselectRating(' + id + ')');

    this.ratings.forEach(r => {
      if (r.RatingID === id) {
        console.log('found ', r);
        this.currentrating = (r as RatingModel);
        this.currentrating.RatingID = id;
      }
      return;
    });
  }

  updateRating() {
    console.log('[RatingsComponent] in updateRating()');
    return this.service.updateRating(this.currentrating);
  }

  deleteRating(id: any) {
    console.log('[RatingsComponent] deleteRating(' + id + ')');
    this.ratings = this.ratings.filter(p => p.RatingID !== id);
    
    return this.service.deleteRating(id);
  }
}
