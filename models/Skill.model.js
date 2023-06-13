const { Schema, model } = require("mongoose");

// Skill
const skillSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    list: {
      type: [String],
      required: [true, "List cant be empty."],
      // mirar Lorena/Pedro
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Skill = model("Skill", skillSchema);

module.exports = Skill;
