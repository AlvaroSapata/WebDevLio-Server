const { Schema, model } = require("mongoose");

// User
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required."],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      trim: true,
    },
    homeProfile: {
      type: Schema.Types.ObjectId,
      ref: "HomeProfile",
      // Default?
    },
    skillsList: {
      type: [Schema.Types.ObjectId],
      ref: "Skill",
    },
    projects: {
      type: [Schema.Types.ObjectId],
      ref: "Project",
    },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
