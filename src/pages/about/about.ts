import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//paginas
import { CrearDietaPage } from '../crear-dieta/crear-dieta';
import { VerlistaPage } from '../verlista/verlista';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public keys:any 
  public lista =[];

  constructor(public navCtrl: NavController,private storage: Storage) {
    this.buscar()
  }


  buscar(){
    let array =[]
    this.storage.ready().then(()=>{
      this.storage.keys().then(data=>{
        if(data)
        {
                   this.keys=data;
                   if(this.keys.includes( 'Dietas' )){
                      this.storage.get('Dietas').then(datos =>{
                        for(let i of datos){
                          array.push(i)
                        }
                        
                      });
                    }
        }
     
    });
  });
  this.lista = array
}


IrNuevaLista(){
  this.navCtrl.push(CrearDietaPage);
}


  VerDieta(item){
    this.navCtrl.push(VerlistaPage,{datos:item})
  }
  
}