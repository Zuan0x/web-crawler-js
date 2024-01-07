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

async function crawlPage(currentURL) {
	// fetch and parse the html of the currentURL
  console.log(`crawling ${currentURL}`)
  try {
    const resp = await fetch(currentURL)
    if (resp.status > 399){
      console.log(`Got HTTP error, status code: ${resp.status}`)
      return
    }
    const contentType = resp.headers.get('content-type')
    if (!contentType.includes('text/html')){
      console.log(`Got non-html response: ${contentType}`)
      return
    }
    console.log(await resp.text())
  } catch (err){
    console.log(err.message)
  }}

module.exports = {
    normalizeURL,
	getURLsFromHTML,
	crawlPage
}



