import { Action } from "@ngrx/store";

export enum contadorACTION{
    INCREMENTAR = 'INCREMENTAR',
    DECREMENTAR = 'DECREMENTAR',
}

export class incrementarAction implements Action{
    readonly type: string = contadorACTION.INCREMENTAR;
}

export class decrementarAction implements Action{
    readonly type: string = contadorACTION.DECREMENTAR;
}


