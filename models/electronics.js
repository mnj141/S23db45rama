const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
    electronicsName: {
        type: String,
        minlength:1,
        maxlength:15
    },
    electronicsType: String,
    electronicCost: {
        type: Number,
        min: 1000,
        max: 100000
    }
})
module.exports = mongoose.model("Electronics",
electronicsSchema)