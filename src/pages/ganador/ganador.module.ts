import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GanadorPage } from './ganador';

@NgModule({
  declarations: [
    GanadorPage,
  ],
  imports: [
    IonicPageModule.forChild(GanadorPage),
  ],
})
export class GanadorPageModule {}
