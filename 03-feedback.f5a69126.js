var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=l||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return u.Date.now()};function d(e,t,n){var o,a,r,i,l,f,u=0,c=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=a;return o=a=void 0,u=t,i=e.apply(r,n)}function S(e){return u=e,l=setTimeout(h,t),c?y(e):i}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-u>=r}function h(){var e=g();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?m(n,r-(e-u)):n}(e))}function w(e){return l=void 0,b&&o?y(e):(o=a=void 0,i)}function O(){var e=g(),n=j(e);if(o=arguments,a=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),i}return t=p(t)||0,v(n)&&(c=!!n.leading,r=(d="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=f=a=l=void 0},O.flush=function(){return void 0===l?i:w(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=a.test(e);return l||r.test(e)?i(e.slice(2),l?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),d(e,t,{leading:o,maxWait:t,trailing:a})};let b={email:"",message:""};const y=document.querySelector(".feedback-form"),S=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]');localStorage.getItem("feedback-form-state")&&(parsedLocalStorage=JSON.parse(localStorage.getItem("feedback-form-state")),S.value=parsedLocalStorage.email,j.value=parsedLocalStorage.message,console.log(parsedLocalStorage)),y.addEventListener("submit",(function(e){e.preventDefault(),S.value="",j.value="",localStorage.removeItem("feedback-form-state"),console.log(b)})),y.addEventListener("input",t((function(e){console.log(e.target.name),console.log(e.target),"email"===e.target.name&&(b.email=e.target.value);"message"===e.target.name&&(b.message=e.target.value);console.log(b),jsonFormData=JSON.stringify(b),console.log(jsonFormData),localStorage.setItem("feedback-form-state",jsonFormData)}),500));
//# sourceMappingURL=03-feedback.f5a69126.js.map