const { Schema, model } = require("mongoose");

// HomeProfile
const homeProfileSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    links: {
      type: [String],
    },
    backgroundImage: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const HomeProfile = model("HomeProfile", homeProfileSchema);

module.exports = HomeProfile;
