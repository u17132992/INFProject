import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Petparent2Page } from './petparent2';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    Petparent2Page,
  ],
  imports: [
    IonicPageModule.forChild(Petparent2Page),
    MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
    MatInputModule, MatTooltipModule, MatToolbarModule, MatSelectModule
  ],
  exports: [
    Petparent2Page
  ]
})
export class Petparent2PageModule {}
