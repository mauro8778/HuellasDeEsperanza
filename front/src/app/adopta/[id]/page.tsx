import React from 'react';
import { IParams } from '@/interface/IRefugios';
import Image from 'next/image';
import Mascotas, { getMascotaById } from '@/utils/mascotas';
import Link from 'next/link';

const MascotasDetail = ({ params }: { params: IParams }) => {
    const mascota = getMascotaById(params.id);

    if (!mascota) {
        return <div>Mascota no encontrada</div>;
    }

    return (
        <div className="p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">{mascota.name}</h1>
            
            <div className="flex flex-col items-center gap-4 mb-6">
                <div className="w-96 h-60 relative rounded-md overflow-hidden">
                    <Image src={mascota.image} alt={mascota.name} layout="fill" objectFit="cover" />
                </div>
                <div>
                    <p>Edad: {mascota.edad}</p>
                    <p>Sexo: {mascota.sexo}</p>
                    <p>Descripción: {mascota.description}</p>
                </div>
            </div>
            <Link href={`/formAdopt?name=${encodeURIComponent(mascota.name)}`}>
                <button className="bg-pink-600 hover:bg-pink-400 hover:text-black text-white font-bold py-2 px-4 rounded">
                    Postular
                </button>
            </Link>
        </div>
    );
};

export async function generateStaticParams() {
    return Mascotas.map(mascota => ({
        id: mascota.id.toString(),
    }));
}

export default MascotasDetail;
