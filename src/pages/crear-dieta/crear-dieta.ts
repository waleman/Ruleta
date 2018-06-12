import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

//paginas
import { CrearItemPage } from '../crear-item/crear-item';
import { AboutPage } from '../about/about'
//librerias extra
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-crear-dieta',
  templateUrl: 'crear-dieta.html',
})

export class CrearDietaPage {
  @ViewChild(Slides) slides: Slides;
  // public Imagen:any ="assets/fastfood.png"

  public Imagen =[
    {Direccion:'assets/banquete.png'},
    {Direccion:'assets/fastfood.png'},
    {Direccion:'assets/donut.png'},
    {Direccion:'assets/fruta.png'},
    {Direccion:'assets/nacho.png'},
    {Direccion:'assets/pizza.png'},
    {Direccion:'assets/saludable.png'},
    {Direccion:'assets/taco.png'},
    {Direccion:'assets/salad.png'},
    {Direccion:'assets/icecream.png'},
    {Direccion:'assets/taco2.png'},
    {Direccion:'assets/sushi.png'},
    {Direccion:'assets/beer.png'},
    {Direccion:'assets/fish.png'}
 ]
 public Comidas =[];

// llenar con los colores  y desc

//  public Colores = [
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#B42525', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'}, 
//   {'color' : '#000', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'},
//   {'color' : '#000', 'texto' : '#ffffff'},
//  ];


 public Lista =[];
 public ImagenSeleccionada:any = "assets/banquete.png";
 public Nombre:any;
 public ListaStorage=[];

 public Opcional ;



  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private storage: Storage,public toastCtrl: ToastController) {
    this.CrearListaenStorage();
  
  }

  ionViewDidLoad() {
   
  }


  imagenSlide(){
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex > 13 ){
        currentIndex = 13
    } else if(currentIndex < 0){
      currentIndex = 0
    }

    this.ImagenSeleccionada = this.Imagen[currentIndex]['Direccion'];
  }



  
CrearPlatillo(){

  let modal = this.modalCtrl.create(CrearItemPage)
  modal.onDidDismiss(data => { 

    if(data){
      //let numero = this.getRandomArbitrary();
let colorSeleccionado;
let numero = this.Lista.length;
if(numero % 2 == 0){
     colorSeleccionado = {'color' : '#B42525', 'texto' : '#ffffff'}
}else{
     colorSeleccionado = {'color' : '#000', 'texto' : '#ffffff'}
}

                   
     // let colorSeleccionado = this.Colores[numero];
      
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


Eliminar(valor){
    this.Lista.splice(valor, 1)
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
        let  lista = {
          Nombre : this.Nombre,
          Imagen : this.ImagenSeleccionada,
          Lista : this.Lista
        }
        this. CrearListaenStorage()
         this.ListaStorage.push(lista);
         this.storage.set('Dietas',this.ListaStorage);
         this.navCtrl.push(AboutPage);

      }
   
  }

  }


  CrearListaenStorage(){

    this.storage.get('Dietas').then(datos =>{
        for(let i of datos){
          this.ListaStorage.push(i)
        }
     });

    
  }

  presentToast(mensaje) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }


}
