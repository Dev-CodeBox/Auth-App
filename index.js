const express = require("express");
const app = express();
// Process.env.NODE_ENV !== 'production
require('dotenv').config();
const PORT = process.env.PORT || 4000;
// JSON.stringify
app.use(express.json());
// Database configuration
require("./config/dbConnect").connect();
// Routes
const user = require("./routes/userRoute");
// Mount routes
app.use("/api/v1", user);
// Start the server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});