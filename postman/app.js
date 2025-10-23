const express = require('express');
const fs = require('fs');
const bp = require('body-parser');

const app = express();
const port = 3002;
let stu = require('./students.json');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// Home route
app.get("/", function (req, res) {
  res.send("<h3>Welcome to Express REST API SERVER</h3>");
});

// Get all students
app.get("/list", function (req, res) {
  fs.readFile("students.json", function (err, data) {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file.");
      return;
    }
    res.write(data);
    res.end();
  });
});

// Insert student
app.post("/", function (req, res) {
  console.log("Received POST data:", req.body); // Debug
  const newstu = req.body;
  if (!newstu || !newstu.name || !newstu.roll) {
    return res.status(400).send("Invalid student data");
  }
  stu.push(newstu);
  stu = stu.filter(s => s !== null);  //Cleans the array to remove any accidental null values
  mywrite(stu);
  res.send("Inserted");
});

// Update student
app.put("/", function (req, res) {
  const upstu = req.body;
  let found = false;

  for (let s in stu) {
    if (stu[s]["roll"] == upstu["roll"]) {
      stu[s]["name"] = upstu["name"];
      found = true;
      break;
    }
  }

  if (found) {
    mywrite(stu);
    res.send("Updated successfully");
  } else {
    res.status(404).send("Student not found");
  }
});

// Delete student
app.delete("/", function (req, res) {
  const delstu = req.body;
  const initialLength = stu.length;

  stu = stu.filter(s => s && s.roll !== delstu["roll"]);

  if (stu.length < initialLength) {
    mywrite(stu);
    res.send("Deleted successfully");
  } else {
    res.status(404).send("Student not found");
  }
});

// Write to file
function mywrite(data) {
  fs.writeFile("students.json", JSON.stringify(data, null, 2), function (err) {
    if (err) console.error("Error writing file:", err);
  });
}

// Start server
app.listen(port, function () {
  console.log("Server started on port " + port);
});