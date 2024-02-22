import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import service from './check-please.jpg'
import "../station/styles.css";

  

const Service: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${service})`,
        backgroundSize: 'cover',  // Ensure the image covers the entire container
        backgroundRepeat: 'no-repeat',  // Prevent the image from repeating
        backgroundPosition: 'center',  // Center the image within the container
        height: '100vh',  // Set the height of the container to the full viewport height
        display: 'flex',
        flexDirection: 'column', // Ensure child elements stack vertically
        justifyContent: 'flex-start', // Align items to the top
    };
    return (
        <div className="bg-cover" style={containerStyle}>
            <Navigation/>
        </div>
        )
    }
export default Service;