const express = require("express");
const app = express();
var cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("./config/database");

const allowedOrigins = ['https://aditya-rokade.vercel.app/', 'http://localhost:3001']; // Replace with your frontend domain
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

//middle ware
// app.use(express.json());

const routes = require("./routes/user")
app.use("/api/v1" , routes);

app.listen(PORT, () => {
    console.log(`the server is running ar ${PORT}`);
});

app.use("/", (req, res) => {
  
  res.json({});
})


dbConnect();