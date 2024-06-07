import { MascotaDetail } from "@/components/MascotaDetail/MascotaDetail";
import { IMascotas } from "@/interface/IMascotas";
import { getProductById } from "@/utils/mascotas"; 

const DetailAnimals = async ({ params }: { params: { id: string } }) => {
    const mascota = await getProductById(params.id);

    if (!mascota) {
        return <div>Mascota no encontrada</div>;
    }

    const mascotaProps: IMascotas = {
        id: mascota.id,
        name: mascota.name,
        description: mascota.description,
        imgUrl: mascota.imgUrl,
        breed: mascota.breed,
        age: mascota.age
    };

    return <MascotaDetail {...mascotaProps} />;
};

export default DetailAnimals;
