import { Controller, Get, Post } from '@nestjs/common';
import { DonationService } from './donation.service';

@Controller('donation')
export class DonationController {
    constructor(private readonly donationservice:DonationService){}

    @Get()
    async Donation (){}

    @Get(':id')
    async DonationById (){}

    @Get('user/:id')
    async UserDonation(){}

    @Get('shelter/:id')
    async ShelterDonation(){}

    @Post('new')
    async NewDonation(){}

    @Post('confirm')
    async ConfirmDonation(){}
}
