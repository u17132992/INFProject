import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitterupdatePage } from './sitterupdate';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    SitterupdatePage,
  ], 
  imports: [
    IonicPageModule.forChild(SitterupdatePage),
    MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
    MatInputModule, MatTooltipModule, MatToolbarModule, MatSelectModule
  ],
  exports: [
    SitterupdatePage
  ]
})
export class SitterupdatePageModule {}
