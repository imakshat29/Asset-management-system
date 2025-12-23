import express from "express";
import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    assetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Asset",
        required: true,
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    type: {
        type: String,
        enum: ["Assigned", "Returned"],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model("Log", logSchema);

export default Log;