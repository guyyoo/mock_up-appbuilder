import path from "path";
import express from "express";

const PATH_ROOT = path.join(process.cwd(), "cli", "public");

const app = express();

app.use(express.static(PATH_ROOT));

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: PATH_ROOT});
})

export default app;