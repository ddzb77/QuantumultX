if ($response.statusCode != 200) {
  $done(null);
}

var flags = new Map([["AU","🇦🇺"],["CA","🇨🇦"],["CN","🇨🇳"],["DE","🇩🇪"],["FR","🇫🇷"],["HK","🇭🇰"],["JP","🇯🇵"],["KR","🇰🇷"],["SG","🇸🇬"],["TW","🇨🇳"],["UK","🇬🇧"],["US","🇺🇸"]])

var body = $response.body;
var obj = JSON.parse(body);
var title =flags.get(obj['countryCode']) + ' '+ City_ValidCheck(obj['city']);//+Area_check(obj['country']);
var subtitle = ISP_ValidCheck(obj['org']);
var ip = obj['query'];
var description = '服务商:'+obj['isp'] + '\n'+'地区:' +City_ValidCheck(obj['regionName'])+ '\n' + 'IP:'+ obj['query'];
$done({title, subtitle, ip, description});
