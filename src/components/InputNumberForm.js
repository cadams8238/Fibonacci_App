import React from "react";

const InputNumberForm = ({ changeValue, onSubmit }) => {
	return (
		<form onSubmit={e => onSubmit(e)}>
			<label htmlFor="number">Enter Number:</label>
			<input
				type="text"
				id="number"
				name="number"
				onChange={e => changeValue(e.target.value)}
				placeholder="10"
			/>
			<button>Submit</button>
		</form>
	);
};

export default InputNumberForm;
