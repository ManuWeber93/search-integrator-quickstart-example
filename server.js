import path from "path"
import express from "express";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("output"));

app.listen(port, () => {
    console.log(`Webserver is listening at http://localhost:${port}`);
});
