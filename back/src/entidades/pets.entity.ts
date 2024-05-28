import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name: 'pet'
})
export class PetsEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number = uuid()
    

    @Column({
        type:"varchar",
        nullable: true
    })
    name?: string | undefined

        
    @Column({
        type:"varchar",
        nullable: false
    })
    breed: string


    @Column({
        type:"varchar",
        nullable: false
    })
    age: Date


    @Column({
        type:"varchar",
        nullable: false
    })
    dog_size: string


    @Column({
        type:"varchar",
        nullable: true
    })
    godfather?: string | undefined

}