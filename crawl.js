const jsdom = require("jsdom");


function normalizeURL(url) {
	//Normalise a given url input
	//Remove trailing slash
	//Remove http:// or https://
	//Remove www.
	
	return url.replace(/\/$/, "").replace(/^(http|https):\/\//, "").replace(/^www\./, "").toLowerCase();
}

function getURLsFromHTML(html) {
	
	const { JSDOM } = jsdom;
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const links = document.querySelectorAll("a");
	const urls = [];

	for (let i = 0; i < links.length; i++) {
		urls.push(links[i].href);
	}
	return urls
}

module.exports = {
    normalizeURL,
	getURLsFromHTML
}



