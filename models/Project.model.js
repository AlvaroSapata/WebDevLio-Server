const { Schema, model } = require("mongoose");

// Project
const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    image: {
      type: String,
      required: [true, "Image is required."],
    },
    githubLinks: {
      type: [String],
      //required: [true, "Title is required."],
    },
    liveDemo: {
      type: String,
      //required: [true, "Title is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
