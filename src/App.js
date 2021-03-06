import React, { Component } from 'react'
import logo from './logo.svg';
import Prices from './component/Prices';
import Counts from './component/Counts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countValue: 1
    }
    this.getJson();
  }


  imgPrefix(img) {
    var imgName = img.split('.');
    imgName[imgName.length - 2] = imgName[imgName.length - 2] + '_220x220_1';

    return imgName.join('.')
  }

  getJson() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'products.json', false);    
    xhr.send();
    if (xhr.status !== 200) {
      console.log(xhr.status + 'Product: ' + xhr.statusText);
    } else {
      this.productsList = JSON.parse(xhr.responseText);
    }
  }

  render() {
    return (
      <div className="products_page pg_0">
        {this.productsList.map((list, index) => {
          return (
            <div className="product product_horizontal" key={index}>
              <span className="product_code">Код: {list.code}</span>
              <div className="product_status_tooltip_container">
                <span className="product_status">Наличие</span>
              </div>
              <div className="product_photo">
                <a href="#" className="url--link product__link">
                  <img src={this.imgPrefix(list.primaryImageUrl)} alt="" />
                </a>
              </div>
              <div className="product_description">
                <a href="#" className="product__link">{list.title}</a>
              </div>
              <div className="product_tags hidden-sm">
                <p>Могут понадобиться:</p>
                <div className='products-add'>
                  <a href="#" className="url--link">подложка,</a>
                  <a href="#" className="url--link">плинтус натуральный,</a>
                  <a href="#" className="url--link">рулетка,</a>
                  <a href="#" className="url--link">набор для укладки ламината,</a>
                  <a href="#" className="url--link">ножовка по ламинату,</a>
                  <a href="#" className="url--link">гель для стыков ламината Clic Protect.</a>
                </div>
              </div>

              <Prices itemValues={list} />

              <div className="product_price_points">
                <p className="ng-binding">Можно купить за 231,75 балла</p>
              </div>
              <div className="list--unit-padd"></div>
              <div className="list--unit-desc">
                <div className="unit--info">
                  <div className="unit--desc-i"></div>
                  <div className="unit--desc-t">
                    <p>
                      <span className="ng-binding">Продается {list.unitFull}:</span>
                      <span className="unit--infoInn">{list.unitRatio + ' ' + list.unitFull}. = {list.unitRatioAlt + ' ' + list.unitAlt} </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="product__wrapper">
                <Counts />
                <span className="btn btn_cart" data-url="/cart/" data-product-id={list.code}>
                <img className="shop-cart" src="https://img.icons8.com/ios/50/000000/shopping-cart.png"/>
                  <span className="ng-binding">В корзину</span>
                </span>
              </div>
            </div>
          )
        }
        )
        }
      </div >
    )

  }
}


export default App;
