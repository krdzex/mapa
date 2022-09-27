import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const AddMarkers = () => {
  const [markers, setMarkers] = useState([]);

  useMapEvents({
    click: (e) => {
      setMarkers([...markers, e.latlng]);
    }
  });
  return (
    <>
    {markers.length > 0 &&(<MarkerClusterGroup showCoverageOnHover={false}>
      {markers.map((marker, i) => (
        <Marker key={`marker-${i}`} position={marker}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      ))}
      </MarkerClusterGroup>)}
    </>
  );
};

export default AddMarkers;
