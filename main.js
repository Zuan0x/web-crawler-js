const { crawlPage } = require('./crawl.js');
const { printReport } = require('./report.js');

async function main() {
	if(process.argv.length < 3) {
		console.log("No website specified");
		return;
	} else if (process.argv.length > 3) {
		console.log("Too many arguments");
		return;
	}

	const website = process.argv[2];

	console.log("Website: " + website);
	printReport(await crawlPage(website, website,{}))
}

main();
