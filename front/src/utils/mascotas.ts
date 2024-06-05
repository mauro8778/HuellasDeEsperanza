import { IMascotas } from "@/interface/IMascotas";




export async function getProductsDB() { 
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

export async function getProducts() {
    try {
        const productsDB = await getProductsDB()
        return productsDB
    } catch (error : any) {
        throw new Error (error)
    }
}

export async function getProductById(id:string) {
    try {
        const products = await getProducts()
        const product = products.find((product) => product.id!.toString() === id)
            return product
    } catch (error: any) {
        
    }
}

