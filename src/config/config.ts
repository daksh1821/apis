import {config as conf} from 'dotenv';
conf();
const _config = {
    PORT:process.env.PORT,
    dburl: process.env.MONGO_URI,
}

export const config = Object.freeze(_config);