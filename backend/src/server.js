const database = require ('../src/db');
const app = require('../src/app');
const settingsRepository = require('./repositories/settingsRepository');
const appEm = require ('./app-em');
const appWs =require ('./app-ws');

settingsRepository.getDefaultSettings()
    .then(settings => {
        const server = app.listen(process.env.PORT, () => {
            console.log('App is running', process.env.PORT);
        
        })
        
        const wss = appWs(server);
        appEm(settings, wss);
    })
    .catch(err => {
        console.error(err);

    })
