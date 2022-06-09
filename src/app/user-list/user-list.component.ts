import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from '../model/user.model';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userDetails: any = [];

  constructor(
    private user: UserDataService
  ) { }

  ngOnInit(): void {
    this.user.castUser.subscribe(res => {
      console.log(res);
      this.userDetails = res;
    });
  }

  delete(id: any) {
    this.userDetails.splice(id, 1);
  }

}
