const mongoose = require("mongoose");

const dbConnect = async function () {
    try {
        const mongoUrl = process.env.DB_URL;
        console.log("Establishing Mongo DB Connection...");
        const x = await mongoose.connect(mongoUrl);
        console.log(`Mongo DB (${process.env.NODE_ENV}) Connected :)`);
        return false;
    } catch (error) {
        console.log("==== DB Connection Error ====", error.message);
        throw error;
    }
};

module.exports = { dbConnect };
