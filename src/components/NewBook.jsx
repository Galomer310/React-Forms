import { useState } from 'react';

function NewBook() {
  const [inputValue, setInputValue] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>New Book</h1>
        <label>Title</label>
        <input
          name="title"
          value={inputValue.title}
          onChange={handleInputChange}
          type="text"
        />
        <br />
        <br />
        <label>Author</label>
        <input
          name="author"
          value={inputValue.author}
          onChange={handleInputChange}
          type="text"
        />
        <br />
        <br />
        <label>Genre</label>
        <input
          name="genre"
          value={inputValue.genre}
          onChange={handleInputChange}
          type="text"
        />
        <br />
        <br />
        <label>Year Published</label>
        <input
          name="publishedYear"
          value={inputValue.publishedYear}
          onChange={handleInputChange}
          type="number"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewBook;
