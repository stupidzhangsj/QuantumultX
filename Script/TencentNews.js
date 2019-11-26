/**
 * @supported 4162A98B8AFB
 */
var obj = JSON.parse($response.body);
delete obj.adList;
$done({body: JSON.stringify(obj)});