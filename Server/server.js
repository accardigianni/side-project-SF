// condition if we are in developement or in deployement
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// deal with CORS for API calls
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connexion réussi")
    })
    .catch((error) => {
        console.error("Erreur lors de la connexion", error)
    })

// import router
const fighterRouter = require('./routes/fighters')

//use route

app.use('/', fighterRouter)

app.listen(3000)