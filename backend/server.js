let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds155823.mlab.com:55823/lozadb");

//player SCHEMA
let playerSchema = new mongoose.Schema({
    name: String,
    bodovi: Number,
    postignutiGolovi: Number,
    primljeniGolovi: Number,
    golRazlika: Number,
    brojOdgiranihSusreta: Number
})

let players = mongoose.model("Players", playerSchema);

players.create(
    
);