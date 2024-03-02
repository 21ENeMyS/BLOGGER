const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./config/DB");
// Routers
const authRouter = require("./router/authRoutes");

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(
    `listening on port : http://localhost:${port || process.env.PORT}`
  );
});
