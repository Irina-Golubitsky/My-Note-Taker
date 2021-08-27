const router = require("express").Router();
let notes = require("../db/db.json");
const {validateNote, createNewNote} = require("../lib/notes.js");

// GET Notes
console.log(notes);
router.get("/notes", (req, res) => {
    console.log(notes);
  res.json(notes);
});


module.exports = router;