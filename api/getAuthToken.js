const APIWrapper = require('./apiWrapper');

function getAuthToken() {
    return new Promise(function (resolve, reject) {

        let params = {
            client_id: '4pOkf3t9KsI0GrUtzMPWzg9IVPrSQ9ThJbIdVpOvl8',
            client_secret: 'irGeAthNQI3EJhdwEV6CB0KvW45PAOd0egCCgMd10P',
            grant_type: 'client_credentials'
        }

        APIWrapper.requestAPI({
            method: 'POST',
            url: 'https://api.moltin.com/oauth/access_token',
            data: params
        }).then(function (response) {
            console.log("Response Data***")


        }).catch(function (error) {
            console.log(error);
        })

    })
}

module.exports = {
    getAuthToken: getAuthToken
}