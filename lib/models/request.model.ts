import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  memberCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId, ref: "User",
    required: true,
  },
  trip: {
    type: mongoose.Schema.ObjectId, ref: "Trip",
    required: true,
  },  
  status: {
    enum: ["yes", "no", "wait"],
  },
});

const Request = mongoose.models.Request || mongoose.model("Request", requestSchema);

export default Request;
