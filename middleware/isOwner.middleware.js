function isOwner(req, res, next) {
  console.log("payload", req.payload);

  if (req.payload._id === req.params.userId) {
    next();
  } else {
    res.status(401).json("You cant access routes belonging to other users");
  }
}

module.exports = isOwner;
