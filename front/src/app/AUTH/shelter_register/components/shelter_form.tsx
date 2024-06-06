/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';


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
    passwordValid: { valid: null as boolean | null, strength: '' },
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
    const hasMinLength = password.length >= 8;
    const hasAlphabeticChar = /[a-zA-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = "Débil";
    if (hasMinLength && hasAlphabeticChar && hasSpecialChar) {
        strength = "Fuerte";
    } else if (hasMinLength && hasAlphabeticChar) {
        strength = "Medio";
    }

    return {
        valid: hasMinLength && hasAlphabeticChar && hasSpecialChar,
        strength: strength
    };
}
;

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
        const response = await fetch('URL_DE_TU_BACKEND/api/shelters', { // Aquí va la URL de tu backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          router.push('/AUTH/login');
        } else {
          setError('Error en el registro. Por favor, inténtalo de nuevo.');
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
            {validations.nameValid === false && <p className="text-red-500 text-xs">El nombre no puede estar vacío.</p>}
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
            {validations.emailValid === false && <p className="text-red-500 text-xs">Ingrese un correo electrónico válido.</p>}
          </div>
          <div className="relative">
  <Input
    type="password"
    name="password"
    placeholder="Contraseña"
    value={formData.password}
    onChange={handleChange}
    isValid={validations.passwordValid.valid}
  />
  {validations.passwordValid.valid === false && <p className="text-red-500 text-xs">La contraseña debe tener al menos 8 caracteres.</p>}
  {validations.passwordValid.valid === true && <p className="text-green-500 text-xs">Fortaleza de la contraseña: {validations.passwordValid.strength}</p>}
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
            {validations.dniValid === false && <p className="text-red-500 text-xs">El DNI no puede estar vacío.</p>}
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
            {validations.phoneValid === false && <p className="text-red-500 text-xs">El teléfono no puede estar vacío.</p>}
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
            {validations.shelterNameValid === false && <p className="text-red-500 text-xs">El nombre del refugio no puede estar vacío.</p>}
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
            {validations.localityValid === false && <p className="text-red-500 text-xs">La localidad no puede estar vacía.</p>}
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
            {validations.descriptionValid === false && <p className="text-red-500 text-xs">La descripción no puede estar vacía.</p>}
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
      </form>
    </div>
  );
};

export default ShelterForm;
