export interface LoginResponse {
    success : boolean
    user: string
    name : string
    imagen1:string
    
}

export interface IAlimentos {
    success : boolean
    user: string
    name : string
    partes : string
    imagen1:string
    alimento_id:string
}

export interface ITtipoAlimentos {
    success : boolean
    name : string
}

export interface IAlimento {
    tipo : string
    name : string
    imagen1:string
}

export interface User {
name : string
success : boolean


}

export interface IReceta {
    receta_id : string
    nombre : string
    imagen1 : string
    bloqueado: string
    
    
    }
