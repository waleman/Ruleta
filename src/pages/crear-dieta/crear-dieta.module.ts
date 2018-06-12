import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearDietaPage } from './crear-dieta';

@NgModule({
  declarations: [
    CrearDietaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearDietaPage),
  ],
})
export class CrearDietaPageModule {}
