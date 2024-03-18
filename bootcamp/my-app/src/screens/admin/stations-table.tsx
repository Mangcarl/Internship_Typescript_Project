import React from 'react';
import NavAdmin from '../../components/AdminNav';
import admin from './admin-pic.jpg';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import "../station/styles.css";

const StationsTable: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    // backgroundImage: `url(${admin})`,
    backgroundColor: 'orange',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  return (
    <div className="bg-cover flex flex-col" style={containerStyle}>
      <NavAdmin />
      <div className="flex flex-col items-center mt-auto pb-12 mb-12">
        {/* Use mt-auto to push the content to the bottom */}
        <a onClick={()=>{
                // Navigate('');
              }}href="" className="text-3xl font-bold underline" style={{color: 'red'}}>
          Discord mod
        </a>
      </div>
    </div>
  );
};

export default StationsTable;
