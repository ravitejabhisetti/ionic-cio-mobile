import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})

export class LoginPage {
    constructor(private router: Router) {
    }

    navigateToHome() {
        this.router.navigateByUrl('/menu/home');
    }
}