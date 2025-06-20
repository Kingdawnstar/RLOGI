import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required:true,
    },

    number: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },

    isSuperuser: {
      type: Boolean,
      default: false
    },

    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
