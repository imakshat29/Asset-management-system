import express from "express";
import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    assetId: mongoose.Schema.Types.ObjectId,
    employeeId: mongoose.Schema.Types.ObjectId,
    type: {
        type: String,
        enum: ["Assigned", "Returned"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model("Log", logSchema);

export default Log;