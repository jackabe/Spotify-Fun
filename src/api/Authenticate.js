import api from "../config/api";
import handleErrors from "./ErrorHandler";

function clientAuthenticate() {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'get',
        };
        fetch(api.authenticate, options)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => reject(error));
    });
}

export default clientAuthenticate;
