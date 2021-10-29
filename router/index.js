var express = require("express");
var router = express.Router();

const user = require("./user");
const board = require("./board");
const like = require("./like");
const message = require("./message");

router.use("/user", user);
router.use("/board", board);
router.use("/like", like);
router.use("/message", message);

router.get("/", (req, res) => {
  return res.status(200).send({
    test: "test",
  });
});

module.exports = router;
