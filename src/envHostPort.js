import * as dotenv from 'dotenv';

dotenv.config();

export const envHostPort = (app) => {
  ['port', 'host'].forEach((item) => {
    if (app.get(item) && process.env[item]) {
      app.set(item, process.env[item])
    }
  })
}
