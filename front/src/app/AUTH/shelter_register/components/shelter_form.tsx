/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { RiGoogleFill, RiCheckFill, RiErrorWarningFill } from 'react-icons/ri';
import Button from '@/components/ui/button';
import ButtonIcon from '@/components/ui/button-icon';
import Input from '@/components/ui/input';
import axios from 'axios';

const ShelterForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dni: '',
    phone: '',
    shelterName: '',
    locality: '',
    description: '',
  });

  const [validations, setValidations] = useState({
    nameValid: null as boolean | null,
    emailValid: null as boolean | null,
    passwordValid: null as boolean | null,
    dniValid: null as boolean | null,
    phoneValid: null as boolean | null,
    shelterNameValid: null as boolean | null,
    localityValid: null as boolean | null,
    descriptionValid: null as boolean | null,
  });

  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; // Ejemplo: al menos 6 caracteres
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case 'email':
        setValidations({ ...validations, emailValid: validateEmail(value) });
        break;
      case 'password':
        setValidations({ ...validations, passwordValid: validatePassword(value) });
        break;
      case 'name':
      case 'dni':
      case 'phone':
      case 'shelterName':
      case 'locality':
      case 'description':
        setValidations({ ...validations, [`${name}Valid`]: value.length > 0 });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Reset error message

    const allValid = Object.values(validations).every((valid) => valid === true);

    if (allValid) {
      try {
        const response = await fetch('https://backpf-prueba.onrender.com/auth/register/shelter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
    
        router.push('/AUTH/login');
        if (response.ok) {
        } else {
          // setError('Error en el registro. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error en el registro:', error);
        setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    } else {
      setError('Por favor, completa todos los campos correctamente.');
    }
    
    
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Registra tu Refugio</h2>
        <p className="text-gray-500 text-sm">
          Por favor registre su refugio para poder recibir ayuda y dejar su huella de esperanza.
        </p>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              isValid={validations.nameValid}
            />
            {validations.nameValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.nameValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              isValid={validations.emailValid}
            />
            {validations.emailValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.emailValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              isValid={validations.passwordValid}
            />
            {validations.passwordValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.passwordValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="text"
              name="dni"
              placeholder="DNI"
              value={formData.dni}
              onChange={handleChange}
              isValid={validations.dniValid}
            />
            {validations.dniValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.dniValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              isValid={validations.phoneValid}
            />
            {validations.phoneValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.phoneValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="text"
              name="shelterName"
              placeholder="Nombre del Refugio"
              value={formData.shelterName}
              onChange={handleChange}
              isValid={validations.shelterNameValid}
            />
            {validations.shelterNameValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.shelterNameValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="text"
              name="locality"
              placeholder="Localidad"
              value={formData.locality}
              onChange={handleChange}
              isValid={validations.localityValid}
            />
            {validations.localityValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.localityValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
          <div className="relative">
            <Input
              type="text"
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
              isValid={validations.descriptionValid}
            />
            {validations.descriptionValid === true && <RiCheckFill className="absolute right-2 top-3 text-green-500" />}
            {validations.descriptionValid === false && <RiErrorWarningFill className="absolute right-2 top-3 text-red-500" />}
          </div>
        </div>
        <Button type="submit" label="Crear cuenta" className="w-full mt-4" />
        <div className="mt-5 mb-10 flex items-center justify-center gap-x-2">
          <p className="text-gray-500">¿Tienes una cuenta?</p>
          <button
            type="button"
            onClick={() => router.push('/AUTH/login')}
            className="font-semibold hover:text-primary transition-colors duration-300"
          >
            Iniciar sesión
          </button>
        </div>
        {/* <div className="mb-5">
          <hr className="border-2" />
          <div className="flex justify-center">
            <span className="bg-white px-8 -mt-3">o</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <ButtonIcon icon={RiGoogleFill} />
        </div> */}
      </form>
    </div>
  );
};

export default ShelterForm;
