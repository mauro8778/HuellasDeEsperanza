import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name: 'admin'
})

export class AdminEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number = uuid()


    @Column({
        type:"varchar",
        nullable: false,
    })
    name: string


    @Column({
        type:"varchar",
        unique: true,
        nullable: false,
    })
    email: string
    

    @Column({
        type:"varchar",
        nullable: false,
    })
    password: string
}