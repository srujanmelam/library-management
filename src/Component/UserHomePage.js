import axios from "axios";
import {useState} from "react";

function UserHomePage() {

  const[search, setSearch] = useState("");
  const[attribute, setAttribute] = useState("title")
  const[sort, setSort] = useState("id")
  const[order, setOrder] = useState(false)

  const Search = ()=>{
    const ord = order? "asc" : "desc"
    axios.post(`http://localhost:3000/books?_sort=${sort}&_order=${ord}`).then((res)=>{
      console.log("books data retrieved successfully")
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <input type="text" placeholder={search} onChange={(e)=>setSearch(e.target.value)}/>
      Search from
      <select value={attribute} onChange={(e)=>setAttribute(e.target.value)} >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publication">Publication</option>
      </select>
	    <button type="submit" onClick={Search}>Search</button>
      Sort
      <select value={sort} onChange={(e)=>setSort(e.target.value)} >
        <option value="id">ID</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publication">Publication</option>
      </select>
      AscOrder? <input name="isAdmin" type="checkbox" checked={order} onChange={(e)=>setOrder(!order)} />
    </div>
  );
}

export default UserHomePage;

/*<h1>UserHomePage(Contains buttons of borrow books , search books, user profile, log out
    1)navbar(home,stats,profile)
    2)search input bar, dropdown(att-book,author),search button icon
    3)right corner-sort(drop down),increase n decrease (icons)
    4)book component (details of book)
</h1> */
