const express = require("express");
const router = express.Router();

router.get("/19BTCS025HY", (req, res) => res.render("./report/report"));

module.exports = router;
