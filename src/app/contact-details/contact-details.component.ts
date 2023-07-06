import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  contactDetailForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){
   this.createContactForm();
  }
  createContactForm(){
    this.contactDetailForm = this.formBuilder.group({
      email: [''],  
      mobile: [''],
      country: ['']
    });
  }
  onSubmit() {
    console.log('Your form data : ', this.contactDetailForm.value );
}
}
