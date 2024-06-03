import { NextFunction, Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const dateActual = new Date()
    const date = dateActual.toLocaleDateString();
    const time = dateActual.toLocaleTimeString();
    console.log(`Ejecutando Middleware Global:
        Fecha: ${date}
        Hora: ${time}
        Metodo: ${req.method}
        Ruta: ${req.url} `);
    next();
  }
}
