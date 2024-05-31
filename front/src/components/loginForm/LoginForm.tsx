import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm: React.FC = () => {
  return (
    <section className="bg-stone-200 rounded-3xl">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/Home"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <Image
            className="h-24 w-auto"
            src="/LogoHuellas.svg"
            alt="Huellas de Esperanza"
            width={300}
            height={300}
          />
          <span className="mr-9 border-b-2 border-gray-900   my-4">Huellas de Esperanza</span>
        </Link>

        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl">
              Bienvenido de nuevo
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
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
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
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
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Iniciar sesión
              </button>
              <div className="flex items-center my-4">
                <span className="flex-grow border-t border-gray-300"></span>
                <span className="mx-4 text-gray-500">o</span>
                <span className="flex-grow border-t border-gray-300"></span>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center text-pink-600 border border-pink-600 hover:bg-pink-50 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {/* <Image
                  className="w-4 h-4 mr-2"
                  src="/google-logo.svg"
                  alt="Google logo"
                  width={300}
                  height={300}

                /> */}
                <FcGoogle className="w-4 h-4 mr-2" />
                Iniciar sesión con Google
              </button>
              <p className="text-sm font-light text-center text-gray-500">
                ¿No tienes una cuenta?{" "}
                <Link
                  href="/register"
                  className="font-medium text-pink-600 hover:underline"
                >
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
