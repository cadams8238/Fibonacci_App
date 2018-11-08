import React from "react";

const InputNumberForm = ({ changeValue }) => {
	return (
		<form>
			<label htmlFor="number">Enter Number:</label>
			<input
				type="text"
				id="number"
				name="number"
				onChange={e => changeValue(e)}
				placeholder="10"
			/>
			<button>Submit</button>
		</form>
	);
};

export default InputNumberForm;
