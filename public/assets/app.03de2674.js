var process = { env: {NODE_ENV: "production"} };

import { Switch } from '../../../../elements/Switch';
import { MarkdownEditor } from '../../../../elements/editor';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var turbolinks = createCommonjsModule(function (module) {
/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}};}).call(this);}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode;}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return !0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r};}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1));}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR();}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement();}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar;}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this);}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}();}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,n,s,a,u;for(this.elements={},n=0,a=t.length;a>n;n++)u=t[n],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,r=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},r.elements.push(u));}var e,r,n,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var r,n,o,i;r=void 0,i=this.elements;for(o in i)n=i[o].elements,e(n[0],t)&&(r=n[0]);return r},i=function(t){return r(t)?"script":n(t)?"stylesheet":void 0},o=function(t){return "reload"===t.getAttribute("data-turbolinks-track")},r=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},n=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var r;return r=t.tagName.toLowerCase(),"meta"===r&&t.getAttribute("name")===e},t}();}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e;}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var r,n,o,i;return o=t.querySelector("head"),r=null!=(i=t.querySelector("body"))?i:document.createElement("body"),n=e.HeadDetails.fromHeadElement(o),new this(n,r)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,r,n,o,i;for(o=this.getPermanentElements(),i=[],r=0,n=o.length;n>r;r++)e=o[r],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return "no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return "no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return "reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}();}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return "false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}();}.call(this),function(){var t,r,n=function(t,e){function r(){this.constructor=t;}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement;}return n(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,n,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,n=a.length;n>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),r(i,s.element),r(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,n,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],n=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(r(n,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,n,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)n=i[e],t=this.createScriptElement(n),s.push(r(n,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},r=function(t,e){var r;return (r=t.parentNode)?r.replaceChild(e,t):void 0};}.call(this),function(){var t=function(t,e){function n(){this.constructor=t;}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){var e;e=document.createElement("html"),e.innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body");}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer);}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement;}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll);}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}();}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={};}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={};}var n;return r.prototype.start=function(){return "initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return "started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return "started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return "started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return !(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return (e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return "replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return "pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return "restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500);}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable();
},r.prototype.cacheSnapshot=function(){var t,r;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),r=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,r.clone())}}(this))):void 0},r.prototype.scrollToAnchor=function(t){var e;return (e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return !(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return (r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}();}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}();}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start();}.call(this);}).call(this),module.exports?module.exports=e:"function"==typeof undefined;}).call(commonjsGlobal);
});

var n,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g);}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=o.__v+1,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)));});}function m(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}g=$(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y]);}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l);}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type+!1](n.event?n.event(l):l);}function N(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function $(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new d(g,x),v.constructor=P,v.render=M),b&&b.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),T(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i);}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function H(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else {if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o);}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l);}function S(n,l){O(n,l,o);}function q(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),h(n.type,f,i||n.key,t||n.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l;}throw n},__v:0},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;

function preactCustomElement(tagName, Component, propNames, options) {
  function PreactElement() {
    const inst = Reflect.construct(HTMLElement, [], PreactElement);
    inst._vdomComponent = Component;
    inst._root = options && options.shadow ? inst.attachShadow({
      mode: 'open'
    }) : inst;
    return inst;
  }

  PreactElement.prototype = Object.create(HTMLElement.prototype);
  PreactElement.prototype.constructor = PreactElement;
  PreactElement.prototype.connectedCallback = connectedCallback;
  PreactElement.prototype.attributeChangedCallback = attributeChangedCallback;
  PreactElement.prototype.disconnectedCallback = disconnectedCallback;
  propNames = propNames || Component.observedAttributes || Object.keys(Component.propTypes || {});
  PreactElement.observedAttributes = propNames; // Keep DOM properties and Preact props in sync

  propNames.forEach(name => {
    Object.defineProperty(PreactElement.prototype, name, {
      get() {
        return this._vdom.props[name];
      },

      set(v) {
        if (this._vdom) {
          this.attributeChangedCallback(name, null, v);
        } else {
          if (!this._props) this._props = {};
          this._props[name] = v;
          this.connectedCallback();
        } // Reflect property changes to attributes if the value is a primitive


        const type = typeof v;

        if (v == null || type === 'string' || type === 'boolean' || type === 'number') {
          this.setAttribute(name, v);
        }
      }

    });
  });
  return customElements.define(tagName || Component.tagName || Component.displayName || Component.name, PreactElement);
}

function ContextProvider(props) {
  this.getChildContext = () => props.context; // eslint-disable-next-line no-unused-vars


  const {
    context,
    children,
    ...rest
  } = props;
  return q(children, rest);
}

function connectedCallback() {
  // Obtain a reference to the previous context by pinging the nearest
  // higher up node that was rendered with Preact. If one Preact component
  // higher up receives our ping, it will set the `detail` property of
  // our custom event. This works because events are dispatched
  // synchronously.
  const event = new CustomEvent('_preact', {
    detail: {},
    bubbles: true,
    cancelable: true
  });
  this.dispatchEvent(event);
  const context = event.detail.context;
  this._vdom = v(ContextProvider, { ...this._props,
    context
  }, toVdom(this, this._vdomComponent));
  (this.hasAttribute('hydrate') ? S : O)(this._vdom, this._root);
}

