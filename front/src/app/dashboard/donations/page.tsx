'use client'
import { redirect } from 'next/navigation';
import useRedirect from '@/hooks/useRedirect';
import React, { useEffect, useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import Image from 'next/image';


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
    }
  }, []);

  useEffect(() => {
    const donationsTotal = donations.reduce((totalAcumulated, donation) => totalAcumulated + donation.amount, 0);
    setTotal(donationsTotal);
  }, [donations]);

  const handleCheckout = () => {
    redirecting('/mercado-pago');
  }

  const handleRemoveDonation = (index: number) => {
    const updatedDonations = [...donations];
    updatedDonations.splice(index, 1);
    setDonations(updatedDonations);
    localStorage.setItem('donations', JSON.stringify(updatedDonations));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="donations-list w-96 p-4 border rounded shadow-lg">
        <h2 className="text-lg font-bold border-b-2 mb-4 text-gray-500">My Donations</h2>
        {donations.length === 0 ? (
          <p className="text-base mb-4 font-semibold ml-14">No donations yet</p>
        ) : (
          <ul>
            {donations.map((donation: IDonation, index: number) => ( 
              <li key={index} className="donation-item flex items-center justify-between mb-4">
                <div className="flex items-center">
                <Image src={DEFAULT_IMAGE_URL} alt="Refugio" className="w-16 h-16 mr-4"  width={100} height={100} />
                  <div>
                    <h3 className="text-base font-bold">{donation.shelter.name}</h3>
                    <p className="text-sm">${donation.amount}</p>
                  </div>
                </div>
                <div 
                  className="remove-donation text-red-600 hover:text-red-800 text-sm px-5 py-2.5"
                  onClick={() => handleRemoveDonation(index)}
                  >
                  <MdDeleteSweep className='text-2xl mb-3' />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="total-card w-64 ml-4 p-4 border rounded shadow-lg">
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
        )}
      </div>
    </div>
  );
};

export default DonationsUI;
