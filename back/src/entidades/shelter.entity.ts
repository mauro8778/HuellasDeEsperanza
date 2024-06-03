import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DonationEntity } from './donation.entity';
import { AdoptionEntity } from './adoption.entity';
import { PetsEntity } from './pets.entity';

@Entity({
  name: 'shelter',
})
export class ShelterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  dni: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone?: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  shelterName: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  locality: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    nullable: true,
    default: false,
  })
  exotic_animals: boolean;

  @Column({
    nullable: true,
    default: false,
  })
  isActive: boolean;

  @OneToMany(() => DonationEntity, (donation) => donation.shelter)
  donations: DonationEntity[];

  @OneToMany(() => AdoptionEntity, (adoptions) => adoptions.shelter)
  adoptions: AdoptionEntity[];

  @OneToMany(() => PetsEntity, (pets) => pets.shelter)
  pets: AdoptionEntity[];
}
