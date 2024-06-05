'use client'

import { IMascotas } from '@/interface/IMascotas';
import Image from 'next/image';


export const MascotaDetail: React.FC<IMascotas> = ({ name, age, description, imgUrl}) => {

    return (
        <>
            <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">

                <div className="col-span-1 md:col-span-2 flex justify-center">
                <Image
                src={imgUrl ?? ''} 
                alt={name ?? ''} 
                width={500} 
                height={300}
                />
                </div>

                <div className="col-span-1 px-5 shadow-xl m-5">
                    
                    <h1 className='antialiased font-bold text-xl'>
                        {name}
                    </h1>
                    
                    <h3> {age} </h3>

                    <button
                    className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Postular
                        </span>
                    </button>

                    <h3 className="font-bold text-sm">Descripción:</h3>
                    <p className="font-light">{description}</p>

                </div>
            </div>
        
        </>
    )
}