// @ts-check

const { langs, minecraftlangpath } = require("./langfiles");

const all = {};

const minecraftlang = require(minecraftlangpath);
Object.assign(all, minecraftlang);

Object.values(langs).forEach(lang => {
   /** @type {{ [key: string]: string }} */
   const langobj = require("../../" + lang.repopath + "/" + lang.langpath);
   //                      ^ out of main repo   ^ into other repo     ^ langfile

   Object.keys(langobj).forEach(key => {
      langobj[key] = langobj[key].toLowerCase();
   });

   Object.assign(all, langobj);
});

console.log((all));
console.log();
console.log();
console.log(JSON.stringify(all));
