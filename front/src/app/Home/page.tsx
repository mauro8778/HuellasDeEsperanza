/* eslint-disable @next/next/no-img-element */
'use client'

import RandomAnimalCards from "@/components/Card-Animals/RandomAnimalsCards"
import Mascotas from "@/utils/mascotas"



export const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div>
      <img src="/ImageNavbar.webp" alt="Wave Background" className="absolute top-0 left-0 w-full h-full object-cover -z-10 " />
      </div>
      <h1>pagina principal</h1>
        <RandomAnimalCards mascotas={Mascotas} />

    

      
    </div>
  )
}

export default Home
