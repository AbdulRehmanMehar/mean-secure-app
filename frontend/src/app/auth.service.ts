import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(user) {
    if (user.gplusURL === '') {
      delete user.gplusURL;
    } else {
      user.gplusURL = 'https://plus.google.com/' +  user.gplusURL;
    }
    if (user.twitterURL === '') {
      delete user.twitterURL;
    } else {
      user.twitterURL = 'https://twitter.com/' + user.twitterURL;
    }
    return new Promise((resolve, reject) => {
      return this.http.post('http://localhost:3000/users/add', user)
        .toPromise()
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  } // adds a new user

  getById(id) {
    return new Promise((resolve, reject) => {
      return this.http.get('http://localhost:3000/users/' + id)
        .toPromise()
        .then(resp => resolve(resp['data']))
        .catch(error => reject(error));
    });
  } // gets the user by its id

  getAll() {
    return new Promise((resolve, reject) => {
      return this.http.get('http://localhost:3000/users')
        .toPromise()
        .then(resp => resolve(resp))
        .catch(error => reject(error));
    });
  } // returns arrayy of all the users

  deleteOne(id) {
    return new Promise((resolve, reject) => {
      return this.http.delete('http://localhost:3000/users/' + id) // makes delete request to backend
        .toPromise()
        .then(resp => resolve(resp))
        .catch(error => reject(error));
    });
  } // deletes a user

  updateOne(user) { // Updates a user by its id
    return new Promise((resolve, reject) => {
      return this.http.patch('http://localhost:3000/users/' + user.id, user) // makes patch request to backend
        .toPromise()
        .then(resp => resolve(resp))
        .catch(error => reject(error));
    }); // returns a promise which can be handled in component
  }

}
