import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
  },
  dob: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  image: String,
  role: {
    enum: ["Admin", "Guide", "Visitor"],
  },
  //   bio: String,
  //   threads: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Thread",
  //     },
  //   ],
  //   onboarded: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   communities: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Community",
  //     },
  //   ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
