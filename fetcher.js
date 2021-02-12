const request = require('request');
const fs = require('fs');

let args = process.argv.slice(2);



request(args[0], function (error, response, body) {
  if(error) {
    console.log(error);
    return;
  }
  fs.writeFile(args[1], body, function (err) {
    if (err) throw err;
  });
  console.log("Downloaded and saved " + body.length + " bytes to " + args[1]);
});