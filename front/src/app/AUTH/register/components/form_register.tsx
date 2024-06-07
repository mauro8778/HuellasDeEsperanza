'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

const Form_Register: React.FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    birthdate: '',
    phone: '',
    location: ''
  });

  const [formValidations, setFormValidations] = useState({
    nameValid: null,
    lastNameValid: null,
    emailValid: null,
    passwordValid: null,
    confirmPasswordValid: null,
    birthdateValid: null,
    phoneValid: null,
    locationValid: null
  });

  const [error, setError] = useState<string | null>(null);

  const validateFields = {
    name: (value: string) => value.trim().length >= 3,
    last_name: (value: string) => value.trim().length >= 3,
    email: (value: string) => /\S+@\S+\.\S+/.test(value),
    password: (value: string) => value.length >= 6,
    confirm_password: (value: string) => value === formData.password,
    birthdate: (value: string) => !isNaN(Date.parse(value)),
    phone: (value: string) => /^\d{10}$/.test(value),
    location: (value: string) => value.trim().length > 2
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    const validationKey = name === 'last_name' ? 'lastName' : name === 'confirm_password' ? 'confirmPassword' : name;
    setFormValidations(prev => ({
      ...prev,
      [`${validationKey}Valid`]: value === '' ? null : validateFields[name as keyof typeof validateFields](value)
    }));
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const phoneAsNumber = /^\d{10}$/.test(formData.phone) ? parseInt(formData.phone, 10) : null;

    const allValid = Object.values(formValidations).every(Boolean);
    if (!allValid) {
      setError('Por favor, completa todos los campos correctamente.');
      alert('Por favor, completa todos los campos correctamente.');
      console.log('Validation failed', formValidations);
      return;
    }

    console.log('Datos a enviar:', { ...formData, phone: phoneAsNumber });

    try {
      const response = await fetch('https://backpf-prueba.onrender.com/auth/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, phone: phoneAsNumber }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorMessage = await response.text();
        setError('Registro fallido. Por favor, inténtalo de nuevo.');
        alert('Registro fallido. Por favor, inténtalo de nuevo.');
        console.error('Error al registrar:', errorMessage);
        return;
      }

      const data = await response.json();
      const token = data.access_token;

      console.log('Registro exitoso, token:', token);

      localStorage.setItem('token', token);
      router.push('/AUTH/login');

    } catch (error) {
      setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      alert('Ocurrió un error. Por favor, inténtalo de nuevo.');
      console.error('Error al registrar:', error);
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
        {['name', 'last_name', 'email', 'password', 'confirm_password', 'birthdate', 'phone', 'location' ].map((field) => (
          <div key={field} className="relative mt-4">
            <Input
              type={field === 'password' || field === 'confirm_password' ? 'password' : field === 'birthdate' ? 'date' : field === 'phone' ? 'number' : 'text'}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className={`border-2 ${
                formValidations[`${field === 'last_name' ? 'lastName' : field === 'confirm_password' ? 'confirmPassword' : field}Valid` as keyof typeof formValidations] === null
                  ? 'border-gray-300'
                  : formValidations[`${field === 'last_name' ? 'lastName' : field === 'confirm_password' ? 'confirmPassword' : field}Valid` as keyof typeof formValidations]
                  ? 'border-green-500'
                  : 'border-red-500'
              }`}
            />
            {formValidations[`${field === 'last_name' ? 'lastName' : field === 'confirm_password' ? 'confirmPassword' : field}Valid` as keyof typeof formValidations] === false && (
              <p className="text-red-500 text-xs">
                {field === 'name' ? 'El nombre no puede estar vacío.' : ''}
                {field === 'last_name' ? 'El apellido no puede estar vacío.' : ''}
                {field === 'email' ? 'Ingrese un correo electrónico válido.' : ''}
                {field === 'password' ? 'La contraseña debe tener al menos 6 caracteres.' : ''}
                {field === 'confirm_password' ? 'Las contraseñas no coinciden.' : ''}
                {field === 'birthdate' ? 'Ingrese una fecha de nacimiento válida.' : ''}
                {field === 'phone' ? 'Ingrese un número de teléfono válido.' : ''}
                {field === 'location' ? 'Ingrese una ubicación.' : ''}
              </p>
            )}
          </div>
        ))}
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
