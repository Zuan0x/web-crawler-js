function normalizeURL(url) {
	//Normalise a given url input
	//Remove trailing slash
	//Remove http:// or https://
	//Remove www.
	
	return url.replace(/\/$/, "").replace(/^(http|https):\/\//, "").replace(/^www\./, "").toLowerCase();
}

module.exports = {
  normalizeURL
}



