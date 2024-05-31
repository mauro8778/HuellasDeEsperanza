/* eslint-disable @next/next/no-img-element */
'use client'

import RandomAnimalCards from "@/components/Card-Animals/RandomAnimalsCards"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/NavBar/NavBar"
import RandomRefugiosCards from "@/components/Refugios/RandomRefugiosCards"
import Mascotas from "@/utils/mascotas"
import Refugios from "@/utils/refugios"



export const Home: React.FC = () => {
  return (
    <> 
     <Navbar />
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-[300px]">
        <img src="/BannerNav-_1_.webp" alt="Wave Background" className="absolute top-0 left-0 w-full h-full object-cover -z-10 " />
      </div>
      
        <RandomAnimalCards mascotas={Mascotas} />

        <RandomRefugiosCards refugios={Refugios}/>

      
    </div>
    <Footer />
    </>
    
  )
}

export default Home
