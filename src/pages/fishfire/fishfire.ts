import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FishfirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fishfire',
  templateUrl: 'fishfire.html',
})
export class FishfirePage {
  menu:string;
  price:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu=this.navParams.get('menu');
    this.price=this.navParams.get('price');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishfirePage');
  }

}
