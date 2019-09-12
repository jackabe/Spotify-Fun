import handleErrors from "./ErrorHandler";

function nextSearchForAlbums(token, next) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        };
        fetch(next, options)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => reject(error));
    });
}

export default nextSearchForAlbums;
