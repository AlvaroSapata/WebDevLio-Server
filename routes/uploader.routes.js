const express = require("express");
const router = express.Router();
const imageUploader = require("../middleware/cloudinaryImage.config")

// POST "/api/upload/image"
router.post("/image", imageUploader.single("image"), (req, res, next) => {
  
    if (!req.file) {
      next("No image uploaded!");
      return;
    }
  
    
    res.json({ imageUrl: req.file.path });
  });


module.exports = router;