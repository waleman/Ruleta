import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//paginas
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CrearDietaPage } from '../pages/crear-dieta/crear-dieta';
import { RuletaPage } from '../pages/ruleta/ruleta'
import { CrearItemPage } from '../pages/crear-item/crear-item';
import { VerlistaPage} from '../pages/verlista/verlista';
import { GanadorPage } from '../pages/ganador/ganador';
//librerias extras
import { ColorPickerModule } from 'ngx-color-picker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import 'rxjs/Rx';
import { PrimeraAperturaProvider } from '../providers/primera-apertura/primera-apertura';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RuletaPage,
    CrearDietaPage,
    CrearItemPage,
    VerlistaPage,
    GanadorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ColorPickerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RuletaPage,
    CrearDietaPage,
    CrearItemPage,
    VerlistaPage,
    GanadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrimeraAperturaProvider
  ]
})
export class AppModule {}
