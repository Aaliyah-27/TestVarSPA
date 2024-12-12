import axios from "axios";

const API_URL = "http://localhost:3000/api/flashcards";

export const getFlashcards = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createFlashcard = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateFlashcard = async (id, data) => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
};

export const deleteFlashcard = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};