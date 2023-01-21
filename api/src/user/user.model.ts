import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: { type: String, required: true },
    password: { type: String, required: true, select: false },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UsersSchema);
