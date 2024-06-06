'use client';

import { FormEvent, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { RiGoogleFill, RiCheckFill, RiErrorWarningFill } from 'react-icons/ri';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

const Form_Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; 
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (emailValid && passwordValid) {
      try {
        const response = await fetch('https://backpf-prueba.onrender.com/users', { // Aquí va la URL de tu backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const { token, userType } = await response.json();
          localStorage.setItem('token', token);
          alert('Iniciaste sesión correctamente.');
          if (userType === 'shelter') {
            router.push('/dashboard-shelter');
          } else {
            router.push('/Home');
          }
        } else {
          setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
          alert('Error: Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
        alert('Error: Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    } else {
      setError('Por favor, completa todos los campos correctamente.');
      alert('Error: Por favor, completa todos los campos correctamente.');
    }
  };

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>Bienvenido, ingresa!</h2>
        <p className='text-gray-500 text-sm'>
          Por favor, ingresa tu mail y contraseña para entrar en la aplicación
        </p>
      </div>
      <form className='w-full' onSubmit={handleLogin}>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
        <div className="relative">
          <Input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            className={`w-full ${emailValid === false ? 'border-red-500' : emailValid === true ? 'border-green-500' : ''}`}
            isValid={emailValid}
          />
          {emailValid === false && <p className="text-red-500 text-xs">Ingrese un correo electrónico válido.</p>}
        </div>
        <div className="relative mt-4">
          <Input
            type='password'
            name='password'
            placeholder='Contraseña'
            value={password}
            onChange={handlePasswordChange}
            className={`w-full ${passwordValid === false ? 'border-red-500' : passwordValid === true ? 'border-green-500' : ''}`}
            isValid={passwordValid}
          />
          {passwordValid === false && <p className="text-red-500 text-xs">La contraseña debe tener al menos 6 caracteres.</p>}
        </div>
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
      </form>
    </div>
  );
};

export default Form_Login;
