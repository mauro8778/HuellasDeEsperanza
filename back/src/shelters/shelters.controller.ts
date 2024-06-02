import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { ApiTags } from '@nestjs/swagger';
import { Auth0Guard } from 'src/guards/auth0.guard';

@ApiTags('Shelters')
@Controller('shelters')
export class SheltersController {
  constructor(private readonly sheltersService: SheltersService) {}

  @Get()
  getShelters() {
    return this.sheltersService.getShelters();
  }

  @Get(':id')
  getShelterById(@Param('id', ParseUUIDPipe) id: string) {
    return this.sheltersService.getShelterById(id);
  }

  @UseGuards(Auth0Guard)
  @Post('active/:id')
  updateActiveShelter(@Req() req, @Param('id', ParseUUIDPipe) id: string) {
    const accessToken = req.auth0Token;
    return this.sheltersService.updateActiveShelter(id, accessToken);
  }

  @UseGuards(Auth0Guard)
  @Post(':id')
  deleteShelter(@Req() req, @Param('id', ParseUUIDPipe) id: string) {
    const accessToken = req.auth0Token;
    return this.sheltersService.deleteShelter(id, accessToken);
  }
}