function toCamelCase(str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}

function attributeChangedCallback(name, oldValue, newValue) {
  if (!this._vdom) return; // Attributes use `null` as an empty value whereas `undefined` is more
  // common in pure JS components, especially with default parameters.
  // When calling `node.removeAttribute()` we'll receive `null` as the new
  // value. See issue #50.

  newValue = newValue == null ? undefined : newValue;
  const props = {};
  props[name] = newValue;
  props[toCamelCase(name)] = newValue;
  this._vdom = q(this._vdom, props);
  O(this._vdom, this._root);
}

function disconnectedCallback() {
  O(this._vdom = null, this._root);
}
/**
 * Pass an event listener to each `<slot>` that "forwards" the current
 * context value to the rendered child. The child will trigger a custom
 * event, where will add the context value to. Because events work
 * synchronously, the child can immediately pull of the value right
 * after having fired the event.
 */


function Slot(props, context) {
  const ref = r => {
    if (!r) {
      this.ref.removeEventListener('_preact', this._listener);
    } else {
      this.ref = r;

      if (!this._listener) {
        this._listener = event => {
          event.stopPropagation();
          event.detail.context = context;
        };

        r.addEventListener('_preact', this._listener);
      }
    }
  };

  return v('slot', { ...props,
    ref
  });
}

function toVdom(element, nodeName) {
  if (element.nodeType === Node.TEXT_NODE) {
    const data = element.data;
    element.data = '';
    return data;
  }

  if (element.nodeType !== Node.ELEMENT_NODE) return null;
  const children = [];
  const props = {};
  let i = 0;
  const a = element.attributes;
  const cn = element.childNodes;

  for (i = a.length; i--;) {
    if (a[i].name !== 'slot') {
      props[a[i].name] = a[i].value;
      props[toCamelCase(a[i].name)] = a[i].value;
    }
  }

  props.parent = element;

  for (i = cn.length; i--;) {
    const vnode = toVdom(cn[i], null); // Move slots correctly

    const name = cn[i].slot;

    if (name) {
      props[name] = v(Slot, {
        name
      }, vnode);
    } else {
      children[i] = vnode;
    }
  } // Only wrap the topmost node with a slot


  const wrappedChildren = nodeName ? v(Slot, null, children) : children;
  return v(nodeName || element.nodeName.toLowerCase(), props, wrappedChildren);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function htm(n){for(var l,e,s=arguments,t=1,r="",u="",a=[0],c=function(n){1===t&&(n||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(n?s[n]:r):3===t&&(n||r)?(a[1]=n?s[n]:r,t=2):2===t&&"..."===r&&n?a[2]=Object.assign(a[2]||{},s[n]):2===t&&r&&!n?(a[2]=a[2]||{})[r]=!0:t>=5&&(5===t?((a[2]=a[2]||{})[e]=n?r?r+s[n]:s[n]:r,t=6):(n||r)&&(a[2][e]+=n?r+s[n]:r)),r="";},h=0;h<n.length;h++){h&&(1===t&&c(),c(h));for(var i=0;i<n[h].length;i++)l=n[h][i],1===t?"<"===l?(c(),a=[a,"",null],t=3):r+=l:4===t?"--"===r&&">"===l?(t=1,r=""):r=l+r[0]:u?l===u?u="":r+=l:'"'===l||"'"===l?u=l:">"===l?(c(),t=1):t&&("="===l?(t=5,e=r,r=""):"/"===l&&(t<5||">"===n[h][i+1])?(c(),3===t&&(a=a[0]),t=a,(a=a[0]).push(this.apply(null,t.slice(1))),t=0):" "===l||"\t"===l||"\n"===l||"\r"===l?(c(),t=2):r+=l),3===t&&"!--"===r&&(t=4,a=a[0]);}return c(),a.length>2?a.slice(1):a[1]}

/**
 * Crée un élément HTML
 *
 * Cette fonction ne couvre que les besoins de l'application, jsx-dom pourrait remplacer cette fonction
 *
 * @param {string} tagName
 * @param {object} attributes
 * @param {...HTMLElement|string} children
 * @return HTMLElement
 */

function createElement(tagName, attributes = {}, ...children) {
  if (typeof tagName === 'function') {
    return tagName(attributes);
  }

  const svgTags = ['svg', 'use', 'path', 'circle', 'g']; // On construit l'élément

  const e = !svgTags.includes(tagName) ? document.createElement(tagName) : document.createElementNS('http://www.w3.org/2000/svg', tagName); // On lui associe les bons attributs

  for (const k of Object.keys(attributes || {})) {
    if (typeof attributes[k] === 'function' && k.startsWith('on')) {
      e.addEventListener(k.substr(2).toLowerCase(), attributes[k]);
    } else if (k === 'xlink:href') {
      e.setAttributeNS('http://www.w3.org/1999/xlink', 'href', attributes[k]);
    } else {
      e.setAttribute(k, attributes[k]);
    }
  } // On aplatit les enfants


  children = children.reduce((acc, child) => {
    return Array.isArray(child) ? [...acc, ...child] : [...acc, child];
  }, []); // On ajoute les enfants à l'élément

  for (const child of children) {
    if (typeof child === 'string' || typeof child === 'number') {
      e.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement || child instanceof SVGElement) {
      e.appendChild(child);
    } else {
      console.error("Impossible d'ajouter l'élément", child, typeof child);
    }
  }

  return e;
}
/**
 * CreateElement version Tagged templates
 * @type {(strings: TemplateStringsArray, ...values: any[]) => (HTMLElement[] | HTMLElement)}
 */

const html = htm.bind(createElement);
/**
 * Transform une chaine en élément DOM
 * @param {string} str
 * @return {DocumentFragment}
 */

function strToDom(str) {
  return document.createRange().createContextualFragment(str).firstChild;
}
/**
 *
 * @param {HTMLElement|Document|Node} element
 * @param {string} selector
 * @return {null|HTMLElement}
 */

function closest(element, selector) {
  for (; element && element !== document; element = element.parentNode) {
    if (element.matches(selector)) return element;
  }

  return null;
}

/**
 * Masque un élément avec un effet de repli
 * @param {HTMLElement} element
 * @param {Number} duration
 * @returns {Promise<boolean>}
 */

function slideUp(element, duration = 500) {
  return new Promise(resolve => {
    element.style.height = `${element.offsetHeight}px`;
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = `${duration}ms`;
    element.offsetHeight; // eslint-disable-line no-unused-expressions

    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      resolve(element);
    }, duration);
  });
}
/**
 * Affiche un élément avec un effet de dépliement
 * @param {HTMLElement} element
 * @param {Number} duration
 * @returns {Promise<boolean>}
 */

