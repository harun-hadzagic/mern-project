// const uuid = require("uuid")
const HttpError = require("../models/http-error")
let DUMMY_PLACES = [
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

const getPlaceById = (req, res, next) => {
    const placeId = req.params.placeId;
    const place = DUMMY_PLACES.find((p) => {
      return p.id === placeId;
    });
  
    if(!place) {
      throw new HttpError("Could not find a place for the provided id", 404); 
    }
  
    res.json({ place });
  }

  const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.userId;
    const place = DUMMY_PLACES.find((p) => {
      return p.creator === userId;
    });
    if(!place) {
      return next(new HttpError("Could not find a place for the provided user id", 404));
    }
        res.json({ place });
  }

  const createPlace = (req, res, next)=>{
    const { title, description, coordinates, address, creator} = req.body;
    const createdPlace = {
        id: Date.now().toString(),
        title,
        description,
        location: coordinates,
        address,
        creator
    };
    DUMMY_PLACES.push(createdPlace)

    res.status(200).json({place: createdPlace})
  }
exports.getPlaceById = getPlaceById
exports.getPlaceByUserId = getPlaceByUserId
exports.createPlace = createPlace

//   module.exports = {getPlaceById, getPlaceByUserId}