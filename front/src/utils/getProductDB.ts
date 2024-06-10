import { IMascotas } from "@/interface/IMascotas";

async function getProductsDB() { 
    try {
        const res= await fetch ("https://backpf-prueba.onrender.com/pets", {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache" 
            }
        })
        const mascota: IMascotas[] = await res.json()
        return mascota
    } catch (error:any) {
        throw new Error(error)
    }
}

export default getProductsDB


