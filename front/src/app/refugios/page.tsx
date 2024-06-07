
'use client'

import ListaRefugios from '@/components/Refugios/ListaRefugios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [refugios, setRefugios] = useState([]);

  useEffect(() => {
    fetch('https://backpf-prueba.onrender.com/shelters')
      .then(response => response.json())
      .then(data => setRefugios(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='mt-10 bg-gray-300' >
      <ListaRefugios refugios={refugios} />
    </div>
  );
};

export default Page;
