import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationEntity } from 'src/entidades/donation.entity';

@Controller('donation')
export class DonationController {
    constructor(private readonly donationservice:DonationService){}

    @Get()
    async donation (){
        return await this.donationservice.donation()
    }

    @Get(':id')
    async donationById ( @Param('id',ParseUUIDPipe) id:string){
        return await this.donationservice.donationById(id)
    }

    @Get('user/:id')
    async userDonation(@Param('id',ParseUUIDPipe) userid:string){
        return await this.donationservice.userDonation(userid)
    }

    @Get('shelter/:id')
    async shelterDonation(@Param('id',ParseUUIDPipe) shelterid:string){
        return await this.donationservice.shelterDonation(shelterid)
    }

    @Post('new')
    async newDonation(@Body() donation:DonationEntity){
        return await this.donationservice.newDonation(donation)
    }

    @Post('confirm')
    async confirmDonation(@Body() donation:DonationEntity){
        return await this.donationservice.confirmDonation(donation)
    }
}