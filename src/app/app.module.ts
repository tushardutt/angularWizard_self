import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProgressBarComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
