const router = require("express").Router();
let  {notes} = require("../db/db.json");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

const writeDB = () => {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return notes;
};

// Get notes
router.get("/notes", (req, res) => {
  console.log(notes);
  res.json(notes);
});

// Add new note with id 
router.post("/notes", (req, res) => {
  const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text
  } // Checks if blank 

  notes.push(newNote);
  writeDB();
    res.json(notes);
  
});

// Delete note by id
router.delete("/notes/:id", (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id);
   writeDB();
   res.json(notes);
});
module.exports = router;