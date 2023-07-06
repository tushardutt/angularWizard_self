import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperienceForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){
   this.createContactForm();
  }
  createContactForm(){
    this.workExperienceForm = this.formBuilder.group({
      job1: [''],  
      job2: [''],
      job3: ['']
    });
  }
  onSubmit() {
    console.log('Your form data : ', this.workExperienceForm.value );
}
}
