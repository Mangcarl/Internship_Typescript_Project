import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { Navigate, useNavigate } from 'react-router-dom';
import "../station/styles.css";
import { Test } from '../test';
 



const StationName: React.FC = () => {
  const location = useLocation();

  const getBackgroundImage = () => {
    // Define a function to determine the background image based on the URL
    let backgroundImageUrl = '';

    switch (location.pathname) {
      case '/stations/guadalupe/in':
      case '/stations/guadalupe/out':
        backgroundImageUrl = 'url(https://mrt3.com/images/MRT-2.jpg)';
        break;
      case '/stations/boni/in':
      case '/stations/boni/out':
        backgroundImageUrl = 'url(https://files01.pna.gov.ph/ograph/2021/08/12/081221-nude-runner-along-mrt-3-via-panda-preecs-on-fb.png)';
        break;
      case '/stations/ayala/in':
      case '/stations/ayala/out':
          backgroundImageUrl = 'url(https://images.summitmedia-digital.com/spotph/images/2017/11/17/dmrt_7.jpg)';
          break;
      default:
        backgroundImageUrl = 'url(https://images.summitmedia-digital.com/spotph/images/2017/11/17/dmrt_7.jpg)';
    }
    return backgroundImageUrl;
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between', // Updated to space-between
    backgroundColor: 'rgba(120, 90, 200, 0.2)',
  };

const [id, setId] = useState("");
const [station_name, setStation] = useState("");
const navigate = useNavigate()
const handleStation = () => {
  navigate(`/stations/${station_name}/in`)
}

  return (
    <>
  
    {/* <div className="flex items-center justify-center h-screen p-4 sm:p-24 md:p-24 lg:p-24 xl:p-12" style={containerStyle}>*/}
    <div className='flex flex-col'>
    <Navigation />
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-2/3 h-screen'>
        <Test/>
      </div>
     
      {/* <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4"> */}
      <div style={containerStyle} className="basis-1/3">
        <form className="flex flex-col justify-center bg-white shadow-md rounded-lg border border-8 p-4 mx-10 ml-[30%] mt-[-12%]">
          <div className="">
            <label
              className="block text-gray-700 text-m font-bold mb-2 ml-2"
              htmlFor="card"
            >
              Card
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 mb-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card"
              type="text"
              placeholder="Input Card"
            />
          </div>
          
          <div className="">
            <label
              className="block text-gray-700 text-m font-bold mb-2 ml-2"
              htmlFor="password"
            >
              Station
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 mb-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="station"
              type="text"
              placeholder='ex: "Araneta" '
              onChange={(e)=>{const lowercaseValue = e.target.value.toLowerCase(); setStation(lowercaseValue)}}
            />
          </div>
          <div className="flex items-center justify-between px-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={()=>{
                navigate(`/stations/${station_name}/in`)
              }}
            >
              Tap In
            </button>

            <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={()=>{
                navigate(`/stations/${station_name}/out`)
              }}
            >
              Tap Out
            </button>
          </div>
          </div>
        </form>
        <p className="text-center text-black-100 text-xs pt-4 mx-24">
          &copy;2024 MRT Corp. All rights reserved.
        </p>
      </div>
    </div>
  </div>
    </>
  );
    }
export default StationName;