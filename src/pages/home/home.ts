import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//librerias
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';


//providers
import { PrimeraAperturaProvider } from '../../providers/primera-apertura/primera-apertura';

//pagnias
import { RuletaPage } from '../ruleta/ruleta';
import { GanadorPage } from '../ganador/ganador';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public theWheel ;
  public DietaSeleccionada:any;
  public ListaComidas:any;
  public Imagen:any;
  public keys:any;

  splash=true;

  tabBarElement:any;

  constructor(public navCtrl: NavController,private storage: Storage,public _primera : PrimeraAperturaProvider,public modalCtrl: ModalController) {

    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad(){
      this.tabBarElement.style.display = 'none';
      setTimeout(()=>{
        this.splash = false;
        this.tabBarElement.style.display = 'flex';
      },4000)



    this.checkdata()
  }


  CrearRuleta(lista){
     let arr =[];
     arr = lista;
     let cantidad = arr.length
     
    
      this.theWheel = new Winwheel  
        ({
          'numSegments'  : cantidad,         // Cantidad de segmentos
          'outerRadius'  : 130,       // Tamaño de la ruleta
          'innerRadius'     : 10,             // Circulo del centro
          'textFontSize' : 14,        // Tamaño de la letra
          'segments'     : lista,      
          'animation' :               // Animacion
          {
              'type'     : 'spinToStop',
              'duration' : 5,
              'spins'    : 8,
              'callbackFinished' : this.alertPrize.bind(this)
          },
          'pins' :    // Specify pin parameters.
          {
              'number'      : 18,
              'outerRadius' : 5,
              'margin'      : 10,
              'fillStyle'   : '#FFF',
              'strokeStyle' : '#bfa100'
          }

      });
  }



   alertPrize(indicatedSegment) 
  {
    // this.MostrarGanador(indicatedSegment)
   this. MostrarGanador(indicatedSegment.text)
 
  }

  MostrarGanador(dato){
   
    let modal = this.modalCtrl.create(GanadorPage,{comida:dato})
    modal.onDidDismiss(data => { 

        this. resetWheel()

    });
    modal.present();
  }

  resetWheel() {
    this.theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    this.theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    this.theWheel.draw();                // Call draw to render changes to the wheel.

  }


checkdata(){
  let array
    this.storage.ready().then(()=>{
      this.storage.keys().then(data=>{
        if(data){
                   this.keys=data;
                   if(this.keys.includes( 'Dietas' )){
                     if(!this.ListaComidas){
                      this.storage.get('Dietas').then(datos =>{
                          this.DietaSeleccionada =datos[1]['Nombre'];
                          this.ListaComidas = datos[1]['Lista'];
                          this.Imagen = datos[1]['Imagen'];
                          this.CrearRuleta(this.ListaComidas);
                      })

                     }  
                   }else{
                     this.DietaSeleccionada = "Comida Rapida";
                     this.Imagen = "assets/fastfood.png"
                    array =  this._primera.DefinirDietas();
                    this.CrearRuleta(array)
                   }
                }
      });
    });

  
}





BuscarRuleta(){


  let modal = this.modalCtrl.create(RuletaPage)
  modal.onDidDismiss(data => {
       this.DietaSeleccionada =  data['Nombre'];
       this.Imagen = data['Imagen']
       this.ListaComidas =  data['Lista'];
       this.CrearRuleta( this.ListaComidas)

  });

  modal.present();

}






}
