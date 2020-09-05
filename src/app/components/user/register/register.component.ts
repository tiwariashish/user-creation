import { Component, OnInit } from '@angular/core';
import { SecurityQuestion } from '../../../interface/security-question';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  sQuestion1Control = new FormControl('', Validators.required);
  sQuestion1Contro2 = new FormControl('', Validators.required);
  sQuestion1Contro3 = new FormControl('', Validators.required);

  registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      username: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      retypePassword: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  securityQuestions1: SecurityQuestion[] = [
    { value: 'primarySchool', viewValue: 'What primary school did you attend?' },
    {
      value: 'townName',
      viewValue: 'In what town or city did you meet your spouse or partner?',
    },
    { value: 'bornCity', viewValue: 'In which city were you born?' },
  ];

  securityQuestions2: SecurityQuestion[] = [
    { value: 'motherMaidenName', viewValue: 'What is the mothers maiden name?' },
    {
      value: 'spouseMaidenName',
      viewValue: 'What is your spouse or partners mothers maiden name?',
    },
    { value: 'grandMotherMaiden', viewValue: 'What is your grandmother maiden name?' },
  ];

  securityQuestions3: SecurityQuestion[] = [
    { value: 'hero', viewValue: 'What is the name of your childhood hero?' },
    { value: 'firstPet', viewValue: 'What is the name of your first pet?' },
    { value: 'bestFriend', viewValue: 'What is the name of your best friend?' },
  ];

  ngOnInit(): void {}
}
