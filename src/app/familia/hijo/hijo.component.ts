import { Component, OnInit } from '@angular/core';
import { IAPPSTATE, multiplicarAction } from '../contador.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  
  private contador: number;

  constructor(private store: Store<IAPPSTATE>) {
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
    });
  }

  ngOnInit() {
    
  }

  multiplicar(){
    console.log('hello');
    const accion = new multiplicarAction(3);
    this.store.dispatch(accion);
  }
  
  dividir(){

  }

}
