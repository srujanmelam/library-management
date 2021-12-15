import './css/UserHomePage.css';
function Product(props)
{
  const books = props.books

  let ord = 0
  if(props.ord === 'asc'){ord = 1}
  if(props.ord === 'desc'){ord = -1}

  return(
      <table className='t' id="customers">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>ISBN</th>
            <th>publication</th>
          </tr>
        </thead>
        <tbody>
          {books.sort((a,b)=>{
        if(a[props.sort] > b[props.sort]){return 1*ord}
        if(a[props.sort] < b[props.sort]){return -1*ord}
        return 0 }).map((book,i)=>(
            <tr key={i}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>{book.publication}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Product