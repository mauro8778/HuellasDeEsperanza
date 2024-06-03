import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import metadata from "./metadata"
import ClientWrapper from "./ClientWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadataa = metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
