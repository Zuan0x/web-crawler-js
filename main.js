const { crawlPage } = require('./crawl.js');

function main() {
	if(process.argv.length < 3) {
		console.log("No website specified");
		return;
	} else if (process.argv.length > 3) {
		console.log("Too many arguments");
		return;
	}

	const website = process.argv[2];

	console.log("Website: " + website);
	crawlPage(website, website,{});
}

main();
