require("dotenv").config(); // Load .env variables

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
};