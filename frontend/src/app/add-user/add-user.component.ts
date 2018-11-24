import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  error: any;
  addUser: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    about: new FormControl('', [
      Validators.required,
      Validators.minLength(200)
    ]),
    gplusURL: new FormControl(''),
    twitterURL: new FormControl('')
  }); // Form Group with some formcontrol
  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.addUser.value) // calls register method from auth service
      .then(resp => {
        this.router.navigateByUrl(''); // If user is added successfully, redirects to  homepage
      }).catch(error => {
        if (error.status === 422) { // Handle validation errors,
          error.error.data.forEach(err => {
            this.addUser.get(err.param).markAsTouched(); // Marks the field as touched
            this.addUser.get(err.param).setErrors({
              'backend': {
                'message': err.msg,
                'value': err.value
              },
            }); // sets errors to the field
          });
        } else {
          this.error = error; // Sets the error to this.error:any
        }
      });
  }

}
