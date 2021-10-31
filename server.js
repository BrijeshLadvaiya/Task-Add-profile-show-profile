const express = require('express');
const app = express();
const router = require('./route');
const path = require('path');
app.use(express.urlencoded({extended : false}))
app.use('/templates',express.static(path.join(__dirname,'templates')));
app.use('/profile',router);
app.listen(5501,()=>{
 console.log("server running on port 5501");
});
