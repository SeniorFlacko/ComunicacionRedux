import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';

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
    const incrementarAction: Action = {
      type: 'INCREMENTAR'
    }

    this.store.dispatch(incrementarAction);
  }
  
  decrementar(){
    const decrementarAction: Action = {
      type: 'DECREMENTAR'
    }

    this.store.dispatch(decrementarAction);
  }

}
