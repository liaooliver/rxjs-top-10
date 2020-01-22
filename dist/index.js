!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}({2:function(t,e,r){"use strict";r.r(e);r.p;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function i(t){return"function"==typeof t}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function c(t){setTimeout((function(){throw t}),0)}var h={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},a=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function f(t){return null!==t&&"object"==typeof t}var l=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),p=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r=this._parentOrParents,n=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var s=0;s<r.length;++s){r[s].remove(this)}if(i(n))try{n.call(this)}catch(t){e=t instanceof l?d(t.errors):[t]}if(a(o)){s=-1;for(var u=o.length;++s<u;){var c=o[s];if(f(c))try{c.unsubscribe()}catch(t){e=e||[],t instanceof l?e=e.concat(d(t.errors)):e.push(t)}}}if(e)throw new l(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var o=r._parentOrParents;if(null===o)r._parentOrParents=this;else if(o instanceof t){if(o===this)return r;r._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return r;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[r]:i.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function d(t){return t.reduce((function(t,e){return t.concat(e instanceof l?e.errors:e)}),[])}var b=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),y=function(t){function e(r,n,o){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=h;break;case 1:if(!r){i.destination=h;break}if("object"==typeof r){r instanceof e?(i.syncErrorThrowable=r.syncErrorThrowable,i.destination=r,r.add(i)):(i.syncErrorThrowable=!0,i.destination=new v(i,r));break}default:i.syncErrorThrowable=!0,i.destination=new v(i,r,n,o)}return i}return o(e,t),e.prototype[b]=function(){return this},e.create=function(t,r,n){var o=new e(t,r,n);return o.syncErrorThrowable=!1,o},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(p),v=function(t){function e(e,r,n,o){var s,u=t.call(this)||this;u._parentSubscriber=e;var c=u;return i(r)?s=r:r&&(s=r.next,n=r.error,o=r.complete,r!==h&&(i((c=Object.create(r)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=n,u._complete=o,u}return o(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=u.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;c(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(c(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(y);var w=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function _(){}function m(t){return t?1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}:_}var g=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,o=function(t,e,r){if(t){if(t instanceof y)return t;if(t[b])return t[b]()}return t||e||r?new y(t,e,r):new y(h)}(t,e,r);if(n?o.add(n.call(o,this.source)):o.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),u.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,r=e.closed,n=e.destination,o=e.isStopped;if(r||o)return!1;t=n&&n instanceof y?n:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=x(e))((function(e,n){var o;o=r.subscribe((function(e){try{t(e)}catch(t){n(t),o&&o.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[w]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:m(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=x(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function x(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function E(t){return t&&"function"==typeof t.schedule}var S=function(t){return function(e){for(var r=0,n=t.length;r<n&&!e.closed;r++)e.next(t[r]);e.complete()}};function O(t,e){return new g((function(r){var n=new p,o=0;return n.add(e.schedule((function(){o!==t.length?(r.next(t[o++]),r.closed||n.add(this.schedule())):r.complete()}))),n}))}function T(t,e){return e?O(t,e):new g(S(t))}function N(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];return E(r)?(t.pop(),O(t,r)):T(t)}function I(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var P=I(),j=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function A(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var M=function(t){if(t&&"function"==typeof t[w])return n=t,function(t){var e=n[w]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(j(t))return S(t);if(A(t))return r=t,function(t){return r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,c),t};if(t&&"function"==typeof t[P])return e=t,function(t){for(var r=e[P]();;){var n=r.next();if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof r.return&&t.add((function(){r.return&&r.return()})),t};var e,r,n,o=f(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+o+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function k(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[w]}(t))return function(t,e){return new g((function(r){var n=new p;return n.add(e.schedule((function(){var o=t[w]();n.add(o.subscribe({next:function(t){n.add(e.schedule((function(){return r.next(t)})))},error:function(t){n.add(e.schedule((function(){return r.error(t)})))},complete:function(){n.add(e.schedule((function(){return r.complete()})))}}))}))),n}))}(t,e);if(A(t))return function(t,e){return new g((function(r){var n=new p;return n.add(e.schedule((function(){return t.then((function(t){n.add(e.schedule((function(){r.next(t),n.add(e.schedule((function(){return r.complete()})))})))}),(function(t){n.add(e.schedule((function(){return r.error(t)})))}))}))),n}))}(t,e);if(j(t))return O(t,e);if(function(t){return t&&"function"==typeof t[P]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new g((function(r){var n,o=new p;return o.add((function(){n&&"function"==typeof n.return&&n.return()})),o.add(e.schedule((function(){n=t[P](),o.add(e.schedule((function(){if(!r.closed){var t,e;try{var o=n.next();t=o.value,e=o.done}catch(t){return void r.error(t)}e?r.complete():(r.next(t),this.schedule())}})))}))),o}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function C(t,e){return e?k(t,e):t instanceof g?t:new g(M(t))}function D(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new H(t,e))}}var H=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new V(t,this.project,this.thisArg))},t}(),V=function(t){function e(e,r,n){var o=t.call(this,e)||this;return o.project=r,o.count=0,o.thisArg=n||o,o}return o(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(y);var L=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return o(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,r){return t.call(this)||this}return o(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(p)),Y=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),U=function(t){function e(r,n){void 0===n&&(n=Y.now);var o=t.call(this,r,(function(){return e.delegate&&e.delegate!==o?e.delegate.now():n()}))||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return o(e,t),e.prototype.schedule=function(r,n,o){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,o):t.prototype.schedule.call(this,r,n,o)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(Y),W=new U(L);g.create((function(t){t.next("A"),t.next("B"),t.complete(),t.next("C")})).subscribe((function(t){return console.log(t)})),N("observable").subscribe((function(t){return console.log("obsOf: ",t)})),C(["A","B","C","D"]).subscribe((function(t){return console.log("obsFrom: ",t)})),C("world").subscribe((function(t){return console.log("obsFromString: ",t)})),function t(e,r,n,o){return i(n)&&(o=n,n=void 0),o?t(e,r,n).pipe(D((function(t){return a(t)?o.apply(void 0,t):o(t)}))):new g((function(t){!function t(e,r,n,o,i){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var u=e;e.addEventListener(r,n,i),s=function(){return u.removeEventListener(r,n,i)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var c=e;e.on(r,n),s=function(){return c.off(r,n)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var h=e;e.addListener(r,n),s=function(){return h.removeListener(r,n)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var a=0,f=e.length;a<f;a++)t(e[a],r,n,o,i)}o.add(s)}(e,r,(function(e){arguments.length>1?t.next(Array.prototype.slice.call(arguments)):t.next(e)}),t,n)}))}(document,"click").subscribe((function(t){return console.log("event: ",t)}));var B=N("hello"),F=N("hello",W);B.subscribe((function(t){return console.log("sync ",t)})),F.subscribe((function(t){return console.log("async ",t)})),console.log("sync");var z,R=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),q=function(t){function e(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return o(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},e}(p),G=function(t){function e(e){var r=t.call(this,e)||this;return r.destination=e,r}return o(e,t),e}(y),J=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return o(e,t),e.prototype[b]=function(){return new G(this)},e.prototype.lift=function(t){var e=new K(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new R;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),o=0;o<r;o++)n[o].next(t)},e.prototype.error=function(t){if(this.closed)throw new R;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),o=0;o<r;o++)n[o].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new R;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new R;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new R;return this.hasError?(t.error(this.thrownError),p.EMPTY):this.isStopped?(t.complete(),p.EMPTY):(this.observers.push(t),new q(this,t))},e.prototype.asObservable=function(){var t=new g;return t.source=this,t},e.create=function(t,e){return new K(t,e)},e}(g),K=function(t){function e(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return o(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):p.EMPTY},e}(J),Q=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return o(e,t),e.prototype.schedule=function(e,r){return void 0===r&&(r=0),r>0?t.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,r){return r>0||this.closed?t.prototype.execute.call(this,e,r):this._execute(e,r)},e.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0?t.prototype.requestAsyncId.call(this,e,r,n):e.flush(this)},e}(L),X=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(U))(Q),Z=new g((function(t){return t.complete()}));function $(t){return t?function(t){return new g((function(e){return t.schedule((function(){return e.complete()}))}))}(t):Z}function tt(t){var e=t.error;t.subscriber.error(e)}z||(z={});var et=function(){function t(t,e,r){this.kind=t,this.value=e,this.error=r,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,r){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return r&&r()}},t.prototype.accept=function(t,e,r){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,r)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return N(this.value);case"E":return t=this.error,new g(e?function(r){return e.schedule(tt,0,{error:t,subscriber:r})}:function(e){return e.error(t)});case"C":return $()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();var rt=function(t){function e(e,r,n){void 0===n&&(n=0);var o=t.call(this,e)||this;return o.scheduler=r,o.delay=n,o}return o(e,t),e.dispatch=function(t){var e=t.notification,r=t.destination;e.observe(r),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new nt(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(et.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(et.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(et.createComplete()),this.unsubscribe()},e}(y),nt=function(){return function(t,e){this.notification=t,this.destination=e}}(),ot=function(t){function e(e,r,n){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===r&&(r=Number.POSITIVE_INFINITY);var o=t.call(this)||this;return o.scheduler=n,o._events=[],o._infiniteTimeWindow=!1,o._bufferSize=e<1?1:e,o._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(o._infiniteTimeWindow=!0,o.next=o.nextInfiniteTimeWindow):o.next=o.nextTimeWindow,o}return o(e,t),e.prototype.nextInfiniteTimeWindow=function(e){var r=this._events;r.push(e),r.length>this._bufferSize&&r.shift(),t.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new it(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},e.prototype._subscribe=function(t){var e,r=this._infiniteTimeWindow,n=r?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,i=n.length;if(this.closed)throw new R;if(this.isStopped||this.hasError?e=p.EMPTY:(this.observers.push(t),e=new q(this,t)),o&&t.add(t=new rt(t,o)),r)for(var s=0;s<i&&!t.closed;s++)t.next(n[s]);else for(s=0;s<i&&!t.closed;s++)t.next(n[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},e.prototype._getNow=function(){return(this.scheduler||X).now()},e.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,r=this._windowTime,n=this._events,o=n.length,i=0;i<o&&!(t-n[i].time<r);)i++;return o>e&&(i=Math.max(i,o-e)),i>0&&n.splice(0,i),n},e}(J),it=function(){return function(t,e){this.time=t,this.value=e}}();var st=g.create((function(t){return t.next(Math.random())}));st.subscribe((function(t){return console.log("COLD NUMBER: ",t)})),st.subscribe((function(t){return console.log("COLD NUMBER: ",t)}));var ut=st.pipe(function(t,e,r){var n;return n=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:r},function(t){return t.lift(function(t){var e,r,n=t.bufferSize,o=void 0===n?Number.POSITIVE_INFINITY:n,i=t.windowTime,s=void 0===i?Number.POSITIVE_INFINITY:i,u=t.refCount,c=t.scheduler,h=0,a=!1,f=!1;return function(t){h++,e&&!a||(a=!1,e=new ot(o,s,c),r=t.subscribe({next:function(t){e.next(t)},error:function(t){a=!0,e.error(t)},complete:function(){f=!0,r=void 0,e.complete()}}));var n=e.subscribe(this);this.add((function(){h--,n.unsubscribe(),r&&!f&&u&&0===h&&(r.unsubscribe(),r=void 0,e=void 0)}))}}(n))}}());ut.subscribe((function(t){return console.log("HOT NUM: ",t)})),ut.subscribe((function(t){return console.log("HOT NUM: ",t)}));var ct=function(t){function e(e){var r=t.call(this)||this;return r._value=e,r}return o(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return r&&!r.closed&&e.next(this._value),r},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new R;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(J),ht=new J;ht.subscribe((function(t){return console.log("subject1: ",t)})),ht.next("HELLO"),ht.next("WORLD"),ht.subscribe((function(t){return console.log("subject2: ",t)}));var at=new ct("init value");at.subscribe((function(t){return console.log("behaviorSubject1: ",t)})),at.next("MONGO"),at.subscribe((function(t){return console.log("behaviorSubject2: ",t)}));var ft=function(){function t(t,e,r){void 0===r&&(r=!1),this.accumulator=t,this.seed=e,this.hasSeed=r}return t.prototype.call=function(t,e){return e.subscribe(new lt(t,this.accumulator,this.seed,this.hasSeed))},t}(),lt=function(t){function e(e,r,n,o){var i=t.call(this,e)||this;return i.accumulator=r,i._seed=n,i.hasSeed=o,i.index=0,i}return o(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.accumulator(this.seed,t,r)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(y);var pt=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new dt(t,this.predicate,this.thisArg))},t}(),dt=function(t){function e(e,r,n){var o=t.call(this,e)||this;return o.predicate=r,o.thisArg=n,o.count=0,o}return o(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(y),bt=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}();var yt,vt,wt,_t=function(){function t(t){if(this.total=t,this.total<0)throw new bt}return t.prototype.call=function(t,e){return e.subscribe(new mt(t,this.total))},t}(),mt=function(t){function e(e,r){var n=t.call(this,e)||this;return n.total=r,n.count=0,n}return o(e,t),e.prototype._next=function(t){var e=this.total,r=++this.count;r<=e&&(this.destination.next(t),r===e&&(this.destination.complete(),this.unsubscribe()))},e}(y);function gt(t,e,r){return function(n){return n.lift(new xt(t,e,r))}}C([1,2,3,4,5,6,7,8,9,10]).pipe(D((function(t){return Math.pow(t,2)})),function(t,e){var r=!1;return arguments.length>=2&&(r=!0),function(n){return n.lift(new ft(t,e,r))}}((function(t,e){return t+e})),(vt=function(t){return t>10},function(t){return t.lift(new pt(vt,wt))}),(yt=5,function(t){return 0===yt?$():t.lift(new _t(yt))})).subscribe((function(t){return console.log("map: ",t)}));var xt=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new Et(t,this.nextOrObserver,this.error,this.complete))},t}(),Et=function(t){function e(e,r,n,o){var s=t.call(this,e)||this;return s._tapNext=_,s._tapError=_,s._tapComplete=_,s._tapError=n||_,s._tapComplete=o||_,i(r)?(s._context=s,s._tapNext=r):r&&(s._context=r,s._tapNext=r.next||_,s._tapError=r.error||_,s._tapComplete=r.complete||_),s}return o(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(y);N("molly").pipe(gt((function(t){return console.log("tapped: ",t)})),D((function(t){return t.toUpperCase()})),gt((function(t){return console.log("tapped: ",t)}))).subscribe()}});