const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");

const app = express();
app.use("/api", userRouter);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello Prisma Learner"));

app.listen(5000, () => console.log("Server is running at Port 5000"));
