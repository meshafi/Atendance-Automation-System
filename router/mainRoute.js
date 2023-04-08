const express = require("express");
const path = require("path");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.get("/login", (req, res) => res.render("./user/login"));
router.get("/faculty", isAuth, (req, res) => res.render("faculty"));

// time table routes
router.get("/time_table_btech_1_year", (req, res) => {
    const loc = path.join(__dirname, "../public/time_table/btech_1_year.html");
    res.sendFile(loc);
});

module.exports = router;
