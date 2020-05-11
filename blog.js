const express = require('express')
const blogController = require('./../controller/blogs')


let setRouter = (app) => {

app.get('/test/route/:param1/:param2',blogController.testRoute);
app.get('/example',printExample,blogController.testQuery);
app.post('/test/body',blogController.testBody);


}//end setRouter function

module.exports = {
    setRouter : setRouter
}