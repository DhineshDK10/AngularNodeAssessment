const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productDK = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productDK.create);
  
    // Retrieve all Tutorials
    router.get("/", productDK.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productDK.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productDK.findOne);
    // Update a Tutorial with id
    router.put("/:id", productDK.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productDK.delete);
  
    // Delete all Tutorials
    router.delete("/", productDK.deleteAll);
  
    app.use('/api/productDKs', router);
  };