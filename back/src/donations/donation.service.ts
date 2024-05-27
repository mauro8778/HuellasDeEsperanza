import { Injectable } from '@nestjs/common';
import { DonationRepository } from './donation.repository';

@Injectable()
export class DonationService {
    constructor(private readonly donationrepository:DonationRepository){}

    async Donation (){}

    async DonationById (){}

    async UserDonation(){}

    async ShelterDonation(){}

    async NewDonation(){}

    async ConfirmDonation(){}
}
