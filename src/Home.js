import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();


    const genarate=()=>{
     navigate('/genarate');
    }

    const scan=()=>{
        navigate('/scan');
       }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8 text-3xl font-bold">Welcome to QR Code Tools</h1>
      <div className="w-full max-w-xs space-y-8">
        <input
          type="submit"
          value="Generate"
          onClick={genarate}
          className="w-full px-4 py-2 text-white transition duration-300 bg-green-500 rounded-md cursor-pointer hover:bg-green-600"
        />
        <input
          type="submit"
          onClick={scan}
          value="Scan"
          className="self-end w-full px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        />
      </div>
    </div>
  );
}
