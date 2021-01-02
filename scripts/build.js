// @ts-check

const { langs, minecraftlangpath } = require("./langfiles");

const all = {};

/** @type {{ [key: string]: string }} */
const minecraftlang = require("../../" + "minecraft/" + minecraftlangpath);
//                           ^ out of main repo    ^ into minecraft's folder

Object.keys(minecraftlang).forEach(key => {
   minecraftlang[key] = minecraftlang[key].toLowerCase();
});

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
