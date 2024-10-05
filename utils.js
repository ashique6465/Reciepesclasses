const fs = require("fs");
const path = require("path");
const httpStatus = require("http-status-codes");

module.exports = {
  getFile: (filePath, res) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
      
        if (err.code === "ENOENT") {
          res.writeHead(httpStatus.NOT_FOUND, {
            "Content-Type": "text/html"
          });
          res.end("<h1>404 Not Found</h1>");
        } else {
         
          res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {
            "Content-Type": "text/html"
          });
          res.end("<h1>500 Internal Server Error</h1>");
        }
      } else {
       
        res.end(data);
      }
    });
  }
};
