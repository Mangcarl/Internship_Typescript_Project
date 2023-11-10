import { getConnection } from './db';
// import articles from './data/articles';
// import sampleData from 'data/datasource';
import * as dotenv from 'dotenv'
import * as core from "express-serve-static-core";
import { Article } from '../../new_ui/src/services/articles';
import { Db } from 'mongodb';

 
dotenv.config()
/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number
  ===============================================================
*/


const startServer = (app: core.Express) => {
  const PORT = process.env.PORT || 3000
  app.get("/health", (req, res) => {
    return res.status(200).send({
      message: "alive"
    });
  })
  app.get("/sim-error", (req, res) => {
    return res.status(500).send({
      message: "This is a simmulated error"
    })
  })
//   app.get("/data/get", (req, res) => {
//     return res.status(200).send(sampleData)
//   })
  app.get("/articles/get", async (req, res) => {
   await getConnection().then(async (Db)=>{
  const articleC = await Db.collection("articles").find({});

    const articles = await articleC.toArray(); 
    // console.log("res",articles)
    res.status(200).send(articles)
   })
  })

  //Listing to the app and running it on PORT 5000
  app.listen(PORT, async () => {
     console.log(`listning on port ${PORT}`)
  })
 
}
 
export default startServer;