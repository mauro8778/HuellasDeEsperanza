import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function LayoutGeneral({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}