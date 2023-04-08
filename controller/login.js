const Joi = require("joi");
const bcrypt = require("bcrypt");
const Faculty = require("../modal/faculty");

async function login(req, res, next) {
    // validatate req body
    const loginValidator = Joi.object({
        email: Joi.string().email().required(),
        // Minimum eight characters, at least one letter and one number
        // password: Joi.string()
        //     .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        //     .required(),
        password: Joi.string().required(),
    });

    const { error } = loginValidator.validate(req.body);
    if (error) {
        res.send("Invalid input field, <br>" + error);
        return next();
    }

    const { email, password } = req.body;

    // check if user is in the database already
    const user = await Faculty.findOne({ email: req.body.email });
    try {
        if (!user) {
            const resp =
                'This user does not exist,<br> please <a href="./add">register here</a>';
            res.send(resp);
            return next();
        }
    } catch (err) {
        return next(err);
    }

    // const matched = password === user.password;
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
        res.json({ error: "Invalid email or password" });
        return next();
    }

    req.session.isAuth = true;
    res.redirect("faculty");
}

module.exports = login;
