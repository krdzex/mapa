import "./App.css";
import { useMap } from "react-leaflet";
import {montenegro} from "./GeoJSON"
import AddMarkers from "./AddMarkers";
const { useState, useRef } = require("react");
const {
  MapContainer,
  TileLayer,
  GeoJSON
} = require("react-leaflet");

function App() {
  const [geoJson,setGeoJson] = useState();

  useState(()=>{
    setGeoJson(montenegro)
  },[])

 function Markerwhatever() {
  const map = useMap();
  
  const zoomToFeature = (e) => {
    //map.flyToBounds(e.target.getBounds(),{duration: 1});
  };

  return       <GeoJSON data={geoJson} onEachFeature={(__, layer) => {
    layer.on({
      click: (e) => {
        zoomToFeature(e);
      }
    });
  }}/>;
  }



  return (
    <>
    <MapContainer bounds={[
  [43.4020049,17.2359876],
  [41.7733662,22.448332],
]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddMarkers />
      <Markerwhatever />
    </MapContainer>
  </>

  );
}

export default App;
