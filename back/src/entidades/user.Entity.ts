import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity
({
    name: 'user'
})
export class UserEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()


    @Column({
        type:"varchar",
        nullable: false,
    })
    name: string


    @Column({
        type:"varchar",
        nullable: false,
    })
    last_name: string


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


    @Column({
        nullable: false,
    })
    birthday: Date


    @Column({
        type: "int",
        nullable: true
    })
    phone?: number | undefined


    @Column({
        type: "varchar",
        nullable: true
    })
    location?: string | undefined

}