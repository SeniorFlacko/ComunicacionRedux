import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from '../contador.action';

interface IAPPSTATE{
  contador: number
}

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  private contador : number;

  constructor(private store: Store<IAPPSTATE>) { 
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(`El estado cambio ... ${contador}`);
    });
  }

  ngOnInit() {
  }

  incrementar(){
    // const incrementarAction: Action = {
    //   type: 'INCREMENTAR'
    // }

    const incrementarActn = new IncrementarAction();
    this.store.dispatch(incrementarActn);
    
  }
  
  decrementar(){
    // const decrementarAction: Action = {
    //   type: 'DECREMENTAR'
    // }

    const decrementarActn = new DecrementarAction();
    this.store.dispatch(decrementarActn);

  }

}
