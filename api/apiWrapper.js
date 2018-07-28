
var axios = require('axios');

var apiWrapper = {
    requestAPI: function (options) {
        
        return new Promise((resolve, reject) => {
          
            axios({
                'method': options.method,
                'url': options.url,
                'data': options.data || {},
                'headers': options.headers || {},
                'params': options.params || {},
                'paramsSerializer': options.paramsSerializer
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }
}



module.exports = apiWrapper;
