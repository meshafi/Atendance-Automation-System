const Joi = require("joi");
const bcrypt = require("bcrypt");
const Student = require("../modal/student");

async function add_student(req, res, next) {
    // validatate req body
    const studentValidator = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        course: Joi.string().required(),
        year: Joi.number().required(),
        rollno: Joi.string().required(),
        enrollno: Joi.string().required(),
        contactno: Joi.string()
            .regex(/^[0-9]{10}$/)
            .required(),

        // Minimum eight characters, at least one letter and one number
        // password: Joi.string()
        //     .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        //     .required(),
        password: Joi.string().required(),
        confirm_password: Joi.ref("password"),
    });

    const { error } = studentValidator.validate(req.body);
    if (error) {
        res.send("Invalid input field, <br>" + error);
        return next();
    }

    // check if user is in the database already
    try {
        const exist = await Student.exists({ email: req.body.email });
        if (exist) {
            res.send("This email is already taken.");
            return next();
        }
    } catch (err) {
        return next(err);
    }

    const {
        name,
        username,
        email,
        course,
        year,
        rollno,
        enrollno,
        contactno,
        password,
    } = req.body;

    // hash/encypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // write to database
    const student = new Student({
        name,
        username,
        email,
        course,
        year,
        rollno,
        enrollno,
        contactno,
        password: hashedPassword,
    });
    const result = await student.save();

    const resp =
        'new student added successfully,<br> <a href="./login">back to login page</a>';
    res.send(resp);
}

module.exports = add_student;
