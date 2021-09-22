module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,

    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/wknd-asset-share/clientlibs",

    libs: [
        {
            name: "clientlib-site",
            allowProxy: true,
            categories: ["wknd-asset-share.theme"],
            embed: ["asset-share-commons.site.semantic-ui","asset-share-commons.site.semantic-ui.components"],
            dependencies: ["asset-share-commons.base"],
            serializationFormat: "xml",
            cssProcessor : ["default:none", "min:none"],
            jsProcessor: ["default:none", "min:none"],
            assets: {
                js: [
                    "dist/semanticui-theme/js/vendors~site.*.js",
                    "dist/semanticui-theme/js/site.*.js"
                ],
                css: [
                    "dist/semanticui-theme/css/vendors~site.*.css",
                    "dist/semanticui-theme/css/site.*.css"
                ],
                resources: {
                    cwd: "./resources",
                    flatten: false,
                    files: ["**/*.*"]
                }
            }
        }
    ]
};
