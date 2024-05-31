import Image from 'next/image'
import React from 'react'

export const RefugioRegister = () => {

  return (

    <div className="mx-auto p-4 bg-gray-300 m-3 rounded-lg h-screen">
      <div className="flex items-center mb-3 w-full h-20 bg-pink-500 rounded-lg p-4">
        <Image src="/LogoHuellas.svg" alt="Logo" className="w-16 h-auto sm:w-24" width={500} height={500} />
        <h1 className="ml-4 text-white text-lg sm:text-2xl border-b-2">Huellas de Esperanza</h1>
      </div>

     
    </div>

  )
}

export default RefugioRegister
