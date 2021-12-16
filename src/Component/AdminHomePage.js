import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/AdminHomePage.css";
import book from "./images/book.png";

function AdminHomePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [publication, setPublication] = useState("");
  const history = useNavigate();

  const addBook = () => {
    const book = {
      title: title,
      author: author,
      ISBN: isbn,
      publication: publication,
    };
    axios
      .post(`http://localhost:3000/books`, book)
      .then((res) => {
        console.log("user created successfully");
        history("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="body">
      <div className="main3">
        <br></br>

        <div className="sub">
          {" "}
          <img alt="book icon" className="ip1" src={book}></img>
          <h1>Add a Book</h1>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required="required"
            pattern="[A-Za-z0-9]+"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            required="required"
            pattern="[A-Za-z0-9]+"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="ISBN"
            onChange={(e) => setISBN(e.target.value)}
            required="required"
            pattern="[0-9]{3}-[0-9]-[0-9]{2}-[0-9]{6}-[0-9]"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Publication"
            onChange={(e) => setPublication(e.target.value)}
            required="required"
            pattern="[0-9]{4}"
          />
          <br />
          <br />
          <button type="submit" onClick={addBook}>
            Submit
          </button>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
