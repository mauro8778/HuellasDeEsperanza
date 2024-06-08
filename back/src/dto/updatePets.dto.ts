import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"
import { petSize } from "./helpers/pet_size.enum"

export class UpdatePetsDto{

    @IsOptional()
    @IsString()
    @ApiProperty({
        description: "El nombre del usuario, debe tener como minimo 3 caracteres",
        example: "Oscar"
    })
    name?: string

        
    @IsOptional()
    @IsString()
    @ApiProperty({
        example: "Firulais"
    })
    breed?: string


    @IsOptional()
    @IsNumber()
    @ApiProperty({
        example: "Firulais"
    })
    age?: number

    @IsOptional()
    @IsNumber()
    @ApiProperty({
        example: "2"
    })
    month: string


    @IsOptional()
    @IsString()
    @ApiProperty({
        example: "medium"
    })
    pet_size?: petSize.Big | petSize.Little | petSize.Medium
    
    @IsOptional()
    @IsString()
    @ApiProperty({
        description: "Descripción del producto",
        example: "..."
    })
    description?: string

}