module.exports = class Template {
	constructor(map) {
		this.map = map;
	}

	map;

	parse(text) {
		const map = this.map;

		for (let i = 0; i < Object.keys(map).length; i++) {
			text = text.replaceAll("<!--$" + Object.keys(map)[i] + "-->", Object.values(map)[i]);
		}

		return text;
	}
}
