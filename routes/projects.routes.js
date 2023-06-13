const express = require("express");
const router = express.Router();

const Project = require("../models/Project.model");
const User = require("../models/User.model");

//GET /api/:userId/projects => sends list of projects to the FE
router.get("/:userId/projects", async (req, res, next) => {
  try {
    // Gets userId from params
    const userId = req.params.userId;
    // Finds the user by id and populates the projects
    const user = await User.findById(userId).populate("projects");
    const projects = user.projects;
    // Sends the list of projects to the FE
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

// POST /api/:userId/projects => Gets the fields of a new project and creates it in the DB
router.post("/:userId/projects", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Destructure the body
  const { image, title, description, githubLinks, liveDemo } = req.body;
  // Validate the fields
  if (!image || !title || !description || !githubLinks || !liveDemo) {
    res.status(400).json({ message: "All fields should be completed" });
    return;
  }
  try {
    // Creates a new project
    const newProject = await Project.create({
      image,
      title,
      description,
      githubLinks,
      liveDemo,
    });
    // Adds the new project to the user's projects
    await User.findByIdAndUpdate(
      userId,
      { $push: { projects: newProject._id } },
      { new: true }
    );
    // Sends the new project to the FE
    res.json(newProject);
  } catch (error) {
    next(error);
  }
});

// PUT /api/:userId/projects/:projectId => Edit a project
router.put("/:userId/projects/:projectId", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Gets projectId from params
  const projectId = req.params.projectId;
  // Destructure the body
  const { image, title, description, githubLinks, liveDemo } = req.body;
  // Validate the fields
  if (!image || !title || !description || !githubLinks || !liveDemo) {
    res.status(400).json({ message: "All fields should be completed" });
    return;
  }

  try {
    // Updates the project
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      {
        image,
        title,
        description,
        githubLinks,
        liveDemo,
      },
      { new: true }
    );
    // Sends the updated project to the FE
    res.json(updatedProject);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/:userId/projects/:projectId => deletes a project
router.delete("/:userId/projects/:projectId", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Gets projectId from params
  const projectId = req.params.projectId;

  try {
    // 1. Removes the project from the user's projects
    await User.findByIdAndUpdate(userId, { $pull: { projects: projectId } });
    // 2. Deletes the project from the DB
    await Project.findByIdAndDelete(projectId);

    res.json("Project deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
