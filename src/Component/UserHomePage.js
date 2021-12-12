import axios from "axios";
import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import store from "./store";
import Product from "./Product";

function UserHomePage({books}) {

  const[search, setSearch] = useState("");
  const[attribute, setAttribute] = useState("title")
  const[sort, setSort] = useState("id")
  const[order, setOrder] = useState(false)

  const fetchData = ()=>{
    axios.get(`http://localhost:3000/books`).then((res)=>{
      store.dispatch({type:"get",payload:res.data})
      console.log("books data retrieved successfully")
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(fetchData,[])
  const Search = ()=>{
    store.dispatch({type:"search",search:search,by:attribute})
  }
  const Sort = ()=>{
    store.dispatch({type:"sort",by:sort,ord:order})
  }

  return (
    <div>
      <input type="text" placeholder={search} onChange={(e)=>setSearch(e.target.value)}/>
      Search from
      <select value={attribute} onChange={(e)=>setAttribute(e.target.value)} >
        <option value="title">title</option>
        <option value="author">author</option>
        <option value="publication">publication</option>
      </select>
	    <button type="submit" onClick={Search}>Search</button>
      Sort
      <select value={sort} onChange={(e)=>setSort(e.target.value)} >
        <option value="id">id</option>
        <option value="title">title</option>
        <option value="author">author</option>
        <option value="publication">publication</option>
      </select>
      AscOrder? <input name="isAdmin" type="checkbox" checked={order} onChange={(e)=>setOrder(!order)} />
      <button type="submit" onClick={Sort}>Sort</button>
      {books.map((book,i)=><Product key={i} product={book}/>)}
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
      books : state.bookReducer.books
  }
}

export default connect(mapStateToProps)(UserHomePage)

/*<h1>UserHomePage(Contains buttons of borrow books , search books, user profile, log out
    1)navbar(home,stats,profile)
    2)search input bar, dropdown(att-book,author),search button icon
    3)right corner-sort(drop down),increase n decrease (icons)
    4)book component (details of book)
    {books.map((book,i)=><Product key={i} product={book}/>)}
</h1> */
