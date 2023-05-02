const {MongoClient}= require('mongodb');
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);
const data = require('../data')

const insertDetails = async (data)=>{
  try {
    const database=client.db('BlogBackend');
    const collection = database.collection('dataBlog');
    await client.connect();
    console.log("connected")
    const result = await collection.insertMany(data);
    console.log("connected")
    // console.log(result)
    await client.close()
    return result
  } catch (error) {
    console.log(error.message)
  }
}

const getDetails = async ()=>{
    const database= client.db('BlogBackend');
    const collection = database.collection('dataBlog');
    await client.connect();
    console.log("connected")
    const data =collection.find({})
    console.log("data")

    // console.log(data)
    await client.close();
    return data
}
module.exports = {insertDetails,getDetails}