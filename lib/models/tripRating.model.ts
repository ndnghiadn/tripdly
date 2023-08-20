import mongoose from "mongoose";

const tripRatingSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
  },
  trip: {
    type: mongoose.Schema.ObjectId, ref: "Trip",
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
});

const TripRating = mongoose.models.TripRating || mongoose.model("TripRating", tripRatingSchema);

export default TripRating;
