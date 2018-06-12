import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearItemPage } from './crear-item';

@NgModule({
  declarations: [
    CrearItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearItemPage),
  ],
})
export class CrearItemPageModule {}
