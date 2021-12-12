
function Product(props)
{
  return(
    <div>
      {props.product.id}
      {props.product.title}
      {props.product.author}
      {props.product.ISBN}
      {props.product.publication}  
    </div>
  );
}

export default Product