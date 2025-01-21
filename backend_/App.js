const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const AddData = require("./AddData"); // Mongoose model
require("./db"); // Connect to database

const propertyRoutes = require("./propertyRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
    );
app.use(express.static("public"));

// Create a folder for uploaded images if it doesn't exist
const createFolder = (folderName) => {
    const dirPath = path.join(__dirname, "public", "images", folderName);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    };

// Routes
app.post("/postData", async (req, res) => {
    try {
    if (!req.files || !req.files.images) {
        return res.status(400).send("No files were uploaded.");
    }

    const images = Array.isArray(req.files.images)
        ? req.files.images
        : [req.files.images];

    const imageNames = images.map((file) => file.name);
    createFolder(req.body.name);

    images.forEach((file) => {
        const uploadPath = path.join(
        __dirname,
        "public",
        "images",
        req.body.name,
        file.name
        );
        file.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
        });
    });

    const data = new AddData({
        name: req.body.name,
        phone_number: req.body.phone_number,
        street_name: req.body.street_name,
        area: req.body.area,
        city: req.body.city,
        state: req.body.state,
        furnished_status: req.body.furnished_status,
        rent: req.body.rent,
        image: imageNames,
    });

    await data.save();
        res.status(201).send("Data added successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    }
    });

    app.get("/getData", async (req, res) => {
    try {
    const { city } = req.query;

    const data = await AddData.find({ city });
    if (!data.length) {
        return res.status(404).send("No data found for the specified city.");
    }

    res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching data.");
    }
    });

// Use propertyRoutes for property-related routes
app.use("/api", propertyRoutes); // Prefix with '/api' to group routes 

    // Fallback route
    app.use("*", (req, res) => {
        res.status(404).send("This route is invalid");
    });

    // Start Server
   app.listen(80, () => {
    console.log("Server listening on port 80");
});
