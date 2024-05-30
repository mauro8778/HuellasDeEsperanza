import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { DonationEntity } from "./donation.entity";
import { AdoptionEntity } from "./adoption.entity";


@Entity
({
    name: 'users'
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

    @OneToMany(() => DonationEntity, donation => donation.user)
    donations: DonationEntity[];


    @OneToMany( ()=> AdoptionEntity, adoptions => adoptions.user)
    adoptions: AdoptionEntity[]

}