import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppComponent}  from './app.component';
import {CarService} from './cars/carservice';
import {LoginService} from  './login/loginService/loginService';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule, PasswordModule, RadioButtonModule} from 'primeng/primeng';
import {LoginComponent} from './login/login.component';
import {RadioButtonGroupComponent} from './components/radioButtonGroup/radioButtonGroup.component';
@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule, PasswordModule, RadioButtonModule],
  declarations: [AppComponent, LoginComponent, RadioButtonGroupComponent],
  bootstrap:    [AppComponent],
  providers:    [CarService, LoginService]
})
export class AppModule { }
