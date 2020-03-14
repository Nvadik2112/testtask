import React, { Component } from 'react';
import Tabs from './Tabs';


class Price extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priceGold: props.itemValues.priceGoldAlt,
            priceRetail: props.itemValues.priceRetailAlt
        }
    }

    render() {
        return (
            <div className="product_units-wrapper">
                <Tabs />
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br />клуба</span>
                    <span className="goldPrice">{this.state.priceGold}</span>
                    <span className="rouble__i black__i"></span>
                </p>
                <p className="product_price_default">
                    <span className="retailPrice">{this.state.priceRetail}</span>
                    <span className="rouble__i black__i"></span>
                </p>
            </div>
        );
    }
}

export default Price;