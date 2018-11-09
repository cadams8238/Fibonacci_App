import React, { Component } from "react";
import InputNumberForm from "./InputNumberForm";
import Number from "./Number";
import fib from "../algo";

import styles from "./styles/App.module.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			data: [],
			error: false
		};
	}

	setValue(newValue) {
		console.log(typeof parseInt(newValue));
		if (isNaN(parseInt(newValue))) {
			this.setState({
				error: true
			});
		} else {
			this.setState({
				value: newValue,
				error: false,
				data: []
			});
		}
	}

	fetchFibSequence(e) {
		e.preventDefault();
		console.log("fetching data...");
		this.setState({
			data: fib(this.state.value)
		});
	}

	render() {
		let show, err;

		if (this.state.data.length > 0) {
			const sequence = this.state.data;

			show = sequence.map((num, index) => <Number key={index} label={num} />);
		}

		if (this.state.error) {
			err = (
				<p className={styles.error}>Invalid input. Please enter a number.</p>
			);
		}

		return (
			<div className={styles.background}>
				<h1 className={styles.title}>Fibonacci Sequence</h1>
				<div className={styles.instructions}>
					<p>
						Enter a number below and see what numbers make up the Fibonacci
						sequence up to that number. (Please note the sequence will start at
						0)
					</p>
					<p className={styles.example}>
						Example: If you input 5, you'll see 0 1 1 2 3
					</p>
				</div>
				<InputNumberForm
					changeValue={newValue => this.setValue(newValue)}
					onSubmit={e => this.fetchFibSequence(e)}
				/>
				{err}
				<ul className={styles.numberSequence} aria-label="polite">
					{show}
				</ul>
			</div>
		);
	}
}

export default App;
