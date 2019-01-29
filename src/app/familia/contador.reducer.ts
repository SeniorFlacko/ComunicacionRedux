import { Action } from '@ngrx/store';
import { actions, contadorACTION, MultiplicarAction, INCREMENTAR, DECREMENTAR, MULTIPLICAR } from './contador.action';


export function contadorReducer(state = 10, action: actions){
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;

        case DECREMENTAR:
            return state - 1;
        
        case MULTIPLICAR: 
            const accion = <MultiplicarAction>action;
            return state * accion.payload;
        
                
        default:
            return state;
    }
}