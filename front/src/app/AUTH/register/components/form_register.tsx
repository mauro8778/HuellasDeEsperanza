'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { RiCheckFill, RiErrorWarningFill } from 'react-icons/ri';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

const Form_Register: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [nameValid, setNameValid] = useState<boolean | null>(null);
  const [lastNameValid, setLastNameValid] = useState<boolean | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState<boolean | null>(null);
  const [birthdateValid, setBirthdateValid] = useState<boolean | null>(null);
  const [phone, setPhone] = useState<string>(''); // Cambiado a string en lugar de number
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);

  const validateName = (name: string) => name.trim().length > 0;
  const validateLastName = (lastName: string) => lastName.trim().length > 0;
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) => password.length >= 6;
  const validateConfirmPassword = (confirmPassword: string) => confirmPassword === password;
  const validateBirthdate = (birthdate: string) => new Date(birthdate).toString() !== 'Invalid Date';
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setNameValid(validateName(value));
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameValid(validateLastName(value));
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

  const handleBirthdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthdate(value);
    setBirthdateValid(validateBirthdate(value));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneValid(validatePhone(value));
  };


  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); 

    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  email, password }),
        });

        if (response.ok) {
          router.push('/AUTH/login');
        } else {
          // verifico respuesta de error de backend
          const erorMessage = await response.text();
          console.error('Error al registrar:', erorMessage);

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
            isValid={nameValid}
          />
          {nameValid === false && <p className="text-red-500 text-xs">El nombre no puede estar vacío.</p>}
        </div>
        <div className="relative mt-4">
          <Input
            type='text'
            name='lastName'
            placeholder='Apellido'
            value={lastName}
            onChange={handleLastNameChange}
            isValid={lastNameValid}
          />
          {lastNameValid === false && <p className="text-red-500 text-xs">El apellido no puede estar vacío.</p>}
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
        <div className="relative mt-4">
          <Input
            type='date'
            name='birthdate'
            placeholder='Fecha de nacimiento'
            value={birthdate}
            onChange={handleBirthdateChange}
            isValid={birthdateValid}
          />
          {birthdateValid === false && <p className="text-red-500 text-xs">Ingrese una fecha de nacimiento válida.</p>}
        </div>
        <div className="relative mt-4">
          <Input
            type='number'
            name='phone'
            placeholder='Teléfono'
            value={phone ? phone.toString() : ''}
            onChange={handlePhoneChange}
            isValid={phoneValid}
          />
          {phoneValid === false && <p className="text-red-500 text-xs">Ingrese un número de teléfono válido.</p>}
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