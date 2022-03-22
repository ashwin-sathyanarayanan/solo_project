const mongoose = require("mongoose");


const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    price: {
        type: String,
        required: [true, "price is required"],
    },
    imageURL: {
        type: String,
        required: [true, "image URL is required"],
    }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;