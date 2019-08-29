import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Petsitter2Page } from './petsitter2';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  


@NgModule({
  declarations: [
    Petsitter2Page,
  ],
  imports: [
    IonicPageModule.forChild(Petsitter2Page),
    MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
  ],

  exports: [
    Petsitter2Page
  ]
})
export class Petsitter2PageModule {}
