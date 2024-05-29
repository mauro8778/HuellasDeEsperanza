/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect } from 'react';
import { saira, viga, syncopate } from '@/fonts/fonts';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  useEffect(() => { // Revisar esta parte
    const content = document.querySelector('.content'); 
    content?.classList.add('fade-in');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-top lg:bg-center xl:bg-bottom"
        style={{ backgroundImage: "url('/Gatofondo.webp')" }}
      ></div>
      <div className="overflow-hidden ml-4 sm:ml-8 md:ml-16 animation-slide-in-left relative z-10 flex flex-col justify-center items-center mx-4 sm:mx-8 md:mx-16 mt-20 p-4 md:p-6 content bg-black bg-opacity-40 rounded-xl sm:w-[320px] md:w-[400px] lg:w-[480px] sm:h-auto">
        <h1 className={`${viga.className}  text-white text-center text-2xl md:text-3xl lg:text-4xl mb-4 mt-4`}>
          {/* <img src="/LogoHuellas.svg"  className=" w-40 h-auto" /> */}
          Huellas de Esperanza
          
        </h1>
        <div className="text-white text-center max-w-xs mx-auto">
          <p className={`${syncopate.className} mb-4 text-xs md:text-sm lg:text-base`}>
            Donde conectamos corazones peludos con hogares amorosos. Somos una plataforma para adopción de mascotas y registro de refugios.
          </p>
        </div>
        <div className="text-white text-center max-w-xs mx-auto">
          <h3 className={`${saira.className} text-lg md:text-xl lg:text-2xl mt-4`}>
            ¡Bienvenido, donde cada adopción cuenta!
          </h3>
        </div>
        <div className="flex justify-center mt-8 items-end mb-3">
          <Link href={'/Home'}>
          <button className="px-4 py-2 text-xs md:text-sm lg:text-base text-white font-extrabold bg-green-500 rounded-3xl hover:bg-green-400 animation-slide-in-left">
            Deja tu huella
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
