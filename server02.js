const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018
    }
];

// GET - Display all books
app.get("/books", (req, res) => {
    res.json(books);
});

// POST - Add new book
app.post("/books", (req, res) => {
    const { title, author, year } = req.body;

    const newBook = {
        id: Date.now(),
        title: title,
        author: author,
        year: year
    };

    books.push(newBook);

    res.json({
        message: "Book added successfully",
        book: newBook
    });
});

// PUT - Update book
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;

    res.json({
        message: "Book updated successfully",
        book: book
    });
});

// DELETE - Delete book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(index, 1);

    res.json({
        message: "Book deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});