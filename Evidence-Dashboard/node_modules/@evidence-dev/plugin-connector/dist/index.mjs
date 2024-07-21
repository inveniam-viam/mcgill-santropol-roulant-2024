import $759k8$sveltekitautoimport from "sveltekit-autoimport";
import $759k8$chalk from "chalk";
import $759k8$fs from "fs";
import $759k8$path from "path";
import $759k8$fspromises from "fs/promises";
import {z as $759k8$z} from "zod";
import $759k8$yaml from "yaml";
import {parse as $759k8$parse} from "svelte/compiler";
import $759k8$lodashmerge from "lodash.merge";
import {createHash as $759k8$createHash} from "node:crypto";
import {createHash as $759k8$createHash1} from "crypto";
import {buildMultipartParquet as $759k8$buildMultipartParquet} from "@evidence-dev/universal-sql";
import {logQueryEvent as $759k8$logQueryEvent} from "@evidence-dev/telemetry";
import $759k8$ora from "ora";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
/// <reference types="../types"/>
var $fdb25277a913487b$exports = {};

$parcel$export($fdb25277a913487b$exports, "evidencePlugins", () => $fdb25277a913487b$export$4afb816e967c52c1);


/**
 * @param {string} p
 * @returns {Promise<boolean>}
 */ const $f0e8caf6851be9c6$var$hasNodeModules = async (p)=>{
    const directoryItems = await (0, $759k8$fspromises).readdir(p);
    return directoryItems.includes("node_modules");
};
const $f0e8caf6851be9c6$export$6de9f17ef8a8b7d7 = async (startingPoint)=>{
    // Either use the entry file or a specific startingPoint
    const entryFile = startingPoint ?? process.cwd();
    // Split the entryfile path on "node_modules", this will help if the main file is nested
    // e.g. if sveltekit, main file will be node_modules/@sveltejs/kit/node_modules
    // node_modules/.pnpm/vite@4.0.4/node_modules/vite/bin/vite.js
    const parsedPath = (0, $759k8$path).parse(entryFile.split("/node_modules")[0]);
    let p = `${parsedPath.dir}/${parsedPath.base}`;
    const initP = p;
    const stat = await (0, $759k8$fspromises).stat(p);
    if (stat.isFile()) p = (0, $759k8$path).parse(p).dir;
    while(!await $f0e8caf6851be9c6$var$hasNodeModules(p)){
        if (p === (0, $759k8$path).parse(p).root) throw new Error(`Could not locate node_modules! ${JSON.stringify({
            startingPoint: startingPoint,
            initP: initP
        })}`);
        p = (0, $759k8$path).parse(p).dir;
    }
    return p;
};




const $80999ebbb948d1d8$var$PackageExportSchema = (0, $759k8$z).union([
    (0, $759k8$z).object({
        main: (0, $759k8$z).string()
    }, {
        description: "Use the main field of the package.json"
    }),
    (0, $759k8$z).object({
        exports: (0, $759k8$z).object({
            ".": (0, $759k8$z).string()
        })
    }, {
        description: "Use the exports field of the package.json"
    }),
    (0, $759k8$z).object({
        svelte: (0, $759k8$z).string()
    }, {
        description: "Use the svelte field of the package.json"
    }).optional()
]);
const $80999ebbb948d1d8$var$BasePackageSchema = (0, $759k8$z).object({
    name: (0, $759k8$z).string(),
    evidence: (0, $759k8$z).undefined()
});
const $80999ebbb948d1d8$export$a14d030d75ef573c = (0, $759k8$z).intersection($80999ebbb948d1d8$var$BasePackageSchema, $80999ebbb948d1d8$var$PackageExportSchema);
const $80999ebbb948d1d8$export$bca9d2c38fe4cf42 = (0, $759k8$z).intersection($80999ebbb948d1d8$var$BasePackageSchema.extend({
    evidence: (0, $759k8$z).object({
        components: (0, $759k8$z).boolean().optional(),
        datasources: (0, $759k8$z).array((0, $759k8$z).union([
            (0, $759k8$z).string(),
            (0, $759k8$z).array((0, $759k8$z).string())
        ])).optional(),
        icon: (0, $759k8$z).string().optional()
    })
}), $80999ebbb948d1d8$var$PackageExportSchema);
const $80999ebbb948d1d8$export$ac6197b8a56da2df = (0, $759k8$z).union([
    $80999ebbb948d1d8$export$a14d030d75ef573c,
    $80999ebbb948d1d8$export$bca9d2c38fe4cf42
]);



var $b149e274c2c62b4b$exports = {};

$parcel$export($b149e274c2c62b4b$exports, "cleanZodErrors", () => $b149e274c2c62b4b$export$71e7d3deffa0730b);
/**
 * Renames the '_errors' property to 'errors' in the given object and its nested objects recursively.
 * It also removes any empty errors arrays
 *
 * @param {any} obj - The object to rename the '_errors' property in.
 * @return {Object} The object with the renamed property.
 */ function $b149e274c2c62b4b$export$71e7d3deffa0730b(obj) {
    for(const key in obj){
        if (typeof obj[key] === "object") $b149e274c2c62b4b$export$71e7d3deffa0730b(obj[key]); // recursively traverse nested objects
        if (key === "_errors") {
            if (obj["_errors"].length) // De-duplicate
            obj["errors"] = Array.from(new Set(obj["_errors"]));
            delete obj["_errors"];
        }
    }
    return obj;
}


const $83e18bbf5fc6bc00$export$f8dc70b6d32541e2 = async (path)=>{
    try {
        const s = await (0, $759k8$fspromises).stat(path);
        if (!s.isDirectory()) return false;
    } catch (e) {
        if (e instanceof Error && /** @type{NodeJS.ErrnoException} */ e.code !== "ENOENT") console.warn((0, $759k8$chalk).yellow(`[!] An error occured while loading ${(0, $759k8$chalk).bold(`"${path.split("node_modules/")[1]}"`)}: ${e}.`));
        else console.warn((0, $759k8$chalk).yellow(`[!] ${(0, $759k8$chalk).bold(`"${path.split("node_modules/")[1]}"`)} could not be found in your node_modules. Check for spelling errors or try running npm install.`));
        return false;
    }
    const c = await (0, $759k8$fspromises).readdir(path);
    if (!c.includes("package.json")) return false;
    const packageContent = await (0, $759k8$fspromises).readFile(`${path}/package.json`).then(/** @param {Buffer} fileContent */ (fileContent)=>JSON.parse(fileContent.toString()));
    const zodResult = (0, $80999ebbb948d1d8$export$ac6197b8a56da2df).safeParse(packageContent);
    if (zodResult.success) return zodResult.data;
    else {
        console.warn((0, $759k8$chalk).yellow(`[!] ${(0, $759k8$chalk).bold(`"${path.split("node_modules/")[1]}"`)} could not be loaded as a plugin`));
        console.warn((0, $b149e274c2c62b4b$export$71e7d3deffa0730b)(zodResult.error.format()));
        return false;
    }
};








const $9dbb9efc71b4cf66$export$797917169e2ec068 = (0, $759k8$z).object({
    overrides: (0, $759k8$z).array((0, $759k8$z).string()).default([]),
    aliases: (0, $759k8$z).record((0, $759k8$z).string({
        description: "Component Name"
    }), (0, $759k8$z).string({
        description: "Alias to apply"
    })).default({}),
    provides: (0, $759k8$z).array((0, $759k8$z).string()).default([])
});
const $9dbb9efc71b4cf66$export$81ab33ffc20a47da = (0, $759k8$z).object({
    overrides: (0, $759k8$z).array((0, $759k8$z).string()).default([])
});
const $9dbb9efc71b4cf66$export$e691085fbd9bf5be = (0, $759k8$z).object({
    components: (0, $759k8$z).record((0, $759k8$z).string(), $9dbb9efc71b4cf66$export$797917169e2ec068),
    datasources: (0, $759k8$z).record((0, $759k8$z).string({
        description: "Plugin Package Name"
    }), $9dbb9efc71b4cf66$export$81ab33ffc20a47da).default({})
}).nonstrict();


