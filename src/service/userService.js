import api from "./api";

export const login = async (username, password) => {
    const url = `/users/login`;    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const response = await api.post(url, formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    if (response.status !== 200) {
        throw new Error('Error al iniciar sesión');
    }

    return response.data;
};

export const createUser = async (newUserData) => {
    const url = `/users/create`;
    const response = await api.post(url, newUserData);
    if (response.status !== 201) {
        throw new Error('Error al crear usuario');
    }
    return response.data;
};

export const updateUser = async (userData, token) => {
    const url = `/users/update`;
    const response = await api.put(url, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('Error al actualizar usuario');
    }
    return response.data;
};

export const deleteUser = async (userId, token) => {
    const url = `/users/delete/${userId}`;
    const response = await api.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('Error al eliminar usuario');
    }
    return true;
};

export const getUserByUsername = async (username) => {
    const url = `/users/get/username/${username}`;
    const response = await api.get(url);
    if (response.status !== 200) {
        throw new Error('Error al obtener usuario por username');
    }
    return response.data;
};