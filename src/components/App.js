import React from 'react'
import Header from './Header'
import Filters from './Filters'
import Filterheader from './Filterheader'
import Product from './Product'
import Footer from './footer'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filteredProducts: [],
    }
  }
  handleAddtoCart = () => {
    console.log('hi');
    console.log(data);
  }


  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/inderorg/repos';

    const apiUrl2 = 'https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f';
    fetch(apiUrl2)
    .then((response) => response.json()).then((data) =>{
      console.log(data);
    })
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      )
  }

  render() {
    return (
      <>
        <Header />
        <div className="main">
          <Filters />
          <div>
            <Filterheader />
            {/* <ul>
              {this.state.products.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul> */}
            <h1> fetching products below</h1>
            <Product
              products={this.state.filteredProducts}
              handleAddtoCart={this.handleAddtoCart}
          
            />
          </div>
        </div>

        <Footer />
      </>
    )
  }
}
export default App
