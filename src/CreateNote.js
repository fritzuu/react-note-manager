import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNote({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() && content.trim()) {
            const newNote = {
                id: Date.now().toString(),
                title: title,
                content: content,
                date: new Date().toLocaleString(),
            };

            // Add the new note using the function passed from App.js
            addNote(newNote);

            // Redirect to the home page after adding the note
            navigate('/');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create New Note</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-semibold text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter note title"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold text-gray-700">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter note content"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="6"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
                >
                    Save Note
                </button>
            </form>
        </div>
    );
}

export default CreateNote;