const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("API's Workig");
});

const useRouter = require("./routes/users");

// url for api
app.use("/users", useRouter);

app.listen(port, () => console.log(`app listening in port ${port}`));
