'use client';

import Button from '@/components/ui/button';
import ButtonIcon from '@/components/ui/button-icon';
import Input from '@/components/ui/input';
import { useRouter } from 'next/navigation';

import { RiGoogleFill } from 'react-icons/ri';

const Form = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>Registrate</h2>
        <p className='text-gray-500 text-sm'>
          Pofavor registrese para poder iniciar sesion y dejar su huellas de esperanza 
          
        </p>
      </div>
      <form className='w-full'>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Input type='password' placeholder='Confirm password' />
        <Button type='submit' label='Create account' />
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>Tenes una cuenta?</p>
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

export default Form;
