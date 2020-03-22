import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FishfirePage } from './fishfire';

@NgModule({
  declarations: [
    FishfirePage,
  ],
  imports: [
    IonicPageModule.forChild(FishfirePage),
  ],
})
export class FishfirePageModule {}
