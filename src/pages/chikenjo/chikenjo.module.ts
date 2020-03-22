import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChikenjoPage } from './chikenjo';

@NgModule({
  declarations: [
    ChikenjoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChikenjoPage),
  ],
})
export class ChikenjoPageModule {}
