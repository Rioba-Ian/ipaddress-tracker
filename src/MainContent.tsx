import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

export default function MainContent() {
 return (
  <div id="map" className="w-full">
   <MapContainer
    center={[52.505, -0.1]}
    className="h-[80vmin]"
    zoom={13}
    scrollWheelZoom={false}
   >
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
    </Marker>
   </MapContainer>
  </div>
 );
}
