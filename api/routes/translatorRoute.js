const express = require("express");
const router = express.Router();
router.get("/save", function(req, res, next) {
  res.status(200).json({ statusCode: 200, message: "Send Successfully" });
});
module.exports = router;
