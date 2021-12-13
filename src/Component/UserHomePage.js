import axios from "axios";
import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import store from "./store";
import Product from "./Product";
import './css/UserHomePage.css'
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

  useEffect(fetchData,[]);
  const Search = ()=>{
    store.dispatch({type:"search",text:search,by:attribute})
    console.log(books)
  }
  const Sort = (e)=>{
    e.preventDefault()
    store.dispatch({type:"sort",by:sort,ord:order})
    console.log(books)
  }

  return (
    <div className="main1"><div className="m3">
      <table class="t"><th><input type="text" placeholder={"search anything..."+search} onChange={(e)=>setSearch(e.target.value)}/></th>
      <th> <label for="search">Search from:</label>
      <select id="search" value={attribute} onChange={(e)=>setAttribute(e.target.value)} >
        <option value="title">title</option>
        <option value="author">author</option>
        <option value="publication">publication</option>
      </select></th><th><button type="submit" onClick={Search}>Search</button></th>
      </table>
      
      
	    
      <form onSubmit={(e)=>Sort(e)}>
        <table className="t">
          <th><label for="sort"><b>Sort:</b></label>
          
        <select id="sort" value={sort} onChange={(e)=>setSort(e.target.value)} >
          <option value="id">id</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="publication">publication</option>
        </select></th>
        <th><label for="Asc">&nbsp;&nbsp;&nbsp;<b>Ascending-Order ?</b></label>
        <input name="isAdmin" id="Asc" type="checkbox" checked={order} onChange={(e)=>setOrder(!order)} />
        </th>
        <th> <button type="submit">Sort</button></th>
        </table>
        
        
       
      </form>  </div><br></br>
      <div className="table1">
      <table id="customers">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>ISBN</th>
            <th>publication</th>
          </tr> 
        </thead>
        {books.map((book,i)=><Product key={i} product={book}/>)}
      </table> 

      </div>
      
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
</h1> */
