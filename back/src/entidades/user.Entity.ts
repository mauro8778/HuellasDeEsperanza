import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DonationEntity } from './donation.entity';
import { AdoptionEntity } from './adoption.entity';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    nullable: true,
    default: true,
  })
  isActive: boolean;

  @OneToMany(() => DonationEntity, (donation) => donation.user)
  donations: DonationEntity[];

  @OneToMany(() => AdoptionEntity, (adoptions) => adoptions.user)
  adoptions: AdoptionEntity[];
}
