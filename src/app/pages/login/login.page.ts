import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})

export class LoginPage implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        console.log('in login on in it check');
    }

    navigateToHome() {
        this.router.navigateByUrl('/menu/home');
    }
}