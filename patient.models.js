import { hospital } from "./hospital.models";

const mongoose = require("mongoose");
const patientSchema = new mongoose.model({
    firstname: {
        type: String,
        required: true,
    },
    diagnosedwith: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: Number,
        required: true
    },
    bloodGrp: {
        type: String,
        required: type
    },
    biologicalGender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    admittedat: {
        type: mongoose.Schema.ObjectId,
        ref: "hospital"
    }

});
export const patient = mongoose.model("patient", patientSchema);
