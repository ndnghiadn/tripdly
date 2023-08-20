import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coordinate: {
    type: String,
  },
});

const Location = mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
