import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { ShelterEntity } from "./shelter.entity";


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


    @ManyToOne(() => ShelterEntity, shelter => shelter.pets)
    shelter: ShelterEntity 

}