import {LatLngExpression} from "leaflet";
import {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

export default function MainContent() {
 const [position, setPosition] = useState<LatLngExpression | null>([
  -1.286389, 36.817223,
 ]);

 return (
  <div id="map" className="w-full">
   <MapContainer
    center={position}
    zoom={13}
    className="h-[100vh]"
    scrollWheelZoom={false}
   >
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
    </Marker>
   </MapContainer>
  </div>
 );
}
