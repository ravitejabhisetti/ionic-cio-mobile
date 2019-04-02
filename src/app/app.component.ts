import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, Events, LoadingController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as constants from './common/core/cio-constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./common/scss/globa-styles.scss']
})
export class AppComponent {
  loading: any;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private events: Events,
    private storage: Storage,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.events.subscribe(constants.cio_login_success, () => {
        this.processLogin();
      });
      this.events.subscribe(constants.handle_loader, (loaderInfo) => {
        this.processLoader(loaderInfo);
      });
      this.processLogin();
    });
  }

  async processLoader(loaderInfo) {
    if (loaderInfo.showLoader) {
      this.loading = await this.loadingController.create({ message: loaderInfo.loaderMessage });
      await this.loading.present();
    } else {
      if (this.loading) {
        this.loading.dismiss();
      }
    }
  }

  processLogin() {
    this.storage.get(constants.login_token).then((loginToken) => {
      if (loginToken) {
        this.router.navigateByUrl('/menu/home/tabs/impacts');
      }
    });
  }
}
