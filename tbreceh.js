const fetch = require('isomorphic-fetch');
const params = {
  apiKey: "0BQku3j3SWQkvkCT-R9xrsyME38XLcxEmxgDYR_Ph1zIXSkzQXiIAwCprcs",
  spreadsheetId: "12MVkXejBeXEPCN8kEQ-tglQu6Z93C2w-921_RvVvoHM"
}
const url = = new URL("https://api.sheetson.com/v2/sheets/tbreceh");
Object.keys(params).forEach(key => url.searchParams.append(key, encodeURIComponent(params[key])));
fetch(url).then(r => r.json())
  .then(result => console.log("object: %O", obj))

