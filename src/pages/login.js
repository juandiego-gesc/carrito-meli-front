import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import { createUser } from '../service/userService'; 

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // New fields for registration:
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            if (isRegister) {
                // Registrar usuario con email y name
                const data = await createUser({ username, password, email, name });
                if (data.access_token) {
                    navigate('/');
                } else {
                    setError('Error al registrar usuario');
                }
            } else {
                // Iniciar sesión
                const data = await login(username, password);
                if (data.access_token) {
                    navigate('/');
                }
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isRegister ? "Registro" : "Login"}
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {isRegister && (
                        <>
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 mb-4 border border-gray-300 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full p-2 mb-4 border border-gray-300 rounded"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </>
                    )}
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        {isRegister ? "Registrar" : "Iniciar sesión"}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button 
                        onClick={() => setIsRegister(!isRegister)} 
                        className="text-blue-500"
                    >
                        {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;