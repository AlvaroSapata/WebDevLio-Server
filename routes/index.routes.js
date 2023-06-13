const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// router.use("/auth", require("./auth.routes"));

router.use("/", require("./projects.routes"))
router.use("/", require("./contact.routes"))
router.use("/", require("./skillsList.routes"))
router.use("/", require("./homeProfile.routes"))

module.exports = router;
