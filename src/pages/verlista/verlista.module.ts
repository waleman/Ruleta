import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerlistaPage } from './verlista';

@NgModule({
  declarations: [
    VerlistaPage,
  ],
  imports: [
    IonicPageModule.forChild(VerlistaPage),
  ],
})
export class VerlistaPageModule {}
