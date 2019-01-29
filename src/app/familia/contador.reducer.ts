import { Action } from '@ngrx/store';
import { actions, contadorACTION, multiplicarAction } from './contador.action';


export function contadorReducer(state = 10, action: actions){
    switch (action.type) {
        case contadorACTION.INCREMENTAR:
            return state + 1;

        case contadorACTION.DECREMENTAR:
            return state - 1;
        
        case contadorACTION.MULTIPLICAR: 
            const accion = <multiplicarAction>action;
            return state * accion.payload;
        
                
        default:
            return state;
    }
}