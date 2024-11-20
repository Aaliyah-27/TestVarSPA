const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./testvar.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS flashcards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            hidden BOOLEAN DEFAULT 0
        )
    `);
});

module.exports = db;