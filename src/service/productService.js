import api from "./api";

export const getAllProducts = async () => {
    const url = `/products/all`;
    const response = await api.get(url);
    if (response.status !== 200) {
        throw new Error('Error al obtener productos');
    }
    return response.data;
}


export const getProduct = async (productId) => {
    const url = `/products/${productId}`;
    const response = await api.get(url);
    if (response.status !== 200) {
        throw new Error('Error al obtener producto');
    }
    return response.data;
}
