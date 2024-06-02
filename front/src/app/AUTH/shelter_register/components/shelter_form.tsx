/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import Button from '@/components/ui/button';
import ButtonIcon from '@/components/ui/button-icon';
import Input from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { RiGoogleFill } from 'react-icons/ri';

export const shelter_form = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>Registrate tu Refugio</h2>
        <p className='text-gray-500 text-sm'>
          Por favor registre su refugio para poder recibir ayuda y dejar su huella de esperanza.
        </p>
      </div>
      <form className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input type='text' placeholder='Name' />
          <Input type='text' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Input type='text' placeholder='DNI' />
          <Input type='text' placeholder='Phone' />
          <Input type='text' placeholder='Nombre de Refugio' />
          <Input type='text' placeholder='Localidad' />
          <Input type='text' placeholder='Descripción' />
        </div>
        <Button type='submit' label='Create account' className='w-full mt-4' />
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿Tenés una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/AUTH/login')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Login
          </button>
        </div>
        <div className='mb-5'>
          <hr className='border-2' />
          <div className='flex justify-center'>
            <span className='bg-white px-8 -mt-3'>or</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
          <ButtonIcon icon={RiGoogleFill} />
        </div>
      </form>
    </div>
  );
};

export default shelter_form;
