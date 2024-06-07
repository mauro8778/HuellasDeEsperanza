'use client'
import Modal from '@/components/Refugios/AñadirMascota/ModalPostMascotas';
import FormularioMascota from '@/components/Refugios/AñadirMascota/PostMascotas';
import ListaRefugios from '@/components/Refugios/ListaRefugios';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [refugios, setRefugios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://backpf-prueba.onrender.com/shelters')
      .then(response => response.json())
      .then(data => setRefugios(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <main className='bg-gray-300' >
      <div className="flex justify-center"> 
        <button onClick={handleOpenModal} className="text-white bg-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Añador Mascota
        </button>
      </div>
      <ListaRefugios refugios={refugios} />
      <Modal isVisible={modalVisible} onClose={handleCloseModal}>
        <FormularioMascota onClose={handleCloseModal} onAddMascota={(mascota) => {
          console.log('Mascota agregada:', mascota);
        }} />
      </Modal>
    </main>
  );
};

export default Page;
