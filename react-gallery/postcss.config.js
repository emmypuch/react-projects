const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.export = {
  plugins: [tailwindcss("./tailwindcss.js"), require(autoprefixer)],
};
