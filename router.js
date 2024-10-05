const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

const routes = {
  GET: {
    "/": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/index.html", res);
    },
    "/courses.html": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/courses.html", res);
    },
    "/contact.html": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/contact.html", res);
    },
    "/recipes.html": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/recipes.html", res);
    },
    "/about.html": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/about.html", res);
    },
   
    "/thanks.html": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/thanks.html", res);
    },
    "/error.html": (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes[".html"]
  });
  utils.getFile("./views/error.html", res);
}
,
"/gallery.html": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".html"]
      });
      utils.getFile("./views/gallery.html", res);
    },
    "/confetti_cuisine.css": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": contentTypes[".css"]
      });
      utils.getFile("./public/css/confetti_cuisine.css", res);
    }
  }
};

module.exports = routes;
