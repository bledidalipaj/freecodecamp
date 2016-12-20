function sumAll(arr) {
	var res = 0,
		maxValue = arr.reduce(function(a, b) {
			return Math.max(a, b);
		}),
		minValue = arr.reduce(function(a, b) {
			return Math.min(a, b);
		});

	for (var i = minValue; i <= maxValue; i++) {
		res += 1;
	}

	return res;
}