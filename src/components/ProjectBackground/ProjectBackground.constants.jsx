function importAll(r) {
	let icons = [];
	r.keys().forEach((item) => {
		icons.push({
			src: r(item),
			name: item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, ''),
		});
	});
	return icons;
}

export const backgroundIcons = importAll(require.context('../../Assets/images/bgIcons', false, /\.(png|jpe?g|svg)$/));
