// @ts-check

/**
 * @type {{
 *    [path: string]: {
 *       repopath: string;
 *       langpath: string;
 *    };
 * }}
 */
const langs = {
   "minelittlepony": {
      repopath: "minelittlepony",
      langpath: "src/main/resources/assets/minelittlepony/lang/en_us.json"
   },
   "hdskins": {
      repopath: "hdskins",
      langpath: "src/main/resources/assets/hdskins/lang/en_us.json"
   },
   "presence-footsteps": {
      repopath: "presence-footsteps",
      langpath: "src/main/resources/assets/presencefootsteps/lang/en_us.json"
   }
};

const minecraftlangpath = "en_us.json";

module.exports = {};

module.exports.langs = langs;
module.exports.minecraftlangpath = minecraftlangpath;
