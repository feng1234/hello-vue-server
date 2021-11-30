"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Api {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get("/", this.getApi);
    }
    getApi(req, res) {
        res.json({ title: "hello world" });
    }
    ;
}
const apiRoutes = new Api();
exports.default = apiRoutes.router;
//# sourceMappingURL=apiRouter.js.map