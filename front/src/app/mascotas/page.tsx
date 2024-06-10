

import Mascotas from '@/utils/mascotas'; 

import ListaMascotas from '@/components/Card-Animals/ListaMascotas';
import Footer from '@/components/Footer/Footer';

const MascotasPage: React.FC = () => {
  

  return (
    <main>
    <ListaMascotas mascotas={Mascotas} />
    <Footer/>
  </main>
  );
};

export default MascotasPage;
