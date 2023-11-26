const { createDog, getDogByID, getAllDogs, getDogsByName } = require ("../controllers/dogsControllers")
const axios = require ("axios");



const getDogsHandler = async (req,res)=>{
    try {
        const dogs = await getAllDogs();
        res.status(200).json(dogs)
        }catch (error){
        res.status(400).json({error:error.message});
    }
};

const getDogsByNameHandler = async (req,res)=>{
    const { name } = req.query;
    try {
        const dogName = await getDogsByName (name);
        res.status(200).json(dogName)
        }catch (error){
        res.status(400).json({error:error.message});
    }
};


const getDogsByIdHandler = async (req,res) =>{
    const { idRaza } = req.params;
    
    const source = isNaN(idRaza) ? "bdd" : "api";

    try {
    const dog = await getDogByID(idRaza, source);
    res.status(200).json(dog)
    }catch (error){
    res.status(400).json({error:error.message});
}
};

const postDogHandler = async(req,res)=>{
    const {nombre, altura, peso } = req.body;
    try {
    const newDog = await createDog (nombre, altura, peso)
        res.status(201).json(newDog);
    } catch (error){
        res.status(400).json({error:error.message});
    } 
};

module.exports = {
    getDogsHandler,
    getDogsByNameHandler,
    getDogsByIdHandler,
    postDogHandler
}