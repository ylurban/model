define("model/model",[],function(){return function(n){function t(n,t,u){u=u||this,n=n instanceof Array?n:[n];var f=e(function(){var e=n.map(function(n){return d[n]});r(e)&&t.apply(u,e)});return f(),n.forEach(function(n){o(n,f)}),f}function e(n){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,n()},0))}}function r(n){return!n.some(function(n){return"undefined"==typeof n||null===n})}function o(n,t,e){e=e||this,u(n).push(t),f(n,e)}function u(n){return m[n]||(m[n]=[])}function f(n,t){n in s||(s[n]=!0,d[n]=l[n],Object.defineProperty(l,n,{get:function(){return d[n]},set:function(e){var r=d[n];d[n]=e,u(n).forEach(function(n){n.call(t,e,r)})}}))}function i(n){for(var t in m)c(t,n)}function c(n,t){m[n]=m[n].filter(function(n){return n!==t})}function a(n){for(var t in n)l[t]=n[t]}var l={},d={},m={},s={};return a(n),l.when=t,l.removeListener=i,l.on=o,l.off=c,l.set=a,l}}),define("model",["model/model"],function(n){return n});