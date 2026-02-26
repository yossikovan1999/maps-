import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import LocationMarker from "../LocationMarker/LocationMarker";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import AutoComplete from "../AutoComplete/AutoComplete";
import { useMapContext } from "../../context/MapContext";

function MyMap() {
  const { point, zoom, map, setMap } = useMapContext();
  
  return (
    <main className="map-page">
      <MapContainer center={point} zoom={zoom} scrollWheelZoom={true} ref={setMap}>
        <AutoComplete map={map}/>
        <TileLayer 
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <LocationMarker />
      </MapContainer>
    </main>
  );
}

export default MyMap;
