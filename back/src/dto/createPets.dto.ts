import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { species } from "./helpers/species.enum"
import { petSize } from "./helpers/pet_size.enum"

export class CreatePetsDto{ 

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "El nombre del usuario, debe tener como minimo 3 caracteres",
        example: "Oscar"
    })
    name?: string | undefined

        
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "Firulais"
    })
    breed: string


    @IsNotEmpty()
    @IsDate()
    @ApiProperty({
        example: "Firulais"
    })
    age: number


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "medium"
    })
    pet_size: petSize.Big | petSize.Little | petSize.Medium

}