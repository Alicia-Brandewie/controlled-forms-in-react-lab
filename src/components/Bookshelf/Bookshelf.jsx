import { useState } from "react";

const [books, setBooks] = useState([])

const [newBook, setNewBook] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
])


const handleInputChange = (eventInput) => {
  setBookInput(eventInput.target.value);
}







const handleSubmit = (eventInput) => {
  setBookInput(eventInput.target.value);
}



<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>

export default Bookshelf


// ______________________________________
return (
  <>
    <h1> Add a new book!</h1>
    <form>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleInputChange}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={handleInputChange}
      />

    </form>
  </>
);
export default Form 