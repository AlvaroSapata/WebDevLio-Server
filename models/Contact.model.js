const { Schema, model } = require("mongoose");

// Contact
const contactSchema = new Schema(
  {
    links: {
      type: [String],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
