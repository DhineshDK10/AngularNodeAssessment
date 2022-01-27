
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryDK=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryDK.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryDK.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryDK.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryDK.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryDK.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryDK.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryDK.deleteAll);
  
    app.use('/api/categoryDKs', router);
  };