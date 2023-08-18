const express = require("express")
const router = express.Router()
const productModel = require("../model/product.model.js")

//Create

router.post("/producto", async(req, res)=>{
  try{
    
    await productModel.create(req.body)
    res.status(201).send("producto agregado")

  }catch(error){
    res.status(500).send("Error al agregar el producto")
  }
})


// Read
router.get("/productos", async (req, res)=>{
  try{
    
    const productos = await productModel.find()
    
    if(productos){
      res.status(200).send(productos)
    } else{
      res.status(200).send("Esta vacio")
    }

  }catch(error){
    res.status(500).send("Algo anda mal")
  }
})

router.get("/productos/:nombre", async (req, res)=>{
  try{
    
    const producto = await productModel.find({nombre: req.params.nombre})
    if(producto){
      res.status(200).send(producto)
    }else{
      res.status(404).send("No existe ese producto")
    }

  }catch(error){
    res.status(500).send("Algo anda mal")
  }
})

module.exports = router