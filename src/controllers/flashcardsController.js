const db = require("../db/database");

exports.getAllFlashcards = (req, res) => {
    db.all("SELECT * FROM flashcards", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.addFlashcard = (req, res) => {
    const { question, answer } = req.body;
    if (!question || !answer) {
        return res.status(400).json({ error: "Question and answer are required." });
    }

    db.run(
        `INSERT INTO flashcards (question, answer) VALUES (?, ?)`,
        [question, answer],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            // Retrieve the newly created flashcard
            db.get(
                `SELECT * FROM flashcards WHERE id = ?`,
                [this.lastID],
                (err, row) => {
                    if (err) return res.status(500).json({ error: err.message });
                    res.status(201).json(row);
                }
            );
        }
    );
};

exports.deleteFlashcard = (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM flashcards WHERE id = ?`, id, function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: this.changes });
    });
};
