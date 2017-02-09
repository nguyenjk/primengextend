import {Component} from '@angular/core'; 
import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

    constructor() { }

    public login(username: string, password: string) {
        console.log(username, password);
        return true;
    }

    public isAuthenticated () {
        return false;
    }

}
