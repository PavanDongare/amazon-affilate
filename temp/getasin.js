var url = "http://www.amazon.com/Kindle-Wireless-Reading-Display-Generation/dp/B0015T963C";
var regex = RegExp("http://www.amazon.com/([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})");
m = url.match(regex);
if (m) { 
    console.log("ASIN=" + m[4]);
}



https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0015T963C&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_