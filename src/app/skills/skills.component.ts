import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillDetailForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){
   this.createContactForm();
  }
  createContactForm(){
    this.skillDetailForm = this.formBuilder.group({
      skill1: [''],  
      skill2: [''],
      skill3: ['']
    });
  }
  onSubmit() {
    console.log('Your form data : ', this.skillDetailForm.value );
}
}
