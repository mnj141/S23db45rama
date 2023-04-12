const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
    electronicsName: String,
    electronicsType: String,
    electronicCost: Number
})
module.exports = mongoose.model("Electronics",
electronicsSchema)