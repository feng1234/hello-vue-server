import * as express from "express";
import * as path from "path";
import * as http from "http";
import apiRouter from "./routes/apiRouter";

export default class App{
    private express:express.Application;

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(){
        this.express.set("port", process.env.PORT || 3000);
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.static(path.join(__dirname, "public")));

    }

    private routes(){
        this.express.use("/", apiRouter);
    }

    public launch(){
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