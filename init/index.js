const mongoose = require("mongoose");

const initData = require("./data.js");

const Listing = require("../models/listing.js");

// connection with db

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(async () => {
        console.log("Connection successfully");

        const initDB = async () => {
            await Listing.deleteMany({});

            initData.data = initData.data.map((obj) => ({
                ...obj,
                owner: "6a8f3a0dfd70aecbb9a604fd"
            }));

            await Listing.insertMany(initData.data);

            console.log("data was initialized");
        };

        await initDB();
        await mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });