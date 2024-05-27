import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity
({
    name: 'user'
})
export class UserEntity
{
    @PrimaryGeneratedColumn('uuid')
    id:string;
}