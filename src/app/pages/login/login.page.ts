import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { LoginService } from './shared/services/login-services';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})

export class LoginPage {
    constructor(
        private router: Router,
        private splashScreen: SplashScreen,
        private loginService: LoginService) {
    }

    ionViewDidLoad() {
        this.splashScreen.hide();
    }

    navigateToHome() {
        this.loginService.getToken();
    }
}
