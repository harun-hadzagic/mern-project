// const uuid = require("uuid")
const HttpError = require("../models/http-error")
const {validationResult} = require("express-validator")
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

  const getPlacesByUserId = (req, res, next) => {
    const userId = req.params.userId;
    const places = DUMMY_PLACES.filter((p) => {
      return p.creator === userId;
    });
    if(!places || places.length === 0) {
      return next(new HttpError("Could not find a places for the provided user id", 404));
    }
        res.json({ places});
  }

  const createPlace = (req, res, next)=>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        throw new HttpError("Invalid inputs entered", 422)
    }
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

  const updatePlace = (req, res, next) =>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        throw new HttpError("Invalid inputs entered", 422)
    }
    const { title, description} = req.body;
    const placeId = req.params.placeId;

    const updatedPlace = {...DUMMY_PLACES.find(p=>p.id === placeId)}
    const placeIndex = DUMMY_PLACES.findIndex(p=>p.id === placeId)
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex]= updatedPlace

    res.status(200).json({place: updatedPlace})

  }

  const deletePlace = (req, res, next) =>{
    DUMMY_PLACES = DUMMY_PLACES.filter(p=> p.id !== req.params.placeId)

    res.status(200).json({message: "Deleted succesful"})
  }
exports.getPlaceById = getPlaceById
exports.getPlacesByUserId = getPlacesByUserId
exports.createPlace = createPlace
exports.updatePlace = updatePlace
exports.deletePlace = deletePlace

//   module.exports = {getPlaceById, getPlaceByUserId}