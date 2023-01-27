const database = require ('../src/db');
const app = require('../src/app');

app.listen(process.env.PORT, () => {
    console.log('App is running' + process.env.PORT);

})