import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class mercadoDto{
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;
    
    @IsEmpty()
    @IsNumber()
    quanty: number;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number;
    
}