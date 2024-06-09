import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from 'src/dto/updateUser.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
export class UserController {
    constructor(private readonly usersService : UserService){}

    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }

    @Get('favorite')
    getFavorites(){
        return this.usersService.getFavorites()
    }
    
    @Get(':id')
    getUserById(@Param('id', ParseUUIDPipe) id : string){
        return this.usersService.getUserById(id)
    }

    @Put('profile')
    updatedProfile(
        @Param('id',ParseUUIDPipe) id:string,
        @Body() user : UpdateUserDto){
        return this.usersService.updatedProfile(id, user)
    }

    @Post(':id')
    deleteUser(@Param('id', ParseUUIDPipe) id : string) {
        return this.usersService.deleteUser(id)
    }

    @Post('active/:id')
    activeUsers(@Param('id', ParseUUIDPipe) id : string) {
        return this.usersService.activeUsers(id)
    }


    @Post('shelter/favorite/:id')
    @ApiQuery({ name: 'userId', required: true }) 
    addShelterFavorite(
        @Param('id',ParseUUIDPipe) shelterId, @Query("userId") userId: string){

        // const userId = request.user['https://huellasdesperanza.com/userID'];}

        return this.usersService.addShelterFavorite(shelterId, userId)
    }

    @Post('pet/favorite/:id')
    @ApiQuery({ name: 'userId', required: true }) 
    addPetFavorite(
        @Param('id',ParseUUIDPipe) pet, @Query("userId") userId: string){

        // const userId = request.user['https://huellasdesperanza.com/userID'];}

        return this.usersService.addPetFavorite(pet, userId)
    }

    @Put('pet/favorite/:id')
    @ApiQuery({ name: 'userId', required: true }) 
    PutPetFavorite(
        @Param('id',ParseUUIDPipe) pet, @Query("userId") userId: string){

        // const userId = request.user['https://huellasdesperanza.com/userID'];}

        return this.usersService.PutPetFavorite(pet, userId)
    }

    @Put('shelter/favorite/:id')
    @ApiQuery({ name: 'userId', required: true }) 
    PutShelterFavorite(
        @Param('id',ParseUUIDPipe) shelterId, @Query("userId") userId: string){

        // const userId = request.user['https://huellasdesperanza.com/userID'];}

        return this.usersService.PutShelterFavorite(shelterId, userId)
    }
}
