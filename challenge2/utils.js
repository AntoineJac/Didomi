// CommonJS
const fetch = require('node-fetch');
const didomiEndpoint = 'https://api.didomi.io/v1';
const organisationId = 123334;
const orgUserid = 7262;

const getAuth = async (id, secret) => {

    const didomiUrlOauth = 'https://api.didomi.io/v1/sessions';
    const headersAuth = {'Content-Type': 'application/json'};
    const bodyAuth = {type: "api-key", key: id, secret: secret};

    const response = await fetch(didomiUrlOauth, {
        method: 'post',
        body: JSON.stringify(bodyAuth),
        headers: headersAuth
    });

    const responseJson = await response.json();

    if (responseJson.code == 200 && responseJson.access_token) {
        return responseJson.access_token;
    } else {
        throw new Error('No Token or '+responseJson.message);
    }
};

const getUsersConsent = async (token) => {

    let getConsentPath = didomiEndpoint+'/consents/users?organization_id='+organisationId;
    getConsentPath = getConsentPath + '&organization_user_id'+orgUserid;
    const headersConsent = {'content-type': 'application/json', 'Authorization': 'Bearer '+token};

    const getConsent = await fetch(getConsentPath, {
        method: 'get',
        headers: headersConsent
    });

    const responseConsentJson = await getConsent.json();

    if (responseConsentJson.code == 200 && responseConsentJson.access_token) {
        return responseConsentJson;
    } else {
        throw new Error('Issue when getting consent for users');
    }
};

const postConsent = (token, jsonRequest) => {

    const postConsentPath = didomiEndpoint+'/consents/events?organization_id='+organisationId;
    const headersConsent = {'content-type': 'application/json', 'Authorization': 'Bearer '+token};
    const getConsent = new Promise((resolve, reject) => {
        const response = fetch(postConsentPath, {
            method: 'post',
            body: jsonRequest,
            headers: headersConsent
        })
        .then((resp) => {
            resp.json()
            .then((respJson) => {
                console.log(respJson);
                resolve({'user':respJson.id, 'status':respJson.status, 
                        'id':respJson.id});
            })
            .catch((err) => {
                reject(err);
            })
        })
        .catch((err) => {
            reject(err);
        })    
    })
    return getConsent;
};

const updateConsent = (token, jsonRequest) => {
    return new Promise(function(resolve, reject) {
        reject('notReadyYet');
    });
}

module.exports = {
  getAuth,
  postConsent,
  getUsersConsent,
  updateConsent
};





