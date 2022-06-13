import mongoose from "mongoose";
const SubscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Subscribe", SubscribeSchema);
