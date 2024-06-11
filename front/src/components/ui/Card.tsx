import DonationsUI from '@/app/dashboard/donations/page';
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className='bg-lime-100 rounded-lg shadow p-4 max-w-3xl max-h-64   '>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <DonationsUI />
      <div>{children}</div>
    </div>
  );
};

export default Card;
