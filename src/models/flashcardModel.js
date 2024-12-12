const db = require("../db/database");

module.exports = {
    getAllFlashcards: (callback) => {
        db.all("SELECT * FROM flashcards", [], (err, rows) => {
            callback(err, rows);
        });
    },

    addFlashcard: (question, answer, callback) => {
        db.run(
            `INSERT INTO flashcards (question, answer) VALUES (?, ?)`,
            [question, answer],
            function (err) {
                callback(err, this?.lastID);
            }
        );
    },

    updateFlashcard: (id, hidden, callback) => {
        db.run(
            `UPDATE flashcards SET hidden = ? WHERE id = ?`,
            [hidden, id],
            (err) => {
                callback(err);
            }
        );
    },

    deleteFlashcard: (id, callback) => {
        db.run(`DELETE FROM flashcards WHERE id = ?`, [id], (err) => {
            callback(err);
        });
    },
};
