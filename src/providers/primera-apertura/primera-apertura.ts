
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class PrimeraAperturaProvider {
  public Dieta = [];

  constructor(private storage: Storage) {
  
  }

 

  DefinirDietas (){

    let ComidaRapida =  [
      {'fillStyle' : '#B42525', 'text' : 'Pizza' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Hamburgesa', 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Pollo Frito' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Comida China' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Calzone' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Torta','textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Chuleta','textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Tacos' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Nachos' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Sandwish' , 'textFillStyle' : '#ffffff'}
    ]
  
    this.crear('Comida Rapida',ComidaRapida,"assets/fastfood.png")
   
  
    let ComidaSaludable=  [
      {'fillStyle' : '#B42525', 'text' : 'Ensalada' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Pollo asado', 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Sopa' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Atun' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Verduras ' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Salmón','textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Yogur','textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Avena' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Pasta' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Pure' , 'textFillStyle' : '#ffffff'}
    ]
  
    this.crear('Comida Saludable',ComidaSaludable,"assets/salad.png")
  
    let Postres =  [
      {'fillStyle' : '#B42525', 'text' : 'Helado' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Gelatina', 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Flan' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Pastel' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Tarta' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Chocolate','textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Galleta','textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Fruta' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#B42525', 'text' : 'Donut' , 'textFillStyle' : '#ffffff'},
      {'fillStyle' : '#000000', 'text' : 'Pie' , 'textFillStyle' : '#ffffff'}
    ]
  
    this.crear('Postres',Postres,"assets/donut.png")
    
    this.storage.set('Dietas',this.Dieta)

    return ComidaRapida;
  }

  crear(name,dieta,imagen){
    let  lista = {
      Nombre : name,
      Imagen : imagen,
      Lista : dieta
    }
    this.Dieta.push(lista)
  }

}
