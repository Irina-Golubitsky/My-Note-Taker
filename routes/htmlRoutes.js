// Dependencies
const path = require("path");
const router = require("express").Router();

// GET 
// Home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/", "index.html"));
});

// GET 
// Notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "notes.html"));
});

// GET
// all/any notes with wildcard
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
module.exports = router;