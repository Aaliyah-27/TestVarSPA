import React, { useState } from "react";

const FlashcardStudy = ({ flashcards }) => {
    const [revealed, setRevealed] = useState({});

    const toggleReveal = (id) => {
        setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div>
            <h2>Study Flashcards</h2>
            <ul>
                {flashcards.map((card) => (
                    <li key={card.id}>
                        <strong>{card.question}</strong> - 
                        {revealed[card.id] ? card.answer : "Click to reveal"}
                        <button onClick={() => toggleReveal(card.id)}>
                            {revealed[card.id] ? "Hide" : "Reveal"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlashcardStudy;