import { Action } from "@ngrx/store";

export interface IAPPSTATE{
    contador: number
}

export enum contadorACTION{
    INCREMENTAR = 'INCREMENTAR',
    DECREMENTAR = 'DECREMENTAR',
    MULTIPLICAR = 'MULTIPLICAR',
}

export class incrementarAction implements Action{
    readonly type: string = contadorACTION.INCREMENTAR;
}

export class decrementarAction implements Action{
    readonly type: string = contadorACTION.DECREMENTAR;
}

export class multiplicarAction implements Action{
    readonly type: string = contadorACTION.MULTIPLICAR;
    constructor(public payload: number){}
}



export type actions = incrementarAction | decrementarAction | multiplicarAction;

