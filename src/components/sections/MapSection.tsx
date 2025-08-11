import React from "react";
import Map from "../others/Map";
import L, { LatLngExpression } from "leaflet";
import Title from "../others/Title";


const MapSection: React.FC = () => {

  const locations = [
    {
      markerLocation: [41.72653318, 44.76746061364441] as LatLngExpression,
      address: "ალექსანდრე ყაზბეგის გამზირი 3ა",
      link: "https://maps.app.goo.gl/aqsrBMDyxuLPxgyb8"
    }
  ]

  const iconProps = new L.Icon({
    iconUrl: '/images/map-marker.png',
    iconSize: [50, 40],
    iconAnchor: [25,40],
    popupAnchor: [0, -45]
  })

  return (
    <section className="my-4">
      <div>
        <div className="container">
          <Title title=" - ოფისი" />
        </div>
      </div>
      <div>
        <div className="container-fluid ">
          <div className="row">
            <Map 
              iconPorps={iconProps} 
              locations={locations}
              zoom={15}  
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
