function isOwner(req, res, next) {

    const { payload } = req; 
    if (payload._id === req.params.userId) {
        next()
    } else {
      res.status(401).json("You cant access routes belonging to other users");
    }
  }


  module.exports = isOwner;