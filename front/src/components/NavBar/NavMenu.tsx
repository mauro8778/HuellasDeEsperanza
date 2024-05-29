'use client';
import { useState } from 'react';
import Link from 'next/link';

const NavMenu: React.FC = () => {
  // Estado para controlar la visibilidad del menú desplegable
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <ul className="flex space-x-4">
      <li>
          <Link href="/Home">
            <p className="text-black">Home</p>
          </Link>
        </li>
        <li className="relative" onClick={toggleMenu}>
          <span className="text-black cursor-pointer">Mascotas</span>
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
        <li>
          <Link href="/refugios">
            <p className="text-black">Refugios</p>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <p className="text-black">Contacto</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="text-black">About</p>
          </Link>
        </li>
        <li>
          <Link href="/donaciones">
            <p className="text-black">Donaciones</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
