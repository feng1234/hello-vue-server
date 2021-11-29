import { NextFunction, Request, Response, Router } from "express";


class Api {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.get("/", this.getApi);
  }

  private getApi(req: Request, res: Response){
    res.json({title:"hello world"});
  };
}

const apiRoutes = new Api();
export default apiRoutes.router;
