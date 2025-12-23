import express from "express";
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
// export default mongoose.model("Employee", employeeSchema);
const employee = mongoose.model("employee", employeeSchema);

export default employee;