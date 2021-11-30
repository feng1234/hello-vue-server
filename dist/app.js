"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const http = require("http");
const apiRouter_1 = require("./routes/apiRouter");
const cors = require("cors");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.set("port", process.env.PORT || 3001);
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        // 设置跨域
        this.express.use(cors());
        this.express.use(express.static(path.join(__dirname, "public")));
    }
    routes() {
        this.express.use("/", apiRouter_1.default);
    }
    launch() {
        const server = http.createServer(this.express);
        server.listen(this.express.get("port"), () => {
            // tslint:disable-next-line:no-console
            console.log(("  App is running at http://localhost:%d \
            in %s mode"), this.express.get("port"), this.express.get("env"));
            // tslint:disable-next-line:no-console
            console.log("  Press CTRL-C to stop\n");
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map