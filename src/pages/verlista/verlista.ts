import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


//paginas
import { CrearItemPage } from '../crear-item/crear-item';
import { AboutPage } from '../about/about'

@IonicPage()
@Component({
  selector: 'page-verlista',
  templateUrl: 'verlista.html',
})
export class VerlistaPage {
  public datos:any;
  public Nombre:any;
  public NombreEnStorage:any;
  public Lista =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public modalCtrl: ModalController,private storage: Storage) {
  }

  ionViewDidLoad() {
    this.datos = this.navParams.get('datos');
    this.Nombre = this.datos['Nombre'];
    this.NombreEnStorage = this.datos['Nombre'];
    this.Lista = this.datos['Lista'];
  }


  Eliminar(valor){
    let cantidad = this.Lista.length;
    if(cantidad > 2){
      this.Lista.splice(valor, 1)
    }  else{
      let mensaje = "No pudes haber menos de dos elementos en la lista";
      this.presentToast(mensaje)
    }
  }


  presentToast(mensaje) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }


  CrearPlatillo(){

    let modal = this.modalCtrl.create(CrearItemPage)
    modal.onDidDismiss(data => { 

      if(data){
        let numero = this.Lista.length;
        let colorSeleccionado;
        if(numero % 2 == 0){
          colorSeleccionado = {'color' : '#B42525', 'texto' : '#ffffff'}
        }else{
          colorSeleccionado = {'color' : '#000', 'texto' : '#ffffff'} 
           
        }

        let Platillo ={
          'fillStyle' : colorSeleccionado.color,
          'text' : data ,
          'textFillStyle' : colorSeleccionado.texto
          }

          this.Lista.push(Platillo);
       }

    });
    modal.present();
  
  }


  Guardar(){

    if(!this.Nombre){
      let mensaje = "Debe escribir el nombre de la Dieta"
      this.presentToast(mensaje)
    }else{
  
        let cantidad = this.Lista.length
        if(cantidad <= 1){
          let mensaje = "Debe agregar almenos dos platillos a la lista"
          this.presentToast(mensaje)
        }else{
          if(cantidad % 2 == 0){
            //es par
          }else{
            this.Lista[cantidad-1]['fillStyle'] = "#0F9606";
            this
          }
       
        //Aqui el codigo par amodificar la lista

         this.storage.get('Dietas').then(items =>{
            let ListaStorage =[]
              for(let item of items){
                  if(item['Nombre'] == this.NombreEnStorage ){
                    item['Nombre'] = this.Nombre;
                    item['Lista'] = this.Lista;
                    ListaStorage.push(item);
                  }else{
                    ListaStorage.push(item);
                  }
              }
              this.storage.set('Dietas',ListaStorage)
              this.navCtrl.push(AboutPage);
         });

         
        }
     
    }
  
    }

}
