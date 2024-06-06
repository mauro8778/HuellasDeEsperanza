'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { RiCheckFill, RiErrorWarningFill } from 'react-icons/ri';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

const Form_Register: React.FC = () => {
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
    setConfirmPasswordValid(validateConfirmPassword(confirmPassword));
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(validateConfirmPassword(value));
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
  
    // Verifica que todos los campos sean válidos
    if (!nameValid || !emailValid || !passwordValid || !confirmPasswordValid) {
      setError('Por favor, completa todos los campos correctamente.');
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
  
    try {
      const response = await fetch('https://backpf-prueba.onrender.com/auth/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      // Maneja la respuesta de la petición
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error al registrar:', errorMessage);
        setError('Registro fallido. Por favor, inténtalo de nuevo.');
        alert('Registro fallido. Por favor, inténtalo de nuevo.');
        return;
      }
  
      const data = await response.json();
      const token = data.access_token;
  
      // Guarda el token en el local storage y redirige
      localStorage.setItem('token', token);
      router.push('/AUTH/login');
  
    } catch (error) {
      console.error('Error al registrar:', error);
      setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      alert('Ocurrió un error. Por favor, inténtalo de nuevo.');
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
            isValid={nameValid}
          />
          {nameValid === false && <p className="text-red-500 text-xs">El nombre no puede estar vacío.</p>}
        </div>
        <div className="relative mt-4">
          <Input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
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
            isValid={passwordValid}
          />
          {passwordValid === false && <p className="text-red-500 text-xs">La contraseña debe tener al menos 6 caracteres.</p>}
        </div>
        <div className="relative mt-4">
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            isValid={confirmPasswordValid}
          />
          {confirmPasswordValid === false && <p className="text-red-500 text-xs">Las contraseñas no coinciden.</p>}
        </div>
        <Button type='submit' label='Crear cuenta' />
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿Tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/AUTH/login')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Inicia sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form_Register;
