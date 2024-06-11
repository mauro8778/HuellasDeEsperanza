<<<<<<< HEAD
'use client';
import { redirect } from 'next/navigation';
import useRedirect from '@/hooks/useRedirect';
import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { MdDeleteSweep } from "react-icons/md";
import axios from 'axios';
import Image from 'next/image';

=======
'use client'
import { redirect } from 'next/navigation';
import useRedirect from '@/hooks/useRedirect';
import React, { useEffect, useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import Image from 'next/image';


>>>>>>> HEAD@{2024-06-10}
interface IShelter {
  id: string;
  name: string;
}

interface IDonation {
  shelter: IShelter;
  amount: number;
}

const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/150';

export const DonationsUI: React.FC = () => {
  const { redirecting } = useRedirect();
<<<<<<< HEAD
  const [token, setToken] = useState<string | null>(null);
  const [donations, setDonations] = useState<IDonation[]>([]);
  const [total, setTotal] = useState(0);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  initMercadoPago('TEST-5423250e-6e54-4e3b-a21b-160a1653fc7a');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setToken(userToken);

      if (!userToken) {
        redirect('/login');
      } else {
        const savedDonations = localStorage.getItem('donations');
        if (savedDonations) {
          setDonations(JSON.parse(savedDonations));
        }
      }
=======
  const [token, setToken] = useState<string | null>(null); 
  const [donations, setDonations] = useState<IDonation[]>([]);
  const [total, setTotal] = useState(0); 
 
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setToken(userToken); 
      !userToken && redirect('/login'); 
    }
    
    const savedDonations = localStorage.getItem('donations');
    if (savedDonations) {
      setDonations(JSON.parse(savedDonations));
    }

    const userToken = localStorage.getItem('userSession');
    setToken(userToken);
     
    if (!userToken) {
      redirecting('/login');
>>>>>>> HEAD@{2024-06-10}
    }
  }, []);

  useEffect(() => {
    const donationsTotal = donations.reduce((totalAcumulated, donation) => totalAcumulated + donation.amount, 0);
    setTotal(donationsTotal);
  }, [donations]);

<<<<<<< HEAD
  const handleCheckout = async () => {
    console.log('Iniciando handleCheckout');
    try {
      const response = await axios.post('https://backpf-prueba.onrender.com/mercado-pago', {
        title: 'Donaciones a refugios',
        price: total,
        quantity: 1
      });
      console.log('Respuesta del servidor:', response.data);

      const { id } = response.data;
      return id;
    } catch (error: any) {
      console.error('Error al crear preference de Mercado Pago', error.response ? error.response.data : error.message);
    }
  };

  const handleBuy = async () => {
    console.log('Iniciando handleBuy');
    const preferenceId = await handleCheckout();
    if (preferenceId) {
      console.log('Preference ID recibido:', preferenceId);
      setPreferenceId(preferenceId);
    }
  };
=======
  const handleCheckout = () => {
    redirecting('/mercado-pago');
  }
>>>>>>> HEAD@{2024-06-10}

  const handleRemoveDonation = (index: number) => {
    const updatedDonations = [...donations];
    updatedDonations.splice(index, 1);
    setDonations(updatedDonations);
    localStorage.setItem('donations', JSON.stringify(updatedDonations));
<<<<<<< HEAD
  };
=======
  }
>>>>>>> HEAD@{2024-06-10}

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="donations-list w-96 p-4 border rounded shadow-lg">
<<<<<<< HEAD
        <h2 className="text-lg font-bold border-b-2 mb-4 text-gray-500">Mis Donaciones</h2>
        {donations.length === 0 ? (
          <p className="text-base mb-4 font-semibold ml-14">No hay donaciones aún</p>
        ) : (
          <ul>
            {donations.map((donation: IDonation, index: number) => (
              <li key={index} className="donation-item flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Image src={DEFAULT_IMAGE_URL} alt="Refugio" className="w-16 h-16 mr-4" width={100} height={100} />
=======
        <h2 className="text-lg font-bold border-b-2 mb-4 text-gray-500">My Donations</h2>
        {donations.length === 0 ? (
          <p className="text-base mb-4 font-semibold ml-14">No donations yet</p>
        ) : (
          <ul>
            {donations.map((donation: IDonation, index: number) => ( 
              <li key={index} className="donation-item flex items-center justify-between mb-4">
                <div className="flex items-center">
                <Image src={DEFAULT_IMAGE_URL} alt="Refugio" className="w-16 h-16 mr-4"  width={100} height={100} />
>>>>>>> HEAD@{2024-06-10}
                  <div>
                    <h3 className="text-base font-bold">{donation.shelter.name}</h3>
                    <p className="text-sm">${donation.amount}</p>
                  </div>
                </div>
<<<<<<< HEAD
                <div
                  className="remove-donation text-red-600 hover:text-red-800 text-sm px-5 py-2.5"
                  onClick={() => handleRemoveDonation(index)}
                >
                  <MdDeleteSweep className="text-2xl mb-3" />
=======
                <div 
                  className="remove-donation text-red-600 hover:text-red-800 text-sm px-5 py-2.5"
                  onClick={() => handleRemoveDonation(index)}
                  >
                  <MdDeleteSweep className='text-2xl mb-3' />
>>>>>>> HEAD@{2024-06-10}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="total-card w-64 ml-4 p-4 border rounded shadow-lg">
<<<<<<< HEAD
        <h3 className="text-lg font-bold mb-4 border-b-2 text-gray-500">Resumen</h3>
        <p className="text-base mb-4">Total: ${total}</p>
        {donations.length > 0 && (
          <div>
            <button
              onClick={handleBuy}
              className="checkout-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Dona y deja tu Huella
            </button>
            {preferenceId && (
              <div className="mt-4">
                <Wallet
                  initialization={{ preferenceId }}
                  customization={{ texts: { valueProp: 'smart_option' } }}
                />
              </div>
            )}
          </div>
=======
        {donations.length > 0 ? (
          <>
            <h3 className="text-lg font-bold mb-4 border-b-2 text-gray-500">Summary</h3>
            <p className="text-base mb-4">Total: ${total}</p>
            <button onClick={handleCheckout} className="checkout-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-4 border-b-2 text-gray-500">Summary</h3>
            <h1 className='text-base font-semibold text-gray-900'>Total: ${total}</h1>
          </>
>>>>>>> HEAD@{2024-06-10}
        )}
      </div>
    </div>
  );
};

export default DonationsUI;
