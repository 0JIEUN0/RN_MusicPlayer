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

export const handelApiRequest = async (url, method, headers, body) => {
    const newHeaders = {...headers, 'Authorization': 'Bearer ' + accessTokenByClientCredentialsFlow }
    //axios.interceptors.request.use(request => {
    //console.log('Starting Request', JSON.stringify(request, null, 2))
    //})    
    
    var result;
    await axios({
        method: method,
        url: url,
        headers: newHeaders,
        data: body,
        timeout: 1000,
    })
    .then(response => { result = response.data })
    .catch((error) => {
        console.log("error: ", error)
        if(error.response){
            console.log("API 오류")
            console.log(error);
            console.log(error.response.data);
            console.log(error.status);
            console.log(error.response.headers);
            console.log(error.message);
        }
        return undefined
    });
    return result
}