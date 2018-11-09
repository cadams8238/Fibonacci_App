import React from "react";
import styles from "./styles/Number.module.css";

const Number = ({ label }) => {
	return <li className={styles.number}>{label}</li>;
};

export default Number;
