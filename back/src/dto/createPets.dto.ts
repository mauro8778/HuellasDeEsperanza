import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { petSize } from "./helpers/pet_size.enum"

export class CreatePetsDto{ 

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Nombre de la mascota",
        example: "Oscar"
    })
    name?: string | undefined

        
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "Perro"
    })
    breed: string


    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        example: "2"
    })
    age: number


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "medium"
    })
    pet_size: petSize.Big | petSize.Little | petSize.Medium

    @IsOptional()
    @IsString()
    @ApiProperty({
        description: "Imagen del producto",
        example: "img.jpg"
    })
    imgUrl?: string   

    @IsEmpty()
    godfather?: string | undefined


}