// 'use client'

// import { IRefugios } from '@/interface/IRefugios';
// import Image from 'next/image';


// export const RefugioDetail: React.FC<IRefugios> = ({ name, description, imgUrl, location, zona, shelter_name, phone}) => {

//     return (
//         <>
//             <div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-3 gap-3 ">

//                 <div className="col-span-1 md:col-span-2 flex justify-center">
//                 <Image
//                 src={imgUrl ?? ''} 
//                 alt={name ?? ''} 
//                 width={500} 
//                 height={300}
//                 />
//                 </div>

//                 <div className="col-span-1 px-5 shadow-xl mt-5">
                    
                    
//                     <h1 className='antialiased font-bold text-xl'>
//                         {shelter_name}
//                     </h1>
                    
//                     <h2 className=" text-sm">Estamos en {zona} </h2>
//                     <h2 className=" text-sm">Ubicados en {location} </h2>
//                     <h2 className=" text-sm mt-5">Contacto: {name} - {phone} </h2>

//                     <h3 className="font-bold text-sm mt-5">Descripción:</h3>
//                     <p className="font-light">{description}</p>

                    

//                 </div>
//             </div>
//                 <div>
//                     {/* <h1 className='font-bold text-center mt-5'>Nuestras Mascotas</h1> */}
                    
                    
//                 </div>
        
//         </>
//     )
// }
// export default RefugioDetail
'use client'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { IRefugios } from '@/interface/IRefugios';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export const RefugioDetail: React.FC<IRefugios> = ({ id, name, description, imgUrl, location, zona, shelter_name, phone }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(0);

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleAddToCart = () => {
    const donation = {
      shelter: { id, name: shelter_name },
      amount: selectedAmount
    };

    let donations = localStorage.getItem('donations');
    donations = donations ? JSON.parse(donations) : [];
    if (Array.isArray(donations)) {
      donations.push(donation);
      localStorage.setItem('donations', JSON.stringify(donations));
      Swal.fire(`Tu donación de $${selectedAmount} fue agregada con éxito`);
      redirect('/refugios'); //* <---- fijarme bie  la redireccion a la lista de refugios
    } else {
      console.error("Error: donations no es un array.");
    }
  };

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

          <h2 className="text-sm">Estamos en {zona} </h2>
          <h2 className="text-sm">Ubicados en {location} </h2>
          <h2 className="text-sm mt-5">Contacto: {name} - {phone} </h2>

          <h3 className="font-bold text-sm mt-5">Descripción:</h3>
          <p className="font-light">{description}</p>
        </div>
      </div>

      <div className="donation-section mt-5">
        <h2>Donar al refugio</h2>
        <div className="donation-amounts flex justify-around mt-3">
          <button onClick={() => handleSelectAmount(500)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Donar $500 ARG
          </button>
          <button onClick={() => handleSelectAmount(1000)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Donar $1000 ARG
          </button>
          <button onClick={() => handleSelectAmount(5000)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Donar $5000 ARG
          </button>
        </div>
        <button onClick={handleAddToCart} className="mt-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default RefugioDetail;
