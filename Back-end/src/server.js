const express = require('express');
const server = express();
const cors = require("cors")

const PORT = 3001;
const {sequelize} = require("./datebase/DB_connection.js")
const router = require("./routes/index")
const favsRouter = require("./routes/routerFavs")
server.use(express.json())
server.use(cors())

server.use("/rickandmorty" ,router)
server.use("/favs",favsRouter)



async function main(){
  try {
  await sequelize.sync({  force:true });
  server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);

});
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main()