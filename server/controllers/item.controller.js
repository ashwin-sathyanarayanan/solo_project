const jwt = require('jsonwebtoken')

const Item = require("../models/item.model")


const healthcheck = (req,res) => {
    res.json({msg: "ALL GOOD"});
};

const getAllItems = (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete:true})
    const user = decodedJwt.payload
    // console.log(req.cookies.usertoken)
    
    Item.find()
        .then((allItems) =>{
            res.json({allItems});
        })
        .catch((err) => {res.status(400).json({ err })});
    
}

const addNewItem = (req,res) => {
    console.log('gets here');
    const {body} = req;
    console.log(req.body);
    Item.create(body)
        .then((newItem) => {
            res.json({newItem});
        })
        .catch((err) => {res.status(400).json({ err })});
}

const getItemById = (req, res) => {
    Item.findOne({_id: req.params._id})
        .then((queriedItem) => res.json({ queriedItem}))
        .catch((err) => {res.status(400).json({ err })});
}

module.exports = {
    healthcheck,
    getAllItems,
    addNewItem,
    getItemById,
}
