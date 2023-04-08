const express = require("express");
const router = express.Router();

router.get("/btech-1-year", (req, res) => res.render("attendance"));

router.get("/list_student", (req, res) => res.render("./partials/_list"));



module.exports = router;
