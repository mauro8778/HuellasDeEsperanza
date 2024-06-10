import type { Metadata } from 'next';
import Logo from '@/components/ui/Logo';
import FormularioAdoption from '@/components/FormularioAdoption/FormularioAdoption';

export const metadata: Metadata = {
  title: 'Login | Auth',
  description: 'Login | Auth',
};

export const FormAdopt = () =>{
  return (
    <section className='h-full flex flex-col items-center justify-center'>
      <Logo />
      <FormularioAdoption />
    </section>
  );
}
export default FormAdopt