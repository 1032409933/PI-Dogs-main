const {Router} = require ("express")
const temperamentsHandler  = require ("../handlers/temperamentsHandlers")

const temperamentsRouter = Router();


temperamentsRouter.get("/",temperamentsHandler)

module.exports = temperamentsRouter;