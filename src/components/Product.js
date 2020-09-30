import React from 'react'

// const Product = () => {
//   return (
//     <>
//       {this.state.products.map((book) => (
//         <li key={book.id}>{book.name}</li>
//       ))}
//       <h1>Product details</h1>
//     </>
//   )
// }

class Product extends React.Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <li key={product.id}><div>
          {product.avatar_url}
          {product.name}</div></li>
    ))
    return <div>{productItems}</div>
  }
}

export default Product;
