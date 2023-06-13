const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact.model");
const User = require("../models/User.model");

//GET /api/:userId/contact => sends the Contact info to the FE
router.get("/:userId/contact", async (req, res, next) => {
  try {
    // Gets userId from params
    const userId = req.params.userId;
    // Finds the user by id and populates the projects
    const user = await User.findById(userId).populate("contact");
    console.log(user);
    const contact = user.contact;
    // Sends the list of projects to the FE
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

// POST /api/:userId/contact => Gets the fields of a Contact and creates it in the DB
router.post("/:userId/contact", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Destructure the body
  const { githubLink, linkedinLink, emailLink } = req.body;
  // Validate the fields
  //   if (!image || !title || !description || !githubLinks || !liveDemo) {
  //     res.status(400).json({ message: "All fields should be completed" });
  //     return;
  //   }
  try {
    // Creates a new project
    const newContact = await Contact.create({
      githubLink,
      linkedinLink,
      emailLink,
    });
    // Adds the new project to the user's projects
    await User.findByIdAndUpdate(
      userId,
      { $push: { contact: newContact._id } },
      { new: true }
    );
    // Sends the new project to the FE
    res.json(newContact);
  } catch (error) {
    next(error);
  }
});
// PUT /api/:userId/Contact/:contactId => Edit the contact info
router.put("/:userId/contact/:contactId", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Gets projectId from params
  const contactId = req.params.contactId;
  // Destructure the body
  const { githubLink, linkedinLink, emailLink } = req.body;
  // Validate the fields
  // if (!image || !title || !description || !githubLinks || !liveDemo) {
  //   res.status(400).json({ message: "All fields should be completed" });
  //   return;
  // }
  try {
    // Updates the project
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      {
        githubLink, linkedinLink, emailLink
      },
      { new: true }
    );
    // Sends the updated project to the FE
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
