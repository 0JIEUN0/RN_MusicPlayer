import { client_id, key_secret } from './key'
import { handelGetAccessToken, handelApiRequest } from '../server/ServerManagement'
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = client_id;
const redirectUri = "myspofity://callback/"

export const getAccessTokenByClientCredentialsFlow = () => {
    const requestUri = "https://accounts.spotify.com/api/token"
    const headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': key_secret,
    }
    const body = { "grant_type": "client_credentials" }
    
    const response = handelGetAccessToken(requestUri, headers, body)
    console.log(response)
}

export const browseCategories = () => {
    const requestUri = "https://api.spotify.com/v1/browse/categories?country=KR"
    return handelApiRequest(requestUri, 'get')
}
export const searchArtists = (query) => {
    const requestUri = "https://api.spotify.com/v1/search?type=artist&limit=20&q="+query;
    return handelApiRequest(requestUri, 'get')
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;

/*
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
      
            return initial;
          }, {});
}
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
*/