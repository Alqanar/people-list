import {createBrowserHistory} from "history";


declare const process: {
  env: {
    NODE_ENV: string;
  };
};

const baseName = process.env.NODE_ENV === `production` ? `/people-list` : `/`;

export default createBrowserHistory({basename: baseName});
