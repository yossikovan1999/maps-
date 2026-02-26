import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyMap from "./components/MyMap/MyMap";
import MapProvider from "./context/MapContext";

function App() {
  return (
    <>
      <MapProvider>
        <MyMap />
      </MapProvider>
    </>
  );
}

export default App;
