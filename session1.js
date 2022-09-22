const { appendFile } = require("fs");
const http = require("http");
const port = 5000;

 const app = http.createServer((req, res) => {
  res.write("");
  res.write(" <h3> hello ban </h3>");
  res.end();
});

app.listen(port);