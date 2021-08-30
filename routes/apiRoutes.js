const router = require("express").Router();
let  {notes} = require("../db/db.json");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
// update db.json
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

// Add new note
router.post("/notes", (req, res) => {
  const newNote = {
      // add unique id
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text
  } 
  notes.push(newNote);
  writeDB();
    res.json(notes);
  
});

// Delete note
router.delete("/notes/:id", (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id);
   writeDB();
   res.json(notes);
});
module.exports = router;