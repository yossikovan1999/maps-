import { useState } from "react"
import { Marker} from "react-leaflet";
import { useMapEvents  } from "react-leaflet/hooks";

import { useMapContext } from "../../context/MapContext";

function LocationMarker() {
  
  const {points, addPoint, setPoint, map} = useMapContext();
  
    console.log("bounds", map?.getBounds());
  

  const myMap = useMapEvents({
    click(e) {
        setPoint(e.latlng)
        addPoint([e.latlng.lat, e.latlng.lng]);
    },
    
  })

  
  return(
    <>
      {points.map(
        position => <Marker position={position}></Marker>)
      }
    </>
  )

}

export default LocationMarker;