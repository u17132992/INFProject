import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Globals } from './shared/globals';
import { ConstantsService } from './components/constants.service';

import { SharedModule } from './shared/shared.module';

import { AuditLogComponent } from './components/audit-log.component';
import { AuditLogResolver } from './components/audit-log-resolver';
import { AuditLogService } from './components/audit-log.service';
import { CitiesComponent } from './components/city.component';
import { CitiesService } from './components/cities.service';
import { HomePageComponent } from './components/home.component';
import { InstructionsComponent } from './components/instruction.component';
import { InstructionService } from './components/instruction.service';
import { MeetingResponsesComponent } from './components/meeting-response.component';
import { MeetingResponseService } from './components/meeting-response.service';
import { MeetingsComponent } from './components/meeting.component';
import { MeetingService } from './components/meeting.service';
import { MeetingstatusesComponent } from './components/meeting-status.component';
import { MeetingStatusService } from './components/meeting-status.service';
import { PetBreedsComponent } from './components/pet-breed.component';
import { PetParentsComponent } from './components/pet-parent.component';
import { PetParentsResolver } from './components/pet-parents-resolver';
import { PetParentsService } from './components/pet-parents.service';
import { PetsComponent } from './components/pet.component';
import { PetService } from './components/pet.service';
import { PetServiceInstructionComponent } from './components/pet-service-instruction.component';
import { PetServiceInstructionService } from './components/pet-service-instruction.service';
import { PetSitterCriteriaComponent } from './components/pet-sitter-criteria.component';
import { PetSittersComponent } from './components/pet-sitter.component';
import { PetSittersResolver } from './components/pet-sitters-resolver';
import { PetSittersService } from './components/pet-sitters.service';
import { PetTypesComponent } from './components/pet-type.component';
import { PetTypeService } from './components/pet-type.service';
import { PotentialSittersComponent } from './components/potential-sitter.component';
import { PotentialSitterService } from './components/potential-sitter.service';
import { PSOpportunitiesComponent } from './components/psopportunities.component';
import { RatingsComponent } from './components/rating.component';
import { RatingService } from './components/rating.service';
import { ServiceApplicantsComponent } from './components/service-applications.component';
import { ServicePetsComponent } from './components/service-pet.component';
import { ServicePetService } from './components/service-pet.service';
import { ServicePricesComponent } from './components/service-price.component';
import { ServicePriceService } from './components/service-price.service';
import { ServiceRequestsComponent } from './components/service-requests.component';
import { ServiceRequestsResolver } from './components/service-requests-resolver';
import { ServiceRequestsService } from './components/service-requests.service';
import { ServiceTypesComponent } from './components/service-type.component';
import { ServiceTypeService } from './components/service-type.service';
import { SuburbsComponent } from './components/suburb.component';
import { SuburbsResolver } from './components/suburbs-resolver';
import { SuburbsService } from './components/suburbs.service';
import { SystemUserResolver } from './components/systemuser-resolver';
import { SystemUsersService } from './components/systemuser.service';
import { TitlesComponent } from './components/title.component';
import { TitlesService } from './components/title.service';
import { VerifyStudentReferencesComponent } from './components/verify-student-references.component';
import { UserRolesService } from './components/user-role.service';
import { UserRolesComponent } from './components/user-role.component';

// this path: angulardemo\src\app\app.module.ts
// that path: angulardemo\src\app\services\categories.service.ts
@NgModule({
  declarations: [
    AppComponent,
    AuditLogComponent,
    CitiesComponent,
    HomePageComponent,
    MeetingsComponent,
    MeetingResponsesComponent,
    MeetingstatusesComponent,
    PetBreedsComponent,
    PetsComponent,
    PetParentsComponent,
    PetServiceInstructionComponent,
    PetSitterCriteriaComponent,
    PetSittersComponent,
    PetTypesComponent,
    PotentialSittersComponent,
    PSOpportunitiesComponent,
    RatingsComponent,
    ServiceApplicantsComponent,
    ServicePetsComponent,
    ServicePricesComponent,
    ServiceRequestsComponent,
    ServiceTypesComponent,
    SuburbsComponent,
    TitlesComponent,
    UserRolesComponent,
    VerifyStudentReferencesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuditLogService,
    CitiesService,
    ConstantsService,
    HttpClientModule,
    MeetingService,
    MeetingResponseService,
    MeetingStatusService,
    PetService,
    PetParentsResolver, 
    PetParentsService,
    PetServiceInstructionService,
    PetSittersResolver,
    PetSittersService,
    PetTypeService,
    PotentialSitterService,
    RatingService,
    ServiceApplicantsComponent,
    ServicePetService,
    ServicePriceService,
    ServiceRequestsResolver,
    ServiceRequestsService,
    ServiceTypeService,
    SuburbsResolver,
    SuburbsService,
    SystemUserResolver,
    SystemUsersService,
    TitlesService,
    UserRolesService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
