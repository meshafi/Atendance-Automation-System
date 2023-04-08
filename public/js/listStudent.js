// const studentController = require("../../controllers/StudentController");

// const studentList = studentController.readAll();
// console.log(studentController.studentList);

// async function func() {
//     const studentList = await readAll();

//     console.log(studentList);
// }

// func();
// dummy test file

// async function readAll(req, res, next) {
//     let studentList;
//     try {
//         const result = await Student.find({ year: 4 }, {});
//         studentList = result;
//         res.send(result);
//     } catch (err) {
//         res.send(err);
//     }
//     return studentList;
// }

const people = [
    {
        no: 1,
        name: "Mohd Azeem",
        rollno: "19BTCS025HY",
    },
    {
        no: 2,
        name: "Mohd Shafi",
        rollno: "19BTCS025HY",
    },
    {
        no: 3,
        name: "Mohd Huzaifa",
        rollno: "19BTCS025HY",
    },
    {
        no: 4,
        name: "Mohd Waqar Hashim",
        rollno: "19BTCS025HY",
    },
    {
        no: 5,
        name: "Abdul Akhir",
        rollno: "19BTCS025HY",
    },
    {
        no: 6,
        name: "Salman Ansari",
        rollno: "19BTCS025HY",
    },
    {
        no: 7,
        name: "Zeeshan Ali",
        rollno: "19BTCS025HY",
    },
    {
        no: 8,
        name: "Saba Mariyam",
        rollno: "19BTCS025HY",
    },
    {
        no: 9,
        name: "Aleena Raees",
        rollno: "19BTCS025HY",
    },
    {
        no: 10,
        name: "Jamal Hashim",
        rollno: "19BTCS025HY",
    },
    {
        no: 11,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
    {
        no: 12,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
    {
        no: 13,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
    {
        no: 14,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
    {
        no: 15,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
    {
        no: 16,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
    {
        no: 17,
        name: "Adil Masood",
        rollno: "19BTCS025HY",
    },
];

function new_user(sno, name, rollno) {
    const new_tr = document.createElement("tr");
    const new_sno = document.createElement("td");
    const new_name = document.createElement("td");
    const new_rollno = document.createElement("td");
    const new_status = document.createElement("td");
    const new_input = document.createElement("input");

    new_sno.innerText = sno;
    new_name.innerText = name;
    new_rollno.innerText = rollno;
    new_input.setAttribute("type", "checkbox");

    new_status.append(new_input);

    new_tr.append(new_sno);
    new_tr.append(new_name);
    new_tr.append(new_rollno);
    new_tr.append(new_status);

    return new_tr;
}

const table = document.querySelector("table");

for (let i = 1; i <= people.length; ++i) {
    const user = new_user(i, people[i - 1].name, people[i - 1].rollno);
    table.appendChild(user);
}

const btns = document.querySelector(".all-btns");

for (let i = 1; i <= people.length; ++i) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btns.appendChild(btn);
}
