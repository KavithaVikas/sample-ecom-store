let express = require('express');
let router = express.Router();
let apiWrapper = require('../apiWrapper');
let getAuthToken = require('../getAuthToken');


router.post('/', function (req, res) {

    console.log("SAVE REACHED***");
    getAuthToken.then(function(response){
        apiWrapper.requestAPI({
            method:'POST',
            url:'https://api.moltin.com/v2/products',
            data:req.body,
            headers:{
                'Authorization': authToken
            }
    
        })
    

    })

    
 
});
module.exports = router;