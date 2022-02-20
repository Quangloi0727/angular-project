import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserService } from './service/user.service';
import { UserComponent } from './component/user/user.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: ListUsersComponent,
      },
      {
        path: 'add',
        component: AddUserComponent,
      }
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
