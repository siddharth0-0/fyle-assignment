import { Component, OnInit } from '@angular/core';
import { FetchRepoService } from 'src/app/common/provider/fetch-repo.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public sharedUser : any
  public userData :any
  public repoList = []
  perPageItems:number = 10;
  activePage : number = 1;
  totalPages : number = 25;
  constructor(private shareService : FetchRepoService) { }

  ngOnInit(): void {
    this.sharedUser = this.shareService.shareUserName //gets the user name from user-home components through service

    this.shareService.getUserDetail(this.sharedUser).subscribe( //this service returns user details
      res =>{
        this.userData = res
        console.log(this.userData);
      },
      err=>{
        console.log(err)
      }
    )
    setTimeout( () =>{this.getRepos(this.sharedUser)},5000) //timeout is added to show the skeleton
  }

  changePerPageItems(e) { // used for showing data per page
    this.perPageItems = e.target.value;
    this.getRepos(this.sharedUser);
  }

  getRepos(pageNo){
    console.log(pageNo)
    this.shareService.getUserRepositoryList(this.sharedUser,this.perPageItems,pageNo).subscribe( //this service returns the list of all the repository of the user
      res =>{
        this.repoList = res
        console.log('list',this.repoList);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
