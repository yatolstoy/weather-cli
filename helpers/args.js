const getArgs = (args) => {
	const res = {}
	const [executer, file, ...rest] = args;
	rest.forEach((value, index, array) => {
		if(value.charAt(0) === '-') {
			const nextEl = array[index + 1];
			res[value.substring(1)] = (index == array.length - 1) ? true :
																	(nextEl.charAt(0) !== '-') ? nextEl :
																		true;
		}
	})
	return res
};

export { getArgs }