const db = require("../db/database");

exports.getAllFlashcards = (req, res) => {
    db.all("SELECT * FROM flashcards", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.createFlashcard = (req, res) => {
    const { question, answer } = req.body;
    db.run(
        `INSERT INTO flashcards (question, answer) VALUES (?, ?)`,
        [question, answer],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID });
        }
    );
};