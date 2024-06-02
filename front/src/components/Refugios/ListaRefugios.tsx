import React from 'react';
import { IRefugios } from '@/interface/IRefugios';
import CardRefuge from './CardRefuge';

interface Props {
  refugios: IRefugios[];
}

const ListaRefugios: React.FC<Props> = ({ refugios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {refugios.map(refugio => (
            <CardRefuge key={refugio.id} refugio={refugio} />
        
      ))}
    </div>
  );
};

export default ListaRefugios;
