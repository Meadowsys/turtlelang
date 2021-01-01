// @ts-check

const langs = require("./langfiles");

let all = {};
Object.values(langs).forEach(lang => {
   /** @type {{ [key: string]: string }} */
   const langobj = require("../../" + lang.repopath + "/" + lang.langpath);
   //                         ^ out of main repo             ^ langfile

   Object.keys(langobj).forEach(key => {
      langobj[key] = langobj[key].toLowerCase();
   });

   Object.assign(all, langobj);
})

console.log(all);
