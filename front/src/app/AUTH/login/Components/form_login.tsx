'use client';
import { FormEvent, ReactNode, useState } from 'react';
import Button from '@/components/ui/button';
import ButtonIcon from '@/components/ui/button-icon';
import Input from '@/components/ui/input';
import { useRouter } from 'next/navigation';
// import { useAuth0 } from '@auth0/auth0-react';

import { RiGoogleFill } from 'react-icons/ri';

interface FormLoginProps {
  children?: ReactNode;
}

const Form_Login: React.FC<FormLoginProps> = ({ children }) => {
  ;

  const router = useRouter();
  // const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      // Utiliza los valores de email y password del estado
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/Home');
      } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>Bienvenido, ingresa!</h2>
        <p className='text-gray-500 text-sm'>
          Porfavor ingresa tu mail y contraseña para entrar en la aplicación
          
        </p>
      </div>
      <form className='w-full' onSubmit={handleLogin}>
        <Input type='text' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Contraseña' />
        <div className='flex justify-end mb-5'>
          <button
            type='button'
            onClick={() => router.push('/AUTH/forgot_password')}
            className='text-gray-500 hover:text-primary transition-colors duration-300'
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
        <Button type='submit' label='Ingresar' />
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿No tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/option_register')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Regístrate
          </button>
        </div>
        <div className='mb-5'>
          <hr className='border-2' />
          <div className='flex justify-center'>
            <span className='bg-white px-8 -mt-3'>o</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
          <ButtonIcon icon={RiGoogleFill} />
         
        </div>
      </form>
    </div>
  );
};

export default Form_Login;
