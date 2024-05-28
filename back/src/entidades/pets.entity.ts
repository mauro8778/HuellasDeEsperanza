import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name: 'pet'
})
export class PetsEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()
    

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
        nullable: false
    })
    age: number


    @Column({
        type:"varchar",
        nullable: false
    })
    pet_size: string


    @Column({
        type: "text",
        default: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
    })
    imgUrl: string


    @Column({
        type:"varchar",
        nullable: true
    })
    godfather?: string | undefined


    @Column()
    refugio_id: string

}