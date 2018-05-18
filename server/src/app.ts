import * as express from 'express';
import {Express} from 'express';
import {RoutesManager} from './routes';
import * as bodyParser from 'body-parser';

export class App {

  public app: Express;

  constructor() {
    this.app = express();
  }

  public init(port: any = 3000): void {

    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(bodyParser.json());

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', '*');

      next();
    });

    this.app.listen(port, (err) => {

      if (err) {
        console.log(err);
        return;
      }

      new RoutesManager(this.app);

      console.log(`server is listening on ${port}`);
    });
  }
}
