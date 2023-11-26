const {Router} = require ("express")
const { getDogsHandler, getDogsByNameHandler, getDogsByIdHandler, postDogHandler } = require ("../handlers/dogsHandlers")

const dogsRouter = Router();


dogsRouter.get("/", getDogsHandler) 
dogsRouter.get("/name", getDogsByNameHandler) 
dogsRouter.get("/:idRaza", getDogsByIdHandler )
dogsRouter.post("/", postDogHandler) 

module.exports = dogsRouter;