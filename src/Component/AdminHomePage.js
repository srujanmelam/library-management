import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AdminHomePage() {

  const[title,setTitle] = useState("")
  const[author,setAuthor] = useState("")
  const[isbn,setISBN] = useState("")
  const[publication,setPublication] = useState("")
  const history = useNavigate();

  const addBook = ()=>{
    const book = {
      'title':title,
      'author':author,
      'ISBN':isbn,
      'publication':publication
    }
    axios.post(`http://localhost:3000/books`,book).then((res)=>{
      console.log("user created successfully")
      history("/Home")
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <h1>Add a Book</h1>
      <label for="title">Title:</label>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} required="required" pattern="[A-Za-z0-9]+"/>
      <br/><br/>
      <label for="author">Author:</label>
      <input type="text" onChange={(e)=>setAuthor(e.target.value)} required="required" pattern="[A-Za-z0-9]+"/>
      <br/><br/>
      <label for="isbn">ISBN:</label>
      <input type="text" onChange={(e)=>setISBN(e.target.value)} required="required" pattern="[0-9]{3}-[0-9]-[0-9]{2}-[0-9]{6}-[0-9]" />
      <br/><br/>
      <label for="publication">Publication</label>
      <input type="text" onChange={(e)=>setPublication(e.target.value)} required="required" pattern="[0-9]{4}"/>
      <br/><br/>
      <button type="submit" onClick={addBook}>Submit</button>
    </div>
  );
}

export default AdminHomePage;
