const {Router} = require("express")
const {getCharById} = require("../controllers/getCharsById")
const {getCharDetail} = require("../controllers/getCharDetail")
const router = Router();



router.get("/onsearch/:id", getCharById)






module.exports = router