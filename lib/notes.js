const fs = require('fs');
const path = require('path');


function createNewNote(body, notes) {
 
        notes.push(body);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
        res.json(animal);
      }
    
  module.exports = {createNewNote};