function slideDown(element, duration = 500) {
  return new Promise(resolve => {
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;
    if (display === 'none') display = 'block';
    element.style.display = display;
    const height = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight; // eslint-disable-line no-unused-expressions

    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = `${duration}ms`;
    element.style.height = `${height}px`;
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      resolve(element);
    }, duration);
  });
}

class Alert extends HTMLElement {
  constructor({
    type,
    message
  } = {}) {
    super();

    if (type !== undefined) {
      this.type = type;
    }

    if (this.type === 'error' || this.type === null) {
      this.type = 'danger';
    }

    this.message = message;
    this.close = this.close.bind(this);
  }

  connectedCallback() {
    this.type = this.type || this.getAttribute('type');

    if (this.type === 'error' || !this.type) {
      this.type = 'danger';
    }

    const text = this.innerHTML;
    const duration = this.getAttribute('duration');
    let progressBar = '';

    if (duration !== null) {
      progressBar = `<div class="alert__progress" style="animation-duration: ${duration}s">`;
      window.setTimeout(this.close, duration * 1000);
    }

    this.innerHTML = `<div class="alert alert-${this.type}">
        <svg class="icon icon-${this.icon}">
          <use xlink:href="/sprite.svg#${this.icon}"></use>
        </svg>
        <div>
          ${this.message || text}
        </div>
        <button class="alert-close">
          <svg class="icon">
            <use xlink:href="/sprite.svg#cross"></use>
          </svg>
        </button>
        ${progressBar}
      </div>`;
    this.querySelector('.alert-close').addEventListener('click', e => {
      e.preventDefault();
      this.close();
    });
  }

  close() {
    const element = this.querySelector('.alert');
    element.classList.add('out');
    window.setTimeout(async () => {
      await slideUp(element);
      this.parentElement.removeChild(this);
      this.dispatchEvent(new CustomEvent('close'));
    }, 500);
  }

  get icon() {
    if (this.type === 'danger') {
      return 'warning';
    } else if (this.type === 'success') {
      return 'check';
    }

    return this.type;
  }

}
class FloatingAlert extends Alert {
  constructor(options = {}) {
    super(options);
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('is-floating');
  }

}
/**
 * Affiche un message flash flottant sur la page
 *
 * @param {string} message
 * @param {string} type
 * @param {number|null} duration
 */

function flash(message, type = 'success', duration = 2) {
  const alert = new FloatingAlert();

  if (duration) {
    alert.setAttribute('duration', duration);
  }

  alert.setAttribute('type', type);
  alert.innerText = message;
  document.body.appendChild(alert);
}

/**
 * @param {RequestInfo} url
 * @param params
 * @return {Promise<Object>}
 */

async function jsonFetch(url, params = {}) {
  // Si on reçoit un FormData on le convertit en objet
  if (params.body instanceof FormData) {
    params.body = Object.fromEntries(params.body);
  } // Si on reçoit un objet on le convertit en chaine JSON


  if (params.body && typeof params.body === 'object') {
    params.body = JSON.stringify(params.body);
  }

  params = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    ...params
  };
  const response = await fetch(url, params);

  if (response.status === 204) {
    return null;
  }

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new ApiError(data, response.status);
}
/**
 * Représente une erreur d'API
 * @property {{
 *  violations: {propertyPath: string, message: string}
 * }} data
 */

