
const mongoose = require("mongoose");
const medical_recordsSchema = new mongoose.Schema({
    problems: [{
        problem: {
            type: String,
            required: true,
        },
        currdoctor: {
            type: mongoose.Schema.ObjectId,
            ref: "doctor",
            required: true
        }
    }]
}, { timestamps: true });
export const medical_records = mongoose.model("medical_records", medical_recordsSchema);
