import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    mainrole: {
      type: String,
      default: "user",
    },
    subscription: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",  //this is to passing the reference of Courses table (like a forign key) so that we get the detail of that particular course
      },
    ],
    resetPasswordExpire: Date,
  },
  {
    timestamps: true, //this is for at what time the use is created
  }
);

export const User = mongoose.model("User", schema);
