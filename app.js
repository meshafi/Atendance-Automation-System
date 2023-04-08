const express = require("express");
const { APP_PORT, DB_URI, SECRET_STR } = require("./config/config");
const connect_db = require("./database/connect_db");
const session = require("express-session");
const MongoDbSession = require("connect-mongodb-session")(session);

const mainRoute = require("./router/mainRoute");
const userRoute = require("./router/userRoute");
const attendRoute = require("./router/attendRoute");
const reportRoute = require("./router/reportRoute");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/public/time_table"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
connect_db();

// session management
const sessionStorage = new MongoDbSession({
    uri: DB_URI,
    collection: "appSession",
});

app.use(
    session({
        secret: SECRET_STR,
        resave: false,
        saveUninitialized: false,
        store: sessionStorage,
    })
);

app.use(mainRoute);
app.use(userRoute);
app.use(attendRoute);
app.use(reportRoute);

app.all("/", (req, res) => res.render("home"));

app.listen(APP_PORT, () => {
    console.log(`running on http://localhost:${APP_PORT}`);
});
