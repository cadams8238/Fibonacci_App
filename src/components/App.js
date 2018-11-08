import React, { Component } from "react";
import InputNumberForm from "./InputNumberForm";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	setValue(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Fibonacci Sequence</h1>
				<p>
					Enter a number below and see what numbers make up the Fibonacci
					sequence up to that number. (Please note the sequence will start at 0)
				</p>
				<p>Example: If you input 5, you'll see 0 1 1 2 3</p>
				<InputNumberForm changeValue={e => this.setValue(e)} />
			</div>
		);
	}
}

export default App;
