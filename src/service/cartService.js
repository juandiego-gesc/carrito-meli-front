import api from "./api";

export const addCartItem = async (cartItemData, token) => {
    const url = `/cart/create`;
    const response = await api.post(url, cartItemData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 201) {
        throw new Error('Error al añadir item al carrito');
    }
    return response.data;
};

export const updateCartItem = async (cartItemData, token) => {
    const url = `/cart/update`;
    const response = await api.put(url, cartItemData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('Error al actualizar item del carrito');
    }
    return response.data;
};

export const deleteCartItem = async (cartItemId, token, mode = 'soft') => {
    const url = `/cart/delete/${cartItemId}?mode=${mode}`;
    const response = await api.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('Error al eliminar item del carrito');
    }
    return true;
};

export const getUserCart = async (token) => {
    const url = `/cart/`;
    const response = await api.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('Error al obtener carrito');
    }
    return response.data;
};