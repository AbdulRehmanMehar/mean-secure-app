import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  error: any;
  editUser: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.minLength(3)]),
    email: new FormControl('', [Validators.email]),
    about: new FormControl('', [Validators.minLength(200)]),
    gplusURL: new FormControl(''),
    twitterURL: new FormControl('')
  });
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.route.params.subscribe(params => { // Checks the params of url
      this.auth
        .getById(params.id) // get id from params and search for a user
        .then(user => { // Set the editUser FORMGROUP VALUES TO USER DATA
          this.editUser.get('id').setValue(user['_id']);
          this.editUser.get('name').setValue(user['name']);
          this.editUser.get('email').setValue(user['email']);
          this.editUser.get('about').setValue(user['about']);
          if (user['socialLinks'].gplus !== null) {
            this.editUser.get('gplusURL').setValue(user['socialLinks'].gplus);
          }
          if (user['socialLinks'].twitter !== null) {
            this.editUser.get('twitterURL').setValue(user['socialLinks'].twitter);
          }
        })
        .catch(error => (this.error = error)); // If error occurs, sets the error
    });
  }

  onSubmit() { // Handles the submission of form
    this.auth.updateOne(this.editUser.value)
      .then(updated => this.router.navigateByUrl(''))
      .catch(error => {
        console.log(error);
        if (error.status === 422) { // 422 means validation error, validation error will be handled this way
          error.error.data.forEach(err => { // loops through the error.data
            this.editUser.get(err.param).markAsTouched(); // Gets the param and marks it as touched
            this.editUser.get(err.param).setErrors({
              'backend': {
                'message': err.msg,
                'value': err.value
              },
            }); // Sets the errors in order to display it on the html
          });
        } else {
          this.error = error; // if there is no validation error , just set the error
        }
      });
  }
}