const $42e31670ddd2595b$export$c1a4367d4847eb06 = (rootDir)=>{
    const configPath = `${rootDir}/evidence.plugins.yaml`;
    try {
        const configFileContent = (0, $759k8$fs).readFileSync(configPath, "utf8").toString();
        // Surround all YAML key that begin with "@" in quotes
        // Skipping keys that are already quoted (e.g. beginning of line or whitespace)
        const rawConfig = (0, $759k8$yaml).parse(configFileContent.replaceAll(/($|\s)(@.+):/g, '$1"$2":'));
        const configResult = (0, $9dbb9efc71b4cf66$export$e691085fbd9bf5be).safeParse(rawConfig);
        if (!configResult.success) {
            console.error((0, $759k8$chalk).bold.red(`[!] evidence.plugins.yaml does not contain a valid configuration. \n    Plugins will not be loaded. This may lead to unexpected behavior.`));
            const formattedError = (0, $b149e274c2c62b4b$export$71e7d3deffa0730b)(configResult.error.format());
            console.error((0, $759k8$chalk).red("|   Discovered Errors:"));
            const redPipe = (0, $759k8$chalk).red("|");
            console.error(`${redPipe}   ${(0, $759k8$yaml).stringify(formattedError).replace(/\n/g, `\n${redPipe}   `)}`);
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


/**
 * Wrapper function to create a package validator function
 * @param {string} rootDir
 * @returns {(packageName: string) => Promise<EvidencePluginPackage<ValidPackage> | false>}
 */ const $1a3a929d6a83cd91$var$validatePlugin = (rootDir)=>/**
	 * Validates that the given package name exists and is a valid plugin package
	 * @param {string} packageName
	 * @returns {Promise<EvidencePluginPackage<ValidPackage> | false>}
	 */ async (packageName)=>{
        const packagePath = (0, $759k8$path).resolve(rootDir, "node_modules", packageName);
        const validPackage = await (0, $83e18bbf5fc6bc00$export$f8dc70b6d32541e2)(packagePath);
        if (!validPackage) return false;
        return {
            package: validPackage,
            path: packagePath
        };
    };
const $1a3a929d6a83cd91$export$4b0a2a49a61b15e5 = async (rootDir)=>{
    /** @type {EvidenceConfig} */ const configContent = (0, $42e31670ddd2595b$export$c1a4367d4847eb06)(rootDir);
    /** @type {EvidencePluginPackage<ValidPackage>[]} */ const componentPackages = await Promise.all(Object.keys(configContent.components).map($1a3a929d6a83cd91$var$validatePlugin(rootDir))).then((pack)=>/** @type {Exclude<typeof pack[number], false>[]} */ pack.filter(Boolean));
    /** @type {EvidencePluginPackage<EvidenceDatasourcePackage>[]} */ const datasourcePackages = await Promise.all(Object.keys(configContent.datasources).map($1a3a929d6a83cd91$var$validatePlugin(rootDir))).then((pack)=>/** @type {EvidencePluginPackage<EvidenceDatasourcePackage>[]} */ pack.filter((p)=>p && Boolean(p.package.evidence?.datasources)));
    return {
        components: componentPackages,
        datasources: datasourcePackages
    };
};


async function $ac600faecd7c9f65$export$9418d811d68624a6(rootDir) {
    if (!rootDir) rootDir = await (0, $f0e8caf6851be9c6$export$6de9f17ef8a8b7d7)();
    return await (0, $1a3a929d6a83cd91$export$4b0a2a49a61b15e5)(rootDir);
}












const $5248258d13633806$export$71597f00c2fddf45 = (0, $759k8$z).object({
    components: (0, $759k8$z).array((0, $759k8$z).string())
});


async function $c8de895deee624e6$export$e709f8c5abf983ef(packagePath, rootDir) {
    try {
        // Load Config
        const manifestContent = await (0, $759k8$fspromises).readFile((0, $759k8$path).resolve(packagePath, "evidence.manifest.yaml")).then((r)=>r.toString());
        // Parse YAML, then validate data
        const manifest = (0, $759k8$yaml).parse(manifestContent);
        const parsedManifest = (0, $5248258d13633806$export$71597f00c2fddf45).safeParse(manifest);
        if (!parsedManifest.success) {
            // Shape is wrong
            console.error((0, $759k8$chalk).bold.red(`[!] evidence.manifest.yaml has errors`));
            const formattedError = (0, $b149e274c2c62b4b$export$71e7d3deffa0730b)(parsedManifest.error.format());
            console.error((0, $759k8$chalk).red("|   Discovered Errors:"));
            const redPipe = (0, $759k8$chalk).red("|");
            console.error(`${redPipe}   ${(0, $759k8$yaml).stringify(formattedError).replace(/\n/g, `\n${redPipe}   `)}`);
            // TODO: How do we stop here? Do we need to throw here?
            throw new Error("Unable to load evidence manifest");
        }
        return parsedManifest.data.components;
    } catch (e) {
        if (!(e instanceof Error)) throw e;
        if (e.message === "ENOENT") {
            console.error((0, $759k8$chalk).red.bold(`[!] evidence.manifest.yaml file not found in ${rootDir}.\n    This is probably a bug in Evidence; please file a report at https://github.com/evidence-dev/evidence/issues/new?assignees=&labels=bug%2C+to-review&projects=&template=bug_report.md`));
            throw e;
        }
        throw e;
    }
}





const $5f3c30b6b3882429$export$65544fe6bfff3b3e = async (root)=>{
    /**
	 * @type {string[]}
	 */ const output = [];
    // Scan & iterate directory
    const directoryContents = await (0, $759k8$fspromises).readdir(root, {
        withFileTypes: true
    });
    for (const item of directoryContents){
        // Ignore these cases
        if (item.name === "node_modules") continue; // Don't touch any dependencies
        if (item.name.startsWith(".")) continue; // Don't touch hidden files
        if (item.name.startsWith("+")) continue; // Don't touch sveltekit files
        // Build path; get item stats
        const itemPath = (0, $759k8$path).resolve(root, item.name);
        if (item.isDirectory()) // Recurse on directories
        output.push(...await $5f3c30b6b3882429$export$65544fe6bfff3b3e(itemPath));
        else if (item.name.endsWith(".svelte")) // Keep track of svelte components
        output.push(itemPath);
    }
    // Return relative filepaths
    return output.map((p)=>(0, $759k8$path).relative(".", p));
};
/**
 * Reduce function to run on a svelte AST.
 * Searches for the evidenceInclude declaration.
 * @example
 *  <script context="module">
 *      export const evidenceInclude = true
 *  </script>
 *
 * @param {import("estree").Node} currentNode
 * @returns {boolean}
 */ const $5f3c30b6b3882429$var$nodeIsEvidenceDeclaration = (currentNode)=>{
    // If this isn't the right kind of declaration, ignore it
    if (currentNode.type !== "ExportNamedDeclaration") return false;
    const rootDeclaration = currentNode.declaration;
    if (rootDeclaration?.type !== "VariableDeclaration") return false;
    // const only, this is somewhat inline with sveltekit's patterns
    if (rootDeclaration.kind !== "const") return false;
    // This shouldn't be hit, but type safety
    if (!rootDeclaration?.declarations) return false;
    // Iterate through sub-declarations, I've only ever seen 1 here
    for (const declaration of rootDeclaration.declarations){
        const { id: id, init: init } = declaration;
        // Check to see if this is a declaration for evidenceInclude
        if (id.type !== "Identifier") continue;
        if (id.name !== "evidenceInclude") continue;
        // Check to see if the value it is declared with is a true constant
        // We could shorten this; but this reads better
        if (init?.type !== "Literal") continue;
        if (init.value !== true) continue;
        // We found what we want!
        return true;
    }
    // We never found the right declaration; continue the reduction
    return false;
};
const $5f3c30b6b3882429$export$61e568c7425e25b1 = async (fileContent)=>{
    let result = false;
    // remove style tags, postcss can screw this up
    fileContent = fileContent.replace(/<style.*>(.|[\s])*<\/style>/g, "");
    // First parse the passed in file
    const parseResult = (0, $759k8$parse)(fileContent);
    // If there is a <script> tag, check there
    if (parseResult.instance) result = result || Boolean(parseResult.instance.content.body.find($5f3c30b6b3882429$var$nodeIsEvidenceDeclaration));
    // If there is a <script context="module"> tag, check there
    if (parseResult.module) result = result || Boolean(parseResult.module.content.body.find($5f3c30b6b3882429$var$nodeIsEvidenceDeclaration));
    return result;
};
async function $5f3c30b6b3882429$export$c1b3dffdfac3a83b(rootDir) {
    const componentPaths = await $5f3c30b6b3882429$export$65544fe6bfff3b3e(rootDir);
    const results = await Promise.all(componentPaths.map(async (componentPath)=>({
            include: await $5f3c30b6b3882429$export$61e568c7425e25b1(await (0, $759k8$fspromises).readFile(componentPath).then((p)=>p.toString())).catch((e)=>{
                throw new Error(`Error while identifying ${componentPath}`, {
                    cause: e
                });
            }),
            // Get the name of the component, takes the last part of the path and removes the file extension
            componentName: (0, $759k8$path).basename(componentPath, (0, $759k8$path).extname(componentPath))
        })));
    return results.filter((r)=>r.include).map((r)=>r.componentName);
}


const $eb073e1f14301c2c$export$eda82cc3112dee4c = async (rootDir, packagePath, config)=>{
    const validEvidencePackage = await (0, $83e18bbf5fc6bc00$export$f8dc70b6d32541e2)(packagePath);
    /** @type {Set<string>} */ const providedComponents = new Set();
    // This doesn't have the required metadata
    if (!validEvidencePackage) return providedComponents;
    // This is a datasource connector, not a component lib
    if (validEvidencePackage.evidence && !validEvidencePackage.evidence.components) {
        console.warn((0, $759k8$chalk).yellow(`[!] ${validEvidencePackage.name} is being used as a component plugin, but does not contain components.`));
        return providedComponents;
    }
    if (config.provides.length) // Use this value as the first truth
    config.provides.forEach((c)=>providedComponents.add(c));
    else if (!validEvidencePackage.evidence) {
        // This is probably an external component library that doesn't have any provides statements
        console.warn((0, $759k8$chalk).yellow(`[!] ${validEvidencePackage.name} is being used as a component plugin, but does not contain plugins. You may need to add a provides statement to your manifest.`));
        return providedComponents;
    } else {
        const manifestPath = (0, $759k8$path).resolve(packagePath, "evidence.manifest.yaml");
        const manifestExists = await (0, $759k8$fspromises).access(manifestPath).then(()=>true).catch(()=>false);
        if (manifestExists) {
            // Use manifest
            const manifestComponents = await (0, $c8de895deee624e6$export$e709f8c5abf983ef)(packagePath, rootDir);
            manifestComponents.forEach((c)=>providedComponents.add(c));
        } else {
            // Use file discovery
            // Attempt to extract the folder that contains built assets
            const mainFilePath = (0, $759k8$path).parse("main" in validEvidencePackage ? (0, $759k8$path).resolve(packagePath, validEvidencePackage.main) : "svelte" in validEvidencePackage ? (0, $759k8$path).resolve(packagePath, validEvidencePackage.svelte) : (0, $759k8$path).resolve(packagePath, validEvidencePackage.exports["."])).dir;
            const fileComponents = await (0, $5f3c30b6b3882429$export$c1b3dffdfac3a83b)(mainFilePath);
            fileComponents.forEach((c)=>providedComponents.add(c));
        }
    }
    return providedComponents;
};








async function $aace83f51d28e01b$export$757b8ee912e1a1ac(cfg, discoveries) {
    const rootDir = await (0, $f0e8caf6851be9c6$export$6de9f17ef8a8b7d7)();
    const config = cfg ?? await (0, $42e31670ddd2595b$export$c1a4367d4847eb06)(rootDir);
    const pluginDiscoveries = discoveries ?? await (0, $ac600faecd7c9f65$export$9418d811d68624a6)();
    Object.values(config.components).reduce(/**
		 * @param {Set<string>} acc
		 * @param {EvidenceComponentConfig} v
		 */ (acc, v)=>{
        for (const override of v.overrides){
            if (acc.has(override)) {
                console.error((0, $759k8$chalk).red(`[!] ${override} is overriden more than once. Please ensure that a component is overriden only once.`));
                throw new Error("Invalid evidence.plugins.yaml");
            }
            acc.add(override);
        }
        return acc;
    }, new Set());
    // Load all the components
    const components = await Promise.all(pluginDiscoveries.components.map(/**
			 * @param {EvidencePluginPackage<ValidPackage>} pluginPackage
			 * @returns {Promise<[string, Set<string>]>}
			 */ async (pluginPackage)=>[
            pluginPackage.package.name,
            await (0, $eb073e1f14301c2c$export$eda82cc3112dee4c)(rootDir, pluginPackage.path, config.components[pluginPackage.package.name])
        ]));
    // Now we will smush all of this into Record<ComponentName, PackageName>
    const componentMap = components.reduce(/**
		 * @param {PluginComponents} acc
		 * @param {[string, Set<string>]} p
		 */ (acc, [packageName, components])=>{
        /** @type {EvidenceComponentConfig} */ const packageConfig = config.components[packageName];
        for (const component of components){
            /** @type {PluginComponent} */ const componentObj = {
                package: packageName
            };
            const alias = packageConfig.aliases[component];
            if (alias) componentObj.aliasOf = component;
            const componentOutputName = alias ?? component;
            if (acc[componentOutputName] && !packageConfig.overrides.includes(componentOutputName)) {
                console.warn((0, $759k8$chalk).yellow(`[!] ${packageName} and ${acc[componentOutputName].package} both provide ${componentOutputName}. ${acc[componentOutputName].package} will be used, to use ${packageName}, specify an alias or explicit override. (https://docs.evidence.dev/plugins#component-aliases)`));
                return acc;
            }
            if (packageConfig.overrides?.includes(componentOutputName)) {
                if (!acc[componentOutputName]) console.warn((0, $759k8$chalk).yellow(`[!] ${packageName} cannot override it's own component ${componentOutputName}`));
                else componentObj.overriden = {
                    package: acc[componentOutputName].package
                };
            }
            acc[componentOutputName] = componentObj;
        }
        return acc;
    }, {});
    if ((0, $759k8$fs).existsSync(`${rootDir}/components`)) {
        const user_components = await (0, $5f3c30b6b3882429$export$65544fe6bfff3b3e)(`${rootDir}/components`);
        for (const component_file of user_components){
            const component = (0, $759k8$path).basename(component_file, ".svelte");
            if (componentMap[component]) {
                console.warn((0, $759k8$chalk).yellow([
                    `${(0, $759k8$chalk).bold(`[!] The components folder and ${componentMap[component].package} both provide ${component}`)}.`,
                    "The component from the components folder will be used.",
                    `To use the component from ${componentMap[component].package}, specify an alias (https://docs.evidence.dev/plugins/using-plugins/#component-aliases) or explicitly import the component.`
                ].join("\n	")));
                delete componentMap[component];
            }
        }
    }
    return componentMap;
}



const $fdb25277a913487b$export$4afb816e967c52c1 = ()=>{
    const componentPlugins = (0, $aace83f51d28e01b$export$757b8ee912e1a1ac)();
    const packages = componentPlugins.then((components)=>{
        /** @type {Record<string,string[]>} */ const packages = {};
        for (const [component, data] of Object.entries(components)){
            if (!packages[data.package]) packages[data.package] = [];
            const import_name = data.aliasOf ? `${data.aliasOf} as ${component}` : component;
            packages[data.package].push(import_name);
        }
        return packages;
    }).catch(()=>({}));
    const autoImporter = packages.then((packages)=>(0, $759k8$sveltekitautoimport)({
            include: [
                "**/*.(svelte|md)"
            ],
            module: packages,
            components: [
                {
                    directory: "../../components",
                    flat: true
                }
            ]
        }));
    return {
        /** @type {import("svelte/types/compiler/preprocess").MarkupPreprocessor}} */ markup: async ({ content: content, filename: filename })=>{
            const components = await componentPlugins.catch(()=>false);
            if (!components) return;
            const { markup: autoimport_process_markup } = await autoImporter;
            return autoimport_process_markup({
                content: content,
                filename: filename
            });
        },
        /** @type {import("svelte/types/compiler/preprocess").Preprocessor}} */ style: async ()=>{},
        /** @type {import("svelte/types/compiler/preprocess").Preprocessor}} */ script: async ()=>{}
    };
};


var $e526a4a26d12962f$exports = {};

$parcel$export($e526a4a26d12962f$exports, "evidenceRollup", () => $e526a4a26d12962f$export$1337da85e733ac15);
/**
 *
 */ function $e526a4a26d12962f$export$1337da85e733ac15() {
    throw new Error("Evidence Rollup Plugin not implemented");
}


var $3da0ffcef202771e$exports = {};

$parcel$export($3da0ffcef202771e$exports, "evidenceVitePlugin", () => $3da0ffcef202771e$export$d3b7ff3323bf7d88);

const $00a9a03ad9dbeb30$export$b7d4ef609b53428c = {
    name: "evidence:query-directory-hmr",
    configureServer (server) {
        server.watcher.add("../../queries/**.sql");
        server.watcher.addListener("change", /**
			 *
			 * @param {string} filename
			 * @returns {Promise<void>}
			 */ async (filename)=>{
            if (!(filename.includes(".evidence/template/queries") && filename.endsWith(".sql"))) return;
            const content = await (0, $759k8$fspromises).readFile(filename, "utf-8");
            const queryId = filename.split(".evidence/template/queries/").pop()?.split(".sql")[0].replace("/", "_").replace("\\", "_");
            server.ws.send("evidence:queryChange", {
                queryId: queryId,
                content: content
            });
        });
    }
};


const $3da0ffcef202771e$export$d3b7ff3323bf7d88 = ()=>{
    return [
        (0, $00a9a03ad9dbeb30$export$b7d4ef609b53428c)
    ];
};


var $f539f6c5eeecdbe7$exports = {};

$parcel$export($f539f6c5eeecdbe7$exports, "getDatasourceOptions", () => $f539f6c5eeecdbe7$export$879d136fda7cc063);
$parcel$export($f539f6c5eeecdbe7$exports, "updateDatasourceOutputs", () => $f539f6c5eeecdbe7$export$76919addde332833);
$parcel$export($f539f6c5eeecdbe7$exports, "getDatasourcePlugins", () => $99d4f87e5e8a9988$export$8fbb278aab496aa6);
$parcel$export($f539f6c5eeecdbe7$exports, "updateDatasourceOptions", () => $91a2cedf7956f292$export$6e642c641a02853);
$parcel$export($f539f6c5eeecdbe7$exports, "DatasourceSpecFileSchema", () => $786b95c585cb8ead$export$e0cbf1bbd256fc2f);
$parcel$export($f539f6c5eeecdbe7$exports, "DatasourceSpecSchema", () => $786b95c585cb8ead$export$1c674577bd1f83c0);







// Note that this only validates that the first item in the array
// is a record with string keys. If the connector returns some
// inconsistent array (e.g. [{}, 1]), it will not detect the
// invalid row.
const $8b495770a87baf5c$var$QueryResultArraySchema = (0, $759k8$z).any().refine((data)=>{
    // result is not an array, fail
    if (!Array.isArray(data)) return false;
    // result has no rows, we can't validate this
    // but this is a correct result set
    if (data.length === 0) return true;
    return (0, $759k8$z).record((0, $759k8$z).string(), (0, $759k8$z).any()).safeParse(data[0]).success;
}, {
    message: "Data connector returned invalid rows"
});
const $8b495770a87baf5c$var$QueryResultGeneratorSchema = (0, $759k8$z).function();
const $8b495770a87baf5c$export$c959e5da37fd983b = (0, $759k8$z).object({
    // Note that this only validates that the first item in the array
    // is a record with string keys. If the connector returns some
    // inconsistent array (e.g. [{}, 1]), it will not detect the
    // invalid row.
    rows: $8b495770a87baf5c$var$QueryResultArraySchema.or($8b495770a87baf5c$var$QueryResultGeneratorSchema),
    columnTypes: (0, $759k8$z).array((0, $759k8$z).object({
        name: (0, $759k8$z).string(),
        evidenceType: (0, $759k8$z).enum([
            "boolean",
            "number",
            "string",
            "date"
        ]),
        typeFidelity: (0, $759k8$z).union([
            (0, $759k8$z).literal("precise"),
            (0, $759k8$z).literal("inferred")
        ])
    })),
    expectedRowCount: (0, $759k8$z).number().optional()
}).refine((data)=>{
    // We can't dig into generator functions
    if (typeof data.rows === "function") return true;
    const rows = data.rows;
    // Validate that all columnTypes appear
    if (rows.length) {
        // Filter to column types where name is not in row
        // Then map columnTypes to their names to make things easier
        // If there are any columns that were not filtered out; provide an error to zod
        const missingColumns = data.columnTypes.filter((ct)=>!(ct.name in rows[0])).map((ct)=>ct.name);
        if (missingColumns.length) return false;
    }
    return true;
}, (data)=>{
    // We can't dig into generator functions
    if (typeof data.rows === "function") return {
        path: [
            "columnTypes"
        ]
    };
    const rows = data.rows;
    const missingColumns = data.columnTypes.filter((ct)=>!(ct.name in rows[0])).map((ct)=>ct.name);
    return {
        path: [
            "columnTypes"
        ],
        message: `Datasource result has columns declared that are missing from results: ${missingColumns.join(", ")}`
    };
}).refine((data)=>{
    // We can't dig into generator functions
    if (typeof data.rows === "function") return true;
    // Validate that all columns in the returned rows have declared column types
    if (data.rows.length) {
        const colNames = data.columnTypes.map((ct)=>ct.name);
        const extraColumns = Object.keys(data.rows[0]).filter((rowKey)=>!colNames.includes(rowKey));
        if (extraColumns.length) return false;
    }
    return true;
}, (data)=>{
    // We can't dig into generator functions
    if (typeof data.rows === "function") return {
        path: [
            "rows"
        ]
    };
    const colNames = data.columnTypes.map((ct)=>ct.name);
    const extraColumns = Object.keys(data.rows[0]).filter((rowKey)=>!colNames.includes(rowKey));
    return {
        path: [
            "rows"
        ],
        message: `First row of results columns not provided in columnTypes: ${extraColumns.join(", ")}`
    };
});
const $8b495770a87baf5c$export$f5ddb356b686dd84 = (0, $759k8$z).function().args((0, $759k8$z).string({
    description: "QueryString"
}).or((0, $759k8$z).null({
    description: "ExceededSizeQueryString"
})), (0, $759k8$z).string({
    description: "QueryFilepath"
}), (0, $759k8$z).number({
    description: "Batch Size"
}).or((0, $759k8$z).null())).returns((0, $759k8$z).promise($8b495770a87baf5c$export$c959e5da37fd983b.or((0, $759k8$z).null())).or($8b495770a87baf5c$export$c959e5da37fd983b));
const $8b495770a87baf5c$export$989ca211935133de = (0, $759k8$z).function().args((0, $759k8$z).any({
    description: "Connection Options"
})).returns((0, $759k8$z).promise((0, $759k8$z).union([
    (0, $759k8$z).literal(true),
    (0, $759k8$z).object({
        reason: (0, $759k8$z).string()
    })
])));
const $8b495770a87baf5c$export$a0e9703f15a2290c = (0, $759k8$z).function().args((0, $759k8$z).any({
    description: "Connection Options"
}), (0, $759k8$z).string({
    description: "Datasource directory"
})).returns((0, $759k8$z).promise($8b495770a87baf5c$export$f5ddb356b686dd84));
/**
 * @typedef {Object} IDatasourceOptionSpecSchema
 * @property {string} title
 * @property {'string' | 'number' | 'boolean' | 'select' | 'file'} type
 * @property {boolean} [secret]
 * @property {boolean} [shown]
 * @property {string} [description]
 * @property {boolean} [virtual]
 * @property {boolean} [nest]
 * @property {string | number | boolean | undefined} [default]
 * @property {Record<string | number | symbol, Record<string, IDatasourceOptionSpecSchema>> | undefined} [children]
 */ const $8b495770a87baf5c$var$primitive = (0, $759k8$z).union([
    (0, $759k8$z).string(),
    (0, $759k8$z).number(),
    (0, $759k8$z).boolean()
]);
const $8b495770a87baf5c$export$7b12d43aed3b0368 = (0, $759k8$z).record((0, $759k8$z).string(), (0, $759k8$z).object({
    title: (0, $759k8$z).string(),
    type: (0, $759k8$z).enum([
        "string",
        "number",
        "boolean",
        "select",
        "file"
    ]),
    secret: (0, $759k8$z).boolean().default(false),
    shown: (0, $759k8$z).boolean().optional(),
    /**
		 * Indicates that the field should not actually be persisted. Should be combined with `references`
		 */ virtual: (0, $759k8$z).boolean().default(false),
    /**
		 * Indicates that the field should get its value from another field if it is available
		 */ references: (0, $759k8$z).string().optional(),
    /**
		 * Indicates that the field can only get its value from the references
		 */ forceReference: (0, $759k8$z).boolean().default(false),
    fileFormat: (0, $759k8$z).enum([
        "json",
        "yaml"
    ]).optional(),
    description: (0, $759k8$z).string().optional(),
    children: (0, $759k8$z).lazy(()=>(0, $759k8$z).record((0, $759k8$z).string(), $8b495770a87baf5c$export$7b12d43aed3b0368)).optional(),
    required: (0, $759k8$z).boolean().default(false),
    options: (0, $759k8$z).union([
        (0, $759k8$z).string(),
        (0, $759k8$z).object({
            value: $8b495770a87baf5c$var$primitive,
            label: (0, $759k8$z).string()
        })
    ]).array().optional(),
    nest: (0, $759k8$z).boolean().optional(),
    default: $8b495770a87baf5c$var$primitive.optional()
}));
const $8b495770a87baf5c$export$4f0eb8607c96bd68 = (0, $759k8$z).object({
    getRunner: $8b495770a87baf5c$export$a0e9703f15a2290c,
    supports: (0, $759k8$z).array((0, $759k8$z).union([
        (0, $759k8$z).string(),
        (0, $759k8$z).array((0, $759k8$z).string())
    ])),
    options: $8b495770a87baf5c$export$7b12d43aed3b0368,
    testConnection: $8b495770a87baf5c$export$989ca211935133de,
    processSource: (0, $759k8$z).function().returns((0, $759k8$z).custom((d)=>d && typeof d === "object" && Symbol.asyncIterator in d, {
        message: "Expected AsyncIterator result"
    })).optional()
});


const $786b95c585cb8ead$export$89c81f16bad71a6b = (0, $759k8$z).object({
    filepath: (0, $759k8$z).string(),
    content: (0, $759k8$z).string().or((0, $759k8$z).null()),
    hash: (0, $759k8$z).string().or((0, $759k8$z).null()),
    name: (0, $759k8$z).string()
});
const $786b95c585cb8ead$export$e0cbf1bbd256fc2f = (0, $759k8$z).object({
    type: (0, $759k8$z).string(),
    name: (0, $759k8$z).string().refine((s)=>s?.toString().match(/^[a-zA-Z0-9_-]+$/)?.length),
    options: (0, $759k8$z).any()
});
const $786b95c585cb8ead$export$1c674577bd1f83c0 = $786b95c585cb8ead$export$e0cbf1bbd256fc2f.extend({
    // queries: z.array(DatasourceQuerySchema),
    sourceDirectory: (0, $759k8$z).string()
});
const $786b95c585cb8ead$export$1becbf11471723ce = (0, $759k8$z).object({
    source: $786b95c585cb8ead$export$89c81f16bad71a6b,
    result: (0, $8b495770a87baf5c$export$c959e5da37fd983b),
    name: (0, $759k8$z).string({
        description: "Output Table / Store name"
    })
});
const $786b95c585cb8ead$export$b6d78fd3bc13e5ce = (0, $759k8$z).record((0, $759k8$z).record((0, $759k8$z).string().or((0, $759k8$z).null())));
const $786b95c585cb8ead$export$a1132735c513e70f = (0, $759k8$z).object({
    renderedFiles: (0, $759k8$z).record((0, $759k8$z).array((0, $759k8$z).string()))
});




/**
 * Encodes a value or an array of values into Base64 recursively.
 * @param {*} v - The value or array of values to encode.
 * @returns {*} - The encoded value or array of values.
 */ const $bac3c49151dbadcb$export$1867e32d63096a84 = (v)=>{
    if (Array.isArray(v)) {
        const mapped = v.map($bac3c49151dbadcb$export$1867e32d63096a84);
        return mapped;
    } else if (typeof v === "string") return btoa(v);
    else if (v && v.constructor === Object) // bare object
    return Object.fromEntries(Object.entries(v).map(/**
				 * Maps each key-value pair of the object.
				 * @param {[string, object]} entry - The key-value pair.
				 * @returns {[string, object|string]} - The encoded key-value pair.
				 */ ([k, v])=>[
            k,
            $bac3c49151dbadcb$export$1867e32d63096a84(v)
        ]));
    else return v;
};
const $bac3c49151dbadcb$export$d5bf8907c6ddf98a = (v)=>{
    if (Array.isArray(v)) {
        const mapped = v.map($bac3c49151dbadcb$export$d5bf8907c6ddf98a);
        return mapped;
    } else if (typeof v === "string") return atob(v);
    else if (v && v.constructor === Object) // bare object
    return Object.fromEntries(Object.entries(v).map(/**
				 * Maps each key-value pair of the object.
				 * @param {[string, object]} entry - The key-value pair.
				 * @returns {[string, object|string]} - The encoded key-value pair.
				 */ ([k, v])=>[
            k,
            $bac3c49151dbadcb$export$d5bf8907c6ddf98a(v)
        ]));
    else return v;
};


const $af8aba1548cdc66e$export$46a3b0a4d36b05de = async (create)=>{
    // Get the absolute path to the current working directory
    let pwd = (0, $759k8$path).resolve("./");
    if (pwd.includes(".evidence")) pwd = (0, $759k8$path).resolve("../..");
    // Get the contents of the current directory
    const contents = await (0, $759k8$fspromises).readdir(pwd, {
        withFileTypes: true
    });
    // Find the sources directory in the contents
    const sourcesDir = contents.find((c)=>c.name === "sources" && c.isDirectory());
    const sourceDirPath = (0, $759k8$path).join(pwd, "sources");
    // If sources directory doesn't exist, log a warning message
    if (!sourcesDir) {
        if (!create) {
            console.warn((0, $759k8$chalk).yellow("[!] No Sources Found!"));
            return null;
        } else {
            await (0, $759k8$fspromises).mkdir(sourceDirPath, {
                recursive: true
            });
            console.info((0, $759k8$chalk).green(`Created new sources directory; ${sourceDirPath}`));
        }
    }
    // Return the path to the sources directory
    return (0, $759k8$path).join(pwd, "sources");
};
const $af8aba1548cdc66e$export$4d546bd0a30a867d = (sourceName)=>{
    /** @type {any} */ const out = {};
    const keyRegex = /^EVIDENCE_SOURCE__([a-zA-Z0-1_]+)$/;
    for (const [key, value] of Object.entries(process.env)){
        const parts = keyRegex.exec(key);
        if (!parts) continue;
        if (parts?.length < 2) continue;
        if (!parts[1].toLowerCase().startsWith(sourceName.toLowerCase())) continue;
        const rawOptKey = parts[1].substring(sourceName.length + 2).split("__");
        let t = out;
        rawOptKey.forEach((key, i)=>{
            if (i < rawOptKey.length - 1) {
                // We haven't reached the final key
                if (!t[key]) t[key] = {};
                t = t[key];
            } else t[key] = value;
        });
    }
    return out;
};
const $af8aba1548cdc66e$export$5f9bc633b116660f = async (sourcesDir)=>{
    const sourcesDirectories = await (0, $759k8$fspromises).readdir(sourcesDir);
    /** @type {DatasourceSpec[]} */ return await Promise.all(sourcesDirectories.map(async (dirName)=>{
        const sourceDir = (0, $759k8$path).join(sourcesDir, dirName);
        const possibleDir = await (0, $759k8$fspromises).stat(sourceDir);
        if (!possibleDir.isDirectory()) return false;
        const connParams = await $af8aba1548cdc66e$var$loadConnectionConfiguration(sourceDir);
        if (!connParams) return false;
        if (!connParams.name) connParams.name = /** @type {string} */ sourceDir.split((0, $759k8$path).sep).pop();
        if (!connParams.name) throw new Error(`Unexpected error determining datasource name, please add an explicit name in connection.yaml (${sourceDir})`);
        // Load Options from connection.options.yaml
        connParams.options = (0, $759k8$lodashmerge)(connParams.options, await $af8aba1548cdc66e$var$loadConnectionOptions(sourceDir));
        // Load Options from Environment
        connParams.options = (0, $759k8$lodashmerge)(connParams.options, $af8aba1548cdc66e$export$4d546bd0a30a867d(connParams.name));
        // const queries = await getQueries(sourceDir, contents);
        return {
            ...connParams,
            sourceDirectory: sourceDir
        };
    })).then((r)=>/** @type {Exclude<typeof r[number], false>[]} */ r.filter(Boolean));
};
/**
 *
 * @template {import("zod").ZodType} T
 * @param {T} zod_schema
 * @param {string} file_path
 * @param {import("zod").infer<T>} default_value
 * @param {string} error_message
 * @returns {Promise<import("zod").infer<T>>}
 */ async function $af8aba1548cdc66e$var$validateFile(zod_schema, file_path, default_value, error_message) {
    const string_default = JSON.stringify(default_value);
    const file_contents = await (0, $759k8$fspromises).readFile(file_path, "utf-8").catch(()=>string_default);
    const parsed = JSON.parse(file_contents);
    const validated = zod_schema.safeParse(parsed);
    if (!validated.success) {
        console.error((0, $759k8$chalk).bold.red(error_message));
        await (0, $759k8$fspromises).writeFile(file_path, string_default);
        return default_value;
    }
    return validated.data;
}
async function $af8aba1548cdc66e$export$d113f6dd5d5b70e0(outDir) {
    const manifestPath = (0, $759k8$path).join(outDir, "manifest.json");
    return $af8aba1548cdc66e$var$validateFile((0, $786b95c585cb8ead$export$a1132735c513e70f), manifestPath, {
        renderedFiles: {}
    }, "[!] Unable to parse manifest, ignoring");
}
const $af8aba1548cdc66e$var$hash_location = "sources/hashes.json";
async function $af8aba1548cdc66e$export$242ed7dd39449d16(baseDir) {
    return $af8aba1548cdc66e$var$validateFile((0, $786b95c585cb8ead$export$b6d78fd3bc13e5ce), (0, $759k8$path).join(baseDir, $af8aba1548cdc66e$var$hash_location), {}, "[!] Unable to parse source query hashes, ignoring");
}
async function $af8aba1548cdc66e$export$f2b0793804f52a8f(baseDir, hashes) {
    const output = (0, $759k8$path).join(baseDir, $af8aba1548cdc66e$var$hash_location);
    await (0, $759k8$fspromises).mkdir((0, $759k8$path).dirname(output), {
        recursive: true
    });
    await (0, $759k8$fspromises).writeFile(output, JSON.stringify(hashes));
}
async function $af8aba1548cdc66e$export$7854670c66555fc6(dataDir, hashes) {
    const sourceDirectories = (await (0, $759k8$fspromises).readdir(dataDir, {
        withFileTypes: true
    })).filter((r)=>r.isDirectory()).map((r)=>r.name);
    const hashedSources = Object.keys(hashes);
    for (const sourceName of sourceDirectories){
        const sourcePath = (0, $759k8$path).join(dataDir, sourceName);
        // Clean up sources that have been renamed or removed
        if (!hashedSources.includes(sourceName)) {
            await (0, $759k8$fspromises).rm(sourcePath, {
                recursive: true,
                force: true
            });
            continue;
        }
        const queries = await (0, $759k8$fspromises).readdir(sourcePath);
        const sourceHashes = hashes[sourceName];
        for (const queryName of queries){
            const queryPath = (0, $759k8$path).join(sourcePath, queryName);
            const currentResults = await (0, $759k8$fspromises).readdir(queryPath);
            for (const resultHash of currentResults)if (resultHash !== sourceHashes[queryName]) await (0, $759k8$fspromises).rm((0, $759k8$path).join(queryPath, resultHash), {
                recursive: true,
                force: true
            });
            if (!sourceHashes[queryName]) continue;
            const queryHashPath = (0, $759k8$path).join(queryPath, /** @type {string} */ sourceHashes[queryName]);
            const timestamps = await (0, $759k8$fspromises).readdir(queryHashPath);
            const numbers = timestamps.map((x)=>Number(x)).filter((x)=>!isNaN(x));
            if (!numbers.length) continue;
            const latest = Math.max(...numbers).toString();
            for (const timestamp of timestamps)if (timestamp !== latest) await (0, $759k8$fspromises).rm((0, $759k8$path).join(queryHashPath, timestamp), {
                recursive: true,
                force: true
            });
        }
    }
}
/**
 * Reads a YAML file containing connection parameters from the given source directory,
 * parses it, and returns a validated datasource specification.
 *
 * @param {string} sourceDir - The directory containing the connection.yaml file.
 * @return {Promise<DatasourceSpecFile | false>} A Promise that resolves to a validated datasource specification, or false if the directory is not a source.
 */ async function $af8aba1548cdc66e$var$loadConnectionConfiguration(sourceDir) {
    const connParamsRaw = await (0, $759k8$fspromises).readFile((0, $759k8$path).join(sourceDir, "connection.yaml")).then((r)=>r.toString()).catch(/** @returns {false} */ (e)=>{
        console.warn((0, $759k8$chalk).yellow(`[!] ${sourceDir} is not a valid source; skipping`));
        console.warn(e.message);
        return false;
    });
    if (connParamsRaw === false) return false;
    let connParamsUnchecked;
    try {
        connParamsUnchecked = (0, $759k8$yaml).parse(connParamsRaw);
    } catch (e) {
        throw new Error(`Error parsing connection.yaml file; ${sourceDir}`, {
            cause: e
        });
    }
    const validationResult = (0, $786b95c585cb8ead$export$e0cbf1bbd256fc2f).safeParse(connParamsUnchecked);
    if (!validationResult.success) {
        console.error((0, $759k8$chalk).bold.red(`[!] connection.yaml has errors (${sourceDir}`));
        const formattedError = (0, $b149e274c2c62b4b$export$71e7d3deffa0730b)(validationResult.error.format());
        console.error((0, $759k8$chalk).red("|   Discovered Errors:"));
        const redPipe = (0, $759k8$chalk).red("|");
        console.error(`${redPipe}   ${(0, $759k8$yaml).stringify(formattedError).replace(/\n/g, `\n${redPipe}   `)}`);
        throw new Error("Unable to load connection.yaml");
    }
    return validationResult.data;
}
/**
 * @returns {Promise<any>}
 * @param {string} sourceDir
 */ async function $af8aba1548cdc66e$var$loadConnectionOptions(sourceDir) {
    const optionsFilePath = (0, $759k8$path).join(sourceDir, "connection.options.yaml");
    const optionsFileExists = await (0, $759k8$fspromises).stat(optionsFilePath).then(()=>true).catch(()=>false);
    if (!optionsFileExists) return {};
    const optionsFile = await (0, $759k8$fspromises).readFile(optionsFilePath).then((r)=>r.toString());
    try {
        return (0, $bac3c49151dbadcb$export$d5bf8907c6ddf98a)((0, $759k8$yaml).parse(optionsFile));
    } catch (e) {
        throw new Error(`Error parsing connection.options.yaml file; ${sourceDir}`, {
            cause: e
        });
    }
}
async function $af8aba1548cdc66e$export$ecae802dba8a1831(sourceDir, contents) {
    const queryFiles = await Promise.all(contents.filter((s)=>s !== "connection.yaml" && s !== "connection.options.yaml").flatMap(/**
				 * @param {string} s
				 * @returns {Promise<string[]>}
				 */ async (s)=>{
        /**
					 * @param {string} dirPath
					 * @returns {Promise<boolean>}
					 */ async function isDir(dirPath) {
            const stats = await (0, $759k8$fspromises).lstat(dirPath);
            return stats.isDirectory();
        }
        /**
					 * @param {string} dirPath
					 * @returns {Promise<string[]>}
					 */ async function loadDirRecursive(dirPath) {
            const content = await (0, $759k8$fspromises).readdir(dirPath);
            let output = [];
            for (const filePath of content)if (await isDir((0, $759k8$path).join(dirPath, filePath))) output.push(...await loadDirRecursive((0, $759k8$path).join(dirPath, filePath)));
            else output.push((0, $759k8$path).join(dirPath, filePath));
            return output;
        }
        const fullPath = (0, $759k8$path).join(sourceDir, s);
        if (await isDir(fullPath)) {
            const recursed = await loadDirRecursive(fullPath);
            return recursed.map((r)=>(0, $759k8$path).relative(sourceDir, r));
        } else return [
            s
        ];
    })).then(/**
		 * @param {string[][]} r
		 * @returns {string[]}
		 */ (r)=>r.flat(1));
    const queries = await Promise.all(queryFiles.map(async (filename)=>{
        const filepath = (0, $759k8$path).join(sourceDir, filename);
        const { size: size } = await (0, $759k8$fspromises).stat(filepath);
        let content, hash;
        if (size > 104857600) {
            console.warn(`${filename} is over 100MB, skipping`);
            content = null;
            hash = null;
        } else {
            content = await (0, $759k8$fspromises).readFile((0, $759k8$path).join(sourceDir, filename)).then((r)=>r.toString());
            hash = (0, $759k8$createHash)("md5").update(content).digest("hex");
        }
        return {
            filepath: filepath,
            content: content,
            hash: hash,
            name: (0, $759k8$path).basename(filepath).split(".")[0]
        };
    }));
    return queries;
}











const $aee303a8942d0e5d$export$ebbe0f536b18196e = async (packageMain, supports, packageName)=>{
    // https://github.com/nodejs/node/issues/31710 thanks windows
    const crossPlatformPackage = new URL(`file:///${packageMain}`).href;
    const connectorPackage = await import(crossPlatformPackage /* @vite-ignore */ );
    const connector = (0, $8b495770a87baf5c$export$4f0eb8607c96bd68).safeParse({
        ...connectorPackage,
        supports: supports
    });
    if (!connector.success) {
        console.error((0, $759k8$chalk).bold.red(`[!] Datasource connector "${packageName}" is invalid`));
        const formattedError = (0, $b149e274c2c62b4b$export$71e7d3deffa0730b)(connector.error.format());
        console.error((0, $759k8$chalk).red("|   Discovered Errors:"));
        const redPipe = (0, $759k8$chalk).red("|");
        console.error(`${redPipe}   ${(0, $759k8$yaml).stringify(formattedError).replace(/\n/g, `\n${redPipe}   `)}`);
        process.exit(1);
    } else return connector.data;
};




async function $99d4f87e5e8a9988$export$8fbb278aab496aa6(cfg, discoveries) {
    const pluginDiscoveries = discoveries ?? await (0, $ac600faecd7c9f65$export$9418d811d68624a6)();
    return await pluginDiscoveries.datasources.reduce(/**
		 * Adds a plugin to a map of EvidencePluginPackages with a corresponding DatasourceConnectorFactory,
		 * ensuring that no duplicate datasources are added.
		 * @param {Promise<Record<string, PluginDatasources[string]>>} _acc - A promise representing the current state of the package map
		 * @param {EvidencePluginPackage<EvidenceDatasourcePackage>} v - The plugin package to be added to the map
		 * @returns {Promise<Record<string, PluginDatasources[string]>>} - A promise representing the updated package map
		 */ async (_acc, v)=>{
        // TODO: Handle Overrides
        // Wait for the current state of the package map to resolve
        const acc = await _acc;
        // Build a DatasourceConnectorFactory for the plugin package's datasourcess
        const factory = await (0, $aee303a8942d0e5d$export$ebbe0f536b18196e)((0, $759k8$path).join(v.path, v.package.main), v.package.evidence?.datasources ?? [], v.package.name);
        // For each datasource in the plugin package...
        v.package.evidence.datasources?.flat().forEach((d)=>{
            // If a plugin with the same datasource already exists in the map, throw an error
            if (d in acc) {
                console.error((0, $759k8$chalk).red(`[!] Multiple datasource connectors found for ${d}. Please ensure that only one is used.`));
                throw new Error("Datasource plugin conflict found!");
            }
            // Otherwise, add the plugin package and its DatasourceConnectorFactory to the map
            acc[d] = {
                package: v,
                factory: factory.getRunner,
                options: factory.options,
                testConnection: factory.testConnection,
                processSource: /** @type {*} **/ factory.processSource // We can't really validate AsyncIterator output
            };
        });
        // Return the updated package map as a promise
        return acc;
    }, Promise.resolve({}));
}










/**
 * Replaces all ${var} patterns in a string with the matching EVIDENCE_VAR__[var] environment variables
 * @param {string} queryString
 * @returns {string}
 */ const $be752f309603a5f7$export$6b7c6caefc6b3d49 = (queryString)=>{
    const envPrefix = "EVIDENCE_VAR__";
    if (queryString.length > 1048576) {
        if (process.env.VITE_EVIDENCE_DEBUG) console.log(`Skipping variable interpolation for file; has more than ${1048576} characters`);
        return queryString;
    }
    const validVars = Object.fromEntries(Object.entries(process.env).filter(([k])=>k.startsWith(envPrefix)).map(([k, v])=>{
        const name = k.substring(envPrefix.length);
        const value = v?.toString();
        return [
            name,
            value
        ];
    }));
    let output = queryString;
    // This regex is prefixed with a negative lookbehind to disqualify $${var} patterns
    const regex = RegExp(/(?<!\$)\$\{(.+?)\}/, "g");
    let match;
    while((match = regex.exec(queryString)) !== null){
        const fullMatch = match[0]; // e.g. ${variable}
        const varName = match[1]; // e.g. variable
        const start = match.index;
        const end = match[0].length + start;
        if (varName in validVars && validVars[varName]) {
            const value = validVars[varName];
            if (!value) throw new Error("Value somehow became undefined");
            const before = output.substring(0, start);
            const after = output.substring(end);
            output = `${before}${value}${after}`;
        } else console.warn(`Missed substition for ${fullMatch}, do you need to set EVIDENCE_VAR__${varName}?`);
    }
    output = output.replaceAll("$${", "${");
    return output;
};


/**
 * @param {string} directory
 * @returns {Promise<SourceDirectory>}
 */ const $48d1c8d6ba814db5$var$buildSourceDirectory = async (directory)=>{
    /** @type {SourceDirectory} */ const output = {};
    for (const f of (await (0, $759k8$fspromises).readdir(directory, {
        withFileTypes: true
    })))if (f.isDirectory()) output[f.name] = await $48d1c8d6ba814db5$var$buildSourceDirectory((0, $759k8$path).join(directory, f.name));
    else /**
			 * @param {boolean} [disableInterpolation = false]
			 * @returns {Promise<string>}
			 */ output[f.name] = async (disableInterpolation)=>{
        const content = await (0, $759k8$fspromises).readFile((0, $759k8$path).join(directory, f.name), {
            encoding: "utf-8"
        });
        if (disableInterpolation) return content;
        else return (0, $be752f309603a5f7$export$6b7c6caefc6b3d49)(content);
    };
    return output;
};
const $48d1c8d6ba814db5$export$53c7a8f067b9e2ba = async (sources, dataPath, metaPath, filters, batchSize = 1000000)=>{
    await (0, $759k8$fspromises).stat(dataPath).catch(async (e)=>{
        if (e.message.startsWith("ENOENT")) {
            await (0, $759k8$fspromises).mkdir(dataPath, {
                recursive: true
            });
            if (process.env.VITE_EVIDENCE_DEBUG) console.log("Created data path at ", (0, $759k8$path).resolve(dataPath));
        } else throw e;
    });
    await (0, $759k8$fspromises).stat(metaPath).catch(async (e)=>{
        if (e.message.startsWith("ENOENT")) {
            await (0, $759k8$fspromises).mkdir(metaPath, {
                recursive: true
            });
            if (process.env.VITE_EVIDENCE_DEBUG) console.log("Created meta path at ", (0, $759k8$path).resolve(metaPath));
        } else throw e;
    });
    const plugins = await (0, $99d4f87e5e8a9988$export$8fbb278aab496aa6)();
    const existingHashes = await (0, $af8aba1548cdc66e$export$242ed7dd39449d16)(metaPath);
    /** @type {Record<string, string[]>} */ const manifest = {};
    /** @type {Record<string, string[]>} */ const existingManifest = await (0, $af8aba1548cdc66e$export$d113f6dd5d5b70e0)(dataPath).then((r)=>r.renderedFiles);
    /** @type {Record<string, Record<string, string | null>>} */ const hashes = {};
    for (const source of sources){
        console.log((0, $759k8$chalk).bold(`Processing ${source.name}`));
        const sourceManifest = existingManifest[source.name] ?? [];
        // For building the manifest
        /** @type {string[]} */ const outputFilenames = [];
        hashes[source.name] = {};
        if (filters?.sources && !filters.sources.has(source.name)) {
            console.log((0, $759k8$chalk).yellow(`[!] Skipping filtered source ${source.name}`));
            hashes[source.name] = existingHashes[source.name] ?? {}; // passthrough hashes
            manifest[source.name] = existingManifest[source.name] ?? [];
            continue;
        }
        const targetPlugin = plugins[source.type];
        if (!targetPlugin) {
            console.log((0, $759k8$chalk).yellow(`[!] Unable to process source ${source.name}; no source connector found for ${source.type}`));
            (0, $759k8$logQueryEvent)("source-connector-not-found", source.type, source.name);
            hashes[source.name] = existingHashes[source.name];
            continue;
        }
        const connectionValid = await targetPlugin.testConnection(source.options, source.sourceDirectory);
        if (connectionValid !== true) {
            (0, $759k8$logQueryEvent)("db-connection-error", source.type, source.name);
            throw new Error((0, $759k8$chalk).red(`[!] ${(0, $759k8$chalk).bold(source.name)} failed to connect; ${connectionValid.reason}`));
        }
        //TODO evidence-1344 and db-connection-error didn't have an equivalent for event in legacy
        (0, $759k8$logQueryEvent)("db-connection-success", source.type, source.name);
        const utils = {
            /**
			 * @param {string} name
			 * @param {string} content
			 */ isCached: (name, content)=>{
                const hash = (0, $759k8$createHash1)("md5").update(content).digest("hex");
                return existingHashes[source.name]?.[name] === hash;
            },
            /**
			 * @param {string} name
			 * @returns {boolean} true if query is included in filters
			 */ isFiltered: (name)=>Boolean(filters?.queries?.has(name) || filters?.queries?.has(`${source.name}.${name}`)) || !filters?.queries,
            /**
			 * @param {string} name
			 * @param {string} content
			 * @returns {boolean}
			 */ shouldRun: (name, content)=>!utils.isFiltered(name) && Boolean(filters?.only_changed) && !utils.isCached(name, content),
            /**
			 * @param {string} name
			 * @param {string} content
			 */ addToCache: (name, content)=>hashes[source.name][name] = (0, $759k8$createHash1)("md5").update(content).digest("hex")
        };
        if (targetPlugin.processSource) {
            // Advanced Source
            const sourceIterator = targetPlugin.processSource(source.options, await $48d1c8d6ba814db5$var$buildSourceDirectory(source.sourceDirectory), utils);
            for await (const table of sourceIterator){
                // Flush this source
                const spinner = (0, $759k8$ora)({
                    prefixText: `  ${table.name}`,
                    spinner: "triangle",
                    discardStdin: false,
                    interval: 250
                });
                try {
                    spinner.start("Processing...");
                    if (!utils.isFiltered(table.name)) {
                        spinner.warn("Skipping: Filtered");
                        hashes[source.name][table.name] = existingHashes[source.name]?.[table.name]; // passthrough hashes
                        const existingManifestUrl = sourceManifest.find((existingPath)=>(0, $759k8$path).basename(existingPath, ".parquet") === table.name);
                        if (existingManifestUrl) outputFilenames.push(existingManifestUrl);
                        else spinner.warn("Skipping: Filtered (table does not exist yet)");
                        continue;
                    }
                    if (filters?.only_changed && utils.isCached(table.name, table.content)) {
                        spinner.warn("Skipping: Cached");
                        hashes[source.name][table.name] = existingHashes[source.name]?.[table.name]; // passthrough hashes
                        const existingManifestUrl = sourceManifest.find((existingPath)=>(0, $759k8$path).basename(existingPath, ".parquet") === table.name);
                        if (existingManifestUrl) outputFilenames.push(existingManifestUrl);
                        else spinner.warn("Skipping: Filtered (cache may be broken)");
                        (0, $759k8$logQueryEvent)("cache-query", source.type, source.name);
                        continue;
                    }
                    hashes[source.name][table.name] = (0, $759k8$createHash1)("md5").update(table.content ?? "").digest("hex");
                    const filename = await $48d1c8d6ba814db5$var$flushSource(source, {
                        name: table.name,
                        filepath: (0, $759k8$path).join(source.sourceDirectory, table.name),
                        content: table.content,
                        hash: hashes[source.name][table.name]
                    }, table, dataPath, metaPath, batchSize, spinner);
                    if (filename) outputFilenames.push(filename);
                } catch (e) {
                    let message = "Unknown error occurred";
                    if (typeof e === "string") message = e;
                    else if (e instanceof Error) message = e.message.toString();
                    spinner.fail((0, $759k8$chalk).bold.red(message));
                    if (process.env.VITE_EVIDENCE_DEBUG && e instanceof Error) console.log(e.stack);
                }
            }
        } else {
            // Simple Source
            // Load and iterate through query files
            const queries = await (0, $af8aba1548cdc66e$export$ecae802dba8a1831)(source.sourceDirectory, await (0, $759k8$fspromises).readdir(source.sourceDirectory));
            const runner = await targetPlugin.factory(source.options, source.sourceDirectory);
            for (const query of queries){
                const spinner = (0, $759k8$ora)({
                    prefixText: `  ${query.name}`,
                    spinner: "triangle",
                    discardStdin: false,
                    interval: 250
                });
                try {
                    spinner.start("Processing...");
                    if (!utils.isFiltered(query.name)) {
                        spinner.warn("Skipping: Filtered");
                        hashes[source.name][query.name] = existingHashes[source.name]?.[query.name]; // passthrough hashes
                        const existingManifestUrl = sourceManifest.find((existingPath)=>(0, $759k8$path).basename(existingPath, ".parquet") === query.name);
                        if (existingManifestUrl) outputFilenames.push(existingManifestUrl);
                        else spinner.warn("Skipping: Filtered (table does not exist yet)");
                        continue;
                    }
                    if (filters?.only_changed && utils.isCached(query.name, query.content ?? "")) {
                        spinner.warn("Skipping: Cached");
                        (0, $759k8$logQueryEvent)("cache-query", source.type, source.name, query.name);
                        hashes[source.name][query.name] = existingHashes[source.name]?.[query.name]; // passthrough hashes
                        const existingManifestUrl = sourceManifest.find((existingPath)=>(0, $759k8$path).basename(existingPath, ".parquet") === query.name);
                        if (existingManifestUrl) outputFilenames.push(existingManifestUrl);
                        else spinner.warn("Skipping: Filtered (cache may be broken)");
                        continue;
                    }
                    hashes[source.name][query.name] = (0, $759k8$createHash1)("md5").update(query.content ?? "").digest("hex");
                    /** @type {QueryResult | null} */ let result;
                    try {
                        const interpolatedContent = query.content ? (0, $be752f309603a5f7$export$6b7c6caefc6b3d49)(query.content) : query.content;
                        const _r = runner(interpolatedContent, query.filepath, batchSize);
                        if (_r instanceof Promise) {
                            result = await _r.catch((e)=>{
                                if (e instanceof (0, $759k8$z).ZodError) {
                                    (0, $759k8$logQueryEvent)("db-error", source.type, source.name, query.name);
                                    console.log(e.format());
                                } else throw e;
                                return null;
                            });
                            if (result) (0, $759k8$logQueryEvent)("db-query", source.type, source.name, query.name);
                        } else {
                            result = _r;
                            (0, $759k8$logQueryEvent)("db-query", source.type, source.name, query.name);
                        }
                    } catch (e) {
                        (0, $759k8$logQueryEvent)("db-error", source.type, source.name, query.name);
                        if (e instanceof (0, $759k8$z).ZodError) console.log((0, $b149e274c2c62b4b$export$71e7d3deffa0730b)(e.format()));
                        else throw e;
                        result = null;
                    }
                    if (result === null) {
                        spinner.warn(`Finished. Returned no results!`);
                        continue;
                    }
                    if (result === null) continue;
                    const filename = await $48d1c8d6ba814db5$var$flushSource(source, query, result, dataPath, metaPath, batchSize, spinner);
                    if (filename) outputFilenames.push(filename);
                } catch (e) {
                    let message = "Unknown error occurred";
                    if (typeof e === "string") message = e;
                    else if (e instanceof Error) message = e.message.toString();
                    spinner.fail((0, $759k8$chalk).bold.red(message));
                    if (process.env.VITE_EVIDENCE_DEBUG && e instanceof Error) console.log(e.stack);
                }
            }
        }
        manifest[source.name] = outputFilenames;
    }
    await (0, $af8aba1548cdc66e$export$f2b0793804f52a8f)(metaPath, hashes);
    await (0, $af8aba1548cdc66e$export$7854670c66555fc6)(dataPath, hashes);
    return manifest;
};
/**
 *
 * @param {DatasourceSpec} source
 * @param {DatasourceQuery} query
 * @param {QueryResult} result
 * @param {string} dataPath
 * @param {string} metaPath
 * @param {number} batchSize
 * @param {import("ora").Ora} [spinner]
 * @returns {Promise<null | string>}
 */ const $48d1c8d6ba814db5$var$flushSource = async (source, query, result, dataPath, metaPath, batchSize, spinner)=>{
    const logOut = /** @param {string} t **/ (t)=>spinner ? spinner.text = t : console.log(t);
    // use `Date.now()` to ensure data is updated
    const dataOutDir = (0, $759k8$path).join(dataPath, source.name, query.name, query.hash ?? "", Date.now().toString());
    const parquetFilename = (0, $759k8$path).join(dataOutDir, query.name + ".parquet");
    const schemaFilename = (0, $759k8$path).join(dataOutDir, query.name + ".schema.json");
    const tmpDir = (0, $759k8$path).join(metaPath, "intermediate-parquet", source.name, query.name);
    // Make sure the directories exist
    await (0, $759k8$fspromises).mkdir(dataOutDir, {
        recursive: true
    });
    await (0, $759k8$fspromises).mkdir(tmpDir, {
        recursive: true
    });
    const rows = /** @type {any[] | Generator<any[]>} */ result.rows;
    if ((result.expectedRowCount ?? -1) > 1000000) logOut((0, $759k8$chalk).yellow(`Expected row count is ~${result.expectedRowCount?.toLocaleString()}`));
    else if (result.expectedRowCount) logOut(`Expected row count is ~${result.expectedRowCount?.toLocaleString()}`);
    // Spinner start
    // Disable the console for a moment, stack up and then print everything after?
    const writtenRows = await (0, $759k8$buildMultipartParquet)(result.columnTypes, rows, tmpDir, dataOutDir, query.name + ".parquet", result.expectedRowCount, batchSize);
    // Spinner stop?
    if (!writtenRows) {
        (spinner?.warn.bind(spinner) ?? console.warn)((0, $759k8$chalk).yellow(`Finished. 0 rows, did not create table`));
        return null;
    } else (spinner?.succeed.bind(spinner) ?? console.log)(`Finished. ${writtenRows} rows`);
    await (0, $759k8$fspromises).writeFile(schemaFilename, JSON.stringify(result.columnTypes));
    return parquetFilename;
};










const $91a2cedf7956f292$export$c9aef407cb9eccf9 = (/** @type {OptsObject} */ opts, /** @type {DatasourceOptionsSpec} */ spec)=>{
    /** @type {*} */ let secretOut = {};
    /** @type {*} */ let varOut = {};
    if (typeof opts !== "object" || !opts) {
        console.warn(`Error processing options`);
        return {
            secret: {},
            _var: {}
        };
    }
    for (const [key, value] of Object.entries(spec)){
        if (value.virtual) continue;
        const metakey = `_${key}`;
        /** @type {string | number | boolean | symbol } */ const valuekey = value.children && value.nest ? metakey : key;
        if (value.children) {
            /** @type {string | number | boolean | object} */ const optsValueKey = opts[valuekey];
            if (typeof optsValueKey === "object") continue;
            // We don't have any spec for this child value
            if (optsValueKey === undefined) continue;
            const targetSpec = value.children[optsValueKey.toString()];
            if (targetSpec) {
                // The current value for this field has children
                if (value.nest) {
                    const optKey = opts[key];
                    if (typeof optKey !== "object") continue;
                    // Recurse, looking at the nested options object
                    const { secret: secret, _var: _var } = $91a2cedf7956f292$export$c9aef407cb9eccf9(optKey, targetSpec);
                    varOut[key] = _var;
                    secretOut[key] = secret;
                } else {
                    // Recurse, applying the child schema to the same options object
                    const { secret: secret, _var: _var } = $91a2cedf7956f292$export$c9aef407cb9eccf9(opts, targetSpec);
                    varOut = (0, $759k8$lodashmerge)(varOut, _var);
                    secretOut = (0, $759k8$lodashmerge)(secretOut, secret);
                    if (value.secret) secretOut[key] = opts[key];
                    else varOut[key] = opts[key];
                }
            } else if (value.secret) secretOut[key] = opts[key];
            else varOut[key] = opts[key];
        } else if (value.secret) secretOut[key] = opts[key];
        else varOut[key] = opts[key];
    }
    return {
        secret: secretOut,
        _var: varOut
    };
};
async function $91a2cedf7956f292$export$d9cb2880d49b2e12(newOptions, sourceDir) {
    const sourcePath = newOptions.sourceDirectory ?? (0, $759k8$path).join(sourceDir, newOptions.name);
    const sourceDirectories = await (0, $759k8$fspromises).readdir(sourceDir);
    if (!sourceDirectories.includes(newOptions.name) && !sourceDirectories.includes(sourcePath.split((0, $759k8$path).sep).pop())) await (0, $759k8$fspromises).mkdir(sourcePath);
    const sourceDirContent = await (0, $759k8$fspromises).readdir(sourcePath);
    const connYamlPath = (0, $759k8$path).join(sourcePath, "connection.yaml");
    const optsYamlPath = (0, $759k8$path).join(sourcePath, "connection.options.yaml");
    if (!sourceDirContent.includes("connection.yaml")) await (0, $759k8$fspromises).writeFile(connYamlPath, `# This file was automatically generated
name: ${newOptions.name}
type: ${newOptions.type}`);
    if (!sourceDirContent.includes("connection.options.yaml")) await (0, $759k8$fspromises).writeFile(optsYamlPath, "");
    return {
        connYamlPath: connYamlPath,
        optsYamlPath: optsYamlPath
    };
}
async function $91a2cedf7956f292$export$6e642c641a02853(newOptions, plugins) {
    /** @param {*} o */ const denull = (o)=>Object.fromEntries(Object.entries(o).filter(([, v])=>v !== null && v !== undefined));
    // First; we need to divy this up into secret, and non secret values
    const usedPlugin = plugins[newOptions.type];
    const { secret: secret, _var: vars } = $91a2cedf7956f292$export$c9aef407cb9eccf9(denull(newOptions.options), usedPlugin.options);
    // Then; we need to check if the folder already exists; and if it does, load the existing
    // connection.yaml and connection.options.yaml
    const sourceDir = await (0, $af8aba1548cdc66e$export$46a3b0a4d36b05de)();
    if (!sourceDir) throw new Error("Unable to locate sources directory");
    const { optsYamlPath: optsYamlPath, connYamlPath: connYamlPath } = await $91a2cedf7956f292$export$d9cb2880d49b2e12(newOptions, sourceDir);
    const connYamlContent = await (0, $759k8$fspromises).readFile(connYamlPath, {
        encoding: "utf8"
    }).then((r)=>(0, $759k8$yaml).parse(r));
    const mergedConnYaml = (0, $759k8$lodashmerge)({
        ...connYamlContent,
        options: undefined
    }, {
        options: vars,
        name: newOptions.name
    });
    const mergedOptsYaml = secret;
    await (0, $759k8$fspromises).writeFile(connYamlPath, `# This file was automatically generated\n${(0, $759k8$yaml).stringify(denull(mergedConnYaml))}`);
    const optsYamlContent = (0, $759k8$yaml).stringify((0, $bac3c49151dbadcb$export$1867e32d63096a84)(denull(mergedOptsYaml)));
    await (0, $759k8$fspromises).writeFile(optsYamlPath, `# This file was automatically generated\n# It should *not* be source controlled, as it likely contain credentials or other sensitive configuration values.\n# Values in this file are base64 encoded; https://it-tools.tech/base64-string-converter has an excellent encoder / decoder tool.\n# Base64 is NOT encryption, and should not be treated as secure\n${optsYamlContent}`);
    const updatedSource = (await (0, $f539f6c5eeecdbe7$export$879d136fda7cc063)(sourceDir)).find((r)=>r.name === newOptions.name);
    if (!updatedSource) throw new Error(`Failed to locate datasource after update`);
    return updatedSource;
}



/**
 *
 * @param {Record<string, string[]>} outputFiles
 * @param {string} outDir
 */ async function $f539f6c5eeecdbe7$var$updateManifest(outputFiles, outDir) {
    await (0, $759k8$fspromises).mkdir(outDir, {
        recursive: true
    });
    await (0, $759k8$fspromises).writeFile((0, $759k8$path).join(outDir, "manifest.json"), JSON.stringify({
        renderedFiles: outputFiles
    }));
}
/**
 * @param {string} sourceName - The name of the source.
 * @param {object} sourceConfig - The configuration options for the source.
 * @returns {Record<string,string>} - An object containing environment variables for the source.
 */ const $f539f6c5eeecdbe7$var$generateSourceEnvironmentVariables = (sourceName, sourceConfig)=>{
    /** @type {Record<string,string>} */ const sourceEnvVars = {};
    // Recursively generate environment variables for nested properties
    /**
	 * @param {any} obj
	 */ const generateNestedEnvVars = (obj, currentKey = "")=>{
        for (const [key, value] of Object.entries(obj)){
            const newKey = currentKey ? `${currentKey}__${key}` : key;
            if (typeof value === "object") generateNestedEnvVars(value, newKey);
            else sourceEnvVars[`EVIDENCE_SOURCE__${sourceName}__${newKey}`] = value.toString();
        }
    };
    // Start generating environment variables for the source
    generateNestedEnvVars(sourceConfig);
    return sourceEnvVars;
};
async function $f539f6c5eeecdbe7$export$879d136fda7cc063(datasourceDir) {
    datasourceDir = datasourceDir ?? await (0, $af8aba1548cdc66e$export$46a3b0a4d36b05de)() ?? undefined;
    if (!datasourceDir) throw new Error("missing sources directory");
    const sources = await (0, $af8aba1548cdc66e$export$5f9bc633b116660f)(datasourceDir);
    return sources.map((s)=>({
            ...s,
            environmentVariables: $f539f6c5eeecdbe7$var$generateSourceEnvironmentVariables(s.name, s.options)
        }));
}
async function $f539f6c5eeecdbe7$export$76919addde332833(dataPath, metaPath, filters = {
    sources: null,
    queries: null,
    only_changed: false
}) {
    const sourceDir = await (0, $af8aba1548cdc66e$export$46a3b0a4d36b05de)(true);
    if (!sourceDir) throw new Error();
    const sources = await (0, $af8aba1548cdc66e$export$5f9bc633b116660f)(sourceDir);
    const manifest = await (0, $48d1c8d6ba814db5$export$53c7a8f067b9e2ba)(sources, dataPath, metaPath, filters);
    await $f539f6c5eeecdbe7$var$updateManifest(manifest, dataPath);
    return manifest;
}





export {$fdb25277a913487b$export$4afb816e967c52c1 as evidencePlugins, $e526a4a26d12962f$export$1337da85e733ac15 as evidenceRollup, $3da0ffcef202771e$export$d3b7ff3323bf7d88 as evidenceVitePlugin, $f539f6c5eeecdbe7$export$879d136fda7cc063 as getDatasourceOptions, $f539f6c5eeecdbe7$export$76919addde332833 as updateDatasourceOutputs, $99d4f87e5e8a9988$export$8fbb278aab496aa6 as getDatasourcePlugins, $91a2cedf7956f292$export$6e642c641a02853 as updateDatasourceOptions, $786b95c585cb8ead$export$e0cbf1bbd256fc2f as DatasourceSpecFileSchema, $786b95c585cb8ead$export$1c674577bd1f83c0 as DatasourceSpecSchema, $b149e274c2c62b4b$export$71e7d3deffa0730b as cleanZodErrors};
//# sourceMappingURL=index.mjs.map
