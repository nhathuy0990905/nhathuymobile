import React, { Component } from 'react'

export default class Product extends Component {

  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart = () => {
    alert("Đã thêm sản phẩm "+this.props.children+" vào giỏ hàng");
  }
  onDeleteToCart = () =>{
    alert("Đã xóa sản phẩm "+this.props.children+" khỏi giỏ hàng");
  }

  render() {

    return (
      <div>
        <div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
              <div className="caption">
                <h1>{this.props.children}</h1>
                <img alt={this.props.name} src={this.props.image} />
                <h3>{this.props.price}VND</h3>
                <div>
                  <a className="btn btn-primary" onClick={this.onAddToCart}>Mua ngay</a>
                  <a className="btn btn-danger" onClick={this.onDeleteToCart}>Hủy bỏ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

}