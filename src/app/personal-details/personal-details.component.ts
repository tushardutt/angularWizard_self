import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  personalDetailForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){
   this.createContactForm();
  }
  createContactForm(){
    this.personalDetailForm = this.formBuilder.group({
      fname: [''],  
      lname: ['']
    });
  }
  onSubmit() {
    console.log('Your form data : ', this.personalDetailForm.value );
}
}
