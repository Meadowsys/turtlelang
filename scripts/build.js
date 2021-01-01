// @ts-check

const langs = require("./langfiles");
const h = Object.values(langs).forEach(lang => {
   console.log(require("../../" + lang.repopath + "/" + lang.langpath));
   //                   ^ out of main repo      ^ other repo              ^ langfile
})
