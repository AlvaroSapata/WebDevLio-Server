const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// project routes
router.use("/", require("./projects.routes"))
// contact routes
router.use("/", require("./contact.routes"))
// skillsList routes
router.use("/", require("./skillsList.routes"))
// homeProfile routes
router.use("/", require("./homeProfile.routes"))

module.exports = router;
