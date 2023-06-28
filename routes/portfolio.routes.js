const express = require("express");
const router = express.Router();
const isOwner = require("../middleware/isOwner.middleware");
const { isAuthenticated } = require("../middleware/jwt.middleware");

//GET /api/portfolio/:userId => sends info to the FE
router.get("/portfolio/:userName", async (req, res, next) => {
    try {
      // Gets userName from params
      const {userName} = req.params;
      console.log("REQ:PARAMS",req.params)
      res.json(userId);
  
    } catch (error) {
      next(error);
    }
  });

module.exports = router;