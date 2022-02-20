import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user.modal';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  public user: User;
  constructor(
    private userService: UserService,
    private routerService: Router
  ) {}
  ngOnInit(): void {
    this.user = new User();
    this.user.created = moment(new Date()).format('DD/MM/YYYY HH:mm');
  }

  addUser() {
    this.userService.addUser(this.user).subscribe((data) => {
      if (data && data.username) {
        this.routerService.navigate(['user']);
      }
    });
  }
}
