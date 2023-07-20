// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models fighters
const fighterModel = require('../models/fighters')

router.get('/', (req, res) => {
    //console.log(req);
    fighterModel.find()
        .then(elem => {
            console.log(elem);
            res.json(elem)
        })
        .catch(err => {
            console.error(err);
        })
})



router.post('/', (req, res) => {
    //console.log(req);
    const addPerson = new fighterModel({
        // the spread operator "..." get every line of the request
        ...req.body
    })
    addPerson.save()
        .then(() => res.status(201).json({ message: "New challenger is coming" }))
        .catch(error => res.status(400).json(error))
})

// export router 
module.exports = router