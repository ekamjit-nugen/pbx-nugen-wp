import mongoose from "mongoose";

const userQuerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      default: "",
    },
    contact: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "userQuery",
  }
);
const userQuery =
  mongoose.models.userQuery || mongoose.model("userQuery", userQuerySchema);

export default userQuery;
