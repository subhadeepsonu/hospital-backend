const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    spec: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    worksin: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "hospital"
        }
    ]




}, {
    timestamps: true
});
export const doctor = mongoose.model("doctor", doctorSchema);
