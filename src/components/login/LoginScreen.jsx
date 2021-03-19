import React from 'react'
import loginLogo from '../../img/bg-logo.jpg';

const LoginScreen = ({history}) => {
    const handleLogin=()=>{
        // history.push('/');
        history.replace('/');
    }
    return (
        <div className="flex justify-center items-center h-screen bg-cover" style={{backgroundImage: `url("${loginLogo}")`}} >
            <div className="py-8 px-16 rounded-lg text-center" style={{backgroundColor: `rgba(255,255,255,.1)`}}>
                <p className="text-white text-xl uppercase font-bold mb-8">Deseas Conocer Más Sobre Super Héroes</p>
                <button 
                className="bg-white py-2 px-16 rounded-lg shadow-inner text-lg font-bold  border-black border-2 text-black hover:border-red-800  transition duration-300"
                onClick={handleLogin}
                > Iniciar </button>
            </div>
        </div>
    )
}

export default LoginScreen
