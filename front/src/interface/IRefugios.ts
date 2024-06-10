

export interface IRefugios {
    id?: number;
    name: string;
    zona: string;
    imgUrl: string;
    description: string;
    location: string;
    shelter_name?:string;
    email?: string;
    phone?: number;
    pets?: string;
}

export interface IParams {
    id: string;

}