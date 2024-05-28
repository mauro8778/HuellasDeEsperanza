import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name:'adoption'
})
export class AdoptionEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number = uuid()


    @Column({
        nullable: false,
    })
    date: Date


    @Column()
    pet_id: string


    @Column()
    user_id: string

}