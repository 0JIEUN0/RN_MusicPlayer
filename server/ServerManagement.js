import axios from 'axios';

var accessTokenByClientCredentialsFlow = ''

export const handelGetAccessToken = async (url, headers, body) => {
    var qs = require('qs');
    var data = qs.stringify(body);
    var config = {
        method: 'post',
        url: url,
        headers: headers,
        data : data
    };

    await axios(config)
    .then(function (response) {
        // handle success
        console.log("success")
        console.log(JSON.stringify(response.data));
        console.log(response.headers)
        accessTokenByClientCredentialsFlow = response.data['access_token']
        return response
    })
    .catch(function (error) {
        console.log(error);
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.message);
        }
        return undefined
    });
}

export const handelApiRequest = async (uri, method, headers, body) => {
    await axios({
        method: method,
        url: uri,
        headers: headers,
        data: body,
        timeout: 1000,
        auth: {
        },
    }).then((response) => {
        console.log(response);
        console.log(response.headers)
        console.log(response.status)
        console.log(response.data)
        console.log(response.statusText)

        return response
    }).catch((err) => {
        console.log(err)
        console.log("API 오류")
            if(error.response){
                console.log(error.response.data);
                console.log(error.status);
                console.log(error.response.headers);
                console.log(error.message);
            }
            return undefined
    });
}