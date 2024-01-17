const express = require("express");

const router = express.Router();

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

router.get("/:placeId", (req, res, next) => {
  const placeId = req.params.placeId;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  console.log("GET request in places");
  res.json({ place });
});

module.exports = router;
