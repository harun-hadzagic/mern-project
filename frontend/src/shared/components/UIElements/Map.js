import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRaf = useRef();

  const { center, zoom } = props;
  console.log(props);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRaf.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRaf}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
