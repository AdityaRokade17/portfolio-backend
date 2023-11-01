const express = require("express");
const app = express();
var cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("./config/database");


app.use(
    cors({
      origin: "*",
    })
);

//middle ware
app.use(express.json());

const routes = require("./routes/user")
app.use("/api/v1" , routes);

app.listen(PORT, () => {
    console.log(`the server is running ar ${PORT}`);
});

dbConnect();