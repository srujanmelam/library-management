import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "./store";
import Product from "./Product";
import "./css/UserHomePage.css";

function UserHomePage({books}) {
  
  const [search, setSearch] = useState("");
  const [attribute, setAttribute] = useState("title");
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");

  useEffect(()=>{
    const fetchData = async () => {
      await axios.get(`http://localhost:3000/books`)
        .then((res) => {
          store.dispatch({ type: "get", payload: res.data });
          console.log("books data retrieved successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } 
    fetchData();
  }, []);

  const searchData = () => {
    store.dispatch({ type: "search", text: search, by: attribute });
    console.log("searched")
  };
  const sortData = () => {
    store.dispatch({ type: "sort", order: order , sort: sortBy });
    console.log("sorted")
  };

  return (
    <div className="main1">
      <div className="m3">
        <table className="t">
          <thead>
            <tr>
              <th>
                <input type="text" placeholder={"search anything..." + search} onChange={(e) => setSearch(e.target.value)}/>
              </th>
              <th>
                {" "}
                <label htmlFor="search">Search from : </label>
                <select id="search" value={attribute} onChange={(e) => setAttribute(e.target.value)}>
                  <option value="title">title</option>
                  <option value="author">author</option>
                  <option value="publication">publication</option>
                </select>
              </th>
              <th>
                <button type="submit" onClick={searchData}>Search</button>
              </th>
            </tr>
          </thead>
        </table>
        <table className="t">
          <thead>
            <tr>
              <th>
                <label htmlFor="sort"><b>Sort : </b></label>
                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="id">id</option>
                  <option value="title">title</option>
                  <option value="author">author</option>
                  <option value="publication">publication</option>
                </select>
              </th>
              <th>
                <label htmlFor="Asc">&nbsp;&nbsp;&nbsp;<b>Order :</b></label>
                <select id="order" value={order} onChange={(e) => setOrder(e.target.value)}>
                  <option value="asc">ascending</option>
                  <option value="desc">descending</option>
                </select>
              </th>
              <th>
                <button type="submit" onClick={sortData}>Sort</button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <br></br>
      <div className="table1">
        <Product books={books}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
  };
};

export default connect(mapStateToProps)(UserHomePage);

/*<h1>UserHomePage(Contains buttons of borrow books , search books, user profile, log out
    1)navbar(home,stats,profile)
    2)search input bar, dropdown(att-book,author),search button icon
    3)right corner-sort(drop down),increase n decrease (icons)
    4)book component (details of book)
</h1> */
