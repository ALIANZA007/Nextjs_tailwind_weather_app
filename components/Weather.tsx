'use client'
import Image from 'next/image'
import { useState } from 'react';

const page = () => {
    const[city, setCity] = useState('');
    const[weather, setWeather] = useState ({});
    const[isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault();
}
return (
    <>
    <div className="h-screen relative flex justify-center items-center">
        <Image
    src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1517&q=80"
    alt="Your Image"
    layout="fill"
    objectFit="cover"
    />
    <div className="absolute w-[500px] h-[300px] bg-[rgba(255,255,255,0.4)] border-2 border-[rgba(255,255,255,0.4)] text-white rounded-xl backdrop-blur p-4 flex flex-col items-center">
    <h1 className="text-center mb-4">Get weather information by city</h1>
    <form onSubmit={handleSubmit}>
        <input type='text' 
        required className='px-4 py-2 text-black rounded-lg outline-none focus:ring focus:ring-[rgba(56,56,56)]' 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
    <button 
        type='submit' 
        className='bg-[#242424] px-4 py-2 rounded-lg'>
        submit
        </button>
    </form>
    </div>
</div>
    </>
  )
}

export default page