import React from "react";
import styles from "./styles/InputNumberForm.module.css";

const InputNumberForm = ({ changeValue, onSubmit }) => {
	return (
		<form className={styles.form} onSubmit={e => onSubmit(e)}>
			<label className={styles.label} htmlFor="number">
				Enter Number:
			</label>
			<input
				className={styles.input}
				type="text"
				id="number"
				name="number"
				onChange={e => changeValue(e.target.value)}
				placeholder="10"
			/>
			<button className={styles.button}>Submit</button>
		</form>
	);
};

export default InputNumberForm;
