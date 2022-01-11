import Toast_noty from "./Toast_noty";

const BASE_URL = "http://192.168.1.103:8000";
const BASE_URL_API = `${BASE_URL}/api/v1/`;

/**
 *
 * @param address {string} endPoint url
 * @param method {string} type send request
 * @param body {object} data to send server
 * @param query {object|null} query parameters
 * @param panel {boolean} check api for panel or not
 * @param isJson {boolean} if formData false and if json body true (default true)
 * @return {Promise<Object>} response json
 */
export default async function apiPattern(address, {
    method = 'POST', body = {},
    query = null, isJson = true, isAuth = true
}) {

    const init = {method: method,}

    if (query != null){
        address += addQueryParams(query)
    }

    if (method === 'POST') {
        if (isJson) {
            init['headers'] = {
                'Content-Type': 'application/json',
            }
            init['body'] = JSON.stringify(body)
        } else {
            init['body'] = body
        }
    }
    const response = await fetch(BASE_URL_API + address, init);
    const json = await response.json();
    if (checkResponse(json))
        return json.data
}

/**
 *
 * @param json {Object} body response as json
 *
 * @return {boolean} the result ok -> true or not and have problem
 */
function checkResponse(json) {
    if (json['result'] === 'ok') {
        if (json['message'] != null && json['message'] !== '')
            showMessage(json['message'], true)
        return true
    } else
        showMessage(json['message'])

}

export function showMessage(reason, successful = false) {
    //todo show noti
    if (successful)
		Toast_noty(reason.toString(), 5000, "success");
    else
        Toast_noty(reason.toString(), 5000, "error");
}

export function addQueryParams(params) {
    return Object.keys(params)
        .map(k => k + '=' + params[k])
        .join('&');
}