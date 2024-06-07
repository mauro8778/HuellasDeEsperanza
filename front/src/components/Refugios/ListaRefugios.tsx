

import React from 'react';
import { IRefugios } from '@/interface/IRefugios';
import CardRefuge from './CardRefuge';

interface ListaRefugiosProps {
  refugios: IRefugios[];
}

const ListaRefugios: React.FC<ListaRefugiosProps> = ({ refugios }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {refugios.map((refugio, index) => (
        <CardRefuge key={index} refugio={refugio} />
      ))}
    </div>
  );
};

export default ListaRefugios;
