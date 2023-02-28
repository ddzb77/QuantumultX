if ($response.statusCode != 200) {
  $done(null);
}

var flags = new Map([["AU","🇦🇺"],["CA","🇨🇦"],["CN","🇨🇳"],["DE","🇩🇪"],["FR","🇫🇷"],["HK","🇭🇰"],["JP","🇯🇵"],["KR","🇰🇷"],["SG","🇸🇬"],["TW","🇨🇳"],["UK","🇬🇧"],["US","🇺🇸"]])

var body = $response.body;
var obj = JSON.parse(body);
var title =flags.get(obj['countryCode'])
var subtitle = obj['city'] + ' ' + obj['isp'];
var ip = obj['query'];
var description = "国家" + ":" + obj['countryCode'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' + "数据中心" + ":" + obj['org'];
$done({title, subtitle, ip, description});
