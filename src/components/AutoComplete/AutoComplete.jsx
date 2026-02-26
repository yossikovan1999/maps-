import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import {GeoapifyContext, GeoapifyGeocoderAutocomplete} from "@geoapify/react-geocoder-autocomplete";

import "./AutoComplete.css";
import { useMapContext } from "../../context/MapContext";

function AutoComplete({map}) {

  const {points, addPoint, setPoint} = useMapContext();

  const onPlaceSelected = (feature) => {        
    setPoint(feature?.properties);
    map.flyTo(feature?.properties);
  };

  const onSuggestionsChange = (list) => {
    console.log("Suggestions:", list);
  };

  return (
    <div className="auto-complete">
    <GeoapifyContext apiKey="d9bfb9559e204fa28d239b3096360dbf" >
      <GeoapifyGeocoderAutocomplete 
        placeholder="Search for an address"
        lang="en"
        limit={8}
        addDetails={true}
        placeSelect={onPlaceSelected}
        suggestionsChange={onSuggestionsChange}
      />
    </GeoapifyContext>
    </div>
  );
}

export default AutoComplete;
