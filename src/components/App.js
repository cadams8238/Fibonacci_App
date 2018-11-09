import React, { Component } from "react";
import InputNumberForm from "./InputNumberForm";
import Number from "./Number";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			data: []
		};
	}

	setValue(newValue) {
		this.setState({
			value: newValue
		});
	}

	fetchFibSequence(e) {
		e.preventDefault();
		console.log("fetching data...");
		this.setState({
			data: [0, 1, 2, 3]
		});
	}

	render() {
		let show;

		if (this.state.data.length > 0) {
			const sequence = this.state.data;

			show = sequence.map((num, index) => <Number key={index} label={num} />);
		}

		return (
			<div>
				<h1>Fibonacci Sequence</h1>
				<p>
					Enter a number below and see what numbers make up the Fibonacci
					sequence up to that number. (Please note the sequence will start at 0)
				</p>
				<p>Example: If you input 5, you'll see 0 1 1 2 3</p>
				<InputNumberForm
					changeValue={newValue => this.setValue(newValue)}
					onSubmit={e => this.fetchFibSequence(e)}
				/>
				<ul>{show}</ul>
			</div>
		);
	}
}

export default App;
