var pmcPiano;!function(){"use strict";var e={832:function(e,n){var t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},t.apply(this,arguments)},r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],r=0}finally{t=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},o=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.pmcPianoEntitlements=void 0,n.pmcPianoEntitlements={subscriberData:void 0,combineSubscriberData:function(e,n){var r,i,a,c,s;return t(t({user:{acct:{type:"Individual"}}},e),{user:t(t(t({},e.user),Object.fromEntries(Object.entries(null==n?void 0:n.user).filter((function(e){var n=e[1];return null!=n&&("string"!=typeof n||("string"==typeof n&&"".concat(n).length)>0)})))),{acct:t(t({},e.user.acct),Object.fromEntries(Object.entries(null===(r=null==n?void 0:n.user)||void 0===r?void 0:r.acct).filter((function(e){var n=e[1];return null!=n&&("string"!=typeof n||("string"==typeof n&&"".concat(n).length)>0)})))),entitlements:o(o([],null!==(a=null===(i=null==e?void 0:e.user)||void 0===i?void 0:i.entitlements)&&void 0!==a?a:[],!0),null!==(s=null===(c=null==n?void 0:n.user)||void 0===c?void 0:c.entitlements)&&void 0!==s?s:[],!0)})})},getSubscriberData:function(){return r(void 0,void 0,Promise,(function(){var e,n,r,o,a,c,s,u,l,d,b,p,f,v,g;return i(this,(function(i){switch(i.label){case 0:return e=window.pmcPiano.piano,n=window.pmcPiano.pianoApi,r=window.pmcPiano.entitlements,[4,n.importWpApiFetch()];case 1:if(o=i.sent().default,a=e.getUser(),!(c=null==a?void 0:a.email))return e.canDebug&&console.log("PMC: Piano: No email available from Piano user, returning empty SubscriberData"),[2,void 0];i.label=2;case 2:return i.trys.push([2,5,,6]),c?(l="/wp-json/pmc/piano/v1/subscriptions/get/".concat(encodeURIComponent(c),"/"),[4,o({url:"".concat(window.location.protocol,"//").concat(window.location.host).concat(l)})]):[3,4];case 3:d=i.sent(),u=(null==d?void 0:d.user)?d:{},i.label=4;case 4:return[3,6];case 5:return b=i.sent(),e.canDebug&&console.log("PMC: Piano: Error retrieving subscriber data from Salesforce API",b),[3,6];case 6:return[4,n.getAccessList()];case 7:p=i.sent();try{Array.isArray(p)&&p.length>0&&(null===(g=p[0])||void 0===g?void 0:g.user)&&(f=p[0],s={data_type:"piano",user:{family_name:f.user.last_name,given_name:f.user.first_name,email:f.user.email,acct:{contact_id:f.user.uid,name:[f.user.first_name,f.user.last_name].filter((function(e){return e&&e.length>0})).join(" ").trim()},entitlements:p.map((function(e){return e.resource.name}))}})}catch(n){e.canDebug&&console.error("PMC: Piano: Error retrieving Piano access list",n)}return e.canDebug&&console.log("PMC: Piano: Retrieved subscriber data from Piano API",u,s),[2,(v=u&&s?r.combineSubscriberData(u,s):null!=u?u:s)?t({data_type:"piano"},v):void 0]}}))}))},setSubscriberData:function(){var e=window.pmcPiano.entitlements,n=window.pmcPiano.piano;if(!n.hasUser())return n.canDebug&&console.log("PMC: Piano: No Piano user, skipping subscriber data load"),void e.triggerSubscriberDataLoaded();e.getSubscriberData().then((function(t){e.subscriberData=t,n.canDebug&&console.log("PMC: Piano: Loaded subscriber data",e.subscriberData),e.triggerSubscriberDataLoaded()}))},subscriberDataLoadedCallbacks:[],triggerSubscriberDataLoaded:function(){for(var e=window.pmcPiano.entitlements,n=(window.pmcPiano.piano,0),t=e.subscriberDataLoadedCallbacks;n<t.length;n++)(0,t[n])(e.subscriberData);e.subscriberDataLoadedCallbacks=[]},onPianoLoginSuccess:function(){var e;"piano"===(null===(e=window.pmcPianoData)||void 0===e?void 0:e.loginProvider)&&window.tp.push(["addHandler","loginSuccess",function(e){"PIANOID"==e.source&&location.reload()}])},on_subscriber_data_loaded:function(e){var n,t=window.pmcPiano.entitlements,r=window.pmcPiano.piano;try{if("piano"!==(null===(n=window.pmcPianoData)||void 0===n?void 0:n.loginProvider))return r.canDebug&&console.log("PMC: Piano: Login provider is not Piano, skipping subscriber data loading"),void e(void 0);if(t.subscriberData)return void e(t.subscriberData);r.canDebug&&console.log("PMC: Piano: Subscriber data not yet loaded, adding callback",t.subscriberData),t.subscriberDataLoadedCallbacks.push(e)}catch(n){r.canDebug&&console.log("PMC: Piano: Error loading subscriber data"),e(void 0)}}},e.exports=n.pmcPianoEntitlements}},n={},t=function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}(832);(pmcPiano=void 0===pmcPiano?{}:pmcPiano).entitlements=t}();