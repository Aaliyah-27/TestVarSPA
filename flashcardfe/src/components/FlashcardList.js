import React from "react";

const FlashcardList = ({ flashcards, onDelete }) => {
    return (
        <div>
            <h2>All Flashcards</h2>
            <ul>
                {flashcards.map((card) => (
                    <li key={card.id}>
                        <strong>{card.question}</strong> - {card.answer}
                        <button onClick={() => onDelete(card.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlashcardList;