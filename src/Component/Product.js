
function Product(props)
{
  const books = props.books

  return(
      <table>
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
          {books.map((book,i)=>(
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