const dotenv = require("dotenv");

dotenv.config({ path: "./vars/.env" });

const APP_PORT = process.env.APP_PORT;
const DB_URI = process.env.DB_URI;
const SECRET_STR = process.env.SECRET_STR;

module.exports = { APP_PORT, DB_URI, SECRET_STR };
