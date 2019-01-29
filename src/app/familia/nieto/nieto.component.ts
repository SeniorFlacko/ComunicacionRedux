import { Component, OnInit } from '@angular/core';
import { IAPPSTATE, ResetAction } from '../contador.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  public contador: number;
  
  constructor(private store: Store<IAPPSTATE>) { 
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
    });
  }

  ngOnInit() {
  }


  reset(){
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
