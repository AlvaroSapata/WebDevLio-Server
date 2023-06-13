const express = require("express");
const router = express.Router();

const HomeProfile = require("../models/HomeProfile.model");
const User = require("../models/User.model");

//GET /api/:userId/homeProfile => sends the Contact info to the FE
router.get("/:userId/homeProfile", async (req, res, next) => {
  try {
    // Gets userId from params
    const userId = req.params.userId;
    // Finds the user by id and populates the homeProfile
    const user = await User.findById(userId).populate("homeProfile");
    console.log(user);
    const homeProfile = user.homeProfile;
    // Sends the list of projects to the FE
    res.json(homeProfile);
  } catch (error) {
    next(error);
  }
});

// POST /api/:userId/homeProfile => Gets the fields of a Contact and creates it in the DB
router.post("/:userId/homeProfile", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  //! Destructure the body
  const { title, description, profileImage, links, backgroundImage } = req.body;
  // Validate the fields
  //   if (!image || !title || !description || !githubLinks || !liveDemo) {
  //     res.status(400).json({ message: "All fields should be completed" });
  //     return;
  //   }
  try {
    // Creates a new project
    const newHomeProfile = await HomeProfile.create({
      title,
      description,
      profileImage,
      links,
      backgroundImage,
    });
    // Adds the new project to the user's projects
    await User.findByIdAndUpdate(
      userId,
      { $push: { homeProfile: newHomeProfile._id } },
      { new: true }
    );
    // Sends the new project to the FE
    res.json(newHomeProfile);
  } catch (error) {
    next(error);
  }
});

// PUT /api/:userId/homeProfile/:homeProfileId => Edit the contact info
router.put("/:userId/homeProfile/:homeProfileId", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Gets projectId from params
  const homeProfileId = req.params.homeProfileId;
  // Destructure the body
  const { title, description, profileImage, links, backgroundImage } = req.body;
  // Validate the fields
  // if (!image || !title || !description || !githubLinks || !liveDemo) {
  //   res.status(400).json({ message: "All fields should be completed" });
  //   return;
  // }
  try {
    // Updates the project
    const updatedHomeProfile = await HomeProfile.findByIdAndUpdate(
      homeProfileId,
      {
        title,
        description,
        profileImage,
        links,
        backgroundImage,
      },
      { new: true }
    );
    // Sends the updated project to the FE
    res.json(updatedHomeProfile);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
