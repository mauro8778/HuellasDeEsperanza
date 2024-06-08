import React from 'react'

const Not_fount = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 mt-20 bg-slate-300' >
      <h1>Ups.!! No encontramos la página que buscabas...</h1>
      <h2>Regresa a la página principal</h2>
      <a href="/Home">Home</a>
    </div>
  )
}

export default Not_fount