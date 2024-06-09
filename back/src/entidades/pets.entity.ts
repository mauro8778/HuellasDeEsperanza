import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { ShelterEntity } from "./shelter.entity";
import { UserEntity } from "./user.entity";
import { AdoptionEntity } from "./adoption.entity";


@Entity({
    name: 'pet'
})
export class PetsEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()


    @Column({
        type: "varchar",
        nullable: true,
        default: "Sin nombre"
    })
    name?: string


    @Column({
        type: "varchar",
        nullable: false
    })
    sexo: string


    @Column({
        type: "varchar",
        nullable: false
    })
    breed: string


    @Column({
        type: "varchar",
        nullable: false
    })
    species: string


    @Column({
        nullable: false
    })
    age: number

    @Column({
        nullable: false
    })
    month: number


    @Column({
        type: "varchar",
        nullable: true,
        default: ""
    })
    description?: string


    @Column({
        type: "varchar",
        nullable: false
    })
    pet_size: string


    @Column({
        type: "text",
        default: "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
    })
    imgUrl: string


    @Column({
        type: "varchar",
        nullable: true
    })
    godfather?: string | undefined

    @Column({
        nullable: true,
        default: false,
    })
    isCondition: boolean;

    @Column({
        nullable: true,
        default: true,
    })
    isActive: boolean;


    @ManyToOne(() => ShelterEntity, shelter => shelter.pets)
    shelter: ShelterEntity

    @ManyToMany(() => UserEntity, (user) => user.favorite_pets)
    user: UserEntity[];

    @ManyToMany(() => UserEntity, (user) => user.pets)
    users: UserEntity[];

    @OneToMany(() => AdoptionEntity, adoption => adoption.pet)
  
    adoptions: AdoptionEntity[];

}