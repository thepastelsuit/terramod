// Load page html from environment
var page_html = process.env.TERRAMOD_PAGE_HTML;
var example_num = parseInt(process.argv.slice(2)[0]) - 1;

// Load cheerio
const cheerio = require('cheerio');

const $ = cheerio.load(page_html);

var example_text = $("div.highlight").eq(example_num).text();

console.log(example_text);
