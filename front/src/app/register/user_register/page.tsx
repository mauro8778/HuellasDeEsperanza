import RegisterUserForm from '@/components/registerUserForm/RegisterUserForm';
import Image from 'next/image';

const Register = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex items-center mb-3 w-full h-20 bg-pink-500 rounded-lg p-4">
        <Image src="/LogoHuellas.svg" alt="Logo" className="w-16 h-auto sm:w-24" width={500} height={500} />
        <h1 className="ml-4 text-white text-lg sm:text-2xl border-b-2">Huellas de Esperanza</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <RegisterUserForm />
      </div>
    </div>
  );
};

export default Register;
