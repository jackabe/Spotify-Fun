import api from "../config/api";
import handleErrors from "./ErrorHandler";

function searchForAlbums(token, content) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        };
        fetch(api.getAlbumsLike+'?q='+content+'%20&type=album', options)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => reject(error));
    });
}

export default searchForAlbums;
