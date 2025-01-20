const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello ALAM BHAI");
});
app.listen(3000, () => {
  console.log("Server Started at port 3000");
});
