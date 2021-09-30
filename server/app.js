/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
let data      = require('./data');
data = data.map(i=>({...i,'searchText':i.name.toLowerCase()}))
const express = require('express');
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
//const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;
app.use(cors());
app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */

app.get('/searchProducts', function (req, res) {
    
    let {searchText,limit,offset}=req.query;
    if(!searchText){
        searchText='';
    }
    if(!limit){
        limit=20; //default search limit:10
    }
    if(!offset){
        offset=0;
    }
    const searchData = data.filter(i=>i.searchText.includes(searchText.toLowerCase()));
    const totalCount=searchData.length;
    const filteredData=searchData.slice(offset,limit);
    return res.end( JSON.stringify({totalCount,data:filteredData}));
 })
 
 app.use('/img/products', express.static('.local_server/img/products'));
 
 app.listen(port, function () {
     console.log(`[Server running on ${hostname}:${port}]`);
 })

 
