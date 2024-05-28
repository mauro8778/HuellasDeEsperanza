import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name:'favs'
})
export class FavsEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number = uuid()


    @Column()
    user_id: string


    @Column()
    pet_id: string

}