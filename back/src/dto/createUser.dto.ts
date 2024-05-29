import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches,} from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "Juan"
    })
    name: string


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "Castillo"
    })
    last_name: string


    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({
        description: "Debe ser un Email",
        example: "example@gmail.com"
    })
    email: string


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "********"
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&.*])/, {
        message: "Debe contener al menos una letra minúscula, una letra mayúscula, un número y un caracter especial"
    })
    password: string


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Repetir la password",
        example: "..."
    })
    confirm_password: string


    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    birthday: Date


    @IsOptional()
    @IsNumber()
    @ApiProperty({
        description: "Debe ser un numero de telefono",
        example: "11 3344-5566"
    })
    phone?: number


    @IsOptional()
    @IsString()
    @ApiProperty()
    location?: string
}