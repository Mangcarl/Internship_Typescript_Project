import { LatLng, LatLngTuple } from "leaflet"
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Navigation from '../components/Navigation';

const position = [14.61966423963173, 121.05112044157404]

export const Test=()=>{
  return(
    <>
    <MapContainer center={position as LatLngTuple} zoom={15} scrollWheelZoom={true} style={{width: '100%', height: '100%'}} className="w-full h-full">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position as LatLngTuple}>
      <Popup>
        Remove please <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

  </>
  )
}