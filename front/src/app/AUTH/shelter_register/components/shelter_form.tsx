/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

interface FormData {
  name: string;
  email: string;
  password: string;
  dni: number | '';
  phone: number | '';
  shelter_name: string;
  locality: string;
  description: string;
}

interface Validations {
  nameValid: boolean | null;
  emailValid: boolean | null;
  passwordValid: boolean | null;
  passwordStrength: string;
  dniValid: boolean | null;
  phoneValid: boolean | null;
  shelterNameValid: boolean | null;
  localityValid: boolean | null;
  descriptionValid: boolean | null;
}

const ShelterForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    dni: '',
    phone: '',
    shelter_name: '',
    locality: '',
    description: '',
  });

  const [validations, setValidations] = useState<Validations>({
    nameValid: null,
    emailValid: null,
    passwordValid: null,
    passwordStrength: '',
    dniValid: null,
    phoneValid: null,
    shelterNameValid: null,
    localityValid: null,
    descriptionValid: null,
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

    let strength = 'Débil';
    if (hasMinLength && hasAlphabeticChar && hasSpecialChar) {
      strength = 'Fuerte';
    } else if (hasMinLength && hasAlphabeticChar) {
      strength = 'Medio';
    }

    return {
      valid: hasMinLength && hasAlphabeticChar && hasSpecialChar,
      strength,
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    
    const { name, value } = e.target;
    
    const numericValue = name === 'dni' || name === 'phone' ? parseInt(value) : value;
    
    setFormData({ ...formData, [name]:  numericValue });
    console.log('formData', formData);

    switch (name) {
      case 'email':
        setValidations({ ...validations, emailValid: value ? validateEmail(value) : null });
        break;
      case 'password':
        const passwordValidation = validatePassword(value);
        
      

        setValidations({ 
          ...validations, 
          passwordValid: value ? passwordValidation.valid : null,
          passwordStrength: value ? passwordValidation.strength : ''
        });
        break;
      case 'dni':
      case 'phone':
      case 'shelter_name':
      case 'locality':
      case 'description':
        setValidations({ ...validations, [`${name}Valid`]: value ? value.length > 0 : null });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    console.log('Form Data:', formData);
 

    const someInvalid = Object.values(validations).some(valid => valid === false);
    console.log('q me traes vos?:', someInvalid);

    if (!someInvalid) {
      try {
        const formDataToSend = {
          
          ...formData,
          dni: formData.dni,
          phone: formData.phone
        };
        
        
        
        const response = await fetch('https://backpf-prueba.onrender.com/auth/register/shelter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });
        
        console.log('Respuesta:', response);

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
          {[
            { name: 'name', placeholder: 'Nombre', validation: validations.nameValid, errorMessage: 'El nombre no puede estar vacío.' },
            { name: 'email', placeholder: 'Email', validation: validations.emailValid, errorMessage: 'Ingrese un correo electrónico válido.' },
            { name: 'password', placeholder: 'Contraseña', validation: validations.passwordValid, errorMessage: 'La contraseña debe tener al menos 8 caracteres.', isPassword: true },
            { name: 'dni', placeholder: 'DNI', validation: validations.dniValid, errorMessage: 'El DNI no puede estar vacío.' },
            { name: 'phone', placeholder: 'Teléfono', validation: validations.phoneValid, errorMessage: 'El teléfono no puede estar vacío.' },
            { name: 'shelter_name', placeholder: 'Nombre del Refugio', validation: validations.shelterNameValid, errorMessage: 'El nombre del refugio no puede estar vacío.' },
            { name: 'locality', placeholder: 'Localidad', validation: validations.localityValid, errorMessage: 'La localidad no puede estar vacía.' },
            { name: 'description', placeholder: 'Descripción', validation: validations.descriptionValid, errorMessage: 'La descripción no puede estar vacía.' },
          ].map(({ name, placeholder, validation, errorMessage, isPassword = false }) => (
            <div key={name} className="relative">
              <Input
                type={isPassword ? 'password' : 'text'}
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className={`border ${
                  validation === null ? 'border-gray-300' : validation ? 'border-green-500' : 'border-red-500'
                }`}
              />
              {validation === false && <p className="text-red-500 text-xs">{errorMessage}</p>}
              {name === 'password' && validation !== null && (
                <p className={`text-xs ${validations.passwordValid ? 'text-green-500' : 'text-red-500'}`}>
                  Fortaleza de la contraseña: {validations.passwordStrength}
                </p>
              )}
            </div>
          ))}
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
