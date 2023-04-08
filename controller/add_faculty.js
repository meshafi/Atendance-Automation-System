const Joi = require("joi");
const bcrypt = require("bcrypt");
const Faculty = require("../modal/faculty");

async function add_faculty(req, res, next) {
    // validatate req body
    const facultyValidator = Joi.object({
        name: Joi.string().min(3).max(30),
        username: Joi.string(),
        email: Joi.string().email().required(),
        contactno: Joi.string().regex(/^[0-9]{10}$/),

        // Minimum eight characters, at least one letter and one number
        // password: Joi.string()
        //     .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        //     .required(),
        password: Joi.string().required(),
        confirm_password: Joi.ref("password"),
    });

    const { error } = facultyValidator.validate(req.body);
    if (error) {
        res.send("Invalid input field, <br>" + error);
        return next();
    }

    // check if user is in the database already
    try {
        const exist = await Faculty.exists({ email: req.body.email });
        if (exist) {
            res.send("This email is already taken.");
            return next();
        }
    } catch (err) {
        return next(err);
    }

    const { name, username, email, contactno, password } = req.body;

    // hash/encypted password
    const hashedPassword = await bcrypt.hash(password, 10);

    // write to database
    const faculty = new Faculty({
        name,
        username,
        email,
        contactno,
        password: hashedPassword,
    });

    const result = await faculty.save();

    const resp =
        'new faculty added successfully,<br> <a href="./login">back to login page</a>';
    res.send(resp);
}

module.exports = add_faculty;
