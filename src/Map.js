import React, { useEffect, useRef, useState } from "react";
import { GOOGLEAPIKEY } from "./config.js";
import "./FrontPage.css";

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLEAPIKEY}`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);

  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  return (
    <div
      style={{ width: `89vw`, height: `40vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  );
}

Map.defaultProps = {
  options: {
    center: { lat: 33.9702, lng: 118.4166 },
    zoom: 5
  }
};
