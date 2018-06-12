import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ruleta',
  templateUrl: 'ruleta.html',
})
export class RuletaPage {


  public keys:any;
  public lista =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    
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



  itemSelected(item){

    this.viewCtrl.dismiss(item);

  }

}
