//Importing Libraries 
import express from 'express'
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000


const startServer = (app: express.Express) => {
  //Listing to the app and running it on PORT 5000
  app.listen(PORT, async () => {
      console.log(`listning on port ${PORT}`)
  })

  app.get('/stations/get/:id,', (req, res)=> {
    const stationName = 'Kamuning';
    const coordinates = '[1.0, 1.0]';
    res.send(
        [
            {
                sname: 'kamuning',
                id:1
            }
        ]
    )
  })

//   app.get('/stations/get/:id,', (req, res)=> {
//     const id=req.params['id'];
//     const station=stations.find((s)=>s.id==Number(id));
//     if (station){
//         res.send(
//             station
//         ).status(200)
//     } else {
//         res.send({
//             message: "Station not found"
//         }).sendStatus(500)
//     }
//   })

}

export default startServer;