class ApiError {
  constructor(data, status) {
    this.data = data;
    this.status = status;
  } // Récupère la liste de violation pour un champs donnée


  violationsFor(field) {
    return this.data.violations.filter(v => v.propertyPath === field).map(v => v.message);
  }

  get name() {
    return `${this.data.title} ${this.data.detail || ''}`;
  } // Renvoie les violations indexé par propertyPath


  get violations() {
    if (!this.data.violations) {
      return {
        main: `${this.data.title} ${this.data.detail || ''}`
      };
    }

    return this.data.violations.reduce((acc, violation) => {
      if (acc[violation.propertyPath]) {
        acc[violation.propertyPath].push(violation.message);
      } else {
        acc[violation.propertyPath] = [violation.message];
      }

      return acc;
    }, {});
  }

}

var t$1,u$1,r$1,o$1=0,i$1=[],c$1=n.__b,f$1=n.__r,e$1=n.diffed,a$1=n.__c,v$1=n.unmount;function m$1(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o$1=1,p$1(w$1,n)}function p$1(n,r,o){var i=m$1(t$1++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function y(r,o){var i=m$1(t$1++,3);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function h$1(r,o){var i=m$1(t$1++,4);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__h.push(i));}function s$1(n){return o$1=5,d$1(function(){return {current:n}},[])}function d$1(n,u){var r=m$1(t$1++,7);return k$1(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o$1=8,d$1(function(){return n},t)}function F(n){var r=u$1.context[n.__c],o=m$1(t$1++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u$1)),r.props.value):n.__}function x$1(){i$1.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i$1=[];}n.__b=function(n){u$1=null,c$1&&c$1(n);},n.__r=function(n){f$1&&f$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},n.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$1.push(o)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x$1)),u$1=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a$1&&a$1(t,u);},n.unmount=function(t){v$1&&v$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};var b$1="function"==typeof requestAnimationFrame;function g$1(n){var t=u$1;"function"==typeof n.__c&&n.__c(),u$1=t;}function j$1(n){var t=u$1;n.__c=n.__(),u$1=t;}function k$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

/**
 * Alterne une valeur
 */

function useToggle(initialValue = null) {
  const [value, setValue] = l(initialValue);
  return [value, A$1(() => setValue(v => !v), [])];
}
/**
 * Hook d'effet pour détecter le clique en dehors d'un élément
 */

function useClickOutside(ref, cb) {
  y(() => {
    if (cb === null) {
      return;
    }

    const escCb = e => {
      if (e.key === 'Escape' && ref.current) {
        cb();
      }
    };

    const clickCb = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };

    document.addEventListener('click', clickCb);
    document.addEventListener('keyup', escCb);
    return function cleanup() {
      document.removeEventListener('click', clickCb);
      document.removeEventListener('keyup', escCb);
    };
  }, [ref, cb]);
}
/**
 * Focus le premier champs dans l'élément correspondant à la ref
 * @param {boolean} focus
 */

function useAutofocus(ref, focus) {
  y(() => {
    if (focus && ref.current) {
      const input = ref.current.querySelector('input, textarea');

      if (input) {
        input.focus();
      }
    }
  }, [focus, ref]);
}
/**
 * Hook faisant un appel fetch et flash en cas d'erreur / succès
 *
 * @param {string} url
 * @param {object} params
 * @return {{data: Object|null, fetch: fetch, loading: boolean, done: boolean}}
 */

function useJsonFetchOrFlash(url, params = {}) {
  const [state, setState] = l({
    loading: false,
    data: null,
    done: false
  });
  const fetch = A$1(async (localUrl, localParams) => {
    setState(s => ({ ...s,
      loading: true
    }));

    try {
      const response = await jsonFetch(localUrl || url, localParams || params);
      setState(s => ({ ...s,
        loading: false,
        data: response,
        done: true
      }));
      return response;
    } catch (e) {
      if (e instanceof ApiError) {
        flash(e.name, 'danger', 4);
      } else {
        flash(e, 'danger', 4);
      }
    }

    setState(s => ({ ...s,
      loading: false
    }));
  }, [url, params]);
  return { ...state,
    fetch
  };
}
/**
 * useEffect pour une fonction asynchrone
 */

function useAsyncEffect(fn, deps = []) {
  /* eslint-disable */
  y(() => {
    fn();
  }, deps);
  /* eslint-enable */
}

/**
 * Loader animé
 */
function Loader({
  className = 'icon',
  ...props
}) {
  return v("spinning-dots", _extends({
    className: className
  }, props));
}

function PrimaryButton({
  children,
  ...props
}) {
  return v(Button, _extends({
    className: "btn-primary"
  }, props), children);
}
function SecondaryButton({
  children,
  ...props
}) {
  return v(Button, _extends({
    className: "btn-secondary"
  }, props), children);
}
/**
 *
 * @param {*} children
 * @param {string} className
 * @param {string} size
 * @param {boolean} loading
 * @param {Object} props
 * @return {*}
 */

