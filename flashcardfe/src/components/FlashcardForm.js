import React, { useState } from "react";

const FlashcardForm = ({ onAdd }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ question, answer });
        setQuestion("");
        setAnswer("");
    };

    return (
        <div>
            <h2>Create Flashcard</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <input
                    placeholder="Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default FlashcardForm;