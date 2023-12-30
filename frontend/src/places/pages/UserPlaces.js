import React from "react";
import {useParams} from "react-router-dom"

import PlacesList from "../components/PlacesList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Bulding",
    description: "The best description ever",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/styles/260x370/public/2020-01/thumbnail5M2VW4ZF.jpg?itok=3kRhMPZA",
    address: "21 Ulica Ljube Ljubica",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Bulding",
    description: "The best description ever",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/styles/260x370/public/2020-01/thumbnail5M2VW4ZF.jpg?itok=3kRhMPZA",
    address: "21 Ulica Ljube Ljubica",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;

  const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator === userId)
  return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;
