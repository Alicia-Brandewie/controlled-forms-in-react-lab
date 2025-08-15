import { useState } from "react";

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])

  const [newBook, setNewBook] = useState(
    { title: '', author: '' },
  )


  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>

          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              // type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label>Author:</label>
            <input
              // type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Submit a book</button>
          </form>
        </div>

        <div className="bookCardsDiv">
          {books.map((book) => (
            <ul>
              <h3 key={book.title}> {book.title}</h3>
              <h4 key={book.author}>By:{book.author}</h4>
            </ul>
          ))};
        </div>
      </div>

    </>
  );
}

export default Bookshelf


