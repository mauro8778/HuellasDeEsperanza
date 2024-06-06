import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from 'src/dto/updateUser.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
export class UserController {
    constructor(private readonly usersService : UserService){}

    @Get()
    getUsers(){
        return this.usersService.getUsers()
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
}
