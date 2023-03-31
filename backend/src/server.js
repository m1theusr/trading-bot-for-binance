const database = require ('../src/db');
const app = require('../src/app');
const settingsRepository = require('./repositories/settingsRepository');

settingsRepository.getSettings(1)
    .then(settings => {
         
    })
    .catch(err => {

    })
app.listen(process.env.PORT, () => {
    console.log('App is running', process.env.PORT);

})