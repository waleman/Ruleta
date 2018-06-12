import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ganador',
  templateUrl: 'ganador.html',
})
export class GanadorPage {

 public ganador :any;
 public Titulo:any;
 public Texto:any;
 public Imagen:any;
 public Consejos = [
  {'Concejo' : 'Fija horarios para tus comidas',
    'Texto' :'Lo ideal es que puedas fijar horarios para las cuatro comidas principales del día. Marcar horarios y respetarlos será un gran primer paso para comenzar a ser más saludable.',
    'Imagen' : 'assets/g1.jpg'
  },
  {'Concejo' : 'Mastica despacio los alimentos',
  'Texto' :'No es una carrera, para digerir correctamente los alimentos debes masticarlos por un tiempo considerable. Además te sentirás saciado más rápido y poco a poco notarás como tus porciones se hacen más pequeñas.',
   'Imagen' : 'assets/g2.jpg'
  },
  {'Concejo' : 'Consume productos lácteos desnatados o bajos en grasas',
  'Texto' :'No se trata solo de comer bien, sino de controlar lo que se come y elegir los mejores alimentos.',
  'Imagen' : 'assets/g3.jpg'
  },
  {'Concejo' : 'Bebe mucha agua',
  'Texto' :'Recuerda que los refrescos o gaseosas son muy azucaradas y tienen muchas calorías.',
  'Imagen' : 'assets/g4.jpg'
  },
  {'Concejo' : 'Comer muchas frutas y verduras',
  'Texto' :'Se recomienda que comamos al menos cinco porciones de diferentes tipos de frutas y verduras al día. Es más fácil de lo que parece. Un vaso de jugo de fruta 100% sin azúcar (150 ml.) puede contar como una porción',
  'Imagen' : 'assets/g5.jpg'
  },
  
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let valor:any;
    valor = this.getRandomArbitrary('0', '4');
    this.Imagen = this.Consejos[valor]['Imagen'];
    this.Titulo = this.Consejos[valor]['Concejo'];
    this.Texto = this.Consejos[valor]['Texto'];
  }

  ionViewDidLoad() {
    this.ganador = this.navParams.get('comida');
  }

  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }


  Terminar(){
    this.viewCtrl.dismiss();
  }

}
