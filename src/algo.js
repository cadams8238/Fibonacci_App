function fibonacci(number) {
	let sequence = [0, 1];

	for (var i = 2; i < number; i++) {
		sequence[i] = sequence[i - 1] + sequence[i - 2];
	}

	return sequence;
}

export default fibonacci;
