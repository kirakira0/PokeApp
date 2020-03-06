import React, { useEffect, useRef, useState } from "react";
import { GOOGLEAPIKEY } from "./config.js";
import "./FrontPage.css";

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  const links = [{
    coords: { lat: 33.97, lng: -118.42 }, 
    title: `Burns Rec Center`,
    },
  {
  coords: { lat: 33.97, lng:-118.42 }, // required: latitude & longitude at which to display the marker
  title: `Sullivan Field`,
  }];

  function addMarkers(map, links) {
    links.forEach((link, index) => {
      const marker = new window.google.maps.Marker({
        map,
        position: link.coords,
        label: `${index + 1}`,
        title: link.title,
      })
      marker.addListener(`click`, () => {
        window.location.href = link.url
      })
    })
  }

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
    center: { lat: 33.97, lng: -118.42 },
    zoom: 13
  },
  onMount: Map.addMarkers,
  onMountProps: Map.links,
};
