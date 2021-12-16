import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart"
import Product from "./Product";
import "./css/UserHomePage.css";


function UserHomePage() {

  const [books,setBooks] = useState([])
  const [search, setSearch] = useState("");
  const [attribute, setAttribute] = useState("title");
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");

  useEffect(()=>{
    const fetchData = async () => {
      await axios.get(`http://localhost:3000/books`)
        .then((res) => {
          setBooks(res.data)
          console.log("books data retrieved successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } 
    fetchData();
  }, []);

  const searchData = async () => {
      await axios.get(`http://localhost:3000/books?${attribute}_like=${search}`)
        .then((res) => {
          setBooks(res.data)
          console.log("search");
        })
        .catch((err) => {
          console.log(err);
        });
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
            </tr>
            <tr className="m">
              <th>Online Books</th>
              <th className="move"> <button><Link className="tag" to="/cart">Go to cart</Link></button></th>
              <th className="move"><Cart/></th>
            </tr>
            <tr className="m">
              <th>ADD IT! READ IT!</th>
            </tr>
          </thead>
        </table>
      </div>
      <br></br>
      <div className="t">
        <Product books={books}  ord={order} sort={sortBy}/>
      </div>
    </div>
  );
}

export default UserHomePage;

