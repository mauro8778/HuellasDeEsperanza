import Link from 'next/link'
import  { useState } from 'react'

const Desplegable = () => {

     
  // Estado para controlar la visibilidad del menú desplegable
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
        <ul>
        <li className="relative" onClick={toggleMenu}>
          <span className="text-white cursor-pointer">Mascotas</span>
          {/* Aca muestro si el menu esta abierto o no */}
          {menuOpen && (
            <ul className="absolute bg-white shadow-lg py-2 mt-2 rounded-md w-32">
              <li>
                <Link href="/mascotas/perros">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Perros</p>
                </Link>
              </li>
              <li>
                <Link href="/mascotas/gatos">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Gatos</p>
                </Link>
              </li>
              <li>
                <Link href="/mascotas">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mascotas</p>
                </Link>
              </li>

            </ul>
          )}
        </li>
        </ul>
    </div>
  )
}

export default Desplegable