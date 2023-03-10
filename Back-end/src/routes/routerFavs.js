const {Router} = require("express")
const favsRouter = Router();

const {favs} = require("../../util/favs")


favsRouter.post("/create",(req,res) => {
    favs.push({...req.body});
    res.status(201).json(favs)
})
favsRouter.get("/get",(req,res) => {
    return res.json(favs)
})
favsRouter.delete("/delete/:id", (req,res) => {
    const {id} = req.params;
    let result = []
    while (favs.length > 0){
        result.push(favs.shift())
    }
    result = result.filter((pj) => pj.id !== Number(id));
    
    while(result.length > 0){
        favs.push(result.shift())
    }
    return res.status(200).json(favs)
});




module.exports = favsRouter