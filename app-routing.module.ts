import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from
import { HomePageComponent } from './components/home.component';
import { SystemUserResolver} from './components/systemuser-resolver';
import { PetParentsComponent } from './components/pet-parent.component';
import { PetParentsResolver } from './components/pet-parents-resolver';
import { ServiceRequestsComponent } from './components/service-requests.component';
import { ServiceTypesComponent } from './components/service-type.component';
import { ServiceRequestsResolver } from './components/service-requests-resolver';
import { VerifyStudentReferencesComponent } from './components/verify-student-references.component';
import { PetSittersComponent } from './components/pet-sitter.component';
import { PetSittersResolver } from './components/pet-sitters-resolver';
import { PetSitterCriteriaComponent } from './components/pet-sitter-criteria.component';
import { AuditLogComponent } from './components/audit-log.component';
import { AuditLogResolver } from './components/audit-log-resolver';
import { PSOpportunitiesComponent } from './components/psopportunities.component';
import { PetsComponent } from './components/pet.component';
import { PetTypesComponent } from './components/pet-type.component';
import { PetServiceInstructionComponent } from './components/pet-service-instruction.component';
import { PotentialSittersComponent } from './components/potential-sitter.component';
import { CitiesComponent } from './components/city.component';
import { SuburbsResolver } from './components/suburbs-resolver';
import { SuburbsComponent } from './components/suburb.component';
import { TitlesComponent } from './components/title.component';
import { UserRolesComponent } from './components/user-role.component';
import { ServiceApplicantsComponent } from './components/service-applications.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, resolve: { data: SystemUserResolver } },
  { path: 'home', component: HomePageComponent, resolve: { data: SystemUserResolver } },
  // { path: 'logout', component: HomePageComponent},

  // { path: '', component: AppComponent, resolve: { data: SystemUserResolver } },

  /* PetParent routes */
  { path: 'pet-parent', component: PetParentsComponent, resolve: { data: PetParentsResolver } },
  { path: 'pet-sitter', component: PetSittersComponent, resolve: { data: PetSittersResolver } },
  { path: 'service-request', component: ServiceRequestsComponent, resolve: { data: ServiceRequestsResolver } },
  { path: 'pets', component: PetsComponent },
  { path: 'pet-service-instruction', component: PetServiceInstructionComponent },
  { path: 'potential-sitter', component: PotentialSittersComponent },
  { path: 'view-applicants', component: ServiceApplicantsComponent },

  /* PetSitter routes */
  { path: 'ps-opportunities', component: PSOpportunitiesComponent },

  /* Admin routes */
  { path: 'audit-log', component: AuditLogComponent, resolve: { data: AuditLogResolver } },
  { path: 'suburbs', component: SuburbsComponent, resolve: { data: SuburbsResolver } },
  { path: 'cities', component: CitiesComponent},
  { path: 'titles', component: TitlesComponent },
  { path: 'verify-student-references', component: VerifyStudentReferencesComponent },
  { path: 'pet-sitter-criteria', component: PetSitterCriteriaComponent },
  { path: 'pet-types', component: PetTypesComponent },
  { path: 'service-type', component: ServiceTypesComponent },
  { path: 'user-roles', component: UserRolesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