function Button({
  children,
  className = '',
  loading = false,
  size,
  ...props
}) {
  return v("button", _extends({
    className: `btn ${className} ${size && `btn-${size}`}`,
    disabled: loading
  }, props), loading && v(Loader, {
    className: "icon"
  }), children);
}

function Stack({
  children,
  gap
}) {
  const style = gap ? `--gap:${gap}` : null;
  return v("div", {
    class: "stack",
    style: style
  }, children);
}
function Flex({
  children,
  gap,
  center,
  nowrap
}) {
  const style = {};

  if (gap) {
    style['--gap'] = gap;
  }

  if (center) {
    style['align-items'] = 'center';
  }

  if (nowrap) {
    style['flex-wrap'] = 'nowrap';
  }

  return v("div", {
    class: "hstack",
    style: style
  }, children);
}

/**
 * Représente un champs, dans le contexte du formulaire
 *
 * @param type
 * @param name
 * @param onInput
 * @param value
 * @param error
 * @param props
 * @return {*}
 * @constructor
 */

function Field({
  name,
  onInput,
  value,
  error,
  children,
  type = 'text',
  className = '',
  wrapperClass = '',
  ...props
}) {
  // Hooks
  const [dirty, setDirty] = l(false);
  const ref = s$1(null);
  useAutofocus(ref, props.autofocus);
  const showError = error && !dirty;

  function handleInput(e) {
    if (dirty === false) {
      setDirty(true);
    }

    if (onInput) {
      onInput(e);
    }
  } // Si le champs a une erreur et n'a pas été modifié


  if (showError) {
    className += ' is-invalid';
  } // Les attributs à passer aux champs


  const attr = {
    name,
    id: name,
    value,
    className,
    onInput: handleInput,
    type,
    ...props
  }; // Si l'erreur change on considère le champs comme "clean"

  h$1(() => {
    if (dirty === true) {
      setDirty(false);
    }
  }, [error, dirty]);
  return v("div", {
    className: `form-group ${wrapperClass}`,
    ref: ref
  }, children && v("label", {
    htmlFor: name
  }, children), (() => {
    if (props.component) {
      const Component = props.component;
      return v(Component, attr);
    }

    switch (type) {
      case 'textarea':
        return v(FieldTextarea, attr);

      case 'editor':
        return v(FieldEditor, attr);

      default:
        return v(FieldInput, attr);
    }
  })(), showError && v("div", {
    className: "invalid-feedback"
  }, error));
}

function FieldTextarea(props) {
  return v("textarea", props);
}

function FieldInput(props) {
  return v("input", props);
}

function FieldEditor(props) {
  const ref = s$1(null);
  y(() => {
    if (ref.current) {
      ref.current.syncEditor();
    }
  }, [props.value]);
  return v("textarea", _extends({}, props, {
    is: "markdown-editor",
    ref: ref
  }));
}
/**
 * Version contextualisée des champs pour le formulaire
 */


const FormContext = B({
  errors: {},
  loading: false,
  emptyError: () => {}
});
/**
 * Formulaire Ajax
 *
 * @param {object} value Donnée à transmettre au serveur et aux champs
 * @param onChange
 * @param className
 * @param children
 * @param {string} action URL de l'action à appeler pour traiter le formulaire
 * @param {object} data Données à envoyer à l'API et à fusionner avec les données du formulaire
 * @param {string} method Méthode d'envoie des données
 * @param {bool} floatingAlert
 * @param onSuccess Fonction appelée en cas de retour valide de l'API (reçoit les données de l'API en paramètre)
 */

function FetchForm({
  data = {},
  children,
  action,
  className,
  method = 'POST',
  onSuccess = () => {},
  floatingAlert = false
}) {
  const [{
    loading,
    errors
  }, setState] = l({
    loading: false,
    errors: []
  });
  const mainError = errors.main || null; // Vide l'erreur associée à un champs donnée

  const emptyError = name => {
    if (!errors[name]) return null;
    const newErrors = { ...errors
    };
    delete newErrors[name];
    setState(s => ({ ...s,
      errors: newErrors
    }));
  }; // On soumet le formulaire au travers d'une requête Ajax


  const handleSubmit = async e => {
    e.preventDefault();
    setState({
      loading: true,
      errors: []
    });
    const form = e.target;
    const formData = { ...data,
      ...Object.fromEntries(new FormData(form))
    };

    try {
      const response = await jsonFetch(action, {
        method,
        body: formData
      });
      onSuccess(response);
      form.reset();
    } catch (e) {
      if (e instanceof ApiError) {
        setState(s => ({ ...s,
          errors: e.violations
        }));
      } else if (e.detail) {
        flash(e.detail, 'danger', null);
      } else {
        flash(e, 'danger', null);
        throw e;
      }
    }

    setState(s => ({ ...s,
      loading: false
    }));
  };

  return v(FormContext.Provider, {
    value: {
      loading,
      errors,
      emptyError
    }
  }, v("form", {
    onSubmit: handleSubmit,
    className: className
  }, mainError && v("alert-message", {
    type: "danger",
    onClose: () => emptyError('main'),
    className: floatingAlert ? 'is-floating' : 'full'
  }, mainError), children));
}
/**
 * Représente un champs, dans le contexte du formulaire
 *
 * @param {string} type
 * @param {string} name
 * @return {*}
 * @constructor
 */

