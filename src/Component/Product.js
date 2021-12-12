
function Product(props)
{
  return(
      <tr>
        <td>{props.product.id}</td>
        <td>{props.product.title}</td>
        <td>{props.product.author}</td>
        <td>{props.product.ISBN}</td>
        <td>{props.product.publication}</td>
      </tr>
  );
}

export default Product