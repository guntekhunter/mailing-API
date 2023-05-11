require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
// const MailingController = require("./controller/mailing");
// const Authentication = require("./middleware/authentication");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API's Workig");
});

const userRouter = require("./routes/users");
const mailingRouter = require("./routes/mailing");

// url for api
app.use("/users", userRouter);
app.use("/mailings", mailingRouter);


app.listen(port, () => console.log(`app listening in port ${port}`));
