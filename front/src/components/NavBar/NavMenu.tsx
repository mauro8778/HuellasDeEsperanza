// 'use client';
import Link from 'next/link';


const NavMenu: React.FC = () => {



  return (
    <nav>
      <ul className="flex space-x-4  ">
      <li>
          <Link href={{
            pathname: "/Home",
            query: {name: "test"},
          }}>
            Home
          </Link>
        </li>
      <li>
          <Link href={{
            pathname: "/Contact",
            query: {name: "test"},
          }}>
            Contacto
          </Link>
        </li>
      {/* <li>
          <Link href="/contact" replace >
           Contactos
          </Link>
        </li> */}
      <li>
          <Link href="/about">
           About
          </Link>
        </li>
      <li>
          <Link href="/refugios">
            Refugios
          </Link>
        </li>
       
      <li>
          <Link href="/donations">
            Donaciones
          </Link>
        </li>
       

       

       
      </ul>
    </nav>
  );
};

export default NavMenu;
