import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class mercadoDto{
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    quanty: number;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number;
    
}