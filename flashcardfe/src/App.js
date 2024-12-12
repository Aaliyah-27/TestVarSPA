import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";
import FlashcardStudy from "./components/FlashcardStudy";
import { getFlashcards, createFlashcard, deleteFlashcard } from "./services/api";

const App = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [view, setView] = useState("list");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFlashcards();
            setFlashcards(data);
        };
        fetchData();
    }, []);

    const handleAdd = async (newCard) => {
        const addedCard = await createFlashcard(newCard);
        setFlashcards([...flashcards, { ...newCard, id: addedCard.id }]);
        setView("list");
    };

    const handleDelete = async (id) => {
        await deleteFlashcard(id);
        setFlashcards(flashcards.filter((card) => card.id !== id));
    };

    return (
        <div>
            <h1>Flashcard App</h1>
            <nav>
                <button onClick={() => setView("list")}>View Flashcards</button>
                <button onClick={() => setView("create")}>Create Flashcard</button>
                <button onClick={() => setView("study")}>Study Flashcards</button>
            </nav>

            {view === "list" && (
                <FlashcardList flashcards={flashcards} onDelete={handleDelete} />
            )}
            {view === "create" && <FlashcardForm onAdd={handleAdd} />}
            {view === "study" && <FlashcardStudy flashcards={flashcards} />}
        </div>
    );
};

export default App;