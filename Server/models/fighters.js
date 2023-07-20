const mongoose = require('mongoose')
const fighterSchema = new mongoose.Schema(
    {
        "nom": { type: String, required: true },
        "like": { type: String, required: true },
        "unlike": { type: String, required: true },
        "taille": { type: Number, required: true },
        "poids": { type: String, required: true },
        "lien_image": { type: String, required: true },
        "lien_commande_list": { type: String, required: true }
    })

const fighterModel = mongoose.model('fighters', fighterSchema)
module.exports = fighterModel

