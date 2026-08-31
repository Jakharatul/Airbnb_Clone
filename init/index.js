const path = require("path");
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(async () => {
        console.log("Connected to DB successfully");

        const initDB = async () => {
            await Listing.deleteMany({});

            // Ensure user 'Atul' exists
            let user = await User.findOne({ username: { $regex: /^atul$/i } });
            if (!user) {
                const newUser = new User({ email: "atul@gmail.com", username: "Atul" });
                user = await User.register(newUser, "hello");
                console.log("Registered new user 'Atul' with password 'hello'");
            } else {
                console.log("Found existing user 'Atul':", user._id);
            }

            initData.data = initData.data.map((obj) => ({
                ...obj,
                owner: user._id,
            }));

            await Listing.insertMany(initData.data);
            console.log("Data was initialized with", initData.data.length, "listings.");
        };

        await initDB();
        await mongoose.connection.close();
        process.exit(0);
    })
    .catch((err) => {
        console.error("DB connection error:", err);
        process.exit(1);
    });