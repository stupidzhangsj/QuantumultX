/**
 * @supported 4162A98B8AFB
 */

let body = $response.body
body = JSON.parse(body)
body['data'].forEach((element, index) => {
    if (element.hasOwnProperty('ad')) {
        body['data'].splice(index, 1)
    }
})
body = JSON.stringify(body)
$done({body})