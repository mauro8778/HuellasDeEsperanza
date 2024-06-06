import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
// import { DonationEntity } from './donation.entity';
import { AdoptionEntity } from './adoption.entity';
import { PetsEntity } from './pets.entity';
import { OrderDetailsEntity } from './orderDetail.entity';

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
    type: 'int',
    unique: true,
    nullable: false,
  })
  dni: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  phone?: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  shelter_name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  location: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  zona: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;
  
  @Column({
    type: "text",
    default: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
  })
  imgUrl: string

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

  // @Column({
  //   nullable: true,
  // })
  // donations: number;



  @OneToMany(() => AdoptionEntity, (adoptions) => adoptions.shelter)
  adoptions: AdoptionEntity[];

  @OneToMany(() => PetsEntity, (pets) => pets.shelter)
  pets: PetsEntity[];

  @ManyToMany(() => OrderDetailsEntity, (orderdetail) => orderdetail.shelters)
  orderDetail: OrderDetailsEntity[]

}
