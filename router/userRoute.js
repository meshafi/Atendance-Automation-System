const express = require("express");
const router = express.Router();
const add_faculty = require("../controller/add_faculty");
const add_student = require("../controller/add_student");
const login = require("../controller/login");
const isAuth = require("../middleware/isAuth");

// collect data from login page
router.post("/login", login);

// collect data from faculty form
router.post("/add_faculty", isAuth, add_faculty);

// collect data from student form
router.post("/add_student", isAuth, add_student);

// render faculty signup page
router.get("/add_faculty", isAuth, (req, res) =>
    res.render("./user/add_faculty", { heading: "Add New Faculty" })
);

// render student signup page
router.get("/add_student", isAuth, (req, res) =>
    res.render("./user/add_student", { heading: "Add New Student" })
);

// logout user
router.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

module.exports = router;
