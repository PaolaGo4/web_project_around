//* enlaza los plugins al archivo *//
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  //* enlaza los plugins a PostCSS *//
  plugins: [
    //* enlaza el autoprefixer *//
    autoprefixer,
    //* pasa un objeto con opciones después de enlazar cssnano: *//
    cssnano({ preset: "default" }), //* crea los ajustes de minificación por defecto *//
  ],
};
