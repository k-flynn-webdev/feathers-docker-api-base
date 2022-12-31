import * as dotenv from 'dotenv';

dotenv.config();

export const envHostPort = (app) => {
  ['PORT', 'HOST'].forEach((item) => {
    if (app.get(item.toLowerCase()) && process.env[item]) {
      app.set(item.toLowerCase(), process.env[item])
    }
  })
}
