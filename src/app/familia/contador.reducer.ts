import * as fromContador from './contador.action';


export function contadorReducer(state = 10, action: fromContador.actions){
    let accion;
    switch (action.type) {
        
        case fromContador.INCREMENTAR:
            return state + 1;

        case fromContador.DECREMENTAR:
            return state - 1;
        
        case fromContador.MULTIPLICAR: 
            accion = <fromContador.MultiplicarAction>action;
            return state * accion.payload;
        
        case fromContador.DIVIDIR: 
            accion = <fromContador.DividirAction>action;
            return state / accion.payload;

        case fromContador.RESET: 
            return 0;
        
        default:
            return state;
    }
}