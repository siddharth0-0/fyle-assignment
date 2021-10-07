import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchRepoService } from 'src/app/common/provider/fetch-repo.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  userName :string = ''
  resData :any
  constructor(private shareService : FetchRepoService, private route :Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.shareService.shareUserName = this.userName; //sending inputs value "username" to the user-detail component through service
    this.route.navigate(['repo']);
  }
}
