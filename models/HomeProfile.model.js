const { Schema, model } = require("mongoose");

// HomeProfile
const homeProfileSchema = new Schema(
  {
    title: {
      type: String,
      default: "Ex: Front-end React Developer",
    },
    description: {
      type: String,
      default: "Ex: Hi, I'm (username), a passionate Front-end React Developer, based in Madrid, Spain.",
    },
    profileImage: {
      type: String,
      default: "https://httpstatusdogs.com/img/404.jpg"
    },
    links: {
      type: [String],
      default: ["your linkedin here", "your github here"],
    },
    backgroundImage: {
      type: String,
      default: "https://httpstatusdogs.com/img/404.jpg"
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const HomeProfile = model("HomeProfile", homeProfileSchema);

module.exports = HomeProfile;
