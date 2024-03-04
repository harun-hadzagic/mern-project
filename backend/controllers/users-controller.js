const HttpError = require("../models/http-error")
const {validationResult} = require("express-validator")

const DUMMY_USERS = [
    {
        id: "u1",
        name: "Harun Hazagic",
        email : "harun@harun.ba",
        password: "123456"
    }
]

const getUsers = (req, res, nest)=>{
    res.json({users: DUMMY_USERS})
}
const signup = (req, res, nest)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new HttpError("Invalid inputs entered", 422)
    }
    const {name, email, password} = req.body;

    const emailExists = DUMMY_USERS.find(user => user.email === email)

    if(emailExists){
        throw new HttpError("Email already in use", 422)
    }

    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password
    };
    DUMMY_USERS.push(newUser)
    res.status(201).json({user: newUser})
}
const login = (req, res, nest)=>{
    const {email, password} = req.body;
    const identifiedUser = DUMMY_USERS.find(user=>user.email === email);
    if(!identifiedUser || identifiedUser.password !== password){
        throw new HttpError("No user with these credentials", 401)
    }
    res.json({message: "Log in succesful"})
}


exports.getUsers = getUsers
exports.signup = signup
exports.login = login