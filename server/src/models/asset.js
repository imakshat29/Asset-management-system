import express from "express";
import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Available" , "Assigned" , "Repair", "Retired"],
        default: "available"
    },
    purchaseDate: { type: Date } 
});

const Asset = mongoose.model("Asset", assetSchema);

export default Asset;