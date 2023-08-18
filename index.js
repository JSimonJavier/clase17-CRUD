const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRouter = require("./routes/product.router.js")
const PORT = 8000

app.use(express.json())

const url = "mongodb+srv://javisimon22:dJrUwMt8jA9kgApw@data-base.shzhzce.mongodb.net/"

app.use("/", productRouter)
const connectToMongo = async() => {
  try{

    await mongoose.connect(url)
    app.listen(PORT, ()=>{
      console.log(`Escuchando en el puerto http://localhost:${PORT} y BD conectada`);
    })

  }catch(error){
    console.log(error);
  }
}

connectToMongo()