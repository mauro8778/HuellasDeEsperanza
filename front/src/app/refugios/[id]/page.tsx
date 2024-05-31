import React from 'react';
import { IParams } from '@/interface/IRefugios';
import Refugios, { getRefugioById } from '@/utils/refugios';
import Image from 'next/image';
import Mascotas from '@/utils/mascotas';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas';

const RefugioDetail = ({ params }: { params: IParams }) => {
    const refugio = getRefugioById(params.id);

    if (!refugio) {
        return <div>Refugio no encontrado</div>;
    }

    const mascotasDelRefugio = Mascotas.filter(mascota => mascota.refugio === refugio.name);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{refugio.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
                <Image src={refugio.image} alt={refugio.name} width={300} height={150} className="w-72 h-auto" />
                <p>{refugio.description}</p>
            </div>

            <h2 className="text-xl font-semibold mb-2">Mascotas en este refugio</h2>
            {mascotasDelRefugio.length > 0 ? (
                <ListaMascotas mascotas={mascotasDelRefugio} />
            ) : (
                <p>No hay mascotas disponibles en este refugio.</p>
            )}
        </div>
    );
};

export async function generateStaticParams() {
    return Refugios.map(refugio => ({
        id: refugio.id.toString(),
    }));
}

export default RefugioDetail;
