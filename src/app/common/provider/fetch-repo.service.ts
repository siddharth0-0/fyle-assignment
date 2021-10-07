import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchRepoService {

  configUrl = 'https://api.github.com/users/'

  public shareUserName : string;

  constructor(private httpClient:HttpClient) { }

  getUserDetail(username : string) : Observable<any>{ //service returns the user details in User-detail component
    return this.httpClient.get(
      this.configUrl + username
    )
  }

  getUserRepositoryList(username : string,perPage : number,pageNo : number) : Observable<any>{ //service returns the user Repository list in User-detail component
    return this.httpClient.get(
      this.configUrl + username + "/repos?page=" + pageNo + "&per_page=" + perPage
    )
  }
}
