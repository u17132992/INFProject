import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleModel } from './title.model';

@Injectable()
export class TitlesService {

  constructor(private http: HttpClient) { }

  getTitles(): Promise<TitleModel[]> {
    console.log('[TitlesService | getTitles] Loading Titles via API/MSSQL');
 

    return new Promise<TitleModel[]>((resolve, reject) => {
      this.http.get<TitleModel[]>('http://localhost:3000/api/Titles')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[TitlesService | getTitles] Failure')
        );
    });
  }

  findTitles(id: number): Promise<TitleModel[]> {
    console.log('[TitlesService | findTitles] Finding Titles via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Titles?filter={"where":{"TitleID":' + id + '}}';
    console.log(findURL);

    return new Promise<TitleModel[]>((resolve, reject) => {
      this.http.get<TitleModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[TitlesService | findTitles] Failure')
        );
    });
  }

  deleteTitle(id: number): Promise<string> {
    console.log('[titles.service.ts] in deleteTitle(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Titles/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[TitlesService | deleteTitles] Failure')
        );
    });
  }

  createTitle(title: any): Promise<TitleModel> {
    console.log('[titles.service.ts] in createTitle()');

    return new Promise<TitleModel>((resolve, reject) => {
      const data = new TitleModel();
      data.TitleDescription = title.TitleDescription;

      this.http.put<TitleModel>('http://localhost:3000/api/Titles', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[TitlesService | createTitle] Failure')
        );
    });
  }

  updateTitle(title: any): Promise<TitleModel> {
    console.log('[titles.service.ts] in updateTitle()');
    console.log(title);

    return new Promise<TitleModel>((resolve, reject) => {
   
      this.http.put<TitleModel>('http://localhost:3000/api/Titles/' + title.TitleID, title)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[TitlesService | updateTitle] Failure')
        );
    });
  }
}
