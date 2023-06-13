const express = require("express");
const router = express.Router();

const Skill = require("../models/Skill.model");
const User = require("../models/User.model");

//GET /api/:userId/skillsList => enviar al front end la lista de todos los skills
router.get("/:userId/skillsList", async (req, res, next) => {
  try {
    // Gets userId from params
    const userId = req.params.userId;
    // Finds the user by id and populates the skill
    const user = await User.findById(userId).populate("skillsList");
    const skills = user.skillsList;
    // Sends the list of skills to the FE
    res.json(skills);
  } catch (error) {
    next(error);
  }
});

// POST /api/:userId/skillsList => recibir del fronted los detalles de un skill y crearlo en la BD
router.post("/:userId/skillsList", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  const { title, list } = req.body;
  if (!title || !list) {
    res.status(400).json({ message: "Debes rellenar todos los campos" });
    return;
  }
  try {
    // Creates a new skill
    const newSkill = await Skill.create({
      title,
      list,
    });
    // Adds the new skill to the user's skill list
    await User.findByIdAndUpdate(
      userId,
      { $push: { skillsList: newSkill._id } },
      { new: true }
    );
    // Sends the new skilllist to the FE
    res.json(newSkill);
  } catch (error) {
    next(error);
  }
});

router.put("/:userId/skillsList/:skillId", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Gets skillId from params
  const skillId = req.params.skillId;
  const { title, list } = req.body;
  if (!list || !title) {
    res.status(400).json({ message: "All fields should be completed" });
    return;
  }
  try {
    // Updates the skill
    const updatedSkill = await Skill.findByIdAndUpdate(
      skillId,
      {
        title,
        list,
      },
      { new: true }
    );
    // Sends the updated skill to the FE
    res.json(updatedSkill);
  } catch (error) {
    next(error);
  }
});
// DELETE /api/:userId/skillsList/:skillId => deletes a skill
router.delete("/:userId/skillsList/:skillId", async (req, res, next) => {
  // Gets userId from params
  const userId = req.params.userId;
  // Gets skillId from params
  const skillId = req.params.skillId;

  try {
    // 1. Removes the skill from the user's skill list
    await User.findByIdAndDelete(userId, { $pull: { skillList: skillId } });
    // 2. Deletes the skillList from the DB
    await Skill.findByIdAndDelete(skillId);
    res.json("skill eliminado");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
