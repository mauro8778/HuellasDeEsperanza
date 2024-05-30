import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { UserEntity } from "./user.entity";
import { ShelterEntity } from "./shelter.entity";


@Entity({
    name:'adoption'
})
export class AdoptionEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()


    @Column({
        nullable: false,
    })
    date: Date


    @Column()
    pet_id: string


    @ManyToOne(() => UserEntity, (user) => user.adoptions)
    user: UserEntity

    @ManyToOne(() => ShelterEntity, (shelter) => shelter.adoptions)
    shelter: ShelterEntity
}