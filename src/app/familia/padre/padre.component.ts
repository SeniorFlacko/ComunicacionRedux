import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { incrementarAction, decrementarAction } from '../contador.action';

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
    this.store.subscribe(state => {
      this.contador = state.contador;
      console.log(`El estado cambio ... ${state.contador}`);
    });
  }

  ngOnInit() {
  }

  incrementar(){
    // const incrementarAction: Action = {
    //   type: 'INCREMENTAR'
    // }

    const incrementarActn = new incrementarAction();
    this.store.dispatch(incrementarActn);
    
  }
  
  decrementar(){
    // const decrementarAction: Action = {
    //   type: 'DECREMENTAR'
    // }

    const decrementarActn = new decrementarAction();
    this.store.dispatch(decrementarActn);

  }

}
