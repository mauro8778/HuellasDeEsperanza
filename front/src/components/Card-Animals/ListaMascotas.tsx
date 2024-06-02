import Link from 'next/link';
import { IMascotas } from '@/interface/IMascotas';
import CardAnimals from './CardAnimals';

interface Props {
  mascotas: IMascotas[];
}

const ListaMascotas: React.FC<Props> = ({ mascotas }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
      {mascotas.map((mascota) => (
        <Link key={mascota.id} href={`/adopta/${mascota.id}`}>
          <div className="flex justify-center">
            <CardAnimals mascota={mascota} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListaMascotas;