function FormField({
  type = 'text',
  name,
  children,
  ...props
}) {
  const {
    errors,
    emptyError,
    loading
  } = F(FormContext);
  const error = errors[name] || null;
  return v(Field, _extends({
    type: type,
    name: name,
    error: error,
    onInput: () => emptyError(name),
    readonly: loading
  }, props), children);
}
/**
 * Représente un bouton, dans le contexte du formulaire
 *
 * @param children
 * @param props
 * @return {*}
 * @constructor
 */

function FormPrimaryButton({
  children,
  ...props
}) {
  const {
    loading,
    errors
  } = F(FormContext);
  const disabled = loading || Object.keys(errors).filter(k => k !== 'main').length > 0;
  return v(PrimaryButton, _extends({
    loading: loading,
    disabled: disabled
  }, props), children);
}

/**
 * Vérifie si l'utilisateur est admin
 *
 * @return {boolean}
 */
function isAdmin() {
  return window.grafikart.ADMIN === true;
}
/**
 * Vérifie si l'utilisateur est connecté
 *
 * @return {boolean}
 */

function isAuthenticated() {
  return window.grafikart.USER !== null;
}
/**
 * Vérifie si l'utilisateur connecté correspond à l'id passé en paramètre
 *
 * @param {number} userId
 * @return {boolean}
 */

function canManage(userId) {
  if (isAdmin()) {
    return true;
  }

  if (!userId) {
    return false;
  }

  return window.grafikart.USER === parseInt(userId, 10);
}

function CreateMessage({
  topic,
  parent
}) {
  const [value, setValue] = l({
    content: ''
  });
  const endpoint = `/api/forum/topics/${topic}/messages`;

  const onSuccess = function (data) {
    const message = strToDom(data.html);
    parent.insertAdjacentElement('beforebegin', message);
    slideDown(message);
    setValue({
      content: ''
    });
  };

  return isAuthenticated() && v(FetchForm, {
    action: endpoint,
    value: value,
    onChange: setValue,
    onSuccess: onSuccess
  }, v(Stack, null, v(FormField, {
    placeholder: "Votre message",
    name: "content",
    type: "editor"
  }, "Votre message"), v(FormPrimaryButton, null, "R\xE9pondre")));
}

