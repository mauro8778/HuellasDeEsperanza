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
        <div>
            <h1>{refugio.name}</h1>
            <p>{refugio.description}</p>
            <Image src={refugio.image} alt={refugio.name} width={300} height={150} />

            <h2>Mascotas en este refugio</h2>
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
