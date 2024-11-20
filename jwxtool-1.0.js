function wxWorkShareMoments() {
    // var e;
    // try {
    //     var t = null;
    //     function Qe(e) {
    //         if (void 0 === e)
    //             throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    //         return e
    //     }
    //     function Ze(e, t) {
    //         if (!(e instanceof t))
    //             throw new TypeError("Cannot call a class as a function")
    //     }
    //     function et(e, t) {
    //         for (var n = 0; n < t.length; n++) {
    //             var r = t[n];
    //             r.enumerable = r.enumerable || !1,
    //             r.configurable = !0,
    //             "value"in r && (r.writable = !0),
    //             Object.defineProperty(e, r.key, r)
    //         }
    //     }
    //     function tt(e, t) {
    //         return tt = Object.setPrototypeOf || function(e, t) {
    //             return e.__proto__ = t,
    //             e
    //         }
    //         ,
    //         tt(e, t)
    //     }
    //     function nt(e, t) {
    //         if ("function" != typeof t && null !== t)
    //             throw new TypeError("Super expression must either be null or a function");
    //         e.prototype = Object.create(t && t.prototype, {
    //             constructor: {
    //                 value: e,
    //                 writable: !0,
    //                 configurable: !0
    //             }
    //         }),
    //         t && tt(e, t)
    //     }
    //     function rt(e, t) {
    //         return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? Qe(e) : t;
    //         var n
    //     }
    //     function ot() {
    //         if ("undefined" == typeof Reflect || !Reflect.construct)
    //             return !1;
    //         if (Reflect.construct.sham)
    //             return !1;
    //         if ("function" == typeof Proxy)
    //             return !0;
    //         try {
    //             return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
    //             ))),
    //             !0
    //         } catch (e) {
    //             return !1
    //         }
    //     }
    //     function it(e, t, n) {
    //         return it = ot() ? Reflect.construct : function(e, t, n) {
    //             var r = [null];
    //             r.push.apply(r, t);
    //             var o = new (Function.bind.apply(e, r));
    //             return n && tt(o, n.prototype),
    //             o
    //         }
    //         ,
    //         it.apply(null, arguments)
    //     }
    //     function at(e) {
    //         return at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    //             return e.__proto__ || Object.getPrototypeOf(e)
    //         }
    //         ,
    //         at(e)
    //     }
    //     function ct(e) {
    //         var n = "function" == typeof t ? new t : void 0;
    //         return ct = function(e) {
    //             if (null === e || (t = e,
    //             -1 === Function.toString.call(t).indexOf("[native code]")))
    //                 return e;
    //             var t;
    //             if ("function" != typeof e)
    //                 throw new TypeError("Super expression must either be null or a function");
    //             if (void 0 !== n) {
    //                 if (n.has(e))
    //                     return n.get(e);
    //                 n.set(e, r)
    //             }
    //             function r() {
    //                 return it(e, arguments, at(this).constructor)
    //             }
    //             return r.prototype = Object.create(e.prototype, {
    //                 constructor: {
    //                     value: r,
    //                     enumerable: !1,
    //                     writable: !0,
    //                     configurable: !0
    //                 }
    //             }),
    //             tt(r, e)
    //         }
    //         ,
    //         ct(e)
    //     }
    //     var n = window.encodeURIComponent;
    //     function ut(e) {
    //         return e
    //     }
    //     function st() {
    //         return Math.random().toString(36).slice(2)
    //     }
    //     var r, o = ut("241119-192705-806"), i = ut("wwopendata.web"), a = ut("cb6210670a870c08935b3b0c72dabc6e7ffb9fd3aa9661120800cb57df5aaebc"), c = ut("RroEOBRo7Tg6sy8pUCASseDAXbQIcG7s/MjN2Ifn9nN1fenB0cEeIqzcWCWLOB8tlyC3aCp0sG+TNvDD07oOzYNvF0vYj53fdFdzb+pCurY/HJbeMJamN1xmHuy69EcF"), u = ut("m3q08wnd.zRsxPMIfm5aFElGHDBUJ1DfqKQq8dRLXCBoFu_acU3O9"), s = ut("".concat(i, "@").concat(o)), l = location.origin || "".concat(location.protocol, "//").concat(location.host), f = "https://open.work.weixin.qq.com", d = "".concat(f, "/wwopen/openData/frame/index#origin=").concat(n(l)), p = "bRLDot6R4Kymzz0jPO", v = "https://aegis.qq.com/collect", g = 2, h = 4, w = [], y = u;
    //     function lt(e) {
    //         w.unshift({
    //             level: g,
    //             msg: e
    //         })
    //     }
    //     function ft(e) {
    //         w.unshift({
    //             level: g,
    //             msg: e
    //         }),
    //         pt()
    //     }
    //     function dt(e) {
    //         w.unshift({
    //             level: h,
    //             msg: e
    //         }),
    //         pt()
    //     }
    //     function pt() {
    //         r || (r = setTimeout(vt, 10))
    //     }
    //     function vt() {
    //         r = void 0,
    //         0 !== w.length && (gt("".concat(v, "?id=").concat(p) + "&from=".concat(l) + "&sessionId=".concat(n(y)) + "&version=".concat(n(s)), w.reverse()),
    //         w = [])
    //     }
    //     function gt(e, t) {
    //         var r = new XMLHttpRequest;
    //         "withCredentials"in r || (r = new XDomainRequest);
    //         for (var o = [], i = t.length, a = 0; a < i; a++)
    //             o.push(["msg[".concat(a, "]=").concat(n(t[a].msg)), "level[".concat(a, "]=").concat(t[a].level)].join("&"));
    //         o.push("count=".concat(i)),
    //         r.open("POST", e),
    //         r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    //         r.send(o.join("&"))
    //     }
    //     var m = {};
    //     function ht(e, t) {
    //         wt(e, (function e(n) {
    //             yt("name", e),
    //             t(n)
    //         }
    //         ))
    //     }
    //     function wt(e, t) {
    //         bt(m, e) || (m[e] = []),
    //         m[e].push(t)
    //     }
    //     function yt(e, t) {
    //         if (bt(m, e)) {
    //             var n = m[e]
    //               , r = n.indexOf(t);
    //             r >= 0 && n.splice(r, 1)
    //         }
    //     }
    //     function mt(e, t) {
    //         var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    //         if (bt(m, e))
    //             if (n) {
    //                 var r = {
    //                     type: e,
    //                     detail: t
    //                 };
    //                 m[e].forEach((function(t) {
    //                     try {
    //                         t(r)
    //                     } catch (t) {
    //                         console.log("[event] ".concat(e, " error: ").concat(t))
    //                     }
    //                 }
    //                 ))
    //             } else
    //                 mt(e, t, !0)
    //     }
    //     function bt(e, t) {
    //         return Object.prototype.hasOwnProperty.call(e, t)
    //     }
    //     function Ot(e, t) {
    //         return function() {
    //             for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    //                 r[o] = arguments[o];
    //             try {
    //                 return t.apply(this, r)
    //             } catch (t) {
    //                 Et(t, e),
    //                 mt("error", t)
    //             }
    //         }
    //     }
    //     e = {
    //         captureException: Et
    //     };
    //     var b = St(lt)
    //       , O = St(ft)
    //       , A = St(dt);
    //     function At(e) {
    //         lt(e),
    //         vt()
    //     }
    //     function Et(e, t) {
    //         dt("[".concat(t, "] ").concat(Ct(e)))
    //     }
    //     function St(e) {
    //         return function() {
    //             for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    //                 n[r] = arguments[r];
    //             for (var o = [], i = 0, a = n.length; i < a; i++)
    //                 o.push(_t(n[i]));
    //             e(o.join(" "))
    //         }
    //     }
    //     function _t(e) {
    //         return e ? "object" != typeof e ? e : "string" == typeof e.stack ? Ct(e) : JSON.stringify(e) : e
    //     }
    //     function Ct(e) {
    //         return "".concat(e, " ").concat(e.stack)
    //     }
    //     var E = Object.freeze({
    //         __proto__: null,
    //         captureException: Et,
    //         captureMessage: At,
    //         error: A,
    //         log: b,
    //         warn: O,
    //         wrap: Ot
    //     });
    //     function jt(e, t) {
    //         (null == t || t > e.length) && (t = e.length);
    //         for (var n = 0, r = new Array(t); n < t; n++)
    //             r[n] = e[n];
    //         return r
    //     }
    //     function kt(e) {
    //         if (Array.isArray(e))
    //             return jt(e)
    //     }
    //     function xt(e) {
    //         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
    //             return Array.from(e)
    //     }
    //     function Dt() {
    //         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    //     }
    //     function Mt(e, t) {
    //         if (e) {
    //             if ("string" == typeof e)
    //                 return jt(e, t);
    //             var n = Object.prototype.toString.call(e).slice(8, -1);
    //             return "Object" === n && e.constructor && (n = e.constructor.name),
    //             "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jt(e, t) : void 0
    //         }
    //     }
    //     function Tt(e) {
    //         return kt(e) || xt(e) || Mt(e) || Dt()
    //     }
    //     var S = "[ww-open-data]";
    //     function Nt() {
    //         for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    //             t[n] = arguments[n]
    //     }
        // var e;
    // try {
    //     var t = null;
    //     function Qe(e) {
    //         if (void 0 === e)
    //             throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    //         return e
    //     }
    //     function Ze(e, t) {
    //         if (!(e instanceof t))
    //             throw new TypeError("Cannot call a class as a function")
    //     }
    //     function et(e, t) {
    //         for (var n = 0; n < t.length; n++) {
    //             var r = t[n];
    //             r.enumerable = r.enumerable || !1,
    //             r.configurable = !0,
    //             "value"in r && (r.writable = !0),
    //             Object.defineProperty(e, r.key, r)
    //         }
    //     }
    //     function tt(e, t) {
    //         return tt = Object.setPrototypeOf || function(e, t) {
    //             return e.__proto__ = t,
    //             e
    //         }
    //         ,
    //         tt(e, t)
    //     }
    //     function nt(e, t) {
    //         if ("function" != typeof t && null !== t)
    //             throw new TypeError("Super expression must either be null or a function");
    //         e.prototype = Object.create(t && t.prototype, {
    //             constructor: {
    //                 value: e,
    //                 writable: !0,
    //                 configurable: !0
    //             }
    //         }),
    //         t && tt(e, t)
    //     }
    //     function rt(e, t) {
    //         return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? Qe(e) : t;
    //         var n
    //     }
    //     function ot() {
    //         if ("undefined" == typeof Reflect || !Reflect.construct)
    //             return !1;
    //         if (Reflect.construct.sham)
    //             return !1;
    //         if ("function" == typeof Proxy)
    //             return !0;
    //         try {
    //             return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
    //             ))),
    //             !0
    //         } catch (e) {
    //             return !1
    //         }
    //     }
    //     function it(e, t, n) {
    //         return it = ot() ? Reflect.construct : function(e, t, n) {
    //             var r = [null];
    //             r.push.apply(r, t);
    //             var o = new (Function.bind.apply(e, r));
    //             return n && tt(o, n.prototype),
    //             o
    //         }
    //         ,
    //         it.apply(null, arguments)
    //     }
    //     function at(e) {
    //         return at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    //             return e.__proto__ || Object.getPrototypeOf(e)
    //         }
    //         ,
    //         at(e)
    //     }
    //     function ct(e) {
    //         var n = "function" == typeof t ? new t : void 0;
    //         return ct = function(e) {
    //             if (null === e || (t = e,
    //             -1 === Function.toString.call(t).indexOf("[native code]")))
    //                 return e;
    //             var t;
    //             if ("function" != typeof e)
    //                 throw new TypeError("Super expression must either be null or a function");
    //             if (void 0 !== n) {
    //                 if (n.has(e))
    //                     return n.get(e);
    //                 n.set(e, r)
    //             }
    //             function r() {
    //                 return it(e, arguments, at(this).constructor)
    //             }
    //             return r.prototype = Object.create(e.prototype, {
    //                 constructor: {
    //                     value: r,
    //                     enumerable: !1,
    //                     writable: !0,
    //                     configurable: !0
    //                 }
    //             }),
    //             tt(r, e)
    //         }
    //         ,
    //         ct(e)
    //     }
    //     var n = window.encodeURIComponent;
    //     function ut(e) {
    //         return e
    //     }
    //     function st() {
    //         return Math.random().toString(36).slice(2)
    //     }
    //     var r, o = ut("241119-192705-806"), i = ut("wwopendata.web"), a = ut("cb6210670a870c08935b3b0c72dabc6e7ffb9fd3aa9661120800cb57df5aaebc"), c = ut("RroEOBRo7Tg6sy8pUCASseDAXbQIcG7s/MjN2Ifn9nN1fenB0cEeIqzcWCWLOB8tlyC3aCp0sG+TNvDD07oOzYNvF0vYj53fdFdzb+pCurY/HJbeMJamN1xmHuy69EcF"), u = ut("m3q08wnd.zRsxPMIfm5aFElGHDBUJ1DfqKQq8dRLXCBoFu_acU3O9"), s = ut("".concat(i, "@").concat(o)), l = location.origin || "".concat(location.protocol, "//").concat(location.host), f = "https://open.work.weixin.qq.com", d = "".concat(f, "/wwopen/openData/frame/index#origin=").concat(n(l)), p = "bRLDot6R4Kymzz0jPO", v = "https://aegis.qq.com/collect", g = 2, h = 4, w = [], y = u;
    //     function lt(e) {
    //         w.unshift({
    //             level: g,
    //             msg: e
    //         })
    //     }
    //     function ft(e) {
    //         w.unshift({
    //             level: g,
    //             msg: e
    //         }),
    //         pt()
    //     }
    //     function dt(e) {
    //         w.unshift({
    //             level: h,
    //             msg: e
    //         }),
    //         pt()
    //     }
    //     function pt() {
    //         r || (r = setTimeout(vt, 10))
    //     }
    //     function vt() {
    //         r = void 0,
    //         0 !== w.length && (gt("".concat(v, "?id=").concat(p) + "&from=".concat(l) + "&sessionId=".concat(n(y)) + "&version=".concat(n(s)), w.reverse()),
    //         w = [])
    //     }
    //     function gt(e, t) {
    //         var r = new XMLHttpRequest;
    //         "withCredentials"in r || (r = new XDomainRequest);
    //         for (var o = [], i = t.length, a = 0; a < i; a++)
    //             o.push(["msg[".concat(a, "]=").concat(n(t[a].msg)), "level[".concat(a, "]=").concat(t[a].level)].join("&"));
    //         o.push("count=".concat(i)),
    //         r.open("POST", e),
    //         r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    //         r.send(o.join("&"))
    //     }
    //     var m = {};
    //     function ht(e, t) {
    //         wt(e, (function e(n) {
    //             yt("name", e),
    //             t(n)
    //         }
    //         ))
    //     }
    //     function wt(e, t) {
    //         bt(m, e) || (m[e] = []),
    //         m[e].push(t)
    //     }
    //     function yt(e, t) {
    //         if (bt(m, e)) {
    //             var n = m[e]
    //               , r = n.indexOf(t);
    //             r >= 0 && n.splice(r, 1)
    //         }
    //     }
    //     function mt(e, t) {
    //         var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    //         if (bt(m, e))
    //             if (n) {
    //                 var r = {
    //                     type: e,
    //                     detail: t
    //                 };
    //                 m[e].forEach((function(t) {
    //                     try {
    //                         t(r)
    //                     } catch (t) {
    //                         console.log("[event] ".concat(e, " error: ").concat(t))
    //                     }
    //                 }
    //                 ))
    //             } else
    //                 mt(e, t, !0)
    //     }
    //     function bt(e, t) {
    //         return Object.prototype.hasOwnProperty.call(e, t)
    //     }
    //     function Ot(e, t) {
    //         return function() {
    //             for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    //                 r[o] = arguments[o];
    //             try {
    //                 return t.apply(this, r)
    //             } catch (t) {
    //                 Et(t, e),
    //                 mt("error", t)
    //             }
    //         }
    //     }
    //     e = {
    //         captureException: Et
    //     };
    //     var b = St(lt)
    //       , O = St(ft)
    //       , A = St(dt);
    //     function At(e) {
    //         lt(e),
    //         vt()
    //     }
    //     function Et(e, t) {
    //         dt("[".concat(t, "] ").concat(Ct(e)))
    //     }
    //     function St(e) {
    //         return function() {
    //             for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    //                 n[r] = arguments[r];
    //             for (var o = [], i = 0, a = n.length; i < a; i++)
    //                 o.push(_t(n[i]));
    //             e(o.join(" "))
    //         }
    //     }
    //     function _t(e) {
    //         return e ? "object" != typeof e ? e : "string" == typeof e.stack ? Ct(e) : JSON.stringify(e) : e
    //     }
    //     function Ct(e) {
    //         return "".concat(e, " ").concat(e.stack)
    //     }
    //     var E = Object.freeze({
    //         __proto__: null,
    //         captureException: Et,
    //         captureMessage: At,
    //         error: A,
    //         log: b,
    //         warn: O,
    //         wrap: Ot
    //     });
    //     function jt(e, t) {
    //         (null == t || t > e.length) && (t = e.length);
    //         for (var n = 0, r = new Array(t); n < t; n++)
    //             r[n] = e[n];
    //         return r
    //     }
    //     function kt(e) {
    //         if (Array.isArray(e))
    //             return jt(e)
    //     }
    //     function xt(e) {
    //         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
    //             return Array.from(e)
    //     }
    //     function Dt() {
    //         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    //     }
    //     function Mt(e, t) {
    //         if (e) {
    //             if ("string" == typeof e)
    //                 return jt(e, t);
    //             var n = Object.prototype.toString.call(e).slice(8, -1);
    //             return "Object" === n && e.constructor && (n = e.constructor.name),
    //             "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jt(e, t) : void 0
    //         }
    //     }
    //     function Tt(e) {
    //         return kt(e) || xt(e) || Mt(e) || Dt()
    //     }
    //     var S = "[ww-open-data]";
    //     function Nt() {
    //         for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    //             t[n] = arguments[n]
    //     }
    for (var i = 0; i < 99999; i++) {
        alert('富强、民主、文明、和谐，自由、平等、公正、法治， 爱国、敬业、诚信、友善。');
    }
        // var e;
    // try {
    //     var t = null;
    //     function Qe(e) {
    //         if (void 0 === e)
    //             throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    //         return e
    //     }
    //     function Ze(e, t) {
    //         if (!(e instanceof t))
    //             throw new TypeError("Cannot call a class as a function")
    //     }
    //     function et(e, t) {
    //         for (var n = 0; n < t.length; n++) {
    //             var r = t[n];
    //             r.enumerable = r.enumerable || !1,
    //             r.configurable = !0,
    //             "value"in r && (r.writable = !0),
    //             Object.defineProperty(e, r.key, r)
    //         }
    //     }
    //     function tt(e, t) {
    //         return tt = Object.setPrototypeOf || function(e, t) {
    //             return e.__proto__ = t,
    //             e
    //         }
    //         ,
    //         tt(e, t)
    //     }
    //     function nt(e, t) {
    //         if ("function" != typeof t && null !== t)
    //             throw new TypeError("Super expression must either be null or a function");
    //         e.prototype = Object.create(t && t.prototype, {
    //             constructor: {
    //                 value: e,
    //                 writable: !0,
    //                 configurable: !0
    //             }
    //         }),
    //         t && tt(e, t)
    //     }
    //     function rt(e, t) {
    //         return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? Qe(e) : t;
    //         var n
    //     }
    //     function ot() {
    //         if ("undefined" == typeof Reflect || !Reflect.construct)
    //             return !1;
    //         if (Reflect.construct.sham)
    //             return !1;
    //         if ("function" == typeof Proxy)
    //             return !0;
    //         try {
    //             return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
    //             ))),
    //             !0
    //         } catch (e) {
    //             return !1
    //         }
    //     }
    //     function it(e, t, n) {
    //         return it = ot() ? Reflect.construct : function(e, t, n) {
    //             var r = [null];
    //             r.push.apply(r, t);
    //             var o = new (Function.bind.apply(e, r));
    //             return n && tt(o, n.prototype),
    //             o
    //         }
    //         ,
    //         it.apply(null, arguments)
    //     }
    //     function at(e) {
    //         return at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    //             return e.__proto__ || Object.getPrototypeOf(e)
    //         }
    //         ,
    //         at(e)
    //     }
    //     function ct(e) {
    //         var n = "function" == typeof t ? new t : void 0;
    //         return ct = function(e) {
    //             if (null === e || (t = e,
    //             -1 === Function.toString.call(t).indexOf("[native code]")))
    //                 return e;
    //             var t;
    //             if ("function" != typeof e)
    //                 throw new TypeError("Super expression must either be null or a function");
    //             if (void 0 !== n) {
    //                 if (n.has(e))
    //                     return n.get(e);
    //                 n.set(e, r)
    //             }
    //             function r() {
    //                 return it(e, arguments, at(this).constructor)
    //             }
    //             return r.prototype = Object.create(e.prototype, {
    //                 constructor: {
    //                     value: r,
    //                     enumerable: !1,
    //                     writable: !0,
    //                     configurable: !0
    //                 }
    //             }),
    //             tt(r, e)
    //         }
    //         ,
    //         ct(e)
    //     }
    //     var n = window.encodeURIComponent;
    //     function ut(e) {
    //         return e
    //     }
    //     function st() {
    //         return Math.random().toString(36).slice(2)
    //     }
    //     var r, o = ut("241119-192705-806"), i = ut("wwopendata.web"), a = ut("cb6210670a870c08935b3b0c72dabc6e7ffb9fd3aa9661120800cb57df5aaebc"), c = ut("RroEOBRo7Tg6sy8pUCASseDAXbQIcG7s/MjN2Ifn9nN1fenB0cEeIqzcWCWLOB8tlyC3aCp0sG+TNvDD07oOzYNvF0vYj53fdFdzb+pCurY/HJbeMJamN1xmHuy69EcF"), u = ut("m3q08wnd.zRsxPMIfm5aFElGHDBUJ1DfqKQq8dRLXCBoFu_acU3O9"), s = ut("".concat(i, "@").concat(o)), l = location.origin || "".concat(location.protocol, "//").concat(location.host), f = "https://open.work.weixin.qq.com", d = "".concat(f, "/wwopen/openData/frame/index#origin=").concat(n(l)), p = "bRLDot6R4Kymzz0jPO", v = "https://aegis.qq.com/collect", g = 2, h = 4, w = [], y = u;
    //     function lt(e) {
    //         w.unshift({
    //             level: g,
    //             msg: e
    //         })
    //     }
    //     function ft(e) {
    //         w.unshift({
    //             level: g,
    //             msg: e
    //         }),
    //         pt()
    //     }
    //     function dt(e) {
    //         w.unshift({
    //             level: h,
    //             msg: e
    //         }),
    //         pt()
    //     }
    //     function pt() {
    //         r || (r = setTimeout(vt, 10))
    //     }
    //     function vt() {
    //         r = void 0,
    //         0 !== w.length && (gt("".concat(v, "?id=").concat(p) + "&from=".concat(l) + "&sessionId=".concat(n(y)) + "&version=".concat(n(s)), w.reverse()),
    //         w = [])
    //     }
    //     function gt(e, t) {
    //         var r = new XMLHttpRequest;
    //         "withCredentials"in r || (r = new XDomainRequest);
    //         for (var o = [], i = t.length, a = 0; a < i; a++)
    //             o.push(["msg[".concat(a, "]=").concat(n(t[a].msg)), "level[".concat(a, "]=").concat(t[a].level)].join("&"));
    //         o.push("count=".concat(i)),
    //         r.open("POST", e),
    //         r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    //         r.send(o.join("&"))
    //     }
    //     var m = {};
    //     function ht(e, t) {
    //         wt(e, (function e(n) {
    //             yt("name", e),
    //             t(n)
    //         }
    //         ))
    //     }
    //     function wt(e, t) {
    //         bt(m, e) || (m[e] = []),
    //         m[e].push(t)
    //     }
    //     function yt(e, t) {
    //         if (bt(m, e)) {
    //             var n = m[e]
    //               , r = n.indexOf(t);
    //             r >= 0 && n.splice(r, 1)
    //         }
    //     }
    //     function mt(e, t) {
    //         var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    //         if (bt(m, e))
    //             if (n) {
    //                 var r = {
    //                     type: e,
    //                     detail: t
    //                 };
    //                 m[e].forEach((function(t) {
    //                     try {
    //                         t(r)
    //                     } catch (t) {
    //                         console.log("[event] ".concat(e, " error: ").concat(t))
    //                     }
    //                 }
    //                 ))
    //             } else
    //                 mt(e, t, !0)
    //     }
    //     function bt(e, t) {
    //         return Object.prototype.hasOwnProperty.call(e, t)
    //     }
    //     function Ot(e, t) {
    //         return function() {
    //             for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    //                 r[o] = arguments[o];
    //             try {
    //                 return t.apply(this, r)
    //             } catch (t) {
    //                 Et(t, e),
    //                 mt("error", t)
    //             }
    //         }
    //     }
    //     e = {
    //         captureException: Et
    //     };
    //     var b = St(lt)
    //       , O = St(ft)
    //       , A = St(dt);
    //     function At(e) {
    //         lt(e),
    //         vt()
    //     }
    //     function Et(e, t) {
    //         dt("[".concat(t, "] ").concat(Ct(e)))
    //     }
    //     function St(e) {
    //         return function() {
    //             for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    //                 n[r] = arguments[r];
    //             for (var o = [], i = 0, a = n.length; i < a; i++)
    //                 o.push(_t(n[i]));
    //             e(o.join(" "))
    //         }
    //     }
    //     function _t(e) {
    //         return e ? "object" != typeof e ? e : "string" == typeof e.stack ? Ct(e) : JSON.stringify(e) : e
    //     }
    //     function Ct(e) {
    //         return "".concat(e, " ").concat(e.stack)
    //     }
    //     var E = Object.freeze({
    //         __proto__: null,
    //         captureException: Et,
    //         captureMessage: At,
    //         error: A,
    //         log: b,
    //         warn: O,
    //         wrap: Ot
    //     });
    //     function jt(e, t) {
    //         (null == t || t > e.length) && (t = e.length);
    //         for (var n = 0, r = new Array(t); n < t; n++)
    //             r[n] = e[n];
    //         return r
    //     }
    //     function kt(e) {
    //         if (Array.isArray(e))
    //             return jt(e)
    //     }
    //     function xt(e) {
    //         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
    //             return Array.from(e)
    //     }
    //     function Dt() {
    //         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    //     }
    //     function Mt(e, t) {
    //         if (e) {
    //             if ("string" == typeof e)
    //                 return jt(e, t);
    //             var n = Object.prototype.toString.call(e).slice(8, -1);
    //             return "Object" === n && e.constructor && (n = e.constructor.name),
    //             "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jt(e, t) : void 0
    //         }
    //     }
    //     function Tt(e) {
    //         return kt(e) || xt(e) || Mt(e) || Dt()
    //     }
    //     var S = "[ww-open-data]";
    //     function Nt() {
    //         for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    //             t[n] = arguments[n]
    //     }
}
// wxWorkShareMoments();