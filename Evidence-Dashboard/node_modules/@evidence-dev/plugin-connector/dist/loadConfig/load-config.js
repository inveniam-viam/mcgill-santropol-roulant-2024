var $kxOm4$chalk = require("chalk");
var $kxOm4$fs = require("fs");
var $kxOm4$yaml = require("yaml");
var $kxOm4$zod = require("zod");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "loadConfig", () => $148e43c659eb0b32$export$c1a4367d4847eb06);
/**
 * Renames the '_errors' property to 'errors' in the given object and its nested objects recursively.
 * It also removes any empty errors arrays
 *
 * @param {any} obj - The object to rename the '_errors' property in.
 * @return {Object} The object with the renamed property.
 */ function $b6d1fd820ea2fc14$export$71e7d3deffa0730b(obj) {
    for(const key in obj){
        if (typeof obj[key] === "object") $b6d1fd820ea2fc14$export$71e7d3deffa0730b(obj[key]); // recursively traverse nested objects
        if (key === "_errors") {
            if (obj["_errors"].length) // De-duplicate
            obj["errors"] = Array.from(new Set(obj["_errors"]));
            delete obj["_errors"];
        }
    }
    return obj;
}






const $3cb28182e643168a$export$797917169e2ec068 = (0, $kxOm4$zod.z).object({
    overrides: (0, $kxOm4$zod.z).array((0, $kxOm4$zod.z).string()).default([]),
    aliases: (0, $kxOm4$zod.z).record((0, $kxOm4$zod.z).string({
        description: "Component Name"
    }), (0, $kxOm4$zod.z).string({
        description: "Alias to apply"
    })).default({}),
    provides: (0, $kxOm4$zod.z).array((0, $kxOm4$zod.z).string()).default([])
});
const $3cb28182e643168a$export$81ab33ffc20a47da = (0, $kxOm4$zod.z).object({
    overrides: (0, $kxOm4$zod.z).array((0, $kxOm4$zod.z).string()).default([])
});
const $3cb28182e643168a$export$e691085fbd9bf5be = (0, $kxOm4$zod.z).object({
    components: (0, $kxOm4$zod.z).record((0, $kxOm4$zod.z).string(), $3cb28182e643168a$export$797917169e2ec068),
    datasources: (0, $kxOm4$zod.z).record((0, $kxOm4$zod.z).string({
        description: "Plugin Package Name"
    }), $3cb28182e643168a$export$81ab33ffc20a47da).default({})
}).nonstrict();


const $148e43c659eb0b32$export$c1a4367d4847eb06 = (rootDir)=>{
    const configPath = `${rootDir}/evidence.plugins.yaml`;
    try {
        const configFileContent = (0, ($parcel$interopDefault($kxOm4$fs))).readFileSync(configPath, "utf8").toString();
        // Surround all YAML key that begin with "@" in quotes
        // Skipping keys that are already quoted (e.g. beginning of line or whitespace)
        const rawConfig = (0, ($parcel$interopDefault($kxOm4$yaml))).parse(configFileContent.replaceAll(/($|\s)(@.+):/g, '$1"$2":'));
        const configResult = (0, $3cb28182e643168a$export$e691085fbd9bf5be).safeParse(rawConfig);
        if (!configResult.success) {
            console.error((0, ($parcel$interopDefault($kxOm4$chalk))).bold.red(`[!] evidence.plugins.yaml does not contain a valid configuration. \n    Plugins will not be loaded. This may lead to unexpected behavior.`));
            const formattedError = (0, $b6d1fd820ea2fc14$export$71e7d3deffa0730b)(configResult.error.format());
            console.error((0, ($parcel$interopDefault($kxOm4$chalk))).red("|   Discovered Errors:"));
            const redPipe = (0, ($parcel$interopDefault($kxOm4$chalk))).red("|");
            console.error(`${redPipe}   ${(0, ($parcel$interopDefault($kxOm4$yaml))).stringify(formattedError).replace(/\n/g, `\n${redPipe}   `)}`);
            throw new Error("Invalid evidence.plugins.yaml");
        }
        return configResult.data;
    } catch (e) {
        if (!(e instanceof Error)) throw e;
        if (e.message.startsWith("ENOENT")) throw new Error(`Could not find evidence plugins file. (Look at ${configPath})`, {
            cause: e
        });
        throw e;
    }
};


