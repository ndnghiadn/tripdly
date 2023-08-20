import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  fullname: {
    type: String,
    require:true
  },
  joinDate: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  languagues: {type:[String]},
  image: {
    type:String,
  },
  work: {
    type: String
  },
  videoIntro: {
    type: String,
  }
});

const Guide = mongoose.models.Guide || mongoose.model("Guide", guideSchema);

export default Guide;
