import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RatingModel } from './rating.model';

@Injectable({
  providedIn: 'root'
})

export class RatingService {

  constructor(private http: HttpClient) { }

  getRatings(): Promise<RatingModel[]> {
    console.log('[RatingsService | getRatings] Loading Ratings via API/MSSQL');


    return new Promise<RatingModel[]>((resolve, reject) => {
      this.http.get<RatingModel[]>('http://localhost:3000/api/Ratings')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[RatingsService | getRatings] Failure')
        );
    });
  }

  findRatings(id: number): Promise<RatingModel[]> {
    console.log('[RatingsService | findRatings] Finding Ratings via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Ratings?filter={"where":{"RatingID":' + id + '}}';
    console.log(findURL);

    return new Promise<RatingModel[]>((resolve, reject) => {
      this.http.get<RatingModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[RatingsService | findRatings] Failure')
        );
    });
  }

  deleteRating(id: number): Promise<string> {
    console.log('[RatingsService | deleteRating](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Ratings/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[RatingsService | deleteRatings] Failure')
        );
    });
  }

  createRating(newRec: any): Promise<RatingModel> {
    console.log('[RatingsService | createRating (newRec)]');

    return new Promise<RatingModel>((resolve, reject) => {
      const data = new RatingModel();
      data.RatingID = newRec.RatingID;
      data.RatingDescription = newRec.RatingDescription;
      data.PetSitterID = newRec.PetSitterID;
      data.RequestID = newRec.RequestID;
      data.PetParentID = newRec.PetParentID;

      this.http.put<RatingModel>('http://localhost:3000/api/Ratings', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[RatingsService | createRating] Failure')
        );
    });
  }

  updateRating(pt: any): Promise<RatingModel> {
    console.log('[RatingsService | updateRating()');
    console.log(pt);

    return new Promise<RatingModel>((resolve, reject) => {
      this.http.put<RatingModel>('http://localhost:3000/api/Ratings/' + pt.RatingID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[RatingsService | updateRating] Failure')
        );
    });
  }
}
