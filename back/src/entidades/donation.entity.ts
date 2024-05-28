import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name:'donation'
})
export class DonationEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number = uuid()

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: false   
    })
    donation_amount: number


    @Column({
        nullable: false,
    })
    date: Date


    @Column()
    user_id: string


    @Column()
    shelter_id: string

}