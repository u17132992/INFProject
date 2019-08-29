import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  username = '';
  pages = [];

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private appCtrl: App) {
  }

  ionViewWillEnter() {
    if(this.authProvider.isAdmin())  {
      this.pages = [
        {title: 'Home', page: 'Petparent1Page', icon: 'home'},
        {title: 'Personal Details', page: 'Petparent2Page', icon: 'contact'},
        {title: 'Sitting Updates', page: 'ParentupdatesPage', icon: 'calendar'}
      ];
      this.openPage('Petparent1Page')
    }else {
      this.pages = [
        {title: 'Home', page: 'Petsitter1Page', icon: 'home'},
        {title: 'Personal Details', page: 'Petsitter2Page', icon: 'contact'},
        {title: 'Sitting Updates', page: 'SitterupdatePage', icon: 'calendar'}

      ];
      this.openPage('Petsitter1Page')
    }
    this.username = this.authProvider.currentUser.name;
  }
openPage(page) {
this.nav.setRoot(page);
}

logout() {
  this.authProvider.logout();
  this.appCtrl.getRootNav().setRoot('LoginPage');
}

ionViewCanEnter() {
  return this.authProvider.isLoggedIn();
}
}
