import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as constants from '../../common/core/cio-constants';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router,
    private menuController: MenuController
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.menuController.close();
    this.storage.remove(constants.login_token);
    this.router.navigateByUrl('/login');
  }

}
