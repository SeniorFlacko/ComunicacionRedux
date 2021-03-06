import { Component, OnInit } from '@angular/core';
import { IAPPSTATE, MultiplicarAction, DividirAction } from '../contador.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  
  public contador: number;

  constructor(private store: Store<IAPPSTATE>) {
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
    });
  }

  ngOnInit() {
    
  }

  multiplicar(){
    const accion = new MultiplicarAction(3);
    this.store.dispatch(accion);
  }
  
  dividir(){
    const accion = new DividirAction(10);
    this.store.dispatch(accion);
  }

}
