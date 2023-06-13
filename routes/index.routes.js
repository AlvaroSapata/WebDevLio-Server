const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// router.use("/auth", require("./auth.routes"));

router.use("/", require("./projects.routes"))
router.use("/", require("./contact.routes"))

module.exports = router;
