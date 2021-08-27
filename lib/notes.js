const fs = require('fs');
const path = require('path');

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text!== 'string') {
    return false;
  }
 
  return true;
}

function createNewNote(body, notes) {
    notes.push(body);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
  }
  module.exports = {validateNote, createNewNote};