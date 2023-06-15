const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// auth routes
router.use("/auth", require("./auth.routes"));

// homeProfile routes
router.use("/", require("./homeProfile.routes"));

// skillsList routes
router.use("/", require("./skillsList.routes"));

// project routes
router.use("/", require("./projects.routes"));

// contact routes
router.use("/", require("./contact.routes"));

// portfolio routes
router.use("/", require("./portfolio.routes"));

module.exports = router;
