import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPopupCard from "../cards/MarkerPopupCard";

interface MapProps {
  locations: {
    markerLocation: LatLngExpression;
    address: string;
    link: string;
    details?: string; 
  }[];
  iconPorps: L.Icon;
  zoom?: number;
}

const Map = ({ locations, iconPorps, zoom = 13 }: MapProps) => {
  const centerIndex = Math.floor(locations.length / 2);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={locations[centerIndex].markerLocation}
        zoom={zoom}
        minZoom={11}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.markerLocation}
            icon={iconPorps}
          >
            <Popup>
              <MarkerPopupCard
                address={location.address}
                link={location.link}
                details={location.details}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
