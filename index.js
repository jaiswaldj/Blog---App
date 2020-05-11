// this is needed for importing expressjs into our aapplication
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
//decalaring an instance or creating an application instance
const app = express()
const port = 3000

// Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (-file.indexof('.js')) {
        console.log("including the following file");
        console.log(routesPath+'/'+file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});
// end bootstrap route

// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (-file.indexOf('.js')) require(modelsPath + '/' + file)
})
// end Bootstrap models
fs.readdirSync(modelsPath).forEach(function (file) {
    if (-file.indexOf('.js')) require(modelsPath + '/' + file)
})
// end Bootstrap models



///end database code here


//listening the server creating a local server
app.listen(appConfig.port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    //creating the mongo db connection here
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true });

})


// handling mongoose connection error
mongoose.connection.on('error', function (err){
    console.log('database connection error');
    console.log(err)

}); // end mongoose connection error

//handling mongoose success event
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database connection open success");
    
    
    } else {
        console.log("database connection open success");
    }
    
}); // end mongoose connection open handler