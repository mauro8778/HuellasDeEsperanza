import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { UserEntity } from "./user.entity";
import { ShelterEntity } from "./shelter.entity";


@Entity({
    name:'donation'
})
export class DonationEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

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

    @ManyToOne(() => ShelterEntity, shelter => shelter.donations)
  shelter: ShelterEntity;

    @ManyToOne(() => UserEntity, user => user.donations)
  user: UserEntity;

}