import mongoose from "mongoose";

const userRatingSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.ObjectId, ref: "User",
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

const UserRating = mongoose.models.UserRating || mongoose.model("UserRating", userRatingSchema);

export default UserRating;
