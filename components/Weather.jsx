"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
const page = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [isLoading,setIsLoading] = useState (false)
  const [error, setError] = useState('')

  const getWeatherData = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_KEY}&units=metric`);
    console.log(res.data);
      if (res?.data?.cod === 200) {
        setWeather(res.data);
        setIsLoading(false);
        setError('');
        } else {
        throw new Error("Error while fetching data");
        }

    }catch (err) {
      setError(err?.response?.data?.message);
      setWeather({});
      setIsLoading(false);
    }
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
  <div className="absolute w-[500px] h-[300px] bg-[rgba(255,255,255,0.4)] border-2 border-[rgba(255,255,255,0.4)] text-white rounded-xl backdrop-blur p-4 flex flex-col items-center pt-12">
  <h1 className="text-center mb-4">Get weather information by city</h1>
  <form onSubmit={getWeatherData}>
      <input type='text' 
      required className='px-4 py-2 text-black rounded-lg outline-none focus:ring focus:ring-[rgba(56,56,56)]' 
      value={city}
      onChange={(e) => setCity(e.target.value)}
      />
    <button 
      type='submit' 
      className=' bg-[#242424] mx-3 px-4 py-2 rounded-lg'>
      submit
      </button>
    </form>
    {
      weather?.cod === 200 && (
        <div className='grid grid-cols-[170px,1fr]'>
          <div>
            <Image
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
              alt="icon"
              width={100}
              height={70}
              />
          </div>
            <div>
            <p>{weather.name}</p>
            <p>temp : {weather?.main.temp}&deg; C</p>
            <p>humidty : {weather?.main.humidty}</p> 
            <p>desc : {weather?.weather[0].description}</p> 
          </div>
        </div>
      )
    }
  </div>
</div>
    </>
  )
}

export default page