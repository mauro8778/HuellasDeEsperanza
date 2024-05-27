import { PrimaryGeneratedColumn } from "typeorm";

export class CreateUserDto {

    @PrimaryGeneratedColumn('uuid')
  id: string;
}