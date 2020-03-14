import React, { Component } from 'react';
// import Tabs from './Tabs';


class Prices extends Component {
    constructor(props) {
        super(props);
        this.units = ['За м. кв.', 'За упаковку']
        this.state = {
            selected: 0,
            priceGoldAlt: props.itemValues.priceGoldAlt,
            priceRetailAlt: props.itemValues.priceRetailAlt,
            priceGold: props.itemValues.priceGold,
            priceRetail: props.itemValues.priceRetail,
        }
    }

    addClass = i => {
		if (this.state.selected === i) {
			return 'unit--select unit--active'
		} else {
			return 'unit--select'
		}
	}

	toggleClass = i => {
		this.setState({            
			selected: i
		})		
    }
    
    getGoldPrice = () => {
        if (this.state.selected === 0) {
            return Math.round(this.state.priceGoldAlt)
        } else {
            return Math.round(this.state.priceGold)
        }
    }

    getRetailPrice = () => {
            if (this.state.selected === 1) {
            return Math.round(this.state.priceRetailAlt)
        } else {
            return Math.round(this.state.priceRetail)
        }
    }

    render() {
        return (
            <div className="product_units-wrapper">
            <div className="product_units">
				<div className="unit--wrapper">
					{this.units.map((value, index) => {
						return (
							<div className={this.addClass(index)} key={index} onClick={this.toggleClass.bind(this, index)}>
							<p className="ng-binding">{value}</p>
							</div>
						)
					})}
				</div>
			</div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br />клуба</span>
                    <span className="goldPrice">{this.getGoldPrice()} ₽</span>
                    <span className="rouble__i black__i"></span>
                </p>
                <p className="product_price_default">
                    <span className="retailPrice">{this.getRetailPrice()} ₽</span>
                    <span className="rouble__i black__i"></span>
                </p>
            </div>
        );
    }
}

export default Prices;