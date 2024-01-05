import {LatLngExpression} from "leaflet";
import {useEffect, useState} from "react";
import {
 MapContainer,
 TileLayer,
 Marker,
 Popup,
 useMapEvents,
} from "react-leaflet";
import {useAtom} from "jotai";
import apiDataAtom from "./lib/apiDataAtom";

function LocationMarker() {
 const [position, setPosition] = useState<LatLngExpression | null>(null);
 const [data] = useAtom(apiDataAtom);

 console.log(data);

 const map = useMapEvents({
  locationfound(e) {
   setPosition([e.latlng.lat, e.latlng.lng]);
   map.flyTo([e.latlng.lat, e.latlng.lng], map.getZoom());
  },
 });

 useEffect(() => {
  map.locate();
 }, []);

 useEffect(() => {
  if (data) {
   setPosition([data.location.lat, data.location.lng]);
   map.flyTo([data.location.lat, data.location.lng], map.getZoom());
  }
 }, [data, map]);

 return position === null ? null : (
  <Marker position={position}>
   <Popup>You are here</Popup>
  </Marker>
 );
}

export default function MainContent() {
 const [data] = useAtom(apiDataAtom);

 return (
  <div id="map" className="w-full">
   <MapContainer
    center={
     data ? [data.location.lat, data.location.lng] : [-1.286389, 36.817223]
    }
    zoom={13}
    className="h-[100vh]"
    scrollWheelZoom={false}
   >
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
   </MapContainer>
  </div>
 );
}
