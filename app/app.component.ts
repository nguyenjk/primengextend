import {Component} from '@angular/core';
import {LoginService} from './login/loginService/loginService';

 export interface Theme {
     header: string,
     items: [string]
 }

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app'
})
export class AppComponent {

    currentTheme: string;
    displayLogin: boolean = true; 

    theme: Theme;

    header: string;

    constructor(private loginService: LoginService) { 
        this.theme = {
            header : 'Select theme',
            items : ['Yellow', 'Blue', 'Red', 'Dynamics AX']
        };

        this.currentTheme = 'Yellow';
    }

    ngOnInit() {
        if (this.loginService.isAuthenticated) {
            this.displayLogin = false;
        }
    }

    updateTheme(selectedTheme) {
        this.currentTheme = selectedTheme;
    }
}
