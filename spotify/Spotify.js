import { client_id } from '../key'

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = client_id;
const redirectUri = "http://localhost:8081/callback/"

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

//export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//    "%20"
//  )}&response_type=token&show_dialog=true`;

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;