import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http:HttpClient) { }

  getRepos(){
    return this.http.get(`https://api.github.com/users/repos?api_key=%${environment.apikey}`)
  }
}
