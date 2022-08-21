/**
 * Returns a normalized value between a given range.
 * @param value A numeric value.
 * @param minVal Min value in range.
 * @param maxVal Max value in range.
 */
export const normalizeNumber = (value, minVal = 0, maxVal = 1) => {
	return Math.fround((value - minVal) / (maxVal - minVal));
};
