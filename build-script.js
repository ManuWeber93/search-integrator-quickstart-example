import SearchIntegrator from "search-integrator/src/main/search-integrator.js";

const config = {
    inputDirectories: [
        {
            inputDirectory: "./my-input-directory"
        }
    ],
    outputBaseDirectory: "./output",
    baseUrl: "http://localhost:63342/search-integrator-quickstart-example/output",
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
