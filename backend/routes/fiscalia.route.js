
let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Fiscalia Model
let fiscaliaSchema = require('../Models/Fiscalia.js');

// CREATE Fiscalia
router.route('/').post((req, res, next) => {
  fiscaliaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Fiscalia
router.route('/').get((req, res) => {
  fiscaliaSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Update Fiscalia
router.route('/').put((req, res, next) => {
  console.log(req.params.id, req.body)
  fiscaliaSchema.findOneAndUpdate(req.params.id, {
    
    $set: req.body
  }, (error, data) => {
    console.log(req.params.id, req.body, data)
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Se actualizo la fiscalia exitosamente!')
    }
  })
})

// Delete Fiscalia
router.route('/').delete((req, res, next) => {

  fiscaliaSchema.deleteOne(req.params._id, (error, data) => {
    console.log(req.params._id, "eesta miel: ", data);

    if (error) {
      return next(error);
    } else {
     
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;