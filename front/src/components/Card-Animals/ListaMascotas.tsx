import { IMascotas } from '@/interface/IMascotas';
import CardAnimals from './CardAnimals';

interface Props {
    mascotas: IMascotas[];
  }

const ListaMascotas: React.FC<Props> = ({ mascotas }) => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mascotas.map(mascota => (
        <CardAnimals key={mascota.id} mascota={mascota} />
      ))}
    </div>
  );
};

export default ListaMascotas;