function SlideIn({
  show,
  children,
  style = {},
  forwardedRef = null,
  ...props
}) {
  const [shouldRender, setRender] = l(show);
  y(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = e => {
    if (!show && e.animationName === 'slideOut') setRender(false);
  };

  return shouldRender && v("div", _extends({
    style: {
      animation: `${show ? 'slideIn' : 'slideOut'} .3s both`,
      ...style
    },
    onAnimationEnd: onAnimationEnd,
    ref: forwardedRef
  }, props), children);
}

/**
 * Bouton de signalement avec formulaire en tooltip
 */

function ForumReport({
  message,
  topic
}) {
  // Hooks
  const ref = s$1(null);
  const [showForm, toggleForm] = useToggle(false);
  const [success, toggleSuccess] = useToggle(false);
  useClickOutside(ref, toggleForm);

  if (!isAuthenticated()) {
    return null;
  }

  return v("div", {
    style: {
      position: 'relative'
    }
  }, v("button", {
    className: "rounded-button warning",
    onClick: toggleForm,
    disabled: success,
    title: "Signaler le message"
  }, "!"), v(SlideIn, {
    show: showForm && !success,
    className: "forum-report__form",
    forwardedRef: ref
  }, v(ReportForm, {
    message: message,
    topic: topic,
    onSuccess: toggleSuccess
  })));
}
/**
 * Formulaire de signalement
 */

function ReportForm({
  onSuccess,
  message,
  topic
}) {
  const data = {
    message: null,
    topic: null
  };

  if (message) {
    data.message = `/api/forum/messages/${message}`;
  } else if (topic) {
    data.topic = `/api/forum/topics/${topic}`;
  } else {
    throw new Error('Impossible de charger le formulaire de signalement');
  }

  const placeholder = 'Indiquez en quoi ce sujet ne convient pas';
  const action = '/api/forum/reports';

  const onReportSuccess = function () {
    flash('Merci pour votre signalement');
    onSuccess();
  };

  return v(FetchForm, {
    data: data,
    className: "forum-report stack",
    action: action,
    onSuccess: onReportSuccess
  }, v(FormField, {
    type: "textarea",
    name: "reason",
    required: true,
    placeholder: placeholder,
    autofocus: true
  }, "Raison du signalement"), v(FormPrimaryButton, null, "Envoyer"));
}

/**
 * Loader animé
 */
function Loader$1({
  className = 'icon',
  ...props
}) {
  return v("spinning-dots", _extends({
    className: className
  }, props));
}

/**
 * Redirect to a specific url using turbolink
 */

function redirect(url) {
  return new Promise(resolve => {
    const onLoad = function () {
      resolve();
      document.removeEventListener('turbolinks:load', onLoad);
    };

    document.addEventListener('turbolinks:load', onLoad);
    turbolinks.visit(url);
  });
}

function ForumDelete({
  message,
  topic,
  owner
}) {
  let endpoint = null;

  if (message) {
    endpoint = `/api/forum/messages/${message}`;
  } else if (topic) {
    endpoint = `/api/forum/topics/${topic}`;
  } else {
    throw new Error('Impossible de charger le composant de suppression');
  } // On prépare les hooks


  const button = s$1(null);
  const {
    loading: deleteLoading,
    fetch: deleteFetch,
    done
  } = useJsonFetchOrFlash(endpoint, {
    method: 'DELETE'
  });
  useAsyncEffect(async () => {
    if (done) {
      if (message) {
        const message = closest(button.current, '.forum-message');
        flash('Votre message a bien été supprimé');
        message.remove();
      } else {
        await redirect('/forum');
        flash('Votre sujet a bien été supprimé');
      }
    }
  }, [done, message, topic]); // Handler

  const handleDeleteClick = async () => {
    if (!confirm('Voulez vous vraiment supprimer ce message ?')) {
      return;
    }

    await deleteFetch();
  }; // L'utilisateur ne peut pas intervenir sur ce sujet


  if (!canManage(owner)) {
    return null;
  }

  return v(p, null, ' ', "-", ' ', v("button", {
    className: "text-danger",
    onClick: handleDeleteClick,
    disabled: deleteLoading,
    ref: button
  }, deleteLoading && v(Loader$1, {
    style: {
      width: 12,
      marginRight: 5
    }
  }), "Supprimer"));
}

function S$1(n,t){for(var e in t)n[e]=t[e];return n}function g$2(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w$2(n){this.props=n;}(w$2.prototype=new d).isPureReactComponent=!0,w$2.prototype.shouldComponentUpdate=function(n,t){return g$2(this.props,n)||g$2(this.state,t)};var R=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var O$1=n.__e;function L$1(n){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),(n=S$1({},n)).__c=null,n.__k=n.__k&&n.__k.map(L$1)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function F$1(){this.__u=0,this.t=null,this.__b=null;}function M$1(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function I$1(){this.u=null,this.o=null;}n.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);O$1(n,t,e);},(F$1.prototype=new d).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=M$1(r.__v),o=!1,i=function(){o||(o=!0,e.componentWillUnmount=e.__c,u?u(c):c());};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c();};var c=function(){var n;if(!--r.__u)for(r.__v.__k[0]=U(r.state.__e),r.setState({__e:r.__b=null});n=r.t.pop();)n.forceUpdate();};!0===t.__h||r.__u++||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},F$1.prototype.componentWillUnmount=function(){this.t=[];},F$1.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L$1(this.__b)),this.__b=null);var e=t.__e&&v(p,null,n.fallback);return e&&(e.__h=null),[v(p,null,t.__e?null:n.children),e]};var T$1=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function W(n){return this.getChildContext=function(){return n.context},n.children}function j$2(n){var t=this,e=n.i,r=v(W,{context:t.context},n.__v);t.componentWillUnmount=function(){var n=t.l.parentNode;n&&n.removeChild(t.l),L(t.s);},t.i&&t.i!==e&&(t.componentWillUnmount(),t.h=!1),n.__v?t.h?(e.__k=t.__k,O(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),t.__k=e.__k,S("",e),e.appendChild(t.l),t.h=!0,t.i=e,O(r,e,t.l),e.__k=t.__k,t.__k=t.l.__k):t.h&&t.componentWillUnmount(),t.s=r;}function P$1(n,t){return v(j$2,{__v:n,i:t})}(I$1.prototype=new d).__e=function(n){var t=this,e=M$1(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T$1(t,n,r)):u();};e?e(o):o();}},I$1.prototype.render=function(n){this.u=null,this.o=new Map;var t=b(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},I$1.prototype.componentDidUpdate=I$1.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T$1(n,e,t);});};var z$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B$1="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var Y=n.event;function $$1(){}function q$1(){return this.cancelBubble}function G(){return this.defaultPrevented}n.event=function(n){return Y&&(n=Y(n)),n.persist=$$1,n.isPropagationStopped=q$1,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=n.vnode;n.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B$1.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o;}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=b(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),n.props=r;}t&&e.class!=e.className&&(K.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",K)),n.$$typeof=z$1,Q&&Q(n);};var X=n.__r;n.__r=function(n){X&&X(n),J=n.__c;};

/**
 * Trouve le endpoint à contacter en fonction de l'élément à modifier
 *
 * @param {string|number|null} message
 * @param {string|number|null} topic
 * @return {string}
 */
function resolveEndpoint({
  message,
  topic
}) {
  if (message) {
    return `/api/forum/messages/${message}`;
  } else if (topic) {
    return `/api/forum/topics/${topic}`;
  }

  throw new Error("Impossible de charger le composant d'édition");
}

