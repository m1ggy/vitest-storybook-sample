import express from "express";
import Router from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
(() => {
    const app = express();
    const PORT = 4004;
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        console.log("NEW REQUEST: ", req.method);
        next();
    });
    app.use("/api/v1/", Router);
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})();
