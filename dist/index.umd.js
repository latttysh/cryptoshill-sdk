!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("axios"),require("crypto"),require("js-base64")):"function"==typeof define&&define.amd?define(["exports","axios","crypto","js-base64"],e):e((t||self).cryptochillSdk={},t.axios,t.crypto,t.jsBase64)}(this,function(t,e,i,o){function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function n(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(i){if("default"!==i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}}),e.default=t,e}var c=/*#__PURE__*/r(e),s=/*#__PURE__*/n(i);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var a=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.apiUrl=void 0,this.profileId=void 0,this.apiSecret=void 0,this.callbackToken=void 0,this.apiKey=t.apiKey,this.apiUrl=t.apiUrl?t.apiUrl:"https://api.cryptochill.com",this.profileId=t.profileId,this.apiSecret=t.apiSecret,this.callbackToken=t.callbackToken}var e=t.prototype;return e.encodeHmac=function(t,e){return s.createHmac("sha256",t).update(e).digest("hex")},e.cryptochillApiRequest=function(t,e,i){void 0===i&&(i="GET");var r="/v1/"+t+"/";e.request=r,e.nonce=(new Date).getTime();var n=JSON.stringify(e),s=o.Base64.encode(n),u=this.encodeHmac(this.apiSecret,s);return c.default({method:i,url:this.apiUrl+r,headers:{"X-CC-KEY":this.apiKey,"X-CC-PAYLOAD":s,"X-CC-SIGNATURE":u}})},t}(),f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e.prototype.getAccount=function(){return this.cryptochillApiRequest("account/settings/")},e}(a),l="invoices",h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var i=e.prototype;return i.listInvoices=function(t){return this.cryptochillApiRequest(l)},i.getInvoice=function(t){return this.cryptochillApiRequest(l+"/"+t)},i.createInvoice=function(t){return this.cryptochillApiRequest(l,t,"POST")},e}(a);t.Cryptochill=function(t){this.account=void 0,this.invoices=void 0,this.account=new f(t),this.invoices=new h(t)}});