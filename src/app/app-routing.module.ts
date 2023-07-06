import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  {path:'', component:PersonalDetailsComponent},
  {path : 'personalDetails', component : PersonalDetailsComponent},
  {path : 'contactDetails', component : ContactDetailsComponent},
  {path : 'skill', component : SkillsComponent},
  {path: 'workExperience',component : WorkExperienceComponent},
  {path: 'final',component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
