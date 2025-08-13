import { useState } from "react";

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])

  const [newBook, setNewBook] = useState([
    // { title: '', author: '' },
  ])


  const handleInputChange = (eventInput) => {
    // setBookInput(eventInput.target.value);
    setNewBook({ ...newBook, [eventInput.target.name]: eventInput.target.value })
  };

  const handleSubmit = (eventInput) => {
    // setBookInput(eventInput.target.value);
    eventInput.preventDefault();
    setBooks({ ...books, [eventInput.target.name]: eventInput.target.value });
    setNewBook()
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>

          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />

            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Submit a book</button>
          </form>



        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}
          {books.map((book) => (
            <ul>
              <h4 title={book.title}></h4>
              <h4 author={book.author}></h4>
            </ul>
          ))}
        </div>
      </div>

    </>
  );
}

export default Bookshelf


