import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FishfirePage } from '../fishfire/fishfire';
import { ChikenjoPage } from '../chikenjo/chikenjo';
import { FrancefirePage } from '../francefire/francefire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToFishfire(){
    this.navCtrl.push(FishfirePage,{ menu:"ปลาเผา",price:80 });
  }

  goToChikenjo(){
    this.navCtrl.push(ChikenjoPage);
  }

  goToFrancefire(){
    this.navCtrl.push(FrancefirePage);
  }
}
