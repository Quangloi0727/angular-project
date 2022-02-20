import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user.modal';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
})
export class ListUsersComponent implements OnInit {
  arrUser: User[] = [];
  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe((data) => {
      this.arrUser = data;
    });
  }
  ngOnInit(): void {}
}
