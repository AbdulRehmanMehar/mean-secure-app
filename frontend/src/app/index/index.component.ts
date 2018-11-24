import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: any;
  error: any;
  constructor(private auth: AuthService) { }

  ngOnInit() { // Sets list of users to this.users
    this.auth.getAll()
      .then(object => {
        this.users = object['data'];
      }).catch(error => {
        this.error = error.data;
      });
  } // gets automatically called
  delete(id) { // If Delete button is pressed, make a request to delete the user and reload the component
    this.auth.deleteOne(id)
      .then(_ => this.ngOnInit())
      .catch(error => this.error = error.data);
  }
}
