const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use("/api/converter", require("./routes/api/converter"));

app.get("/", (req, res) => {
    res.send("Home sweet home");
});

//Conectar ao MongoDB
mongoose.connect('mongodb+srv://claudiodacruz:d9qHJdzAW5NCLE9Z@cluster0.0e3u5sf.mongodb.net/?retryWrites=true&w=majority');

const PORT = 3002; // or another port if you changed it
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
