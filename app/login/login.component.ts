import {Component, Input} from '@angular/core'; 
import { LoginService } from './loginService/loginService';

@Component({
	templateUrl: 'app/login/login.component.html',
    selector: 'login'
})

export class LoginComponent {
    @Input()
	displayLogin: boolean;

    username: string;
    password: string;

    constructor(private loginService: LoginService) {}

    login() {
        this.loginService.login(this.username, this.password);
        this.displayLogin = false;
    }

    cancel() {        
        this.displayLogin = false;
    }
}
