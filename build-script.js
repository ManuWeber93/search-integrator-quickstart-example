import SearchIntegrator from "search-integrator/src/main/search-integrator.js";
import * as fs from "fs";

const config = {
    inputDirectories: [
        {
            inputDirectory: "./my-input-directory"
        }
    ],
    outputBaseDirectory: "./output",
    baseUrl: "http://localhost:3000",
    integratorConfig: {
        htmlComponentIntegrations: [
            {
                pathToComponent: "./search-component.html"
            }
        ],
        scriptIntegrations: [
            {
                pathToScript: "./search-component.js",
                module: true
            }
        ]
    }
}

const searchIntegrator = new SearchIntegrator(config);
await searchIntegrator.integrateSearch();

fs.copyFileSync("search-component.js", "output/search-component.js");
