import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-crear-item',
  templateUrl: 'crear-item.html',
})
export class CrearItemPage {

  public platillo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  
  }

  Guardar(){
    if(!this.platillo){
      let toast = this.toastCtrl.create({
        message: 'Debe escribir el nombre del platillo',
        duration: 3000,
        position: 'bottom'
      });   
      toast.present();
    }else{
      this.viewCtrl.dismiss(this.platillo);
    }
  }

  Cancelar(){

      this.viewCtrl.dismiss();

  }

}
