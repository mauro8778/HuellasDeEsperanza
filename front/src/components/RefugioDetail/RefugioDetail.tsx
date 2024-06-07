'use client'

import { IRefugios } from '@/interface/IRefugios';
import Image from 'next/image';


export const RefugioDetail: React.FC<IRefugios> = ({ name, description, imgUrl, location, zona, shelter_name, phone}) => {

    return (
        <>
            <div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-3 gap-3 ">

                <div className="col-span-1 md:col-span-2 flex justify-center">
                <Image
                src={imgUrl ?? ''} 
                alt={name ?? ''} 
                width={500} 
                height={300}
                />
                </div>

                <div className="col-span-1 px-5 shadow-xl mt-5">
                    
                    
                    <h1 className='antialiased font-bold text-xl'>
                        {shelter_name}
                    </h1>
                    
                    <h2 className=" text-sm">Estamos en {zona} </h2>
                    <h2 className=" text-sm">Ubicados en {location} </h2>
                    <h2 className=" text-sm mt-5">Contacto: {name} - {phone} </h2>

                    <h3 className="font-bold text-sm mt-5">Descripción:</h3>
                    <p className="font-light">{description}</p>

                </div>
            </div>
                <div>
                    {/* <h1 className='font-bold text-center mt-5'>Nuestras Mascotas</h1> */}
                    
                </div>
        
        </>
    )
}