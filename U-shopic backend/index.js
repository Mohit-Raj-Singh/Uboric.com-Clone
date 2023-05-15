const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/UserRoutes");
const { authentication } = require("./middleware/authorization");
const { connection } = require("./config/db");

const app = express();
app.use(cors({
    origin: "*"
}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage");
})

app.use("/users", userRouter)
app.use(authentication);


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Error in local host");
        console.log(err);
    }
    console.log(`server is running on port ${process.env.port}`);
})