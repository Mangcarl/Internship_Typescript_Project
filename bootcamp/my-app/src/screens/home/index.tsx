import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const appStyle: React.CSSProperties = {
  // backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31ADAboY3HLZxK8VEdpyzmcNEHPn9NsG-Ww&usqp=CAU)',
  backgroundColor: 'red',
  minHeight: '100vh',
  backgroundSize: 'cover', // Set background size to cover
  backgroundPosition: 'center',
  // 'media (max-width: 768px)':{
    // backgroundPosition: 'top center',
  // },
  
};

const AppWrapper = styled.div`
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31ADAboY3HLZxK8VEdpyzmcNEHPn9NsG-Ww&usqp=CAU);
  min-height: 100vh;
  background-size: cover;
  background-position: center;
`;
const Container = styled.div
`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Box = styled.div
` 
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  height: 10vh;
  width: 40vh;
  margin-left: 500px;
  margin-block-end: 260px;
  @media (max-width: 768px) {
    width: 80%; /* Adjust the width for smaller screens */
  }
`;



const Home: React.FC = () => {

const [id, setId] = useState("");
const [station_name, setStation] = useState("");
const navigate = useNavigate()
const handleStation = () => {
  navigate(`/stations/${station_name}/in`)
}

  return (
    <>
    <Navigation />
    <div className="flex items-center justify-center h-screen" style={appStyle}>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="uuid"
            >
              UUID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="uuid"
              type="text"
              placeholder="Input UUID"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Station
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="station"
              type="text"
              placeholder='ex: "Araneta" '
              onChange={(e)=>{setStation(e.target.value)}}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleStation}
            >
              Travel
            </button>
          </div>
        </form>
        <p className="text-center text-yellow-100 text-xs">
          &copy;2024 MRT Corp. All rights reserved.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;
