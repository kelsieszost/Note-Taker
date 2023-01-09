const express = require('express');
const path = require("path");
const fs = require("fs");


const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", (error, notes) => {
        if (error) {
            return console.log("cound not get note")
        }

        res.json(JSON.parse(notes))

    })
});

app.post("/api/notes", (req, res) => {

    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    if (notes.length === 0) {
        newNotes.id = 1
    } else {
        newNotes.id = notes.length + 1;
    }

    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
            console.log("cannot add note")
        }
    })
    res.json(notes);
    console.log("note added")
});

app.delete('/api/notes/:id', function (req, res) {

    const deleteNote = req.params.id;

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;


        noteData = JSON.parse(data);

        for (let i = 0; i < noteData.length; i++) {
            if (noteData[i].id == deleteNote) {
                noteData.splice([i], 1);
            }
        }

        newNoteData = JSON.stringify(noteData);

        fs.writeFile('./db/db.json', newNoteData, (err, data) => {
            if (err) {
                console.log("error deleting note")
            } else {
                res.json(data)
                console.log(`note ${deleteNote} deleted!`)
            }
        });

    });
});
