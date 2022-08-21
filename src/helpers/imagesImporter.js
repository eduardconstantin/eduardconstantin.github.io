/**
 * Returns an array of objects containing the source and the name of the image.
 * @param nodeReqire Node context require.
 */
export const importAllImages = (nodeReqire) => {
	const images = [];
	nodeReqire.keys().forEach((item) => {
		const imageData = {};
		Object.assign(imageData, {
			src: nodeReqire(item),
			name: item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, ''),
		});
		images.push(imageData);
	});
	return images;
};
