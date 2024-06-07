export interface IRegisterProp {
    name: string
    email: string
    password: string
    repeatPassword: string
}


export interface ILogingProps {
    
    email: string,
    password: string
}

export interface IErrorProps {
    email?: string,
    password?: string
}

export interface IMascotas {
    id?: number
    name?: string
    edad?: string
    sexo?: string
    description?: string
    image?: string
    category?: string
    refugio?: string
    breed?: string
    age:string
    pet_size?: string
}

export interface IRefugios {
    id?: number
    name: string
    provincia?: string
    zona?: string
    image: string
    description?: string
}