const mongoose = require("mongoose");
const medical_recordsSchema = new mongoose.Schema({

});
export const medical_records = mongoose.model("medical_records", medical_recordsSchema);
