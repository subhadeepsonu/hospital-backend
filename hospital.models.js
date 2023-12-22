const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
    hospitalname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    doctors: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "doctor"
        }
    ],
    patients: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "patient"
        }
    ]
});
export const hospital = mongoose.model("hospital", hospitalSchema);
