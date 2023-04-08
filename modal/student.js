const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
    },
    enrollno: {
        type: String,
        required: true,
    },
    contactno: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
