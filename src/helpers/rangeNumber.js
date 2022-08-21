/**
 * Returns a value between a given range.
 * @param value A numeric value, if null a random value is generated.
 * @param minVal Min value in range.
 * @param maxVal Max value in range.
 */
export const rangeNumber = (value, minVal = 0, maxVal = 1) => {
	return minVal + Math.floor((value ?? Math.random()) * (maxVal - minVal));
};
