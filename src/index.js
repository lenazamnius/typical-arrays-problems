exports.min = function min (array) {
	if (!array || array.length === 0) return 0;
	let minVal = array[0];
	array.splice(1).forEach((element) => {
		if (minVal > element) {
			minVal = element;
		}
	});
	return minVal;
};

exports.max = function max (array) {
	if (!array || array.length === 0) return 0;
	let maxVal = array[0];
	array.splice(1).forEach((element) => {
		if (maxVal < element) {
			maxVal = element;
		}
	});
	return maxVal;
};

exports.avg = function avg (array) {
	if (!array || array.length === 0) return 0;
	return array.reduce((x, y) => x + y, 0) / array.length;
};
