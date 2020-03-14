import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countValue: 0,
			minValue: 0,
			maxValue: 5
		}

	}

	handlerIncrement() {
		var newValue = this.state.countValue + 1;
		if (this.validateCount(newValue)) {
			this.setState({
				countValue: newValue
			})
		}

	}

	handlerDecrement() {
		var newValue = this.state.countValue - 1;
		if (this.validateCount(newValue)) {
			this.setState({
				countValue: newValue
			})
		}
	}

	handlerInput(event) {
		var value = Number(event.target.value);
		if (this.validateCount(value)) {
			this.setState({
				countValue: value
			})
		}
	}

	validateCount(newValue) {
		if (newValue >= this.state.minValue && newValue <= this.state.maxValue) {
			return true;
		} else {
			return false;
		}
	}


	render() {
		return (
			<div className="product_count_wrapper">
				<div className="stepper">
					<input 
						type="text"
						className="product__count stepper-input"
						onChange={this.handlerInput.bind(this)}
						value={this.state.countValue}
					/>
					<span className="stepper-arrow up" onClick={this.handlerIncrement.bind(this)}></span>
					<span className="stepper-arrow down" onClick={this.handlerDecrement.bind(this)}></span>                                            
				</div>
			</div>
		);
	}
}

export default Counter;