function ForumEdit({
  message,
  topic,
  owner
}) {
  const element = s$1();
  const container = s$1();
  const [rawContent, setRawContent] = l(null);
  const [loading, setLoading] = l(false);
  const [state, setState] = l('view');
  const endpoint = resolveEndpoint({
    message,
    topic
  }); // Handler

  async function startEditing() {
    // On récupère le contenu original
    if (rawContent === null) {
      setLoading(true);
      const response = await jsonFetch(endpoint);
      setLoading(false);
      setRawContent(response.content);
    }

    const message = element.current.closest('.forum-message');
    container.current = message.querySelector('.js-forum-edit');
    message.querySelector('.js-content').style.display = 'none';
    setState('edit');
  }

  function handleCancel() {
    setState('view');
    const message = element.current.closest('.forum-message');
    message.querySelector('.js-content').style.display = null;
  }

  function handleSuccess(data) {
    // On met à jour le contenu dans la div
    const message = element.current.closest('.forum-message');
    setRawContent(data.content);
    message.querySelector('.js-content').innerHTML = data.formattedContent; // On revient sur l'affichage du message

    handleCancel();
  } // L'utilisateur ne peut pas intervenir sur ce sujet


  if (!canManage(owner)) {
    return null;
  }

  if (topic) {
    return v(p, null, "- ", v("a", {
      href: `/forum/${topic}/edit`
    }, "Editer"));
  }

  return v("span", {
    ref: element
  }, state === 'view' && v(p, null, "-", ' ', v("button", {
    onClick: startEditing
  }, loading && v(Loader$1, {
    style: {
      width: 12,
      marginRight: 5
    }
  }), "Editer")), state === 'edit' && v(ForumEditor, {
    container: container.current,
    endpoint: endpoint,
    content: rawContent,
    onSuccess: handleSuccess,
    onCancel: handleCancel
  }));
}
/**
 * Génère un éditeur pour l'édition d'un message sur le forum
 */

function ForumEditor({
  container,
  endpoint,
  onCancel,
  content,
  onSuccess
}) {
  return P$1(v(FetchForm, {
    action: endpoint,
    method: "PUT",
    onSuccess: onSuccess
  }, v(Stack, null, v(FormField, {
    name: "content",
    defaultValue: content,
    type: "editor"
  }), v(Flex, null, v(FormPrimaryButton, null, "Editer"), v(SecondaryButton, {
    onClick: onCancel,
    type: "button"
  }, "Annuler")))), container);
}

/**
 * Icône basé sur la sprite SVG
 * @param {{name: string}} props
 */
function Icon({
  name,
  size
}) {
  const className = `icon icon-${name}`;
  const href = `/sprite.svg#${name}`;
  return v("svg", {
    className: className,
    width: size,
    height: size
  }, v("use", {
    xlinkHref: href
  }));
}

/**
 * Génère un bouton permettant de lire tous les sujets du forum
 * @param {Object} props
 * @param {string} props.endpoint
 */

function ForumRead({
  endpoint
}) {
  const {
    loading,
    done,
    fetch
  } = useJsonFetchOrFlash(endpoint, {
    method: 'POST'
  });
  y(() => {
    if (done) {
      flash('Tous les sujets ont été marqués comme lu');
      Array.from(document.querySelectorAll('.forum-topic')).forEach(topic => topic.classList.add('is-read'));
    }
  }, [done]);

  if (!isAuthenticated() || done) {
    return null;
  }

  return v(SecondaryButton, {
    size: "small",
    loading: loading,
    onClick: fetch
  }, !loading && v(Icon, {
    name: "eye"
  }), " Marquer tous comme lus");
}

/**
 * Bouton pour marquer un message comme solution
 */

function ForumSolve({
  message,
  topicAuthor,
  disabled,
  parent
}) {
  const button = s$1(null);
  const [success, setSuccess] = l(disabled !== undefined);
  const [loading, setLoading] = l(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      await jsonFetch(`/api/forum/messages/${message}/solve`, {
        method: 'post'
      });
      flash('Le sujet a bien été marqué comme résolu');
      setSuccess(true);
      const messageElement = closest(button.current, '.forum-message');

      if (messageElement) {
        messageElement.classList.add('is-accepted');
      }
    } catch (e) {
      flash('Une erreur serveur est survenue', 'danger');
    }

    setLoading(false);
  };

  if (!canManage(topicAuthor)) {
    parent.remove();
    return null;
  }

  return v("button", {
    ref: button,
    className: "rounded-button success",
    onClick: handleClick,
    disabled: success,
    title: "R\xE9pond \xE0 ma question !"
  }, loading ? v(Loader$1, null) : '✓');
}

preactCustomElement('forum-delete', ForumDelete);
preactCustomElement('forum-edit', ForumEdit);
preactCustomElement('forum-create-message', CreateMessage, ['topic']);
preactCustomElement('forum-report', ForumReport, ['message', 'topic']);
preactCustomElement('forum-solve', ForumSolve, ['message', 'topicAuthor', 'disabled']);
preactCustomElement('forum-read', ForumRead, ['endpoint']);

customElements.define('input-switch', Switch, {
  extends: 'input'
});
customElements.define('markdown-editor', MarkdownEditor, {
  extends: 'textarea'
});
turbolinks.start();
