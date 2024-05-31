import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export const RegisterUserForm: React.FC = () => {
  return (
    <section className="w-full max-w-3xl">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow">
          <div className="p-6 sm:p-8 lg:grid lg:grid-cols-2 lg:gap-6">
            <h1 className="col-span-2 text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl underline mb-6">
              Registro de Usuario
            </h1>
            <form className="col-span-2 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6" action="#">
              <div className="lg:col-span-1">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                  Usuario
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Tu nombre de usuario"
                  required
                />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Tu correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@mail.com"
                  required
                />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="lg:col-span-1">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="secret-phrase" className="block mb-2 text-sm font-medium text-gray-900">
                  Frase secreta
                </label>
                <input
                  type="text"
                  name="secret-phrase"
                  id="secret-phrase"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Tu frase secreta"
                  required
                />
              </div>
              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Registrarse
                </button>
              </div>
            </form>
            <div className="lg:col-span-2 flex items-center my-4">
              <span className="flex-grow border-t-2 border-gray-300"></span>
              <span className="mx-4 text-gray-500">o</span>
              <span className="flex-grow border-t-2 border-gray-300"></span>
            </div>
            <div className="lg:col-span-2">
              <button
                type="button"
                className="w-full flex items-center justify-center text-pink-600 border border-pink-600 hover:bg-pink-50 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <FcGoogle className="w-4 h-4 mr-2" />
                Registrarse con Google
              </button>
            </div>
            <p className="lg:col-span-2 text-sm font-light text-center text-gray-700">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="font-medium text-pink-600 hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterUserForm;
