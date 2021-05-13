import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product'

class App extends Component {

  constructor(props){
    super(props);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onAddProduct = () => {
    console.log(this.refs.name.value);
  }

  render() {

    var product = [
      {
        id  : 1,
        name: 'Iphone 6',
        price: 15000000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        status: true
      },
      {
        id  : 2,
        name: 'Redmi S2',
        price: 3000000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/161979/xiaomi-redmi-s2-5-600x600.jpg',
        status: true
      },
      {
        id  : 3,
        name: 'Galaxy S9',
        price: 20000000,
        image: 'https://www.viettablet.com/images/thumbnails/480/516/detailed/26/samsung-galaxy-s9-cu-viettablet.jpg',
        status: true
      },
      {
        id  : 4,
        name: 'Redmi 7',
        price: 4000000,
        image: 'https://didongthongminh.vn/upload_images/2019/01/Xiaomi-Redmi-Note-7-Gradient-1.png',
        status: true
      },
      {
        id  : 5,
        name: 'Redmi 8',
        price: 4500000,
        image: 'https://didongthongminh.vn/upload_images/2019/11/Redmi-note-8-trang-2.png',
        status: true
      },
      {
        id  : 6,
        name: 'Redmi 8',
        price: 4500000,
        image: 'https://didongthongminh.vn/upload_images/2019/11/Redmi-note-8-trang-2.png',
        status: true
      }
    ]

    let data = product.map((product,index) => {
      let result = '';
      if(product.status==true){
        result = <Product
                    key = {product.id}
                    price={product.price}
                    image={product.image}
                  >
                    {product.name}
                  </Product>
      }
      return result;
    });

    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Nhat Huy Mobile</a>
          <a class="navbar-brand" href="#">Giỏ hàng <i class="fas fa-shopping-cart"></i>(0)</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control" ref="name"/>
                  </div>
                  <button type="submit" className="btn btn-success" onClick={this.onAddProduct}>
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-10">
              <div className="row">
                  {data}
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-warning" onClick={this.onClick}>
                Click
              </button>
            </div>
          </div> */}
        </div>
        <div className="footer">
          <b>&copy; Nhat Huy Mobile 2021</b>
          <p>Bản quyền website thuộc về <a href="https://wwww.facebook.com/DarthVader.HuyNguyen" target="_blank">Nhật Huy</a></p>
        </div>
      </div>
    );

  }

}

export default App;