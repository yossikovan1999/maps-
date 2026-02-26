import { createContext, useContext, useState } from "react";

export const MapContext = createContext();


export function useMapContext(){
    return useContext(MapContext);
}


function MapProvider({children}){

    const [points, setPoints] = useState([]);
    const [point, setPoint] = useState({lat : 31.771959, lng : 35.217018});
    const [zoom, setZoom] = useState(13);
    const [map, setMap] = useState(null);

    function addPoint(p){
        
        if(!p) return;

        setPoints([...points, p])
    }
    
    return(
        <MapContext.Provider value={{addPoint, points, point, setPoint, zoom, setZoom, map, setMap}}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider;