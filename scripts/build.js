// @ts-check

const langs = require("./langfiles");
for (const lang in Object.keys(langs)) {
   console.log(require("../../" + langs[lang].repopath + "/" + langs[lang].langpath));
   //                   ^ out of main repo      ^ other repo              ^ langfile
}
