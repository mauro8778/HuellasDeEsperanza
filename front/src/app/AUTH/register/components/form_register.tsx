'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { RiCheckFill, RiErrorWarningFill } from 'react-icons/ri';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

const Form: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [nameValid, setNameValid] = useState<boolean | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState<boolean | null>(null);

  const validateName = (name: string) => name.trim().length > 0;
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) => password.length >= 6;
  const validateConfirmPassword = (confirmPassword: string) => confirmPassword === password;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setNameValid(validateName(value));
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

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(validateConfirmPassword(value));
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
      try {
        const response = await fetch('https://backpf-prueba.onrender.com/auth/register/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          const token = data.access_token;

          
          localStorage.setItem('token', token);

          
          router.push('/AUTH/login');
        } else {
          const errorMessage = await response.text();
          console.error('Error al registrar:', errorMessage);
          setError('Registro fallido. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al registrar:', error);
        setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    } else {
      setError('Por favor, completa todos los campos correctamente.');
    }
  };

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>Regístrate</h2>
        <p className='text-gray-500 text-sm'>
          Por favor, regístrate para poder iniciar sesión y dejar tu huella de esperanza.
        </p>
      </div>
      <form className='w-full' onSubmit={handleRegister}>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
        <div className="relative">
          <Input
            type='text'
            name='name'
            placeholder='Nombre'
            value={name}
            onChange={handleNameChange}
            className={`w-full ${nameValid === false ? 'border-red-500' : nameValid === true ? 'border-green-500' : ''}`}
          />
          {nameValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
          {nameValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
        </div>
        <div className="relative mt-4">
          <Input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            className={`w-full ${emailValid === false ? 'border-red-500' : emailValid === true ? 'border-green-500' : ''}`}
          />
          {emailValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
          {emailValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
        </div>
        <div className="relative mt-4">
          <Input
            type='password'
            name='password'
            placeholder='Contraseña'
            value={password}
            onChange={handlePasswordChange}
            className={`w-full ${passwordValid === false ? 'border-red-500' : passwordValid === true ? 'border-green-500' : ''}`}
          />
          {passwordValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
          {passwordValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
        </div>
        <div className="relative mt-4">
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={`w-full ${confirmPasswordValid === false ? 'border-red-500' : confirmPasswordValid === true ? 'border-green-500' : ''}`}
          />
          {confirmPasswordValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
          {confirmPasswordValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
        </div>
        <Button type='submit' label='Crear cuenta' />
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿Tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/auth/login')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Inicia sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
