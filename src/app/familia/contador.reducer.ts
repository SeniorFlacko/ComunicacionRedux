import { Action } from '@ngrx/store';
import { actions, contadorACTION, MultiplicarAction, INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, DividirAction } from './contador.action';


export function contadorReducer(state = 10, action: actions){
    let accion;
    switch (action.type) {
        
        case INCREMENTAR:
            return state + 1;

        case DECREMENTAR:
            return state - 1;
        
        case MULTIPLICAR: 
            accion = <MultiplicarAction>action;
            return state * accion.payload;
        
        case DIVIDIR: 
            accion = <DividirAction>action;
            return state / accion.payload;
        
                
        default:
            return state;
    }
}