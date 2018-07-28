let express = require('express');
let router = express.Router();
let APIWrapper = require('../apiWrapper');



router.post('/', function (req, res) {

    console.log("SAVE REACHED***");
    console.log(req.body);
    let authToken = "Bearer " + "4bfc0f81a323fa0ffeef8d28a135e01cdd95a954";
    
    // getAuthToken().then(function(response){
        // APIWrapper.requestAPI({
        //     method:'POST',
        //     url:'https://api.moltin.com/v2/products',
        //     data:req.body,
        //     headers:{
        //         'Authorization': authToken,
        //         'Content-Type':'application/json',
        //         'json':true
        //     }
    
        // }).then(function(response){

        // }).then(function(error){
        //    console.log(error);
        // })
        let mockResult = 
            {
                "data": {
                    "type": "product",
                    "id": "e41f25d8-a2c2-4af2-b316-364f3fc8048d",
                    "name": "Deck Shoe",
                    "slug": "deck-shoe_33",
                    "sku": "deck-shoe_33",
                    "manage_stock": false,
                    "description": "Modern boat shoes were invented in 1935 by American Paul A. Sperry",
                    "price": [
                        {
                            "amount": 5891,
                            "currency": "USD",
                            "includes_tax": true
                        }
                    ],
                    "status": "live",
                    "commodity_type": "physical",
                    "relationships": {},
                    "meta": {
                        "display_price": {
                            "with_tax": {
                                "amount": 5891,
                                "currency": "USD",
                                "formatted": "$58.91"
                            },
                            "without_tax": {
                                "amount": 5891,
                                "currency": "USD",
                                "formatted": "$58.91"
                            }
                        },
                        "stock": {
                            "level": 0,
                            "availability": "out-stock"
                        }
                    }
                }
            }

            res.status(200).send(mockResult.data);
        
    

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