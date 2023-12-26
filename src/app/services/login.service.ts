import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


type User = {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://json-api-diqosh-cf992770784d.herokuapp.com/'

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.apiUrl + 'users');
  }

  postUser(user: User) {
    return this.http.post(this.apiUrl + 'users', user);
  }

  getPostDetails(id: string) {
    return this.http.get(this.apiUrl + 'posts/' + '?id=' + id);
  }

  likePost(id: string) {
    return this.http.post(this.apiUrl + 'posts/like', {id: id});
  }

  unlikePost(id: string) {
    return this.http.post(this.apiUrl + 'posts/unlike', {id: id});
  }
}
