import React from 'react';

const Donations_user = () => {
  return (
    <div className='space-y-4'>
      <div className='bg-gray-200 p-4 rounded-lg shadow'>
        <h3 className='text-lg font-semibold'>Donation 1</h3>
        <p>Details about donation 1...</p>
      </div>
      <div className='bg-gray-200 p-4 rounded-lg shadow'>
        <h3 className='text-lg font-semibold'>Donation 2</h3>
        <p>Details about donation 2...</p>
      </div>
      <div className='bg-gray-200 p-4 rounded-lg shadow'>
        <h3 className='text-lg font-semibold'>Donation 3</h3>
        <p>Details about donation ...</p>
      </div>
      <div className='bg-gray-200 p-4 rounded-lg shadow'>
        <h3 className='text-lg font-semibold'>Donation 4</h3>
        <p>Details about donation 4...</p>
      </div>
      {/* Agrega más donaciones según sea necesario */}
    </div>
  );
}

export default Donations_user;
