import { useState } from 'react';

const BookShelf = () => {
   
   

  const [books, setBooks] = useState([
    { title: 'The Metamorphosis', author: 'Franz Kafka' },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  ]);
  const [newBook, setNewBook] = useState({ 
    title: '', 
    author: '' });

   
  const handleInputChange = (event) => {
    setNewBook({ 
        ...newBook, 
        [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            
          </div>
          <div>
            <label htmlFor='author'>Author:</label>
              Author:
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;