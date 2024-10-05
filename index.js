const http = require("http");
const fs = require("fs");
const path = require("path");
const routes = require("./router");
const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

const port = 8000;

const server = http.createServer((req, res) => {
  if (routes.GET[req.url]) {
    
    routes.GET[req.url](req, res);
  } else {
    
    const ext = path.extname(req.url);
    const filePath = path.join(__dirname, "public", req.url);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        
        fs.readFile("./views/error.html", (error, errorData) => {
          if (error) {
            res.writeHead(httpStatus.NOT_FOUND, {
              "Content-Type": "text/html"
            });
            res.end("<h1>Page Not Found</h1>");
          } else {
            res.writeHead(httpStatus.NOT_FOUND, {
              "Content-Type": contentTypes[".html"]
            });
            res.end(errorData);
          }
        });
      } else {
       
        const mimeType = contentTypes[ext] || "text/plain";
        res.writeHead(httpStatus.OK, {
          "Content-Type": mimeType
        });
        res.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
