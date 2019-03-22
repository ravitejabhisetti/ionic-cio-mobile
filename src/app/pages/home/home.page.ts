import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private splashScreen: SplashScreen) { }

  ionViewDidLoad() {
    this.splashScreen.hide();
  }
}
