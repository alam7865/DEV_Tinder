const express = require("express");
const app = express();

// app.get("/user", (req, res) => {
//   res.send({
//     firstName: "Akshay",
//     LastName: "Sani",
//   });
// });

///////////////// Post ////////////////////
app.post("/user", (req, res) => {
  res.send("Data updated Succesfully");
});

//////////////// Data deleted /////////////////
app.delete("/user", (req, res) => {
  res.send("Data Delteded Succesfully");
});

app.use("/people", (req, res) => {
  res.send("Hello People");
});

app.use("/hello", (req, res) => {
  res.send("Hello Hello");
});

// app.use("/", (req, res) => {
//   res.send("Hello ALAM BHAI");
// });

app.listen(3000, () => {
  console.log("Server Started at port 3000");
});
