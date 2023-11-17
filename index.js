const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/converter", require("./routes/api/converter"));

app.get("/", (req, res) => {
    res.send("Home sweet home");
});

const PORT = 3000; // or another port if you changed it
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
