import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  ngOnInit(): void {
  }

  register: FormGroup;
  hide = true;
  agree = false;

  // Form 3
  thirdForm: FormGroup;
  hide3 = true;
  agree3 = false;
  myGender: string;
  genders: string[] = ['Men', 'Women', 'Other'];


  constructor(private fb: FormBuilder) {
    this.initThirdForm();
    this.initForm();
  }
  initForm() {
    this.register = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      middle: [''],
      company: [''],
      employee: [''],
      designation: [''],
      password: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      address1: [''],
      address2: [''],
      address3: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      termcondition: [false],
      
    });
  }
  initThirdForm() {
    this.thirdForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      password: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      address: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      termcondition: [false]
    });
  }
  onRegister() {
    console.log('Form Value', this.register.value);
  }
  onThirdFormSubmit() {
    console.log('Form Value', this.thirdForm.value);
  }

}
