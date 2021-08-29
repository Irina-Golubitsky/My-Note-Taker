const router = require("express").Router();
let notes = require("../db/db.json");
const path = require("path");
const fs = require("fs");
   //updates the json file whenever a note is added or deleted
   function writeDb() {
       console.log(path.join(__dirname, '../db/db.json'));
    fs.writeFile(path.join(__dirname, '../db/db.json'),JSON.stringify(notes),err => {
        if (err) throw err;
        return true;
    });
}

// GET Notes
console.log(notes);
router.get("/notes", (req, res) => {
  res.json(notes);
});

// Setup the /api/notes post route
router.post("/notes", function(req, res) {
    notes.push(req.body);
    writeDb();
    console.log("Added new note: "+req.body.title);
    res.json(notes);
});

// Retrieves a note with specific id
router.get("/notes/:id", function(req,res) {
    // display json for the notes array indices of the provided id
    console.log(req.params.id);
    res.json(notes[req.params.id]);
});

// Deletes a note with specific id
router.delete("/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    writeDb();
    console.log("Deleted note with id "+req.params.id);
    res.json(notes);
});


module.exports = router;