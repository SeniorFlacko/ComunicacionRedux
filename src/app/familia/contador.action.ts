import { Action } from "@ngrx/store";


export interface IAPPSTATE{
    contador: number
}

export enum contadorACTION{
    INCREMENTAR = 'INCREMENTAR',
    DECREMENTAR = 'DECREMENTAR',
    MULTIPLICAR = 'MULTIPLICAR',
}

export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';
export const MULTIPLICAR = 'MULTIPLICAR';
export const DIVIDIR = 'DIVIDIR';
export const RESET = 'RESET';

export class IncrementarAction implements Action{
    readonly type: string = INCREMENTAR;
}

export class DecrementarAction implements Action{
    readonly type: string = DECREMENTAR;
}

export class MultiplicarAction implements Action{
    readonly type: string = MULTIPLICAR;
    constructor(public payload: number){
    }
}

export class DividirAction implements Action{
    readonly type: string = DIVIDIR;
    constructor(public payload: number){
    }
}

export class ResetAction implements Action{
    readonly type: string = RESET;
}

export type actions = MultiplicarAction | IncrementarAction | DecrementarAction | ResetAction | DividirAction;

