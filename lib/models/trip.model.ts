import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  time: {
    type: Date,
  },
  memberLimit: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId, ref: "User",
    required: true,
  },
  location: [{
    type: mongoose.Schema.ObjectId, ref: "Location",
    required: true,
  }],
  request: [{
    type: mongoose.Schema.ObjectId, ref: "Request",
    required: true,
  }],
});

const Trip = mongoose.models.Trip || mongoose.model("Trip", tripSchema);

export default Trip;
