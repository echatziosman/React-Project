//import logo from './logo.svg';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import alertify from "alertifyjs";
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  //Tiklanan category objesi burada(category)
  changeCategory = (category) => {
    //State icinde bir objenin elemanini degistirmek,guncellemek istedigimizde
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }
  componentDidMount() {
    this.getProducts();
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    // Click yapildiysa categoryId dolu gelecek
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    // Fetch - Promise
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  // Sepete urun ekleme
  addToCart = (product) => {
    // alert(product.productName);
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "   added to cart");
  }
  removeFromCart = (product) => {
    // filter: Silinmesini istedigim eleman haric tum urunleri filtrele
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    // daha sonra filtrelenmis olanlari guncelle ,set et
    this.setState({ cart: newCart });//Yani artik sepette silmek istedigimiz urun yok
    alertify.error(product.productName + "   deleted from cart", 2);
  }

  render() {
    let productInfo = { title: "Products" };
    let categoryInfo = { title: "Categories" };
    return (
      <div>
        <Container>

          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xl="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xl="9">
              <Switch>

                <Route exact path="/" render={props => (
                  <ProductList
                    {...props} //props'larin kopyasini gonderir
                    currentCategory={this.state.currentCategory}
                    addToCart={this.addToCart}
                    info={productInfo}
                    products={this.state.products}>
                  </ProductList>
                )} />

                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props} //props'larin kopyasini gonderir
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart} >
                  </CartList>
                )} /> 
                
                <Route path="/form1" component={FormDemo1}/>
                <Route path="/form2" component={FormDemo2}/>

                <Route component={NotFound} />

              </Switch>

            </Col>
          </Row>
        </Container>

      </div>
    );
  }

}

export default App;
