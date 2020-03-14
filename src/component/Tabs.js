import React, { Component } from 'react';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.units = ['За м. кв.', 'За упаковку']
		this.state = {
			selected: 0
		}
	}

	addClass(index) {
		if (this.state.selected === index) {
			return 'unit--select unit--active'
		} else {
			return 'unit--select'
		}
	}

	toggleState(index) {
		this.state = {
			selected: index
		}

		this.forceUpdate();
	}

	render() {
		return (
			<div className="product_units">
				<div className="unit--wrapper">
					{this.units.map((value, index) => {
						return (
							<div className={this.addClass(index)} key={index} onClick={this.toggleState.bind(this, index)}>
							<p className="ng-binding">{value}</p>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default Tabs;