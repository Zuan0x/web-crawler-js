exports.normalizeURL = function (url) {
	//Normalise a given url input
	//Remove trailing slash
	//Remove http:// or https://
	//Remove www.
	
	return url.replace(/\/$/, "").replace(/^(http|https):\/\//, "").replace(/^www\./, "");
}

module.exports = {
  normalizeURL
}

