// Fix: Explicitly point to the parent directory for the .env file
require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    
    initData.data = initData.data.map((obj) => ({
      ...obj, 
      owner: "69fb746886ad869c6b802613",
    }));

    await Listing.insertMany(initData.data);
    console.log("Data was initialized successfully!");
  } catch (err) {
    console.log("Failed to initialize data:", err);
  } finally {
 
    mongoose.connection.close();
  }
};


main()
  .then(() => {
    console.log("Connected to DB");
    return initDB(); 
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });