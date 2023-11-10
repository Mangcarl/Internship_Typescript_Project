import { Db, MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://ryancaramol05:F8JGkpwsHpXA6HRx@cluster0.2nwello.mongodb.net/")
let conn: MongoClient;
const makeConnection = async () => {
  try {
    await client.connect().then(con => conn = con);
    console.log("Connected to DB")
  } catch(e) {
    console.error(e);
  }  
}

export const getConnection = async (): Promise<Db> => {
  if (!conn) {
    await makeConnection();
  }
  const dbConnection: Db = conn.db("phweb");
  return dbConnection;
}