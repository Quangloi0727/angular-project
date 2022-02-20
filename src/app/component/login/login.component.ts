import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/modal/user.modal';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User;
  arrUser: User[] = [];
  constructor(
    private userService: UserService,
    private authService : AuthService
    ) {
    this.user = new User();
    this.userService.getAllUser().subscribe((data) => {
      this.arrUser = data;
    });
  }
  ngOnInit(): void {}
  loginUser() {
    if(this.userExists(this.user.username, this.user.password) == true){
      this.authService.login();
      alert("đăng nhập thành công")
    }else{
      this.authService.logout();
      alert("đăng nhập thất bại")
    }
  }
  userExists(username, password) {
    return this.arrUser.some(function (el) {
      return el.username == username && el.password == password;
    });
  }
}
