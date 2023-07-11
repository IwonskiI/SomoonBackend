const router = require('express').Router();
const badge = require('../../controller/badge.controller.js');

//Create tutorial
router.post('/:company&:ability', badge.add);

//Retrieve all tutorials
router.get('/', badge.showAll);

// Retrieve all published Tutorials
// router.get("/published", tutorial.findAllPublished);

//Retrieve tutorial by id
// router.get('/:id', tutorial.findOne);

//Update tutorial by id
// router.put('/:id', tutorial.update);

//Delete tutorial by id
router.delete('/:id', badge.delete);

module.exports = router;