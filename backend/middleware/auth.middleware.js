const jwt = require("jsonwebtoken");
const BlackList = require("../models/blacklist.model");
// const BlackList = require("../Model/BlackListModel");
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      const blacklistedToken = await BlackList.findOne({ token: token });
      if (blacklistedToken) {
        res.status(202).send({ msg: "please Login Again!" });
      } else {
        jwt.verify(token, "greenmentor", (err, decode) => {
          if (decode) {
            next();
          } else res.send({ message: "error" });
        });
      }
    } else {
      res.status(200).send({ message: "You are not authorized" });
    }
  } catch (error) {
    res.send({ message: "there is something wrong" });
  }
};

module.exports = {
  auth,
};
