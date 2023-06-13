const { Schema, model } = require("mongoose");

// Contact
const contactSchema = new Schema(
  {
    githubLink: {
      type: String,
      default:" ",
    },
    linkedinLink: {
      type: String,
      default:" ",
    },
    emailLink: {
      type: String,
      default:" ",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
