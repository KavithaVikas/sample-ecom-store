let express = require('express');
let router = express.Router();
let APIWrapper = require('../apiWrapper');



router.post('/', function (req, res) {

    console.log("SAVE REACHED***");
    console.log(req.body);
    let authToken = "Bearer " + "4bfc0f81a323fa0ffeef8d28a135e01cdd95a954";
    
    // getAuthToken().then(function(response){
        APIWrapper.requestAPI({
            method:'POST',
            url:'https://api.moltin.com/v2/products',
            data:req.body,
            headers:{
                'Authorization': authToken,
                'Content-Type':'application/json',
                'json':true
            }
    
        }).then(function(response){

        }).then(function(error){
           console.log(error);
        })
    

    // })

    
 
});

function getAuthToken() {
    console.log("GET AUTH TOKEN ****");
    return new Promise(function (resolve, reject) {

        let params = {
            "client_id": '4pOkf3t9KsI0GrUtzMPWzg9IVPrSQ9ThJbIdVpOvl8',
            "client_secret": 'irGeAthNQI3EJhdwEV6CB0KvW45PAOd0egCCgMd10P',
            "grant_type": 'client_credentials'
        }

        APIWrapper.requestAPI({
            method: 'POST',
            url: 'https://api.moltin.com/oauth/access_token',
            data:{
                "client_id": '4pOkf3t9KsI0GrUtzMPWzg9IVPrSQ9ThJbIdVpOvl8',
                "client_secret": 'irGeAthNQI3EJhdwEV6CB0KvW45PAOd0egCCgMd10P',
                "grant_type": 'client_credentials' 
            }
        }).then(function (response) {
            console.log("Response Data***")
            resolve(response);

        }).catch(function (error) {
            console.log(error);
            reject(error);
        })

    })
}
module.exports = router;