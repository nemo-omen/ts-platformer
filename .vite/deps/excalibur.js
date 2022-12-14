var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.deno/excalibur@0.24.5/node_modules/excalibur/dist/excalibur.min.js
var require_excalibur_min = __commonJS({
  "node_modules/.deno/excalibur@0.24.5/node_modules/excalibur/dist/excalibur.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ex = e() : t.ex = e();
    }(window, function() {
      return function(t) {
        var e = {};
        function n(i) {
          if (e[i])
            return e[i].exports;
          var r = e[i] = { i, l: false, exports: {} };
          return t[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, i) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: i });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var i = /* @__PURE__ */ Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var r in t2)
              n.d(i, r, function(e3) {
                return t2[e3];
              }.bind(null, r));
          return i;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "", n(n.s = 139);
      }([function(t, e, n) {
        var i = n(5), r = n(48).f, o = n(16), s = n(49), a = n(30), c = n(79), h = n(83);
        t.exports = function(t2, e2) {
          var n2, u, l, p, d, f = t2.target, y = t2.global, g = t2.stat;
          if (n2 = y ? i : g ? i[f] || a(f, {}) : (i[f] || {}).prototype)
            for (u in e2) {
              if (p = e2[u], l = t2.noTargetGet ? (d = r(n2, u)) && d.value : n2[u], !h(y ? u : f + (g ? "." : "#") + u, t2.forced) && void 0 !== l) {
                if (typeof p == typeof l)
                  continue;
                c(p, l);
              }
              (t2.sham || l && l.sham) && o(p, "sham", true), s(n2, u, p, t2);
            }
        };
      }, function(t, e, n) {
        var i = n(5), r = n(45), o = n(8), s = n(46), a = n(52), c = n(86), h = r("wks"), u = i.Symbol, l = c ? u : u && u.withoutSetter || s;
        t.exports = function(t2) {
          return o(h, t2) || (a && o(u, t2) ? h[t2] = u[t2] : h[t2] = l("Symbol." + t2)), h[t2];
        };
      }, function(t, e, n) {
        var i = n(11), r = n(4), o = n(8), s = Object.defineProperty, a = {}, c = function(t2) {
          throw t2;
        };
        t.exports = function(t2, e2) {
          if (o(a, t2))
            return a[t2];
          e2 || (e2 = {});
          var n2 = [][t2], h = !!o(e2, "ACCESSORS") && e2.ACCESSORS, u = o(e2, 0) ? e2[0] : c, l = o(e2, 1) ? e2[1] : void 0;
          return a[t2] = !!n2 && !r(function() {
            if (h && !i)
              return true;
            var t3 = { length: -1 };
            h ? s(t3, 1, { enumerable: true, get: c }) : t3[1] = 1, n2.call(t3, u, l);
          });
        };
      }, function(t, e, n) {
        var i = n(15), r = Math.min;
        t.exports = function(t2) {
          return t2 > 0 ? r(i(t2), 9007199254740991) : 0;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          try {
            return !!t2();
          } catch (t3) {
            return true;
          }
        };
      }, function(t, e, n) {
        (function(e2) {
          var n2 = function(t2) {
            return t2 && t2.Math == Math && t2;
          };
          t.exports = n2("object" == typeof globalThis && globalThis) || n2("object" == typeof window && window) || n2("object" == typeof self && self) || n2("object" == typeof e2 && e2) || Function("return this")();
        }).call(this, n(77));
      }, function(t, e, n) {
        var i = n(28);
        t.exports = function(t2) {
          return Object(i(t2));
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
        };
      }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t2, e2) {
          return n.call(t2, e2);
        };
      }, function(t, e, n) {
        var i = n(11), r = n(43), o = n(17), s = n(31), a = Object.defineProperty;
        e.f = i ? a : function(t2, e2, n2) {
          if (o(t2), e2 = s(e2, true), o(n2), r)
            try {
              return a(t2, e2, n2);
            } catch (t3) {
            }
          if ("get" in n2 || "set" in n2)
            throw TypeError("Accessors not supported");
          return "value" in n2 && (t2[e2] = n2.value), t2;
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(4);
        t.exports = function(t2, e2) {
          var n2 = [][t2];
          return !!n2 && i(function() {
            n2.call(null, e2 || function() {
              throw 1;
            }, 1);
          });
        };
      }, function(t, e, n) {
        var i = n(4);
        t.exports = !i(function() {
          return 7 != Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1];
        });
      }, function(t, e, n) {
        var i = n(1), r = n(53), o = n(9), s = i("unscopables"), a = Array.prototype;
        null == a[s] && o.f(a, s, { configurable: true, value: r(null) }), t.exports = function(t2) {
          a[s][t2] = true;
        };
      }, function(t, e, n) {
        var i = n(26), r = n(28);
        t.exports = function(t2) {
          return i(r(t2));
        };
      }, function(t, e, n) {
        var i = n(40), r = n(26), o = n(6), s = n(3), a = n(23), c = [].push, h = function(t2) {
          var e2 = 1 == t2, n2 = 2 == t2, h2 = 3 == t2, u = 4 == t2, l = 6 == t2, p = 5 == t2 || l;
          return function(d, f, y, g) {
            for (var _, v, m = o(d), b = r(m), w = i(f, y, 3), x = s(b.length), P = 0, A = g || a, E = e2 ? A(d, x) : n2 ? A(d, 0) : void 0; x > P; P++)
              if ((p || P in b) && (v = w(_ = b[P], P, m), t2)) {
                if (e2)
                  E[P] = v;
                else if (v)
                  switch (t2) {
                    case 3:
                      return true;
                    case 5:
                      return _;
                    case 6:
                      return P;
                    case 2:
                      c.call(E, _);
                  }
                else if (u)
                  return false;
              }
            return l ? -1 : h2 || u ? u : E;
          };
        };
        t.exports = { forEach: h(0), map: h(1), filter: h(2), some: h(3), every: h(4), find: h(5), findIndex: h(6) };
      }, function(t, e) {
        var n = Math.ceil, i = Math.floor;
        t.exports = function(t2) {
          return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? i : n)(t2);
        };
      }, function(t, e, n) {
        var i = n(11), r = n(9), o = n(25);
        t.exports = i ? function(t2, e2, n2) {
          return r.f(t2, e2, o(1, n2));
        } : function(t2, e2, n2) {
          return t2[e2] = n2, t2;
        };
      }, function(t, e, n) {
        var i = n(7);
        t.exports = function(t2) {
          if (!i(t2))
            throw TypeError(String(t2) + " is not an object");
          return t2;
        };
      }, function(t, e, n) {
        var i = n(35);
        t.exports = Array.isArray || function(t2) {
          return "Array" == i(t2);
        };
      }, function(t, e, n) {
        var i = n(15), r = Math.max, o = Math.min;
        t.exports = function(t2, e2) {
          var n2 = i(t2);
          return n2 < 0 ? r(n2 + e2, 0) : o(n2, e2);
        };
      }, function(t, e) {
        t.exports = {};
      }, function(t, e) {
        t.exports = function(t2) {
          if ("function" != typeof t2)
            throw TypeError(String(t2) + " is not a function");
          return t2;
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(31), r = n(9), o = n(25);
        t.exports = function(t2, e2, n2) {
          var s = i(e2);
          s in t2 ? r.f(t2, s, o(0, n2)) : t2[s] = n2;
        };
      }, function(t, e, n) {
        var i = n(7), r = n(18), o = n(1)("species");
        t.exports = function(t2, e2) {
          var n2;
          return r(t2) && ("function" != typeof (n2 = t2.constructor) || n2 !== Array && !r(n2.prototype) ? i(n2) && null === (n2 = n2[o]) && (n2 = void 0) : n2 = void 0), new (void 0 === n2 ? Array : n2)(0 === e2 ? 0 : e2);
        };
      }, function(t, e, n) {
        var i = n(4), r = n(1), o = n(55), s = r("species");
        t.exports = function(t2) {
          return o >= 51 || !i(function() {
            var e2 = [];
            return (e2.constructor = {})[s] = function() {
              return { foo: 1 };
            }, 1 !== e2[t2](Boolean).foo;
          });
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
        };
      }, function(t, e, n) {
        var i = n(4), r = n(35), o = "".split;
        t.exports = i(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(t2) {
          return "String" == r(t2) ? o.call(t2, "") : Object(t2);
        } : Object;
      }, function(t, e, n) {
        var i = n(36), r = n(5), o = function(t2) {
          return "function" == typeof t2 ? t2 : void 0;
        };
        t.exports = function(t2, e2) {
          return arguments.length < 2 ? o(i[t2]) || o(r[t2]) : i[t2] && i[t2][e2] || r[t2] && r[t2][e2];
        };
      }, function(t, e) {
        t.exports = function(t2) {
          if (null == t2)
            throw TypeError("Can't call method on " + t2);
          return t2;
        };
      }, function(t, e, n) {
        var i, r, o, s = n(76), a = n(5), c = n(7), h = n(16), u = n(8), l = n(32), p = n(34), d = a.WeakMap;
        if (s) {
          var f = new d(), y = f.get, g = f.has, _ = f.set;
          i = function(t2, e2) {
            return _.call(f, t2, e2), e2;
          }, r = function(t2) {
            return y.call(f, t2) || {};
          }, o = function(t2) {
            return g.call(f, t2);
          };
        } else {
          var v = l("state");
          p[v] = true, i = function(t2, e2) {
            return h(t2, v, e2), e2;
          }, r = function(t2) {
            return u(t2, v) ? t2[v] : {};
          }, o = function(t2) {
            return u(t2, v);
          };
        }
        t.exports = { set: i, get: r, has: o, enforce: function(t2) {
          return o(t2) ? r(t2) : i(t2, {});
        }, getterFor: function(t2) {
          return function(e2) {
            var n2;
            if (!c(e2) || (n2 = r(e2)).type !== t2)
              throw TypeError("Incompatible receiver, " + t2 + " required");
            return n2;
          };
        } };
      }, function(t, e, n) {
        var i = n(5), r = n(16);
        t.exports = function(t2, e2) {
          try {
            r(i, t2, e2);
          } catch (n2) {
            i[t2] = e2;
          }
          return e2;
        };
      }, function(t, e, n) {
        var i = n(7);
        t.exports = function(t2, e2) {
          if (!i(t2))
            return t2;
          var n2, r;
          if (e2 && "function" == typeof (n2 = t2.toString) && !i(r = n2.call(t2)))
            return r;
          if ("function" == typeof (n2 = t2.valueOf) && !i(r = n2.call(t2)))
            return r;
          if (!e2 && "function" == typeof (n2 = t2.toString) && !i(r = n2.call(t2)))
            return r;
          throw TypeError("Can't convert object to primitive value");
        };
      }, function(t, e, n) {
        var i = n(45), r = n(46), o = i("keys");
        t.exports = function(t2) {
          return o[t2] || (o[t2] = r(t2));
        };
      }, function(t, e) {
        t.exports = false;
      }, function(t, e) {
        t.exports = {};
      }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t2) {
          return n.call(t2).slice(8, -1);
        };
      }, function(t, e, n) {
        var i = n(5);
        t.exports = i;
      }, function(t, e, n) {
        var i = n(13), r = n(3), o = n(19), s = function(t2) {
          return function(e2, n2, s2) {
            var a, c = i(e2), h = r(c.length), u = o(s2, h);
            if (t2 && n2 != n2) {
              for (; h > u; )
                if ((a = c[u++]) != a)
                  return true;
            } else
              for (; h > u; u++)
                if ((t2 || u in c) && c[u] === n2)
                  return t2 || u || 0;
            return !t2 && -1;
          };
        };
        t.exports = { includes: s(true), indexOf: s(false) };
      }, function(t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }, function(t, e, n) {
        var i = n(8), r = n(6), o = n(32), s = n(85), a = o("IE_PROTO"), c = Object.prototype;
        t.exports = s ? Object.getPrototypeOf : function(t2) {
          return t2 = r(t2), i(t2, a) ? t2[a] : "function" == typeof t2.constructor && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? c : null;
        };
      }, function(t, e, n) {
        var i = n(21);
        t.exports = function(t2, e2, n2) {
          if (i(t2), void 0 === e2)
            return t2;
          switch (n2) {
            case 0:
              return function() {
                return t2.call(e2);
              };
            case 1:
              return function(n3) {
                return t2.call(e2, n3);
              };
            case 2:
              return function(n3, i2) {
                return t2.call(e2, n3, i2);
              };
            case 3:
              return function(n3, i2, r) {
                return t2.call(e2, n3, i2, r);
              };
          }
          return function() {
            return t2.apply(e2, arguments);
          };
        };
      }, function(t, e, n) {
        var i = n(42), r = Function.toString;
        "function" != typeof i.inspectSource && (i.inspectSource = function(t2) {
          return r.call(t2);
        }), t.exports = i.inspectSource;
      }, function(t, e, n) {
        var i = n(5), r = n(30), o = i["__core-js_shared__"] || r("__core-js_shared__", {});
        t.exports = o;
      }, function(t, e, n) {
        var i = n(11), r = n(4), o = n(44);
        t.exports = !i && !r(function() {
          return 7 != Object.defineProperty(o("div"), "a", { get: function() {
            return 7;
          } }).a;
        });
      }, function(t, e, n) {
        var i = n(5), r = n(7), o = i.document, s = r(o) && r(o.createElement);
        t.exports = function(t2) {
          return s ? o.createElement(t2) : {};
        };
      }, function(t, e, n) {
        var i = n(33), r = n(42);
        (t.exports = function(t2, e2) {
          return r[t2] || (r[t2] = void 0 !== e2 ? e2 : {});
        })("versions", []).push({ version: "3.6.5", mode: i ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
      }, function(t, e) {
        var n = 0, i = Math.random();
        t.exports = function(t2) {
          return "Symbol(" + String(void 0 === t2 ? "" : t2) + ")_" + (++n + i).toString(36);
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(84), o = n(39), s = n(90), a = n(54), c = n(16), h = n(49), u = n(1), l = n(33), p = n(20), d = n(51), f = d.IteratorPrototype, y = d.BUGGY_SAFARI_ITERATORS, g = u("iterator"), _ = function() {
          return this;
        };
        t.exports = function(t2, e2, n2, u2, d2, v, m) {
          r(n2, e2, u2);
          var b, w, x, P = function(t3) {
            if (t3 === d2 && O)
              return O;
            if (!y && t3 in S)
              return S[t3];
            switch (t3) {
              case "keys":
              case "values":
              case "entries":
                return function() {
                  return new n2(this, t3);
                };
            }
            return function() {
              return new n2(this);
            };
          }, A = e2 + " Iterator", E = false, S = t2.prototype, C = S[g] || S["@@iterator"] || d2 && S[d2], O = !y && C || P(d2), T = "Array" == e2 && S.entries || C;
          if (T && (b = o(T.call(new t2())), f !== Object.prototype && b.next && (l || o(b) === f || (s ? s(b, f) : "function" != typeof b[g] && c(b, g, _)), a(b, A, true, true), l && (p[A] = _))), "values" == d2 && C && "values" !== C.name && (E = true, O = function() {
            return C.call(this);
          }), l && !m || S[g] === O || c(S, g, O), p[e2] = O, d2)
            if (w = { values: P("values"), keys: v ? O : P("keys"), entries: P("entries") }, m)
              for (x in w)
                !y && !E && x in S || h(S, x, w[x]);
            else
              i({ target: e2, proto: true, forced: y || E }, w);
          return w;
        };
      }, function(t, e, n) {
        var i = n(11), r = n(78), o = n(25), s = n(13), a = n(31), c = n(8), h = n(43), u = Object.getOwnPropertyDescriptor;
        e.f = i ? u : function(t2, e2) {
          if (t2 = s(t2), e2 = a(e2, true), h)
            try {
              return u(t2, e2);
            } catch (t3) {
            }
          if (c(t2, e2))
            return o(!r.f.call(t2, e2), t2[e2]);
        };
      }, function(t, e, n) {
        var i = n(5), r = n(16), o = n(8), s = n(30), a = n(41), c = n(29), h = c.get, u = c.enforce, l = String(String).split("String");
        (t.exports = function(t2, e2, n2, a2) {
          var c2 = !!a2 && !!a2.unsafe, h2 = !!a2 && !!a2.enumerable, p = !!a2 && !!a2.noTargetGet;
          "function" == typeof n2 && ("string" != typeof e2 || o(n2, "name") || r(n2, "name", e2), u(n2).source = l.join("string" == typeof e2 ? e2 : "")), t2 !== i ? (c2 ? !p && t2[e2] && (h2 = true) : delete t2[e2], h2 ? t2[e2] = n2 : r(t2, e2, n2)) : h2 ? t2[e2] = n2 : s(e2, n2);
        })(Function.prototype, "toString", function() {
          return "function" == typeof this && h(this).source || a(this);
        });
      }, function(t, e, n) {
        var i = n(8), r = n(13), o = n(37).indexOf, s = n(34);
        t.exports = function(t2, e2) {
          var n2, a = r(t2), c = 0, h = [];
          for (n2 in a)
            !i(s, n2) && i(a, n2) && h.push(n2);
          for (; e2.length > c; )
            i(a, n2 = e2[c++]) && (~o(h, n2) || h.push(n2));
          return h;
        };
      }, function(t, e, n) {
        "use strict";
        var i, r, o, s = n(39), a = n(16), c = n(8), h = n(1), u = n(33), l = h("iterator"), p = false;
        [].keys && ("next" in (o = [].keys()) ? (r = s(s(o))) !== Object.prototype && (i = r) : p = true), null == i && (i = {}), u || c(i, l) || a(i, l, function() {
          return this;
        }), t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: p };
      }, function(t, e, n) {
        var i = n(4);
        t.exports = !!Object.getOwnPropertySymbols && !i(function() {
          return !String(Symbol());
        });
      }, function(t, e, n) {
        var i, r = n(17), o = n(87), s = n(38), a = n(34), c = n(89), h = n(44), u = n(32), l = u("IE_PROTO"), p = function() {
        }, d = function(t2) {
          return "<script>" + t2 + "<\/script>";
        }, f = function() {
          try {
            i = document.domain && new ActiveXObject("htmlfile");
          } catch (t3) {
          }
          var t2, e2;
          f = i ? function(t3) {
            t3.write(d("")), t3.close();
            var e3 = t3.parentWindow.Object;
            return t3 = null, e3;
          }(i) : ((e2 = h("iframe")).style.display = "none", c.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write(d("document.F=Object")), t2.close(), t2.F);
          for (var n2 = s.length; n2--; )
            delete f.prototype[s[n2]];
          return f();
        };
        a[l] = true, t.exports = Object.create || function(t2, e2) {
          var n2;
          return null !== t2 ? (p.prototype = r(t2), n2 = new p(), p.prototype = null, n2[l] = t2) : n2 = f(), void 0 === e2 ? n2 : o(n2, e2);
        };
      }, function(t, e, n) {
        var i = n(9).f, r = n(8), o = n(1)("toStringTag");
        t.exports = function(t2, e2, n2) {
          t2 && !r(t2 = n2 ? t2 : t2.prototype, o) && i(t2, o, { configurable: true, value: e2 });
        };
      }, function(t, e, n) {
        var i, r, o = n(5), s = n(103), a = o.process, c = a && a.versions, h = c && c.v8;
        h ? r = (i = h.split("."))[0] + i[1] : s && (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = s.match(/Chrome\/(\d+)/)) && (r = i[1]), t.exports = r && +r;
      }, function(t, e, n) {
        "use strict";
        var i = n(18), r = n(3), o = n(40), s = function(t2, e2, n2, a, c, h, u, l) {
          for (var p, d = c, f = 0, y = !!u && o(u, l, 3); f < a; ) {
            if (f in n2) {
              if (p = y ? y(n2[f], f, e2) : n2[f], h > 0 && i(p))
                d = s(t2, e2, p, r(p.length), d, h - 1) - 1;
              else {
                if (d >= 9007199254740991)
                  throw TypeError("Exceed the acceptable array length");
                t2[d] = p;
              }
              d++;
            }
            f++;
          }
          return d;
        };
        t.exports = s;
      }, function(t, e, n) {
        var i = n(21), r = n(6), o = n(26), s = n(3), a = function(t2) {
          return function(e2, n2, a2, c) {
            i(n2);
            var h = r(e2), u = o(h), l = s(h.length), p = t2 ? l - 1 : 0, d = t2 ? -1 : 1;
            if (a2 < 2)
              for (; ; ) {
                if (p in u) {
                  c = u[p], p += d;
                  break;
                }
                if (p += d, t2 ? p < 0 : l <= p)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; t2 ? p >= 0 : l > p; p += d)
              p in u && (c = n2(c, u[p], p, h));
            return c;
          };
        };
        t.exports = { left: a(false), right: a(true) };
      }, function(t, e, n) {
        "use strict";
        var i = n(59), r = n.n(i)()(true);
        r.push([t.i, "/* Buttons styles start */\n\nbutton#excalibur-play {\n  display: inline-block;\n  position: relative;\n  z-index: 999;\n  border-radius: 6px;\n  border: none;\n  /*border: 3px solid;\n    border-color: white;\n    box-shadow: 0 0 10px #ccc;*/\n  padding: 1rem 1.5rem 1rem 4rem;\n  margin: 0;\n  text-decoration: none;\n  background: #00b233;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 2rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\n  animation: excalibur-button-fadein 200ms;\n}\n\n/*\nbutton#excalibur-play {\n  display: none;\n}*/\n\nbutton#excalibur-play:after {\n  position: absolute;\n  content: '';\n  border: 8px solid;\n  border-color: transparent transparent transparent white;\n  left: 35px;\n  top: 24px;\n  width: 0;\n  height: 0;\n}\n\nbutton#excalibur-play:before {\n  position: absolute;\n  content: '';\n  border: 3px solid;\n  left: 19px;\n  top: 14px;\n  border-radius: 20px;\n  width: 30px;\n  height: 30px;\n}\n\nbutton#excalibur-play:hover,\nbutton#excalibur-play:focus {\n  background: #00982c;\n}\n\nbutton#excalibur-play:focus {\n  outline: 1px solid #fff;\n  outline-offset: -4px;\n}\n\nbutton#excalibur-play:active {\n  transform: scale(0.99);\n}\n\n@keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n", "", { version: 3, sources: ["webpack://Loader.css"], names: [], mappings: "AAAA,yBAAyB;;AAEzB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ;;+BAE6B;EAC7B,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,8DAA8D;EAC9D,wBAAwB;EACxB,qBAAqB;;EAErB,gDAAgD,EAAE,oCAAoC;EACtF,6CAA6C,EAAE,iBAAiB;EAChE,4CAA4C,EAAE,sBAAsB;EACpE,2CAA2C,EAAE,iBAAiB;EAC9D,wCAAwC;AAC1C;;AAEA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF", sourcesContent: ["/* Buttons styles start */\n\nbutton#excalibur-play {\n  display: inline-block;\n  position: relative;\n  z-index: 999;\n  border-radius: 6px;\n  border: none;\n  /*border: 3px solid;\n    border-color: white;\n    box-shadow: 0 0 10px #ccc;*/\n  padding: 1rem 1.5rem 1rem 4rem;\n  margin: 0;\n  text-decoration: none;\n  background: #00b233;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 2rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\n  animation: excalibur-button-fadein 200ms;\n}\n\n/*\nbutton#excalibur-play {\n  display: none;\n}*/\n\nbutton#excalibur-play:after {\n  position: absolute;\n  content: '';\n  border: 8px solid;\n  border-color: transparent transparent transparent white;\n  left: 35px;\n  top: 24px;\n  width: 0;\n  height: 0;\n}\n\nbutton#excalibur-play:before {\n  position: absolute;\n  content: '';\n  border: 3px solid;\n  left: 19px;\n  top: 14px;\n  border-radius: 20px;\n  width: 30px;\n  height: 30px;\n}\n\nbutton#excalibur-play:hover,\nbutton#excalibur-play:focus {\n  background: #00982c;\n}\n\nbutton#excalibur-play:focus {\n  outline: 1px solid #fff;\n  outline-offset: -4px;\n}\n\nbutton#excalibur-play:active {\n  transform: scale(0.99);\n}\n\n@keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"], sourceRoot: "" }]), e.a = r;
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t2) {
          var e2 = [];
          return e2.toString = function() {
            return this.map(function(e3) {
              var n2 = function(t3, e4) {
                var n3 = t3[1] || "", i = t3[3];
                if (!i)
                  return n3;
                if (e4 && "function" == typeof btoa) {
                  var r = (s = i, a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(c, " */")), o = i.sources.map(function(t4) {
                    return "/*# sourceURL=".concat(i.sourceRoot || "").concat(t4, " */");
                  });
                  return [n3].concat(o).concat([r]).join("\n");
                }
                var s, a, c;
                return [n3].join("\n");
              }(e3, t2);
              return e3[2] ? "@media ".concat(e3[2], " {").concat(n2, "}") : n2;
            }).join("");
          }, e2.i = function(t3, n2, i) {
            "string" == typeof t3 && (t3 = [[null, t3, ""]]);
            var r = {};
            if (i)
              for (var o = 0; o < this.length; o++) {
                var s = this[o][0];
                null != s && (r[s] = true);
              }
            for (var a = 0; a < t3.length; a++) {
              var c = [].concat(t3[a]);
              i && r[c[0]] || (n2 && (c[2] ? c[2] = "".concat(n2, " and ").concat(c[2]) : c[2] = n2), e2.push(c));
            }
          }, e2;
        };
      }, , , , , , , , , , , , , , function(t, e, n) {
        n(74), n(92), n(100), n(101), n(102), n(104), n(106), n(107), n(109), n(110), n(111), n(112), n(113), n(114), n(116), n(117), n(118), n(119), n(120), n(122), n(123), n(124), n(125), n(126), n(127), n(128), n(129), n(131), n(132), n(133);
        var i = n(36);
        t.exports = i.Array;
      }, function(t, e, n) {
        "use strict";
        var i = n(75).charAt, r = n(29), o = n(47), s = r.set, a = r.getterFor("String Iterator");
        o(String, "String", function(t2) {
          s(this, { type: "String Iterator", string: String(t2), index: 0 });
        }, function() {
          var t2, e2 = a(this), n2 = e2.string, r2 = e2.index;
          return r2 >= n2.length ? { value: void 0, done: true } : (t2 = i(n2, r2), e2.index += t2.length, { value: t2, done: false });
        });
      }, function(t, e, n) {
        var i = n(15), r = n(28), o = function(t2) {
          return function(e2, n2) {
            var o2, s, a = String(r(e2)), c = i(n2), h = a.length;
            return c < 0 || c >= h ? t2 ? "" : void 0 : (o2 = a.charCodeAt(c)) < 55296 || o2 > 56319 || c + 1 === h || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t2 ? a.charAt(c) : o2 : t2 ? a.slice(c, c + 2) : s - 56320 + (o2 - 55296 << 10) + 65536;
          };
        };
        t.exports = { codeAt: o(false), charAt: o(true) };
      }, function(t, e, n) {
        var i = n(5), r = n(41), o = i.WeakMap;
        t.exports = "function" == typeof o && /native code/.test(r(o));
      }, function(t, e) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        var i = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !i.call({ 1: 2 }, 1);
        e.f = o ? function(t2) {
          var e2 = r(this, t2);
          return !!e2 && e2.enumerable;
        } : i;
      }, function(t, e, n) {
        var i = n(8), r = n(80), o = n(48), s = n(9);
        t.exports = function(t2, e2) {
          for (var n2 = r(e2), a = s.f, c = o.f, h = 0; h < n2.length; h++) {
            var u = n2[h];
            i(t2, u) || a(t2, u, c(e2, u));
          }
        };
      }, function(t, e, n) {
        var i = n(27), r = n(81), o = n(82), s = n(17);
        t.exports = i("Reflect", "ownKeys") || function(t2) {
          var e2 = r.f(s(t2)), n2 = o.f;
          return n2 ? e2.concat(n2(t2)) : e2;
        };
      }, function(t, e, n) {
        var i = n(50), r = n(38).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t2) {
          return i(t2, r);
        };
      }, function(t, e) {
        e.f = Object.getOwnPropertySymbols;
      }, function(t, e, n) {
        var i = n(4), r = /#|\.prototype\./, o = function(t2, e2) {
          var n2 = a[s(t2)];
          return n2 == h || n2 != c && ("function" == typeof e2 ? i(e2) : !!e2);
        }, s = o.normalize = function(t2) {
          return String(t2).replace(r, ".").toLowerCase();
        }, a = o.data = {}, c = o.NATIVE = "N", h = o.POLYFILL = "P";
        t.exports = o;
      }, function(t, e, n) {
        "use strict";
        var i = n(51).IteratorPrototype, r = n(53), o = n(25), s = n(54), a = n(20), c = function() {
          return this;
        };
        t.exports = function(t2, e2, n2) {
          var h = e2 + " Iterator";
          return t2.prototype = r(i, { next: o(1, n2) }), s(t2, h, false, true), a[h] = c, t2;
        };
      }, function(t, e, n) {
        var i = n(4);
        t.exports = !i(function() {
          function t2() {
          }
          return t2.prototype.constructor = null, Object.getPrototypeOf(new t2()) !== t2.prototype;
        });
      }, function(t, e, n) {
        var i = n(52);
        t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      }, function(t, e, n) {
        var i = n(11), r = n(9), o = n(17), s = n(88);
        t.exports = i ? Object.defineProperties : function(t2, e2) {
          o(t2);
          for (var n2, i2 = s(e2), a = i2.length, c = 0; a > c; )
            r.f(t2, n2 = i2[c++], e2[n2]);
          return t2;
        };
      }, function(t, e, n) {
        var i = n(50), r = n(38);
        t.exports = Object.keys || function(t2) {
          return i(t2, r);
        };
      }, function(t, e, n) {
        var i = n(27);
        t.exports = i("document", "documentElement");
      }, function(t, e, n) {
        var i = n(17), r = n(91);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var t2, e2 = false, n2 = {};
          try {
            (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), e2 = n2 instanceof Array;
          } catch (t3) {
          }
          return function(n3, o) {
            return i(n3), r(o), e2 ? t2.call(n3, o) : n3.__proto__ = o, n3;
          };
        }() : void 0);
      }, function(t, e, n) {
        var i = n(7);
        t.exports = function(t2) {
          if (!i(t2) && null !== t2)
            throw TypeError("Can't set " + String(t2) + " as a prototype");
          return t2;
        };
      }, function(t, e, n) {
        var i = n(0), r = n(93);
        i({ target: "Array", stat: true, forced: !n(99)(function(t2) {
          Array.from(t2);
        }) }, { from: r });
      }, function(t, e, n) {
        "use strict";
        var i = n(40), r = n(6), o = n(94), s = n(95), a = n(3), c = n(22), h = n(96);
        t.exports = function(t2) {
          var e2, n2, u, l, p, d, f = r(t2), y = "function" == typeof this ? this : Array, g = arguments.length, _ = g > 1 ? arguments[1] : void 0, v = void 0 !== _, m = h(f), b = 0;
          if (v && (_ = i(_, g > 2 ? arguments[2] : void 0, 2)), null == m || y == Array && s(m))
            for (n2 = new y(e2 = a(f.length)); e2 > b; b++)
              d = v ? _(f[b], b) : f[b], c(n2, b, d);
          else
            for (p = (l = m.call(f)).next, n2 = new y(); !(u = p.call(l)).done; b++)
              d = v ? o(l, _, [u.value, b], true) : u.value, c(n2, b, d);
          return n2.length = b, n2;
        };
      }, function(t, e, n) {
        var i = n(17);
        t.exports = function(t2, e2, n2, r) {
          try {
            return r ? e2(i(n2)[0], n2[1]) : e2(n2);
          } catch (e3) {
            var o = t2.return;
            throw void 0 !== o && i(o.call(t2)), e3;
          }
        };
      }, function(t, e, n) {
        var i = n(1), r = n(20), o = i("iterator"), s = Array.prototype;
        t.exports = function(t2) {
          return void 0 !== t2 && (r.Array === t2 || s[o] === t2);
        };
      }, function(t, e, n) {
        var i = n(97), r = n(20), o = n(1)("iterator");
        t.exports = function(t2) {
          if (null != t2)
            return t2[o] || t2["@@iterator"] || r[i(t2)];
        };
      }, function(t, e, n) {
        var i = n(98), r = n(35), o = n(1)("toStringTag"), s = "Arguments" == r(function() {
          return arguments;
        }());
        t.exports = i ? r : function(t2) {
          var e2, n2, i2;
          return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (n2 = function(t3, e3) {
            try {
              return t3[e3];
            } catch (t4) {
            }
          }(e2 = Object(t2), o)) ? n2 : s ? r(e2) : "Object" == (i2 = r(e2)) && "function" == typeof e2.callee ? "Arguments" : i2;
        };
      }, function(t, e, n) {
        var i = {};
        i[n(1)("toStringTag")] = "z", t.exports = "[object z]" === String(i);
      }, function(t, e, n) {
        var i = n(1)("iterator"), r = false;
        try {
          var o = 0, s = { next: function() {
            return { done: !!o++ };
          }, return: function() {
            r = true;
          } };
          s[i] = function() {
            return this;
          }, Array.from(s, function() {
            throw 2;
          });
        } catch (t2) {
        }
        t.exports = function(t2, e2) {
          if (!e2 && !r)
            return false;
          var n2 = false;
          try {
            var o2 = {};
            o2[i] = function() {
              return { next: function() {
                return { done: n2 = true };
              } };
            }, t2(o2);
          } catch (t3) {
          }
          return n2;
        };
      }, function(t, e, n) {
        n(0)({ target: "Array", stat: true }, { isArray: n(18) });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(4), o = n(22);
        i({ target: "Array", stat: true, forced: r(function() {
          function t2() {
          }
          return !(Array.of.call(t2) instanceof t2);
        }) }, { of: function() {
          for (var t2 = 0, e2 = arguments.length, n2 = new ("function" == typeof this ? this : Array)(e2); e2 > t2; )
            o(n2, t2, arguments[t2++]);
          return n2.length = e2, n2;
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(4), o = n(18), s = n(7), a = n(6), c = n(3), h = n(22), u = n(23), l = n(24), p = n(1), d = n(55), f = p("isConcatSpreadable"), y = d >= 51 || !r(function() {
          var t2 = [];
          return t2[f] = false, t2.concat()[0] !== t2;
        }), g = l("concat"), _ = function(t2) {
          if (!s(t2))
            return false;
          var e2 = t2[f];
          return void 0 !== e2 ? !!e2 : o(t2);
        };
        i({ target: "Array", proto: true, forced: !y || !g }, { concat: function(t2) {
          var e2, n2, i2, r2, o2, s2 = a(this), l2 = u(s2, 0), p2 = 0;
          for (e2 = -1, i2 = arguments.length; e2 < i2; e2++)
            if (o2 = -1 === e2 ? s2 : arguments[e2], _(o2)) {
              if (p2 + (r2 = c(o2.length)) > 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              for (n2 = 0; n2 < r2; n2++, p2++)
                n2 in o2 && h(l2, p2, o2[n2]);
            } else {
              if (p2 >= 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              h(l2, p2++, o2);
            }
          return l2.length = p2, l2;
        } });
      }, function(t, e, n) {
        var i = n(27);
        t.exports = i("navigator", "userAgent") || "";
      }, function(t, e, n) {
        var i = n(0), r = n(105), o = n(12);
        i({ target: "Array", proto: true }, { copyWithin: r }), o("copyWithin");
      }, function(t, e, n) {
        "use strict";
        var i = n(6), r = n(19), o = n(3), s = Math.min;
        t.exports = [].copyWithin || function(t2, e2) {
          var n2 = i(this), a = o(n2.length), c = r(t2, a), h = r(e2, a), u = arguments.length > 2 ? arguments[2] : void 0, l = s((void 0 === u ? a : r(u, a)) - h, a - c), p = 1;
          for (h < c && c < h + l && (p = -1, h += l - 1, c += l - 1); l-- > 0; )
            h in n2 ? n2[c] = n2[h] : delete n2[c], c += p, h += p;
          return n2;
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(14).every, o = n(10), s = n(2), a = o("every"), c = s("every");
        i({ target: "Array", proto: true, forced: !a || !c }, { every: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        var i = n(0), r = n(108), o = n(12);
        i({ target: "Array", proto: true }, { fill: r }), o("fill");
      }, function(t, e, n) {
        "use strict";
        var i = n(6), r = n(19), o = n(3);
        t.exports = function(t2) {
          for (var e2 = i(this), n2 = o(e2.length), s = arguments.length, a = r(s > 1 ? arguments[1] : void 0, n2), c = s > 2 ? arguments[2] : void 0, h = void 0 === c ? n2 : r(c, n2); h > a; )
            e2[a++] = t2;
          return e2;
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(14).filter, o = n(24), s = n(2), a = o("filter"), c = s("filter");
        i({ target: "Array", proto: true, forced: !a || !c }, { filter: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(14).find, o = n(12), s = n(2), a = true, c = s("find");
        "find" in [] && Array(1).find(function() {
          a = false;
        }), i({ target: "Array", proto: true, forced: a || !c }, { find: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } }), o("find");
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(14).findIndex, o = n(12), s = n(2), a = true, c = s("findIndex");
        "findIndex" in [] && Array(1).findIndex(function() {
          a = false;
        }), i({ target: "Array", proto: true, forced: a || !c }, { findIndex: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } }), o("findIndex");
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(56), o = n(6), s = n(3), a = n(15), c = n(23);
        i({ target: "Array", proto: true }, { flat: function() {
          var t2 = arguments.length ? arguments[0] : void 0, e2 = o(this), n2 = s(e2.length), i2 = c(e2, 0);
          return i2.length = r(i2, e2, e2, n2, 0, void 0 === t2 ? 1 : a(t2)), i2;
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(56), o = n(6), s = n(3), a = n(21), c = n(23);
        i({ target: "Array", proto: true }, { flatMap: function(t2) {
          var e2, n2 = o(this), i2 = s(n2.length);
          return a(t2), (e2 = c(n2, 0)).length = r(e2, n2, n2, i2, 0, 1, t2, arguments.length > 1 ? arguments[1] : void 0), e2;
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(115);
        i({ target: "Array", proto: true, forced: [].forEach != r }, { forEach: r });
      }, function(t, e, n) {
        "use strict";
        var i = n(14).forEach, r = n(10), o = n(2), s = r("forEach"), a = o("forEach");
        t.exports = s && a ? [].forEach : function(t2) {
          return i(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(37).includes, o = n(12);
        i({ target: "Array", proto: true, forced: !n(2)("indexOf", { ACCESSORS: true, 1: 0 }) }, { includes: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } }), o("includes");
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(37).indexOf, o = n(10), s = n(2), a = [].indexOf, c = !!a && 1 / [1].indexOf(1, -0) < 0, h = o("indexOf"), u = s("indexOf", { ACCESSORS: true, 1: 0 });
        i({ target: "Array", proto: true, forced: c || !h || !u }, { indexOf: function(t2) {
          return c ? a.apply(this, arguments) || 0 : r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(13), r = n(12), o = n(20), s = n(29), a = n(47), c = s.set, h = s.getterFor("Array Iterator");
        t.exports = a(Array, "Array", function(t2, e2) {
          c(this, { type: "Array Iterator", target: i(t2), index: 0, kind: e2 });
        }, function() {
          var t2 = h(this), e2 = t2.target, n2 = t2.kind, i2 = t2.index++;
          return !e2 || i2 >= e2.length ? (t2.target = void 0, { value: void 0, done: true }) : "keys" == n2 ? { value: i2, done: false } : "values" == n2 ? { value: e2[i2], done: false } : { value: [i2, e2[i2]], done: false };
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(26), o = n(13), s = n(10), a = [].join, c = r != Object, h = s("join", ",");
        i({ target: "Array", proto: true, forced: c || !h }, { join: function(t2) {
          return a.call(o(this), void 0 === t2 ? "," : t2);
        } });
      }, function(t, e, n) {
        var i = n(0), r = n(121);
        i({ target: "Array", proto: true, forced: r !== [].lastIndexOf }, { lastIndexOf: r });
      }, function(t, e, n) {
        "use strict";
        var i = n(13), r = n(15), o = n(3), s = n(10), a = n(2), c = Math.min, h = [].lastIndexOf, u = !!h && 1 / [1].lastIndexOf(1, -0) < 0, l = s("lastIndexOf"), p = a("indexOf", { ACCESSORS: true, 1: 0 }), d = u || !l || !p;
        t.exports = d ? function(t2) {
          if (u)
            return h.apply(this, arguments) || 0;
          var e2 = i(this), n2 = o(e2.length), s2 = n2 - 1;
          for (arguments.length > 1 && (s2 = c(s2, r(arguments[1]))), s2 < 0 && (s2 = n2 + s2); s2 >= 0; s2--)
            if (s2 in e2 && e2[s2] === t2)
              return s2 || 0;
          return -1;
        } : h;
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(14).map, o = n(24), s = n(2), a = o("map"), c = s("map");
        i({ target: "Array", proto: true, forced: !a || !c }, { map: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(57).left, o = n(10), s = n(2), a = o("reduce"), c = s("reduce", { 1: 0 });
        i({ target: "Array", proto: true, forced: !a || !c }, { reduce: function(t2) {
          return r(this, t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(57).right, o = n(10), s = n(2), a = o("reduceRight"), c = s("reduce", { 1: 0 });
        i({ target: "Array", proto: true, forced: !a || !c }, { reduceRight: function(t2) {
          return r(this, t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(18), o = [].reverse, s = [1, 2];
        i({ target: "Array", proto: true, forced: String(s) === String(s.reverse()) }, { reverse: function() {
          return r(this) && (this.length = this.length), o.call(this);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(7), o = n(18), s = n(19), a = n(3), c = n(13), h = n(22), u = n(1), l = n(24), p = n(2), d = l("slice"), f = p("slice", { ACCESSORS: true, 0: 0, 1: 2 }), y = u("species"), g = [].slice, _ = Math.max;
        i({ target: "Array", proto: true, forced: !d || !f }, { slice: function(t2, e2) {
          var n2, i2, u2, l2 = c(this), p2 = a(l2.length), d2 = s(t2, p2), f2 = s(void 0 === e2 ? p2 : e2, p2);
          if (o(l2) && ("function" != typeof (n2 = l2.constructor) || n2 !== Array && !o(n2.prototype) ? r(n2) && null === (n2 = n2[y]) && (n2 = void 0) : n2 = void 0, n2 === Array || void 0 === n2))
            return g.call(l2, d2, f2);
          for (i2 = new (void 0 === n2 ? Array : n2)(_(f2 - d2, 0)), u2 = 0; d2 < f2; d2++, u2++)
            d2 in l2 && h(i2, u2, l2[d2]);
          return i2.length = u2, i2;
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(14).some, o = n(10), s = n(2), a = o("some"), c = s("some");
        i({ target: "Array", proto: true, forced: !a || !c }, { some: function(t2) {
          return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(21), o = n(6), s = n(4), a = n(10), c = [], h = c.sort, u = s(function() {
          c.sort(void 0);
        }), l = s(function() {
          c.sort(null);
        }), p = a("sort");
        i({ target: "Array", proto: true, forced: u || !l || !p }, { sort: function(t2) {
          return void 0 === t2 ? h.call(o(this)) : h.call(o(this), r(t2));
        } });
      }, function(t, e, n) {
        n(130)("Array");
      }, function(t, e, n) {
        "use strict";
        var i = n(27), r = n(9), o = n(1), s = n(11), a = o("species");
        t.exports = function(t2) {
          var e2 = i(t2), n2 = r.f;
          s && e2 && !e2[a] && n2(e2, a, { configurable: true, get: function() {
            return this;
          } });
        };
      }, function(t, e, n) {
        "use strict";
        var i = n(0), r = n(19), o = n(15), s = n(3), a = n(6), c = n(23), h = n(22), u = n(24), l = n(2), p = u("splice"), d = l("splice", { ACCESSORS: true, 0: 0, 1: 2 }), f = Math.max, y = Math.min;
        i({ target: "Array", proto: true, forced: !p || !d }, { splice: function(t2, e2) {
          var n2, i2, u2, l2, p2, d2, g = a(this), _ = s(g.length), v = r(t2, _), m = arguments.length;
          if (0 === m ? n2 = i2 = 0 : 1 === m ? (n2 = 0, i2 = _ - v) : (n2 = m - 2, i2 = y(f(o(e2), 0), _ - v)), _ + n2 - i2 > 9007199254740991)
            throw TypeError("Maximum allowed length exceeded");
          for (u2 = c(g, i2), l2 = 0; l2 < i2; l2++)
            (p2 = v + l2) in g && h(u2, l2, g[p2]);
          if (u2.length = i2, n2 < i2) {
            for (l2 = v; l2 < _ - i2; l2++)
              d2 = l2 + n2, (p2 = l2 + i2) in g ? g[d2] = g[p2] : delete g[d2];
            for (l2 = _; l2 > _ - i2 + n2; l2--)
              delete g[l2 - 1];
          } else if (n2 > i2)
            for (l2 = _ - i2; l2 > v; l2--)
              d2 = l2 + n2 - 1, (p2 = l2 + i2 - 1) in g ? g[d2] = g[p2] : delete g[d2];
          for (l2 = 0; l2 < n2; l2++)
            g[l2 + v] = arguments[l2 + 2];
          return g.length = _ - i2 + n2, u2;
        } });
      }, function(t, e, n) {
        n(12)("flat");
      }, function(t, e, n) {
        n(12)("flatMap");
      }, function(t, e, n) {
        n(135), n(137), n(138);
        var i = n(36);
        t.exports = i.Function;
      }, function(t, e, n) {
        n(0)({ target: "Function", proto: true }, { bind: n(136) });
      }, function(t, e, n) {
        "use strict";
        var i = n(21), r = n(7), o = [].slice, s = {}, a = function(t2, e2, n2) {
          if (!(e2 in s)) {
            for (var i2 = [], r2 = 0; r2 < e2; r2++)
              i2[r2] = "a[" + r2 + "]";
            s[e2] = Function("C,a", "return new C(" + i2.join(",") + ")");
          }
          return s[e2](t2, n2);
        };
        t.exports = Function.bind || function(t2) {
          var e2 = i(this), n2 = o.call(arguments, 1), s2 = function() {
            var i2 = n2.concat(o.call(arguments));
            return this instanceof s2 ? a(e2, i2.length, i2) : e2.apply(t2, i2);
          };
          return r(e2.prototype) && (s2.prototype = e2.prototype), s2;
        };
      }, function(t, e, n) {
        var i = n(11), r = n(9).f, o = Function.prototype, s = o.toString, a = /^\s*function ([^ (]*)/;
        !i || "name" in o || r(o, "name", { configurable: true, get: function() {
          try {
            return s.call(this).match(a)[1];
          } catch (t2) {
            return "";
          }
        } });
      }, function(t, e, n) {
        "use strict";
        var i = n(7), r = n(9), o = n(39), s = n(1)("hasInstance"), a = Function.prototype;
        s in a || r.f(a, s, { value: function(t2) {
          if ("function" != typeof this || !i(t2))
            return false;
          if (!i(this.prototype))
            return t2 instanceof this;
          for (; t2 = o(t2); )
            if (this.prototype === t2)
              return true;
          return false;
        } });
      }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "EX_VERSION", function() {
          return $r;
        }), n.d(e, "ScrollPreventionMode", function() {
          return or;
        }), n.d(e, "Engine", function() {
          return lr;
        }), n.d(e, "DisplayMode", function() {
          return Vt;
        }), n.d(e, "Resolution", function() {
          return Jt;
        }), n.d(e, "Screen", function() {
          return $t;
        }), n.d(e, "Actor", function() {
          return bn;
        }), n.d(e, "CollisionType", function() {
          return ct;
        }), n.d(e, "Vector", function() {
          return V;
        }), n.d(e, "Ray", function() {
          return G;
        }), n.d(e, "Line", function() {
          return X;
        }), n.d(e, "Projection", function() {
          return Q;
        }), n.d(e, "GlobalCoordinates", function() {
          return Z;
        }), n.d(e, "vec", function() {
          return K;
        }), n.d(e, "StrategyContainer", function() {
          return Vn;
        }), n.d(e, "Axis", function() {
          return Mn;
        }), n.d(e, "LockCameraToActorStrategy", function() {
          return Kn;
        }), n.d(e, "LockCameraToActorAxisStrategy", function() {
          return Yn;
        }), n.d(e, "ElasticToActorStrategy", function() {
          return Jn;
        }), n.d(e, "RadiusAroundActorStrategy", function() {
          return $n;
        }), n.d(e, "LimitCameraBoundsStrategy", function() {
          return ti;
        }), n.d(e, "Camera", function() {
          return ei;
        }), n.d(e, "Class", function() {
          return ee;
        }), n.d(e, "Configurable", function() {
          return fe;
        }), n.d(e, "Debug", function() {
          return Si;
        }), n.d(e, "FrameStats", function() {
          return Ci;
        }), n.d(e, "PhysicsStats", function() {
          return Oi;
        }), n.d(e, "EventDispatcher", function() {
          return te;
        }), n.d(e, "MediaEvent", function() {
          return fr;
        }), n.d(e, "NativeSoundEvent", function() {
          return yr;
        }), n.d(e, "NativeSoundProcessedEvent", function() {
          return gr;
        }), n.d(e, "EventTypes", function() {
          return ot;
        }), n.d(e, "GameEvent", function() {
          return ht;
        }), n.d(e, "KillEvent", function() {
          return ut;
        }), n.d(e, "PreKillEvent", function() {
          return lt;
        }), n.d(e, "PostKillEvent", function() {
          return pt;
        }), n.d(e, "GameStartEvent", function() {
          return dt;
        }), n.d(e, "GameStopEvent", function() {
          return ft;
        }), n.d(e, "PreDrawEvent", function() {
          return yt;
        }), n.d(e, "PostDrawEvent", function() {
          return gt;
        }), n.d(e, "PreDebugDrawEvent", function() {
          return _t;
        }), n.d(e, "PostDebugDrawEvent", function() {
          return vt;
        }), n.d(e, "PreUpdateEvent", function() {
          return mt;
        }), n.d(e, "PostUpdateEvent", function() {
          return bt;
        }), n.d(e, "PreFrameEvent", function() {
          return wt;
        }), n.d(e, "PostFrameEvent", function() {
          return xt;
        }), n.d(e, "GamepadConnectEvent", function() {
          return Pt;
        }), n.d(e, "GamepadDisconnectEvent", function() {
          return At;
        }), n.d(e, "GamepadButtonEvent", function() {
          return Et;
        }), n.d(e, "GamepadAxisEvent", function() {
          return St;
        }), n.d(e, "SubscribeEvent", function() {
          return Ct;
        }), n.d(e, "UnsubscribeEvent", function() {
          return Ot;
        }), n.d(e, "VisibleEvent", function() {
          return Tt;
        }), n.d(e, "HiddenEvent", function() {
          return Bt;
        }), n.d(e, "PreCollisionEvent", function() {
          return Mt;
        }), n.d(e, "PostCollisionEvent", function() {
          return Dt;
        }), n.d(e, "CollisionStartEvent", function() {
          return kt;
        }), n.d(e, "CollisionEndEvent", function() {
          return Rt;
        }), n.d(e, "InitializeEvent", function() {
          return jt;
        }), n.d(e, "ActivateEvent", function() {
          return Ft;
        }), n.d(e, "DeactivateEvent", function() {
          return It;
        }), n.d(e, "ExitViewPortEvent", function() {
          return Lt;
        }), n.d(e, "EnterViewPortEvent", function() {
          return zt;
        }), n.d(e, "EnterTriggerEvent", function() {
          return Ht;
        }), n.d(e, "ExitTriggerEvent", function() {
          return Ut;
        }), n.d(e, "Label", function() {
          return ii;
        }), n.d(e, "FontStyle", function() {
          return Zn;
        }), n.d(e, "FontUnit", function() {
          return Gn;
        }), n.d(e, "TextAlign", function() {
          return Xn;
        }), n.d(e, "BaseAlign", function() {
          return Qn;
        }), n.d(e, "Loader", function() {
          return jn;
        }), n.d(e, "Particle", function() {
          return vr;
        }), n.d(e, "ParticleEmitter", function() {
          return mr;
        }), n.d(e, "EmitterType", function() {
          return ur;
        }), n.d(e, "CollisionResolutionStrategy", function() {
          return Y;
        }), n.d(e, "BroadphaseStrategy", function() {
          return J;
        }), n.d(e, "Integrator", function() {
          return $;
        }), n.d(e, "Physics", function() {
          return st;
        }), n.d(e, "PromiseState", function() {
          return u;
        }), n.d(e, "Promise", function() {
          return d;
        }), n.d(e, "Scene", function() {
          return xi;
        }), n.d(e, "TileMap", function() {
          return Cn;
        }), n.d(e, "Cell", function() {
          return Tn;
        }), n.d(e, "TileSprite", function() {
          return On;
        }), n.d(e, "Timer", function() {
          return En;
        }), n.d(e, "Trigger", function() {
          return si;
        }), n.d(e, "ScreenElement", function() {
          return Pn;
        }), n.d(e, "UIActor", function() {
          return An;
        }), n.d(e, "ActionContext", function() {
          return qe;
        }), n.d(e, "RotationType", function() {
          return ye;
        }), n.d(e, "Actions", function() {
          return o;
        }), n.d(e, "Internal", function() {
          return br;
        }), n.d(e, "Body", function() {
          return Ge;
        }), n.d(e, "isCollider", function() {
          return on;
        }), n.d(e, "Collider", function() {
          return sn;
        }), n.d(e, "BoundingBox", function() {
          return Kt;
        }), n.d(e, "Circle", function() {
          return Xt;
        }), n.d(e, "CollisionContact", function() {
          return Wt;
        }), n.d(e, "CollisionJumpTable", function() {
          return Nt;
        }), n.d(e, "ClosestLine", function() {
          return qt;
        }), n.d(e, "ClosestLineJumpTable", function() {
          return Gt;
        }), n.d(e, "CollisionGroup", function() {
          return nn;
        }), n.d(e, "CollisionGroupManager", function() {
          return wr;
        }), n.d(e, "TreeNode", function() {
          return Ln;
        }), n.d(e, "DynamicTree", function() {
          return zn;
        }), n.d(e, "DynamicTreeCollisionBroadphase", function() {
          return Hn;
        }), n.d(e, "Edge", function() {
          return Qt;
        }), n.d(e, "Pair", function() {
          return rn;
        }), n.d(e, "ConvexPolygon", function() {
          return Zt;
        }), n.d(e, "Side", function() {
          return p;
        }), n.d(e, "Shape", function() {
          return Ve;
        }), n.d(e, "Animation", function() {
          return Pe;
        }), n.d(e, "Color", function() {
          return et;
        }), n.d(e, "Polygon", function() {
          return Pr;
        }), n.d(e, "Sprite", function() {
          return ve;
        }), n.d(e, "SpriteSheet", function() {
          return Er;
        }), n.d(e, "SpriteFont", function() {
          return Sr;
        }), n.d(e, "Effects", function() {
          return r;
        }), n.d(e, "ExResponse", function() {
          return Cr;
        }), n.d(e, "has_initialize", function() {
          return Or;
        }), n.d(e, "hasOnInitialize", function() {
          return Tr;
        }), n.d(e, "has_preupdate", function() {
          return Br;
        }), n.d(e, "hasOnPreUpdate", function() {
          return Mr;
        }), n.d(e, "has_postupdate", function() {
          return Dr;
        }), n.d(e, "hasOnPostUpdate", function() {
          return kr;
        }), n.d(e, "hasPreDraw", function() {
          return Rr;
        }), n.d(e, "hasPostDraw", function() {
          return jr;
        }), n.d(e, "PerlinGenerator", function() {
          return Lr;
        }), n.d(e, "PerlinDrawer2D", function() {
          return zr;
        }), n.d(e, "Random", function() {
          return f;
        }), n.d(e, "ColorBlindness", function() {
          return yi;
        }), n.d(e, "ColorBlindCorrector", function() {
          return Ai;
        }), n.d(e, "Resource", function() {
          return ie;
        }), n.d(e, "Sound", function() {
          return Gr;
        }), n.d(e, "AudioContextFactory", function() {
          return Bn;
        }), n.d(e, "AudioInstanceFactory", function() {
          return Ur;
        }), n.d(e, "AudioInstance", function() {
          return Wr;
        }), n.d(e, "WebAudioInstance", function() {
          return Nr;
        }), n.d(e, "Texture", function() {
          return be;
        }), n.d(e, "Gif", function() {
          return Qr;
        }), n.d(e, "Stream", function() {
          return Yr;
        }), n.d(e, "ParseGif", function() {
          return Jr;
        }), n.d(e, "Component", function() {
          return cn;
        }), n.d(e, "TagComponent", function() {
          return hn;
        }), n.d(e, "AddedComponent", function() {
          return pn;
        }), n.d(e, "isAddedComponent", function() {
          return dn;
        }), n.d(e, "RemovedComponent", function() {
          return fn;
        }), n.d(e, "isRemovedComponent", function() {
          return yn;
        }), n.d(e, "Entity", function() {
          return gn;
        }), n.d(e, "EntityManager", function() {
          return mi;
        }), n.d(e, "Query", function() {
          return _i;
        }), n.d(e, "QueryManager", function() {
          return vi;
        }), n.d(e, "SystemType", function() {
          return ci;
        }), n.d(e, "System", function() {
          return ui;
        }), n.d(e, "AddedEntity", function() {
          return li;
        }), n.d(e, "isAddedSystemEntity", function() {
          return pi;
        }), n.d(e, "RemovedEntity", function() {
          return di;
        }), n.d(e, "isRemoveSystemEntity", function() {
          return fi;
        }), n.d(e, "SystemManager", function() {
          return bi;
        }), n.d(e, "Events", function() {
          return i;
        }), n.d(e, "Input", function() {
          return a;
        }), n.d(e, "Traits", function() {
          return c;
        }), n.d(e, "Util", function() {
          return h;
        }), n.d(e, "BrowserComponent", function() {
          return sr;
        }), n.d(e, "BrowserEvents", function() {
          return ar;
        }), n.d(e, "maxMessages", function() {
          return z;
        }), n.d(e, "resetObsoleteCounter", function() {
          return U;
        }), n.d(e, "obsolete", function() {
          return N;
        }), n.d(e, "Detector", function() {
          return In;
        }), n.d(e, "CullingBox", function() {
          return Qe;
        }), n.d(e, "EasingFunctions", function() {
          return Ne;
        }), n.d(e, "LogLevel", function() {
          return M;
        }), n.d(e, "Logger", function() {
          return R;
        }), n.d(e, "ConsoleAppender", function() {
          return j;
        }), n.d(e, "ScreenAppender", function() {
          return F;
        }), n.d(e, "SortedList", function() {
          return Un;
        }), n.d(e, "BinaryTreeNode", function() {
          return Wn;
        }), n.d(e, "MockedElement", function() {
          return Nn;
        });
        var i = {};
        n.r(i), n.d(i, "EventTypes", function() {
          return ot;
        }), n.d(i, "GameEvent", function() {
          return ht;
        }), n.d(i, "KillEvent", function() {
          return ut;
        }), n.d(i, "PreKillEvent", function() {
          return lt;
        }), n.d(i, "PostKillEvent", function() {
          return pt;
        }), n.d(i, "GameStartEvent", function() {
          return dt;
        }), n.d(i, "GameStopEvent", function() {
          return ft;
        }), n.d(i, "PreDrawEvent", function() {
          return yt;
        }), n.d(i, "PostDrawEvent", function() {
          return gt;
        }), n.d(i, "PreDebugDrawEvent", function() {
          return _t;
        }), n.d(i, "PostDebugDrawEvent", function() {
          return vt;
        }), n.d(i, "PreUpdateEvent", function() {
          return mt;
        }), n.d(i, "PostUpdateEvent", function() {
          return bt;
        }), n.d(i, "PreFrameEvent", function() {
          return wt;
        }), n.d(i, "PostFrameEvent", function() {
          return xt;
        }), n.d(i, "GamepadConnectEvent", function() {
          return Pt;
        }), n.d(i, "GamepadDisconnectEvent", function() {
          return At;
        }), n.d(i, "GamepadButtonEvent", function() {
          return Et;
        }), n.d(i, "GamepadAxisEvent", function() {
          return St;
        }), n.d(i, "SubscribeEvent", function() {
          return Ct;
        }), n.d(i, "UnsubscribeEvent", function() {
          return Ot;
        }), n.d(i, "VisibleEvent", function() {
          return Tt;
        }), n.d(i, "HiddenEvent", function() {
          return Bt;
        }), n.d(i, "PreCollisionEvent", function() {
          return Mt;
        }), n.d(i, "PostCollisionEvent", function() {
          return Dt;
        }), n.d(i, "CollisionStartEvent", function() {
          return kt;
        }), n.d(i, "CollisionEndEvent", function() {
          return Rt;
        }), n.d(i, "InitializeEvent", function() {
          return jt;
        }), n.d(i, "ActivateEvent", function() {
          return Ft;
        }), n.d(i, "DeactivateEvent", function() {
          return It;
        }), n.d(i, "ExitViewPortEvent", function() {
          return Lt;
        }), n.d(i, "EnterViewPortEvent", function() {
          return zt;
        }), n.d(i, "EnterTriggerEvent", function() {
          return Ht;
        }), n.d(i, "ExitTriggerEvent", function() {
          return Ut;
        });
        var r = {};
        n.r(r), n.d(r, "Grayscale", function() {
          return re;
        }), n.d(r, "Invert", function() {
          return oe;
        }), n.d(r, "Opacity", function() {
          return se;
        }), n.d(r, "Colorize", function() {
          return ae;
        }), n.d(r, "Lighten", function() {
          return ce;
        }), n.d(r, "Darken", function() {
          return he;
        }), n.d(r, "Saturate", function() {
          return ue;
        }), n.d(r, "Desaturate", function() {
          return le;
        }), n.d(r, "Fill", function() {
          return pe;
        });
        var o = {};
        n.r(o), n.d(o, "EaseTo", function() {
          return Ee;
        }), n.d(o, "MoveTo", function() {
          return Se;
        }), n.d(o, "MoveBy", function() {
          return Ce;
        }), n.d(o, "Follow", function() {
          return Oe;
        }), n.d(o, "Meet", function() {
          return Te;
        }), n.d(o, "RotateTo", function() {
          return Be;
        }), n.d(o, "RotateBy", function() {
          return Me;
        }), n.d(o, "ScaleTo", function() {
          return De;
        }), n.d(o, "ScaleBy", function() {
          return ke;
        }), n.d(o, "Delay", function() {
          return Re;
        }), n.d(o, "Blink", function() {
          return je;
        }), n.d(o, "Fade", function() {
          return Fe;
        }), n.d(o, "Die", function() {
          return Ie;
        }), n.d(o, "CallMethod", function() {
          return Le;
        }), n.d(o, "Repeat", function() {
          return ze;
        }), n.d(o, "RepeatForever", function() {
          return He;
        }), n.d(o, "ActionQueue", function() {
          return Ue;
        });
        var s = {};
        n.r(s), n.d(s, "line", function() {
          return Ye;
        }), n.d(s, "point", function() {
          return Je;
        }), n.d(s, "vector", function() {
          return $e;
        }), n.d(s, "roundRect", function() {
          return tn;
        }), n.d(s, "circle", function() {
          return en;
        });
        var a = {};
        n.r(a), n.d(a, "Gamepads", function() {
          return ir;
        }), n.d(a, "Gamepad", function() {
          return rr;
        }), n.d(a, "Buttons", function() {
          return Ji;
        }), n.d(a, "Axes", function() {
          return $i;
        }), n.d(a, "PointerType", function() {
          return Bi;
        }), n.d(a, "PointerScope", function() {
          return Mi;
        }), n.d(a, "Pointer", function() {
          return zi;
        }), n.d(a, "Pointers", function() {
          return er;
        }), n.d(a, "NativePointerButton", function() {
          return Fi;
        }), n.d(a, "PointerButton", function() {
          return Ii;
        }), n.d(a, "WheelDeltaMode", function() {
          return Li;
        }), n.d(a, "PointerEvent", function() {
          return Ui;
        }), n.d(a, "PointerEventFactory", function() {
          return Wi;
        }), n.d(a, "PointerDragEvent", function() {
          return Ni;
        }), n.d(a, "PointerUpEvent", function() {
          return qi;
        }), n.d(a, "PointerDownEvent", function() {
          return Vi;
        }), n.d(a, "PointerMoveEvent", function() {
          return Gi;
        }), n.d(a, "PointerEnterEvent", function() {
          return Xi;
        }), n.d(a, "PointerLeaveEvent", function() {
          return Qi;
        }), n.d(a, "PointerCancelEvent", function() {
          return Zi;
        }), n.d(a, "WheelEvent", function() {
          return Ki;
        }), n.d(a, "createPointerEventByName", function() {
          return Yi;
        }), n.d(a, "Keys", function() {
          return Pi;
        }), n.d(a, "KeyEvent", function() {
          return Di;
        }), n.d(a, "Keyboard", function() {
          return ki;
        });
        var c = {};
        n.r(c), n.d(c, "CapturePointer", function() {
          return Ke;
        }), n.d(c, "OffscreenCulling", function() {
          return Ze;
        }), n.d(c, "TileMapCollisionDetection", function() {
          return Xe;
        });
        var h = {};
        n.r(h), n.d(h, "TwoPI", function() {
          return y;
        }), n.d(h, "extend", function() {
          return g;
        }), n.d(h, "base64Encode", function() {
          return _;
        }), n.d(h, "nullish", function() {
          return v;
        }), n.d(h, "clamp", function() {
          return m;
        }), n.d(h, "randomInRange", function() {
          return b;
        }), n.d(h, "randomIntInRange", function() {
          return w;
        }), n.d(h, "canonicalizeAngle", function() {
          return x;
        }), n.d(h, "toDegrees", function() {
          return P;
        }), n.d(h, "toRadians", function() {
          return A;
        }), n.d(h, "getPosition", function() {
          return E;
        }), n.d(h, "addItemToArray", function() {
          return S;
        }), n.d(h, "removeItemFromArray", function() {
          return C;
        }), n.d(h, "contains", function() {
          return O;
        }), n.d(h, "getOppositeSide", function() {
          return T;
        }), n.d(h, "getSideFromDirection", function() {
          return B;
        }), n.d(h, "Collection", function() {
          return D;
        }), n.d(h, "fail", function() {
          return k;
        }), n.d(h, "DrawUtil", function() {
          return s;
        });
        var u;
        n(73), n(134);
        function l() {
          "undefined" == typeof window && (window = { audioContext: function() {
          } }), "undefined" == typeof window || window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t2) {
            window.setInterval(t2, 1e3 / 60);
          }), "undefined" == typeof window || window.cancelAnimationFrame || (window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function() {
          }), "undefined" == typeof window || window.AudioContext || (window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext), "undefined" == typeof window || window.devicePixelRatio || (window.devicePixelRatio = window.devicePixelRatio || 1);
        }
        !function(t2) {
          t2[t2.Resolved = 0] = "Resolved", t2[t2.Rejected = 1] = "Rejected", t2[t2.Pending = 2] = "Pending";
        }(u || (u = {}));
        var p, d = function() {
          function t2() {
            this._state = u.Pending, this._successCallbacks = [], this._rejectCallback = function() {
            };
          }
          return t2.resolve = function(e2) {
            return new t2().resolve(e2);
          }, t2.reject = function(e2) {
            return new t2().reject(e2);
          }, t2.join = function() {
            var e2 = [];
            if (arguments.length > 0 && !Array.isArray(arguments[0]))
              for (var n2 = 0; n2 < arguments.length; n2++)
                e2[n2 - 0] = arguments[n2];
            else
              1 === arguments.length && Array.isArray(arguments[0]) && (e2 = arguments[0]);
            var i2 = new t2();
            if (!e2 || !e2.length)
              return i2.resolve();
            var r2 = e2.length, o2 = 0, s2 = 0, a2 = [];
            return e2.forEach(function(t3) {
              t3.then(function() {
                (o2 += 1) === r2 ? i2.resolve() : o2 + s2 + a2.length === r2 && i2.reject(a2);
              }, function() {
                o2 + (s2 += 1) + a2.length === r2 && i2.reject(a2);
              }).error(function(t4) {
                a2.push(t4), a2.length + o2 + s2 === r2 && i2.reject(a2);
              });
            }), i2;
          }, t2.prototype.then = function(t3, e2) {
            if (t3 && (this._successCallbacks.push(t3), this.state() === u.Resolved))
              try {
                t3.call(this, this._value);
              } catch (t4) {
                this._handleError(t4);
              }
            if (e2 && (this._rejectCallback = e2, this.state() === u.Rejected))
              try {
                e2.call(this, this._value);
              } catch (t4) {
                this._handleError(t4);
              }
            return this;
          }, t2.prototype.error = function(t3) {
            return t3 && (this._errorCallback = t3), this;
          }, t2.prototype.resolve = function(t3) {
            var e2 = this;
            if (this._state !== u.Pending)
              throw new Error("Cannot resolve a promise that is not in a pending state!");
            this._value = t3;
            try {
              this._state = u.Resolved, this._successCallbacks.forEach(function(t4) {
                t4.call(e2, e2._value);
              });
            } catch (t4) {
              this._handleError(t4);
            }
            return this;
          }, t2.prototype.reject = function(t3) {
            if (this._state !== u.Pending)
              throw new Error("Cannot reject a promise that is not in a pending state!");
            this._value = t3;
            try {
              this._state = u.Rejected, this._rejectCallback.call(this, this._value);
            } catch (t4) {
              this._handleError(t4);
            }
            return this;
          }, t2.prototype.state = function() {
            return this._state;
          }, t2.prototype._handleError = function(t3) {
            if (!this._errorCallback)
              throw t3;
            this._errorCallback.call(this, t3);
          }, t2;
        }(), f = function() {
          function t2(t3) {
            this.seed = t3, this._lowerMask = 2147483647, this._upperMask = 2147483648, this._w = 32, this._n = 624, this._m = 397, this._a = 2567483615, this._u = 11, this._s = 7, this._b = 2636928640, this._t = 15, this._c = 4022730752, this._l = 18, this._f = 1812433253, this._mt = new Array(this._n), this._mt[0] = (t3 || Date.now()) >>> 0;
            for (var e2 = 1; e2 < this._n; e2++) {
              var n2 = this._mt[e2 - 1] ^ this._mt[e2 - 1] >>> this._w - 2;
              this._mt[e2] = (this._f * ((4294901760 & n2) >>> 16) << 16) + this._f * (65535 & n2) + e2 >>> 0;
            }
            this._index = this._n;
          }
          return t2.prototype._twist = function() {
            for (var t3 = [0, this._a], e2 = 0, n2 = 0; n2 < this._n - this._m; n2++)
              e2 = this._mt[n2] & this._upperMask | this._mt[n2 + 1] & this._lowerMask, this._mt[n2] = this._mt[n2 + this._m] ^ e2 >>> 1 ^ 4294967295 & t3[1 & e2];
            for (; n2 < this._n - 1; n2++)
              e2 = this._mt[n2] & this._upperMask | this._mt[n2 + 1] & this._lowerMask, this._mt[n2] = this._mt[n2 + (this._m - this._n)] ^ e2 >>> 1 ^ 4294967295 & t3[1 & e2];
            e2 = this._mt[this._n - 1] & this._upperMask | this._mt[0] & this._lowerMask, this._mt[this._n - 1] = this._mt[this._m - 1] ^ e2 >>> 1 ^ 4294967295 & t3[1 & e2], this._index = 0;
          }, t2.prototype.nextInt = function() {
            this._index >= this._n && this._twist();
            var t3 = this._mt[this._index++];
            return t3 ^= t3 >>> this._u, t3 ^= t3 << this._s & this._b, t3 ^= t3 << this._t & this._c, (t3 ^= t3 >>> this._l) >>> 0;
          }, t2.prototype.next = function() {
            return this.nextInt() * (1 / 4294967296);
          }, t2.prototype.floating = function(t3, e2) {
            return (e2 - t3) * this.next() + t3;
          }, t2.prototype.integer = function(t3, e2) {
            return Math.floor((e2 - t3 + 1) * this.next() + t3);
          }, t2.prototype.bool = function(t3) {
            return void 0 === t3 && (t3 = 0.5), this.next() <= t3;
          }, t2.prototype.pickOne = function(t3) {
            return t3[this.integer(0, t3.length - 1)];
          }, t2.prototype.pickSet = function(t3, e2, n2) {
            return void 0 === n2 && (n2 = false), n2 ? this._pickSetWithDuplicates(t3, e2) : this._pickSetWithoutDuplicates(t3, e2);
          }, t2.prototype._pickSetWithoutDuplicates = function(t3, e2) {
            if (e2 > t3.length || e2 < 0)
              throw new Error("Invalid number of elements to pick, must pick a value 0 < n <= length");
            if (e2 === t3.length)
              return t3;
            for (var n2 = new Array(e2), i2 = 0, r2 = t3.slice(0); i2 < e2; ) {
              var o2 = this.integer(0, r2.length - 1);
              n2[i2++] = r2[o2], r2.splice(o2, 1);
            }
            return n2;
          }, t2.prototype._pickSetWithDuplicates = function(t3, e2) {
            if (e2 < 0)
              throw new Error("Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT");
            for (var n2 = new Array(e2), i2 = 0; i2 < e2; i2++)
              n2[i2] = this.pickOne(t3);
            return n2;
          }, t2.prototype.shuffle = function(t3) {
            for (var e2 = t3.slice(0), n2 = null, i2 = 0; i2 < e2.length - 2; i2++) {
              var r2 = this.integer(i2, e2.length - 1);
              n2 = e2[i2], e2[i2] = e2[r2], e2[r2] = n2;
            }
            return e2;
          }, t2.prototype.range = function(t3, e2, n2) {
            for (var i2 = new Array(t3), r2 = 0; r2 < t3; r2++)
              i2[r2] = this.integer(e2, n2);
            return i2;
          }, t2.prototype.d4 = function() {
            return this.integer(1, 4);
          }, t2.prototype.d6 = function() {
            return this.integer(1, 6);
          }, t2.prototype.d8 = function() {
            return this.integer(1, 8);
          }, t2.prototype.d10 = function() {
            return this.integer(1, 10);
          }, t2.prototype.d12 = function() {
            return this.integer(1, 12);
          }, t2.prototype.d20 = function() {
            return this.integer(1, 20);
          }, t2;
        }();
        !function(t2) {
          t2.None = "None", t2.Top = "Top", t2.Bottom = "Bottom", t2.Left = "Left", t2.Right = "Right";
        }(p || (p = {}));
        var y = 2 * Math.PI;
        function g() {
          var t2 = {}, e2 = false, n2 = 0, i2 = arguments.length;
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e2 = arguments[0], n2++);
          var r2 = "function" == typeof Object.assign, o2 = null;
          for (o2 = r2 ? Object.assign : function(n3) {
            for (var i3 in n3)
              Object.prototype.hasOwnProperty.call(n3, i3) && (e2 && "[object Object]" === Object.prototype.toString.call(n3[i3]) ? t2[i3] = g(true, t2[i3], n3[i3]) : t2[i3] = n3[i3]);
          }; n2 < i2; n2++) {
            var s2 = arguments[n2];
            r2 ? o2(t2, s2) : o2(s2);
          }
          return t2;
        }
        function _(t2) {
          for (var e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n2 = "", i2 = 0; i2 < t2.length; ) {
            var r2 = 255 & t2.charCodeAt(i2++), o2 = 255 & t2.charCodeAt(i2++), s2 = 255 & t2.charCodeAt(i2++), a2 = r2 >> 2, c2 = (3 & r2) << 4 | o2 >> 4, h2 = void 0, u2 = void 0;
            isNaN(o2) ? h2 = u2 = 64 : (h2 = (15 & o2) << 2 | s2 >> 6, u2 = isNaN(s2) ? 64 : 63 & s2), n2 += e2.charAt(a2) + e2.charAt(c2) + e2.charAt(h2) + e2.charAt(u2);
          }
          return n2;
        }
        function v(t2, e2) {
          return null != t2 ? t2 : e2;
        }
        function m(t2, e2, n2) {
          return Math.min(Math.max(e2, t2), n2);
        }
        function b(t2, e2, n2) {
          return void 0 === n2 && (n2 = new f()), n2 ? n2.floating(t2, e2) : t2 + Math.random() * (e2 - t2);
        }
        function w(t2, e2, n2) {
          return void 0 === n2 && (n2 = new f()), n2 ? n2.integer(t2, e2) : Math.round(b(t2, e2));
        }
        function x(t2) {
          var e2 = t2;
          if (t2 > y)
            for (; e2 > y; )
              e2 -= y;
          if (t2 < 0)
            for (; e2 < 0; )
              e2 += y;
          return e2;
        }
        function P(t2) {
          return 180 / Math.PI * t2;
        }
        function A(t2) {
          return t2 / 180 * Math.PI;
        }
        function E(t2) {
          var e2 = 0, n2 = 0, i2 = function(t3) {
            e2 += t3.offsetLeft, t3.offsetParent && i2(t3.offsetParent);
          }, r2 = function(t3) {
            n2 += t3.offsetTop, t3.offsetParent && r2(t3.offsetParent);
          };
          return i2(t2), r2(t2), new V(e2, n2);
        }
        function S(t2, e2) {
          return -1 === e2.indexOf(t2) && (e2.push(t2), true);
        }
        function C(t2, e2) {
          var n2;
          return (n2 = e2.indexOf(t2)) > -1 && (e2.splice(n2, 1), true);
        }
        function O(t2, e2) {
          for (var n2 = 0; n2 < t2.length; n2++)
            if (t2[n2] === e2)
              return true;
          return false;
        }
        function T(t2) {
          return t2 === p.Top ? p.Bottom : t2 === p.Bottom ? p.Top : t2 === p.Left ? p.Right : t2 === p.Right ? p.Left : p.None;
        }
        function B(t2) {
          for (var e2 = [V.Left, V.Right, V.Up, V.Down], n2 = [p.Left, p.Right, p.Top, p.Bottom], i2 = -Number.MAX_VALUE, r2 = -1, o2 = 0; o2 < e2.length; o2++)
            e2[o2].dot(t2) > i2 && (i2 = e2[o2].dot(t2), r2 = o2);
          return n2[r2];
        }
        var M, D = function() {
          function t2(e2) {
            void 0 === e2 && (e2 = t2.DefaultSize), this._internalArray = null, this._endPointer = 0, this._internalArray = new Array(e2);
          }
          return t2.prototype._resize = function() {
            for (var t3 = 2 * this._internalArray.length, e2 = new Array(t3), n2 = this.count(), i2 = 0; i2 < n2; i2++)
              e2[i2] = this._internalArray[i2];
            delete this._internalArray, this._internalArray = e2;
          }, t2.prototype.push = function(t3) {
            return this._endPointer === this._internalArray.length && this._resize(), this._internalArray[this._endPointer++] = t3;
          }, t2.prototype.pop = function() {
            return this._endPointer = this._endPointer - 1 < 0 ? 0 : this._endPointer - 1, this._internalArray[this._endPointer];
          }, t2.prototype.count = function() {
            return this._endPointer;
          }, t2.prototype.clear = function() {
            this._endPointer = 0;
          }, t2.prototype.internalSize = function() {
            return this._internalArray.length;
          }, t2.prototype.elementAt = function(t3) {
            if (t3 >= this.count())
              throw new Error("Invalid index " + t3);
            return this._internalArray[t3];
          }, t2.prototype.insert = function(t3, e2) {
            return t3 >= this.count() && this._resize(), this._internalArray[t3] = e2;
          }, t2.prototype.remove = function(t3) {
            var e2 = this.count();
            if (0 === e2)
              throw new Error("Invalid parameter " + t3);
            for (var n2 = this._internalArray[t3], i2 = t3; i2 < e2; i2++)
              this._internalArray[i2] = this._internalArray[i2 + 1];
            return this._endPointer--, n2;
          }, t2.prototype.removeElement = function(t3) {
            var e2 = this._internalArray.indexOf(t3);
            this.remove(e2);
          }, t2.prototype.toArray = function() {
            return this._internalArray.slice(0, this._endPointer);
          }, t2.prototype.forEach = function(t3) {
            for (var e2 = 0, n2 = this.count(); e2 < n2; e2++)
              t3.call(this, this._internalArray[e2], e2);
          }, t2.prototype.map = function(t3) {
            for (var e2 = this.count(), n2 = 0; n2 < e2; n2++)
              this._internalArray[n2] = t3.call(this, this._internalArray[n2], n2);
          }, t2.DefaultSize = 200, t2;
        }();
        function k(t2) {
          throw new Error(t2);
        }
        !function(t2) {
          t2[t2.Debug = 0] = "Debug", t2[t2.Info = 1] = "Info", t2[t2.Warn = 2] = "Warn", t2[t2.Error = 3] = "Error", t2[t2.Fatal = 4] = "Fatal";
        }(M || (M = {}));
        var R = function() {
          function t2() {
            if (this._appenders = [], this.defaultLevel = M.Info, t2._instance)
              throw new Error("Logger is a singleton");
            return t2._instance = this, t2._instance.addAppender(new j()), t2._instance;
          }
          return t2.getInstance = function() {
            return null == t2._instance && (t2._instance = new t2()), t2._instance;
          }, t2.prototype.addAppender = function(t3) {
            this._appenders.push(t3);
          }, t2.prototype.clearAppenders = function() {
            this._appenders.length = 0;
          }, t2.prototype._log = function(t3, e2) {
            null == t3 && (t3 = this.defaultLevel);
            for (var n2 = this._appenders.length, i2 = 0; i2 < n2; i2++)
              t3 >= this.defaultLevel && this._appenders[i2].log(t3, e2);
          }, t2.prototype.debug = function() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
              t3[e2] = arguments[e2];
            this._log(M.Debug, t3);
          }, t2.prototype.info = function() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
              t3[e2] = arguments[e2];
            this._log(M.Info, t3);
          }, t2.prototype.warn = function() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
              t3[e2] = arguments[e2];
            this._log(M.Warn, t3);
          }, t2.prototype.error = function() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
              t3[e2] = arguments[e2];
            this._log(M.Error, t3);
          }, t2.prototype.fatal = function() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
              t3[e2] = arguments[e2];
            this._log(M.Fatal, t3);
          }, t2._instance = null, t2;
        }(), j = function() {
          function t2() {
          }
          return t2.prototype.log = function(t3, e2) {
            if (console || console.log || !console.warn || !console.error) {
              var n2 = [];
              n2.unshift.apply(n2, e2), n2.unshift("[" + M[t3] + "] : "), t3 < M.Warn ? console.log.apply ? console.log.apply(console, n2) : console.log(n2.join(" ")) : t3 < M.Error ? console.warn.apply ? console.warn.apply(console, n2) : console.warn(n2.join(" ")) : console.error.apply ? console.error.apply(console, n2) : console.error(n2.join(" "));
            }
          }, t2;
        }(), F = function() {
          function t2(t3, e2) {
            this._messages = [], this._canvas = document.createElement("canvas"), this._canvas.width = t3 || window.innerWidth, this._canvas.height = e2 || window.innerHeight, this._canvas.style.position = "absolute", this._ctx = this._canvas.getContext("2d"), document.body.appendChild(this._canvas);
          }
          return t2.prototype.log = function(t3, e2) {
            var n2 = e2.join(",");
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._messages.unshift("[" + M[t3] + "] : " + n2);
            for (var i2 = 10, r2 = 1, o2 = 0; o2 < this._messages.length; o2++)
              this._ctx.fillStyle = "rgba(255,255,255," + r2.toFixed(2) + ")", this._ctx.fillText(this._messages[o2], 200, i2), i2 += 10, r2 = r2 > 0 ? r2 - 0.05 : 0;
          }, t2;
        }(), I = function() {
          return (I = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
              for (var r2 in e2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        }, L = function() {
          for (var t2 = 0, e2 = 0, n2 = arguments.length; e2 < n2; e2++)
            t2 += arguments[e2].length;
          var i2 = Array(t2), r2 = 0;
          for (e2 = 0; e2 < n2; e2++)
            for (var o2 = arguments[e2], s2 = 0, a2 = o2.length; s2 < a2; s2++, r2++)
              i2[r2] = o2[s2];
          return i2;
        }, z = 5, H = {}, U = function() {
          for (var t2 in H)
            H[t2] = 0;
        }, W = function(t2, e2) {
          H[t2] < z && (R.getInstance().warn(t2), console.trace && e2.showStackTrace && console.trace()), H[t2]++;
        };
        function N(t2) {
          return t2 = g({}, { message: "This feature will be removed in future versions of Excalibur.", alternateMethod: null, showStackTrack: false }, t2), function(e2, n2, i2) {
            if (i2 && "function" != typeof i2.value && "function" != typeof i2.get && "function" != typeof i2.set)
              throw new SyntaxError("Only classes/functions/getters/setters can be marked as obsolete");
            var r2 = (e2.name || "") + (e2.name && n2 ? "." : "") + (n2 || "") + " is marked obsolete: " + t2.message + (t2.alternateMethod ? " Use " + t2.alternateMethod + " instead" : "");
            H[r2] || (H[r2] = 0);
            var o2 = i2 ? I({}, i2) : e2;
            if (!i2) {
              var s2 = function() {
                var e3 = Array.prototype.slice.call(arguments);
                return W(r2, t2), new (o2.bind.apply(o2, L([void 0], e3)))();
              };
              return s2.prototype = o2.prototype, s2;
            }
            return i2 && i2.value ? (o2.value = function() {
              return W(r2, t2), i2.value.apply(this, arguments);
            }, o2) : (i2 && i2.get && (o2.get = function() {
              return W(r2, t2), i2.get.apply(this, arguments);
            }), i2 && i2.set && (o2.set = function() {
              return W(r2, t2), i2.set.apply(this, arguments);
            }), o2);
          };
        }
        var q = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        }, V = function() {
          function t2(t3, e2) {
            this.x = t3, this.y = e2;
          }
          return Object.defineProperty(t2, "Zero", { get: function() {
            return new t2(0, 0);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "One", { get: function() {
            return new t2(1, 1);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Half", { get: function() {
            return new t2(0.5, 0.5);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Up", { get: function() {
            return new t2(0, -1);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Down", { get: function() {
            return new t2(0, 1);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Left", { get: function() {
            return new t2(-1, 0);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Right", { get: function() {
            return new t2(1, 0);
          }, enumerable: false, configurable: true }), t2.fromAngle = function(e2) {
            return new t2(Math.cos(e2), Math.sin(e2));
          }, t2.isValid = function(t3) {
            return null != t3 && (!isNaN(t3.x) && !isNaN(t3.y) && (t3.x !== 1 / 0 && t3.y !== 1 / 0 && t3.x !== -1 / 0 && t3.y !== -1 / 0));
          }, t2.distance = function(t3, e2) {
            return Math.sqrt(Math.pow(t3.x - e2.x, 2) + Math.pow(t3.y - e2.y, 2));
          }, t2.prototype.setTo = function(t3, e2) {
            this.x = t3, this.y = e2;
          }, t2.prototype.equals = function(t3, e2) {
            return void 0 === e2 && (e2 = 1e-3), Math.abs(this.x - t3.x) <= e2 && Math.abs(this.y - t3.y) <= e2;
          }, t2.prototype.distance = function(e2) {
            return e2 || (e2 = t2.Zero), Math.sqrt(Math.pow(this.x - e2.x, 2) + Math.pow(this.y - e2.y, 2));
          }, t2.prototype.magnitude = function() {
            return this.distance();
          }, Object.defineProperty(t2.prototype, "size", { get: function() {
            return this.distance();
          }, set: function(t3) {
            var e2 = this.normalize().scale(t3);
            this.x = e2.x, this.y = e2.y;
          }, enumerable: false, configurable: true }), t2.prototype.normalize = function() {
            var e2 = this.distance();
            return e2 > 0 ? new t2(this.x / e2, this.y / e2) : new t2(0, 1);
          }, t2.prototype.average = function(t3) {
            return this.add(t3).scale(0.5);
          }, t2.prototype.scale = function(e2) {
            return e2 instanceof t2 ? new t2(this.x * e2.x, this.y * e2.y) : new t2(this.x * e2, this.y * e2);
          }, t2.prototype.add = function(e2) {
            return new t2(this.x + e2.x, this.y + e2.y);
          }, t2.prototype.sub = function(e2) {
            return new t2(this.x - e2.x, this.y - e2.y);
          }, t2.prototype.addEqual = function(t3) {
            return this.x += t3.x, this.y += t3.y, this;
          }, t2.prototype.subEqual = function(t3) {
            return this.x -= t3.x, this.y -= t3.y, this;
          }, t2.prototype.scaleEqual = function(t3) {
            return this.x *= t3, this.y *= t3, this;
          }, t2.prototype.dot = function(t3) {
            return this.x * t3.x + this.y * t3.y;
          }, t2.prototype.cross = function(e2) {
            return e2 instanceof t2 ? this.x * e2.y - this.y * e2.x : "number" == typeof e2 ? new t2(e2 * this.y, -e2 * this.x) : void 0;
          }, t2.prototype.perpendicular = function() {
            return new t2(this.y, -this.x);
          }, t2.prototype.normal = function() {
            return this.perpendicular().normalize();
          }, t2.prototype.negate = function() {
            return this.scale(-1);
          }, t2.prototype.toAngle = function() {
            return Math.atan2(this.y, this.x);
          }, t2.prototype.rotate = function(e2, n2) {
            n2 || (n2 = new t2(0, 0));
            var i2 = Math.sin(e2), r2 = Math.cos(e2);
            return new t2(r2 * (this.x - n2.x) - i2 * (this.y - n2.y) + n2.x, i2 * (this.x - n2.x) + r2 * (this.y - n2.y) + n2.y);
          }, t2.prototype.clone = function() {
            return new t2(this.x, this.y);
          }, t2.prototype.toString = function() {
            return "(" + this.x + ", " + this.y + ")";
          }, q([N({ message: "will be removed in favour of `.size` in version 0.25.0" })], t2.prototype, "magnitude", null), t2;
        }(), G = function() {
          function t2(t3, e2) {
            this.pos = t3, this.dir = e2.normalize();
          }
          return t2.prototype.intersect = function(t3) {
            var e2 = t3.begin.sub(this.pos);
            if (0 === this.dir.cross(t3.getSlope()) && 0 !== e2.cross(this.dir))
              return -1;
            var n2 = this.dir.cross(t3.getSlope());
            if (0 === n2)
              return -1;
            var i2 = e2.cross(t3.getSlope()) / n2;
            if (i2 >= 0) {
              var r2 = e2.cross(this.dir) / n2 / t3.getLength();
              if (r2 >= 0 && r2 <= 1)
                return i2;
            }
            return -1;
          }, t2.prototype.getPoint = function(t3) {
            return this.pos.add(this.dir.scale(t3));
          }, t2;
        }(), X = function() {
          function t2(t3, e2) {
            this.begin = t3, this.end = e2;
          }
          return Object.defineProperty(t2.prototype, "slope", { get: function() {
            return (this.end.y - this.begin.y) / (this.end.x - this.begin.x);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "intercept", { get: function() {
            return this.begin.y - this.slope * this.begin.x;
          }, enumerable: false, configurable: true }), t2.prototype.normal = function() {
            return this.end.sub(this.begin).normal();
          }, t2.prototype.getSlope = function() {
            var t3 = this.begin, e2 = this.end, n2 = t3.distance(e2);
            return e2.sub(t3).scale(1 / n2);
          }, t2.prototype.getEdge = function() {
            var t3 = this.begin;
            return this.end.sub(t3);
          }, t2.prototype.getLength = function() {
            var t3 = this.begin, e2 = this.end;
            return t3.distance(e2);
          }, Object.defineProperty(t2.prototype, "midpoint", { get: function() {
            return this.begin.add(this.end).scale(0.5);
          }, enumerable: false, configurable: true }), t2.prototype.flip = function() {
            return new t2(this.end, this.begin);
          }, t2.prototype.distanceToPoint = function(t3) {
            var e2 = t3.x, n2 = t3.y, i2 = this.getLength(), r2 = this.end.y - this.begin.y, o2 = this.end.x - this.begin.x;
            return Math.abs(r2 * e2 - o2 * n2 + this.end.x * this.begin.y - this.end.y * this.begin.x) / i2;
          }, t2.prototype.findVectorToPoint = function(t3) {
            var e2 = this.begin.sub(t3), n2 = this.getSlope();
            return e2.sub(n2.scale(e2.dot(n2)));
          }, t2.prototype.findPoint = function(t3, e2) {
            void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = null);
            var n2 = this.slope, i2 = this.intercept;
            if (null !== t3)
              return new V(t3, n2 * t3 + i2);
            if (null !== e2)
              return new V((e2 - i2) / n2, e2);
            throw new Error("You must provide an X or a Y value");
          }, t2.prototype.hasPoint = function() {
            var t3, e2 = 0;
            if ("number" == typeof arguments[0] && "number" == typeof arguments[1])
              t3 = new V(arguments[0], arguments[1]), e2 = arguments[2] || 0;
            else {
              if (!(arguments[0] instanceof V))
                throw "Could not determine the arguments for Vector.hasPoint";
              t3 = arguments[0], e2 = arguments[1] || 0;
            }
            var n2 = t3.x - this.begin.x, i2 = t3.y - this.begin.y, r2 = this.end.x - this.begin.x, o2 = this.end.y - this.begin.y, s2 = n2 * o2 - i2 * r2;
            return !(Math.abs(s2) > e2) && (Math.abs(r2) >= Math.abs(o2) ? r2 > 0 ? this.begin.x <= t3.x && t3.x <= this.end.x : this.end.x <= t3.x && t3.x <= this.begin.x : o2 > 0 ? this.begin.y <= t3.y && t3.y <= this.end.y : this.end.y <= t3.y && t3.y <= this.begin.y);
          }, t2;
        }(), Q = function() {
          function t2(t3, e2) {
            this.min = t3, this.max = e2;
          }
          return t2.prototype.overlaps = function(t3) {
            return this.max > t3.min && t3.max > this.min;
          }, t2.prototype.getOverlap = function(t3) {
            return this.overlaps(t3) ? this.max > t3.max ? t3.max - this.min : this.max - t3.min : 0;
          }, t2;
        }(), Z = function() {
          function t2(t3, e2, n2) {
            this.worldPos = t3, this.pagePos = e2, this.screenPos = n2;
          }
          return t2.fromPagePosition = function(e2, n2, i2) {
            var r2, o2, s2, a2;
            3 === arguments.length ? (s2 = new V(r2 = e2, o2 = n2), a2 = i2) : (r2 = (s2 = e2).x, o2 = s2.y, a2 = n2);
            var c2 = r2 - E(a2.canvas).x, h2 = o2 - E(a2.canvas).y, u2 = new V(c2, h2), l2 = a2.screenToWorldCoordinates(u2);
            return new t2(l2, s2, u2);
          }, t2;
        }();
        function K(t2, e2) {
          return new V(t2, e2);
        }
        var Y, J, $, tt = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        }, et = function() {
          function t2(t3, e2, n2, i2) {
            this.r = t3, this.g = e2, this.b = n2, this.a = null != i2 ? i2 : 1;
          }
          return t2.fromRGB = function(e2, n2, i2, r2) {
            return new t2(e2, n2, i2, r2);
          }, t2.fromHex = function(e2) {
            var n2;
            if (n2 = e2.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i)) {
              var i2 = parseInt(n2[1], 16), r2 = parseInt(n2[2], 16), o2 = parseInt(n2[3], 16), s2 = 1;
              return n2[4] && (s2 = parseInt(n2[4], 16) / 255), new t2(i2, r2, o2, s2);
            }
            throw new Error("Invalid hex string: " + e2);
          }, t2.fromHSL = function(t3, e2, n2, i2) {
            return void 0 === i2 && (i2 = 1), new nt(t3, e2, n2, i2).toRGBA();
          }, t2.prototype.lighten = function(t3) {
            void 0 === t3 && (t3 = 0.1);
            var e2 = nt.fromRGBA(this.r, this.g, this.b, this.a);
            return e2.l += (1 - e2.l) * t3, e2.toRGBA();
          }, t2.prototype.darken = function(t3) {
            void 0 === t3 && (t3 = 0.1);
            var e2 = nt.fromRGBA(this.r, this.g, this.b, this.a);
            return e2.l -= e2.l * t3, e2.toRGBA();
          }, t2.prototype.saturate = function(t3) {
            void 0 === t3 && (t3 = 0.1);
            var e2 = nt.fromRGBA(this.r, this.g, this.b, this.a);
            return e2.s += e2.s * t3, e2.toRGBA();
          }, t2.prototype.desaturate = function(t3) {
            void 0 === t3 && (t3 = 0.1);
            var e2 = nt.fromRGBA(this.r, this.g, this.b, this.a);
            return e2.s -= e2.s * t3, e2.toRGBA();
          }, t2.prototype.multiply = function(e2) {
            return new t2(e2.r / 255 * this.r / 255 * 255, e2.g / 255 * this.g / 255 * 255, e2.b / 255 * this.b / 255 * 255, e2.a * this.a);
          }, t2.prototype.mulitiply = function(t3) {
            return this.multiply(t3);
          }, t2.prototype.screen = function(t3) {
            var e2 = t3.invert(), n2 = t3.invert();
            return e2.multiply(n2).invert();
          }, t2.prototype.invert = function() {
            return new t2(255 - this.r, 255 - this.g, 255 - this.b, 1 - this.a);
          }, t2.prototype.average = function(e2) {
            return new t2((e2.r + this.r) / 2, (e2.g + this.g) / 2, (e2.b + this.b) / 2, (e2.a + this.a) / 2);
          }, t2.prototype.toString = function(t3) {
            switch (void 0 === t3 && (t3 = "rgb"), t3) {
              case "rgb":
                return this.toRGBA();
              case "hsl":
                return this.toHSLA();
              case "hex":
                return this.toHex();
              default:
                throw new Error("Invalid Color format");
            }
          }, t2.prototype._componentToHex = function(t3) {
            var e2 = t3.toString(16);
            return 1 === e2.length ? "0" + e2 : e2;
          }, t2.prototype.toHex = function() {
            return "#" + this._componentToHex(this.r) + this._componentToHex(this.g) + this._componentToHex(this.b);
          }, t2.prototype.toRGBA = function() {
            var t3 = String(this.r.toFixed(0)) + ", " + String(this.g.toFixed(0)) + ", " + String(this.b.toFixed(0));
            return void 0 !== this.a || null !== this.a ? "rgba(" + t3 + ", " + String(this.a) + ")" : "rgb(" + t3 + ")";
          }, t2.prototype.toHSLA = function() {
            return nt.fromRGBA(this.r, this.g, this.b, this.a).toString();
          }, t2.prototype.fillStyle = function() {
            return this.toString();
          }, t2.prototype.clone = function() {
            return new t2(this.r, this.g, this.b, this.a);
          }, Object.defineProperty(t2, "Black", { get: function() {
            return t2.fromHex("#000000");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "White", { get: function() {
            return t2.fromHex("#FFFFFF");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Gray", { get: function() {
            return t2.fromHex("#808080");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "LightGray", { get: function() {
            return t2.fromHex("#D3D3D3");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "DarkGray", { get: function() {
            return t2.fromHex("#A9A9A9");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Yellow", { get: function() {
            return t2.fromHex("#FFFF00");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Orange", { get: function() {
            return t2.fromHex("#FFA500");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Red", { get: function() {
            return t2.fromHex("#FF0000");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Vermilion", { get: function() {
            return t2.fromHex("#FF5B31");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Vermillion", { get: function() {
            return t2.Vermilion;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Rose", { get: function() {
            return t2.fromHex("#FF007F");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Magenta", { get: function() {
            return t2.fromHex("#FF00FF");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Violet", { get: function() {
            return t2.fromHex("#7F00FF");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Blue", { get: function() {
            return t2.fromHex("#0000FF");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Azure", { get: function() {
            return t2.fromHex("#007FFF");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Cyan", { get: function() {
            return t2.fromHex("#00FFFF");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Viridian", { get: function() {
            return t2.fromHex("#59978F");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Green", { get: function() {
            return t2.fromHex("#00FF00");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Chartreuse", { get: function() {
            return t2.fromHex("#7FFF00");
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Transparent", { get: function() {
            return t2.fromHex("#FFFFFF00");
          }, enumerable: false, configurable: true }), tt([N({ message: "Alias for incorrect spelling used in older versions, use multiply instead, will be removed in v0.25.0" })], t2.prototype, "mulitiply", null), tt([N({ message: "Alias for incorrect spelling used in older versions", alternateMethod: "Vermilion" })], t2, "Vermillion", null), t2;
        }(), nt = function() {
          function t2(t3, e2, n2, i2) {
            this.h = t3, this.s = e2, this.l = n2, this.a = i2;
          }
          return t2.hue2rgb = function(t3, e2, n2) {
            return n2 < 0 && (n2 += 1), n2 > 1 && (n2 -= 1), n2 < 1 / 6 ? t3 + 6 * (e2 - t3) * n2 : n2 < 0.5 ? e2 : n2 < 2 / 3 ? t3 + (e2 - t3) * (2 / 3 - n2) * 6 : t3;
          }, t2.fromRGBA = function(e2, n2, i2, r2) {
            e2 /= 255, n2 /= 255, i2 /= 255;
            var o2, s2, a2 = Math.max(e2, n2, i2), c2 = Math.min(e2, n2, i2), h2 = (a2 + c2) / 2;
            if (a2 === c2)
              o2 = s2 = 0;
            else {
              var u2 = a2 - c2;
              switch (s2 = h2 > 0.5 ? u2 / (2 - a2 - c2) : u2 / (a2 + c2), a2) {
                case e2:
                  o2 = (n2 - i2) / u2 + (n2 < i2 ? 6 : 0);
                  break;
                case n2:
                  o2 = (i2 - e2) / u2 + 2;
                  break;
                case i2:
                  o2 = (e2 - n2) / u2 + 4;
              }
              o2 /= 6;
            }
            return new t2(o2, s2, h2, r2);
          }, t2.prototype.toRGBA = function() {
            var e2, n2, i2;
            if (0 === this.s)
              e2 = n2 = i2 = this.l;
            else {
              var r2 = this.l < 0.5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s, o2 = 2 * this.l - r2;
              e2 = t2.hue2rgb(o2, r2, this.h + 1 / 3), n2 = t2.hue2rgb(o2, r2, this.h), i2 = t2.hue2rgb(o2, r2, this.h - 1 / 3);
            }
            return new et(255 * e2, 255 * n2, 255 * i2, this.a);
          }, t2.prototype.toString = function() {
            return "hsla(" + this.h.toFixed(0) + ", " + this.s.toFixed(0) + ", " + this.l.toFixed(0) + ", " + this.a.toFixed(0) + ")";
          }, t2;
        }(), it = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        };
        !function(t2) {
          t2[t2.Box = 0] = "Box", t2[t2.RigidBody = 1] = "RigidBody";
        }(Y || (Y = {})), function(t2) {
          t2[t2.Naive = 0] = "Naive", t2[t2.DynamicAABBTree = 1] = "DynamicAABBTree";
        }(J || (J = {})), function(t2) {
          t2[t2.Euler = 0] = "Euler";
        }($ || ($ = {}));
        var rt, ot, st = function() {
          function t2() {
          }
          return t2.useBoxPhysics = function() {
            t2.collisionResolutionStrategy = Y.Box;
          }, t2.useRigidBodyPhysics = function() {
            t2.collisionResolutionStrategy = Y.RigidBody;
          }, Object.defineProperty(t2, "dynamicTreeVelocityMultiplyer", { get: function() {
            return t2.dynamicTreeVelocityMultiplier;
          }, set: function(e2) {
            t2.dynamicTreeVelocityMultiplier = e2;
          }, enumerable: false, configurable: true }), t2.acc = new V(0, 0), t2.enabled = true, t2.collisionPasses = 5, t2.broadphaseStrategy = J.DynamicAABBTree, t2.broadphaseDebug = false, t2.showCollisionNormals = false, t2.showMotionVectors = false, t2.showBounds = false, t2.showArea = false, t2.showContacts = false, t2.showNormals = false, t2.collisionResolutionStrategy = Y.Box, t2.defaultMass = 10, t2.integrator = $.Euler, t2.integrationSteps = 1, t2.allowRigidBodyRotation = true, t2.collisionShift = 1e-3, t2.dynamicTreeVelocityMultiplier = 2, t2.boundsPadding = 5, t2.surfaceEpsilon = 0.1, t2.checkForFastBodies = true, t2.disableMinimumSpeedForFastBody = false, it([N({ message: "Alias for incorrect spelling used in older versions, will be removed in v0.25.0", alternateMethod: "dynamicTreeVelocityMultiplier" })], t2, "dynamicTreeVelocityMultiplyer", null), t2;
        }(), at = (rt = function(t2, e2) {
          return (rt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3)
              Object.prototype.hasOwnProperty.call(e3, n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          rt(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        !function(t2) {
          t2.Kill = "kill", t2.PreKill = "prekill", t2.PostKill = "postkill", t2.PreDraw = "predraw", t2.PostDraw = "postdraw", t2.PreDebugDraw = "predebugdraw", t2.PostDebugDraw = "postdebugdraw", t2.PreUpdate = "preupdate", t2.PostUpdate = "postupdate", t2.PreFrame = "preframe", t2.PostFrame = "postframe", t2.PreCollision = "precollision", t2.CollisionStart = "collisionstart", t2.CollisionEnd = "collisionend", t2.PostCollision = "postcollision", t2.Initialize = "initialize", t2.Activate = "activate", t2.Deactivate = "deactivate", t2.ExitViewport = "exitviewport", t2.EnterViewport = "enterviewport", t2.ExitTrigger = "exit", t2.EnterTrigger = "enter", t2.Connect = "connect", t2.Disconnect = "disconnect", t2.Button = "button", t2.Axis = "axis", t2.Subscribe = "subscribe", t2.Unsubscribe = "unsubscribe", t2.Visible = "visible", t2.Hidden = "hidden", t2.Start = "start", t2.Stop = "stop", t2.PointerUp = "pointerup", t2.PointerDown = "pointerdown", t2.PointerMove = "pointermove", t2.PointerEnter = "pointerenter", t2.PointerLeave = "pointerleave", t2.PointerCancel = "pointercancel", t2.PointerWheel = "pointerwheel", t2.Up = "up", t2.Down = "down", t2.Move = "move", t2.Enter = "enter", t2.Leave = "leave", t2.Cancel = "cancel", t2.Wheel = "wheel", t2.Press = "press", t2.Release = "release", t2.Hold = "hold", t2.PointerDragStart = "pointerdragstart", t2.PointerDragEnd = "pointerdragend", t2.PointerDragEnter = "pointerdragenter", t2.PointerDragLeave = "pointerdragleave", t2.PointerDragMove = "pointerdragmove";
        }(ot || (ot = {}));
        var ct, ht = function() {
          function t2() {
            this._bubbles = true;
          }
          return Object.defineProperty(t2.prototype, "bubbles", { get: function() {
            return this._bubbles;
          }, set: function(t3) {
            this._bubbles = t3;
          }, enumerable: false, configurable: true }), t2.prototype.stopPropagation = function() {
            this.bubbles = false;
          }, t2;
        }(), ut = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), lt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), pt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), dt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), ft = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), yt = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.ctx = e3, r2.delta = n2, r2.target = i2, r2;
          }
          return at(e2, t2), e2;
        }(ht), gt = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.ctx = e3, r2.delta = n2, r2.target = i2, r2;
          }
          return at(e2, t2), e2;
        }(ht), _t = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.ctx = e3, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), vt = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.ctx = e3, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), mt = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.engine = e3, r2.delta = n2, r2.target = i2, r2;
          }
          return at(e2, t2), e2;
        }(ht), bt = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.engine = e3, r2.delta = n2, r2.target = i2, r2;
          }
          return at(e2, t2), e2;
        }(ht), wt = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.engine = e3, i2.prevStats = n2, i2.target = e3, i2;
          }
          return at(e2, t2), e2;
        }(ht), xt = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.engine = e3, i2.stats = n2, i2.target = e3, i2;
          }
          return at(e2, t2), e2;
        }(ht), Pt = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.index = e3, i2.gamepad = n2, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), At = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.index = e3, i2.gamepad = n2, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), Et = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.button = e3, r2.value = n2, r2.target = i2, r2;
          }
          return at(e2, t2), e2;
        }(ht), St = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.axis = e3, r2.value = n2, r2.target = i2, r2;
          }
          return at(e2, t2), e2;
        }(ht), Ct = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.topic = e3, i2.handler = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), Ot = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.topic = e3, i2.handler = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), Tt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), Bt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), Mt = function(t2) {
          function e2(e3, n2, i2, r2) {
            var o2 = t2.call(this) || this;
            return o2.other = n2, o2.side = i2, o2.intersection = r2, o2.target = e3, o2;
          }
          return at(e2, t2), Object.defineProperty(e2.prototype, "actor", { get: function() {
            return this.target;
          }, set: function(t3) {
            this.target = t3;
          }, enumerable: false, configurable: true }), e2;
        }(ht), Dt = function(t2) {
          function e2(e3, n2, i2, r2) {
            var o2 = t2.call(this) || this;
            return o2.other = n2, o2.side = i2, o2.intersection = r2, o2.target = e3, o2;
          }
          return at(e2, t2), Object.defineProperty(e2.prototype, "actor", { get: function() {
            return this.target;
          }, set: function(t3) {
            this.target = t3;
          }, enumerable: false, configurable: true }), e2;
        }(ht), kt = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.call(this) || this;
            return r2.other = n2, r2.pair = i2, r2.target = e3, r2;
          }
          return at(e2, t2), Object.defineProperty(e2.prototype, "actor", { get: function() {
            return this.target;
          }, set: function(t3) {
            this.target = t3;
          }, enumerable: false, configurable: true }), e2;
        }(ht), Rt = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.other = n2, i2.target = e3, i2;
          }
          return at(e2, t2), Object.defineProperty(e2.prototype, "actor", { get: function() {
            return this.target;
          }, set: function(t3) {
            this.target = t3;
          }, enumerable: false, configurable: true }), e2;
        }(ht), jt = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.engine = e3, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), Ft = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.oldScene = e3, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), It = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.newScene = e3, i2.target = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), Lt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), zt = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.target = e3, n2;
          }
          return at(e2, t2), e2;
        }(ht), Ht = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.target = e3, i2.actor = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht), Ut = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.target = e3, i2.actor = n2, i2;
          }
          return at(e2, t2), e2;
        }(ht);
        !function(t2) {
          t2.PreventCollision = "PreventCollision", t2.Passive = "Passive", t2.Active = "Active", t2.Fixed = "Fixed";
        }(ct || (ct = {}));
        var Wt = function() {
          function t2(t3, e2, n2, i2, r2) {
            this.colliderA = t3, this.colliderB = e2, this.mtv = n2, this.point = i2, this.normal = r2;
          }
          return t2.prototype.resolve = function(t3) {
            if (t3 === Y.RigidBody)
              this._resolveRigidBodyCollision();
            else {
              if (t3 !== Y.Box)
                throw new Error("Unknown collision resolution strategy");
              this._resolveBoxCollision();
            }
          }, t2.prototype._applyBoxImpulse = function(t3, e2, n2) {
            if (t3.type === ct.Active && e2.type !== ct.Passive) {
              t3.type === ct.Active && e2.type === ct.Active && (n2 = n2.scale(0.5)), t3.body.pos.y += n2.y, t3.body.pos.x += n2.x;
              var i2 = n2.normalize();
              if (i2.dot(t3.body.vel) < 0) {
                var r2 = i2.scale(i2.dot(t3.body.vel.negate()));
                t3.body.vel = t3.body.vel.add(r2);
              }
              t3.emit("postcollision", new Dt(t3, e2, B(n2), n2));
            }
          }, t2.prototype._resolveBoxCollision = function() {
            var t3 = B(this.mtv), e2 = this.mtv.negate();
            this.colliderA.emit("precollision", new Mt(this.colliderA, this.colliderB, t3, e2)), this.colliderB.emit("precollision", new Mt(this.colliderB, this.colliderA, T(t3), e2.negate())), this._applyBoxImpulse(this.colliderA, this.colliderB, e2), this._applyBoxImpulse(this.colliderB, this.colliderA, e2.negate());
          }, t2.prototype._resolveRigidBodyCollision = function() {
            var t3 = this.colliderA.body, e2 = this.colliderB.body, n2 = this.mtv, i2 = this.normal;
            if (t3 !== e2) {
              var r2 = B(this.mtv);
              if (this.colliderA.emit("precollision", new Mt(this.colliderA, this.colliderB, r2, this.mtv)), this.colliderB.emit("precollision", new Mt(this.colliderB, this.colliderA, T(r2), this.mtv.negate())), this.colliderA.type !== ct.Passive && this.colliderB.type !== ct.Passive) {
                var o2 = this.colliderA.type === ct.Fixed ? 0 : 1 / this.colliderA.mass, s2 = this.colliderB.type === ct.Fixed ? 0 : 1 / this.colliderB.mass, a2 = this.colliderA.type === ct.Fixed ? 0 : 1 / this.colliderA.inertia, c2 = this.colliderB.type === ct.Fixed ? 0 : 1 / this.colliderB.inertia, h2 = Math.min(this.colliderA.bounciness, this.colliderB.bounciness), u2 = Math.min(this.colliderA.friction, this.colliderB.friction), l2 = (i2 = i2.normalize()).normal().normalize(), p2 = this.point.sub(this.colliderA.center), d2 = this.point.sub(this.colliderB.center), f2 = e2.vel.add(d2.cross(-e2.rx)).sub(t3.vel.sub(p2.cross(t3.rx))), y2 = f2.dot(i2), g2 = f2.dot(l2), _2 = p2.dot(l2), v2 = p2.dot(i2), m2 = d2.dot(l2), b2 = d2.dot(i2);
                if (!(y2 > 0)) {
                  var w2 = -(1 + h2) * y2 / (o2 + s2 + a2 * _2 * _2 + c2 * m2 * m2);
                  if (this.colliderA.type === ct.Fixed ? (e2.vel = e2.vel.add(i2.scale(w2 * s2)), st.allowRigidBodyRotation && (e2.rx -= w2 * c2 * -d2.cross(i2)), e2.addMtv(n2)) : this.colliderB.type === ct.Fixed ? (t3.vel = t3.vel.sub(i2.scale(w2 * o2)), st.allowRigidBodyRotation && (t3.rx += w2 * a2 * -p2.cross(i2)), t3.addMtv(n2.negate())) : (e2.vel = e2.vel.add(i2.scale(w2 * s2)), t3.vel = t3.vel.sub(i2.scale(w2 * o2)), st.allowRigidBodyRotation && (e2.rx -= w2 * c2 * -d2.cross(i2), t3.rx += w2 * a2 * -p2.cross(i2)), e2.addMtv(n2.scale(0.5)), t3.addMtv(n2.scale(-0.5))), u2 && g2) {
                    var x2 = f2.sub(i2.scale(f2.dot(i2))).normalize(), P2 = f2.dot(x2) / (o2 + s2 + v2 * v2 * a2 + b2 * b2 * c2), A2 = new V(0, 0);
                    A2 = Math.abs(P2) <= w2 * u2 ? x2.scale(P2).negate() : x2.scale(-w2 * u2), this.colliderA.type === ct.Fixed ? (e2.vel = e2.vel.add(A2.scale(s2)), st.allowRigidBodyRotation && (e2.rx += A2.dot(x2) * c2 * d2.cross(x2))) : this.colliderB.type === ct.Fixed ? (t3.vel = t3.vel.sub(A2.scale(o2)), st.allowRigidBodyRotation && (t3.rx -= A2.dot(x2) * a2 * p2.cross(x2))) : (e2.vel = e2.vel.add(A2.scale(s2)), t3.vel = t3.vel.sub(A2.scale(o2)), st.allowRigidBodyRotation && (e2.rx += A2.dot(x2) * c2 * d2.cross(x2), t3.rx -= A2.dot(x2) * a2 * p2.cross(x2)));
                  }
                  this.colliderA.emit("postcollision", new Dt(this.colliderA, this.colliderB, r2, this.mtv)), this.colliderB.emit("postcollision", new Dt(this.colliderB, this.colliderA, T(r2), this.mtv.negate()));
                }
              }
            }
          }, t2;
        }(), Nt = { CollideCircleCircle: function(t2, e2) {
          var n2 = t2.radius + e2.radius, i2 = t2.worldPos, r2 = e2.worldPos;
          if (i2.distance(r2) > n2)
            return null;
          var o2 = r2.sub(i2).normalize(), s2 = o2.scale(n2 - r2.distance(i2)), a2 = t2.getFurthestPoint(o2);
          return new Wt(t2.collider, e2.collider, s2, a2, o2);
        }, CollideCirclePolygon: function(t2, e2) {
          var n2 = t2.testSeparatingAxisTheorem(e2);
          if (!n2)
            return null;
          var i2 = n2.dot(e2.center.sub(t2.center));
          n2 = i2 < 0 ? n2.negate() : n2;
          var r2 = [], o2 = e2.getFurthestPoint(n2.negate()), s2 = t2.getFurthestPoint(n2);
          return t2.contains(o2) && r2.push(o2), e2.contains(s2) && r2.push(s2), 0 === r2.length ? null : new Wt(t2.collider, e2.collider, n2, 2 === r2.length ? r2[0].average(r2[1]) : r2[0], n2.normalize());
        }, CollideCircleEdge: function(t2, e2) {
          var n2 = t2.center, i2 = e2.end.sub(e2.begin), r2 = i2.dot(e2.end.sub(n2)), o2 = i2.dot(n2.sub(e2.begin));
          if (o2 <= 0) {
            var s2 = e2.begin.sub(n2), a2 = s2.dot(s2);
            return a2 > t2.radius * t2.radius ? null : new Wt(t2.collider, e2.collider, s2.normalize().scale(t2.radius - Math.sqrt(a2)), e2.begin, s2.normalize());
          }
          if (r2 <= 0) {
            var c2 = e2.end.sub(n2), h2 = c2.dot(c2);
            return h2 > t2.radius * t2.radius ? null : new Wt(t2.collider, e2.collider, c2.normalize().scale(t2.radius - Math.sqrt(h2)), e2.end, c2.normalize());
          }
          var u2 = i2.dot(i2), l2 = e2.begin.scale(r2).add(e2.end.scale(o2)).scale(1 / u2), p2 = n2.sub(l2), d2 = p2.dot(p2);
          if (d2 > t2.radius * t2.radius)
            return null;
          var f2 = i2.perpendicular();
          f2.dot(n2.sub(e2.begin)) < 0 && (f2.x = -f2.x, f2.y = -f2.y);
          var y2 = (f2 = f2.normalize()).scale(Math.abs(t2.radius - Math.sqrt(d2)));
          return new Wt(t2.collider, e2.collider, y2.negate(), l2, f2.negate());
        }, CollideEdgeEdge: function() {
          return null;
        }, CollidePolygonEdge: function(t2, e2) {
          var n2 = e2.end.sub(e2.begin).normal();
          if (t2.contains(e2.begin)) {
            var i2 = t2.getClosestFace(e2.begin), r2 = i2.distance, o2 = i2.face;
            if (r2)
              return new Wt(t2.collider, e2.collider, r2.negate(), e2.begin.add(r2.negate()), o2.normal().negate());
          }
          if (t2.contains(e2.end)) {
            var s2 = t2.getClosestFace(e2.end);
            r2 = s2.distance, o2 = s2.face;
            if (r2)
              return new Wt(t2.collider, e2.collider, r2.negate(), e2.end.add(r2.negate()), o2.normal().negate());
          }
          var a2 = t2.center, c2 = e2.center.sub(a2).normalize(), h2 = new Zt({ collider: e2.collider, points: [e2.begin, e2.end, e2.end.add(c2.scale(30)), e2.begin.add(c2.scale(30))] }), u2 = t2.testSeparatingAxisTheorem(h2);
          return u2 ? (n2 = n2.dot(c2) < 0 ? n2.negate() : n2, u2 = u2.dot(c2) < 0 ? u2.negate() : u2, new Wt(t2.collider, e2.collider, u2, t2.getFurthestPoint(n2), n2)) : null;
        }, CollidePolygonPolygon: function(t2, e2) {
          var n2 = t2.testSeparatingAxisTheorem(e2);
          if (!n2)
            return null;
          var i2 = n2.dot(e2.center.sub(t2.center));
          n2 = i2 < 0 ? n2.negate() : n2;
          var r2 = [], o2 = t2.getFurthestPoint(n2), s2 = e2.getFurthestPoint(n2.negate());
          e2.contains(o2) && r2.push(o2), t2.contains(s2) && r2.push(s2), 0 === r2.length && r2.push(s2);
          var a2 = 2 === r2.length ? r2[0].add(r2[1]).scale(0.5) : r2[0];
          return new Wt(t2.collider, e2.collider, n2, a2, n2.normalize());
        } };
        function qt(t2, e2, n2, i2) {
          var r2 = t2.sub(n2), o2 = e2.dot(e2), s2 = e2.dot(i2), a2 = i2.dot(i2), c2 = e2.dot(r2), h2 = i2.dot(r2), u2 = o2 * a2 - s2 * s2, l2 = u2, p2 = u2;
          if (0 === u2 || u2 <= 0.01) {
            var d2 = c2 / s2;
            return new X(t2, n2.add(i2.scale(d2)));
          }
          var f2 = s2 * h2 - a2 * c2, y2 = o2 * h2 - s2 * c2;
          return f2 < 0 ? (f2 = 0, y2 = h2, p2 = a2) : f2 > l2 && (f2 = l2, y2 = h2 + s2, p2 = a2), y2 < 0 ? (y2 = 0, -c2 < 0 ? f2 = 0 : -c2 > o2 ? f2 = l2 : (f2 = -c2, l2 = o2)) : y2 > p2 && (y2 = p2, -c2 + s2 < 0 ? f2 = 0 : -c2 + s2 > o2 ? f2 = l2 : (f2 = -c2 + s2, l2 = o2)), f2 = Math.abs(f2) < 1e-3 ? 0 : f2 / l2, y2 = Math.abs(y2) < 1e-3 ? 0 : y2 / p2, new X(t2.add(e2.scale(f2)), n2.add(i2.scale(y2)));
        }
        var Vt, Gt = { PolygonPolygonClosestLine: function(t2, e2) {
          var n2 = e2.worldPos, i2 = n2.sub(t2.worldPos), r2 = i2.negate(), o2 = new G(t2.worldPos, i2), s2 = new G(n2, r2), a2 = t2.rayCast(o2).add(o2.dir.scale(0.1)), c2 = e2.rayCast(s2).add(s2.dir.scale(0.1)), h2 = t2.getClosestFace(a2), u2 = e2.getClosestFace(c2);
          return qt(h2.face.begin, h2.face.getEdge(), u2.face.begin, u2.face.getEdge());
        }, PolygonEdgeClosestLine: function(t2, e2) {
          var n2 = e2.worldPos.sub(t2.worldPos), i2 = new G(t2.worldPos, n2), r2 = t2.rayCast(i2).add(i2.dir.scale(0.1)), o2 = t2.getClosestFace(r2), s2 = o2.face.begin, a2 = o2.face.getEdge(), c2 = e2.asLine();
          return qt(s2, a2, c2.begin, c2.getEdge());
        }, PolygonCircleClosestLine: function(t2, e2) {
          var n2 = e2.worldPos, i2 = n2.sub(t2.worldPos), r2 = new G(t2.worldPos, i2.normalize()), o2 = t2.rayCast(r2).add(r2.dir.scale(0.1)), s2 = t2.getClosestFace(o2), a2 = s2.face.begin, c2 = s2.face.getEdge(), h2 = (c2.x * (n2.x - a2.x) + c2.y * (n2.y - a2.y)) / (c2.x * c2.x + c2.y * c2.y);
          h2 > 1 ? h2 = 1 : h2 < 0 && (h2 = 0);
          var u2 = Math.sqrt(Math.pow(a2.x + c2.x * h2 - n2.x, 2) + Math.pow(a2.y + c2.y * h2 - n2.y, 2)) - e2.radius, l2 = (a2.x + c2.x * h2 - n2.x) * e2.radius / (e2.radius + u2), p2 = (a2.y + c2.y * h2 - n2.y) * e2.radius / (e2.radius + u2);
          return new X(c2.scale(h2).add(a2), new V(n2.x + l2, n2.y + p2));
        }, CircleCircleClosestLine: function(t2, e2) {
          var n2 = e2.worldPos.sub(t2.worldPos), i2 = t2.worldPos.sub(e2.worldPos), r2 = new G(t2.worldPos, n2), o2 = new G(e2.worldPos, i2), s2 = t2.rayCast(r2), a2 = e2.rayCast(o2);
          return new X(s2, a2);
        }, CircleEdgeClosestLine: function(t2, e2) {
          var n2 = t2.worldPos, i2 = e2.asLine(), r2 = i2.begin, o2 = i2.getEdge(), s2 = (o2.x * (n2.x - r2.x) + o2.y * (n2.y - r2.y)) / (o2.x * o2.x + o2.y * o2.y);
          s2 > 1 ? s2 = 1 : s2 < 0 && (s2 = 0);
          var a2 = Math.sqrt(Math.pow(r2.x + o2.x * s2 - n2.x, 2) + Math.pow(r2.y + o2.y * s2 - n2.y, 2)) - t2.radius, c2 = (r2.x + o2.x * s2 - n2.x) * t2.radius / (t2.radius + a2), h2 = (r2.y + o2.y * s2 - n2.y) * t2.radius / (t2.radius + a2);
          return new X(o2.scale(s2).add(r2), new V(n2.x + c2, n2.y + h2));
        }, EdgeEdgeClosestLine: function(t2, e2) {
          var n2 = t2.asLine(), i2 = n2.begin, r2 = n2.getEdge(), o2 = e2.asLine();
          return qt(i2, r2, o2.begin, o2.getEdge());
        } }, Xt = function() {
          function t2(t3) {
            this.offset = V.Zero, this.offset = t3.offset || V.Zero, this.radius = t3.radius || 0, this.collider = t3.collider || null;
          }
          return Object.defineProperty(t2.prototype, "worldPos", { get: function() {
            return this.collider && this.collider.body ? this.collider.body.pos.add(this.offset) : this.offset;
          }, enumerable: false, configurable: true }), t2.prototype.clone = function() {
            return new t2({ offset: this.offset.clone(), radius: this.radius, collider: null });
          }, Object.defineProperty(t2.prototype, "center", { get: function() {
            return this.collider && this.collider.body ? this.offset.add(this.collider.body.pos) : this.offset;
          }, enumerable: false, configurable: true }), t2.prototype.contains = function(t3) {
            var e2 = this.offset;
            return this.collider && this.collider.body && (e2 = this.collider.body.pos), e2.distance(t3) <= this.radius;
          }, t2.prototype.rayCast = function(t3, e2) {
            void 0 === e2 && (e2 = 1 / 0);
            var n2 = this.center, i2 = t3.dir, r2 = t3.pos, o2 = Math.sqrt(Math.pow(i2.dot(r2.sub(n2)), 2) - Math.pow(r2.sub(n2).distance(), 2) + Math.pow(this.radius, 2));
            if (o2 < 0)
              return null;
            var s2 = 0;
            if (0 === o2)
              return (s2 = -i2.dot(r2.sub(n2))) > 0 && s2 < e2 ? t3.getPoint(s2) : null;
            var a2 = -i2.dot(r2.sub(n2)) + o2, c2 = -i2.dot(r2.sub(n2)) - o2, h2 = [];
            a2 >= 0 && h2.push(a2), c2 >= 0 && h2.push(c2);
            var u2 = Math.min.apply(Math, h2);
            return u2 <= e2 ? t3.getPoint(u2) : null;
          }, t2.prototype.getClosestLineBetween = function(e2) {
            if (e2 instanceof t2)
              return Gt.CircleCircleClosestLine(this, e2);
            if (e2 instanceof Zt)
              return Gt.PolygonCircleClosestLine(e2, this).flip();
            if (e2 instanceof Qt)
              return Gt.CircleEdgeClosestLine(this, e2).flip();
            throw new Error("Polygon could not collide with unknown CollisionShape " + typeof e2);
          }, t2.prototype.collide = function(e2) {
            if (e2 instanceof t2)
              return Nt.CollideCircleCircle(this, e2);
            if (e2 instanceof Zt)
              return Nt.CollideCirclePolygon(this, e2);
            if (e2 instanceof Qt)
              return Nt.CollideCircleEdge(this, e2);
            throw new Error("Circle could not collide with unknown CollisionShape " + typeof e2);
          }, t2.prototype.getFurthestPoint = function(t3) {
            return this.center.add(t3.normalize().scale(this.radius));
          }, Object.defineProperty(t2.prototype, "bounds", { get: function() {
            var t3 = V.Zero;
            return this.collider && this.collider.body && (t3 = this.collider.body.pos), new Kt(this.offset.x + t3.x - this.radius, this.offset.y + t3.y - this.radius, this.offset.x + t3.x + this.radius, this.offset.y + t3.y + this.radius);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "localBounds", { get: function() {
            return new Kt(this.offset.x - this.radius, this.offset.y - this.radius, this.offset.x + this.radius, this.offset.y + this.radius);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "axes", { get: function() {
            return null;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "inertia", { get: function() {
            return (this.collider ? this.collider.mass : st.defaultMass) * this.radius * this.radius / 2;
          }, enumerable: false, configurable: true }), t2.prototype.testSeparatingAxisTheorem = function(t3) {
            var e2 = t3.axes, n2 = t3.center, i2 = t3.getFurthestPoint(this.offset.sub(n2));
            e2.push(this.offset.sub(i2).normalize());
            for (var r2 = Number.MAX_VALUE, o2 = null, s2 = -1, a2 = 0; a2 < e2.length; a2++) {
              var c2 = t3.project(e2[a2]), h2 = this.project(e2[a2]), u2 = c2.getOverlap(h2);
              if (u2 <= 0)
                return null;
              u2 < r2 && (r2 = u2, o2 = e2[a2], s2 = a2);
            }
            return s2 < 0 ? null : o2.normalize().scale(r2);
          }, t2.prototype.recalc = function() {
          }, t2.prototype.project = function(t3) {
            var e2 = [], n2 = this.center.dot(t3);
            return e2.push(n2), e2.push(n2 + this.radius), e2.push(n2 - this.radius), new Q(Math.min.apply(Math, e2), Math.max.apply(Math, e2));
          }, t2.prototype.draw = function(t3, e2, n2) {
            void 0 === e2 && (e2 = et.Green), void 0 === n2 && (n2 = V.Zero);
            var i2 = n2.add(this.offset);
            t3.beginPath(), t3.fillStyle = e2.toString(), t3.arc(i2.x, i2.y, this.radius, 0, 2 * Math.PI), t3.closePath(), t3.fill();
          }, t2.prototype.debugDraw = function(t3, e2) {
            void 0 === e2 && (e2 = et.Green);
            var n2 = this.collider.body, i2 = n2 ? n2.pos.add(this.offset) : this.offset, r2 = n2 ? n2.rotation : 0;
            t3.beginPath(), t3.strokeStyle = e2.toString(), t3.arc(i2.x, i2.y, this.radius, 0, 2 * Math.PI), t3.closePath(), t3.stroke(), t3.beginPath(), t3.moveTo(i2.x, i2.y), t3.lineTo(Math.cos(r2) * this.radius + i2.x, Math.sin(r2) * this.radius + i2.y), t3.closePath(), t3.stroke();
          }, t2;
        }(), Qt = function() {
          function t2(t3) {
            this.begin = t3.begin || V.Zero, this.end = t3.end || V.Zero, this.collider = t3.collider || null, this.offset = this.center;
          }
          return t2.prototype.clone = function() {
            return new t2({ begin: this.begin.clone(), end: this.end.clone(), collider: null });
          }, Object.defineProperty(t2.prototype, "worldPos", { get: function() {
            return this.collider && this.collider.body ? this.collider.body.pos.add(this.offset) : this.offset;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "center", { get: function() {
            return this.begin.average(this.end).add(this._getBodyPos());
          }, enumerable: false, configurable: true }), t2.prototype._getBodyPos = function() {
            var t3 = V.Zero;
            return this.collider && this.collider.body && (t3 = this.collider.body.pos), t3;
          }, t2.prototype._getTransformedBegin = function() {
            var t3 = this.collider ? this.collider.body : null, e2 = t3 ? t3.rotation : 0;
            return this.begin.rotate(e2).add(this._getBodyPos());
          }, t2.prototype._getTransformedEnd = function() {
            var t3 = this.collider ? this.collider.body : null, e2 = t3 ? t3.rotation : 0;
            return this.end.rotate(e2).add(this._getBodyPos());
          }, t2.prototype.getSlope = function() {
            var t3 = this._getTransformedBegin(), e2 = this._getTransformedEnd(), n2 = t3.distance(e2);
            return e2.sub(t3).scale(1 / n2);
          }, t2.prototype.getLength = function() {
            var t3 = this._getTransformedBegin(), e2 = this._getTransformedEnd();
            return t3.distance(e2);
          }, t2.prototype.contains = function() {
            return false;
          }, t2.prototype.rayCast = function(t3, e2) {
            void 0 === e2 && (e2 = 1 / 0);
            var n2 = this._getTransformedBegin().sub(t3.pos);
            if (0 === t3.dir.cross(this.getSlope()) && 0 !== n2.cross(t3.dir))
              return null;
            var i2 = t3.dir.cross(this.getSlope());
            if (0 === i2)
              return null;
            var r2 = n2.cross(this.getSlope()) / i2;
            if (r2 >= 0 && r2 <= e2) {
              var o2 = n2.cross(t3.dir) / i2 / this.getLength();
              if (o2 >= 0 && o2 <= 1)
                return t3.getPoint(r2);
            }
            return null;
          }, t2.prototype.getClosestLineBetween = function(e2) {
            if (e2 instanceof Xt)
              return Gt.CircleEdgeClosestLine(e2, this);
            if (e2 instanceof Zt)
              return Gt.PolygonEdgeClosestLine(e2, this).flip();
            if (e2 instanceof t2)
              return Gt.EdgeEdgeClosestLine(this, e2);
            throw new Error("Polygon could not collide with unknown CollisionShape " + typeof e2);
          }, t2.prototype.collide = function(e2) {
            if (e2 instanceof Xt)
              return Nt.CollideCircleEdge(e2, this);
            if (e2 instanceof Zt)
              return Nt.CollidePolygonEdge(e2, this);
            if (e2 instanceof t2)
              return Nt.CollideEdgeEdge();
            throw new Error("Edge could not collide with unknown CollisionShape " + typeof e2);
          }, t2.prototype.getFurthestPoint = function(t3) {
            var e2 = this._getTransformedBegin(), n2 = this._getTransformedEnd();
            return t3.dot(e2) > 0 ? e2 : n2;
          }, t2.prototype._boundsFromBeginEnd = function(t3, e2) {
            return new Kt(Math.min(t3.x, e2.x), Math.min(t3.y, e2.y), Math.max(t3.x, e2.x), Math.max(t3.y, e2.y));
          }, Object.defineProperty(t2.prototype, "bounds", { get: function() {
            var t3 = this._getTransformedBegin(), e2 = this._getTransformedEnd();
            return this._boundsFromBeginEnd(t3, e2);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "localBounds", { get: function() {
            return this._boundsFromBeginEnd(this.begin, this.end);
          }, enumerable: false, configurable: true }), t2.prototype.asLine = function() {
            return new X(this._getTransformedBegin(), this._getTransformedEnd());
          }, t2.prototype.asLocalLine = function() {
            return new X(this.begin, this.end);
          }, Object.defineProperty(t2.prototype, "axes", { get: function() {
            var t3 = this._getTransformedEnd().sub(this._getTransformedBegin()).normal(), e2 = [];
            return e2.push(t3), e2.push(t3.negate()), e2.push(t3.normal()), e2.push(t3.normal().negate()), e2;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "inertia", { get: function() {
            var t3 = this.collider ? this.collider.mass : st.defaultMass, e2 = this.end.sub(this.begin).distance() / 2;
            return t3 * e2 * e2;
          }, enumerable: false, configurable: true }), t2.prototype.recalc = function() {
          }, t2.prototype.project = function(t3) {
            for (var e2 = [], n2 = [this._getTransformedBegin(), this._getTransformedEnd()], i2 = n2.length, r2 = 0; r2 < i2; r2++)
              e2.push(n2[r2].dot(t3));
            return new Q(Math.min.apply(Math, e2), Math.max.apply(Math, e2));
          }, t2.prototype.draw = function(t3, e2, n2) {
            void 0 === e2 && (e2 = et.Green), void 0 === n2 && (n2 = V.Zero);
            var i2 = this.begin.add(n2), r2 = this.end.add(n2);
            t3.strokeStyle = e2.toString(), t3.beginPath(), t3.moveTo(i2.x, i2.y), t3.lineTo(r2.x, r2.y), t3.closePath(), t3.stroke();
          }, t2.prototype.debugDraw = function(t3, e2) {
            void 0 === e2 && (e2 = et.Red);
            var n2 = this._getTransformedBegin(), i2 = this._getTransformedEnd();
            t3.strokeStyle = e2.toString(), t3.beginPath(), t3.moveTo(n2.x, n2.y), t3.lineTo(i2.x, i2.y), t3.closePath(), t3.stroke();
          }, t2;
        }(), Zt = function() {
          function t2(t3) {
            this._transformedPoints = [], this._axes = [], this._sides = [], this.offset = t3.offset || V.Zero;
            var e2 = !!t3.clockwiseWinding;
            this.points = (e2 ? t3.points.reverse() : t3.points) || [], this.collider = this.collider = t3.collider || null, this._calculateTransformation();
          }
          return t2.prototype.clone = function() {
            return new t2({ offset: this.offset.clone(), points: this.points.map(function(t3) {
              return t3.clone();
            }), collider: null });
          }, Object.defineProperty(t2.prototype, "worldPos", { get: function() {
            return this.collider && this.collider.body ? this.collider.body.pos.add(this.offset) : this.offset;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "center", { get: function() {
            var t3 = this.collider ? this.collider.body : null;
            return t3 ? t3.pos.add(this.offset) : this.offset;
          }, enumerable: false, configurable: true }), t2.prototype._calculateTransformation = function() {
            var t3 = this.collider ? this.collider.body : null, e2 = t3 ? t3.pos.add(this.offset) : this.offset, n2 = t3 ? t3.rotation : 0, i2 = t3 ? t3.scale : V.One, r2 = this.points.length;
            this._transformedPoints.length = 0;
            for (var o2 = 0; o2 < r2; o2++)
              this._transformedPoints[o2] = this.points[o2].scale(i2).rotate(n2).add(e2);
          }, t2.prototype.getTransformedPoints = function() {
            return this._transformedPoints.length && (!this.collider || !this.collider.body || this.collider.body.oldPos.equals(this.collider.body.pos) && this.collider.body.oldRotation === this.collider.body.rotation && this.collider.body.oldScale === this.collider.body.scale) || this._calculateTransformation(), this._transformedPoints;
          }, t2.prototype.getSides = function() {
            if (this._sides.length)
              return this._sides;
            for (var t3 = [], e2 = this.getTransformedPoints(), n2 = e2.length, i2 = 0; i2 < n2; i2++)
              t3.push(new X(e2[i2], e2[(i2 - 1 + n2) % n2]));
            return this._sides = t3, this._sides;
          }, t2.prototype.recalc = function() {
            this._sides.length = 0, this._axes.length = 0, this._transformedPoints.length = 0, this.getTransformedPoints(), this.getSides();
          }, t2.prototype.contains = function(t3) {
            var e2 = new G(t3, new V(1, 0));
            return this.getSides().reduce(function(t4, n2) {
              return e2.intersect(n2) >= 0 ? t4 + 1 : t4;
            }, 0) % 2 != 0;
          }, t2.prototype.getClosestLineBetween = function(e2) {
            if (e2 instanceof Xt)
              return Gt.PolygonCircleClosestLine(this, e2);
            if (e2 instanceof t2)
              return Gt.PolygonPolygonClosestLine(this, e2);
            if (e2 instanceof Qt)
              return Gt.PolygonEdgeClosestLine(this, e2);
            throw new Error("Polygon could not collide with unknown CollisionShape " + typeof e2);
          }, t2.prototype.collide = function(e2) {
            if (e2 instanceof Xt)
              return Nt.CollideCirclePolygon(e2, this);
            if (e2 instanceof t2)
              return Nt.CollidePolygonPolygon(this, e2);
            if (e2 instanceof Qt)
              return Nt.CollidePolygonEdge(this, e2);
            throw new Error("Polygon could not collide with unknown CollisionShape " + typeof e2);
          }, t2.prototype.getFurthestPoint = function(t3) {
            for (var e2 = this.getTransformedPoints(), n2 = null, i2 = -Number.MAX_VALUE, r2 = 0; r2 < e2.length; r2++) {
              var o2 = t3.dot(e2[r2]);
              o2 > i2 && (i2 = o2, n2 = e2[r2]);
            }
            return n2;
          }, t2.prototype.getClosestFace = function(t3) {
            for (var e2 = this.getSides(), n2 = Number.POSITIVE_INFINITY, i2 = -1, r2 = -1, o2 = 0; o2 < e2.length; o2++) {
              var s2 = e2[o2].distanceToPoint(t3);
              s2 < n2 && (n2 = s2, i2 = o2, r2 = s2);
            }
            return -1 !== i2 ? { distance: e2[i2].normal().scale(r2), face: e2[i2] } : null;
          }, Object.defineProperty(t2.prototype, "bounds", { get: function() {
            var t3 = this.getTransformedPoints();
            return Kt.fromPoints(t3);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "localBounds", { get: function() {
            return Kt.fromPoints(this.points);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "inertia", { get: function() {
            for (var t3 = this.collider ? this.collider.mass : st.defaultMass, e2 = 0, n2 = 0, i2 = 0; i2 < this.points.length; i2++) {
              var r2 = (i2 + 1) % this.points.length, o2 = this.points[r2].cross(this.points[i2]);
              e2 += o2 * (this.points[i2].dot(this.points[i2]) + this.points[i2].dot(this.points[r2]) + this.points[r2].dot(this.points[r2])), n2 += o2;
            }
            return t3 / 6 * (e2 / n2);
          }, enumerable: false, configurable: true }), t2.prototype.rayCast = function(t3, e2) {
            void 0 === e2 && (e2 = 1 / 0);
            for (var n2 = this.getSides(), i2 = n2.length, r2 = Number.MAX_VALUE, o2 = -1, s2 = 0; s2 < i2; s2++) {
              var a2 = t3.intersect(n2[s2]);
              a2 >= 0 && a2 < r2 && a2 <= e2 && (r2 = a2, o2 = s2);
            }
            return o2 >= 0 ? t3.getPoint(r2) : null;
          }, Object.defineProperty(t2.prototype, "axes", { get: function() {
            if (this._axes.length)
              return this._axes;
            for (var t3 = [], e2 = this.getTransformedPoints(), n2 = e2.length, i2 = 0; i2 < n2; i2++)
              t3.push(e2[i2].sub(e2[(i2 + 1) % n2]).normal());
            return this._axes = t3, this._axes;
          }, enumerable: false, configurable: true }), t2.prototype.testSeparatingAxisTheorem = function(t3) {
            for (var e2 = t3, n2 = this.axes.concat(e2.axes), i2 = Number.MAX_VALUE, r2 = null, o2 = -1, s2 = 0; s2 < n2.length; s2++) {
              var a2 = this.project(n2[s2]), c2 = e2.project(n2[s2]), h2 = a2.getOverlap(c2);
              if (h2 <= 0)
                return null;
              h2 < i2 && (i2 = h2, r2 = n2[s2], o2 = s2);
            }
            return -1 === o2 ? null : r2.normalize().scale(i2);
          }, t2.prototype.project = function(t3) {
            for (var e2 = this.getTransformedPoints(), n2 = e2.length, i2 = Number.MAX_VALUE, r2 = -Number.MAX_VALUE, o2 = 0; o2 < n2; o2++) {
              var s2 = e2[o2].dot(t3);
              i2 = Math.min(i2, s2), r2 = Math.max(r2, s2);
            }
            return new Q(i2, r2);
          }, t2.prototype.draw = function(t3, e2, n2) {
            void 0 === e2 && (e2 = et.Green), void 0 === n2 && (n2 = V.Zero), t3.beginPath(), t3.fillStyle = e2.toString();
            var i2 = n2.add(this.offset), r2 = this.points[0].add(i2);
            t3.moveTo(r2.x, r2.y), this.points.map(function(t4) {
              return t4.add(i2);
            }).forEach(function(e3) {
              t3.lineTo(e3.x, e3.y);
            }), t3.lineTo(r2.x, r2.y), t3.closePath(), t3.fill();
          }, t2.prototype.debugDraw = function(t3, e2) {
            void 0 === e2 && (e2 = et.Red), t3.beginPath(), t3.strokeStyle = e2.toString();
            var n2 = this.getTransformedPoints()[0];
            t3.moveTo(n2.x, n2.y), this.getTransformedPoints().forEach(function(e3) {
              t3.lineTo(e3.x, e3.y);
            }), t3.lineTo(n2.x, n2.y), t3.closePath(), t3.stroke();
          }, t2;
        }(), Kt = function() {
          function t2(t3, e2, n2, i2) {
            void 0 === t3 && (t3 = 0), void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 0), void 0 === i2 && (i2 = 0), "object" == typeof t3 ? (this.left = t3.left, this.top = t3.top, this.right = t3.right, this.bottom = t3.bottom) : "number" == typeof t3 && (this.left = t3, this.top = e2, this.right = n2, this.bottom = i2);
          }
          return t2.getSideFromIntersection = function(t3) {
            return t3 && t3 ? Math.abs(t3.x) > Math.abs(t3.y) ? t3.x < 0 ? p.Right : p.Left : t3.y < 0 ? p.Bottom : p.Top : p.None;
          }, t2.fromPoints = function(e2) {
            for (var n2 = 1 / 0, i2 = 1 / 0, r2 = -1 / 0, o2 = -1 / 0, s2 = 0; s2 < e2.length; s2++)
              e2[s2].x < n2 && (n2 = e2[s2].x), e2[s2].x > r2 && (r2 = e2[s2].x), e2[s2].y < i2 && (i2 = e2[s2].y), e2[s2].y > o2 && (o2 = e2[s2].y);
            return new t2(n2, i2, r2, o2);
          }, t2.fromDimension = function(e2, n2, i2, r2) {
            return void 0 === i2 && (i2 = V.Half), void 0 === r2 && (r2 = V.Zero), new t2(-e2 * i2.x + r2.x, -n2 * i2.y + r2.y, e2 - e2 * i2.x + r2.x, n2 - n2 * i2.y + r2.y);
          }, Object.defineProperty(t2.prototype, "width", { get: function() {
            return this.right - this.left;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "height", { get: function() {
            return this.bottom - this.top;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "center", { get: function() {
            return new V((this.left + this.right) / 2, (this.top + this.bottom) / 2);
          }, enumerable: false, configurable: true }), t2.prototype.translate = function(e2) {
            return new t2(this.left + e2.x, this.top + e2.y, this.right + e2.x, this.bottom + e2.y);
          }, t2.prototype.rotate = function(e2, n2) {
            void 0 === n2 && (n2 = V.Zero);
            var i2 = this.getPoints().map(function(t3) {
              return t3.rotate(e2, n2);
            });
            return t2.fromPoints(i2);
          }, t2.prototype.scale = function(e2, n2) {
            void 0 === n2 && (n2 = V.Zero);
            var i2 = this.translate(n2);
            return new t2(i2.left * e2.x, i2.top * e2.y, i2.right * e2.x, i2.bottom * e2.y);
          }, t2.prototype.getPerimeter = function() {
            return 2 * (this.width + this.height);
          }, t2.prototype.getPoints = function() {
            var t3 = [];
            return t3.push(new V(this.left, this.top)), t3.push(new V(this.right, this.top)), t3.push(new V(this.right, this.bottom)), t3.push(new V(this.left, this.bottom)), t3;
          }, t2.prototype.toPolygon = function(t3) {
            var e2 = null;
            return t3 && t3.body && t3.body.collider && (e2 = t3.body.collider), new Zt({ collider: e2, points: this.getPoints(), offset: V.Zero });
          }, t2.prototype.rayCast = function(t3, e2) {
            void 0 === e2 && (e2 = 1 / 0);
            var n2 = -1 / 0, i2 = 1 / 0, r2 = 0 === t3.dir.x ? Number.MAX_VALUE : 1 / t3.dir.x, o2 = 0 === t3.dir.y ? Number.MAX_VALUE : 1 / t3.dir.y, s2 = (this.left - t3.pos.x) * r2, a2 = (this.right - t3.pos.x) * r2;
            n2 = Math.min(s2, a2), i2 = Math.max(s2, a2);
            var c2 = (this.top - t3.pos.y) * o2, h2 = (this.bottom - t3.pos.y) * o2;
            return n2 = Math.max(n2, Math.min(c2, h2)), (i2 = Math.min(i2, Math.max(c2, h2))) >= Math.max(0, n2) && n2 < e2;
          }, t2.prototype.rayCastTime = function(t3, e2) {
            void 0 === e2 && (e2 = 1 / 0);
            var n2 = -1 / 0, i2 = 1 / 0, r2 = 0 === t3.dir.x ? Number.MAX_VALUE : 1 / t3.dir.x, o2 = 0 === t3.dir.y ? Number.MAX_VALUE : 1 / t3.dir.y, s2 = (this.left - t3.pos.x) * r2, a2 = (this.right - t3.pos.x) * r2;
            n2 = Math.min(s2, a2), i2 = Math.max(s2, a2);
            var c2 = (this.top - t3.pos.y) * o2, h2 = (this.bottom - t3.pos.y) * o2;
            return n2 = Math.max(n2, Math.min(c2, h2)), (i2 = Math.min(i2, Math.max(c2, h2))) >= Math.max(0, n2) && n2 < e2 ? n2 : -1;
          }, t2.prototype.contains = function(e2) {
            return e2 instanceof V ? this.left <= e2.x && this.top <= e2.y && this.bottom >= e2.y && this.right >= e2.x : e2 instanceof t2 && (this.left < e2.left && this.top < e2.top && e2.bottom < this.bottom && e2.right < this.right);
          }, t2.prototype.combine = function(e2) {
            return new t2(Math.min(this.left, e2.left), Math.min(this.top, e2.top), Math.max(this.right, e2.right), Math.max(this.bottom, e2.bottom));
          }, Object.defineProperty(t2.prototype, "dimensions", { get: function() {
            return new V(this.width, this.height);
          }, enumerable: false, configurable: true }), t2.prototype.intersect = function(t3) {
            var e2 = this.combine(t3);
            if (e2.width < t3.width + this.width && e2.height < t3.height + this.height && !e2.dimensions.equals(t3.dimensions) && !e2.dimensions.equals(this.dimensions)) {
              var n2 = 0;
              n2 = this.right >= t3.left && this.right <= t3.right ? t3.left - this.right : t3.right - this.left;
              var i2 = 0;
              return i2 = this.top <= t3.bottom && this.top >= t3.top ? t3.bottom - this.top : t3.top - this.bottom, Math.abs(n2) < Math.abs(i2) ? new V(n2, 0) : new V(0, i2);
            }
            if (e2.dimensions.equals(t3.dimensions) || e2.dimensions.equals(this.dimensions)) {
              n2 = 0;
              n2 = this.width - t3.width >= 0 ? this.right - t3.right <= t3.left - this.left ? t3.left - this.right : t3.right - this.left : t3.right - this.right <= this.left - t3.left ? this.left - t3.right : this.right - t3.left;
              i2 = 0;
              return i2 = this.height - t3.height >= 0 ? this.bottom - t3.bottom <= t3.top - this.top ? t3.top - this.bottom : t3.bottom - this.top : t3.bottom - this.bottom <= this.top - t3.top ? this.top - t3.bottom : this.bottom - t3.top, Math.abs(n2) < Math.abs(i2) ? new V(n2, 0) : new V(0, i2);
            }
            return null;
          }, t2.prototype.intersectWithSide = function(e2) {
            var n2 = this.intersect(e2);
            return t2.getSideFromIntersection(n2);
          }, t2.prototype.debugDraw = function(t3, e2) {
            void 0 === e2 && (e2 = et.Yellow), t3.strokeStyle = e2.toString(), t3.strokeRect(this.left, this.top, this.width, this.height);
          }, t2;
        }(), Yt = function() {
          return (Yt = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
              for (var r2 in e2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        };
        !function(t2) {
          t2.FullScreen = "FullScreen", t2.Container = "Container", t2.Fixed = "Fixed", t2.Position = "Position";
        }(Vt || (Vt = {}));
        var Jt = function() {
          function t2() {
          }
          return Object.defineProperty(t2, "SVGA", { get: function() {
            return { width: 800, height: 600 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Standard", { get: function() {
            return { width: 1920, height: 1080 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "Atari2600", { get: function() {
            return { width: 160, height: 192 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "GameBoy", { get: function() {
            return { width: 160, height: 144 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "GameBoyAdvance", { get: function() {
            return { width: 240, height: 160 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "NintendoDS", { get: function() {
            return { width: 256, height: 192 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "NES", { get: function() {
            return { width: 256, height: 224 };
          }, enumerable: false, configurable: true }), Object.defineProperty(t2, "SNES", { get: function() {
            return { width: 256, height: 244 };
          }, enumerable: false, configurable: true }), t2;
        }(), $t = function() {
          function t2(t3) {
            var e2, n2, i2, r2 = this;
            this._antialiasing = true, this._resolutionStack = [], this._viewportStack = [], this._pixelRatio = null, this._isFullScreen = false, this._isDisposed = false, this._logger = R.getInstance(), this._pixelRatioChangeHandler = function() {
              r2._logger.debug("Pixel Ratio Change", window.devicePixelRatio), r2.applyResolutionAndViewport();
            }, this._windowResizeHandler = function() {
              var t4 = r2.displayMode === Vt.Container ? r2.canvas.parentElement || document.body : window;
              r2._logger.debug("View port resized"), r2._setHeightByDisplayMode(t4), r2._logger.info("parent.clientHeight " + t4.clientHeight), r2.applyResolutionAndViewport();
            }, this.viewport = t3.viewport, this.resolution = null !== (e2 = t3.resolution) && void 0 !== e2 ? e2 : Yt({}, this.viewport), this._displayMode = null !== (n2 = t3.displayMode) && void 0 !== n2 ? n2 : Vt.Fixed, this._canvas = t3.canvas, this._ctx = t3.context, this._antialiasing = null !== (i2 = t3.antialiasing) && void 0 !== i2 ? i2 : this._antialiasing, this._browser = t3.browser, this._position = t3.position, this._pixelRatio = t3.pixelRatio, this._applyDisplayMode(), this._mediaQueryList = this._browser.window.nativeComponent.matchMedia("(resolution: " + window.devicePixelRatio + "dppx)"), this._mediaQueryList.addEventListener("change", this._pixelRatioChangeHandler);
          }
          return t2.prototype.dispose = function() {
            this._isDisposed || (this._isDisposed = true, this._browser.window.off("resize", this._windowResizeHandler), this._mediaQueryList.removeEventListener("change", this._pixelRatioChangeHandler));
          }, Object.defineProperty(t2.prototype, "pixelRatio", { get: function() {
            return this._pixelRatio ? this._pixelRatio : window.devicePixelRatio < 1 ? 1 : window.devicePixelRatio || 1;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isHiDpi", { get: function() {
            return 1 !== this.pixelRatio;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "displayMode", { get: function() {
            return this._displayMode;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "canvas", { get: function() {
            return this._canvas;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "resolution", { get: function() {
            return this._resolution;
          }, set: function(t3) {
            this._resolution = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "viewport", { get: function() {
            return this._viewport ? this._viewport : this._resolution;
          }, set: function(t3) {
            this._viewport = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "scaledWidth", { get: function() {
            return this._resolution.width * this.pixelRatio;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "scaledHeight", { get: function() {
            return this._resolution.height * this.pixelRatio;
          }, enumerable: false, configurable: true }), t2.prototype.setCurrentCamera = function(t3) {
            this._camera = t3;
          }, t2.prototype.pushResolutionAndViewport = function() {
            this._resolutionStack.push(this.resolution), this._viewportStack.push(this.viewport), this.resolution = Yt({}, this.resolution), this.viewport = Yt({}, this.viewport);
          }, t2.prototype.popResolutionAndViewport = function() {
            this.resolution = this._resolutionStack.pop(), this.viewport = this._viewportStack.pop();
          }, t2.prototype.applyResolutionAndViewport = function() {
            this._canvas.width = this.scaledWidth, this._canvas.height = this.scaledHeight, this._canvas.style.imageRendering = this._antialiasing ? "auto" : "pixelated", this._canvas.style.width = this.viewport.width + "px", this._canvas.style.height = this.viewport.height + "px", this._ctx.resetTransform(), this._ctx.scale(this.pixelRatio, this.pixelRatio), this._ctx.imageSmoothingEnabled = this._antialiasing;
          }, Object.defineProperty(t2.prototype, "antialiasing", { get: function() {
            return this._antialiasing;
          }, set: function(t3) {
            this._antialiasing = t3, this._ctx.imageSmoothingEnabled = this._antialiasing;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isFullScreen", { get: function() {
            return this._isFullScreen;
          }, enumerable: false, configurable: true }), t2.prototype.goFullScreen = function() {
            var t3 = this;
            return this._canvas.requestFullscreen().then(function() {
              t3._isFullScreen = true;
            });
          }, t2.prototype.exitFullScreen = function() {
            var t3 = this;
            return document.exitFullscreen().then(function() {
              t3._isFullScreen = false;
            });
          }, t2.prototype.screenToWorldCoordinates = function(t3) {
            var e2, n2, i2, r2, o2 = t3.x, s2 = t3.y;
            return o2 = o2 / this.viewport.width * this.drawWidth, s2 = s2 / this.viewport.height * this.drawHeight, o2 -= this.halfDrawWidth, s2 -= this.halfDrawHeight, o2 += null !== (n2 = null === (e2 = this._camera) || void 0 === e2 ? void 0 : e2.x) && void 0 !== n2 ? n2 : 0, s2 += null !== (r2 = null === (i2 = this._camera) || void 0 === i2 ? void 0 : i2.y) && void 0 !== r2 ? r2 : 0, new V(Math.floor(o2), Math.floor(s2));
          }, t2.prototype.worldToScreenCoordinates = function(t3) {
            var e2, n2, i2, r2, o2 = t3.x, s2 = t3.y;
            return o2 -= null !== (n2 = null === (e2 = this._camera) || void 0 === e2 ? void 0 : e2.x) && void 0 !== n2 ? n2 : 0, s2 -= null !== (r2 = null === (i2 = this._camera) || void 0 === i2 ? void 0 : i2.y) && void 0 !== r2 ? r2 : 0, o2 += this.halfDrawWidth, s2 += this.halfDrawHeight, o2 = o2 * this.viewport.width / this.drawWidth, s2 = s2 * this.viewport.height / this.drawHeight, new V(Math.floor(o2), Math.floor(s2));
          }, t2.prototype.getWorldBounds = function() {
            var t3 = this.screenToWorldCoordinates(V.Zero).x, e2 = this.screenToWorldCoordinates(V.Zero).y, n2 = t3 + this.drawWidth, i2 = e2 + this.drawHeight;
            return new Kt(t3, e2, n2, i2);
          }, Object.defineProperty(t2.prototype, "canvasWidth", { get: function() {
            return this.canvas.width;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "halfCanvasWidth", { get: function() {
            return this.canvas.width / 2;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "canvasHeight", { get: function() {
            return this.canvas.height;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "halfCanvasHeight", { get: function() {
            return this.canvas.height / 2;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "drawWidth", { get: function() {
            return this._camera ? this.scaledWidth / this._camera.z / this.pixelRatio : this.scaledWidth / this.pixelRatio;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "halfDrawWidth", { get: function() {
            return this.drawWidth / 2;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "drawHeight", { get: function() {
            return this._camera ? this.scaledHeight / this._camera.z / this.pixelRatio : this.scaledHeight / this.pixelRatio;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "halfDrawHeight", { get: function() {
            return this.drawHeight / 2;
          }, enumerable: false, configurable: true }), t2.prototype._applyDisplayMode = function() {
            if (this.displayMode === Vt.FullScreen || this.displayMode === Vt.Container) {
              var t3 = this.displayMode === Vt.Container ? this.canvas.parentElement || document.body : window;
              this._setHeightByDisplayMode(t3), this._browser.window.on("resize", this._windowResizeHandler);
            } else
              this.displayMode === Vt.Position && this._initializeDisplayModePosition(this._position);
          }, t2.prototype._setHeightByDisplayMode = function(t3) {
            this.displayMode === Vt.Container && (this.resolution = { width: t3.clientWidth, height: t3.clientHeight }, this.viewport = this.resolution), this.displayMode === Vt.FullScreen && (document.body.style.margin = "0px", document.body.style.overflow = "hidden", this.resolution = { width: t3.innerWidth, height: t3.innerHeight }, this.viewport = this.resolution);
          }, t2.prototype._initializeDisplayModePosition = function(t3) {
            if (!t3)
              throw new Error("DisplayMode of Position was selected but no position option was given");
            if (this.canvas.style.display = "block", this.canvas.style.position = "absolute", "string" == typeof t3) {
              var e2 = t3.split(" ");
              switch (e2[0]) {
                case "top":
                  this.canvas.style.top = "0px";
                  break;
                case "bottom":
                  this.canvas.style.bottom = "0px";
                  break;
                case "middle":
                  this.canvas.style.top = "50%";
                  var n2 = -this.halfDrawHeight;
                  this.canvas.style.marginTop = n2.toString();
                  break;
                default:
                  throw new Error("Invalid Position Given");
              }
              if (e2[1])
                switch (e2[1]) {
                  case "left":
                    this.canvas.style.left = "0px";
                    break;
                  case "right":
                    this.canvas.style.right = "0px";
                    break;
                  case "center":
                    this.canvas.style.left = "50%";
                    var i2 = -this.halfDrawWidth;
                    this.canvas.style.marginLeft = i2.toString();
                    break;
                  default:
                    throw new Error("Invalid Position Given");
                }
            } else
              t3.top && ("number" == typeof t3.top ? this.canvas.style.top = t3.top.toString() + "px" : this.canvas.style.top = t3.top), t3.right && ("number" == typeof t3.right ? this.canvas.style.right = t3.right.toString() + "px" : this.canvas.style.right = t3.right), t3.bottom && ("number" == typeof t3.bottom ? this.canvas.style.bottom = t3.bottom.toString() + "px" : this.canvas.style.bottom = t3.bottom), t3.left && ("number" == typeof t3.left ? this.canvas.style.left = t3.left.toString() + "px" : this.canvas.style.left = t3.left);
          }, t2;
        }(), te = function() {
          function t2(t3) {
            this._handlers = {}, this._wiredEventDispatchers = [], this._target = t3;
          }
          return t2.prototype.clear = function() {
            this._handlers = {}, this._wiredEventDispatchers = [];
          }, t2.prototype.emit = function(t3, e2) {
            if (t3) {
              t3 = t3.toLowerCase();
              var n2, i2, r2 = this._target;
              if (e2 || (e2 = new ht()), e2.target = r2, this._handlers[t3])
                for (n2 = 0, i2 = this._handlers[t3].length; n2 < i2; n2++)
                  this._handlers[t3][n2].call(r2, e2);
              for (n2 = 0, i2 = this._wiredEventDispatchers.length; n2 < i2; n2++)
                this._wiredEventDispatchers[n2].emit(t3, e2);
            }
          }, t2.prototype.on = function(t3, e2) {
            t3 = t3.toLowerCase(), this._handlers[t3] || (this._handlers[t3] = []), this._handlers[t3].push(e2), "unsubscribe" !== t3 && "subscribe" !== t3 && this.emit("subscribe", new Ct(t3, e2));
          }, t2.prototype.off = function(t3, e2) {
            t3 = t3.toLowerCase();
            var n2 = this._handlers[t3];
            if (n2)
              if (e2) {
                var i2 = n2.indexOf(e2);
                this._handlers[t3].splice(i2, 1);
              } else
                this._handlers[t3].length = 0;
            "unsubscribe" !== t3 && "subscribe" !== t3 && this.emit("unsubscribe", new Ot(t3, e2));
          }, t2.prototype.once = function(t3, e2) {
            var n2 = this;
            this.on(t3, function(i2) {
              var r2 = i2 || new ht();
              r2.target = r2.target || n2._target, n2.off(t3, e2), e2.call(r2.target, r2);
            });
          }, t2.prototype.wire = function(t3) {
            t3._wiredEventDispatchers.push(this);
          }, t2.prototype.unwire = function(t3) {
            var e2 = t3._wiredEventDispatchers.indexOf(this);
            e2 > -1 && t3._wiredEventDispatchers.splice(e2, 1);
          }, t2;
        }(), ee = function() {
          function t2() {
            this.eventDispatcher = new te(this);
          }
          return t2.prototype.on = function(t3, e2) {
            this.eventDispatcher.on(t3, e2);
          }, t2.prototype.off = function(t3, e2) {
            this.eventDispatcher.off(t3, e2);
          }, t2.prototype.emit = function(t3, e2) {
            this.eventDispatcher.emit(t3, e2);
          }, t2.prototype.once = function(t3, e2) {
            this.eventDispatcher.once(t3, e2);
          }, t2;
        }(), ne = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), ie = function(t2) {
          function e2(e3, n2, i2) {
            void 0 === i2 && (i2 = true);
            var r2 = t2.call(this) || this;
            return r2.path = e3, r2.responseType = n2, r2.bustCache = i2, r2.data = null, r2.logger = R.getInstance(), r2.arrayBuffer = null, r2.onprogress = function() {
            }, r2.oncomplete = function() {
            }, r2.onerror = function() {
            }, r2;
          }
          return ne(e2, t2), e2.prototype.isLoaded = function() {
            return null !== this.data;
          }, e2.prototype.wireEngine = function(t3) {
          }, e2.prototype._cacheBust = function(t3) {
            return /\?\w*=\w*/.test(t3) ? t3 += "&__=" + Date.now() : t3 += "?__=" + Date.now(), t3;
          }, e2.prototype._start = function() {
            this.logger.debug("Started loading resource " + this.path);
          }, e2.prototype.load = function() {
            var t3 = this, e3 = new d();
            if (null !== this.data)
              return this.logger.debug("Already have data for resource", this.path), e3.resolve(this.data), this.oncomplete(), e3;
            var n2 = new XMLHttpRequest();
            return n2.open("GET", this.bustCache ? this._cacheBust(this.path) : this.path, true), n2.responseType = this.responseType, n2.onloadstart = function() {
              t3._start();
            }, n2.onprogress = this.onprogress, n2.onerror = this.onerror, n2.onload = function() {
              if (0 !== n2.status && 200 !== n2.status)
                return t3.logger.error("Failed to load resource ", t3.path, " server responded with error code", n2.status), t3.onerror(n2.response), void e3.resolve(n2.response);
              t3.data = t3.processData(n2.response), t3.oncomplete(), t3.logger.debug("Completed loading resource", t3.path), e3.resolve(t3.data);
            }, n2.send(), e3;
          }, e2.prototype.getData = function() {
            return this.data;
          }, e2.prototype.getArrayData = function() {
            return this.arrayBuffer;
          }, e2.prototype.setData = function(t3) {
            this.data = this.processData(t3);
          }, e2.prototype.processData = function(t3) {
            return "blob" === this.responseType ? URL.createObjectURL(t3) : t3;
          }, e2;
        }(ee), re = function() {
          function t2() {
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data, o2 = (r2[i2 + 0] + r2[i2 + 1] + r2[i2 + 2]) / 3;
            r2[i2 + 0] = o2, r2[i2 + 1] = o2, r2[i2 + 2] = o2;
          }, t2;
        }(), oe = function() {
          function t2() {
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data;
            r2[i2 + 0] = 255 - r2[i2 + 0], r2[i2 + 1] = 255 - r2[i2 + 1], r2[i2 + 2] = 255 - r2[i2 + 2];
          }, t2;
        }(), se = function() {
          function t2(t3) {
            this.opacity = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data;
            0 !== r2[i2 + 3] && (r2[i2 + 3] = Math.round(this.opacity * r2[i2 + 3]));
          }, t2;
        }(), ae = function() {
          function t2(t3) {
            this.color = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data;
            0 !== r2[i2 + 3] && (r2[i2 + 0] = (r2[i2 + 0] + this.color.r) / 2, r2[i2 + 1] = (r2[i2 + 1] + this.color.g) / 2, r2[i2 + 2] = (r2[i2 + 2] + this.color.b) / 2);
          }, t2;
        }(), ce = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = 0.1), this.factor = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data, o2 = et.fromRGB(r2[i2 + 0], r2[i2 + 1], r2[i2 + 2], r2[i2 + 3]).lighten(this.factor);
            r2[i2 + 0] = o2.r, r2[i2 + 1] = o2.g, r2[i2 + 2] = o2.b, r2[i2 + 3] = o2.a;
          }, t2;
        }(), he = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = 0.1), this.factor = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data, o2 = et.fromRGB(r2[i2 + 0], r2[i2 + 1], r2[i2 + 2], r2[i2 + 3]).darken(this.factor);
            r2[i2 + 0] = o2.r, r2[i2 + 1] = o2.g, r2[i2 + 2] = o2.b, r2[i2 + 3] = o2.a;
          }, t2;
        }(), ue = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = 0.1), this.factor = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data, o2 = et.fromRGB(r2[i2 + 0], r2[i2 + 1], r2[i2 + 2], r2[i2 + 3]).saturate(this.factor);
            r2[i2 + 0] = o2.r, r2[i2 + 1] = o2.g, r2[i2 + 2] = o2.b, r2[i2 + 3] = o2.a;
          }, t2;
        }(), le = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = 0.1), this.factor = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data, o2 = et.fromRGB(r2[i2 + 0], r2[i2 + 1], r2[i2 + 2], r2[i2 + 3]).desaturate(this.factor);
            r2[i2 + 0] = o2.r, r2[i2 + 1] = o2.g, r2[i2 + 2] = o2.b, r2[i2 + 3] = o2.a;
          }, t2;
        }(), pe = function() {
          function t2(t3) {
            this.color = t3;
          }
          return t2.prototype.updatePixel = function(t3, e2, n2) {
            var i2 = 4 * (t3 + e2 * n2.width), r2 = n2.data;
            0 !== r2[i2 + 3] && (r2[i2 + 0] = this.color.r, r2[i2 + 1] = this.color.g, r2[i2 + 2] = this.color.b);
          }, t2;
        }(), de = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }();
        function fe(t2) {
          return function(t3) {
            function e2() {
              for (var e3 = [], n2 = 0; n2 < arguments.length; n2++)
                e3[n2] = arguments[n2];
              var i2 = t3.apply(this, e3) || this, r2 = e3.filter(function(t4) {
                return void 0 !== t4;
              }).length;
              return 1 !== r2 || !e3[0] || "object" != typeof e3[0] || e3[0] instanceof Array || i2.assign(e3[0]), i2;
            }
            return de(e2, t3), e2.prototype.assign = function(t4) {
              for (var e3 in t4)
                "function" != typeof this[e3] && (this[e3] = t4[e3]);
            }, e2;
          }(t2);
        }
        var ye, ge = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), _e = function() {
          return (_e = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
              for (var r2 in e2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        }, ve = function(t2) {
          function e2(e3, n2, i2, r2, o2) {
            return t2.call(this, e3, n2, i2, r2, o2) || this;
          }
          return ge(e2, t2), e2;
        }(fe(function() {
          function t2(t3, e2, n2, i2, r2) {
            var o2 = this;
            this.x = 0, this.y = 0, this.rotation = 0, this.anchor = new V(0, 0), this.offset = V.Zero, this.scale = V.One, this.logger = R.getInstance(), this.flipVertical = false, this.flipHorizontal = false, this.effects = [], this.width = 0, this.height = 0, this._spriteCanvas = null, this._spriteCtx = null, this._pixelData = null, this._pixelsLoaded = false, this._dirtyEffect = false, this._opacity = 1;
            var s2 = t3;
            if (t3 && !(t3 instanceof be) && (e2 = 0 | t3.x, n2 = 0 | t3.y, i2 = 0 | t3.width, r2 = 0 | t3.height, !(s2 = t3.image))) {
              throw new Error("An image texture is required to contsruct a sprite");
            }
            this.x = e2 || 0, this.y = n2 || 0, this._texture = s2, this._spriteCanvas = document.createElement("canvas"), this._spriteCanvas.width = i2, this._spriteCanvas.height = r2, this._spriteCtx = this._spriteCanvas.getContext("2d"), this._texture.loaded.then(function() {
              o2.width = o2.width || o2._texture.image.naturalWidth, o2.height = o2.height || o2._texture.image.naturalHeight, o2._spriteCanvas.width = o2._spriteCanvas.width || o2._texture.image.naturalWidth, o2._spriteCanvas.height = o2._spriteCanvas.height || o2._texture.image.naturalHeight, o2._loadPixels(), o2._dirtyEffect = true;
            }).error(function(t4) {
              o2.logger.error("Error loading texture ", o2._texture.path, t4);
            }), this.width = i2, this.height = r2;
          }
          return Object.defineProperty(t2.prototype, "drawWidth", { get: function() {
            return this.width * this.scale.x;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "drawHeight", { get: function() {
            return this.height * this.scale.y;
          }, enumerable: false, configurable: true }), t2.prototype._loadPixels = function() {
            if (this._texture.isLoaded() && !this._pixelsLoaded) {
              var t3 = this._texture.image.naturalWidth || 0, e2 = this._texture.image.naturalHeight || 0;
              if (this.width > t3 && this.logger.warn("The sprite width " + this.width + " exceeds the width \n                              " + t3 + " of the backing texture " + this._texture.path), this.width <= 0 || t3 <= 0)
                throw new Error("The width of a sprite cannot be 0 or negative, sprite width: " + this.width + ", original width: " + t3);
              if (this.height > e2 && this.logger.warn("The sprite height " + this.height + " exceeds the height \n                              " + e2 + " of the backing texture " + this._texture.path), this.height <= 0 || e2 <= 0)
                throw new Error("The height of a sprite cannot be 0 or negative, sprite height: " + this.height + ", original height: " + e2);
              this._spriteCtx.drawImage(this._texture.image, m(this.x, 0, t3), m(this.y, 0, e2), m(this.width, 0, t3), m(this.height, 0, e2), 0, 0, this.width, this.height), this._pixelsLoaded = true;
            }
          }, t2.prototype.opacity = function(t3) {
            this._opacity = t3;
          }, t2.prototype.grayscale = function() {
            this.addEffect(new re());
          }, t2.prototype.invert = function() {
            this.addEffect(new oe());
          }, t2.prototype.fill = function(t3) {
            this.addEffect(new pe(t3));
          }, t2.prototype.colorize = function(t3) {
            this.addEffect(new ae(t3));
          }, t2.prototype.lighten = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new ce(t3));
          }, t2.prototype.darken = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new he(t3));
          }, t2.prototype.saturate = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new ue(t3));
          }, t2.prototype.desaturate = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new le(t3));
          }, t2.prototype.addEffect = function(t3) {
            this.effects.push(t3), this._texture.isLoaded() && this._pixelsLoaded ? this._applyEffects() : this._dirtyEffect = true;
          }, t2.prototype.removeEffect = function(t3) {
            var e2 = -1;
            (e2 = "number" == typeof t3 ? t3 : this.effects.indexOf(t3)) < 0 || e2 >= this.effects.length || (this.effects.splice(e2, 1), this._texture.isLoaded() && this._pixelsLoaded ? this._applyEffects() : this._dirtyEffect = true);
          }, t2.prototype._applyEffects = function() {
            var t3 = this._texture.image.naturalWidth || 0, e2 = this._texture.image.naturalHeight || 0;
            if (this._spriteCtx.clearRect(0, 0, this.width, this.height), this._spriteCtx.drawImage(this._texture.image, m(this.x, 0, t3), m(this.y, 0, e2), m(this.width, 0, t3), m(this.height, 0, e2), 0, 0, this.width, this.height), this.effects.length > 0) {
              this._pixelData = this._spriteCtx.getImageData(0, 0, this.width, this.height);
              for (var n2 = this.effects.length, i2 = 0; i2 < n2; i2++)
                for (var r2 = 0; r2 < this.height; r2++)
                  for (var o2 = 0; o2 < this.width; o2++)
                    this.effects[i2].updatePixel(o2, r2, this._pixelData);
              this._spriteCtx.clearRect(0, 0, this.width, this.height), this._spriteCtx.putImageData(this._pixelData, 0, 0);
            }
            this._dirtyEffect = false;
          }, t2.prototype.clearEffects = function() {
            this.effects.length = 0, this._applyEffects();
          }, t2.prototype.reset = function() {
          }, t2.prototype.debugDraw = function(t3, e2, n2) {
            t3.save(), t3.translate(e2, n2), t3.rotate(this.rotation);
            var i2 = this.drawWidth * this.anchor.x, r2 = this.drawHeight * this.anchor.y;
            t3.strokeStyle = et.Black.toString(), t3.strokeRect(-i2, -r2, this.drawWidth, this.drawHeight), t3.restore();
          }, t2.prototype.draw = function(t3, e2, n2) {
            t3 instanceof CanvasRenderingContext2D ? this._drawWithOptions({ ctx: t3, x: e2, y: n2 }) : this._drawWithOptions(t3);
          }, t2.prototype._drawWithOptions = function(t3) {
            var e2, n2, i2, r2, o2, s2, a2, c2, h2 = _e(_e({}, t3), { rotation: null !== (e2 = t3.rotation) && void 0 !== e2 ? e2 : this.rotation, drawWidth: null !== (n2 = t3.drawWidth) && void 0 !== n2 ? n2 : this.drawWidth, drawHeight: null !== (i2 = t3.drawHeight) && void 0 !== i2 ? i2 : this.drawHeight, flipHorizontal: null !== (r2 = t3.flipHorizontal) && void 0 !== r2 ? r2 : this.flipHorizontal, flipVertical: null !== (o2 = t3.flipVertical) && void 0 !== o2 ? o2 : this.flipVertical, anchor: null !== (s2 = t3.anchor) && void 0 !== s2 ? s2 : this.anchor, offset: null !== (a2 = t3.offset) && void 0 !== a2 ? a2 : this.offset, opacity: null !== (c2 = t3.opacity) && void 0 !== c2 ? c2 : this._opacity }), u2 = h2.ctx, l2 = h2.x, p2 = h2.y, d2 = h2.rotation, f2 = h2.drawWidth, y2 = h2.drawHeight, g2 = h2.anchor, _2 = h2.offset, v2 = h2.opacity, m2 = h2.flipHorizontal, b2 = h2.flipVertical;
            this._dirtyEffect && this._applyEffects(), u2.save();
            var w2 = f2 * g2.x + _2.x, x2 = y2 * g2.y + _2.y;
            u2.translate(l2, p2), u2.rotate(d2), m2 && (u2.translate(f2, 0), u2.scale(-1, 1)), b2 && (u2.translate(0, y2), u2.scale(1, -1)), this._dirtyEffect && this._applyEffects();
            var P2 = u2.globalAlpha;
            u2.globalAlpha = null != v2 ? v2 : 1, u2.drawImage(this._spriteCanvas, 0, 0, this.width, this.height, -w2, -x2, f2, y2), u2.globalAlpha = P2, u2.restore();
          }, t2.prototype.clone = function() {
            var t3 = new ve(this._texture, this.x, this.y, this.width, this.height);
            t3.scale = this.scale.clone(), t3.rotation = this.rotation, t3.flipHorizontal = this.flipHorizontal, t3.flipVertical = this.flipVertical;
            for (var e2 = this.effects.length, n2 = 0; n2 < e2; n2++)
              t3.addEffect(this.effects[n2]);
            return t3;
          }, t2;
        }())), me = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), be = function(t2) {
          function e2(e3, n2) {
            void 0 === n2 && (n2 = true);
            var i2 = t2.call(this, e3, "blob", n2) || this;
            return i2.path = e3, i2.bustCache = n2, i2.loaded = new d(), i2._isLoaded = false, i2._sprite = null, i2._sprite = new ve(i2, 0, 0, 0, 0), i2;
          }
          return me(e2, t2), e2.prototype.isLoaded = function() {
            return this._isLoaded;
          }, e2.prototype.load = function() {
            var e3 = this, n2 = new d();
            this.path.indexOf("data:image/") > -1 ? (this.image = new Image(), this.image.addEventListener("load", function() {
              e3.oncomplete(), e3._isLoaded = true, e3.width = e3._sprite.width = e3.image.naturalWidth, e3.height = e3._sprite.height = e3.image.naturalHeight, e3._sprite = new ve(e3, 0, 0, e3.width, e3.height), e3.loaded.resolve(e3.image), n2.resolve(e3.image);
            }), this.image.src = this.path) : t2.prototype.load.call(this).then(function() {
              e3.image = new Image(), e3.image.addEventListener("load", function() {
                e3._isLoaded = true, e3.width = e3._sprite.width = e3.image.naturalWidth, e3.height = e3._sprite.height = e3.image.naturalHeight, e3.loaded.resolve(e3.image), n2.resolve(e3.image);
              }), e3.image.src = t2.prototype.getData.call(e3);
            }, function() {
              n2.reject("Error loading texture.");
            });
            return n2;
          }, e2.prototype.asSprite = function() {
            return this._sprite;
          }, e2;
        }(ie), we = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), xe = function() {
          return (xe = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
              for (var r2 in e2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        }, Pe = function(t2) {
          function e2(e3, n2, i2, r2) {
            return t2.call(this, e3, n2, i2, r2) || this;
          }
          return we(e2, t2), e2;
        }(fe(function() {
          function t2(t3, e2, n2, i2) {
            this.sprites = [], this.currentFrame = 0, this._timeLeftInFrame = 0, this._idempotencyToken = -1, this.anchor = V.Zero, this.rotation = 0, this.scale = V.One, this.loop = true, this.freezeFrame = -1, this.flipVertical = false, this.flipHorizontal = false, this.drawWidth = 0, this.drawHeight = 0, this.width = 0, this.height = 0, this._opacity = 1;
            var r2 = t3;
            if (t3 && !(t3 instanceof lr)) {
              var o2 = t3;
              r2 = o2.engine, e2 = o2.sprites, n2 = o2.speed, i2 = o2.loop;
            }
            this.sprites = e2, this.speed = n2, this._engine = r2, this._timeLeftInFrame = this.speed, null != i2 && (this.loop = i2), e2 && e2[0] && (this.drawHeight = e2[0] ? e2[0].drawHeight : 0, this.drawWidth = e2[0] ? e2[0].drawWidth : 0, this.width = e2[0] ? e2[0].width : 0, this.height = e2[0] ? e2[0].height : 0, this.freezeFrame = e2.length - 1);
          }
          return t2.prototype.opacity = function(t3) {
            this._opacity = t3;
          }, t2.prototype.grayscale = function() {
            this.addEffect(new re());
          }, t2.prototype.invert = function() {
            this.addEffect(new oe());
          }, t2.prototype.fill = function(t3) {
            this.addEffect(new pe(t3));
          }, t2.prototype.colorize = function(t3) {
            this.addEffect(new ae(t3));
          }, t2.prototype.lighten = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new ce(t3));
          }, t2.prototype.darken = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new he(t3));
          }, t2.prototype.saturate = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new ue(t3));
          }, t2.prototype.desaturate = function(t3) {
            void 0 === t3 && (t3 = 0.1), this.addEffect(new le(t3));
          }, t2.prototype.addEffect = function(t3) {
            for (var e2 in this.sprites)
              this.sprites[e2].addEffect(t3);
          }, t2.prototype.removeEffect = function(t3) {
            for (var e2 in this.sprites)
              this.sprites[e2].removeEffect(t3);
          }, t2.prototype.clearEffects = function() {
            for (var t3 in this.sprites)
              this.sprites[t3].clearEffects();
          }, t2.prototype._setAnchor = function(t3) {
            for (var e2 in this.sprites)
              this.sprites[e2].anchor.setTo(t3.x, t3.y);
          }, t2.prototype._setRotation = function(t3) {
            for (var e2 in this.sprites)
              this.sprites[e2].rotation = t3;
          }, t2.prototype._setScale = function(t3) {
            for (var e2 in this.sprites)
              this.sprites[e2].scale = t3;
          }, t2.prototype.reset = function() {
            this.currentFrame = 0;
          }, t2.prototype.isDone = function() {
            return !this.loop && this.currentFrame >= this.sprites.length;
          }, t2.prototype.tick = function(t3, e2) {
            if (this._idempotencyToken !== e2) {
              this._idempotencyToken = e2, this._timeLeftInFrame -= t3, this._timeLeftInFrame <= 0 && (this.currentFrame = this.loop ? (this.currentFrame + 1) % this.sprites.length : this.currentFrame + 1, this._timeLeftInFrame = this.speed), this._updateValues();
              var n2 = this.sprites[this.currentFrame];
              n2 && (this.width = n2.width, this.height = n2.height, this.drawWidth = n2.drawWidth, this.drawHeight = n2.drawHeight);
            }
          }, t2.prototype._updateValues = function() {
            this._setAnchor(this.anchor), this._setRotation(this.rotation), this._setScale(this.scale);
          }, t2.prototype.skip = function(t3) {
            this.currentFrame = (this.currentFrame + t3) % this.sprites.length;
          }, t2.prototype.draw = function(t3, e2, n2) {
            t3 instanceof CanvasRenderingContext2D ? this._drawWithOptions({ ctx: t3, x: e2, y: n2 }) : this._drawWithOptions(t3);
          }, t2.prototype._drawWithOptions = function(t3) {
            var e2, n2, i2, r2, o2, s2, a2, c2, h2 = xe(xe({}, t3), { rotation: null !== (e2 = t3.rotation) && void 0 !== e2 ? e2 : this.rotation, drawWidth: null !== (n2 = t3.drawWidth) && void 0 !== n2 ? n2 : this.drawWidth, drawHeight: null !== (i2 = t3.drawHeight) && void 0 !== i2 ? i2 : this.drawHeight, flipHorizontal: null !== (r2 = t3.flipHorizontal) && void 0 !== r2 ? r2 : this.flipHorizontal, flipVertical: null !== (o2 = t3.flipVertical) && void 0 !== o2 ? o2 : this.flipVertical, anchor: null !== (s2 = t3.anchor) && void 0 !== s2 ? s2 : this.anchor, opacity: null !== (a2 = t3.opacity) && void 0 !== a2 ? a2 : this._opacity });
            this._updateValues(), this.currentFrame < this.sprites.length && (c2 = this.sprites[this.currentFrame]).draw(h2), -1 !== this.freezeFrame && this.currentFrame >= this.sprites.length && (c2 = this.sprites[m(this.freezeFrame, 0, this.sprites.length - 1)]).draw(h2), c2 && (this.drawWidth = c2.drawWidth, this.drawHeight = c2.drawHeight);
          }, t2.prototype.play = function(t3, e2) {
            this.reset(), this._engine.playAnimation(this, t3, e2);
          }, t2;
        }()));
        !function(t2) {
          t2[t2.ShortestPath = 0] = "ShortestPath", t2[t2.LongestPath = 1] = "LongestPath", t2[t2.Clockwise = 2] = "Clockwise", t2[t2.CounterClockwise = 3] = "CounterClockwise";
        }(ye || (ye = {}));
        var Ae = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        }, Ee = function() {
          function t2(t3, e2, n2, i2, r2) {
            this.actor = t3, this.easingFcn = r2, this._currentLerpTime = 0, this._lerpDuration = 1e3, this._lerpStart = new V(0, 0), this._lerpEnd = new V(0, 0), this._initialized = false, this._stopped = false, this._distance = 0, this._lerpDuration = i2, this._lerpEnd = new V(e2, n2);
          }
          return t2.prototype._initialize = function() {
            this._lerpStart = new V(this.actor.pos.x, this.actor.pos.y), this._currentLerpTime = 0, this._distance = this._lerpStart.distance(this._lerpEnd);
          }, t2.prototype.update = function(t3) {
            this._initialized || (this._initialize(), this._initialized = true);
            var e2 = this.actor.pos.x, n2 = this.actor.pos.y;
            this._currentLerpTime < this._lerpDuration ? (e2 = this._lerpEnd.x < this._lerpStart.x ? this._lerpStart.x - (this.easingFcn(this._currentLerpTime, this._lerpEnd.x, this._lerpStart.x, this._lerpDuration) - this._lerpEnd.x) : this.easingFcn(this._currentLerpTime, this._lerpStart.x, this._lerpEnd.x, this._lerpDuration), n2 = this._lerpEnd.y < this._lerpStart.y ? this._lerpStart.y - (this.easingFcn(this._currentLerpTime, this._lerpEnd.y, this._lerpStart.y, this._lerpDuration) - this._lerpEnd.y) : this.easingFcn(this._currentLerpTime, this._lerpStart.y, this._lerpEnd.y, this._lerpDuration), this.actor.pos.x = e2, this.actor.pos.y = n2, this._currentLerpTime += t3) : (this.actor.pos.x = this._lerpEnd.x, this.actor.pos.y = this._lerpEnd.y);
          }, t2.prototype.isComplete = function(t3) {
            return this._stopped || new V(t3.pos.x, t3.pos.y).distance(this._lerpStart) >= this._distance;
          }, t2.prototype.reset = function() {
            this._initialized = false;
          }, t2.prototype.stop = function() {
            this._stopped = true;
          }, t2;
        }(), Se = function() {
          function t2(t3, e2, n2, i2) {
            this._started = false, this._stopped = false, this._actor = t3, this._end = new V(e2, n2), this._speed = i2;
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true, this._start = new V(this._actor.pos.x, this._actor.pos.y), this._distance = this._start.distance(this._end), this._dir = this._end.sub(this._start).normalize());
            var e2 = this._dir.scale(this._speed);
            this._actor.vel.x = e2.x, this._actor.vel.y = e2.y, this.isComplete(this._actor) && (this._actor.pos.x = this._end.x, this._actor.pos.y = this._end.y, this._actor.vel.y = 0, this._actor.vel.x = 0);
          }, t2.prototype.isComplete = function(t3) {
            return this._stopped || new V(t3.pos.x, t3.pos.y).distance(this._start) >= this._distance;
          }, t2.prototype.stop = function() {
            this._actor.vel.y = 0, this._actor.vel.x = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), Ce = function() {
          function t2(t3, e2, n2, i2) {
            if (this._started = false, this._stopped = false, this._actor = t3, this._speed = i2, this._offset = new V(e2, n2), i2 <= 0)
              throw R.getInstance().error("Attempted to moveBy with speed less than or equal to zero : " + i2), new Error("Speed must be greater than 0 pixels per second");
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true, this._start = new V(this._actor.pos.x, this._actor.pos.y), this._end = this._start.add(this._offset), this._distance = this._offset.size, this._dir = this._end.sub(this._start).normalize()), this._actor.vel = this._dir.scale(this._speed), this.isComplete(this._actor) && (this._actor.pos.x = this._end.x, this._actor.pos.y = this._end.y, this._actor.vel.y = 0, this._actor.vel.x = 0);
          }, t2.prototype.isComplete = function(t3) {
            return this._stopped || t3.pos.distance(this._start) >= this._distance;
          }, t2.prototype.stop = function() {
            this._actor.vel.y = 0, this._actor.vel.x = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), Oe = function() {
          function t2(t3, e2, n2) {
            this._started = false, this._stopped = false, this._actor = t3, this._actorToFollow = e2, this._current = new V(this._actor.pos.x, this._actor.pos.y), this._end = new V(e2.pos.x, e2.pos.y), this._maximumDistance = void 0 !== n2 ? n2 : this._current.distance(this._end), this._speed = 0;
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true, this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize());
            var e2 = Math.sqrt(Math.pow(this._actorToFollow.vel.x, 2) + Math.pow(this._actorToFollow.vel.y, 2));
            if (0 !== e2 && (this._speed = e2), this._current.x = this._actor.pos.x, this._current.y = this._actor.pos.y, this._end.x = this._actorToFollow.pos.x, this._end.y = this._actorToFollow.pos.y, this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize(), this._distanceBetween >= this._maximumDistance) {
              var n2 = this._dir.scale(this._speed);
              this._actor.vel.x = n2.x, this._actor.vel.y = n2.y;
            } else
              this._actor.vel.x = 0, this._actor.vel.y = 0;
            this.isComplete() && (this._actor.pos.x = this._end.x, this._actor.pos.y = this._end.y, this._actor.vel.y = 0, this._actor.vel.x = 0);
          }, t2.prototype.stop = function() {
            this._actor.vel.y = 0, this._actor.vel.x = 0, this._stopped = true;
          }, t2.prototype.isComplete = function() {
            return this._stopped;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), Te = function() {
          function t2(t3, e2, n2) {
            this._started = false, this._stopped = false, this._speedWasSpecified = false, this._actor = t3, this._actorToMeet = e2, this._current = new V(this._actor.pos.x, this._actor.pos.y), this._end = new V(e2.pos.x, e2.pos.y), this._speed = n2 || 0, void 0 !== n2 && (this._speedWasSpecified = true);
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true, this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize());
            var e2 = Math.sqrt(Math.pow(this._actorToMeet.vel.x, 2) + Math.pow(this._actorToMeet.vel.y, 2));
            0 === e2 || this._speedWasSpecified || (this._speed = e2), this._current.x = this._actor.pos.x, this._current.y = this._actor.pos.y, this._end.x = this._actorToMeet.pos.x, this._end.y = this._actorToMeet.pos.y, this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize();
            var n2 = this._dir.scale(this._speed);
            this._actor.vel.x = n2.x, this._actor.vel.y = n2.y, this.isComplete() && (this._actor.pos.x = this._end.x, this._actor.pos.y = this._end.y, this._actor.vel.y = 0, this._actor.vel.x = 0);
          }, t2.prototype.isComplete = function() {
            return this._stopped || this._distanceBetween <= 1;
          }, t2.prototype.stop = function() {
            this._actor.vel.y = 0, this._actor.vel.x = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), Be = function() {
          function t2(t3, e2, n2, i2) {
            this._started = false, this._stopped = false, this._actor = t3, this._end = e2, this._speed = n2, this._rotationType = i2 || ye.ShortestPath;
          }
          return t2.prototype.update = function(t3) {
            if (!this._started) {
              this._started = true, this._start = this._actor.rotation;
              var e2 = Math.abs(this._end - this._start), n2 = y - e2;
              switch (e2 > n2 ? (this._shortDistance = n2, this._longDistance = e2) : (this._shortDistance = e2, this._longDistance = n2), this._shortestPathIsPositive = (this._start - this._end + y) % y >= Math.PI, this._rotationType) {
                case ye.ShortestPath:
                  this._distance = this._shortDistance, this._shortestPathIsPositive ? this._direction = 1 : this._direction = -1;
                  break;
                case ye.LongestPath:
                  this._distance = this._longDistance, this._shortestPathIsPositive ? this._direction = -1 : this._direction = 1;
                  break;
                case ye.Clockwise:
                  this._direction = 1, this._shortestPathIsPositive ? this._distance = this._shortDistance : this._distance = this._longDistance;
                  break;
                case ye.CounterClockwise:
                  this._direction = -1, this._shortestPathIsPositive ? this._distance = this._longDistance : this._distance = this._shortDistance;
              }
            }
            this._actor.rx = this._direction * this._speed, this.isComplete() && (this._actor.rotation = this._end, this._actor.rx = 0, this._stopped = true);
          }, t2.prototype.isComplete = function() {
            var t3 = Math.abs(this._actor.rotation - this._start);
            return this._stopped || t3 >= Math.abs(this._distance);
          }, t2.prototype.stop = function() {
            this._actor.rx = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), Me = function() {
          function t2(t3, e2, n2, i2) {
            this._started = false, this._stopped = false, this._actor = t3, this._speed = n2, this._offset = e2, this._rotationType = i2 || ye.ShortestPath;
          }
          return t2.prototype.update = function(t3) {
            if (!this._started) {
              this._started = true, this._start = this._actor.rotation, this._end = this._start + this._offset;
              var e2 = Math.abs(this._end - this._start), n2 = y - e2;
              switch (e2 > n2 ? (this._shortDistance = n2, this._longDistance = e2) : (this._shortDistance = e2, this._longDistance = n2), this._shortestPathIsPositive = (this._start - this._end + y) % y >= Math.PI, this._rotationType) {
                case ye.ShortestPath:
                  this._distance = this._shortDistance, this._shortestPathIsPositive ? this._direction = 1 : this._direction = -1;
                  break;
                case ye.LongestPath:
                  this._distance = this._longDistance, this._shortestPathIsPositive ? this._direction = -1 : this._direction = 1;
                  break;
                case ye.Clockwise:
                  this._direction = 1, this._shortDistance >= 0 ? this._distance = this._shortDistance : this._distance = this._longDistance;
                  break;
                case ye.CounterClockwise:
                  this._direction = -1, this._shortDistance <= 0 ? this._distance = this._shortDistance : this._distance = this._longDistance;
              }
            }
            this._actor.rx = this._direction * this._speed, this.isComplete() && (this._actor.rotation = this._end, this._actor.rx = 0, this._stopped = true);
          }, t2.prototype.isComplete = function() {
            var t3 = Math.abs(this._actor.rotation - this._start);
            return this._stopped || t3 >= Math.abs(this._distance);
          }, t2.prototype.stop = function() {
            this._actor.rx = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), De = function() {
          function t2(t3, e2, n2, i2, r2) {
            this._started = false, this._stopped = false, this._actor = t3, this._endX = e2, this._endY = n2, this._speedX = i2, this._speedY = r2;
          }
          return t2.prototype.update = function(t3) {
            if (this._started || (this._started = true, this._startX = this._actor.scale.x, this._startY = this._actor.scale.y, this._distanceX = Math.abs(this._endX - this._startX), this._distanceY = Math.abs(this._endY - this._startY)), Math.abs(this._actor.scale.x - this._startX) >= this._distanceX)
              this._actor.sx = 0;
            else {
              var e2 = this._endY < this._startY ? -1 : 1;
              this._actor.sx = this._speedX * e2;
            }
            if (Math.abs(this._actor.scale.y - this._startY) >= this._distanceY)
              this._actor.sy = 0;
            else {
              var n2 = this._endY < this._startY ? -1 : 1;
              this._actor.sy = this._speedY * n2;
            }
            this.isComplete() && (this._actor.scale.x = this._endX, this._actor.scale.y = this._endY, this._actor.sx = 0, this._actor.sy = 0);
          }, t2.prototype.isComplete = function() {
            return this._stopped || Math.abs(this._actor.scale.y - this._startX) >= this._distanceX && Math.abs(this._actor.scale.y - this._startY) >= this._distanceY;
          }, t2.prototype.stop = function() {
            this._actor.sx = 0, this._actor.sy = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2 = Ae([N({ message: "ex.Action.ScaleTo will be removed in v0.25.0", alternateMethod: "Set width and hight directly" })], t2);
        }(), ke = function() {
          function t2(t3, e2, n2, i2) {
            this._started = false, this._stopped = false, this._actor = t3, this._offset = new V(e2, n2), this._speedX = this._speedY = i2;
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true, this._startScale = this._actor.scale.clone(), this._endScale = this._startScale.add(this._offset), this._distanceX = Math.abs(this._endScale.x - this._startScale.x), this._distanceY = Math.abs(this._endScale.y - this._startScale.y), this._directionX = this._endScale.x < this._startScale.x ? -1 : 1, this._directionY = this._endScale.y < this._startScale.y ? -1 : 1), this._actor.sx = this._speedX * this._directionX, this._actor.sy = this._speedY * this._directionY, this.isComplete() && (this._actor.scale = this._endScale, this._actor.sx = 0, this._actor.sy = 0);
          }, t2.prototype.isComplete = function() {
            return this._stopped || Math.abs(this._actor.scale.x - this._startScale.x) >= this._distanceX && Math.abs(this._actor.scale.y - this._startScale.y) >= this._distanceY;
          }, t2.prototype.stop = function() {
            this._actor.sx = 0, this._actor.sy = 0, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2 = Ae([N({ message: "ex.Action.ScaleBy will be removed in v0.25.0", alternateMethod: "Set width and hight directly" })], t2);
        }(), Re = function() {
          function t2(t3, e2) {
            this._elapsedTime = 0, this._started = false, this._stopped = false, this._actor = t3, this._delay = e2;
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true), this.x = this._actor.pos.x, this.y = this._actor.pos.y, this._elapsedTime += t3;
          }, t2.prototype.isComplete = function() {
            return this._stopped || this._elapsedTime >= this._delay;
          }, t2.prototype.stop = function() {
            this._stopped = true;
          }, t2.prototype.reset = function() {
            this._elapsedTime = 0, this._started = false;
          }, t2;
        }(), je = function() {
          function t2(t3, e2, n2, i2) {
            void 0 === i2 && (i2 = 1), this._timeVisible = 0, this._timeNotVisible = 0, this._elapsedTime = 0, this._totalTime = 0, this._stopped = false, this._started = false, this._actor = t3, this._timeVisible = e2, this._timeNotVisible = n2, this._duration = (e2 + n2) * i2;
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true), this._elapsedTime += t3, this._totalTime += t3, this._actor.visible && this._elapsedTime >= this._timeVisible && (this._actor.visible = false, this._elapsedTime = 0), !this._actor.visible && this._elapsedTime >= this._timeNotVisible && (this._actor.visible = true, this._elapsedTime = 0), this.isComplete() && (this._actor.visible = true);
          }, t2.prototype.isComplete = function() {
            return this._stopped || this._totalTime >= this._duration;
          }, t2.prototype.stop = function() {
            this._actor.visible = true, this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false, this._elapsedTime = 0, this._totalTime = 0;
          }, t2;
        }(), Fe = function() {
          function t2(t3, e2, n2) {
            this._multiplier = 1, this._started = false, this._stopped = false, this._actor = t3, this._endOpacity = e2, this._speed = n2;
          }
          return t2.prototype.update = function(t3) {
            this._started || (this._started = true, this._endOpacity < this._actor.opacity ? this._multiplier = -1 : this._multiplier = 1), this._speed > 0 && (this._actor.opacity += this._multiplier * (Math.abs(this._actor.opacity - this._endOpacity) * t3) / this._speed), this._speed -= t3, this.isComplete() && (this._actor.opacity = this._endOpacity), R.getInstance().debug("[Action fade] Actor opacity:", this._actor.opacity);
          }, t2.prototype.isComplete = function() {
            return this._stopped || Math.abs(this._actor.opacity - this._endOpacity) < 0.05;
          }, t2.prototype.stop = function() {
            this._stopped = true;
          }, t2.prototype.reset = function() {
            this._started = false;
          }, t2;
        }(), Ie = function() {
          function t2(t3) {
            this._stopped = false, this._actor = t3;
          }
          return t2.prototype.update = function(t3) {
            this._actor.actionQueue.clearActions(), this._actor.kill(), this._stopped = true;
          }, t2.prototype.isComplete = function() {
            return this._stopped;
          }, t2.prototype.stop = function() {
          }, t2.prototype.reset = function() {
          }, t2;
        }(), Le = function() {
          function t2(t3, e2) {
            this._method = null, this._actor = null, this._hasBeenCalled = false, this._actor = t3, this._method = e2;
          }
          return t2.prototype.update = function(t3) {
            this._method.call(this._actor), this._hasBeenCalled = true;
          }, t2.prototype.isComplete = function() {
            return this._hasBeenCalled;
          }, t2.prototype.reset = function() {
            this._hasBeenCalled = false;
          }, t2.prototype.stop = function() {
            this._hasBeenCalled = true;
          }, t2;
        }(), ze = function() {
          function t2(t3, e2, n2) {
            this._stopped = false, this._actor = t3, this._actionQueue = new Ue(t3), this._repeat = e2, this._originalRepeat = e2;
            for (var i2 = n2.length, r2 = 0; r2 < i2; r2++)
              n2[r2].reset(), this._actionQueue.add(n2[r2]);
          }
          return t2.prototype.update = function(t3) {
            this.x = this._actor.pos.x, this.y = this._actor.pos.y, this._actionQueue.hasNext() || (this._actionQueue.reset(), this._repeat--), this._actionQueue.update(t3);
          }, t2.prototype.isComplete = function() {
            return this._stopped || this._repeat <= 0;
          }, t2.prototype.stop = function() {
            this._stopped = true;
          }, t2.prototype.reset = function() {
            this._repeat = this._originalRepeat;
          }, t2;
        }(), He = function() {
          function t2(t3, e2) {
            this._stopped = false, this._actor = t3, this._actionQueue = new Ue(t3);
            for (var n2 = e2.length, i2 = 0; i2 < n2; i2++)
              e2[i2].reset(), this._actionQueue.add(e2[i2]);
          }
          return t2.prototype.update = function(t3) {
            this.x = this._actor.pos.x, this.y = this._actor.pos.y, this._stopped || (this._actionQueue.hasNext() || this._actionQueue.reset(), this._actionQueue.update(t3));
          }, t2.prototype.isComplete = function() {
            return this._stopped;
          }, t2.prototype.stop = function() {
            this._stopped = true, this._actionQueue.clearActions();
          }, t2.prototype.reset = function() {
          }, t2;
        }(), Ue = function() {
          function t2(t3) {
            this._actions = [], this._completedActions = [], this._actor = t3;
          }
          return t2.prototype.add = function(t3) {
            this._actions.push(t3);
          }, t2.prototype.remove = function(t3) {
            var e2 = this._actions.indexOf(t3);
            this._actions.splice(e2, 1);
          }, t2.prototype.clearActions = function() {
            this._actions.length = 0, this._completedActions.length = 0, this._currentAction && this._currentAction.stop();
          }, t2.prototype.getActions = function() {
            return this._actions.concat(this._completedActions);
          }, t2.prototype.hasNext = function() {
            return this._actions.length > 0;
          }, t2.prototype.reset = function() {
            this._actions = this.getActions();
            for (var t3 = this._actions.length, e2 = 0; e2 < t3; e2++)
              this._actions[e2].reset();
            this._completedActions = [];
          }, t2.prototype.update = function(t3) {
            this._actions.length > 0 && (this._currentAction = this._actions[0], this._currentAction.update(t3), this._currentAction.isComplete(this._actor) && this._completedActions.push(this._actions.shift()));
          }, t2;
        }(), We = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        }, Ne = function() {
          function t2() {
          }
          return t2.CreateReversibleEasingFunction = function(t3) {
            return function(e2, n2, i2, r2) {
              return i2 < n2 ? n2 - (t3(e2, i2, n2, r2) - i2) : t3(e2, n2, i2, r2);
            };
          }, t2.CreateReversableEasingFunction = function(e2) {
            return t2.CreateReversibleEasingFunction(e2);
          }, t2.CreateVectorEasingFunction = function(t3) {
            return function(e2, n2, i2, r2) {
              return new V(t3(e2, n2.x, i2.x, r2), t3(e2, n2.y, i2.y, r2));
            };
          }, t2.Linear = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return (n2 -= e2) * t3 / i2 + e2;
          }), t2.EaseInQuad = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return (n2 -= e2) * (t3 /= i2) * t3 + e2;
          }), t2.EaseOutQuad = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return -(n2 -= e2) * (t3 /= i2) * (t3 - 2) + e2;
          }), t2.EaseInOutQuad = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return n2 -= e2, (t3 /= i2 / 2) < 1 ? n2 / 2 * t3 * t3 + e2 : -n2 / 2 * (--t3 * (t3 - 2) - 1) + e2;
          }), t2.EaseInCubic = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return (n2 -= e2) * (t3 /= i2) * t3 * t3 + e2;
          }), t2.EaseOutCubic = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return t3 /= i2, (n2 -= e2) * (--t3 * t3 * t3 + 1) + e2;
          }), t2.EaseInOutCubic = t2.CreateReversibleEasingFunction(function(t3, e2, n2, i2) {
            return n2 -= e2, (t3 /= i2 / 2) < 1 ? n2 / 2 * t3 * t3 * t3 + e2 : n2 / 2 * ((t3 -= 2) * t3 * t3 + 2) + e2;
          }), We([N({ message: "Alias for incorrect spelling used in older versions, will be removed in v0.25.0", alternateMethod: "CreateReversibleEasingFunction" })], t2, "CreateReversableEasingFunction", null), t2;
        }(), qe = function() {
          function t2() {
            this._actors = [], this._queues = [], null !== arguments && (this._actors = Array.prototype.slice.call(arguments, 0), this._queues = this._actors.map(function(t3) {
              return t3.actionQueue;
            }));
          }
          return t2.prototype.clearActions = function() {
            for (var t3 = this._queues.length, e2 = 0; e2 < t3; e2++)
              this._queues[e2].clearActions();
          }, t2.prototype.addActorToContext = function(t3) {
            this._actors.push(t3), this._queues.push(t3.actionQueue);
          }, t2.prototype.removeActorFromContext = function(t3) {
            var e2 = this._actors.indexOf(t3);
            e2 > -1 && (this._actors.splice(e2, 1), this._queues.splice(e2, 1));
          }, t2.prototype.easeTo = function(t3, e2, n2, i2) {
            void 0 === i2 && (i2 = Ne.Linear);
            for (var r2 = this._queues.length, o2 = 0; o2 < r2; o2++)
              this._queues[o2].add(new Ee(this._actors[o2], t3, e2, n2, i2));
            return this;
          }, t2.prototype.moveTo = function(t3, e2, n2) {
            for (var i2 = this._queues.length, r2 = 0; r2 < i2; r2++)
              this._queues[r2].add(new Se(this._actors[r2], t3, e2, n2));
            return this;
          }, t2.prototype.moveBy = function(t3, e2, n2) {
            for (var i2 = this._queues.length, r2 = 0; r2 < i2; r2++)
              this._queues[r2].add(new Ce(this._actors[r2], t3, e2, n2));
            return this;
          }, t2.prototype.rotateTo = function(t3, e2, n2) {
            for (var i2 = this._queues.length, r2 = 0; r2 < i2; r2++)
              this._queues[r2].add(new Be(this._actors[r2], t3, e2, n2));
            return this;
          }, t2.prototype.rotateBy = function(t3, e2, n2) {
            for (var i2 = this._queues.length, r2 = 0; r2 < i2; r2++)
              this._queues[r2].add(new Me(this._actors[r2], t3, e2, n2));
            return this;
          }, t2.prototype.scaleTo = function(t3, e2, n2, i2) {
            for (var r2 = this._queues.length, o2 = 0; o2 < r2; o2++)
              this._queues[o2].add(new De(this._actors[o2], t3, e2, n2, i2));
            return this;
          }, t2.prototype.scaleBy = function(t3, e2, n2) {
            for (var i2 = this._queues.length, r2 = 0; r2 < i2; r2++)
              this._queues[r2].add(new ke(this._actors[r2], t3, e2, n2));
            return this;
          }, t2.prototype.blink = function(t3, e2, n2) {
            void 0 === n2 && (n2 = 1);
            for (var i2 = this._queues.length, r2 = 0; r2 < i2; r2++)
              this._queues[r2].add(new je(this._actors[r2], t3, e2, n2));
            return this;
          }, t2.prototype.fade = function(t3, e2) {
            for (var n2 = this._queues.length, i2 = 0; i2 < n2; i2++)
              this._queues[i2].add(new Fe(this._actors[i2], t3, e2));
            return this;
          }, t2.prototype.delay = function(t3) {
            for (var e2 = this._queues.length, n2 = 0; n2 < e2; n2++)
              this._queues[n2].add(new Re(this._actors[n2], t3));
            return this;
          }, t2.prototype.die = function() {
            for (var t3 = this._queues.length, e2 = 0; e2 < t3; e2++)
              this._queues[e2].add(new Ie(this._actors[e2]));
            return this;
          }, t2.prototype.callMethod = function(t3) {
            for (var e2 = this._queues.length, n2 = 0; n2 < e2; n2++)
              this._queues[n2].add(new Le(this._actors[n2], t3));
            return this;
          }, t2.prototype.repeat = function(t3) {
            if (!t3)
              return this.repeatForever(), this;
            for (var e2 = this._queues.length, n2 = 0; n2 < e2; n2++)
              this._queues[n2].add(new ze(this._actors[n2], t3, this._actors[n2].actionQueue.getActions()));
            return this;
          }, t2.prototype.repeatForever = function() {
            for (var t3 = this._queues.length, e2 = 0; e2 < t3; e2++)
              this._queues[e2].add(new He(this._actors[e2], this._actors[e2].actionQueue.getActions()));
            return this;
          }, t2.prototype.follow = function(t3, e2) {
            for (var n2 = this._queues.length, i2 = 0; i2 < n2; i2++)
              void 0 === e2 ? this._queues[i2].add(new Oe(this._actors[i2], t3)) : this._queues[i2].add(new Oe(this._actors[i2], t3, e2));
            return this;
          }, t2.prototype.meet = function(t3, e2) {
            for (var n2 = this._queues.length, i2 = 0; i2 < n2; i2++)
              void 0 === e2 ? this._queues[i2].add(new Te(this._actors[i2], t3)) : this._queues[i2].add(new Te(this._actors[i2], t3, e2));
            return this;
          }, t2.prototype.asPromise = function() {
            var t3 = this, e2 = this._queues.map(function(e3, n2) {
              var i2 = new d();
              return e3.add(new Le(t3._actors[n2], function() {
                i2.resolve();
              })), i2;
            });
            return d.join.apply(this, e2);
          }, t2;
        }(), Ve = function() {
          function t2() {
          }
          return t2.Box = function(t3, e2, n2, i2) {
            return void 0 === n2 && (n2 = V.Half), void 0 === i2 && (i2 = V.Zero), new Zt({ points: new Kt(-t3 * n2.x, -e2 * n2.y, t3 - t3 * n2.x, e2 - e2 * n2.y).getPoints(), offset: i2 });
          }, t2.Polygon = function(t3, e2, n2) {
            return void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = V.Zero), new Zt({ points: t3, offset: n2, clockwiseWinding: e2 });
          }, t2.Circle = function(t3, e2) {
            return void 0 === e2 && (e2 = V.Zero), new Xt({ radius: t3, offset: e2 });
          }, t2.Edge = function(t3, e2) {
            return new Qt({ begin: t3, end: e2 });
          }, t2;
        }(), Ge = function() {
          function t2(t3) {
            var e2 = t3.actor, n2 = t3.collider;
            if (this.pos = new V(0, 0), this.oldPos = new V(0, 0), this.vel = new V(0, 0), this.oldVel = new V(0, 0), this.acc = new V(0, 0), this.oldAcc = V.Zero, this.torque = 0, this.motion = 10, this.oldRotation = 0, this.rotation = 0, this.scale = V.One, this.oldScale = V.One, this.sx = 0, this.sy = 0, this.rx = 0, this._geometryDirty = false, this._totalMtv = V.Zero, !e2 && !n2)
              throw new Error("An actor or collider are required to create a body");
            this.actor = e2, this.collider = !n2 && e2 ? this.useBoxCollider(e2.width, e2.height, e2.anchor) : n2;
          }
          return Object.defineProperty(t2.prototype, "id", { get: function() {
            return this.actor ? this.actor.id : -1;
          }, enumerable: false, configurable: true }), t2.prototype.clone = function() {
            return new t2({ actor: null, collider: this.collider.clone() });
          }, Object.defineProperty(t2.prototype, "active", { get: function() {
            return !!this.actor && !this.actor.isKilled();
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "center", { get: function() {
            return this.pos;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "collider", { get: function() {
            return this._collider;
          }, set: function(t3) {
            t3 && (this._collider = t3, this._collider.body = this, this._wireColliderEventsToActor());
          }, enumerable: false, configurable: true }), t2.prototype.addMtv = function(t3) {
            this._totalMtv.addEqual(t3);
          }, t2.prototype.applyMtv = function() {
            this.pos.addEqual(this._totalMtv), this._totalMtv.setTo(0, 0);
          }, t2.prototype.markCollisionShapeDirty = function() {
            this._geometryDirty = true;
          }, Object.defineProperty(t2.prototype, "isColliderShapeDirty", { get: function() {
            return this._geometryDirty;
          }, enumerable: false, configurable: true }), t2.prototype.captureOldTransform = function() {
            this.oldVel.setTo(this.vel.x, this.vel.y), this.oldPos.setTo(this.pos.x, this.pos.y), this.oldAcc.setTo(this.acc.x, this.acc.y), this.oldScale.setTo(this.scale.x, this.scale.y), this.oldRotation = this.rotation;
          }, t2.prototype.integrate = function(t3) {
            var e2 = t3 / 1e3, n2 = this.acc.clone();
            this.collider.type === ct.Active && n2.addEqual(st.acc), this.vel.addEqual(n2.scale(e2)), this.pos.addEqual(this.vel.scale(e2)).addEqual(n2.scale(0.5 * e2 * e2)), this.rx += this.torque * (1 / this.collider.inertia) * e2, this.rotation += this.rx * e2, this.scale.x += this.sx * t3 / 1e3, this.scale.y += this.sy * t3 / 1e3, this.scale.equals(this.oldScale) || (this._geometryDirty = true), this.collider.update(), this._geometryDirty = false;
          }, t2.prototype.useBoxCollider = function(t3, e2, n2, i2) {
            return void 0 === n2 && (n2 = V.Half), void 0 === i2 && (i2 = V.Zero), null == t3 && (t3 = this.actor ? this.actor.width : 0), null == e2 && (e2 = this.actor ? this.actor.height : 0), this.collider.shape = Ve.Box(t3, e2, n2, i2), this.collider;
          }, t2.prototype.usePolygonCollider = function(t3, e2) {
            return void 0 === e2 && (e2 = V.Zero), this.collider.shape = Ve.Polygon(t3, false, e2), this.collider;
          }, t2.prototype.useCircleCollider = function(t3, e2) {
            return void 0 === e2 && (e2 = V.Zero), this.collider.shape = Ve.Circle(t3, e2), this.collider;
          }, t2.prototype.useEdgeCollider = function(t3, e2) {
            return this.collider.shape = Ve.Edge(t3, e2), this.collider;
          }, t2.prototype._wireColliderEventsToActor = function() {
            var t3 = this;
            this.collider.clear(), this.collider.on("precollision", function(e2) {
              t3.actor && t3.actor.emit("precollision", new Mt(e2.target.body.actor, e2.other.body.actor, e2.side, e2.intersection));
            }), this.collider.on("postcollision", function(e2) {
              t3.actor && t3.actor.emit("postcollision", new Dt(e2.target.body.actor, e2.other.body.actor, e2.side, e2.intersection));
            }), this.collider.on("collisionstart", function(e2) {
              t3.actor && t3.actor.emit("collisionstart", new kt(e2.target.body.actor, e2.other.body.actor, e2.pair));
            }), this.collider.on("collisionend", function(e2) {
              t3.actor && t3.actor.emit("collisionend", new Rt(e2.target.body.actor, e2.other.body.actor));
            });
          }, t2;
        }(), Xe = function() {
          function t2() {
          }
          return t2.prototype.update = function(t3, e2) {
            var n2 = t3.eventDispatcher;
            if (t3.body.collider.type !== ct.PreventCollision && e2.currentScene && e2.currentScene.tileMaps)
              for (var i2 = 0; i2 < e2.currentScene.tileMaps.length; i2++)
                for (var r2 = e2.currentScene.tileMaps[i2], o2 = void 0, s2 = p.None, a2 = 2; (o2 = r2.collides(t3)) && !(a2-- < 0); )
                  s2 = Kt.getSideFromIntersection(o2), n2.emit("precollision", new Mt(t3, null, s2, o2)), t3.body.collider.type === ct.Active && (t3.pos.y += o2.y, t3.pos.x += o2.x, n2.emit("postcollision", new Dt(t3, null, s2, o2)));
          }, t2;
        }(), Qe = function() {
          function t2() {
            this._topLeft = new V(0, 0), this._topRight = new V(0, 0), this._bottomLeft = new V(0, 0), this._bottomRight = new V(0, 0);
          }
          return t2.prototype.isSpriteOffScreen = function(t3, e2) {
            var n2 = t3.currentDrawing.drawWidth, i2 = t3.currentDrawing.drawHeight, r2 = t3.rotation, o2 = t3.center, s2 = t3.getWorldPos();
            this._topLeft.x = s2.x - n2 / 2, this._topLeft.y = s2.y - i2 / 2, this._topLeft = this._topLeft.rotate(r2, o2), this._topRight.x = s2.x + n2 / 2, this._topRight.y = s2.y - i2 / 2, this._topRight = this._topRight.rotate(r2, o2), this._bottomLeft.x = s2.x - n2 / 2, this._bottomLeft.y = s2.y + i2 / 2, this._bottomLeft = this._bottomLeft.rotate(r2, o2), this._bottomRight.x = s2.x + n2 / 2, this._bottomRight.y = s2.y + i2 / 2, this._bottomRight = this._bottomRight.rotate(r2, o2);
            var a2 = e2.worldToScreenCoordinates(this._topLeft), c2 = e2.worldToScreenCoordinates(this._topRight), h2 = e2.worldToScreenCoordinates(this._bottomLeft), u2 = e2.worldToScreenCoordinates(this._bottomRight);
            this._xCoords = [], this._yCoords = [], this._xCoords.push(a2.x, c2.x, h2.x, u2.x), this._yCoords.push(a2.y, c2.y, h2.y, u2.y), this._xMin = Math.min.apply(null, this._xCoords), this._yMin = Math.min.apply(null, this._yCoords), this._xMax = Math.max.apply(null, this._xCoords), this._yMax = Math.max.apply(null, this._yCoords);
            var l2 = e2.screenToWorldCoordinates(new V(this._xMin, this._yMin)), p2 = e2.screenToWorldCoordinates(new V(this._xMax, this._yMax));
            this._xMinWorld = l2.x, this._yMinWorld = l2.y, this._xMaxWorld = p2.x, this._yMaxWorld = p2.y;
            var d2 = [new V(this._xMin, this._yMin), new V(this._xMax, this._yMin), new V(this._xMin, this._yMax), new V(this._xMax, this._yMax)];
            if (d2[0].x < 0 && d2[1].x > e2.canvas.clientWidth && (d2[0].y > 0 || d2[2].y < e2.canvas.clientHeight))
              return false;
            if (d2[0].y < 0 && d2[2].y > e2.canvas.clientHeight && (d2[1].x > 0 || d2[0].x < e2.canvas.clientWidth))
              return false;
            for (var f2 = 0; f2 < d2.length; f2++)
              if (d2[f2].x > 0 && d2[f2].y > 0 && d2[f2].x < e2.canvas.clientWidth && d2[f2].y < e2.canvas.clientHeight)
                return false;
            return true;
          }, t2.prototype.debugDraw = function(t3) {
            t3.beginPath(), t3.strokeStyle = et.White.toString(), t3.rect(this._xMinWorld, this._yMinWorld, this._xMaxWorld - this._xMinWorld, this._yMaxWorld - this._yMinWorld), t3.stroke(), t3.fillStyle = et.Red.toString(), t3.beginPath(), t3.arc(this._topLeft.x, this._topLeft.y, 5, 0, 2 * Math.PI), t3.closePath(), t3.fill(), t3.fillStyle = et.Green.toString(), t3.beginPath(), t3.arc(this._topRight.x, this._topRight.y, 5, 0, 2 * Math.PI), t3.closePath(), t3.fill(), t3.fillStyle = et.Blue.toString(), t3.beginPath(), t3.arc(this._bottomLeft.x, this._bottomLeft.y, 5, 0, 2 * Math.PI), t3.closePath(), t3.fill(), t3.fillStyle = et.Magenta.toString(), t3.beginPath(), t3.arc(this._bottomRight.x, this._bottomRight.y, 5, 0, 2 * Math.PI), t3.closePath(), t3.fill();
          }, t2;
        }(), Ze = function() {
          function t2() {
            this.cullingBox = new Qe();
          }
          return t2.prototype.update = function(t3, e2) {
            var n2 = t3.eventDispatcher, i2 = true;
            null != t3.currentDrawing && (i2 = this.cullingBox.isSpriteOffScreen(t3, e2));
            var r2 = false;
            e2 && e2.currentScene && e2.currentScene.camera && e2.currentScene.camera.viewport && (r2 = !e2.currentScene.camera.viewport.intersect(t3.body.collider.bounds)), t3.isOffScreen ? r2 && i2 || (n2.emit("enterviewport", new zt(t3)), t3.isOffScreen = false) : r2 && i2 && (n2.emit("exitviewport", new Lt(t3)), t3.isOffScreen = true);
          }, t2;
        }(), Ke = function() {
          function t2() {
          }
          return t2.prototype.update = function(t3, e2) {
            t3.enableCapturePointer && (t3.isKilled() || e2.input.pointers.checkAndUpdateActorUnderPointer(t3));
          }, t2;
        }();
        function Ye(t2, e2, n2, i2, r2, o2, s2, a2) {
          void 0 === e2 && (e2 = et.Red), void 0 === s2 && (s2 = 1), void 0 === a2 && (a2 = "butt"), t2.beginPath(), t2.lineWidth = s2, t2.lineCap = a2, t2.strokeStyle = e2.toString(), t2.moveTo(n2, i2), t2.lineTo(r2, o2), t2.closePath(), t2.stroke();
        }
        function Je(t2, e2, n2) {
          void 0 === e2 && (e2 = et.Red), t2.beginPath(), t2.strokeStyle = e2.toString(), t2.arc(n2.x, n2.y, 5, 0, 2 * Math.PI), t2.closePath(), t2.stroke();
        }
        function $e(t2, e2, n2, i2, r2) {
          void 0 === r2 && (r2 = 1);
          var o2 = e2 ? e2.toString() : "blue", s2 = i2.scale(r2);
          t2.beginPath(), t2.strokeStyle = o2, t2.moveTo(n2.x, n2.y), t2.lineTo(n2.x + s2.x, n2.y + s2.y), t2.closePath(), t2.stroke();
        }
        function tn(t2, e2, n2, i2, r2, o2, s2, a2) {
          var c2;
          if (void 0 === o2 && (o2 = 5), void 0 === s2 && (s2 = et.White), void 0 === a2 && (a2 = null), "number" == typeof o2)
            c2 = { tl: o2, tr: o2, br: o2, bl: o2 };
          else {
            var h2 = { tl: 0, tr: 0, br: 0, bl: 0 };
            for (var u2 in h2)
              if (h2.hasOwnProperty(u2)) {
                var l2 = u2;
                c2[l2] = o2[l2] || h2[l2];
              }
          }
          t2.beginPath(), t2.moveTo(e2 + c2.tl, n2), t2.lineTo(e2 + i2 - c2.tr, n2), t2.quadraticCurveTo(e2 + i2, n2, e2 + i2, n2 + c2.tr), t2.lineTo(e2 + i2, n2 + r2 - c2.br), t2.quadraticCurveTo(e2 + i2, n2 + r2, e2 + i2 - c2.br, n2 + r2), t2.lineTo(e2 + c2.bl, n2 + r2), t2.quadraticCurveTo(e2, n2 + r2, e2, n2 + r2 - c2.bl), t2.lineTo(e2, n2 + c2.tl), t2.quadraticCurveTo(e2, n2, e2 + c2.tl, n2), t2.closePath(), a2 && (t2.fillStyle = a2.toString(), t2.fill()), s2 && (t2.strokeStyle = s2.toString(), t2.stroke());
        }
        function en(t2, e2, n2, i2, r2, o2) {
          void 0 === r2 && (r2 = et.White), void 0 === o2 && (o2 = null), t2.beginPath(), t2.arc(e2, n2, i2, 0, 2 * Math.PI), t2.closePath(), o2 && (t2.fillStyle = o2.toString(), t2.fill()), r2 && (t2.strokeStyle = r2.toString(), t2.stroke());
        }
        var nn = function() {
          function t2(t3, e2, n2) {
            this._name = t3, this._category = e2, this._mask = n2;
          }
          return Object.defineProperty(t2.prototype, "name", { get: function() {
            return this._name;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "category", { get: function() {
            return this._category;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "mask", { get: function() {
            return this._mask;
          }, enumerable: false, configurable: true }), t2.prototype.canCollide = function(t3) {
            return 0 != (this.category & t3.mask) && 0 != (t3.category & this.mask);
          }, t2.All = new t2("Collide with all groups", -1, -1), t2;
        }(), rn = function() {
          function t2(e2, n2) {
            this.colliderA = e2, this.colliderB = n2, this.id = null, this.collision = null, this.id = t2.calculatePairHash(e2, n2);
          }
          return t2.canCollide = function(t3, e2) {
            return !!t3.group.canCollide(e2.group) && ((t3.type !== ct.Fixed || e2.type !== ct.Fixed) && (e2.type !== ct.PreventCollision && t3.type !== ct.PreventCollision && !(!t3.active || !e2.active)));
          }, Object.defineProperty(t2.prototype, "canCollide", { get: function() {
            var e2 = this.colliderA, n2 = this.colliderB;
            return t2.canCollide(e2, n2);
          }, enumerable: false, configurable: true }), t2.prototype.collide = function() {
            this.collision = this.colliderA.collide(this.colliderB);
          }, t2.prototype.resolve = function(t3) {
            this.collision && this.collision.resolve(t3);
          }, t2.calculatePairHash = function(t3, e2) {
            return t3.id < e2.id ? "#" + t3.id + "+" + e2.id : "#" + e2.id + "+" + t3.id;
          }, t2.prototype.debugDraw = function(t3) {
            this.collision && (st.showContacts && Je(t3, et.Red, this.collision.point), st.showCollisionNormals && $e(t3, et.Cyan, this.collision.point, this.collision.normal, 30));
          }, t2;
        }();
        function on(t2) {
          return t2 instanceof sn;
        }
        var sn = function() {
          function t2(t3) {
            var e2 = t3.body, n2 = t3.type, i2 = t3.group, r2 = t3.shape, o2 = t3.offset, s2 = t3.useShapeInertia, a2 = void 0 === s2 || s2;
            this._events = new te(this), this.type = ct.PreventCollision, this.group = nn.All, this.mass = 1, this.inertia = 1e3, this.friction = 0.99, this.bounciness = 0.2, e2 && e2.collider && !r2 ? this._shape = e2.collider.shape : (this._shape = r2, this.body = e2), this.useShapeInertia = a2, this._shape.collider = this, this.type = n2 || this.type, this.group = i2 || this.group, this.offset = o2 || V.Zero;
          }
          return t2.prototype.clone = function() {
            return new t2({ body: null, type: this.type, shape: this._shape.clone(), group: this.group, offset: this.offset });
          }, Object.defineProperty(t2.prototype, "id", { get: function() {
            return this.body ? this.body.id : -1;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "shape", { get: function() {
            return this._shape;
          }, set: function(t3) {
            this._shape = t3, this._shape.collider = this, this.useShapeInertia && (this.inertia = isNaN(this._shape.inertia) ? this.inertia : this._shape.inertia);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "center", { get: function() {
            return this.bounds.center;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "active", { get: function() {
            return this.body.active;
          }, enumerable: false, configurable: true }), t2.prototype.collide = function(t3) {
            return this.shape.collide(t3.shape);
          }, t2.prototype.getClosestLineBetween = function(t3) {
            return this.shape.getClosestLineBetween(t3.shape);
          }, Object.defineProperty(t2.prototype, "offset", { get: function() {
            return this.shape.offset.clone();
          }, set: function(t3) {
            this.shape.offset = t3.clone();
          }, enumerable: false, configurable: true }), t2.prototype.touching = function(t3) {
            var e2 = new rn(this, t3);
            return e2.collide(), !!e2.collision;
          }, Object.defineProperty(t2.prototype, "bounds", { get: function() {
            return this.shape ? this.shape.bounds : this.body ? new Kt().translate(this.body.pos) : new Kt();
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "localBounds", { get: function() {
            return this.shape ? this.shape.localBounds : new Kt();
          }, enumerable: false, configurable: true }), t2.prototype.update = function() {
            this.shape && this.shape.recalc();
          }, t2.prototype.emit = function(t3, e2) {
            this._events.emit(t3, e2);
          }, t2.prototype.on = function(t3, e2) {
            this._events.on(t3, e2);
          }, t2.prototype.off = function(t3, e2) {
            this._events.off(t3, e2);
          }, t2.prototype.once = function(t3, e2) {
            this._events.once(t3, e2);
          }, t2.prototype.clear = function() {
            this._events.clear();
          }, t2.prototype.debugDraw = function(t3) {
            st.showMotionVectors && ($e(t3, et.Yellow, this.body.pos, this.body.acc.add(st.acc)), $e(t3, et.Red, this.body.pos, this.body.vel), Je(t3, et.Red, this.body.pos)), st.showBounds && this.bounds.debugDraw(t3, et.Yellow), st.showArea && this.shape.debugDraw(t3, et.Green);
          }, t2;
        }(), an = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }();
        var cn = function() {
          function t2() {
          }
          return t2.prototype.clone = function() {
            var t3, e2 = new this.constructor();
            for (var n2 in this)
              if (this.hasOwnProperty(n2)) {
                var i2 = this[n2];
                (null == (t3 = i2) ? void 0 : t3.clone) && "owner" !== n2 && "clone" !== n2 ? e2[n2] = i2.clone() : e2[n2] = i2;
              }
            return e2;
          }, t2;
        }(), hn = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this) || this;
            return i2.type = e3, i2.value = n2, i2;
          }
          return an(e2, t2), e2;
        }(cn), un = function() {
          function t2() {
            this.observers = [];
          }
          return t2.prototype.register = function(t3) {
            this.observers.push(t3);
          }, t2.prototype.unregister = function(t3) {
            var e2 = this.observers.indexOf(t3);
            -1 !== e2 && this.observers.splice(e2, 1);
          }, t2.prototype.notifyAll = function(t3) {
            this.observers.forEach(function(e2) {
              return e2.notify(t3);
            });
          }, t2;
        }(), ln = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), pn = function(t2) {
          this.data = t2, this.type = "Component Added";
        };
        function dn(t2) {
          return !!t2 && "Component Added" === t2.type;
        }
        var fn = function(t2) {
          this.data = t2, this.type = "Component Removed";
        };
        function yn(t2) {
          return !!t2 && "Component Removed" === t2.type;
        }
        var gn = function(t2) {
          function e2() {
            var n2 = null !== t2 && t2.apply(this, arguments) || this;
            return n2.id = e2._ID++, n2.active = true, n2._componentsToRemove = [], n2._typesMemo = [], n2._dirty = true, n2._handleChanges = { defineProperty: function(t3, e3, i2) {
              return t3[e3] = i2.value, n2.changes.notifyAll(new pn({ component: i2.value, entity: n2 })), true;
            }, deleteProperty: function(t3, e3) {
              return e3 in t3 && (n2.changes.notifyAll(new fn({ component: t3[e3], entity: n2 })), delete t3[e3], true);
            } }, n2.components = new Proxy({}, n2._handleChanges), n2.changes = new un(), n2._isInitialized = false, n2;
          }
          return ln(e2, t2), e2.prototype.kill = function() {
            this.active = false;
          }, e2.prototype.isKilled = function() {
            return !this.active;
          }, Object.defineProperty(e2.prototype, "types", { get: function() {
            return this._dirty ? this._typesMemo = Object.keys(this.components) : this._typesMemo;
          }, enumerable: false, configurable: true }), e2.prototype.clone = function() {
            for (var t3 = new e2(), n2 = 0, i2 = this.types; n2 < i2.length; n2++) {
              var r2 = i2[n2];
              t3.addComponent(this.components[r2].clone());
            }
            return t3;
          }, e2.prototype.addComponent = function(t3, n2) {
            if (void 0 === n2 && (n2 = false), t3 instanceof e2)
              for (var i2 in t3.components)
                this.addComponent(t3.components[i2].clone());
            else {
              if (this.components[t3.type] && !n2)
                return this;
              if (this.components[t3.type] && n2 && this.removeComponent(t3), t3.dependencies && t3.dependencies.length)
                for (var r2 = 0, o2 = t3.dependencies; r2 < o2.length; r2++) {
                  var s2 = o2[r2];
                  this.addComponent(new s2()), this._dirty = true;
                }
              t3.owner = this, this.components[t3.type] = t3, t3.onAdd && (this._dirty = true, t3.onAdd(this));
            }
            return this;
          }, e2.prototype.removeComponent = function(t3, e3) {
            return void 0 === e3 && (e3 = false), e3 ? "string" == typeof t3 ? this._removeComponentByType(t3) : t3 instanceof cn && this._removeComponentByType(t3.type) : this._componentsToRemove.push(t3), this;
          }, e2.prototype._removeComponentByType = function(t3) {
            this.components[t3] && (this.components[t3].owner = null, this.components[t3].onRemove && this.components[t3].onRemove(this), delete this.components[t3], this._dirty = true);
          }, e2.prototype.processRemoval = function() {
            for (var t3 = 0, e3 = this._componentsToRemove; t3 < e3.length; t3++) {
              var n2 = e3[t3], i2 = "string" == typeof n2 ? n2 : n2.type;
              this._removeComponentByType(i2);
            }
            this._componentsToRemove.length = 0;
          }, e2.prototype.has = function(t3) {
            return !!this.components[t3];
          }, Object.defineProperty(e2.prototype, "isInitialized", { get: function() {
            return this._isInitialized;
          }, enumerable: false, configurable: true }), e2.prototype._initialize = function(e3) {
            this.isInitialized || (this.onInitialize(e3), t2.prototype.emit.call(this, "initialize", new jt(e3, this)), this._isInitialized = true);
          }, e2.prototype._preupdate = function(t3, e3) {
            this.emit("preupdate", new mt(t3, e3, this)), this.onPreUpdate(t3, e3);
          }, e2.prototype._postupdate = function(t3, e3) {
            this.emit("postupdate", new bt(t3, e3, this)), this.onPostUpdate(t3, e3);
          }, e2.prototype.onInitialize = function(t3) {
          }, e2.prototype.onPreUpdate = function(t3, e3) {
          }, e2.prototype.onPostUpdate = function(t3, e3) {
          }, e2._ID = 0, e2;
        }(ee), _n = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), vn = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        };
        function mn(t2) {
          return t2 instanceof bn;
        }
        var bn = function(t2) {
          function e2(e3, n2, i2, r2, o2) {
            return t2.call(this, e3, n2, i2, r2, o2) || this;
          }
          return _n(e2, t2), e2;
        }(fe(function(t2) {
          function e2(n2, i2, r2, o2, s2) {
            var a2 = t2.call(this) || this;
            a2.id = e2.maxId++, a2._height = 0, a2._width = 0, a2.isOffScreen = false, a2.visible = true, a2.opacity = 1, a2.previousOpacity = 1, a2.logger = R.getInstance(), a2.scene = null, a2.parent = null, a2.children = [], a2.frames = {}, a2.currentDrawing = null, a2._draggable = false, a2._dragging = false, a2._pointerDragStartHandler = function() {
              a2._dragging = true;
            }, a2._pointerDragEndHandler = function() {
              a2._dragging = false;
            }, a2._pointerDragMoveHandler = function(t3) {
              a2._dragging && (a2.pos = t3.pointer.lastWorldPos);
            }, a2._pointerDragLeaveHandler = function(t3) {
              a2._dragging && (a2.pos = t3.pointer.lastWorldPos);
            }, a2.traits = [], a2.enableCapturePointer = false, a2.capturePointer = { captureMoveEvents: false, captureDragEvents: false }, a2._zIndex = 0, a2._isKilled = false, a2._capturePointerEvents = ["pointerup", "pointerdown", "pointermove", "pointerenter", "pointerleave", "pointerdragstart", "pointerdragend", "pointerdragmove", "pointerdragenter", "pointerdragleave"], a2._captureMoveEvents = ["pointermove", "pointerenter", "pointerleave", "pointerdragmove", "pointerdragenter", "pointerdragleave"], a2._captureDragEvents = ["pointerdragstart", "pointerdragend", "pointerdragmove", "pointerdragenter", "pointerdragleave"], a2._initDefaults();
            var c2 = true, h2 = ct.Passive;
            if (n2 && "object" == typeof n2) {
              var u2 = n2;
              u2.pos ? (n2 = u2.pos ? u2.pos.x : 0, i2 = u2.pos ? u2.pos.y : 0) : (n2 = u2.x || 0, i2 = u2.y || 0), r2 = u2.width, o2 = u2.height, u2.body && (c2 = false, a2.body = u2.body), u2.anchor && (a2.anchor = u2.anchor), u2.collisionType && (h2 = u2.collisionType);
            }
            return a2._width = r2 || 0, a2._height = o2 || 0, c2 && (a2.body = new Ge({ collider: new sn({ type: h2, shape: Ve.Box(a2._width, a2._height, a2.anchor) }) })), a2.pos.x = n2 || 0, a2.pos.y = i2 || 0, s2 && (a2.color = s2, a2.opacity = s2.a), a2.traits.push(new Xe()), a2.traits.push(new Ze()), a2.traits.push(new Ke()), a2.actionQueue = new Ue(a2), a2.actions = new qe(a2), a2;
          }
          return _n(e2, t2), Object.defineProperty(e2.prototype, "body", { get: function() {
            return this._body;
          }, set: function(t3) {
            this._body = t3, this._body.actor = this;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "pos", { get: function() {
            return this.body.pos;
          }, set: function(t3) {
            this.body.pos.setTo(t3.x, t3.y);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "oldPos", { get: function() {
            return this.body.oldPos;
          }, set: function(t3) {
            this.body.oldPos.setTo(t3.x, t3.y);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "vel", { get: function() {
            return this.body.vel;
          }, set: function(t3) {
            this.body.vel.setTo(t3.x, t3.y);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "oldVel", { get: function() {
            return this.body.oldVel;
          }, set: function(t3) {
            this.body.oldVel.setTo(t3.x, t3.y);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "acc", { get: function() {
            return this.body.acc;
          }, set: function(t3) {
            this.body.acc.setTo(t3.x, t3.y);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "oldAcc", { get: function() {
            return this.body.oldAcc;
          }, set: function(t3) {
            this.body.oldAcc.setTo(t3.x, t3.y);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rotation", { get: function() {
            return this.body.rotation;
          }, set: function(t3) {
            this.body.rotation = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rx", { get: function() {
            return this.body.rx;
          }, set: function(t3) {
            this.body.rx = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "scale", { get: function() {
            return this.body.scale;
          }, set: function(t3) {
            this.body.scale = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "oldScale", { get: function() {
            return this.body.oldScale;
          }, set: function(t3) {
            this.body.oldScale = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sx", { get: function() {
            return this.body.sx;
          }, set: function(t3) {
            this.body.sx = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sy", { get: function() {
            return this.body.sy;
          }, set: function(t3) {
            this.body.sy = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "draggable", { get: function() {
            return this._draggable;
          }, set: function(t3) {
            t3 && (t3 && !this._draggable ? (this.on("pointerdragstart", this._pointerDragStartHandler), this.on("pointerdragend", this._pointerDragEndHandler), this.on("pointerdragmove", this._pointerDragMoveHandler), this.on("pointerdragleave", this._pointerDragLeaveHandler)) : !t3 && this._draggable && (this.off("pointerdragstart", this._pointerDragStartHandler), this.off("pointerdragend", this._pointerDragEndHandler), this.off("pointerdragmove", this._pointerDragMoveHandler), this.off("pointerdragleave", this._pointerDragLeaveHandler)), this._draggable = t3);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "color", { get: function() {
            return this._color;
          }, set: function(t3) {
            this._color = t3.clone();
          }, enumerable: false, configurable: true }), e2.prototype.onInitialize = function(t3) {
          }, e2.prototype._initialize = function(e3) {
            t2.prototype._initialize.call(this, e3);
            for (var n2 = 0, i2 = this.children; n2 < i2.length; n2++) {
              i2[n2]._initialize(e3);
            }
          }, e2.prototype._initDefaults = function() {
            this.anchor = bn.defaults.anchor.clone();
          }, e2.prototype._checkForPointerOptIn = function(t3) {
            if (t3) {
              var e3 = t3.toLowerCase();
              -1 !== this._capturePointerEvents.indexOf(e3) && (this.enableCapturePointer = true, -1 !== this._captureMoveEvents.indexOf(e3) && (this.capturePointer.captureMoveEvents = true), -1 !== this._captureDragEvents.indexOf(e3) && (this.capturePointer.captureDragEvents = true));
            }
          }, e2.prototype.on = function(e3, n2) {
            this._checkForPointerOptIn(e3), t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.once = function(e3, n2) {
            this._checkForPointerOptIn(e3), t2.prototype.once.call(this, e3, n2);
          }, e2.prototype.off = function(e3, n2) {
            t2.prototype.off.call(this, e3, n2);
          }, e2.prototype._prekill = function(e3) {
            t2.prototype.emit.call(this, "prekill", new lt(this)), this.onPreKill(e3);
          }, e2.prototype.onPreKill = function(t3) {
          }, e2.prototype._postkill = function(e3) {
            t2.prototype.emit.call(this, "postkill", new pt(this)), this.onPostKill(e3);
          }, e2.prototype.onPostKill = function(t3) {
          }, e2.prototype.kill = function() {
            this.scene ? (this._prekill(this.scene), this.emit("kill", new ut(this)), this._isKilled = true, this.scene.remove(this), this._postkill(this.scene)) : this.logger.warn("Cannot kill actor, it was never added to the Scene");
          }, e2.prototype.unkill = function() {
            this._isKilled = false;
          }, e2.prototype.isKilled = function() {
            return this._isKilled;
          }, e2.prototype.add = function(t3) {
            t3.body.collider.type = ct.PreventCollision, S(t3, this.children) && (t3.parent = this);
          }, e2.prototype.remove = function(t3) {
            C(t3, this.children) && (t3.parent = null);
          }, e2.prototype.setDrawing = function(t3) {
            t3 = t3.toString(), this.currentDrawing !== this.frames[t3] && (null != this.frames[t3] ? (this.frames[t3].reset(), this.currentDrawing = this.frames[t3]) : R.getInstance().error("the specified drawing key " + t3 + " does not exist"));
          }, e2.prototype.addDrawing = function() {
            2 === arguments.length ? (this.frames[arguments[0]] = arguments[1], this.currentDrawing || (this.currentDrawing = arguments[1])) : (arguments[0] instanceof ve && this.addDrawing("default", arguments[0]), arguments[0] instanceof be && this.addDrawing("default", arguments[0].asSprite()));
          }, Object.defineProperty(e2.prototype, "z", { get: function() {
            return this.getZIndex();
          }, set: function(t3) {
            this.setZIndex(t3);
          }, enumerable: false, configurable: true }), e2.prototype.getZIndex = function() {
            return this._zIndex;
          }, e2.prototype.setZIndex = function(t3) {
            this.scene.cleanupDrawTree(this), this._zIndex = t3, this.scene.updateDrawTree(this);
          }, Object.defineProperty(e2.prototype, "center", { get: function() {
            return new V(this.pos.x + this.width / 2 - this.anchor.x * this.width, this.pos.y + this.height / 2 - this.anchor.y * this.height);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "width", { get: function() {
            return this._width * this.getGlobalScale().x;
          }, set: function(t3) {
            this._width = t3 / this.scale.x, this.body.collider.shape = Ve.Box(this._width, this._height, this.anchor), this.body.markCollisionShapeDirty();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "height", { get: function() {
            return this._height * this.getGlobalScale().y;
          }, set: function(t3) {
            this._height = t3 / this.scale.y, this.body.collider.shape = Ve.Box(this._width, this._height, this.anchor), this.body.markCollisionShapeDirty();
          }, enumerable: false, configurable: true }), e2.prototype.getWorldRotation = function() {
            return this.parent ? this.rotation + this.parent.getWorldRotation() : this.rotation;
          }, e2.prototype.getWorldPos = function() {
            if (!this.parent)
              return this.pos.clone();
            var t3 = [], e3 = this;
            for (t3.push(this); e3.parent; )
              e3 = e3.parent, t3.push(e3);
            var n2 = t3.reduceRight(function(t4, e4) {
              return e4.parent ? t4 + e4.pos.x * e4.getGlobalScale().x : t4 + e4.pos.x;
            }, 0), i2 = t3.reduceRight(function(t4, e4) {
              return e4.parent ? t4 + e4.pos.y * e4.getGlobalScale().y : t4 + e4.pos.y;
            }, 0), r2 = e3.getWorldPos(), o2 = this.getWorldRotation();
            return new V(n2, i2).rotate(o2, r2);
          }, e2.prototype.getGlobalScale = function() {
            if (!this.parent)
              return new V(this.scale.x, this.scale.y);
            var t3 = this.parent.getGlobalScale();
            return new V(this.scale.x * t3.x, this.scale.y * t3.y);
          }, e2.prototype.contains = function(t3, e3, n2) {
            void 0 === n2 && (n2 = false);
            var i2 = this.getWorldPos().sub(this.pos), r2 = this.body.collider.bounds.translate(i2).contains(new V(t3, e3));
            return n2 ? r2 || this.children.some(function(n3) {
              return n3.contains(t3, e3, true);
            }) : r2;
          }, e2.prototype.within = function(t3, e3) {
            return this.body.collider.shape.getClosestLineBetween(t3.body.collider.shape).getLength() <= e3;
          }, e2.prototype.update = function(t3, e3) {
            this._initialize(t3), this._preupdate(t3, e3);
            var n2 = this.currentDrawing;
            n2 && n2 instanceof Pe && n2.tick(e3, t3.stats.currFrame.id), this.actionQueue.update(e3), this.color && (this.color.a = this.opacity), 0 === this.opacity && (this.visible = false), this.body.captureOldTransform(), this.body.integrate(e3);
            for (var i2 = 0, r2 = this.traits; i2 < r2.length; i2++) {
              r2[i2].update(this, t3, e3);
            }
            for (var o2 = 0; o2 < this.children.length; o2++)
              this.children[o2].update(t3, e3);
            this._postupdate(t3, e3);
          }, e2.prototype.onPreUpdate = function(t3, e3) {
          }, e2.prototype.onPostUpdate = function(t3, e3) {
          }, e2.prototype._preupdate = function(t3, e3) {
            this.emit("preupdate", new mt(t3, e3, this)), this.onPreUpdate(t3, e3);
          }, e2.prototype._postupdate = function(t3, e3) {
            this.emit("postupdate", new mt(t3, e3, this)), this.onPostUpdate(t3, e3);
          }, e2.prototype.draw = function(t3, e3) {
            if (t3.save(), t3.translate(this.pos.x, this.pos.y), t3.rotate(this.rotation), t3.scale(this.scale.x, this.scale.y), t3.save(), t3.translate(-this._width * this.anchor.x, -this._height * this.anchor.y), this._predraw(t3, e3), this.currentDrawing) {
              var n2 = this.currentDrawing, i2 = (this._width - n2.width * n2.scale.x) * this.anchor.x, r2 = (this._height - n2.height * n2.scale.y) * this.anchor.y;
              this.currentDrawing.draw({ ctx: t3, x: i2, y: r2, opacity: this.opacity });
            } else
              this.color && this.body && this.body.collider && this.body.collider.shape && this.body.collider.shape.draw(t3, this.color, new V(this.width * this.anchor.x, this.height * this.anchor.y));
            t3.restore();
            for (var o2 = 0; o2 < this.children.length; o2++)
              this.children[o2].visible && this.children[o2].draw(t3, e3);
            this._postdraw(t3, e3), t3.restore();
          }, e2.prototype.onPreDraw = function(t3, e3) {
          }, e2.prototype.onPostDraw = function(t3, e3) {
          }, e2.prototype._predraw = function(t3, e3) {
            this.emit("predraw", new yt(t3, e3, this)), this.onPreDraw(t3, e3);
          }, e2.prototype._postdraw = function(t3, e3) {
            this.emit("postdraw", new yt(t3, e3, this)), this.onPostDraw(t3, e3);
          }, e2.prototype.debugDraw = function(t3) {
            this.emit("predebugdraw", new _t(t3, this)), this.body.collider.debugDraw(t3);
            var e3 = this.body.collider.localBounds.translate(this.getWorldPos());
            e3.debugDraw(t3), t3.fillText("id: " + this.id, e3.left + 3, e3.top + 10), t3.fillStyle = et.Yellow.toString(), t3.beginPath(), t3.arc(this.getWorldPos().x, this.getWorldPos().y, 3, 0, 2 * Math.PI), t3.closePath(), t3.fill();
            for (var n2 = 0; n2 < this.traits.length; n2++)
              this.traits[n2] instanceof Ze && this.traits[n2].cullingBox.debugDraw(t3);
            t3.strokeStyle = et.Yellow.toString(), t3.beginPath();
            var i2 = Math.min(this.width, this.height);
            t3.arc(this.getWorldPos().x, this.getWorldPos().y, i2, 0, 2 * Math.PI), t3.closePath(), t3.stroke();
            var r2 = { "0 Pi": 0, "Pi/2": Math.PI / 2, Pi: Math.PI, "3/2 Pi": 3 * Math.PI / 2 }, o2 = t3.font;
            for (var s2 in r2)
              t3.fillStyle = et.Yellow.toString(), t3.font = "14px", t3.textAlign = "center", t3.fillText(s2, this.getWorldPos().x + Math.cos(r2[s2]) * (i2 + 10), this.getWorldPos().y + Math.sin(r2[s2]) * (i2 + 10));
            t3.font = o2;
            for (var a2 = 0; a2 < this.children.length; a2++)
              this.children[a2].debugDraw(t3);
            this.emit("postdebugdraw", new vt(t3, this));
          }, e2.prototype.getAncestors = function() {
            for (var t3, e3 = [this], n2 = this; t3 = n2.parent; )
              n2 = t3, e3.push(n2);
            return e3.reverse();
          }, e2.defaults = { anchor: V.Half }, e2.maxId = 0, vn([N({ message: "ex.Actor.sx will be removed in v0.25.0", alternateMethod: "Set width and height directly in constructor" })], e2.prototype, "sx", null), vn([N({ message: "ex.Actor.sy will be removed in v0.25.0", alternateMethod: "Set width and height directly in constructor" })], e2.prototype, "sy", null), e2;
        }(gn))), wn = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), xn = function(t2, e2, n2, i2) {
          var r2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(e2, n2) : i2;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s2 = Reflect.decorate(t2, e2, n2, i2);
          else
            for (var a2 = t2.length - 1; a2 >= 0; a2--)
              (r2 = t2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(e2, n2, s2) : r2(e2, n2)) || s2);
          return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
        }, Pn = function(t2) {
          function e2(e3, n2, i2, r2) {
            var o2 = this;
            return (o2 = "object" != typeof e3 ? t2.call(this, e3, n2, i2, r2) || this : t2.call(this, e3) || this).traits = [], o2.traits.push(new Ke()), o2.anchor.setTo(0, 0), o2.body.collider.type = ct.PreventCollision, o2.body.collider.shape = Ve.Box(o2.width, o2.height, o2.anchor), o2.enableCapturePointer = true, o2;
          }
          return wn(e2, t2), e2.prototype._initialize = function(e3) {
            this._engine = e3, t2.prototype._initialize.call(this, e3);
          }, e2.prototype.contains = function(e3, n2, i2) {
            if (void 0 === i2 && (i2 = true), i2)
              return t2.prototype.contains.call(this, e3, n2);
            var r2 = this._engine.worldToScreenCoordinates(new V(e3, n2));
            return t2.prototype.contains.call(this, r2.x, r2.y);
          }, e2;
        }(bn), An = function(t2) {
          function e2() {
            return null !== t2 && t2.apply(this, arguments) || this;
          }
          return wn(e2, t2), e2 = xn([N({ message: "Will be removed in v0.25.0", alternateMethod: "ScreenElement" })], e2);
        }(Pn), En = function() {
          function t2(e2, n2, i2, r2) {
            if (this.id = 0, this.interval = 10, this.repeats = false, this.maxNumberOfRepeats = -1, this._elapsedTime = 0, this._totalTimeAlive = 0, this._paused = false, this._numberOfTicks = 0, this.complete = false, this.scene = null, "function" != typeof e2) {
              var o2 = e2;
              e2 = o2.fcn, n2 = o2.interval, i2 = o2.repeats, r2 = o2.numberOfRepeats;
            }
            if (r2 && r2 >= 0 && (this.maxNumberOfRepeats = r2, !i2))
              throw new Error("repeats must be set to true if numberOfRepeats is set");
            this.id = t2.id++, this.interval = n2 || this.interval, this.repeats = i2 || this.repeats, this._callbacks = [], e2 && this.on(e2);
          }
          return t2.prototype.on = function(t3) {
            this._callbacks.push(t3);
          }, t2.prototype.off = function(t3) {
            var e2 = this._callbacks.indexOf(t3);
            this._callbacks.splice(e2, 1);
          }, t2.prototype.update = function(t3) {
            var e2 = this;
            this._paused || (this._totalTimeAlive += t3, this._elapsedTime += t3, this.maxNumberOfRepeats > -1 && this._numberOfTicks >= this.maxNumberOfRepeats && (this.complete = true), !this.complete && this._elapsedTime >= this.interval && (this._callbacks.forEach(function(t4) {
              t4.call(e2);
            }), this._numberOfTicks++, this.repeats ? this._elapsedTime = 0 : this.complete = true));
          }, t2.prototype.reset = function(t3, e2) {
            if (t3 && t3 >= 0 && (this.interval = t3), this.maxNumberOfRepeats && this.maxNumberOfRepeats >= 0 && (this.maxNumberOfRepeats = e2, !this.repeats))
              throw new Error("repeats must be set to true if numberOfRepeats is set");
            this.complete = false, this._elapsedTime = 0, this._numberOfTicks = 0;
          }, Object.defineProperty(t2.prototype, "timesRepeated", { get: function() {
            return this._numberOfTicks;
          }, enumerable: false, configurable: true }), t2.prototype.getTimeRunning = function() {
            return this._totalTimeAlive;
          }, t2.prototype.pause = function() {
            this._paused = true;
          }, t2.prototype.unpause = function() {
            this._paused = false;
          }, t2.prototype.cancel = function() {
            this.scene && this.scene.cancelTimer(this);
          }, t2.id = 0, t2;
        }(), Sn = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), Cn = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2) {
            return t2.call(this, e3, n2, i2, r2, o2, s2) || this;
          }
          return Sn(e2, t2), e2;
        }(fe(function(t2) {
          function e2(e3, n2, i2, r2, o2, s2) {
            var a2 = t2.call(this) || this;
            if (a2._collidingX = -1, a2._collidingY = -1, a2._onScreenXStart = 0, a2._onScreenXEnd = 9999, a2._onScreenYStart = 0, a2._onScreenYEnd = 9999, a2._spriteSheets = {}, a2.logger = R.getInstance(), a2.data = [], e3 && "object" == typeof e3) {
              var c2 = e3;
              e3 = c2.x, n2 = c2.y, i2 = c2.cellWidth, r2 = c2.cellHeight, o2 = c2.rows, s2 = c2.cols;
            }
            a2.x = e3, a2.y = n2, a2.cellWidth = i2, a2.cellHeight = r2, a2.rows = o2, a2.cols = s2, a2.data = new Array(o2 * s2);
            for (var h2 = function(t3) {
              for (var c3 = function(o3) {
                var c4;
                c4 = new Tn(t3 * i2 + e3, o3 * r2 + n2, i2, r2, t3 + o3 * s2), a2.data[t3 + o3 * s2] = c4;
              }, h3 = 0; h3 < o2; h3++)
                c3(h3);
            }, u2 = 0; u2 < s2; u2++)
              h2(u2);
            return a2;
          }
          return Sn(e2, t2), e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.registerSpriteSheet = function(t3, e3) {
            this._spriteSheets[t3] = e3;
          }, e2.prototype.collides = function(t3) {
            var e3 = t3.pos.x + t3.width, n2 = t3.pos.y + t3.height, i2 = t3.body.collider.bounds, r2 = [];
            if (t3.width <= 0 || t3.height <= 0)
              return null;
            for (var o2 = i2.left; o2 <= e3; o2 += Math.min(t3.width / 2, this.cellWidth / 2))
              for (var s2 = i2.top; s2 <= n2; s2 += Math.min(t3.height / 2, this.cellHeight / 2)) {
                var a2 = this.getCellByPoint(o2, s2);
                if (a2 && a2.solid) {
                  var c2 = i2.intersect(a2.bounds), h2 = t3.center.sub(a2.center);
                  c2 && c2.dot(h2) > 0 && r2.push(c2);
                }
              }
            return 0 === r2.length ? null : r2.reduce(function(t4, e4) {
              var n3 = t4.x, i3 = t4.y;
              return Math.abs(t4.x) < Math.abs(e4.x) && (n3 = e4.x), Math.abs(t4.y) < Math.abs(e4.y) && (i3 = e4.y), new V(n3, i3);
            });
          }, e2.prototype.getCellByIndex = function(t3) {
            return this.data[t3];
          }, e2.prototype.getCell = function(t3, e3) {
            return t3 < 0 || e3 < 0 || t3 >= this.cols || e3 >= this.rows ? null : this.data[t3 + e3 * this.cols];
          }, e2.prototype.getCellByPoint = function(t3, e3) {
            t3 = Math.floor((t3 - this.x) / this.cellWidth), e3 = Math.floor((e3 - this.y) / this.cellHeight);
            var n2 = this.getCell(t3, e3);
            return t3 >= 0 && e3 >= 0 && t3 < this.cols && e3 < this.rows && n2 ? n2 : null;
          }, e2.prototype.onPreUpdate = function(t3, e3) {
          }, e2.prototype.onPostUpdate = function(t3, e3) {
          }, e2.prototype.update = function(t3, e3) {
            this.onPreUpdate(t3, e3), this.emit("preupdate", new mt(t3, e3, this));
            var n2 = t3.screenToWorldCoordinates(new V(0, 0)), i2 = t3.screenToWorldCoordinates(new V(t3.canvas.clientWidth, t3.canvas.clientHeight));
            this._onScreenXStart = Math.max(Math.floor((n2.x - this.x) / this.cellWidth) - 2, 0), this._onScreenYStart = Math.max(Math.floor((n2.y - this.y) / this.cellHeight) - 2, 0), this._onScreenXEnd = Math.max(Math.floor((i2.x - this.x) / this.cellWidth) + 2, 0), this._onScreenYEnd = Math.max(Math.floor((i2.y - this.y) / this.cellHeight) + 2, 0), this.onPostUpdate(t3, e3), this.emit("postupdate", new bt(t3, e3, this));
          }, e2.prototype.draw = function(t3, e3) {
            this.emit("predraw", new yt(t3, e3, this)), t3.save(), t3.translate(this.x, this.y);
            for (var n2, i2, r2, o2 = this._onScreenXStart, s2 = Math.min(this._onScreenXEnd, this.cols), a2 = this._onScreenYStart, c2 = Math.min(this._onScreenYEnd, this.rows); o2 < s2; o2++) {
              for (; a2 < c2; a2++)
                for (i2 = 0, r2 = (n2 = this.getCell(o2, a2).sprites.filter(function(t4) {
                  return t4.spriteId > -1;
                })).length; i2 < r2; i2++) {
                  var h2 = this._spriteSheets[n2[i2].spriteSheetKey];
                  if (h2) {
                    var u2 = h2.getSprite(n2[i2].spriteId);
                    u2 ? u2.draw(t3, o2 * this.cellWidth, a2 * this.cellHeight) : this.logger.warn("Sprite does not exist for id", n2[i2].spriteId, "in sprite sheet", n2[i2].spriteSheetKey, u2, h2);
                  } else
                    this.logger.warn("Sprite sheet", n2[i2].spriteSheetKey, "does not exist", h2);
                }
              a2 = this._onScreenYStart;
            }
            t3.restore(), this.emit("postdraw", new gt(t3, e3, this));
          }, e2.prototype.debugDraw = function(t3) {
            var e3 = this.cols * this.cellWidth, n2 = this.rows * this.cellHeight;
            t3.save(), t3.strokeStyle = et.Red.toString();
            for (var i2 = 0; i2 < this.cols + 1; i2++)
              t3.beginPath(), t3.moveTo(this.x + i2 * this.cellWidth, this.y), t3.lineTo(this.x + i2 * this.cellWidth, this.y + n2), t3.stroke();
            for (var r2 = 0; r2 < this.rows + 1; r2++)
              t3.beginPath(), t3.moveTo(this.x, this.y + r2 * this.cellHeight), t3.lineTo(this.x + e3, this.y + r2 * this.cellHeight), t3.stroke();
            var o2 = et.Red;
            o2.a = 0.3, this.data.filter(function(t4) {
              return t4.solid;
            }).forEach(function(e4) {
              t3.fillStyle = o2.toString(), t3.fillRect(e4.x, e4.y, e4.width, e4.height);
            }), this._collidingY > -1 && this._collidingX > -1 && (t3.fillStyle = et.Cyan.toString(), t3.fillRect(this.x + this._collidingX * this.cellWidth, this.y + this._collidingY * this.cellHeight, this.cellWidth, this.cellHeight)), t3.restore();
          }, e2;
        }(ee))), On = function(t2, e2) {
          this.spriteSheetKey = t2, this.spriteId = e2;
        }, Tn = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2, a2) {
            return t2.call(this, e3, n2, i2, r2, o2, s2, a2) || this;
          }
          return Sn(e2, t2), e2;
        }(fe(function() {
          function t2(t3, e2, n2, i2, r2, o2, s2) {
            if (void 0 === o2 && (o2 = false), void 0 === s2 && (s2 = []), this.solid = false, this.sprites = [], t3 && "object" == typeof t3) {
              var a2 = t3;
              t3 = a2.x, e2 = a2.y, n2 = a2.width, i2 = a2.height, r2 = a2.index, o2 = a2.solid, s2 = a2.sprites;
            }
            this.x = t3, this.y = e2, this.width = n2, this.height = i2, this.index = r2, this.solid = o2, this.sprites = s2, this._bounds = new Kt(this.x, this.y, this.x + this.width, this.y + this.height);
          }
          return Object.defineProperty(t2.prototype, "bounds", { get: function() {
            return this._bounds;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "center", { get: function() {
            return new V(this.x + this.width / 2, this.y + this.height / 2);
          }, enumerable: false, configurable: true }), t2.prototype.pushSprite = function(t3) {
            this.sprites.push(t3);
          }, t2.prototype.removeSprite = function(t3) {
            var e2;
            (e2 = this.sprites.indexOf(t3)) > -1 && this.sprites.splice(e2, 1);
          }, t2.prototype.clearSprites = function() {
            this.sprites.length = 0;
          }, t2;
        }())), Bn = function() {
          function t2() {
          }
          return t2.create = function() {
            return this._INSTANCE || (window.AudioContext || window.webkitAudioContext) && (this._INSTANCE = new window.AudioContext()), this._INSTANCE;
          }, t2._INSTANCE = null, t2;
        }();
        var Mn, Dn = function() {
          function t2() {
          }
          return t2.unlock = function() {
            var e2 = new d();
            if (t2._unlocked || !Bn.create())
              return e2.resolve(true);
            var n2 = setTimeout(function() {
              R.getInstance().warn("Excalibur was unable to unlock the audio context, audio probably will not play in this browser."), e2.resolve();
            }, 200), i2 = Bn.create();
            return i2.resume().then(function() {
              var r2 = i2.createBuffer(1, 1, 22050), o2 = i2.createBufferSource(), s2 = false;
              o2.buffer = r2, o2.connect(i2.destination), o2.onended = function() {
                return s2 = true;
              }, o2.noteOn ? o2.noteOn(0) : o2.start(0), setTimeout(function() {
                !function(t3) {
                  return !!t3.playbackState;
                }(o2) ? (i2.currentTime > 0 || s2) && (t2._unlocked = true) : o2.playbackState !== o2.PLAYING_STATE && o2.playbackState !== o2.FINISHED_STATE || (t2._unlocked = true);
              }, 0), clearTimeout(n2), e2.state() === u.Pending && e2.resolve();
            }, function() {
              e2.state() === u.Pending && e2.reject(false);
            }), e2;
          }, t2.isUnlocked = function() {
            return this._unlocked;
          }, t2._unlocked = false, t2;
        }(), kn = n(58), Rn = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), jn = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2._resourceList = [], n2._index = 0, n2._playButtonShown = false, n2._resourceCount = 0, n2._numLoaded = 0, n2._progressCounts = {}, n2._totalCounts = {}, n2.logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAB2CAYAAABxhGI9AAAACXBIWXMAAAsSAAALEgHS3X78AAAKnUlEQVR42u3dP2wjSx0H8N8hJIonIRmJjsq0SBR+BQ1dcqKhe0lD77SvSwpKkJKGPulpktfRIMUdEqKIqV57rpAokM4dbSiyq7ONPTP7x39ifz7SFbnEnp3xer47O7uzH15fXwMA6OYHmgAABCoACFQAEKgAgEAFAIEKAAIVAAQqACBQAUCgAoBABQCBCgAIVAAQqAAgUAFAoAIAAhUABCoACFQAEKgAgECFLbmOiNeFf2PbAyz68Pr6qhUgbRwR92v+/zwiJrYHMEKFMmcN///UtgcQqFBk1PD/97U9Qx8VCFSgu4EmAIEKAAIVAAQqACBQ4Z25jojP8eX+0WtNAgIVaOY+Im5j+eKh24h41jQgUIEyZ7F5NaPU7wCBCiwYd/w9cOB+qAlgJ3KLLow0EV198803RWvJfvfddx+0lhEqHKu5JgAjVCBvlhmFzjQRXUekHz9+TP79y8uLRjNChXfvoePvAYEKxNtj1e42/O5JoIJABcrdRMRVLM+X3kTEpaaB988cKuzWg9EobTWdMx0Oly8uN4dqhAoARqgnaN3arHfqu7OyH8ItKLVB/P+CEfMTHyGPY3npx1m8zWGDEeoBfUk/xdti57dr/r1Wv2+6EPow3tZ5rRdS72s1neuF97xvWd+XTH0/V+UMttDWqbI/r2nrxfp+jv2uSjSO7S+OXy/A/3lN+9xX5T5HxEUPZZ0tfB71+w57eJ/HFu+z+jkv1u92YX9fbI/HhX3JA9rp5MPr66tWaG9UfUGbrHIzi7cLUyYFf/tpTady03EEeL8mUJ6i7MKYNvWNqr4Pe2jradXO60LrvPAz2PQ5RPX684ah8dxD+2zantnCgVipSVV+m/tgB9W2DDq2Sx/vM95wcHhZhWVJm8yrv58cSgfTdc70+++/X/r522+/tUKSEepBqo+om4ZLPerMjUwuNnQCtx1GWJtee1FwdD5uWd86xLs8UaVt2aNEO1/saZ/Z5rYMW4zq6v34rGV9Bg3q2eZ9SkeNm9qwyUh30OPIHYFKx5FG03C7znSOqYBq+qW/zpQ3anH037TNHluG6f0WPsPhHvab4QFty7ogOeuxDYcNy2/zu2214WNYWxmBurNO8bGn97pNBOO8xy/9uCorZZ4I2r4C7aJgO7ZV9iE49Dm6NvOWx+pWE9CUq3zbdTp9doz38TbXtzqH9RT5CyWe422OaZoZGeZCabrhPQY9HjwsjpTvCg4YtlE2+Ta/j2bzn8fqrDqgm+6yUHOmAvWUjAtGhbNYvsBknDnqH1Qhc7VmxHgeb/NbudA5j/UXlYwif2p6luhAc9teu1npiHKnDs8if6tCm7JLX3NKpgttXe9ruc9mHMd7a83iwdxF5vt8tutARaCeklRnNK9C8WnNF7geJQ4T4XG3JhSnVdilQrG+yOnrlVHfsEGYzhNBn7Lu6tS7+HJafJQ4EMiNlNqWXZ9WPvVgnVYHG5M1ByDXkT6leX2EgTqJtyt45yv7S2qO3sEZjZhDLXeR+YKdJ0Zdk8QocvH9N732KrNtq+FZ/zzIHABcJrYpd+Xv14lOd5ap76SgrduW/VTQ1qcQpqnbgu4ifZvUMNpd9XuoZmvCtPaQ2Y/BCHVLgbrJTeRPDdVf6pfMKDU2fOkHmVFFfXr3MsouLsnNvV5kRoe5+s431PeuoKPqWnaurY/ZPBEeqwceN4l96iwO6H7Mjq4y7VGPVNe10VaZMzVCPVWpI/Z6FZbcv5fMqGCU+dLfFGzj58jP8+bCdJCo7yzKTwdOF0bu9Ug7V4c+yz7FJfYeGoysUss0HssIdVZwYLDujMqlESoCdTtGsZtbHnJBeNdDSJSs0jTKdMJN1HNX54Wv7bvsU9NkVJVa13dX+/wuArV0X/l5RHyo/lnfF4G6p6DrS0kHdtXhy35TGErDPYZUn2WfWqDOo/lVqdMD2O/hKJhD7S/odukymq9s02QN4EEPR/zbaOumZc+r15zK1Zqznl9jsfiemTM1QmV3HUuTkedlg9HIQzRbUD93dfC+2tpj2fIHEH2+RqCCQH13gZq7hWXTNpVu19OB1fc9nQ0AKOKUb5lU0P1kDyOneoWk0lOZ9cIP0x7qu8+2BhCoR2wYu1+e7DmaXzBSsu5vaX1ne2zrpmUPTmxf7PM1Dm4y/vC7ny7Nif7+z/9ZmtM0Z3panPLtPmra9f16bcK0Dpbnwk43Vd/RHtu6zfNQTy1QBy3aqG2g9nVmxml+BOoJyT3NpWmn9xhfFnu4bvDa+44BXhqqfdf3uUF9+yz77AT31Yue2mjecYQ62NLfgkA9ghHqLNEhNem4H1c6vdyDxhf/bpz5m4coW/c39wi6VH2bPtHlcaV9cvXts+zxCe6rTeqc2ndL7uGd93QwM9bFcAzMoZZ7SgTBbWx+asui61h/iq1+RmjqdbnQXQ3T1DNQ63V/U9ucqm/pMzPb1rePsk/1iTOjgvatR4W3Lc8ULB78pELyrnAfeTcj1NU509/86mfJ33/8+Mf00a05UyPUEw7UVCeWG/WNEiExyHRMt5ltW30izUPk18ytt7lNfc8i//DvtvXto+ySA5BjljsLUF8lPkqMPEtW1JomDsiGBZ9Byb4NAvUITSN9GuwsIj6t6UTOqk7jJREkmzqli8xIs96udSO20sX0H1vW92IL9e1a9rgqVyf91gbPsTy9UD9n9lOkT8k+RfkFR5PMNqxOcdSf32PBvg3vilO+zdxE+okx9Wm0ph36XYsRZCpMF993GOk5qvqB3Dct6jvssb67KvuUNJ3frw92bhr8/STSF0JdRPMLpUCgnsgo9S76PZ246ZFk1wWvK5m3vVoYvW1Sz7nN91jfXbQ1ZQc7TW6HeaoOalypG/8/p/rP1aNAc6ZHzSnfdqPUPhdy2PQw6Nz9gSVhuhiqueUHR3uu7y7K3rdDX4u46ZrPbUa0IFBZ0seKQ3XQTRt2vm3W/a2DbNKys++rvm3ep6+y1x2UdP3bWU9lzra47U1GmlctX/sQ23t+aOlByLTh/4NAPaCRxtcdO5HLSJ/6vNtCwGx67VPmPbvWd1q9frKHtp4kAqRJ2HR9j762JfX3bZ//elPtj13PPDx1+D5tqk/Xi6NO8SHz7MmH19dXrdBNfVFP6T2PT1UHNit87/t4m5+aRH+nQBdvqyhZDKJLfZs8h7XPsqdV2ZOV+tanKB8aln0dyxdAXbV4j4gvt4oMOrbP6vbU73NW7TMlbdTnPrWpfqXfh9HKZ9vke7KuTeZRNtXRSe6+1FV//ce/ln5eXfsXgcqXzr6+9261M3moOoa7E6nvTZTfy7iNsmfb7kjfgXGsvxe0vihsEts9HTquPpt1q1vtahu2TqAiUAEEKj0zhwoARqgAu/OnX/442WH+9xc/Wvr58re/Tr7f41/+ZsRqhAoACFQAEKgAcHjMoQJskJsz/eqrr5Z+vvr7v5fmQFevAl5lztQIFQAQqAAgUAHgIJlDBdhgdQ41N2eKESoAIFABQKACwFEwhwoARqgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAEKgAgUAFAoAKAQAUAgQoACFQAEKgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAQqAAgUAFAoAKAQAUAlvwPcFDns1DsH4sAAAAASUVORK5CYII=", n2.logoWidth = 468, n2.logoHeight = 118, n2.loadingBarColor = et.White, n2.backgroundColor = "#176BAA", n2.suppressPlayButton = false, n2._playButtonStyles = kn.a.toString(), n2.playButtonText = "Play game", n2.startButtonFactory = function() {
              var t3 = document.createElement("button");
              return t3.id = "excalibur-play", t3.textContent = n2.playButtonText, t3.style.display = "none", t3;
            }, n2.getData = function() {
            }, n2.setData = function() {
            }, n2.processData = function() {
            }, n2.onprogress = function(t3) {
              R.getInstance().debug("[ex.Loader] Loading " + (100 * t3.loaded / t3.total).toFixed(0));
            }, n2.oncomplete = function() {
            }, n2.onerror = function() {
            }, e3 && n2.addResources(e3), n2;
          }
          return Rn(e2, t2), Object.defineProperty(e2.prototype, "_image", { get: function() {
            return this._imageElement || (this._imageElement = new Image(), this._imageElement.src = this.logo), this._imageElement;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "playButtonRootElement", { get: function() {
            return this._playButtonRootElement;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "playButtonElement", { get: function() {
            return this._playButtonElement;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "_playButton", { get: function() {
            return this._playButtonRootElement || (this._playButtonRootElement = document.createElement("div"), this._playButtonRootElement.id = "excalibur-play-root", this._playButtonRootElement.style.position = "absolute", document.body.appendChild(this._playButtonRootElement)), this._styleBlock || (this._styleBlock = document.createElement("style"), this._styleBlock.textContent = this._playButtonStyles, document.head.appendChild(this._styleBlock)), this._playButtonElement || (this._playButtonElement = this.startButtonFactory(), this._playButtonRootElement.appendChild(this._playButtonElement)), this._playButtonElement;
          }, enumerable: false, configurable: true }), e2.prototype.wireEngine = function(t3) {
            this._engine = t3;
          }, e2.prototype.addResource = function(t3) {
            var e3 = this._index++;
            this._resourceList.push(t3), this._progressCounts[e3] = 0, this._totalCounts[e3] = 1, this._resourceCount++;
          }, e2.prototype.addResources = function(t3) {
            for (var e3 = 0, n2 = t3.length; e3 < n2; e3++)
              this.addResource(t3[e3]);
          }, e2.prototype.isLoaded = function() {
            return this._numLoaded === this._resourceCount;
          }, e2.prototype.showPlayButton = function() {
            if (this.suppressPlayButton)
              return d.resolve();
            this._playButtonShown = true, this._playButton.style.display = "block";
            var t3 = new d();
            return this._playButton.addEventListener("click", function() {
              return t3.state() === u.Pending ? t3.resolve() : t3;
            }), this._playButton.addEventListener("touchend", function() {
              return t3.state() === u.Pending ? t3.resolve() : t3;
            }), this._playButton.addEventListener("pointerup", function() {
              return t3.state() === u.Pending ? t3.resolve() : t3;
            }), t3;
          }, e2.prototype.hidePlayButton = function() {
            this._playButtonShown = false, this._playButton.style.display = "none";
          }, e2.prototype.dispose = function() {
            this._playButtonRootElement.parentElement && (this._playButtonRootElement.removeChild(this._playButtonElement), document.body.removeChild(this._playButtonRootElement), document.head.removeChild(this._styleBlock), this._playButtonRootElement = null, this._playButtonElement = null, this._styleBlock = null);
          }, e2.prototype.load = function() {
            var t3 = this, e3 = new d();
            if (0 === this._resourceList.length)
              return this.showPlayButton().then(function() {
                Dn.unlock().then(function() {
                  t3.hidePlayButton(), t3.oncomplete.call(t3), e3.resolve(), t3.dispose();
                });
              }), e3;
            return this._resourceList.forEach(function(n2) {
              t3._engine && n2.wireEngine(t3._engine), n2.onprogress = function(e4) {
                t3.updateResourceProgress(e4.loaded, e4.total);
              }, n2.oncomplete = n2.onerror = function() {
                t3.markResourceComplete(), t3.isLoaded() && setTimeout(function() {
                  t3.showPlayButton().then(function() {
                    Dn.unlock().then(function() {
                      t3.hidePlayButton(), t3.oncomplete.call(t3), e3.resolve(), t3.dispose();
                    });
                  });
                }, 200);
              };
            }), function t4(e4, n2) {
              e4[n2] && e4[n2].load().then(function() {
                t4(e4, n2 + 1);
              });
            }(this._resourceList, 0), e3;
          }, e2.prototype.updateResourceProgress = function(t3, e3) {
            var n2 = t3 / e3 * (100 / this._resourceCount) + 100 * this.progress;
            this.onprogress({ loaded: n2, total: 100 });
          }, e2.prototype.markResourceComplete = function() {
            this._numLoaded++;
          }, Object.defineProperty(e2.prototype, "progress", { get: function() {
            return this._resourceCount > 0 ? this._numLoaded / this._resourceCount : 1;
          }, enumerable: false, configurable: true }), e2.prototype.draw = function(t3) {
            var e3 = this._engine.canvasHeight / this._engine.pixelRatio, n2 = this._engine.canvasWidth / this._engine.pixelRatio;
            if (this._playButtonRootElement) {
              var i2 = t3.canvas.offsetLeft, r2 = t3.canvas.offsetTop, o2 = this._playButton.clientWidth, s2 = this._playButton.clientHeight;
              this.playButtonPosition ? (this._playButtonRootElement.style.left = this.playButtonPosition.x + "px", this._playButtonRootElement.style.top = this.playButtonPosition.y + "px") : (this._playButtonRootElement.style.left = i2 + n2 / 2 - o2 / 2 + "px", this._playButtonRootElement.style.top = r2 + e3 / 2 - s2 / 2 + 100 + "px");
            }
            t3.fillStyle = this.backgroundColor, t3.fillRect(0, 0, n2, e3);
            var a2 = e3 / 2, c2 = Math.min(this.logoWidth, 0.75 * n2), h2 = n2 / 2 - c2 / 2;
            this.logoPosition && (h2 = this.logoPosition.x, a2 = this.logoPosition.y);
            var u2 = Math.floor(c2 * (this.logoHeight / this.logoWidth)), l2 = this._engine.getAntialiasing();
            if (this._engine.setAntialiasing(true), this.logoPosition ? t3.drawImage(this._image, 0, 0, this.logoWidth, this.logoHeight, h2, a2, c2, u2) : t3.drawImage(this._image, 0, 0, this.logoWidth, this.logoHeight, h2, a2 - u2 - 20, c2, u2), this.suppressPlayButton || !this._playButtonShown) {
              var p2 = h2, d2 = a2;
              this.loadingBarPosition && (p2 = this.loadingBarPosition.x, d2 = this.loadingBarPosition.y), t3.lineWidth = 2, tn(t3, p2, d2, c2, 20, 10, this.loadingBarColor);
              var f2 = c2 * this.progress - 10;
              tn(t3, p2 + 5, d2 + 5, f2 > 10 ? f2 : 10, 10, 5, null, this.loadingBarColor), this._engine.setAntialiasing(l2);
            } else
              this._engine.setAntialiasing(l2);
          }, e2.prototype.update = function(t3, e3) {
          }, e2;
        }(ee), Fn = { webgl: "WebGL", webaudio: "WebAudio", gamepadapi: "Gamepad API" }, In = function() {
          function t2() {
            this._features = null, this.failedTests = [], this._criticalTests = { canvasSupport: function() {
              var t3 = document.createElement("canvas");
              return !(!t3.getContext || !t3.getContext("2d"));
            }, arrayBufferSupport: function() {
              var t3 = new XMLHttpRequest();
              t3.open("GET", "/");
              try {
                t3.responseType = "arraybuffer";
              } catch (t4) {
                return false;
              }
              return "arraybuffer" === t3.responseType;
            }, dataUrlSupport: function() {
              return 0 === document.createElement("canvas").toDataURL("image/png").indexOf("data:image/png");
            }, objectUrlSupport: function() {
              return "URL" in window && "revokeObjectURL" in URL && "createObjectURL" in URL;
            }, rgbaSupport: function() {
              var t3 = document.createElement("a").style;
              return t3.cssText = "background-color:rgba(150,255,150,.5)", ("" + t3.backgroundColor).indexOf("rgba") > -1;
            } }, this._warningTest = { webAudioSupport: function() {
              return !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext);
            }, webglSupport: function() {
              var t3 = document.createElement("canvas");
              return !(!t3.getContext || !t3.getContext("webgl"));
            } }, this._features = this._loadBrowserFeatures();
          }
          return t2.prototype.getBrowserFeatures = function() {
            return null === this._features && (this._features = this._loadBrowserFeatures()), this._features;
          }, t2.prototype.logBrowserFeatures = function() {
            for (var t3 = "%cSUPPORTED BROWSER FEATURES\n==========================%c\n", e2 = ["font-weight: bold; color: navy", "font-weight: normal; color: inherit"], n2 = this.getBrowserFeatures(), i2 = 0, r2 = Object.keys(Fn); i2 < r2.length; i2++) {
              var o2 = r2[i2];
              n2[o2] ? (t3 += "(%c\u2713%c)", e2.push("font-weight: bold; color: green"), e2.push("font-weight: normal; color: inherit")) : (t3 += "(%c\u2717%c)", e2.push("font-weight: bold; color: red"), e2.push("font-weight: normal; color: inherit")), t3 += " " + Fn[o2] + "\n";
            }
            e2.unshift(t3), console.log.apply(console, e2);
          }, t2.prototype._loadBrowserFeatures = function() {
            var t3 = this;
            return { canvas: t3._criticalTests.canvasSupport(), arraybuffer: t3._criticalTests.arrayBufferSupport(), dataurl: t3._criticalTests.dataUrlSupport(), objecturl: t3._criticalTests.objectUrlSupport(), rgba: t3._criticalTests.rgbaSupport(), webaudio: t3._warningTest.webAudioSupport(), webgl: t3._warningTest.webglSupport(), gamepadapi: !!navigator.getGamepads };
          }, t2.prototype.test = function() {
            var t3 = false;
            for (var e2 in this._criticalTests)
              this._criticalTests[e2].call(this) || (this.failedTests.push(e2), R.getInstance().error("Critical browser feature missing, Excalibur requires:", e2), t3 = true);
            if (t3)
              return false;
            for (var n2 in this._warningTest)
              this._warningTest[n2]() || R.getInstance().warn("Warning browser feature missing, Excalibur will have reduced performance:", n2);
            return true;
          }, t2;
        }(), Ln = function() {
          function t2(t3) {
            this.parent = t3, this.parent = t3 || null, this.body = null, this.bounds = new Kt(), this.left = null, this.right = null, this.height = 0;
          }
          return t2.prototype.isLeaf = function() {
            return !this.left && !this.right;
          }, t2;
        }(), zn = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = new Kt(-Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)), this.worldBounds = t3, this.root = null, this.nodes = {};
          }
          return t2.prototype._insert = function(t3) {
            if (null === this.root)
              return this.root = t3, void (this.root.parent = null);
            for (var e2 = t3.bounds, n2 = this.root; !n2.isLeaf(); ) {
              var i2 = n2.left, r2 = n2.right, o2 = n2.bounds.getPerimeter(), s2 = n2.bounds.combine(e2).getPerimeter(), a2 = 2 * s2, c2 = 2 * (s2 - o2), h2 = 0, u2 = e2.combine(i2.bounds), l2 = void 0;
              i2.isLeaf() ? h2 = u2.getPerimeter() + c2 : (l2 = i2.bounds.getPerimeter(), h2 = u2.getPerimeter() - l2 + c2);
              var p2 = 0, d2 = e2.combine(r2.bounds);
              if (r2.isLeaf() ? p2 = d2.getPerimeter() + c2 : (l2 = r2.bounds.getPerimeter(), p2 = d2.getPerimeter() - l2 + c2), a2 < h2 && a2 < p2)
                break;
              n2 = h2 < p2 ? i2 : r2;
            }
            var f2 = n2.parent, y2 = new Ln(f2);
            y2.bounds = e2.combine(n2.bounds), y2.height = n2.height + 1, null !== f2 ? (f2.left === n2 ? f2.left = y2 : f2.right = y2, y2.left = n2, y2.right = t3, n2.parent = y2, t3.parent = y2) : (y2.left = n2, y2.right = t3, n2.parent = y2, t3.parent = y2, this.root = y2);
            for (var g2 = t3.parent; g2; ) {
              if (!(g2 = this._balance(g2)).left)
                throw new Error("Parent of current leaf cannot have a null left child" + g2);
              if (!g2.right)
                throw new Error("Parent of current leaf cannot have a null right child" + g2);
              g2.height = 1 + Math.max(g2.left.height, g2.right.height), g2.bounds = g2.left.bounds.combine(g2.right.bounds), g2 = g2.parent;
            }
          }, t2.prototype._remove = function(t3) {
            if (t3 !== this.root) {
              var e2, n2 = t3.parent, i2 = n2.parent;
              if (e2 = n2.left === t3 ? n2.right : n2.left, i2) {
                i2.left === n2 ? i2.left = e2 : i2.right = e2, e2.parent = i2;
                for (var r2 = i2; r2; )
                  (r2 = this._balance(r2)).bounds = r2.left.bounds.combine(r2.right.bounds), r2.height = 1 + Math.max(r2.left.height, r2.right.height), r2 = r2.parent;
              } else
                this.root = e2, e2.parent = null;
            } else
              this.root = null;
          }, t2.prototype.trackBody = function(t3) {
            var e2 = new Ln();
            e2.body = t3, e2.bounds = t3.collider.bounds, e2.bounds.left -= 2, e2.bounds.top -= 2, e2.bounds.right += 2, e2.bounds.bottom += 2, this.nodes[t3.id] = e2, this._insert(e2);
          }, t2.prototype.updateBody = function(t3) {
            var e2 = this.nodes[t3.id];
            if (!e2)
              return false;
            var n2 = t3.collider.bounds;
            if (!this.worldBounds.contains(n2))
              return R.getInstance().warn("Collider with id " + t3.id + " is outside the world bounds and will no longer be tracked for physics"), this.untrackBody(t3), false;
            if (e2.bounds.contains(n2))
              return false;
            this._remove(e2), n2.left -= st.boundsPadding, n2.top -= st.boundsPadding, n2.right += st.boundsPadding, n2.bottom += st.boundsPadding;
            var i2 = t3.vel.x * st.dynamicTreeVelocityMultiplier, r2 = t3.vel.y * st.dynamicTreeVelocityMultiplier;
            return i2 < 0 ? n2.left += i2 : n2.right += i2, r2 < 0 ? n2.top += r2 : n2.bottom += r2, e2.bounds = n2, this._insert(e2), true;
          }, t2.prototype.untrackBody = function(t3) {
            var e2 = this.nodes[t3.collider.id];
            e2 && (this._remove(e2), this.nodes[t3.collider.id] = null, delete this.nodes[t3.collider.id]);
          }, t2.prototype._balance = function(t3) {
            if (null === t3)
              throw new Error("Cannot balance at null node");
            if (t3.isLeaf() || t3.height < 2)
              return t3;
            var e2 = t3.left, n2 = t3.right, i2 = t3, r2 = e2, o2 = n2, s2 = e2.left, a2 = e2.right, c2 = n2.left, h2 = n2.right, u2 = o2.height - r2.height;
            if (u2 > 1)
              return o2.left = i2, o2.parent = i2.parent, i2.parent = o2, o2.parent ? o2.parent.left === i2 ? o2.parent.left = o2 : o2.parent.right = o2 : this.root = o2, c2.height > h2.height ? (o2.right = c2, i2.right = h2, h2.parent = i2, i2.bounds = r2.bounds.combine(h2.bounds), o2.bounds = i2.bounds.combine(c2.bounds), i2.height = 1 + Math.max(r2.height, h2.height), o2.height = 1 + Math.max(i2.height, c2.height)) : (o2.right = h2, i2.right = c2, c2.parent = i2, i2.bounds = r2.bounds.combine(c2.bounds), o2.bounds = i2.bounds.combine(h2.bounds), i2.height = 1 + Math.max(r2.height, c2.height), o2.height = 1 + Math.max(i2.height, h2.height)), o2;
            if (u2 < -1) {
              if (r2.left = i2, r2.parent = i2.parent, i2.parent = r2, r2.parent)
                if (r2.parent.left === i2)
                  r2.parent.left = r2;
                else {
                  if (r2.parent.right !== i2)
                    throw "Error rotating Dynamic Tree";
                  r2.parent.right = r2;
                }
              else
                this.root = r2;
              return s2.height > a2.height ? (r2.right = s2, i2.left = a2, a2.parent = i2, i2.bounds = o2.bounds.combine(a2.bounds), r2.bounds = i2.bounds.combine(s2.bounds), i2.height = 1 + Math.max(o2.height, a2.height), r2.height = 1 + Math.max(i2.height, s2.height)) : (r2.right = a2, i2.left = s2, s2.parent = i2, i2.bounds = o2.bounds.combine(s2.bounds), r2.bounds = i2.bounds.combine(a2.bounds), i2.height = 1 + Math.max(o2.height, s2.height), r2.height = 1 + Math.max(i2.height, a2.height)), r2;
            }
            return t3;
          }, t2.prototype.getHeight = function() {
            return null === this.root ? 0 : this.root.height;
          }, t2.prototype.query = function(t3, e2) {
            var n2 = t3.collider.bounds, i2 = function(r2) {
              if (r2 && r2.bounds.intersect(n2)) {
                if (!r2.isLeaf() || r2.body === t3)
                  return i2(r2.left) || i2(r2.right);
                if (e2.call(t3, r2.body))
                  return true;
              }
              return false;
            };
            i2(this.root);
          }, t2.prototype.rayCastQuery = function(t3, e2, n2) {
            void 0 === e2 && (e2 = 1 / 0);
            var i2 = function(r2) {
              if (r2 && r2.bounds.rayCast(t3, e2)) {
                if (!r2.isLeaf())
                  return i2(r2.left) || i2(r2.right);
                if (n2.call(t3, r2.body))
                  return true;
              }
              return false;
            };
            i2(this.root);
          }, t2.prototype.getNodes = function() {
            var t3 = function(e2) {
              return e2 ? [e2].concat(t3(e2.left), t3(e2.right)) : [];
            };
            return t3(this.root);
          }, t2.prototype.debugDraw = function(t3) {
            var e2 = function(n2) {
              n2 && (n2.isLeaf() ? (t3.lineWidth = 1, t3.strokeStyle = "green") : (t3.lineWidth = 1, t3.strokeStyle = "white"), n2.bounds.debugDraw(t3), n2.left && e2(n2.left), n2.right && e2(n2.right));
            };
            e2(this.root);
          }, t2;
        }(), Hn = function() {
          function t2() {
            this._dynamicCollisionTree = new zn(), this._collisionHash = {}, this._collisionPairCache = [], this._lastFramePairs = [], this._lastFramePairsHash = {};
          }
          return t2.prototype.track = function(t3) {
            t3 ? this._dynamicCollisionTree.trackBody(t3) : R.getInstance().warn("Cannot track null physics body");
          }, t2.prototype.untrack = function(t3) {
            t3 ? this._dynamicCollisionTree.untrackBody(t3) : R.getInstance().warn("Cannot untrack a null physics body");
          }, t2.prototype._shouldGenerateCollisionPair = function(t3, e2) {
            var n2 = rn.calculatePairHash(t3, e2);
            return !this._collisionHash[n2] && rn.canCollide(t3, e2);
          }, t2.prototype.broadphase = function(t3, e2, n2) {
            var i2, r2 = this, o2 = e2 / 1e3, s2 = t3.map(function(t4) {
              return t4.collider;
            }).filter(function(t4) {
              return t4.active && t4.type !== ct.PreventCollision;
            });
            this._collisionPairCache = [], this._collisionHash = {};
            for (var a2 = 0, c2 = s2.length; a2 < c2; a2++)
              i2 = s2[a2], this._dynamicCollisionTree.query(i2.body, function(t4) {
                if (r2._shouldGenerateCollisionPair(i2, t4.collider)) {
                  var e3 = new rn(i2, t4.collider);
                  r2._collisionHash[e3.id] = true, r2._collisionPairCache.push(e3);
                }
                return false;
              });
            if (n2 && (n2.physics.pairs = this._collisionPairCache.length), st.checkForFastBodies)
              for (var h2 = function(t4) {
                if (t4.type !== ct.Active)
                  return "continue";
                var e3 = t4.body.vel.size * o2 + 0.5 * t4.body.acc.size * o2 * o2, i3 = Math.min(t4.bounds.height, t4.bounds.width);
                if (st.disableMinimumSpeedForFastBody || e3 > i3 / 2) {
                  n2 && n2.physics.fastBodies++;
                  var r3, s3 = t4.body.pos.sub(t4.body.oldPos), a3 = t4.shape.center, c3 = t4.shape.getFurthestPoint(t4.body.vel), h3 = c3.sub(s3), l3 = new G(h3, t4.body.vel);
                  l3.pos = l3.pos.add(l3.dir.scale(-2 * st.surfaceEpsilon));
                  var p3 = new V(1 / 0, 1 / 0);
                  if (u2._dynamicCollisionTree.rayCastQuery(l3, e3 + 2 * st.surfaceEpsilon, function(n3) {
                    if (t4.body !== n3 && n3.collider.shape && rn.canCollide(t4, n3.collider)) {
                      var i4 = n3.collider.shape.rayCast(l3, e3 + 10 * st.surfaceEpsilon);
                      if (i4) {
                        var o3 = i4.sub(h3);
                        o3.size < p3.size && (p3 = o3, r3 = n3);
                      }
                    }
                    return false;
                  }), r3 && V.isValid(p3)) {
                    var d2 = new rn(t4, r3.collider);
                    u2._collisionHash[d2.id] || (u2._collisionHash[d2.id] = true, u2._collisionPairCache.push(d2));
                    var f2 = a3.sub(c3);
                    t4.body.pos = h3.add(f2).add(p3).add(l3.dir.scale(2 * st.surfaceEpsilon)), t4.shape.recalc(), n2 && n2.physics.fastBodyCollisions++;
                  }
                }
              }, u2 = this, l2 = 0, p2 = s2; l2 < p2.length; l2++) {
                h2(p2[l2]);
              }
            return this._collisionPairCache;
          }, t2.prototype.narrowphase = function(t3, e2) {
            for (var n2 = 0; n2 < t3.length; n2++)
              t3[n2].collide(), e2 && t3[n2].collision && (e2.physics.collisions++, e2.physics.collidersHash[t3[n2].id] = t3[n2]);
            return t3.filter(function(t4) {
              return t4.collision;
            });
          }, t2.prototype.resolve = function(t3, e2, n2) {
            for (var i2 = 0, r2 = t3; i2 < r2.length; i2++) {
              var o2 = r2[i2];
              o2.resolve(n2), o2.collision && (o2.colliderA.body.applyMtv(), o2.colliderB.body.applyMtv(), o2.colliderA.body.integrate(e2 * st.collisionShift), o2.colliderB.body.integrate(e2 * st.collisionShift));
            }
            return t3.filter(function(t4) {
              return t4.canCollide;
            });
          }, t2.prototype.runCollisionStartEnd = function(t3) {
            for (var e2 = {}, n2 = 0, i2 = t3; n2 < i2.length; n2++) {
              if (e2[(c2 = i2[n2]).id] = c2, !this._lastFramePairsHash[c2.id]) {
                var r2 = c2.colliderA, o2 = c2.colliderB;
                r2.emit("collisionstart", new kt(r2, o2, c2)), o2.emit("collisionstart", new kt(o2, r2, c2));
              }
            }
            for (var s2 = 0, a2 = this._lastFramePairs; s2 < a2.length; s2++) {
              var c2;
              if (!e2[(c2 = a2[s2]).id]) {
                r2 = c2.colliderA, o2 = c2.colliderB;
                r2.emit("collisionend", new Rt(r2, o2)), o2.emit("collisionend", new Rt(o2, r2));
              }
            }
            this._lastFramePairs = t3, this._lastFramePairsHash = e2;
          }, t2.prototype.update = function(t3) {
            for (var e2 = 0, n2 = t3.length, i2 = 0; i2 < n2; i2++)
              this._dynamicCollisionTree.updateBody(t3[i2]) && e2++;
            return e2;
          }, t2.prototype.debugDraw = function(t3) {
            if (st.broadphaseDebug && this._dynamicCollisionTree.debugDraw(t3), st.showContacts || st.showCollisionNormals)
              for (var e2 = 0, n2 = this._collisionPairCache; e2 < n2.length; e2++) {
                n2[e2].debugDraw(t3);
              }
          }, t2;
        }(), Un = function() {
          function t2(t3) {
            this._getComparable = t3;
          }
          return t2.prototype.find = function(t3) {
            return this._find(this._root, t3);
          }, t2.prototype._find = function(t3, e2) {
            return null != t3 && (this._getComparable(e2) === t3.getKey() ? t3.getData().indexOf(e2) > -1 : this._getComparable(e2) < t3.getKey() ? this._find(t3.getLeft(), e2) : this._find(t3.getRight(), e2));
          }, t2.prototype.get = function(t3) {
            return this._get(this._root, t3);
          }, t2.prototype._get = function(t3, e2) {
            return null == t3 ? [] : e2 === t3.getKey() ? t3.getData() : e2 < t3.getKey() ? this._get(t3.getLeft(), e2) : this._get(t3.getRight(), e2);
          }, t2.prototype.add = function(t3) {
            return null == this._root ? (this._root = new Wn(this._getComparable(t3), [t3], null, null), true) : this._insert(this._root, t3);
          }, t2.prototype._insert = function(t3, e2) {
            return null != t3 && (this._getComparable(e2) === t3.getKey() ? !(t3.getData().indexOf(e2) > -1) && (t3.getData().push(e2), true) : this._getComparable(e2) < t3.getKey() ? null == t3.getLeft() ? (t3.setLeft(new Wn(this._getComparable.call(e2, e2), [e2], null, null)), true) : this._insert(t3.getLeft(), e2) : null == t3.getRight() ? (t3.setRight(new Wn(this._getComparable.call(e2, e2), [e2], null, null)), true) : this._insert(t3.getRight(), e2));
          }, t2.prototype.removeByComparable = function(t3) {
            this._root = this._remove(this._root, t3);
          }, t2.prototype._remove = function(t3, e2) {
            if (null == t3)
              return null;
            if (this._getComparable(e2) !== t3.getKey())
              return this._getComparable(e2) < t3.getKey() ? (t3.setLeft(this._remove(t3.getLeft(), e2)), t3) : (t3.setRight(this._remove(t3.getRight(), e2)), t3);
            var n2 = t3.getData().indexOf(e2);
            if (n2 > -1) {
              if (t3.getData().splice(n2, 1), 0 === t3.getData().length) {
                if (null == t3.getLeft() && null == t3.getRight())
                  return null;
                if (null == t3.getLeft())
                  return t3.getRight();
                if (null == t3.getRight())
                  return t3.getLeft();
                var i2 = this._findMinNode(t3.getRight());
                return t3.setKey(i2.getKey()), t3.setData(i2.getData()), t3.setRight(this._cleanup(t3.getRight(), i2)), t3;
              }
              return t3;
            }
            return null;
          }, t2.prototype._cleanup = function(t3, e2) {
            var n2 = e2.getKey();
            if (null == t3)
              return null;
            if (n2 === t3.getKey()) {
              if (null == t3.getLeft() && null == t3.getRight())
                return null;
              if (null == t3.getLeft())
                return t3.getRight();
              if (null == t3.getRight())
                return t3.getLeft();
              var i2 = this._findMinNode(t3.getRight());
              return t3.setKey(i2.getKey()), t3.setData(i2.getData()), t3.setRight(this._cleanup(t3.getRight(), i2)), t3;
            }
            return e2.getKey() < t3.getKey() ? (t3.setLeft(this._cleanup(t3.getLeft(), e2)), t3) : (t3.setRight(this._cleanup(t3.getRight(), e2)), t3);
          }, t2.prototype._findMinNode = function(t3) {
            for (var e2 = t3; null != e2.getLeft(); )
              e2 = e2.getLeft();
            return e2;
          }, t2.prototype.list = function() {
            var t3 = new Array();
            return this._list(this._root, t3), t3;
          }, t2.prototype._list = function(t3, e2) {
            null != t3 && (this._list(t3.getLeft(), e2), t3.getData().forEach(function(t4) {
              e2.push(t4);
            }), this._list(t3.getRight(), e2));
          }, t2;
        }(), Wn = function() {
          function t2(t3, e2, n2, i2) {
            this._key = t3, this._data = e2, this._left = n2, this._right = i2;
          }
          return t2.prototype.getKey = function() {
            return this._key;
          }, t2.prototype.setKey = function(t3) {
            this._key = t3;
          }, t2.prototype.getData = function() {
            return this._data;
          }, t2.prototype.setData = function(t3) {
            this._data = t3;
          }, t2.prototype.getLeft = function() {
            return this._left;
          }, t2.prototype.setLeft = function(t3) {
            this._left = t3;
          }, t2.prototype.getRight = function() {
            return this._right;
          }, t2.prototype.setRight = function(t3) {
            this._right = t3;
          }, t2;
        }(), Nn = function() {
          function t2(t3) {
            this._key = 0, this._key = t3;
          }
          return t2.prototype.getTheKey = function() {
            return this._key;
          }, t2.prototype.setKey = function(t3) {
            this._key = t3;
          }, t2;
        }(), qn = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), Vn = function() {
          function t2(t3) {
            this.camera = t3;
          }
          return t2.prototype.lockToActor = function(t3) {
            this.camera.addStrategy(new Kn(t3));
          }, t2.prototype.lockToActorAxis = function(t3, e2) {
            this.camera.addStrategy(new Yn(t3, e2));
          }, t2.prototype.elasticToActor = function(t3, e2, n2) {
            this.camera.addStrategy(new Jn(t3, e2, n2));
          }, t2.prototype.radiusAroundActor = function(t3, e2) {
            this.camera.addStrategy(new $n(t3, e2));
          }, t2.prototype.limitCameraBounds = function(t3) {
            this.camera.addStrategy(new ti(t3));
          }, t2;
        }();
        !function(t2) {
          t2[t2.X = 0] = "X", t2[t2.Y = 1] = "Y";
        }(Mn || (Mn = {}));
        var Gn, Xn, Qn, Zn, Kn = function(t2) {
          this.target = t2, this.action = function(t3, e2, n2, i2) {
            return t3.center;
          };
        }, Yn = function(t2, e2) {
          var n2 = this;
          this.target = t2, this.axis = e2, this.action = function(t3, e3, i2, r2) {
            var o2 = t3.center, s2 = e3.getFocus();
            return n2.axis === Mn.X ? new V(o2.x, s2.y) : new V(s2.x, o2.y);
          };
        }, Jn = function(t2, e2, n2) {
          var i2 = this;
          this.target = t2, this.cameraElasticity = e2, this.cameraFriction = n2, this.action = function(t3, e3, n3, r2) {
            var o2 = t3.center, s2 = e3.getFocus(), a2 = e3.vel.clone(), c2 = o2.sub(s2).scale(i2.cameraElasticity), h2 = (a2 = a2.add(c2)).scale(-1).scale(i2.cameraFriction);
            return a2 = a2.add(h2), s2 = s2.add(a2);
          };
        }, $n = function(t2, e2) {
          var n2 = this;
          this.target = t2, this.radius = e2, this.action = function(t3, e3, i2, r2) {
            var o2 = t3.center, s2 = e3.getFocus(), a2 = o2.sub(s2), c2 = a2.size;
            if (c2 >= n2.radius) {
              var h2 = c2 - n2.radius;
              return s2.add(a2.normalize().scale(h2));
            }
            return s2;
          };
        }, ti = function(t2) {
          var e2 = this;
          this.target = t2, this.boundSizeChecked = false, this.action = function(t3, n2, i2, r2) {
            var o2 = n2.getFocus();
            return e2.boundSizeChecked || ((t3.bottom - t3.top < i2.drawHeight || t3.right - t3.left < i2.drawWidth) && R.getInstance().warn("Camera bounds should not be smaller than the engine viewport"), e2.boundSizeChecked = true), o2.x < t3.left + i2.halfDrawWidth ? o2.x = t3.left + i2.halfDrawWidth : o2.x > t3.right - i2.halfDrawWidth && (o2.x = t3.right - i2.halfDrawWidth), o2.y < t3.top + i2.halfDrawHeight ? o2.y = t3.top + i2.halfDrawHeight : o2.y > t3.bottom - i2.halfDrawHeight && (o2.y = t3.bottom - i2.halfDrawHeight), o2;
          };
        }, ei = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._cameraStrategies = [], e3.strategy = new Vn(e3), e3.z = 1, e3.dz = 0, e3.az = 0, e3.rotation = 0, e3.rx = 0, e3.pos = V.Zero, e3.vel = V.Zero, e3.acc = V.Zero, e3._cameraMoving = false, e3._currentLerpTime = 0, e3._lerpDuration = 1e3, e3._lerpStart = null, e3._lerpEnd = null, e3._isShaking = false, e3._shakeMagnitudeX = 0, e3._shakeMagnitudeY = 0, e3._shakeDuration = 0, e3._elapsedShakeTime = 0, e3._xShake = 0, e3._yShake = 0, e3._isZooming = false, e3._zoomStart = 1, e3._zoomEnd = 1, e3._currentZoomTime = 0, e3._zoomDuration = 0, e3._zoomEasing = Ne.EaseInOutCubic, e3._easing = Ne.EaseInOutCubic, e3._isInitialized = false, e3;
          }
          return qn(e2, t2), Object.defineProperty(e2.prototype, "angularVelocity", { get: function() {
            return this.rx;
          }, set: function(t3) {
            this.rx = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "x", { get: function() {
            return this.pos.x;
          }, set: function(t3) {
            this._follow || this._cameraMoving || (this.pos.x = t3);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y", { get: function() {
            return this.pos.y;
          }, set: function(t3) {
            this._follow || this._cameraMoving || (this.pos.y = t3);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "dx", { get: function() {
            return this.vel.x;
          }, set: function(t3) {
            this.vel.x = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "dy", { get: function() {
            return this.vel.y;
          }, set: function(t3) {
            this.vel.y = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "ax", { get: function() {
            return this.acc.x;
          }, set: function(t3) {
            this.acc.x = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "ay", { get: function() {
            return this.acc.y;
          }, set: function(t3) {
            this.acc.y = t3;
          }, enumerable: false, configurable: true }), e2.prototype.getFocus = function() {
            return this.pos;
          }, e2.prototype.move = function(t3, e3, n2) {
            if (void 0 === n2 && (n2 = Ne.EaseInOutCubic), "function" != typeof n2)
              throw "Please specify an EasingFunction";
            return this._follow ? new d().reject(t3) : (this._lerpPromise && this._lerpPromise.state() === u.Pending && this._lerpPromise.resolve(t3), this._lerpPromise = new d(), this._lerpStart = this.getFocus().clone(), this._lerpDuration = e3, this._lerpEnd = t3, this._currentLerpTime = 0, this._cameraMoving = true, this._easing = n2, this._lerpPromise);
          }, e2.prototype.shake = function(t3, e3, n2) {
            this._isShaking = true, this._shakeMagnitudeX = t3, this._shakeMagnitudeY = e3, this._shakeDuration = n2;
          }, e2.prototype.zoom = function(t3, e3, n2) {
            return void 0 === e3 && (e3 = 0), void 0 === n2 && (n2 = Ne.EaseInOutCubic), this._zoomPromise = new d(), e3 ? (this._isZooming = true, this._zoomEasing = n2, this._currentZoomTime = 0, this._zoomDuration = e3, this._zoomStart = this.z, this._zoomEnd = t3) : (this._isZooming = false, this.z = t3, this._zoomPromise.resolve(true)), this._zoomPromise;
          }, e2.prototype.getZoom = function() {
            return this.z;
          }, Object.defineProperty(e2.prototype, "viewport", { get: function() {
            if (this._engine) {
              var t3 = this._engine.halfDrawWidth, e3 = this._engine.halfDrawHeight;
              return new Kt(this.x - t3, this.y - e3, this.x + t3, this.y + e3);
            }
            return new Kt(0, 0, 0, 0);
          }, enumerable: false, configurable: true }), e2.prototype.addStrategy = function(t3) {
            this._cameraStrategies.push(t3);
          }, e2.prototype.removeStrategy = function(t3) {
            C(t3, this._cameraStrategies);
          }, e2.prototype.clearAllStrategies = function() {
            this._cameraStrategies.length = 0;
          }, e2.prototype._preupdate = function(t3, e3) {
            this.emit("preupdate", new mt(t3, e3, this)), this.onPreUpdate(t3, e3);
          }, e2.prototype.onPreUpdate = function(t3, e3) {
          }, e2.prototype._postupdate = function(t3, e3) {
            this.emit("postupdate", new bt(t3, e3, this)), this.onPostUpdate(t3, e3);
          }, e2.prototype.onPostUpdate = function(t3, e3) {
          }, Object.defineProperty(e2.prototype, "isInitialized", { get: function() {
            return this._isInitialized;
          }, enumerable: false, configurable: true }), e2.prototype._initialize = function(e3) {
            this.isInitialized || (this.onInitialize(e3), t2.prototype.emit.call(this, "initialize", new jt(e3, this)), this._isInitialized = true, this._engine = e3);
          }, e2.prototype.onInitialize = function(t3) {
          }, e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.off = function(e3, n2) {
            t2.prototype.off.call(this, e3, n2);
          }, e2.prototype.once = function(e3, n2) {
            t2.prototype.once.call(this, e3, n2);
          }, e2.prototype.update = function(t3, e3) {
            if (this._initialize(t3), this._preupdate(t3, e3), this.pos = this.pos.add(this.vel.scale(e3 / 1e3)), this.z += this.dz * e3 / 1e3, this.vel = this.vel.add(this.acc.scale(e3 / 1e3)), this.dz += this.az * e3 / 1e3, this.rotation += this.angularVelocity * e3 / 1e3, this._isZooming)
              if (this._currentZoomTime < this._zoomDuration) {
                var n2 = (0, this._zoomEasing)(this._currentZoomTime, this._zoomStart, this._zoomEnd, this._zoomDuration);
                this.z = n2, this._currentZoomTime += e3;
              } else
                this._isZooming = false, this.z = this._zoomEnd, this._currentZoomTime = 0, this._zoomPromise.resolve(true);
            if (this._cameraMoving)
              if (this._currentLerpTime < this._lerpDuration) {
                var i2 = Ne.CreateVectorEasingFunction(this._easing)(this._currentLerpTime, this._lerpStart, this._lerpEnd, this._lerpDuration);
                this.pos = i2, this._currentLerpTime += e3;
              } else {
                this.pos = this._lerpEnd;
                var r2 = this._lerpEnd.clone();
                this._lerpStart = null, this._lerpEnd = null, this._currentLerpTime = 0, this._cameraMoving = false, this._lerpPromise.resolve(r2);
              }
            this._isDoneShaking() ? (this._isShaking = false, this._elapsedShakeTime = 0, this._shakeMagnitudeX = 0, this._shakeMagnitudeY = 0, this._shakeDuration = 0, this._xShake = 0, this._yShake = 0) : (this._elapsedShakeTime += e3, this._xShake = 1 + (Math.random() * this._shakeMagnitudeX | 0), this._yShake = 1 + (Math.random() * this._shakeMagnitudeY | 0));
            for (var o2 = 0, s2 = this._cameraStrategies; o2 < s2.length; o2++) {
              var a2 = s2[o2];
              this.pos = a2.action.call(a2, a2.target, this, t3, e3);
            }
            this._postupdate(t3, e3);
          }, e2.prototype.draw = function(t3) {
            var e3 = this.getFocus(), n2 = t3.canvas.width, i2 = t3.canvas.height, r2 = this._engine ? this._engine.pixelRatio : window.devicePixelRatio, o2 = this.getZoom(), s2 = n2 / o2 / r2, a2 = i2 / o2 / r2;
            t3.scale(o2, o2), t3.translate(-e3.x + s2 / 2 + this._xShake, -e3.y + a2 / 2 + this._yShake);
          }, e2.prototype.debugDraw = function(t3) {
            var e3 = this.getFocus();
            t3.fillStyle = "red", t3.strokeStyle = "white", t3.lineWidth = 3, t3.beginPath(), t3.arc(e3.x, e3.y, 15, 0, 2 * Math.PI), t3.closePath(), t3.stroke(), t3.beginPath(), t3.arc(e3.x, e3.y, 5, 0, 2 * Math.PI), t3.closePath(), t3.stroke(), t3.beginPath(), t3.setLineDash([5, 15]), t3.lineWidth = 5, t3.strokeStyle = "white", t3.strokeRect(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height), t3.closePath();
          }, e2.prototype._isDoneShaking = function() {
            return !this._isShaking || this._elapsedShakeTime >= this._shakeDuration;
          }, e2;
        }(ee), ni = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }();
        !function(t2) {
          t2[t2.Em = 0] = "Em", t2[t2.Rem = 1] = "Rem", t2[t2.Px = 2] = "Px", t2[t2.Pt = 3] = "Pt", t2[t2.Percent = 4] = "Percent";
        }(Gn || (Gn = {})), function(t2) {
          t2[t2.Left = 0] = "Left", t2[t2.Right = 1] = "Right", t2[t2.Center = 2] = "Center", t2[t2.Start = 3] = "Start", t2[t2.End = 4] = "End";
        }(Xn || (Xn = {})), function(t2) {
          t2[t2.Top = 0] = "Top", t2[t2.Hanging = 1] = "Hanging", t2[t2.Middle = 2] = "Middle", t2[t2.Alphabetic = 3] = "Alphabetic", t2[t2.Ideographic = 4] = "Ideographic", t2[t2.Bottom = 5] = "Bottom";
        }(Qn || (Qn = {})), function(t2) {
          t2[t2.Normal = 0] = "Normal", t2[t2.Italic = 1] = "Italic", t2[t2.Oblique = 2] = "Oblique";
        }(Zn || (Zn = {}));
        var ii = function(t2) {
          function e2(e3, n2, i2, r2, o2) {
            return t2.call(this, e3, n2, i2, r2, o2) || this;
          }
          return ni(e2, t2), e2;
        }(fe(function(t2) {
          function e2(e3, n2, i2, r2, o2) {
            var s2 = t2.call(this, e3 && "object" == typeof e3 ? e3 : { pos: new V(n2, i2) }) || this;
            s2.bold = false, s2.fontSize = 10, s2.fontStyle = Zn.Normal, s2.fontUnit = Gn.Px, s2.textAlign = Xn.Left, s2.baseAlign = Qn.Bottom, s2.letterSpacing = 0, s2.caseInsensitive = true;
            var a2 = "";
            return e3 && "object" == typeof e3 ? (r2 = e3.fontFamily, o2 = e3.spriteFont, a2 = e3.text) : a2 = e3, s2.text = a2 || "", s2.color = et.Black, s2.spriteFont = o2, s2.body.collider.type = ct.PreventCollision, s2.fontFamily = r2 || "sans-serif", s2._textShadowOn = false, s2._shadowOffsetX = 0, s2._shadowOffsetY = 0, s2;
          }
          return ni(e2, t2), e2.prototype.getTextWidth = function(t3) {
            var e3 = t3.font;
            t3.font = this._fontString;
            var n2 = t3.measureText(this.text).width;
            return t3.font = e3, n2;
          }, e2.prototype._lookupFontUnit = function(t3) {
            switch (t3) {
              case Gn.Em:
                return "em";
              case Gn.Rem:
                return "rem";
              case Gn.Pt:
                return "pt";
              case Gn.Px:
                return "px";
              case Gn.Percent:
                return "%";
              default:
                return "px";
            }
          }, e2.prototype._lookupTextAlign = function(t3) {
            switch (t3) {
              case Xn.Left:
                return "left";
              case Xn.Right:
                return "right";
              case Xn.Center:
                return "center";
              case Xn.End:
                return "end";
              case Xn.Start:
              default:
                return "start";
            }
          }, e2.prototype._lookupBaseAlign = function(t3) {
            switch (t3) {
              case Qn.Alphabetic:
                return "alphabetic";
              case Qn.Bottom:
                return "bottom";
              case Qn.Hanging:
                return "hanging";
              case Qn.Ideographic:
                return "ideographic";
              case Qn.Middle:
                return "middle";
              case Qn.Top:
                return "top";
              default:
                return "alphabetic";
            }
          }, e2.prototype._lookupFontStyle = function(t3) {
            var e3 = this.bold ? " bold" : "";
            switch (t3) {
              case Zn.Italic:
                return "italic" + e3;
              case Zn.Normal:
                return "normal" + e3;
              case Zn.Oblique:
                return "oblique" + e3;
              default:
                return "normal" + e3;
            }
          }, e2.prototype.setTextShadow = function(t3, e3, n2) {
            this.spriteFont.setTextShadow(t3, e3, n2);
          }, e2.prototype.useTextShadow = function(t3) {
            this.spriteFont.useTextShadow(t3);
          }, e2.prototype.clearTextShadow = function() {
            this._textShadowOn = false, this._shadowOffsetX = 0, this._shadowOffsetY = 0;
          }, e2.prototype.update = function(e3, n2) {
            t2.prototype.update.call(this, e3, n2);
          }, e2.prototype.draw = function(e3, n2) {
            e3.save(), e3.translate(this.pos.x, this.pos.y), e3.scale(this.scale.x, this.scale.y), e3.rotate(this.rotation), this._textShadowOn && (e3.save(), e3.translate(this._shadowOffsetX, this._shadowOffsetY), this._fontDraw(e3), e3.restore()), this._fontDraw(e3), t2.prototype.draw.call(this, e3, n2), e3.restore();
          }, e2.prototype._fontDraw = function(t3) {
            if (this.spriteFont)
              this.spriteFont.draw(t3, this.text, 0, 0, { color: this.color.clone(), baseAlign: this.baseAlign, textAlign: this.textAlign, fontSize: this.fontSize, letterSpacing: this.letterSpacing, opacity: this.opacity });
            else {
              var e3 = t3.textAlign, n2 = t3.textBaseline;
              t3.textAlign = this._lookupTextAlign(this.textAlign), t3.textBaseline = this._lookupBaseAlign(this.baseAlign), this.color && (this.color.a = this.opacity), t3.fillStyle = this.color.toString(), t3.font = this._fontString, this.maxWidth ? t3.fillText(this.text, 0, 0, this.maxWidth) : t3.fillText(this.text, 0, 0), t3.textAlign = e3, t3.textBaseline = n2;
            }
          }, Object.defineProperty(e2.prototype, "_fontString", { get: function() {
            return this._lookupFontStyle(this.fontStyle) + " " + this.fontSize + this._lookupFontUnit(this.fontUnit) + " " + this.fontFamily;
          }, enumerable: false, configurable: true }), e2.prototype.debugDraw = function(e3) {
            t2.prototype.debugDraw.call(this, e3);
          }, e2;
        }(bn))), ri = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), oi = { pos: V.Zero, width: 10, height: 10, visible: false, action: function() {
        }, filter: function() {
          return true;
        }, repeat: -1 }, si = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this, e3.pos.x, e3.pos.y, e3.width, e3.height) || this;
            return n2.action = function() {
            }, n2.filter = function() {
              return true;
            }, n2.repeat = -1, e3 = g({}, oi, e3), n2.filter = e3.filter || n2.filter, n2.repeat = e3.repeat || n2.repeat, n2.action = e3.action || n2.action, e3.target && (n2.target = e3.target), n2.visible = e3.visible, n2.body.collider.type = ct.Passive, n2.eventDispatcher = new te(n2), n2.actionQueue = new Ue(n2), n2.on("collisionstart", function(t3) {
              mn(t3.other) && n2.filter(t3.other) && (n2.emit("enter", new Ht(n2, t3.other)), n2._dispatchAction(), 0 === n2.repeat && n2.kill());
            }), n2.on("collisionend", function(t3) {
              mn(t3.other) && n2.filter(t3.other) && n2.emit("exit", new Ut(n2, t3.other));
            }), n2;
          }
          return ri(e2, t2), Object.defineProperty(e2.prototype, "target", { get: function() {
            return this._target;
          }, set: function(t3) {
            this._target = t3, this.filter = function(e3) {
              return e3 === t3;
            };
          }, enumerable: false, configurable: true }), e2.prototype._initialize = function(e3) {
            t2.prototype._initialize.call(this, e3);
          }, e2.prototype._dispatchAction = function() {
            this.action.call(this), this.repeat--;
          }, e2.prototype.debugDraw = function(e3) {
            t2.prototype.debugDraw.call(this, e3), e3.save(), e3.translate(this.pos.x, this.pos.y);
            var n2 = this.body.collider.bounds, i2 = this.getWorldPos();
            n2.left = n2.left - i2.x, n2.right = n2.right - i2.x, n2.top = n2.top - i2.y, n2.bottom = n2.bottom - i2.y, e3.fillStyle = et.Violet.toString(), e3.strokeStyle = et.Violet.toString(), e3.fillText("Trigger", 10, 10), n2.debugDraw(e3), e3.restore();
          }, e2;
        }(bn);
        function ai(t2) {
          return t2 instanceof Pn;
        }
        var ci, hi = function(t2) {
          return t2.sort(function(t3, e2) {
            return t3.localeCompare(e2);
          }).join("+");
        };
        !function(t2) {
          t2.Update = "update", t2.Draw = "draw";
        }(ci || (ci = {}));
        var ui = function() {
          function t2() {
            this.priority = 0;
          }
          return t2.prototype.notify = function(t3) {
          }, t2;
        }(), li = function(t2) {
          this.data = t2, this.type = "Entity Added";
        };
        function pi(t2) {
          return !!t2 && "Entity Added" === t2.type;
        }
        var di = function(t2) {
          this.data = t2, this.type = "Entity Removed";
        };
        function fi(t2) {
          return !!t2 && "Entity Removed" === t2.type;
        }
        var yi, gi = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), _i = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.types = e3, n2.entities = [], n2;
          }
          return gi(e2, t2), Object.defineProperty(e2.prototype, "key", { get: function() {
            return hi(this.types);
          }, enumerable: false, configurable: true }), e2.prototype.addEntity = function(t3) {
            !h.contains(this.entities, t3) && this.matches(t3) && (this.entities.push(t3), this.notifyAll(new li(t3)));
          }, e2.prototype.removeEntity = function(t3) {
            h.removeItemFromArray(t3, this.entities) && this.notifyAll(new di(t3));
          }, e2.prototype.clear = function() {
            this.entities.length = 0;
            for (var t3 = 0, e3 = this.observers; t3 < e3.length; t3++) {
              var n2 = e3[t3];
              this.unregister(n2);
            }
          }, e2.prototype.matches = function(t3) {
            var e3 = [];
            e3 = t3 instanceof gn ? t3.types : t3;
            for (var n2 = true, i2 = 0, r2 = this.types; i2 < r2.length; i2++) {
              var o2 = r2[i2];
              if (!(n2 = n2 && e3.indexOf(o2) > -1))
                return false;
            }
            return n2;
          }, e2;
        }(un), vi = function() {
          function t2(t3) {
            this.scene = t3, this._queries = {};
          }
          return t2.prototype._addQuery = function(t3) {
            this._queries[hi(t3.types)] = t3;
            for (var e2 = 0, n2 = this.scene.entityManager.entities; e2 < n2.length; e2++) {
              var i2 = n2[e2];
              t3.addEntity(i2);
            }
          }, t2.prototype.maybeRemoveQuery = function(t3) {
            0 === t3.observers.length && (t3.clear(), delete this._queries[hi(t3.types)]);
          }, t2.prototype.addEntity = function(t3) {
            for (var e2 in this._queries)
              this._queries[e2] && this._queries[e2].addEntity(t3);
          }, t2.prototype.removeComponent = function(t3, e2) {
            for (var n2 in this._queries)
              this._queries[n2].matches(t3.types.concat([e2.type])) && this._queries[n2].removeEntity(t3);
          }, t2.prototype.removeEntity = function(t3) {
            for (var e2 in this._queries)
              this._queries[e2].entities.indexOf(t3) > -1 && this._queries[e2].removeEntity(t3);
          }, t2.prototype.createQuery = function(t3) {
            var e2 = this.getQuery(t3);
            if (e2)
              return e2;
            var n2 = new _i(t3);
            return this._addQuery(n2), n2;
          }, t2.prototype.getQuery = function(t3) {
            var e2 = hi(t3);
            return this._queries[e2] ? this._queries[e2] : null;
          }, t2;
        }(), mi = function() {
          function t2(t3) {
            this._scene = t3, this.entities = [], this._entityIndex = {};
          }
          return t2.prototype.notify = function(t3) {
            dn(t3) && this._scene.queryManager.addEntity(t3.data.entity), yn(t3) && this._scene.queryManager.removeComponent(t3.data.entity, t3.data.component);
          }, t2.prototype.addEntity = function(t3) {
            t3 && (this._entityIndex[t3.id] = t3, this.entities.push(t3), this._scene.queryManager.addEntity(t3), t3.changes.register(this));
          }, t2.prototype.removeEntity = function(t3) {
            var e2 = 0;
            e2 = t3 instanceof gn ? t3.id : t3;
            var n2 = this._entityIndex[e2];
            delete this._entityIndex[e2], n2 && (h.removeItemFromArray(n2, this.entities), this._scene.queryManager.removeEntity(n2), n2.changes.unregister(this));
          }, t2.prototype.processRemovals = function() {
            for (var t3 = 0, e2 = this.entities; t3 < e2.length; t3++) {
              e2[t3].processRemoval();
            }
          }, t2.prototype.getById = function(t3) {
            return this._entityIndex[t3];
          }, t2;
        }(), bi = function() {
          function t2(t3) {
            this._scene = t3, this.systems = [];
          }
          return t2.prototype.addSystem = function(t3) {
            if (!t3.types || 0 === t3.types.length)
              throw new Error("Attempted to add a System without any types");
            var e2 = this._scene.queryManager.createQuery(t3.types);
            this.systems.push(t3), this.systems.sort(function(t4, e3) {
              return t4.priority - e3.priority;
            }), e2.register(t3);
          }, t2.prototype.removeSystem = function(t3) {
            h.removeItemFromArray(t3, this.systems);
            var e2 = this._scene.queryManager.getQuery(t3.types);
            e2 && (e2.unregister(t3), this._scene.queryManager.maybeRemoveQuery(e2));
          }, t2.prototype.updateSystems = function(t3, e2, n2) {
            for (var i2 = this.systems.filter(function(e3) {
              return e3.systemType === t3;
            }), r2 = 0, o2 = i2; r2 < o2.length; r2++) {
              (c2 = o2[r2]).preupdate && c2.preupdate(e2, n2);
            }
            for (var s2 = 0, a2 = i2; s2 < a2.length; s2++) {
              var c2 = a2[s2], h2 = this._scene.queryManager.getQuery(c2.types).entities;
              c2.update(h2, n2);
            }
            for (var u2 = 0, l2 = i2; u2 < l2.length; u2++) {
              (c2 = l2[u2]).postupdate && c2.postupdate(e2, n2);
            }
          }, t2;
        }(), wi = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), xi = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.actors = [], n2.queryManager = new vi(n2), n2.entityManager = new mi(n2), n2.systemManager = new bi(n2), n2._bodies = [], n2.triggers = [], n2.tileMaps = [], n2.screenElements = [], n2._isInitialized = false, n2._sortedDrawingTree = new Un(bn.prototype.getZIndex), n2._broadphase = new Hn(), n2._killQueue = [], n2._triggerKillQueue = [], n2._timers = [], n2._cancelQueue = [], n2._logger = R.getInstance(), n2.camera = new ei(), n2._engine = e3, e3 && (n2.camera.x = e3.halfDrawWidth, n2.camera.y = e3.halfDrawHeight), n2;
          }
          return wi(e2, t2), e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.once = function(e3, n2) {
            t2.prototype.once.call(this, e3, n2);
          }, e2.prototype.off = function(e3, n2) {
            t2.prototype.off.call(this, e3, n2);
          }, e2.prototype.onInitialize = function(t3) {
          }, e2.prototype.onActivate = function(t3, e3) {
          }, e2.prototype.onDeactivate = function(t3, e3) {
          }, e2.prototype.onPreUpdate = function(t3, e3) {
          }, e2.prototype.onPostUpdate = function(t3, e3) {
          }, e2.prototype.onPreDraw = function(t3, e3) {
          }, e2.prototype.onPostDraw = function(t3, e3) {
          }, e2.prototype._initializeChildren = function() {
            for (var t3 = 0, e3 = this.actors; t3 < e3.length; t3++) {
              e3[t3]._initialize(this._engine);
            }
          }, Object.defineProperty(e2.prototype, "isInitialized", { get: function() {
            return this._isInitialized;
          }, enumerable: false, configurable: true }), e2.prototype._initialize = function(t3) {
            this.isInitialized || (this._engine = t3, this.camera && (this.camera.x = t3.halfDrawWidth, this.camera.y = t3.halfDrawHeight), this.onInitialize.call(this, t3), this._initializeChildren(), this._logger.debug("Scene.onInitialize", this, t3), this.eventDispatcher.emit("initialize", new jt(t3, this)), this._isInitialized = true);
          }, e2.prototype._activate = function(t3, e3) {
            this._logger.debug("Scene.onActivate", this), this.onActivate(t3, e3);
          }, e2.prototype._deactivate = function(t3, e3) {
            this._logger.debug("Scene.onDeactivate", this), this.onDeactivate(t3, e3);
          }, e2.prototype._preupdate = function(t3, e3) {
            this.emit("preupdate", new mt(t3, e3, this)), this.onPreUpdate(t3, e3);
          }, e2.prototype._postupdate = function(t3, e3) {
            this.emit("postupdate", new bt(t3, e3, this)), this.onPostUpdate(t3, e3);
          }, e2.prototype._predraw = function(t3, e3) {
            this.emit("predraw", new yt(t3, e3, this)), this.onPreDraw(t3, e3);
          }, e2.prototype._postdraw = function(t3, e3) {
            this.emit("postdraw", new gt(t3, e3, this)), this.onPostDraw(t3, e3);
          }, e2.prototype.update = function(t3, e3) {
            var n2, i2;
            for (this._preupdate(t3, e3), this.systemManager.updateSystems(ci.Update, t3, e3), this.entityManager.processRemovals(), this.camera && this.camera.update(t3, e3), n2 = 0, i2 = this._cancelQueue.length; n2 < i2; n2++)
              this.removeTimer(this._cancelQueue[n2]);
            this._cancelQueue.length = 0;
            for (var r2 = 0, o2 = this._timers; r2 < o2.length; r2++) {
              o2[r2].update(e3);
            }
            for (n2 = 0, i2 = this.screenElements.length; n2 < i2; n2++)
              this.screenElements[n2].update(t3, e3);
            for (n2 = 0, i2 = this.tileMaps.length; n2 < i2; n2++)
              this.tileMaps[n2].update(t3, e3);
            for (n2 = 0, i2 = this.actors.length; n2 < i2; n2++)
              this.actors[n2].update(t3, e3), this._bodies[n2] = this.actors[n2].body;
            for (n2 = 0, i2 = this.triggers.length; n2 < i2; n2++)
              this.triggers[n2].update(t3, e3);
            if (this._collectActorStats(t3), t3.input.pointers.dispatchPointerEvents(), this._broadphase && st.enabled) {
              var s2 = Date.now();
              this._broadphase.update(this._bodies, e3);
              for (var a2 = this._broadphase.broadphase(this._bodies, e3, t3.stats.currFrame), c2 = Date.now(), h2 = Date.now(), u2 = st.collisionPasses, l2 = e3 / u2; u2 > 0; )
                a2 = this._broadphase.narrowphase(a2, t3.stats.currFrame), a2 = this._broadphase.resolve(a2, l2, st.collisionResolutionStrategy), this._broadphase.runCollisionStartEnd(a2), u2--;
              var p2 = Date.now();
              t3.stats.currFrame.physics.broadphase = c2 - s2, t3.stats.currFrame.physics.narrowphase = p2 - h2;
            }
            t3.stats.currFrame.actors.killed = this._killQueue.length + this._triggerKillQueue.length, this._processKillQueue(this._killQueue, this.actors), this._processKillQueue(this._triggerKillQueue, this.triggers), this._postupdate(t3, e3);
          }, e2.prototype._processKillQueue = function(t3, e3) {
            for (var n2, i2 = 0, r2 = t3; i2 < r2.length; i2++) {
              var o2 = r2[i2];
              o2.isKilled() && (n2 = e3.indexOf(o2)) > -1 && (this._sortedDrawingTree.removeByComparable(o2), e3.splice(n2, 1));
            }
            t3.length = 0;
          }, e2.prototype.draw = function(t3, e3) {
            var n2, i2;
            for (this._predraw(t3, e3), t3.save(), this.camera && this.camera.draw(t3), this.systemManager.updateSystems(ci.Draw, this._engine, e3), this.entityManager.processRemovals(), n2 = 0, i2 = this.tileMaps.length; n2 < i2; n2++)
              this.tileMaps[n2].draw(t3, e3);
            var r2 = this._sortedDrawingTree.list();
            for (n2 = 0, i2 = r2.length; n2 < i2; n2++)
              r2[n2].visible && !r2[n2].isOffScreen && r2[n2].draw(t3, e3);
            for (this._engine && this._engine.isDebug && (t3.strokeStyle = "yellow", this.debugDraw(t3)), t3.restore(), n2 = 0, i2 = this.screenElements.length; n2 < i2; n2++)
              this.screenElements[n2].visible && this.screenElements[n2].draw(t3, e3);
            if (this._engine && this._engine.isDebug)
              for (n2 = 0, i2 = this.screenElements.length; n2 < i2; n2++)
                this.screenElements[n2].debugDraw(t3);
            this._postdraw(t3, e3);
          }, e2.prototype.debugDraw = function(t3) {
            var e3, n2;
            for (this.emit("predebugdraw", new _t(t3, this)), e3 = 0, n2 = this.tileMaps.length; e3 < n2; e3++)
              this.tileMaps[e3].debugDraw(t3);
            for (e3 = 0, n2 = this.actors.length; e3 < n2; e3++)
              this.actors[e3].debugDraw(t3);
            for (e3 = 0, n2 = this.triggers.length; e3 < n2; e3++)
              this.triggers[e3].debugDraw(t3);
            this._broadphase.debugDraw(t3, 20), this.camera.debugDraw(t3), this.emit("postdebugdraw", new vt(t3, this));
          }, e2.prototype.contains = function(t3) {
            return this.actors.indexOf(t3) > -1;
          }, e2.prototype.add = function(t3) {
            t3 instanceof bn && t3.unkill(), t3 instanceof Pn ? O(this.screenElements, t3) || this.addScreenElement(t3) : t3 instanceof bn ? O(this.actors, t3) || this._addChild(t3) : t3 instanceof En ? O(this._timers, t3) || this.addTimer(t3) : t3 instanceof Cn && (O(this.tileMaps, t3) || this.addTileMap(t3));
          }, e2.prototype.remove = function(t3) {
            t3 instanceof Pn ? this.removeScreenElement(t3) : (t3 instanceof bn && this._removeChild(t3), t3 instanceof En && this.removeTimer(t3), t3 instanceof Cn && this.removeTileMap(t3));
          }, e2.prototype.addScreenElement = function(t3) {
            this.screenElements.push(t3), t3.scene = this;
          }, e2.prototype.removeScreenElement = function(t3) {
            var e3 = this.screenElements.indexOf(t3);
            e3 > -1 && this.screenElements.splice(e3, 1);
          }, e2.prototype._addChild = function(t3) {
            this._broadphase.track(t3.body), t3.scene = this, t3 instanceof si ? this.triggers.push(t3) : this.actors.push(t3), this._sortedDrawingTree.add(t3);
          }, e2.prototype.addTileMap = function(t3) {
            this.tileMaps.push(t3);
          }, e2.prototype.removeTileMap = function(t3) {
            var e3 = this.tileMaps.indexOf(t3);
            e3 > -1 && this.tileMaps.splice(e3, 1);
          }, e2.prototype._removeChild = function(t3) {
            O(this.actors, t3) && (this._broadphase.untrack(t3.body), t3 instanceof si ? this._triggerKillQueue.push(t3) : (t3.isKilled() || t3.kill(), this._killQueue.push(t3)), t3.parent = null);
          }, e2.prototype.addTimer = function(t3) {
            return this._timers.push(t3), t3.scene = this, t3;
          }, e2.prototype.removeTimer = function(t3) {
            var e3 = this._timers.indexOf(t3);
            return -1 !== e3 && this._timers.splice(e3, 1), t3;
          }, e2.prototype.cancelTimer = function(t3) {
            return this._cancelQueue.push(t3), t3;
          }, e2.prototype.isTimerActive = function(t3) {
            return this._timers.indexOf(t3) > -1 && !t3.complete;
          }, e2.prototype.cleanupDrawTree = function(t3) {
            this._sortedDrawingTree.removeByComparable(t3);
          }, e2.prototype.updateDrawTree = function(t3) {
            this._sortedDrawingTree.add(t3);
          }, e2.prototype.isActorInDrawTree = function(t3) {
            return this._sortedDrawingTree.find(t3);
          }, e2.prototype.isCurrentScene = function() {
            return !!this._engine && this._engine.currentScene === this;
          }, e2.prototype._collectActorStats = function(t3) {
            for (var e3 = 0, n2 = this.screenElements; e3 < n2.length; e3++) {
              n2[e3];
              t3.stats.currFrame.actors.ui++;
            }
            for (var i2 = 0, r2 = this.actors; i2 < r2.length; i2++) {
              var o2 = r2[i2];
              t3.stats.currFrame.actors.alive++;
              for (var s2 = 0, a2 = o2.children; s2 < a2.length; s2++) {
                ai(a2[s2]) ? t3.stats.currFrame.actors.ui++ : t3.stats.currFrame.actors.alive++;
              }
            }
          }, e2;
        }(ee);
        !function(t2) {
          t2[t2.Protanope = 0] = "Protanope", t2[t2.Deuteranope = 1] = "Deuteranope", t2[t2.Tritanope = 2] = "Tritanope";
        }(yi || (yi = {}));
        var Pi, Ai = function() {
          function t2(t3, e2, n2) {
            void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = yi.Protanope), this.engine = t3, this.simulate = e2, this.colorMode = n2, this._vertexShader = "attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}", this._fragmentShader = "precision mediump float;uniform sampler2D u_image;varying vec2 v_texCoord;void main() {vec4 o =  texture2D(u_image, v_texCoord);float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);//MODE CODE//vec4 error;error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);error.a = 1.0;vec4 diff = o - error;vec4 correction;correction.r = 0.0;correction.g =  (diff.r * 0.7) + (diff.g * 1.0);correction.b =  (diff.r * 0.7) + (diff.b * 1.0);correction = o + correction;correction.a = o.a;//SIMULATE//}", this._internalCanvas = document.createElement("canvas"), this._internalCanvas.width = t3.drawWidth, this._internalCanvas.height = t3.drawHeight, this._gl = this._internalCanvas.getContext("webgl", { preserveDrawingBuffer: true }), this._program = this._gl.createProgram();
            var i2 = this._getShader("Fragment", this._getFragmentShaderByMode(n2)), r2 = this._getShader("Vertex", this._vertexShader);
            this._gl.attachShader(this._program, r2), this._gl.attachShader(this._program, i2), this._gl.linkProgram(this._program), this._gl.getProgramParameter(this._program, this._gl.LINK_STATUS) || R.getInstance().error("Unable to link shader program!"), this._gl.useProgram(this._program);
          }
          return t2.prototype._getFragmentShaderByMode = function(t3) {
            var e2 = "";
            return t3 === yi.Protanope ? e2 = "float l = 0.0 * L + 2.02344 * M + -2.52581 * S;float m = 0.0 * L + 1.0 * M + 0.0 * S;float s = 0.0 * L + 0.0 * M + 1.0 * S;" : t3 === yi.Deuteranope ? e2 = "float l = 1.0 * L + 0.0 * M + 0.0 * S;float m = 0.494207 * L + 0.0 * M + 1.24827 * S;float s = 0.0 * L + 0.0 * M + 1.0 * S;" : t3 === yi.Tritanope && (e2 = "float l = 1.0 * L + 0.0 * M + 0.0 * S;float m = 0.0 * L + 1.0 * M + 0.0 * S;float s = -0.395913 * L + 0.801109 * M + 0.0 * S;"), this.simulate ? this._fragmentShader = this._fragmentShader.replace("//SIMULATE//", "gl_FragColor = error.rgba;") : this._fragmentShader = this._fragmentShader.replace("//SIMULATE//", "gl_FragColor = correction.rgba;"), this._fragmentShader.replace("//MODE CODE//", e2);
          }, t2.prototype._setRectangle = function(t3, e2, n2, i2) {
            var r2 = t3, o2 = t3 + n2, s2 = e2, a2 = e2 + i2;
            this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array([r2, s2, o2, s2, r2, a2, r2, a2, o2, s2, o2, a2]), this._gl.STATIC_DRAW);
          }, t2.prototype._getShader = function(t3, e2) {
            var n2;
            return "Fragment" === t3 ? n2 = this._gl.createShader(this._gl.FRAGMENT_SHADER) : "Vertex" === t3 ? n2 = this._gl.createShader(this._gl.VERTEX_SHADER) : R.getInstance().error("Error unknown shader type", t3), this._gl.shaderSource(n2, e2), this._gl.compileShader(n2), this._gl.getShaderParameter(n2, this._gl.COMPILE_STATUS) ? n2 : (R.getInstance().error("Unable to compile shader!", this._gl.getShaderInfoLog(n2)), null);
          }, t2.prototype.process = function(t3, e2) {
            var n2 = this._gl.getAttribLocation(this._program, "a_position"), i2 = this._gl.getAttribLocation(this._program, "a_texCoord"), r2 = this._gl.createBuffer();
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, r2), this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), this._gl.STATIC_DRAW), this._gl.enableVertexAttribArray(i2), this._gl.vertexAttribPointer(i2, 2, this._gl.FLOAT, false, 0, 0);
            var o2 = this._gl.createTexture();
            this._gl.bindTexture(this._gl.TEXTURE_2D, o2), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, 1), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, t3);
            var s2 = this._gl.getUniformLocation(this._program, "u_resolution");
            this._gl.uniform2f(s2, this._internalCanvas.width, this._internalCanvas.height);
            var a2 = this._gl.createBuffer();
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a2), this._gl.enableVertexAttribArray(n2), this._gl.vertexAttribPointer(n2, 2, this._gl.FLOAT, false, 0, 0), this._setRectangle(0, 0, t3.width, t3.height), this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
            var c2 = new Uint8Array(t3.width * t3.height * 4);
            this._gl.readPixels(0, 0, t3.width, t3.height, this._gl.RGBA, this._gl.UNSIGNED_BYTE, c2), t3.data.set(c2), e2.putImageData(t3, 0, 0);
          }, t2;
        }(), Ei = function() {
          function t2(t3) {
            this._engine = t3;
          }
          return t2.prototype.correct = function(t3) {
            this._engine.postProcessors.push(new Ai(this._engine, false, t3));
          }, t2.prototype.simulate = function(t3) {
            this._engine.postProcessors.push(new Ai(this._engine, true, t3));
          }, t2;
        }(), Si = function(t2) {
          this.stats = { currFrame: new Ci(), prevFrame: new Ci() }, this._engine = t2, this.colorBlindMode = new Ei(this._engine);
        }, Ci = function() {
          function t2() {
            this._id = 0, this._delta = 0, this._fps = 0, this._actorStats = { alive: 0, killed: 0, ui: 0, get remaining() {
              return this.alive - this.killed;
            }, get total() {
              return this.remaining + this.ui;
            } }, this._durationStats = { update: 0, draw: 0, get total() {
              return this.update + this.draw;
            } }, this._physicsStats = new Oi();
          }
          return t2.prototype.reset = function(t3) {
            t3 ? (this.id = t3.id, this.delta = t3.delta, this.fps = t3.fps, this.actors.alive = t3.actors.alive, this.actors.killed = t3.actors.killed, this.actors.ui = t3.actors.ui, this.duration.update = t3.duration.update, this.duration.draw = t3.duration.draw, this._physicsStats.reset(t3.physics)) : (this.id = this.delta = this.fps = 0, this.actors.alive = this.actors.killed = this.actors.ui = 0, this.duration.update = this.duration.draw = 0, this._physicsStats.reset());
          }, t2.prototype.clone = function() {
            var e2 = new t2();
            return e2.reset(this), e2;
          }, Object.defineProperty(t2.prototype, "id", { get: function() {
            return this._id;
          }, set: function(t3) {
            this._id = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "delta", { get: function() {
            return this._delta;
          }, set: function(t3) {
            this._delta = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fps", { get: function() {
            return this._fps;
          }, set: function(t3) {
            this._fps = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "actors", { get: function() {
            return this._actorStats;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "duration", { get: function() {
            return this._durationStats;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "physics", { get: function() {
            return this._physicsStats;
          }, enumerable: false, configurable: true }), t2;
        }(), Oi = function() {
          function t2() {
            this._pairs = 0, this._collisions = 0, this._collidersHash = {}, this._fastBodies = 0, this._fastBodyCollisions = 0, this._broadphase = 0, this._narrowphase = 0;
          }
          return t2.prototype.reset = function(t3) {
            t3 ? (this.pairs = t3.pairs, this.collisions = t3.collisions, this.collidersHash = t3.collidersHash, this.fastBodies = t3.fastBodies, this.fastBodyCollisions = t3.fastBodyCollisions, this.broadphase = t3.broadphase, this.narrowphase = t3.narrowphase) : (this.pairs = this.collisions = this.fastBodies = 0, this.fastBodyCollisions = this.broadphase = this.narrowphase = 0, this.collidersHash = {});
          }, t2.prototype.clone = function() {
            var e2 = new t2();
            return e2.reset(this), e2;
          }, Object.defineProperty(t2.prototype, "pairs", { get: function() {
            return this._pairs;
          }, set: function(t3) {
            this._pairs = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "collisions", { get: function() {
            return this._collisions;
          }, set: function(t3) {
            this._collisions = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "collidersHash", { get: function() {
            return this._collidersHash;
          }, set: function(t3) {
            this._collidersHash = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fastBodies", { get: function() {
            return this._fastBodies;
          }, set: function(t3) {
            this._fastBodies = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fastBodyCollisions", { get: function() {
            return this._fastBodyCollisions;
          }, set: function(t3) {
            this._fastBodyCollisions = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "broadphase", { get: function() {
            return this._broadphase;
          }, set: function(t3) {
            this._broadphase = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "narrowphase", { get: function() {
            return this._narrowphase;
          }, set: function(t3) {
            this._narrowphase = t3;
          }, enumerable: false, configurable: true }), t2;
        }(), Ti = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }();
        !function(t2) {
          t2[t2.Num1 = 97] = "Num1", t2[t2.Num2 = 98] = "Num2", t2[t2.Num3 = 99] = "Num3", t2[t2.Num4 = 100] = "Num4", t2[t2.Num5 = 101] = "Num5", t2[t2.Num6 = 102] = "Num6", t2[t2.Num7 = 103] = "Num7", t2[t2.Num8 = 104] = "Num8", t2[t2.Num9 = 105] = "Num9", t2[t2.Num0 = 96] = "Num0", t2[t2.Numlock = 144] = "Numlock", t2[t2.Semicolon = 186] = "Semicolon", t2[t2.A = 65] = "A", t2[t2.B = 66] = "B", t2[t2.C = 67] = "C", t2[t2.D = 68] = "D", t2[t2.E = 69] = "E", t2[t2.F = 70] = "F", t2[t2.G = 71] = "G", t2[t2.H = 72] = "H", t2[t2.I = 73] = "I", t2[t2.J = 74] = "J", t2[t2.K = 75] = "K", t2[t2.L = 76] = "L", t2[t2.M = 77] = "M", t2[t2.N = 78] = "N", t2[t2.O = 79] = "O", t2[t2.P = 80] = "P", t2[t2.Q = 81] = "Q", t2[t2.R = 82] = "R", t2[t2.S = 83] = "S", t2[t2.T = 84] = "T", t2[t2.U = 85] = "U", t2[t2.V = 86] = "V", t2[t2.W = 87] = "W", t2[t2.X = 88] = "X", t2[t2.Y = 89] = "Y", t2[t2.Z = 90] = "Z", t2[t2.Shift = 16] = "Shift", t2[t2.Alt = 18] = "Alt", t2[t2.Up = 38] = "Up", t2[t2.Down = 40] = "Down", t2[t2.Left = 37] = "Left", t2[t2.Right = 39] = "Right", t2[t2.Space = 32] = "Space", t2[t2.Esc = 27] = "Esc";
        }(Pi || (Pi = {}));
        var Bi, Mi, Di = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2.key = e3, n2;
          }
          return Ti(e2, t2), e2;
        }(ht), ki = function(t2) {
          function e2() {
            var e3 = t2.call(this) || this;
            return e3._keys = [], e3._keysUp = [], e3._keysDown = [], e3;
          }
          return Ti(e2, t2), e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.init = function(t3) {
            var e3 = this;
            if (!t3)
              try {
                var n2 = function() {
                };
                window.top.addEventListener("blur", n2), window.top.removeEventListener("blur", n2), t3 = window.top;
              } catch (e4) {
                t3 = window, R.getInstance().warn("Failed to bind to keyboard events to top frame. If you are trying to embed Excalibur in a cross-origin iframe, keyboard events will not fire.");
              }
            t3.addEventListener("blur", function() {
              e3._keys.length = 0;
            }), t3.addEventListener("keyup", function(t4) {
              var n3 = e3._normalizeKeyCode(t4.keyCode), i2 = e3._keys.indexOf(n3);
              e3._keys.splice(i2, 1), e3._keysUp.push(n3);
              var r2 = new Di(n3);
              e3.eventDispatcher.emit("up", r2), e3.eventDispatcher.emit("release", r2);
            }), t3.addEventListener("keydown", function(t4) {
              var n3 = e3._normalizeKeyCode(t4.keyCode);
              if (-1 === e3._keys.indexOf(n3)) {
                e3._keys.push(n3), e3._keysDown.push(n3);
                var i2 = new Di(n3);
                e3.eventDispatcher.emit("down", i2), e3.eventDispatcher.emit("press", i2);
              }
            });
          }, e2.prototype.update = function() {
            this._keysDown.length = 0, this._keysUp.length = 0;
            for (var t3 = 0; t3 < this._keys.length; t3++)
              this.eventDispatcher.emit("hold", new Di(this._keys[t3]));
          }, e2.prototype.getKeys = function() {
            return this._keys;
          }, e2.prototype.wasPressed = function(t3) {
            return this._keysDown.indexOf(t3) > -1;
          }, e2.prototype.isHeld = function(t3) {
            return this._keys.indexOf(t3) > -1;
          }, e2.prototype.wasReleased = function(t3) {
            return this._keysUp.indexOf(t3) > -1;
          }, e2.prototype._normalizeKeyCode = function(t3) {
            switch (t3) {
              case 59:
                return Pi.Semicolon;
              default:
                return t3;
            }
          }, e2;
        }(ee), Ri = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), ji = function() {
          for (var t2 = 0, e2 = 0, n2 = arguments.length; e2 < n2; e2++)
            t2 += arguments[e2].length;
          var i2 = Array(t2), r2 = 0;
          for (e2 = 0; e2 < n2; e2++)
            for (var o2 = arguments[e2], s2 = 0, a2 = o2.length; s2 < a2; s2++, r2++)
              i2[r2] = o2[s2];
          return i2;
        };
        !function(t2) {
          t2.Touch = "Touch", t2.Mouse = "Mouse", t2.Pen = "Pen", t2.Unknown = "Unknown";
        }(Bi || (Bi = {})), function(t2) {
          t2.Canvas = "Canvas", t2.Document = "Document";
        }(Mi || (Mi = {}));
        var Fi, Ii, Li, zi = function(t2) {
          function e2() {
            var n2 = t2.call(this) || this;
            return n2.id = e2._MAX_ID++, n2._isDown = false, n2._wasDown = false, n2._actorsUnderPointer = { length: 0 }, n2._actors = [], n2._actorsLastFrame = [], n2._actorsNoLongerUnderPointer = [], n2.lastPagePos = null, n2.lastScreenPos = null, n2.lastWorldPos = null, n2.dragTarget = null, n2.on("move", n2._onPointerMove), n2.on("down", n2._onPointerDown), n2.on("up", n2._onPointerUp), n2;
          }
          return Ri(e2, t2), Object.defineProperty(e2.prototype, "isDragging", { get: function() {
            return this._isDown;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isDragStart", { get: function() {
            return !this._wasDown && this._isDown;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isDragEnd", { get: function() {
            return this._wasDown && !this._isDown;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "hasActorsUnderPointer", { get: function() {
            return !!this._actorsUnderPointer.length;
          }, enumerable: false, configurable: true }), e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.once = function(e3, n2) {
            t2.prototype.once.call(this, e3, n2);
          }, e2.prototype.off = function(e3, n2) {
            t2.prototype.off.call(this, e3, n2);
          }, e2.prototype.update = function() {
            this._wasDown && !this._isDown ? this._wasDown = false : !this._wasDown && this._isDown && (this._wasDown = true), this._actorsLastFrame = ji(this._actors), this._actorsNoLongerUnderPointer = [];
          }, e2.prototype.addActorUnderPointer = function(t3) {
            this.isActorAliveUnderPointer(t3) || (this._actorsUnderPointer[t3.id] = t3, this._actorsUnderPointer.length += 1, this._actors.push(t3)), this._actors.sort(function(t4, e3) {
              return t4.z === e3.z ? t4.id - e3.id : t4.z - e3.z;
            });
          }, e2.prototype.removeActorUnderPointer = function(t3) {
            this.isActorAliveUnderPointer(t3) && (delete this._actorsUnderPointer[t3.id], this._actorsUnderPointer.length -= 1, C(t3, this._actors), this._actorsNoLongerUnderPointer.push(t3));
          }, e2.prototype.getActorsUnderPointer = function() {
            return this._actors;
          }, e2.prototype.getActorsUnderPointerLastFrame = function() {
            return this._actorsLastFrame;
          }, e2.prototype.getActorsForEvents = function() {
            return this._actors.concat(this._actorsLastFrame).filter(function(t3, e3, n2) {
              return n2.indexOf(t3) === e3;
            });
          }, e2.prototype.checkActorUnderPointer = function(t3) {
            return !!this.lastWorldPos && t3.contains(this.lastWorldPos.x, this.lastWorldPos.y, !ai(t3));
          }, e2.prototype.wasActorUnderPointer = function(t3) {
            return this._actorsLastFrame.indexOf(t3) > -1;
          }, e2.prototype.isActorAliveUnderPointer = function(t3) {
            return !(t3.isKilled() || !t3.scene || !this._actorsUnderPointer.hasOwnProperty(t3.id.toString()));
          }, e2.prototype._onPointerMove = function(t3) {
            this.lastPagePos = new V(t3.pagePos.x, t3.pagePos.y), this.lastScreenPos = new V(t3.screenPos.x, t3.screenPos.y), this.lastWorldPos = new V(t3.worldPos.x, t3.worldPos.y);
          }, e2.prototype._onPointerDown = function(t3) {
            this.lastPagePos = new V(t3.pagePos.x, t3.pagePos.y), this.lastScreenPos = new V(t3.screenPos.x, t3.screenPos.y), this.lastWorldPos = new V(t3.worldPos.x, t3.worldPos.y), this._isDown = true;
          }, e2.prototype._onPointerUp = function(t3) {
            this._isDown = false, this.dragTarget = null;
          }, e2._MAX_ID = 0, e2;
        }(ee), Hi = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }();
        !function(t2) {
          t2[t2.NoButton = -1] = "NoButton", t2[t2.Left = 0] = "Left", t2[t2.Middle = 1] = "Middle", t2[t2.Right = 2] = "Right", t2[t2.Unknown = 3] = "Unknown";
        }(Fi || (Fi = {})), function(t2) {
          t2.Left = "Left", t2.Middle = "Middle", t2.Right = "Right", t2.Unknown = "Unknown", t2.NoButton = "NoButton";
        }(Ii || (Ii = {})), function(t2) {
          t2.Pixel = "Pixel", t2.Line = "Line", t2.Page = "Page";
        }(Li || (Li = {}));
        var Ui = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2) {
            var a2 = t2.call(this) || this;
            return a2.coordinates = e3, a2.pointer = n2, a2.index = i2, a2.pointerType = r2, a2.button = o2, a2.ev = s2, a2;
          }
          return Hi(e2, t2), Object.defineProperty(e2.prototype, "name", { get: function() {
            return this._name;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "worldPos", { get: function() {
            return this.coordinates.worldPos.clone();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "pagePos", { get: function() {
            return this.coordinates.pagePos.clone();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "screenPos", { get: function() {
            return this.coordinates.screenPos.clone();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "pos", { get: function() {
            return this.coordinates.worldPos.clone();
          }, enumerable: false, configurable: true }), e2.prototype.propagate = function(t3) {
            this.doAction(t3), this.bubbles && t3.parent && this.propagate(t3.parent);
          }, e2.prototype.doAction = function(t3) {
            t3 && (this._onActionStart(t3), t3.emit(this._name, this), this._onActionEnd(t3));
          }, e2.prototype._onActionStart = function(t3) {
          }, e2.prototype._onActionEnd = function(t3) {
          }, e2;
        }(ht), Wi = function() {
          function t2(t3) {
            this._pointerEventType = t3;
          }
          return t2.prototype.create = function(t3, e2, n2, i2, r2, o2) {
            return new this._pointerEventType(t3, e2, n2, i2, r2, o2);
          }, t2;
        }(), Ni = function(t2) {
          function e2() {
            return null !== t2 && t2.apply(this, arguments) || this;
          }
          return Hi(e2, t2), e2;
        }(Ui), qi = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._name = "pointerup", e3;
          }
          return Hi(e2, t2), e2.prototype._onActionEnd = function(t3) {
            this.pointer.isDragEnd && t3.capturePointer.captureDragEvents && t3.eventDispatcher.emit("pointerdragend", this);
          }, e2;
        }(Ui), Vi = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._name = "pointerdown", e3;
          }
          return Hi(e2, t2), e2.prototype._onActionEnd = function(t3) {
            this.pointer.isDragStart && t3.capturePointer.captureDragEvents && t3.eventDispatcher.emit("pointerdragstart", this);
          }, e2;
        }(Ui), Gi = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._name = "pointermove", e3;
          }
          return Hi(e2, t2), e2.prototype.propagate = function(t3) {
            this.pointer.isActorAliveUnderPointer(t3) && (this.doAction(t3), this.bubbles && t3.parent && this.propagate(t3.parent));
          }, e2.prototype._onActionStart = function(t3) {
            t3.capturePointer.captureMoveEvents && this.pointer.isDragging && t3.capturePointer.captureDragEvents && t3.eventDispatcher.emit("pointerdragmove", this);
          }, e2;
        }(Ui), Xi = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._name = "pointerenter", e3;
          }
          return Hi(e2, t2), e2.prototype._onActionStart = function(t3) {
            t3.capturePointer.captureMoveEvents;
          }, e2.prototype._onActionEnd = function(t3) {
            this.pointer.isDragging && t3.capturePointer.captureDragEvents && t3.eventDispatcher.emit("pointerdragenter", this);
          }, e2;
        }(Ui), Qi = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._name = "pointerleave", e3;
          }
          return Hi(e2, t2), e2.prototype._onActionStart = function(t3) {
            t3.capturePointer.captureMoveEvents;
          }, e2.prototype._onActionEnd = function(t3) {
            this.pointer.isDragging && t3.capturePointer.captureDragEvents && t3.eventDispatcher.emit("pointerdragleave", this);
          }, e2;
        }(Ui), Zi = function(t2) {
          function e2() {
            var e3 = null !== t2 && t2.apply(this, arguments) || this;
            return e3._name = "pointercancel", e3;
          }
          return Hi(e2, t2), e2;
        }(Ui), Ki = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2, a2, c2, h2, u2, l2, p2) {
            var d2 = t2.call(this) || this;
            return d2.x = e3, d2.y = n2, d2.pageX = i2, d2.pageY = r2, d2.screenX = o2, d2.screenY = s2, d2.index = a2, d2.deltaX = c2, d2.deltaY = h2, d2.deltaZ = u2, d2.deltaMode = l2, d2.ev = p2, d2;
          }
          return Hi(e2, t2), e2;
        }(ht);
        function Yi(t2, e2, n2, i2, r2, o2, s2) {
          var a2;
          switch (t2) {
            case "up":
              a2 = new Wi(qi);
              break;
            case "down":
              a2 = new Wi(Vi);
              break;
            case "move":
              a2 = new Wi(Gi);
              break;
            case "cancel":
              a2 = new Wi(Zi);
              break;
            case "enter":
              a2 = new Wi(Xi);
              break;
            case "leave":
              a2 = new Wi(Qi);
          }
          return a2.create(e2, n2, i2, r2, o2, s2);
        }
        var Ji, $i, tr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), er = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this) || this;
            return n2._pointerDown = [], n2._pointerUp = [], n2._pointerMove = [], n2._pointerCancel = [], n2._wheel = [], n2._pointers = [], n2._activePointers = [], n2._engine = e3, n2._pointers.push(new zi()), n2._activePointers = [-1], n2.primary = n2._pointers[0], n2;
          }
          return tr(e2, t2), e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.init = function(t3) {
            (t3 = t3 || this._engine.canvas).addEventListener("touchstart", this._handleTouchEvent("down", this._pointerDown)), t3.addEventListener("touchend", this._handleTouchEvent("up", this._pointerUp)), t3.addEventListener("touchmove", this._handleTouchEvent("move", this._pointerMove)), t3.addEventListener("touchcancel", this._handleTouchEvent("cancel", this._pointerCancel)), window.PointerEvent ? (this._engine.canvas.style.touchAction = "none", t3.addEventListener("pointerdown", this._handlePointerEvent("down", this._pointerDown)), t3.addEventListener("pointerup", this._handlePointerEvent("up", this._pointerUp)), t3.addEventListener("pointermove", this._handlePointerEvent("move", this._pointerMove)), t3.addEventListener("pointercancel", this._handlePointerEvent("cancel", this._pointerCancel))) : window.MSPointerEvent ? (this._engine.canvas.style.msTouchAction = "none", t3.addEventListener("MSPointerDown", this._handlePointerEvent("down", this._pointerDown)), t3.addEventListener("MSPointerUp", this._handlePointerEvent("up", this._pointerUp)), t3.addEventListener("MSPointerMove", this._handlePointerEvent("move", this._pointerMove)), t3.addEventListener("MSPointerCancel", this._handlePointerEvent("cancel", this._pointerCancel))) : (t3.addEventListener("mousedown", this._handleMouseEvent("down", this._pointerDown)), t3.addEventListener("mouseup", this._handleMouseEvent("up", this._pointerUp)), t3.addEventListener("mousemove", this._handleMouseEvent("move", this._pointerMove)));
            var e3 = { passive: !(this._engine.pageScrollPreventionMode === or.All || this._engine.pageScrollPreventionMode === or.Canvas) };
            "onwheel" in document.createElement("div") ? t3.addEventListener("wheel", this._handleWheelEvent("wheel", this._wheel), e3) : void 0 !== document.onmousewheel ? t3.addEventListener("mousewheel", this._handleWheelEvent("wheel", this._wheel), e3) : t3.addEventListener("MozMousePixelScroll", this._handleWheelEvent("wheel", this._wheel), e3);
          }, e2.prototype.triggerEvent = function(t3, e3, n2, i2, r2) {
            void 0 === n2 && (n2 = Fi.Left), void 0 === i2 && (i2 = "mouse"), void 0 === r2 && (r2 = 0);
            var o2, s2 = 0, a2 = 0;
            e3 instanceof Z ? (s2 = e3.pagePos.x, a2 = e3.pagePos.y, o2 = e3) : (s2 = e3.x, a2 = e3.y, o2 = new Z(e3.clone(), e3.clone(), e3.clone()));
            var c2 = { pageX: s2, pageY: a2, pointerId: r2, pointerType: i2, button: n2, preventDefault: function() {
            } };
            switch (t3) {
              case "move":
                this._handlePointerEvent(t3, this._pointerMove, o2)(c2);
                break;
              case "down":
                this._handlePointerEvent(t3, this._pointerDown, o2)(c2);
                break;
              case "up":
                this._handlePointerEvent(t3, this._pointerUp, o2)(c2);
                break;
              case "cancel":
                this._handlePointerEvent(t3, this._pointerCancel, o2)(c2);
            }
            for (var h2 = 0, u2 = this._engine.currentScene.actors; h2 < u2.length; h2++) {
              var l2 = u2[h2], p2 = l2.traits.filter(function(t4) {
                return t4 instanceof Ke;
              })[0];
              p2 && p2.update(l2, this._engine, 1);
            }
            this.dispatchPointerEvents(), this.update();
          }, e2.prototype.update = function() {
            this._pointerUp.length = 0, this._pointerDown.length = 0, this._pointerMove.length = 0, this._pointerCancel.length = 0, this._wheel.length = 0;
            for (var t3 = 0; t3 < this._pointers.length; t3++)
              this._pointers[t3].update();
          }, e2.prototype.at = function(t3) {
            if (t3 >= this._pointers.length)
              for (var e3 = this._pointers.length - 1, n2 = t3; e3 < n2; e3++)
                this._pointers.push(new zi()), this._activePointers.push(-1);
            return this._pointers[t3];
          }, e2.prototype.count = function() {
            return this._pointers.length;
          }, e2.prototype.checkAndUpdateActorUnderPointer = function(t3) {
            for (var e3 = 0, n2 = this._pointers; e3 < n2.length; e3++) {
              var i2 = n2[e3];
              i2.checkActorUnderPointer(t3) ? i2.addActorUnderPointer(t3) : i2.removeActorUnderPointer(t3);
            }
          }, e2.prototype._dispatchWithBubble = function(t3) {
            for (var e3 = 0, n2 = t3; e3 < n2.length; e3++)
              for (var i2 = n2[e3], r2 = 0, o2 = i2.pointer.getActorsForEvents(); r2 < o2.length; r2++) {
                var s2 = o2[r2];
                if (i2.propagate(s2), !i2.bubbles)
                  break;
              }
          }, e2.prototype._dispatchPointerLeaveEvents = function() {
            for (var t3 = {}, e3 = [], n2 = 0, i2 = this._pointerMove; n2 < i2.length; n2++)
              for (var r2 = i2[n2], o2 = 0, s2 = r2.pointer.getActorsForEvents(); o2 < s2.length; o2++) {
                var a2 = s2[o2];
                if (!t3[r2.pointer.id + "+" + a2.id] && r2.pointer.wasActorUnderPointer(a2) && !r2.pointer.isActorAliveUnderPointer(a2)) {
                  t3[r2.pointer.id + "+" + a2.id] = r2;
                  var c2 = Yi("leave", new Z(r2.worldPos, r2.pagePos, r2.screenPos), r2.pointer, r2.index, r2.pointerType, r2.button, r2.ev);
                  c2.propagate(a2), e3.push(c2);
                }
              }
            return e3;
          }, e2.prototype._dispatchPointerEnterEvents = function() {
            for (var t3 = {}, e3 = [], n2 = 0, i2 = this._pointerMove; n2 < i2.length; n2++)
              for (var r2 = i2[n2], o2 = 0, s2 = r2.pointer.getActorsForEvents(); o2 < s2.length; o2++) {
                var a2 = s2[o2];
                if (!t3[r2.pointer.id] && !r2.pointer.wasActorUnderPointer(a2) && r2.pointer.isActorAliveUnderPointer(a2)) {
                  t3[r2.pointer.id] = r2;
                  var c2 = Yi("enter", new Z(r2.worldPos, r2.pagePos, r2.screenPos), r2.pointer, r2.index, r2.pointerType, r2.button, r2.ev);
                  c2.propagate(a2), e3.push(c2), r2.pointer.isDragging && (r2.pointer.dragTarget = a2);
                }
              }
            return e3;
          }, e2.prototype.dispatchPointerEvents = function() {
            this._dispatchWithBubble(this._pointerDown), this._dispatchWithBubble(this._pointerUp), this._dispatchWithBubble(this._pointerMove), this._dispatchPointerLeaveEvents(), this._dispatchPointerEnterEvents(), this._dispatchWithBubble(this._pointerCancel);
            for (var t3 = 0, e3 = this._wheel; t3 < e3.length; t3++)
              for (var n2 = e3[t3], i2 = 0, r2 = this._pointers[n2.index].getActorsUnderPointer(); i2 < r2.length; i2++) {
                var o2 = r2[i2];
                if (this._propagateWheelPointerEvent(o2, n2), !n2.bubbles)
                  break;
              }
          }, e2.prototype._propagateWheelPointerEvent = function(t3, e3) {
            t3.emit("pointerwheel", e3), e3.bubbles && t3.parent && this._propagateWheelPointerEvent(t3.parent, e3);
          }, e2.prototype._handleMouseEvent = function(t3, e3) {
            var n2 = this;
            return function(i2) {
              i2.preventDefault();
              var r2 = n2.at(0), o2 = Z.fromPagePosition(i2.pageX, i2.pageY, n2._engine), s2 = Yi(t3, o2, r2, 0, Bi.Mouse, n2._nativeButtonToPointerButton(i2.button), i2);
              e3.push(s2), r2.eventDispatcher.emit(t3, s2);
            };
          }, e2.prototype._handleTouchEvent = function(t3, e3) {
            var n2 = this;
            return function(i2) {
              i2.preventDefault();
              for (var r2 = 0, o2 = i2.changedTouches.length; r2 < o2; r2++) {
                var s2 = n2._pointers.length > 1 ? n2._getPointerIndex(i2.changedTouches[r2].identifier) : 0;
                if (-1 !== s2) {
                  var a2 = n2.at(s2), c2 = Z.fromPagePosition(i2.changedTouches[r2].pageX, i2.changedTouches[r2].pageY, n2._engine), h2 = Yi(t3, c2, a2, s2, Bi.Touch, Ii.Unknown, i2);
                  e3.push(h2), a2.eventDispatcher.emit(t3, h2), n2._pointers.length > 1 && ("up" === t3 ? n2._activePointers[s2] = -1 : "down" === t3 && (n2._activePointers[s2] = i2.changedTouches[r2].identifier));
                }
              }
            };
          }, e2.prototype._handlePointerEvent = function(t3, e3, n2) {
            var i2 = this;
            return function(r2) {
              r2.preventDefault();
              var o2 = i2._pointers.length > 1 ? i2._getPointerIndex(r2.pointerId) : 0;
              if (-1 !== o2) {
                var s2 = i2.at(o2), a2 = n2 || Z.fromPagePosition(r2.pageX, r2.pageY, i2._engine), c2 = Yi(t3, a2, s2, o2, i2._stringToPointerType(r2.pointerType), i2._nativeButtonToPointerButton(r2.button), r2);
                e3.push(c2), s2.eventDispatcher.emit(t3, c2), i2._pointers.length > 1 && ("up" === t3 ? i2._activePointers[o2] = -1 : "down" === t3 && (i2._activePointers[o2] = r2.pointerId));
              }
            };
          }, e2.prototype._handleWheelEvent = function(t3, e3) {
            var n2 = this;
            return function(i2) {
              (n2._engine.pageScrollPreventionMode === or.All || n2._engine.pageScrollPreventionMode === or.Canvas && i2.target === n2._engine.canvas) && i2.preventDefault();
              var r2 = i2.pageX - E(n2._engine.canvas).x, o2 = i2.pageY - E(n2._engine.canvas).y, s2 = n2._engine.screenToWorldCoordinates(new V(r2, o2)), a2 = i2.deltaX || -0.025 * i2.wheelDeltaX || 0, c2 = i2.deltaY || -0.025 * i2.wheelDeltaY || -0.025 * i2.wheelDelta || i2.detail || 0, h2 = i2.deltaZ || 0, u2 = Li.Pixel;
              i2.deltaMode && (1 === i2.deltaMode ? u2 = Li.Line : 2 === i2.deltaMode && (u2 = Li.Page));
              var l2 = new Ki(s2.x, s2.y, i2.pageX, i2.pageY, r2, o2, 0, a2, c2, h2, u2, i2);
              e3.push(l2), n2.at(0).eventDispatcher.emit(t3, l2);
            };
          }, e2.prototype._getPointerIndex = function(t3) {
            var e3;
            if ((e3 = this._activePointers.indexOf(t3)) > -1)
              return e3;
            for (var n2 = 0; n2 < this._activePointers.length; n2++)
              if (-1 === this._activePointers[n2])
                return n2;
            return -1;
          }, e2.prototype._nativeButtonToPointerButton = function(t3) {
            switch (t3) {
              case Fi.NoButton:
                return Ii.NoButton;
              case Fi.Left:
                return Ii.Left;
              case Fi.Middle:
                return Ii.Middle;
              case Fi.Right:
                return Ii.Right;
              case Fi.Unknown:
                return Ii.Unknown;
              default:
                return k(t3);
            }
          }, e2.prototype._stringToPointerType = function(t3) {
            switch (t3) {
              case "touch":
                return Bi.Touch;
              case "mouse":
                return Bi.Mouse;
              case "pen":
                return Bi.Pen;
              default:
                return Bi.Unknown;
            }
          }, e2;
        }(ee), nr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), ir = function(t2) {
          function e2() {
            var e3 = t2.call(this) || this;
            return e3.enabled = false, e3.supported = !!navigator.getGamepads, e3._gamePadTimeStamps = [0, 0, 0, 0], e3._oldPads = [], e3._pads = [], e3._initSuccess = false, e3._navigator = navigator, e3._minimumConfiguration = null, e3;
          }
          return nr(e2, t2), e2.prototype.init = function() {
            this.supported && (this._initSuccess || (this._oldPads = this._clonePads(this._navigator.getGamepads()), this._oldPads.length && this._oldPads[0] && (this._initSuccess = true)));
          }, e2.prototype.setMinimumGamepadConfiguration = function(t3) {
            this._enableAndUpdate(), this._minimumConfiguration = t3;
          }, e2.prototype._enableAndUpdate = function() {
            this.enabled || (this.enabled = true, this.update());
          }, e2.prototype._isGamepadValid = function(t3) {
            if (!this._minimumConfiguration)
              return true;
            if (!t3)
              return false;
            var e3 = t3.axes.filter(function(t4) {
              return void 0 !== typeof t4;
            }).length, n2 = t3.buttons.filter(function(t4) {
              return void 0 !== typeof t4;
            }).length;
            return e3 >= this._minimumConfiguration.axis && n2 >= this._minimumConfiguration.buttons && t3.connected;
          }, e2.prototype.on = function(e3, n2) {
            this._enableAndUpdate(), t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.off = function(e3, n2) {
            this._enableAndUpdate(), t2.prototype.off.call(this, e3, n2);
          }, e2.prototype.update = function() {
            if (this.enabled && this.supported) {
              this.init();
              for (var t3 = this._navigator.getGamepads(), e3 = 0; e3 < t3.length; e3++)
                if (t3[e3]) {
                  if (!this.at(e3).connected && this._isGamepadValid(t3[e3]) && this.eventDispatcher.emit("connect", new Pt(e3, this.at(e3))), this.at(e3).connected = true, !t3[e3].timestamp || t3[e3].timestamp !== this._gamePadTimeStamps[e3]) {
                    this._gamePadTimeStamps[e3] = t3[e3].timestamp, this.at(e3).navigatorGamepad = t3[e3];
                    var n2 = void 0, i2 = void 0, r2 = void 0, o2 = void 0, s2 = void 0;
                    for (n2 in Ji)
                      "number" == typeof (i2 = Ji[n2]) && t3[e3].buttons[i2] && (s2 = t3[e3].buttons[i2].value) !== this._oldPads[e3].getButton(i2) && (t3[e3].buttons[i2].pressed ? (this.at(e3).updateButton(i2, s2), this.at(e3).eventDispatcher.emit("button", new Et(i2, s2, this.at(e3)))) : this.at(e3).updateButton(i2, 0));
                    for (r2 in $i)
                      "number" == typeof (o2 = $i[r2]) && (s2 = t3[e3].axes[o2]) !== this._oldPads[e3].getAxes(o2) && (this.at(e3).updateAxes(o2, s2), this.at(e3).eventDispatcher.emit("axis", new St(o2, s2, this.at(e3))));
                    this._oldPads[e3] = this._clonePad(t3[e3]);
                  }
                } else {
                  var a2 = this.at(e3);
                  a2.connected && this.eventDispatcher.emit("disconnect", new At(e3, a2)), a2.connected = false;
                }
            }
          }, e2.prototype.at = function(t3) {
            if (this._enableAndUpdate(), t3 >= this._pads.length)
              for (var e3 = this._pads.length - 1, n2 = t3; e3 < n2; e3++)
                this._pads.push(new rr()), this._oldPads.push(new rr());
            return this._pads[t3];
          }, e2.prototype.getValidGamepads = function() {
            this._enableAndUpdate();
            for (var t3 = [], e3 = 0; e3 < this._pads.length; e3++)
              this._isGamepadValid(this.at(e3).navigatorGamepad) && this.at(e3).connected && t3.push(this.at(e3));
            return t3;
          }, e2.prototype.count = function() {
            return this._pads.filter(function(t3) {
              return t3.connected;
            }).length;
          }, e2.prototype._clonePads = function(t3) {
            for (var e3 = [], n2 = 0, i2 = t3.length; n2 < i2; n2++)
              e3.push(this._clonePad(t3[n2]));
            return e3;
          }, e2.prototype._clonePad = function(t3) {
            var e3, n2, i2 = new rr();
            if (!t3)
              return i2;
            for (e3 = 0, n2 = t3.buttons.length; e3 < n2; e3++)
              t3.buttons[e3] && i2.updateButton(e3, t3.buttons[e3].value);
            for (e3 = 0, n2 = t3.axes.length; e3 < n2; e3++)
              i2.updateAxes(e3, t3.axes[e3]);
            return i2;
          }, e2.MinAxisMoveThreshold = 0.05, e2;
        }(ee), rr = function(t2) {
          function e2() {
            var e3 = t2.call(this) || this;
            e3.connected = false, e3._buttons = new Array(16), e3._axes = new Array(4);
            for (var n2 = 0; n2 < e3._buttons.length; n2++)
              e3._buttons[n2] = 0;
            for (n2 = 0; n2 < e3._axes.length; n2++)
              e3._axes[n2] = 0;
            return e3;
          }
          return nr(e2, t2), e2.prototype.isButtonPressed = function(t3, e3) {
            return void 0 === e3 && (e3 = 1), this._buttons[t3] >= e3;
          }, e2.prototype.getButton = function(t3) {
            return this._buttons[t3];
          }, e2.prototype.getAxes = function(t3) {
            var e3 = this._axes[t3];
            return Math.abs(e3) < ir.MinAxisMoveThreshold ? 0 : e3;
          }, e2.prototype.updateButton = function(t3, e3) {
            this._buttons[t3] = e3;
          }, e2.prototype.updateAxes = function(t3, e3) {
            this._axes[t3] = e3;
          }, e2;
        }(ee);
        !function(t2) {
          t2[t2.Face1 = 0] = "Face1", t2[t2.Face2 = 1] = "Face2", t2[t2.Face3 = 2] = "Face3", t2[t2.Face4 = 3] = "Face4", t2[t2.LeftBumper = 4] = "LeftBumper", t2[t2.RightBumper = 5] = "RightBumper", t2[t2.LeftTrigger = 6] = "LeftTrigger", t2[t2.RightTrigger = 7] = "RightTrigger", t2[t2.Select = 8] = "Select", t2[t2.Start = 9] = "Start", t2[t2.LeftStick = 10] = "LeftStick", t2[t2.RightStick = 11] = "RightStick", t2[t2.DpadUp = 12] = "DpadUp", t2[t2.DpadDown = 13] = "DpadDown", t2[t2.DpadLeft = 14] = "DpadLeft", t2[t2.DpadRight = 15] = "DpadRight";
        }(Ji || (Ji = {})), function(t2) {
          t2[t2.LeftStickX = 0] = "LeftStickX", t2[t2.LeftStickY = 1] = "LeftStickY", t2[t2.RightStickX = 2] = "RightStickX", t2[t2.RightStickY = 3] = "RightStickY";
        }($i || ($i = {}));
        var or, sr = function() {
          function t2(t3) {
            this.nativeComponent = t3, this._paused = false, this._nativeHandlers = {};
          }
          return t2.prototype.on = function(t3, e2) {
            this._nativeHandlers[t3] && this.off(t3, this._nativeHandlers[t3]), this._nativeHandlers[t3] = this._decorate(e2), this.nativeComponent.addEventListener(t3, this._nativeHandlers[t3]);
          }, t2.prototype.off = function(t3, e2) {
            e2 || (e2 = this._nativeHandlers[t3]), this.nativeComponent.removeEventListener(t3, e2), this._nativeHandlers[t3] = null;
          }, t2.prototype._decorate = function(t3) {
            var e2 = this;
            return function(n2) {
              e2._paused || t3(n2);
            };
          }, t2.prototype.pause = function() {
            this._paused = true;
          }, t2.prototype.resume = function() {
            this._paused = false;
          }, t2.prototype.clear = function() {
            for (var t3 in this._nativeHandlers)
              this.off(t3);
          }, t2;
        }(), ar = function() {
          function t2(t3, e2) {
            this._windowGlobal = t3, this._documentGlobal = e2, this._windowComponent = new sr(this._windowGlobal), this._documentComponent = new sr(this._documentGlobal);
          }
          return Object.defineProperty(t2.prototype, "window", { get: function() {
            return this._windowComponent;
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "document", { get: function() {
            return this._documentComponent;
          }, enumerable: false, configurable: true }), t2.prototype.pause = function() {
            this.window.pause(), this.document.pause();
          }, t2.prototype.resume = function() {
            this.window.resume(), this.document.resume();
          }, t2.prototype.clear = function() {
            this.window.clear(), this.document.clear();
          }, t2;
        }(), cr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), hr = function() {
          return (hr = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
              for (var r2 in e2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        };
        l(), function(t2) {
          t2[t2.None = 0] = "None", t2[t2.Canvas = 1] = "Canvas", t2[t2.All = 2] = "All";
        }(or || (or = {}));
        var ur, lr = function(t2) {
          function e2(n2) {
            var i2, r2, o2, s2 = t2.call(this) || this;
            s2._hasStarted = false, s2.postProcessors = [], s2.scenes = {}, s2._animations = [], s2._suppressPlayButton = false, s2.pauseAudioWhenHidden = true, s2.isDebug = false, s2.debugColor = new et(255, 255, 255), s2.enableCanvasTransparency = true, s2.onFatalException = function(t3) {
              R.getInstance().fatal(t3);
            }, s2._timescale = 1, s2._isLoading = false, s2._isInitialized = false, n2 = hr(hr({}, e2._DefaultEngineOptions), n2), s2.browser = new ar(window, document);
            var a2 = new In();
            if (!n2.suppressMinimumBrowserFeatureDetection && !(s2._compatible = a2.test())) {
              var c2 = document.createElement("div");
              if (c2.innerText = "Sorry, your browser does not support all the features needed for Excalibur", document.body.appendChild(c2), a2.failedTests.forEach(function(t3) {
                var e3 = document.createElement("div");
                e3.innerText = "Browser feature missing " + t3, document.body.appendChild(e3);
              }), n2.canvasElementId) {
                var h2 = document.getElementById(n2.canvasElementId);
                h2 && h2.parentElement.removeChild(h2);
              }
              return s2;
            }
            s2._compatible = true, console.log && !n2.suppressConsoleBootMessage && (console.log("%cPowered by Excalibur.js (v" + $r + ")", "background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;"), console.log("\n      /| ________________\nO|===|* >________________>\n      \\|"), console.log("Visit", "http://excaliburjs.com", "for more information")), n2.suppressPlayButton && (s2._suppressPlayButton = true), s2._logger = R.getInstance(), s2._logger.defaultLevel === M.Debug && a2.logBrowserFeatures(), s2._logger.debug("Building engine..."), s2.canvasElementId = n2.canvasElementId, n2.canvasElementId ? (s2._logger.debug("Using Canvas element specified: " + n2.canvasElementId), s2.canvas = document.getElementById(n2.canvasElementId)) : n2.canvasElement ? (s2._logger.debug("Using Canvas element specified:", n2.canvasElement), s2.canvas = n2.canvasElement) : (s2._logger.debug("Using generated canvas element"), s2.canvas = document.createElement("canvas"));
            var u2 = null !== (i2 = n2.displayMode) && void 0 !== i2 ? i2 : Vt.Fixed;
            return n2.width && n2.height || n2.viewport ? (void 0 === n2.displayMode && (u2 = Vt.Fixed), s2._logger.debug("Engine viewport is size " + n2.width + " x " + n2.height)) : n2.displayMode || (s2._logger.debug("Engine viewport is fullscreen"), u2 = Vt.FullScreen), s2.ctx = s2.canvas.getContext("2d", { alpha: s2.enableCanvasTransparency }), s2.screen = new $t({ canvas: s2.canvas, context: s2.ctx, antialiasing: null === (r2 = n2.antialiasing) || void 0 === r2 || r2, browser: s2.browser, viewport: null !== (o2 = n2.viewport) && void 0 !== o2 ? o2 : { width: n2.width, height: n2.height }, resolution: n2.resolution, displayMode: u2, position: n2.position, pixelRatio: n2.suppressHiDPIScaling ? 1 : null }), s2.screen.applyResolutionAndViewport(), n2.backgroundColor && (s2.backgroundColor = n2.backgroundColor.clone()), s2.enableCanvasTransparency = n2.enableCanvasTransparency, s2._loader = new jn(), s2.debug = new Si(s2), s2._initialize(n2), s2.rootScene = s2.currentScene = new xi(s2), s2.addScene("root", s2.rootScene), s2.goToScene("root"), s2;
          }
          return cr(e2, t2), Object.defineProperty(e2.prototype, "canvasWidth", { get: function() {
            return this.screen.canvasWidth;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "halfCanvasWidth", { get: function() {
            return this.screen.halfCanvasWidth;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "canvasHeight", { get: function() {
            return this.screen.canvasHeight;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "halfCanvasHeight", { get: function() {
            return this.screen.halfCanvasHeight;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "drawWidth", { get: function() {
            return this.screen.drawWidth;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "halfDrawWidth", { get: function() {
            return this.screen.halfDrawWidth;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "drawHeight", { get: function() {
            return this.screen.drawHeight;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "halfDrawHeight", { get: function() {
            return this.screen.halfDrawHeight;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isHiDpi", { get: function() {
            return this.screen.isHiDpi;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "stats", { get: function() {
            return this.debug.stats;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isFullscreen", { get: function() {
            return this.screen.isFullScreen;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "displayMode", { get: function() {
            return this.screen.displayMode;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "pixelRatio", { get: function() {
            return this.screen.pixelRatio;
          }, enumerable: false, configurable: true }), e2.prototype.on = function(e3, n2) {
            t2.prototype.on.call(this, e3, n2);
          }, e2.prototype.once = function(e3, n2) {
            t2.prototype.once.call(this, e3, n2);
          }, e2.prototype.off = function(e3, n2) {
            t2.prototype.off.call(this, e3, n2);
          }, e2.prototype.getWorldBounds = function() {
            return this.screen.getWorldBounds();
          }, Object.defineProperty(e2.prototype, "timescale", { get: function() {
            return this._timescale;
          }, set: function(t3) {
            t3 <= 0 ? R.getInstance().error("Cannot set engine.timescale to a value of 0 or less than 0.") : this._timescale = t3;
          }, enumerable: false, configurable: true }), e2.prototype.playAnimation = function(t3, e3, n2) {
            this._animations.push(new pr(t3, e3, n2));
          }, e2.prototype.addTileMap = function(t3) {
            this.currentScene.addTileMap(t3);
          }, e2.prototype.removeTileMap = function(t3) {
            this.currentScene.removeTileMap(t3);
          }, e2.prototype.addTimer = function(t3) {
            return this.currentScene.addTimer(t3);
          }, e2.prototype.removeTimer = function(t3) {
            return this.currentScene.removeTimer(t3);
          }, e2.prototype.addScene = function(t3, e3) {
            this.scenes[t3] && this._logger.warn("Scene", t3, "already exists overwriting"), this.scenes[t3] = e3;
          }, e2.prototype.removeScene = function(t3) {
            if (t3 instanceof xi)
              for (var e3 in this.scenes)
                this.scenes.hasOwnProperty(e3) && this.scenes[e3] === t3 && delete this.scenes[e3];
            "string" == typeof t3 && delete this.scenes[t3];
          }, e2.prototype.add = function(t3) {
            t3 instanceof Pn ? this.currentScene.addScreenElement(t3) : (t3 instanceof bn && this._addChild(t3), t3 instanceof En && this.addTimer(t3), t3 instanceof Cn && this.addTileMap(t3), 2 === arguments.length && this.addScene(arguments[0], arguments[1]));
          }, e2.prototype.remove = function(t3) {
            t3 instanceof Pn ? this.currentScene.removeScreenElement(t3) : (t3 instanceof bn && this._removeChild(t3), t3 instanceof En && this.removeTimer(t3), t3 instanceof Cn && this.removeTileMap(t3), t3 instanceof xi && this.removeScene(t3), "string" == typeof t3 && this.removeScene(t3));
          }, e2.prototype._addChild = function(t3) {
            this.currentScene.add(t3);
          }, e2.prototype._removeChild = function(t3) {
            this.currentScene.remove(t3);
          }, e2.prototype.goToScene = function(t3) {
            if (this.scenes[t3]) {
              var e3 = this.currentScene, n2 = this.scenes[t3];
              this._logger.debug("Going to scene:", t3), this.currentScene.isInitialized && (this.currentScene._deactivate.call(this.currentScene, [e3, n2]), this.currentScene.eventDispatcher.emit("deactivate", new It(n2, this.currentScene))), this.currentScene = n2, this.screen.setCurrentCamera(n2.camera), this.currentScene._initialize(this), this.currentScene._activate.call(this.currentScene, [e3, n2]), this.currentScene.eventDispatcher.emit("activate", new Ft(e3, this.currentScene));
            } else
              this._logger.error("Scene", t3, "does not exist!");
          }, e2.prototype.screenToWorldCoordinates = function(t3) {
            return this.screen.screenToWorldCoordinates(t3);
          }, e2.prototype.worldToScreenCoordinates = function(t3) {
            return this.screen.worldToScreenCoordinates(t3);
          }, e2.prototype._initialize = function(t3) {
            var e3, n2, i2 = this;
            this.pageScrollPreventionMode = t3.scrollPreventionMode, this.input = { keyboard: new ki(), pointers: new er(this), gamepads: new ir() }, this.input.keyboard.init(), this.input.pointers.init(t3 && t3.pointerScope === Mi.Document ? document : this.canvas), this.input.gamepads.init(), void 0 !== document.hidden ? (e3 = "hidden", n2 = "visibilitychange") : "msHidden" in document ? (e3 = "msHidden", n2 = "msvisibilitychange") : "webkitHidden" in document && (e3 = "webkitHidden", n2 = "webkitvisibilitychange"), this.browser.document.on(n2, function() {
              document[e3] ? (i2.eventDispatcher.emit("hidden", new Bt(i2)), i2._logger.debug("Window hidden")) : (i2.eventDispatcher.emit("visible", new Tt(i2)), i2._logger.debug("Window visible"));
            }), this.canvasElementId || t3.canvasElement || document.body.appendChild(this.canvas);
          }, e2.prototype.onInitialize = function(t3) {
          }, e2.prototype.setAntialiasing = function(t3) {
            this.screen.antialiasing = t3;
          }, e2.prototype.getAntialiasing = function() {
            return this.screen.antialiasing;
          }, Object.defineProperty(e2.prototype, "isInitialized", { get: function() {
            return this._isInitialized;
          }, enumerable: false, configurable: true }), e2.prototype._overrideInitialize = function(e3) {
            this.isInitialized || (this.onInitialize(e3), t2.prototype.emit.call(this, "initialize", new jt(e3, this)), this._isInitialized = true);
          }, e2.prototype._update = function(t3) {
            if (this._isLoading)
              return this._loader.update(this, t3), this.input.keyboard.update(), this.input.pointers.update(), void this.input.gamepads.update();
            this._overrideInitialize(this), this._preupdate(t3), this.currentScene.update(this, t3), this._animations = this._animations.filter(function(t4) {
              return !t4.animation.isDone();
            }), this.input.keyboard.update(), this.input.pointers.update(), this.input.gamepads.update(), this._postupdate(t3);
          }, e2.prototype._preupdate = function(t3) {
            this.emit("preupdate", new mt(this, t3, this)), this.onPreUpdate(this, t3);
          }, e2.prototype.onPreUpdate = function(t3, e3) {
          }, e2.prototype._postupdate = function(t3) {
            this.emit("postupdate", new bt(this, t3, this)), this.onPostUpdate(this, t3);
          }, e2.prototype.onPostUpdate = function(t3, e3) {
          }, e2.prototype._draw = function(t3) {
            var e3 = this.ctx;
            if (this._predraw(e3, t3), this._isLoading)
              this._loader.draw(e3, t3);
            else {
              e3.clearRect(0, 0, this.canvasWidth, this.canvasHeight), e3.fillStyle = this.backgroundColor.toString(), e3.fillRect(0, 0, this.canvasWidth, this.canvasHeight), this.currentScene.draw(this.ctx, t3);
              for (var n2 = 0, i2 = this._animations.length; n2 < i2; n2++)
                this._animations[n2].animation.draw(e3, this._animations[n2].x, this._animations[n2].y);
              if (this.isDebug) {
                this.ctx.font = "Consolas", this.ctx.fillStyle = this.debugColor.toString();
                for (var r2 = this.input.keyboard.getKeys(), o2 = 0; o2 < r2.length; o2++)
                  this.ctx.fillText(r2[o2].toString() + " : " + (Pi[r2[o2]] ? Pi[r2[o2]] : "Not Mapped"), 100, 10 * o2 + 10);
                this.ctx.fillText("FPS:" + this.stats.currFrame.fps.toFixed(2).toString(), 10, 10);
              }
              for (var s2 = 0; s2 < this.postProcessors.length; s2++)
                this.postProcessors[s2].process(this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight), this.ctx);
              this._postdraw(e3, t3);
            }
          }, e2.prototype._predraw = function(t3, e3) {
            this.emit("predraw", new yt(t3, e3, this)), this.onPreDraw(t3, e3);
          }, e2.prototype.onPreDraw = function(t3, e3) {
          }, e2.prototype._postdraw = function(t3, e3) {
            this.emit("postdraw", new gt(t3, e3, this)), this.onPostDraw(t3, e3);
          }, e2.prototype.onPostDraw = function(t3, e3) {
          }, e2.prototype.start = function(t3) {
            var n2, i2 = this;
            return this._compatible ? (this.screen.pushResolutionAndViewport(), this.screen.resolution = this.screen.viewport, this.screen.applyResolutionAndViewport(), t3 ? (this._loader = t3, this._loader.suppressPlayButton = this._suppressPlayButton || this._loader.suppressPlayButton, this._loader.wireEngine(this), n2 = this.load(this._loader)) : n2 = d.resolve(), n2.then(function() {
              i2.screen.popResolutionAndViewport(), i2.screen.applyResolutionAndViewport(), i2.emit("start", new dt(i2));
            }), this._hasStarted || (this._hasStarted = true, this._logger.debug("Starting game..."), this.browser.resume(), e2.createMainLoop(this, window.requestAnimationFrame, Date.now)(), this._logger.debug("Game started")), n2) : new d().reject("Excalibur is incompatible with your browser");
          }, e2.createMainLoop = function(t3, e3, n2) {
            var i2 = n2();
            return function r2() {
              if (t3._hasStarted)
                try {
                  t3._requestId = e3(r2), t3.emit("preframe", new wt(t3, t3.stats.prevFrame));
                  var o2 = n2(), s2 = Math.floor(o2 - i2) || 1;
                  s2 > 200 && (s2 = 1);
                  var a2 = s2 * t3.timescale, c2 = t3.stats.prevFrame.id + 1;
                  t3.stats.currFrame.reset(), t3.stats.currFrame.id = c2, t3.stats.currFrame.delta = a2, t3.stats.currFrame.fps = 1 / (a2 / 1e3);
                  var h2 = n2();
                  t3._update(a2);
                  var u2 = n2();
                  t3._draw(a2);
                  var l2 = n2();
                  t3.stats.currFrame.duration.update = u2 - h2, t3.stats.currFrame.duration.draw = l2 - u2, i2 = o2, t3.emit("postframe", new xt(t3, t3.stats.currFrame)), t3.stats.prevFrame.reset(t3.stats.currFrame);
                } catch (e4) {
                  window.cancelAnimationFrame(t3._requestId), t3.stop(), t3.onFatalException(e4);
                }
            };
          }, e2.prototype.stop = function() {
            this._hasStarted && (this.emit("stop", new ft(this)), this.browser.pause(), this._hasStarted = false, this._logger.debug("Game stopped"));
          }, e2.prototype.isPaused = function() {
            return !this._hasStarted;
          }, e2.prototype.screenshot = function() {
            var t3 = new Image(), e3 = this.canvas.toDataURL("image/png");
            return t3.src = e3, t3;
          }, e2.prototype.load = function(t3) {
            var e3 = this, n2 = new d();
            return this._isLoading = true, t3.load().then(function() {
              e3._suppressPlayButton ? setTimeout(function() {
                e3._isLoading = false, n2.resolve();
              }, 500) : (e3._isLoading = false, n2.resolve());
            }), n2;
          }, e2._DefaultEngineOptions = { width: 0, height: 0, enableCanvasTransparency: true, canvasElementId: "", canvasElement: void 0, pointerScope: Mi.Document, suppressConsoleBootMessage: null, suppressMinimumBrowserFeatureDetection: null, suppressHiDPIScaling: null, suppressPlayButton: null, scrollPreventionMode: or.Canvas, backgroundColor: et.fromHex("#2185d0") }, e2;
        }(ee), pr = function(t2, e2, n2) {
          this.animation = t2, this.x = e2, this.y = n2;
        }, dr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), fr = function(t2) {
          function e2(e3, n2) {
            void 0 === n2 && (n2 = "MediaEvent");
            var i2 = t2.call(this) || this;
            return i2.target = e3, i2._name = n2, i2;
          }
          return dr(e2, t2), Object.defineProperty(e2.prototype, "bubbles", { get: function() {
            return false;
          }, set: function(t3) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "_path", { get: function() {
            return null;
          }, set: function(t3) {
          }, enumerable: false, configurable: true }), e2.prototype.stopPropagation = function() {
          }, e2.prototype.action = function() {
          }, e2.prototype.propagate = function() {
          }, e2.prototype.layPath = function(t3) {
          }, e2;
        }(ht), yr = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this, e3, "NativeSoundEvent") || this;
            return i2.track = n2, i2;
          }
          return dr(e2, t2), e2;
        }(fr), gr = function(t2) {
          function e2(e3, n2) {
            var i2 = t2.call(this, e3, "NativeSoundProcessedEvent") || this;
            return i2.processedData = n2, i2.data = i2.processedData, i2;
          }
          return dr(e2, t2), e2;
        }(fr), _r = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }();
        !function(t2) {
          t2[t2.Circle = 0] = "Circle", t2[t2.Rectangle = 1] = "Rectangle";
        }(ur || (ur = {}));
        var vr = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2, a2, c2, h2, u2) {
            return t2.call(this, e3, n2, i2, r2, o2, s2, a2, c2, h2, u2) || this;
          }
          return _r(e2, t2), e2;
        }(fe(function() {
          function t2(t3, e2, n2, i2, r2, o2, s2, a2, c2, h2) {
            this.position = new V(0, 0), this.velocity = new V(0, 0), this.acceleration = new V(0, 0), this.particleRotationalVelocity = 0, this.currentRotation = 0, this.focus = null, this.focusAccel = 0, this.opacity = 1, this.beginColor = et.White, this.endColor = et.White, this.life = 300, this.fadeFlag = false, this._rRate = 1, this._gRate = 1, this._bRate = 1, this._aRate = 0, this._currentColor = et.White, this.emitter = null, this.particleSize = 5, this.particleSprite = null, this.sizeRate = 0, this.elapsedMultiplier = 0;
            var u2 = t3;
            if (u2 && !(t3 instanceof mr)) {
              var l2 = t3;
              u2 = l2.emitter, e2 = l2.life, n2 = l2.opacity, r2 = l2.endColor, i2 = l2.beginColor, o2 = l2.position, s2 = l2.velocity, a2 = l2.acceleration, c2 = l2.startSize, h2 = l2.endSize;
            }
            this.emitter = u2, this.life = e2 || this.life, this.opacity = n2 || this.opacity, this.endColor = r2 || this.endColor.clone(), this.beginColor = i2 || this.beginColor.clone(), this._currentColor = this.beginColor.clone(), this.position = o2 || this.position, this.velocity = s2 || this.velocity, this.acceleration = a2 || this.acceleration, this._rRate = (this.endColor.r - this.beginColor.r) / this.life, this._gRate = (this.endColor.g - this.beginColor.g) / this.life, this._bRate = (this.endColor.b - this.beginColor.b) / this.life, this._aRate = this.opacity / this.life, this.startSize = c2 || 0, this.endSize = h2 || 0, this.endSize > 0 && this.startSize > 0 && (this.sizeRate = (this.endSize - this.startSize) / this.life, this.particleSize = this.startSize);
          }
          return t2.prototype.kill = function() {
            this.emitter.removeParticle(this);
          }, t2.prototype.update = function(t3) {
            if (this.life = this.life - t3, this.elapsedMultiplier = this.elapsedMultiplier + t3, this.life < 0 && this.kill(), this.fadeFlag && (this.opacity = m(this._aRate * this.life, 1e-4, 1)), this.startSize > 0 && this.endSize > 0 && (this.particleSize = m(this.sizeRate * t3 + this.particleSize, Math.min(this.startSize, this.endSize), Math.max(this.startSize, this.endSize))), this._currentColor.r = m(this._currentColor.r + this._rRate * t3, 0, 255), this._currentColor.g = m(this._currentColor.g + this._gRate * t3, 0, 255), this._currentColor.b = m(this._currentColor.b + this._bRate * t3, 0, 255), this._currentColor.a = m(this.opacity, 1e-4, 1), this.focus) {
              var e2 = this.focus.sub(this.position).normalize().scale(this.focusAccel).scale(t3 / 1e3);
              this.velocity = this.velocity.add(e2);
            } else
              this.velocity = this.velocity.add(this.acceleration.scale(t3 / 1e3));
            this.position = this.position.add(this.velocity.scale(t3 / 1e3)), this.particleRotationalVelocity && (this.currentRotation = (this.currentRotation + this.particleRotationalVelocity * t3 / 1e3) % (2 * Math.PI));
          }, t2.prototype.draw = function(t3) {
            if (this.particleSprite)
              return this.particleSprite.rotation = this.currentRotation, this.particleSprite.scale.setTo(this.particleSize, this.particleSize), void this.particleSprite.draw(t3, this.position.x, this.position.y);
            this._currentColor.a = m(this.opacity, 1e-4, 1), t3.fillStyle = this._currentColor.toString(), t3.beginPath(), t3.arc(this.position.x, this.position.y, this.particleSize, 0, 2 * Math.PI), t3.fill(), t3.closePath();
          }, t2;
        }())), mr = function(t2) {
          function e2(e3, n2, i2, r2) {
            return t2.call(this, e3, n2, i2, r2) || this;
          }
          return _r(e2, t2), e2;
        }(fe(function(t2) {
          function e2(e3, n2, i2, r2) {
            var o2 = t2.call(this, "number" == typeof e3 ? { pos: new V(e3, n2), width: i2, height: r2 } : e3) || this;
            o2.numParticles = 0, o2.isEmitting = true, o2.particles = null, o2.deadParticles = null, o2.minVel = 0, o2.maxVel = 0, o2.acceleration = new V(0, 0), o2.minAngle = 0, o2.maxAngle = 0, o2.emitRate = 1, o2.particleLife = 2e3, o2.opacity = 1, o2.fadeFlag = false, o2.focus = null, o2.focusAccel = 1, o2.startSize = null, o2.endSize = null, o2.minSize = 5, o2.maxSize = 5, o2.beginColor = et.White, o2.endColor = et.White, o2.particleSprite = null, o2.emitterType = ur.Rectangle, o2.radius = 0, o2.particleRotationalVelocity = 0, o2.randomRotation = false, o2._particlesToEmit = 0, o2.body.collider.type = ct.PreventCollision, o2.particles = new D(), o2.deadParticles = new D(), o2.random = new f();
            for (var s2 = 0; s2 < o2.traits.length; s2++)
              o2.traits[s2] instanceof Ze && o2.traits.splice(s2, 1);
            return o2;
          }
          return _r(e2, t2), e2.prototype.removeParticle = function(t3) {
            this.deadParticles.push(t3);
          }, e2.prototype.emitParticles = function(t3) {
            for (var e3 = 0; e3 < t3; e3++)
              this.particles.push(this._createParticle());
          }, e2.prototype.clearParticles = function() {
            this.particles.clear();
          }, e2.prototype._createParticle = function() {
            var t3 = 0, e3 = 0, n2 = b(this.minAngle, this.maxAngle, this.random), i2 = b(this.minVel, this.maxVel, this.random), r2 = this.startSize || b(this.minSize, this.maxSize, this.random), o2 = i2 * Math.cos(n2), s2 = i2 * Math.sin(n2);
            if (this.emitterType === ur.Rectangle)
              t3 = b(this.pos.x, this.pos.x + this.width, this.random), e3 = b(this.pos.y, this.pos.y + this.height, this.random);
            else if (this.emitterType === ur.Circle) {
              var a2 = b(0, this.radius, this.random);
              t3 = a2 * Math.cos(n2) + this.pos.x, e3 = a2 * Math.sin(n2) + this.pos.y;
            }
            var c2 = new vr(this, this.particleLife, this.opacity, this.beginColor, this.endColor, new V(t3, e3), new V(o2, s2), this.acceleration, this.startSize, this.endSize);
            return c2.fadeFlag = this.fadeFlag, c2.particleSize = r2, this.particleSprite && (c2.particleSprite = this.particleSprite), c2.particleRotationalVelocity = this.particleRotationalVelocity, this.randomRotation && (c2.currentRotation = b(0, 2 * Math.PI, this.random)), this.focus && (c2.focus = this.focus.add(new V(this.pos.x, this.pos.y)), c2.focusAccel = this.focusAccel), c2;
          }, e2.prototype.update = function(e3, n2) {
            var i2 = this;
            t2.prototype.update.call(this, e3, n2), this.isEmitting && (this._particlesToEmit += this.emitRate * (n2 / 1e3), this._particlesToEmit > 1 && (this.emitParticles(Math.floor(this._particlesToEmit)), this._particlesToEmit = this._particlesToEmit - Math.floor(this._particlesToEmit))), this.particles.forEach(function(t3) {
              return t3.update(n2);
            }), this.deadParticles.forEach(function(t3) {
              return i2.particles.removeElement(t3);
            }), this.deadParticles.clear();
          }, e2.prototype.draw = function(t3) {
            this.particles.forEach(function(e3) {
              return e3.draw(t3);
            });
          }, e2.prototype.debugDraw = function(e3) {
            t2.prototype.debugDraw.call(this, e3), e3.fillStyle = et.Black.toString(), e3.fillText("Particles: " + this.particles.count(), this.pos.x, this.pos.y + 20), this.focus && (e3.fillRect(this.focus.x + this.pos.x, this.focus.y + this.pos.y, 3, 3), Ye(e3, et.Yellow, this.focus.x + this.pos.x, this.focus.y + this.pos.y, this.center.x, this.center.y), e3.fillText("Focus", this.focus.x + this.pos.x, this.focus.y + this.pos.y));
          }, e2;
        }(bn))), br = { Actions: o }, wr = function() {
          function t2() {
          }
          return t2.create = function(t3, e2) {
            if (this._currentGroup > this._MAX_GROUPS)
              throw new Error("Cannot have more than " + this._MAX_GROUPS + " collision groups");
            if (this._groups.get(t3))
              throw new Error("Collision group " + t3 + " already exists");
            var n2 = new nn(t3, this._currentBit, void 0 !== e2 ? e2 : ~this._currentBit);
            return this._currentBit = this._currentBit << 1 | 0, this._currentGroup++, this._groups.set(t3, n2), n2;
          }, Object.defineProperty(t2, "groups", { get: function() {
            return Array.from(this._groups.values());
          }, enumerable: false, configurable: true }), t2.groupByName = function(t3) {
            return this._groups.get(t3);
          }, t2.reset = function() {
            this._groups = /* @__PURE__ */ new Map(), this._currentBit = this._STARTING_BIT, this._currentGroup = 1;
          }, t2._STARTING_BIT = 1, t2._MAX_GROUPS = 32, t2._currentGroup = 1, t2._currentBit = t2._STARTING_BIT, t2._groups = /* @__PURE__ */ new Map(), t2;
        }(), xr = function() {
          return (xr = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
              for (var r2 in e2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        }, Pr = function() {
          function t2(t3) {
            this.lineWidth = 5, this.filled = false, this._points = [], this.anchor = V.Zero, this.offset = V.Zero, this.rotation = 0, this.scale = V.One, this.opacity = 1, this._points = t3;
            var e2 = this._points.reduce(function(t4, e3) {
              return Math.min(t4, e3.x);
            }, 0), n2 = this._points.reduce(function(t4, e3) {
              return Math.max(t4, e3.x);
            }, 0);
            this.drawWidth = n2 - e2;
            var i2 = this._points.reduce(function(t4, e3) {
              return Math.min(t4, e3.y);
            }, 0), r2 = this._points.reduce(function(t4, e3) {
              return Math.max(t4, e3.y);
            }, 0);
            this.drawHeight = r2 - i2, this.height = this.drawHeight, this.width = this.drawWidth;
          }
          return t2.prototype.addEffect = function() {
          }, t2.prototype.removeEffect = function() {
          }, t2.prototype.clearEffects = function() {
          }, t2.prototype.reset = function() {
          }, t2.prototype.draw = function(t3, e2, n2) {
            t3 instanceof CanvasRenderingContext2D ? this._drawWithOptions({ ctx: t3, x: e2, y: n2 }) : this._drawWithOptions(t3);
          }, t2.prototype._drawWithOptions = function(t3) {
            var e2, n2, i2, r2, o2, s2, a2, c2, h2 = xr(xr({}, t3), { rotation: null !== (e2 = t3.rotation) && void 0 !== e2 ? e2 : this.rotation, drawWidth: null !== (n2 = t3.drawWidth) && void 0 !== n2 ? n2 : this.drawWidth, drawHeight: null !== (i2 = t3.drawHeight) && void 0 !== i2 ? i2 : this.drawHeight, flipHorizontal: null !== (r2 = t3.flipHorizontal) && void 0 !== r2 ? r2 : this.flipHorizontal, flipVertical: null !== (o2 = t3.flipVertical) && void 0 !== o2 ? o2 : this.flipVertical, anchor: null !== (s2 = t3.anchor) && void 0 !== s2 ? s2 : this.anchor, offset: null !== (a2 = t3.offset) && void 0 !== a2 ? a2 : this.offset, opacity: null !== (c2 = t3.opacity) && void 0 !== c2 ? c2 : this.opacity }), u2 = h2.ctx, l2 = h2.x, p2 = h2.y, d2 = h2.rotation, f2 = h2.drawWidth, y2 = h2.drawHeight, g2 = h2.anchor, _2 = h2.offset, v2 = h2.opacity, m2 = h2.flipHorizontal, b2 = h2.flipVertical, w2 = f2 * g2.x + _2.x + l2, x2 = y2 * g2.y + _2.y + p2;
            u2.save(), u2.translate(w2, x2), u2.scale(this.scale.x, this.scale.y), u2.rotate(d2), u2.beginPath(), u2.lineWidth = this.lineWidth;
            var P2 = this._points[0];
            u2.moveTo(P2.x, P2.y);
            for (var A2 = 0, E2 = this._points.length; A2 < E2; A2++)
              u2.lineTo(this._points[A2].x, this._points[A2].y);
            u2.lineTo(P2.x, P2.y), u2.closePath(), this.filled && (u2.fillStyle = this.fillColor.toString(), u2.fill()), u2.strokeStyle = this.lineColor.toString(), m2 && (u2.translate(f2, 0), u2.scale(-1, 1)), b2 && (u2.translate(0, y2), u2.scale(1, -1));
            var S2 = u2.globalAlpha;
            u2.globalAlpha = null != v2 ? v2 : 1, u2.stroke(), u2.globalAlpha = S2, u2.restore();
          }, t2;
        }(), Ar = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), Er = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2) {
            return t2.call(this, e3, n2, i2, r2, o2, s2) || this;
          }
          return Ar(e2, t2), e2;
        }(fe(function() {
          function t2(t3, e2, n2, i2, r2, o2) {
            var s2 = this;
            this.sprites = [], this.image = null, this.columns = 0, this.rows = 0, this.spWidth = 0, this.spHeight = 0, this.spacing = 0;
            var a2 = false;
            if (t3 instanceof Array ? this.sprites = t3 : (!t3 || t3 instanceof be ? (this.image = t3, this.columns = e2, this.rows = n2, this.spWidth = i2, this.spHeight = r2, this.spacing = o2 || 0) : (this.columns = t3.columns, this.rows = t3.rows, this.spWidth = t3.spWidth, this.spHeight = t3.spHeight, this.image = t3.image, this.spacing = t3.spacing || 0), this.sprites = new Array(this.columns * this.rows), a2 = true), this.image instanceof be) {
              var c2 = false, h2 = false;
              if (this.image.loaded.then(function(t4) {
                c2 = s2.spWidth * s2.columns > t4.naturalWidth, h2 = s2.spHeight * s2.rows > t4.naturalHeight;
              }), c2)
                throw new RangeError("SpriteSheet specified is wider, " + this.columns + " cols x " + this.spWidth + " pixels > " + this.image.image.naturalWidth + " pixels than image width");
              if (h2)
                throw new RangeError("SpriteSheet specified is taller, " + this.rows + " rows x " + this.spHeight + " pixels > " + this.image.image.naturalHeight + " pixels than image height");
            }
            if (a2)
              for (var u2 = 0; u2 < this.rows; u2++)
                for (var l2 = 0; l2 < this.columns; l2++)
                  this.sprites[l2 + u2 * this.columns] = new ve(this.image, l2 * this.spWidth + this.spacing * l2 + this.spacing, u2 * this.spHeight + this.spacing * u2 + this.spacing, this.spWidth, this.spHeight);
          }
          return t2.prototype.getAnimationByIndices = function(t3, e2, n2) {
            var i2 = this, r2 = e2.map(function(t4) {
              return i2.sprites[t4];
            });
            return r2 = r2.map(function(t4) {
              return t4.clone();
            }), new Pe(t3, r2, n2);
          }, t2.prototype.getAnimationBetween = function(t3, e2, n2, i2) {
            var r2 = this.sprites.slice(e2, n2);
            return r2 = r2.map(function(t4) {
              return t4.clone();
            }), new Pe(t3, r2, i2);
          }, t2.prototype.getAnimationForAll = function(t3, e2) {
            var n2 = this.sprites.map(function(t4) {
              return t4.clone();
            });
            return new Pe(t3, n2, e2);
          }, t2.prototype.getSprite = function(t3) {
            if (t3 >= 0 && t3 < this.sprites.length)
              return this.sprites[t3];
            throw new Error("Invalid index: " + t3);
          }, t2.prototype.getAnimationByCoords = function(t3, e2, n2) {
            for (var i2 = 0, r2 = 0, o2 = new Array(e2.length), s2 = 0; s2 < e2.length; s2++) {
              var a2 = e2[s2];
              a2.image = a2.image || this.image, i2 = Math.max(i2, a2.drawWidth), r2 = Math.max(r2, a2.drawHeight), o2[s2] = new ve(a2);
            }
            var c2 = new Pe(t3, o2, n2);
            return c2.drawWidth = i2, c2.drawHeight = r2, c2;
          }, t2;
        }())), Sr = function(t2) {
          function e2(e3, n2, i2, r2, o2, s2, a2, c2) {
            return t2.call(this, e3, n2, i2, r2, o2, s2, a2, c2) || this;
          }
          return Ar(e2, t2), e2;
        }(fe(function(t2) {
          function e2(e3, n2, i2, r2, o2, s2, a2, c2) {
            var h2 = t2.call(this, e3 instanceof be ? { image: e3, spWidth: s2, spHeight: a2, rows: o2, columns: r2, spacing: c2 || 0 } : e3) || this;
            return h2._currentColor = et.Black, h2._currentOpacity = 1, h2._sprites = {}, h2._textShadowOn = false, h2._textShadowDirty = true, h2._textShadowColor = et.Black, h2._textShadowSprites = {}, h2._shadowOffsetX = 5, h2._shadowOffsetY = 5, !e3 || e3 instanceof be || (n2 = e3.alphabet, i2 = e3.caseInsensitive), h2._alphabet = n2, h2._caseInsensitive = i2, h2._sprites = h2.getTextSprites(), h2;
          }
          return Ar(e2, t2), e2.prototype.getTextSprites = function() {
            for (var t3 = {}, e3 = 0; e3 < this._alphabet.length; e3++) {
              var n2 = this._alphabet[e3];
              this._caseInsensitive && (n2 = n2.toLowerCase()), t3[n2] = this.sprites[e3].clone();
            }
            return t3;
          }, e2.prototype.setTextShadow = function(t3, e3, n2) {
            for (var i2 in this._textShadowOn = true, this._shadowOffsetX = t3, this._shadowOffsetY = e3, this._textShadowColor = n2.clone(), this._textShadowDirty = true, this._sprites)
              this._textShadowSprites[i2] = this._sprites[i2].clone();
          }, e2.prototype.useTextShadow = function(t3) {
            this._textShadowOn = t3, t3 && this.setTextShadow(5, 5, this._textShadowColor);
          }, e2.prototype.draw = function(t3, e3, n2, i2, r2) {
            if (r2 = this._parseOptions(r2), this._currentColor.toString() !== r2.color.toString() || this._currentOpacity !== r2.opacity)
              for (var o2 in this._currentOpacity = r2.opacity, this._currentColor = r2.color, this._sprites)
                this._sprites[o2].clearEffects(), this._sprites[o2].fill(r2.color), this._sprites[o2].opacity(r2.opacity);
            if (this._textShadowOn && this._textShadowDirty && this._textShadowColor) {
              for (var s2 in this._textShadowSprites)
                this._textShadowSprites[s2].clearEffects(), this._textShadowSprites[s2].addEffect(new pe(this._textShadowColor.clone()));
              this._textShadowDirty = false;
            }
            var a2 = this.sprites[0], c2 = a2.drawHeight, h2 = r2.fontSize / c2, u2 = e3.length * a2.drawWidth * h2 + e3.length * r2.letterSpacing, l2 = n2;
            r2.textAlign === Xn.Left || r2.textAlign === Xn.Start ? l2 = n2 : r2.textAlign === Xn.Right || r2.textAlign === Xn.End ? l2 = n2 - u2 : r2.textAlign === Xn.Center && (l2 = n2 - u2 / 2);
            var p2 = i2 - c2 * h2;
            r2.baseAlign === Qn.Top || r2.baseAlign === Qn.Hanging ? p2 = i2 : r2.baseAlign === Qn.Ideographic || r2.baseAlign === Qn.Bottom || r2.baseAlign === Qn.Alphabetic ? p2 = i2 - c2 * h2 : r2.baseAlign === Qn.Middle && (p2 = i2 - c2 * h2 / 2);
            for (var d2 = 0; d2 < e3.length; d2++) {
              var f2 = e3[d2];
              this._caseInsensitive && (f2 = f2.toLowerCase());
              try {
                this._textShadowOn && (this._textShadowSprites[f2].scale.x = h2, this._textShadowSprites[f2].scale.y = h2, this._textShadowSprites[f2].draw(t3, l2 + this._shadowOffsetX, p2 + this._shadowOffsetY));
                var y2 = this._sprites[f2];
                y2.scale.x = h2, y2.scale.y = h2, y2.draw(t3, l2, p2), l2 += y2.drawWidth + r2.letterSpacing;
              } catch (t4) {
                R.getInstance().error("SpriteFont Error drawing char " + f2);
              }
            }
          }, e2.prototype._parseOptions = function(t3) {
            return { fontSize: t3.fontSize || 10, letterSpacing: t3.letterSpacing || 0, color: t3.color || et.Black, textAlign: void 0 === typeof t3.textAlign ? Xn.Left : t3.textAlign, baseAlign: void 0 === typeof t3.baseAlign ? Qn.Bottom : t3.baseAlign, maxWidth: t3.maxWidth || -1, opacity: t3.opacity || 0 };
          }, e2;
        }(Er))), Cr = function() {
          function t2() {
          }
          return t2.type = { any: "", blob: "blob", json: "json", text: "text", document: "document", arraybuffer: "arraybuffer" }, t2;
        }();
        function Or(t2) {
          return !!t2._initialize;
        }
        function Tr(t2) {
          return !!t2.onInitialize;
        }
        function Br(t2) {
          return !!t2._preupdate;
        }
        function Mr(t2) {
          return !!t2.onPreUpdate;
        }
        function Dr(t2) {
          return !!t2.onPostUpdate;
        }
        function kr(t2) {
          return !!t2.onPostUpdate;
        }
        function Rr(t2) {
          return !!t2.onPreDraw;
        }
        function jr(t2) {
          return !!t2.onPostDraw;
        }
        function Fr(t2, e2, n2) {
          return e2 + t2 * (n2 - e2);
        }
        function Ir(t2) {
          return t2 * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
        }
        var Lr = function() {
          function t2(t3) {
            this._perm = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], this._p = new Uint8Array(512), this._defaultPerlinOptions = { octaves: 1, frequency: 1, amplitude: 1, persistance: 0.5 }, t3 = g({}, this._defaultPerlinOptions, t3), this.persistance = t3.persistance, this.amplitude = t3.amplitude, this.frequency = t3.frequency, this.octaves = t3.octaves, t3.seed ? this._random = new f(t3.seed) : this._random = new f(), this._perm = this._random.shuffle(this._perm);
            for (var e2 = 0; e2 < 512; e2++)
              this._p[e2] = 255 & this._perm[e2 % 256];
          }
          return t2.prototype.noise = function() {
            for (var t3 = this.amplitude, e2 = this.frequency, n2 = 0, i2 = 0, r2 = 0; r2 < this.octaves; r2++) {
              switch (arguments.length) {
                case 1:
                  n2 += this._noise1d(arguments[0] * e2) * t3;
                  break;
                case 2:
                  n2 += this._noise2d(arguments[0] * e2, arguments[1] * e2) * t3;
                  break;
                case 3:
                  n2 += this._noise3d(arguments[0] * e2, arguments[1] * e2, arguments[2] * e2) * t3;
                  break;
                default:
                  throw new Error("Invalid arguments for perlin noise");
              }
              i2 += t3, t3 *= this.persistance, e2 *= 2;
            }
            return n2 / i2;
          }, t2.prototype.sequence = function(t3, e2) {
            e2 || (e2 = 1 / t3);
            for (var n2 = new Array(t3), i2 = 0; i2 < t3; i2++)
              n2[i2] = this.noise(i2 * e2);
            return n2;
          }, t2.prototype.grid = function(t3, e2, n2) {
            n2 || (n2 = 1 / Math.min(t3, e2));
            for (var i2 = new Array(t3 * e2), r2 = 0; r2 < e2; r2++)
              for (var o2 = 0; o2 < t3; o2++)
                i2[o2 + r2 * t3] = this.noise(o2 * n2, r2 * n2);
            return i2;
          }, t2.prototype._gradient3d = function(t3, e2, n2, i2) {
            var r2 = 15 & t3, o2 = r2 < 8 ? e2 : n2, s2 = r2 < 4 ? n2 : 12 === r2 || 14 === r2 ? e2 : i2;
            return (0 == (1 & r2) ? o2 : -o2) + (0 == (2 & r2) ? s2 : -s2);
          }, t2.prototype._gradient2d = function(t3, e2, n2) {
            var i2 = 0 == (1 & t3) ? e2 : n2;
            return 0 == (2 & t3) ? -i2 : i2;
          }, t2.prototype._gradient1d = function(t3, e2) {
            return 0 == (1 & t3) ? -e2 : e2;
          }, t2.prototype._noise1d = function(t3) {
            var e2 = 255 & Math.floor(t3);
            return (Fr(Ir(t3 -= Math.floor(t3)), this._gradient1d(this._p[e2], t3), this._gradient1d(this._p[e2 + 1], t3 - 1)) + 1) / 2;
          }, t2.prototype._noise2d = function(t3, e2) {
            var n2 = 255 & Math.floor(t3), i2 = 255 & Math.floor(e2);
            t3 -= Math.floor(t3), e2 -= Math.floor(e2);
            var r2 = Ir(t3), o2 = Ir(e2), s2 = this._p[n2] + i2, a2 = this._p[n2 + 1] + i2;
            return (Fr(o2, Fr(r2, this._gradient2d(this._p[s2], t3, e2), this._gradient2d(this._p[a2], t3 - 1, e2)), Fr(r2, this._gradient2d(this._p[s2 + 1], t3, e2 - 1), this._gradient2d(this._p[a2 + 1], t3 - 1, e2 - 1))) + 1) / 2;
          }, t2.prototype._noise3d = function(t3, e2, n2) {
            var i2 = 255 & Math.floor(t3), r2 = 255 & Math.floor(e2), o2 = 255 & Math.floor(n2);
            t3 -= Math.floor(t3), e2 -= Math.floor(e2), n2 -= Math.floor(n2);
            var s2 = Ir(t3), a2 = Ir(e2), c2 = Ir(n2), h2 = this._p[i2] + r2, u2 = this._p[i2 + 1] + r2, l2 = this._p[h2] + o2, p2 = this._p[u2] + o2, d2 = this._p[h2 + 1] + o2, f2 = this._p[u2 + 1] + o2;
            return (Fr(c2, Fr(a2, Fr(s2, this._gradient3d(this._p[l2], t3, e2, n2), this._gradient3d(this._p[p2], t3 - 1, e2, n2)), Fr(s2, this._gradient3d(this._p[d2], t3, e2 - 1, n2), this._gradient3d(this._p[f2], t3 - 1, e2 - 1, n2))), Fr(a2, Fr(s2, this._gradient3d(this._p[l2 + 1], t3, e2, n2 - 1), this._gradient3d(this._p[p2 + 1], t3 - 1, e2, n2 - 1)), Fr(s2, this._gradient3d(this._p[d2 + 1], t3, e2 - 1, n2 - 1), this._gradient3d(this._p[f2 + 1], t3 - 1, e2 - 1, n2 - 1)))) + 1) / 2;
          }, t2;
        }(), zr = function() {
          function t2(t3, e2) {
            this.generator = t3, this.colorFcn = e2, e2 || (this.colorFcn = function(t4) {
              return t4 < 125 ? et.Black : et.White;
            });
          }
          return t2.prototype.image = function(t3, e2) {
            var n2 = document.createElement("img"), i2 = document.createElement("canvas");
            i2.width = t3, i2.height = e2;
            var r2 = i2.getContext("2d");
            return this.draw(r2, 0, 0, t3, e2), n2.src = i2.toDataURL(), n2;
          }, t2.prototype.draw = function(t3, e2, n2, i2, r2) {
            for (var o2 = this.generator.grid(i2, r2), s2 = t3.getImageData(e2, n2, i2, r2), a2 = 0; a2 < r2; a2++)
              for (var c2 = 0; c2 < i2; c2++) {
                var h2 = o2[c2 + i2 * a2], u2 = 255 & Math.floor(255 * h2), l2 = 4 * (c2 + a2 * s2.width), p2 = this.colorFcn(u2);
                s2.data[l2] = p2.r, s2.data[l2 + 1] = p2.g, s2.data[l2 + 2] = p2.b, s2.data[l2 + 3] = Math.floor(255 * p2.a);
              }
            t3.putImageData(s2, e2, n2);
          }, t2;
        }(), Hr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), Ur = function() {
          function t2() {
          }
          return t2.create = function(t3) {
            return t3 instanceof AudioBuffer ? new Nr(t3) : new Wr(t3);
          }, t2;
        }(), Wr = function() {
          function t2(t3) {
            this._src = t3, this._volume = 1, this._duration = void 0, this._loop = false, this._isPlaying = false, this._isPaused = false;
          }
          return Object.defineProperty(t2.prototype, "loop", { get: function() {
            return this._loop;
          }, set: function(t3) {
            this._loop = t3, this._instance && (this._instance.loop = t3, this._wireUpOnEnded());
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "volume", { get: function() {
            return this._volume;
          }, set: function(t3) {
            this._volume = m(t3, 0, 1);
          }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "duration", { get: function() {
            return this._duration;
          }, set: function(t3) {
            this._duration = t3;
          }, enumerable: false, configurable: true }), t2.prototype.isPlaying = function() {
            return this._isPlaying;
          }, t2.prototype.pause = function() {
            this._isPlaying && (this._isPaused = true, this._isPlaying = false);
          }, t2.prototype.stop = function() {
            this._isPlaying && (this._isPlaying = false, this._isPaused = false);
          }, t2.prototype.play = function() {
            return this._isPaused && this._resumePlayBack(), this._isPlaying || this._startPlayBack(), this._playingPromise;
          }, t2.prototype._startPlayBack = function() {
            this._isPlaying = true, this._isPaused = false, this._playingPromise = new d();
          }, t2.prototype._resumePlayBack = function() {
            this._isPaused && (this._isPaused = false, this._isPlaying = true);
          }, t2.prototype._wireUpOnEnded = function() {
            var t3 = this;
            this.loop || (this._instance.onended = function() {
              return t3._handleOnEnded();
            });
          }, t2.prototype._handleOnEnded = function() {
          }, t2;
        }(), Nr = function(t2) {
          function e2(e3) {
            var n2 = t2.call(this, e3) || this;
            return n2._audioContext = Bn.create(), n2._volumeNode = n2._audioContext.createGain(), n2._currentOffset = 0, n2._createNewBufferSource(), n2;
          }
          return Hr(e2, t2), Object.defineProperty(e2.prototype, "volume", { get: function() {
            return this._volume;
          }, set: function(t3) {
            t3 = m(t3, 0, 1), this._volume = t3, this._isPlaying && this._volumeNode.gain.setTargetAtTime ? this._volumeNode.gain.setTargetAtTime(t3, this._audioContext.currentTime, 0.1) : this._volumeNode.gain.value = t3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "_playbackRate", { get: function() {
            return this._instance ? 1 / (this._instance.playbackRate.value || 1) : null;
          }, enumerable: false, configurable: true }), e2.prototype.pause = function() {
            t2.prototype.pause.call(this), this._instance.stop(0), this._setPauseOffset();
          }, e2.prototype.stop = function() {
            t2.prototype.stop.call(this), this._currentOffset = 0, this._instance.stop(0), this._instance.onended || this._handleOnEnded();
          }, e2.prototype._startPlayBack = function() {
            t2.prototype._startPlayBack.call(this), this._instance || this._createNewBufferSource(), this._rememberStartTime(), this._volumeNode.connect(this._audioContext.destination), this._instance.start(0, 0), this._currentOffset = 0, this._playingPromise = new d(), this._wireUpOnEnded();
          }, e2.prototype._resumePlayBack = function() {
            t2.prototype._resumePlayBack.call(this), this._instance.onended = null, this._createNewBufferSource();
            var e3 = this._playbackRate * this._src.duration, n2 = this._currentOffset % e3;
            this._rememberStartTime(-1e3 * n2), this._instance.start(0, n2), this._wireUpOnEnded();
          }, e2.prototype._handleOnEnded = function() {
            this._isPaused || (this._isPlaying = false, this._playingPromise.resolve(true));
          }, e2.prototype._rememberStartTime = function(t3) {
            this._startTime = new Date().getTime() + (0 | t3);
          }, e2.prototype._setPauseOffset = function() {
            this._currentOffset = (new Date().getTime() - this._startTime) * this._playbackRate / 1e3;
          }, e2.prototype._createNewBufferSource = function() {
            this._instance = this._audioContext.createBufferSource(), this._instance.buffer = this._src, this._instance.loop = this.loop, this._instance.playbackRate.setValueAtTime(1, 0), this._instance.connect(this._volumeNode);
          }, e2;
        }(Wr);
        function qr(t2) {
          try {
            var e2 = new Audio(), n2 = t2.match(/.*\.([A-Za-z0-9]+)$/)[1];
            return !!e2.canPlayType("audio/" + n2);
          } catch (t3) {
            return R.getInstance().warn("Cannot determine audio support, assuming no support for the Audio Tag", t3), false;
          }
        }
        var Vr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), Gr = function(t2) {
          function e2() {
            for (var e3 = [], n2 = 0; n2 < arguments.length; n2++)
              e3[n2] = arguments[n2];
            var i2 = t2.call(this, "", "") || this;
            i2._loop = false, i2._volume = 1, i2._duration = void 0, i2._isStopped = false, i2._isPaused = false, i2._tracks = [], i2._wasPlayingOnHidden = false, i2._processedData = new d(), i2._audioContext = Bn.create(), i2._detectResponseType();
            for (var r2 = 0, o2 = e3; r2 < o2.length; r2++) {
              var s2 = o2[r2];
              if (qr(s2)) {
                i2.path = s2;
                break;
              }
            }
            return i2.path || (i2.logger.warn("This browser does not support any of the audio files specified:", e3.join(", ")), i2.logger.warn("Attempting to use", e3[0]), i2.path = e3[0]), i2;
          }
          return Vr(e2, t2), Object.defineProperty(e2.prototype, "loop", { get: function() {
            return this._loop;
          }, set: function(t3) {
            this._loop = t3;
            for (var e3 = 0, n2 = this._tracks; e3 < n2.length; e3++) {
              n2[e3].loop = this._loop;
            }
            this.logger.debug("Set loop for all instances of sound", this.path, "to", this._loop);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "volume", { get: function() {
            return this._volume;
          }, set: function(t3) {
            this._volume = t3;
            for (var e3 = 0, n2 = this._tracks; e3 < n2.length; e3++) {
              n2[e3].volume = this._volume;
            }
            this.emit("volumechange", new yr(this)), this.logger.debug("Set loop for all instances of sound", this.path, "to", this._volume);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "duration", { get: function() {
            return this._duration;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "instances", { get: function() {
            return this._tracks;
          }, enumerable: false, configurable: true }), e2.prototype.wireEngine = function(t3) {
            var e3 = this;
            t3 && (this._engine = t3, this._engine.on("hidden", function() {
              t3.pauseAudioWhenHidden && e3.isPlaying() && (e3._wasPlayingOnHidden = true, e3.pause());
            }), this._engine.on("visible", function() {
              t3.pauseAudioWhenHidden && e3._wasPlayingOnHidden && (e3.play(), e3._wasPlayingOnHidden = false);
            }), this._engine.on("start", function() {
              e3._isStopped = false;
            }), this._engine.on("stop", function() {
              e3.stop(), e3._isStopped = true;
            }));
          }, e2.prototype.instanceCount = function() {
            return this._tracks.length;
          }, e2.prototype.isPlaying = function() {
            return this._tracks.some(function(t3) {
              return t3.isPlaying();
            });
          }, e2.prototype.play = function(t3) {
            return this.isLoaded() ? this._isStopped ? (this.logger.warn("Cannot start playing. Engine is in a stopped state."), d.resolve(false)) : (this.volume = t3 || this.volume, this._isPaused ? this._resumePlayback() : this._startPlayback()) : (this.logger.warn("Cannot start playing. Resource", this.path, "is not loaded yet"), d.resolve(true));
          }, e2.prototype.pause = function() {
            if (this.isPlaying()) {
              for (var t3 = 0, e3 = this._tracks; t3 < e3.length; t3++) {
                e3[t3].pause();
              }
              this._isPaused = true, this.emit("pause", new yr(this)), this.logger.debug("Paused all instances of sound", this.path);
            }
          }, e2.prototype.stop = function() {
            for (var t3 = 0, e3 = this._tracks; t3 < e3.length; t3++) {
              e3[t3].stop();
            }
            this.emit("stop", new yr(this)), this._isPaused = false, this._tracks.length = 0, this.logger.debug("Stopped all instances of sound", this.path);
          }, e2.prototype.setData = function(t3) {
            this.emit("emptied", new yr(this)), this.data = t3, this._processedData = new d();
          }, e2.prototype.processData = function(t3) {
            var e3 = this;
            return (t3 instanceof ArrayBuffer ? this._processArrayBufferData(t3) : this._processBlobData(t3)).then(function(t4) {
              return e3._setProcessedData(t4);
            });
          }, e2.prototype.getTrackId = function(t3) {
            return this._tracks.indexOf(t3);
          }, e2.prototype._resumePlayback = function() {
            if (this._isPaused) {
              for (var t3 = [], e3 = 0, n2 = this._tracks; e3 < n2.length; e3++) {
                var i2 = n2[e3];
                t3.push(i2.play());
              }
              return this._isPaused = false, this.emit("resume", new yr(this)), this.logger.debug("Resuming paused instances for sound", this.path, this._tracks), d.join(t3);
            }
            return d.resolve(true);
          }, e2.prototype._startPlayback = function() {
            var t3 = this, e3 = this._createNewTrack(), n2 = new d();
            return e3.then(function(e4) {
              e4.play().then(function(i2) {
                return t3.emit("playbackend", new yr(t3, e4)), t3._tracks.splice(t3.getTrackId(e4), 1), n2.resolve(i2), i2;
              }), t3.emit("playbackstart", new yr(t3, e4)), t3.logger.debug("Playing new instance for sound", t3.path);
            }), n2;
          }, e2.prototype._processArrayBufferData = function(t3) {
            var e3 = this, n2 = new d();
            return this._audioContext.decodeAudioData(t3, function(t4) {
              n2.resolve(t4);
            }, function() {
              e3.logger.error("Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file."), n2.resolve(void 0);
            }), n2;
          }, e2.prototype._processBlobData = function(e3) {
            return new d().resolve(t2.prototype.processData.call(this, e3));
          }, e2.prototype._setProcessedData = function(t3) {
            this._processedData.resolve(t3), this._duration = "object" == typeof t3 ? t3.duration : void 0, this.emit("processed", new gr(this, t3));
          }, e2.prototype._createNewTrack = function() {
            var t3 = this, e3 = new d();
            return 0 !== this._processedData.state() && this.processData(this.data), this._processedData.then(function(n2) {
              return e3.resolve(t3._getTrackInstance(n2)), n2;
            }, function(e4) {
              t3.logger.error(e4, "Cannot create AudioInstance due to wrong processed data.");
            }), e3;
          }, e2.prototype._getTrackInstance = function(t3) {
            var e3 = Ur.create(t3);
            return e3.loop = this.loop, e3.volume = this.volume, e3.duration = this.duration, this._tracks.push(e3), e3;
          }, e2.prototype._detectResponseType = function() {
            window.AudioContext ? this.responseType = Cr.type.arraybuffer : this.responseType = Cr.type.blob;
          }, e2;
        }(ie), Xr = function() {
          var t2 = function(e2, n2) {
            return (t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
              t3.__proto__ = e3;
            } || function(t3, e3) {
              for (var n3 in e3)
                Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
            })(e2, n2);
          };
          return function(e2, n2) {
            function i2() {
              this.constructor = e2;
            }
            t2(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (i2.prototype = n2.prototype, new i2());
          };
        }(), Qr = function(t2) {
          function e2(e3, n2, i2) {
            void 0 === n2 && (n2 = et.Magenta), void 0 === i2 && (i2 = true);
            var r2 = t2.call(this, e3, "arraybuffer", i2) || this;
            return r2.path = e3, r2.color = n2, r2.bustCache = i2, r2.loaded = new d(), r2._isLoaded = false, r2._stream = null, r2._gif = null, r2._texture = [], r2._animation = null, r2._transparentColor = null, r2._transparentColor = n2, r2;
          }
          return Xr(e2, t2), e2.prototype.isLoaded = function() {
            return this._isLoaded;
          }, e2.prototype.load = function() {
            var e3 = this, n2 = new d();
            return t2.prototype.load.call(this).then(function() {
              e3._stream = new Yr(e3.getData()), e3._gif = new Jr(e3._stream, e3._transparentColor);
              for (var t3 = [], i2 = 0; i2 < e3._gif.images.length; i2++) {
                var r2 = new be(e3._gif.images[i2].src, false);
                e3._texture.push(r2), t3.push(r2.load());
              }
              d.join(t3).then(function() {
                e3._isLoaded = true, n2.resolve(e3._texture);
              });
            }, function() {
              n2.reject("Error loading texture.");
            }), n2;
          }, e2.prototype.asSprite = function(t3) {
            return void 0 === t3 && (t3 = 0), this._texture[t3].asSprite();
          }, e2.prototype.asSpriteSheet = function() {
            var t3 = this._texture.map(function(t4) {
              return t4.asSprite();
            });
            return new Er(t3);
          }, e2.prototype.asAnimation = function(t3, e3) {
            var n2 = this.asSpriteSheet();
            return this._animation = n2.getAnimationForAll(t3, e3), this._animation;
          }, Object.defineProperty(e2.prototype, "readCheckBytes", { get: function() {
            return this._gif.checkBytes;
          }, enumerable: false, configurable: true }), e2;
        }(ie), Zr = function(t2) {
          return t2.reduce(function(t3, e2) {
            return 2 * t3 + e2;
          }, 0);
        }, Kr = function(t2) {
          for (var e2 = [], n2 = 7; n2 >= 0; n2--)
            e2.push(!!(t2 & 1 << n2));
          return e2;
        }, Yr = function(t2) {
          var e2 = this;
          if (this.data = null, this.len = 0, this.position = 0, this.readByte = function() {
            if (e2.position >= e2.data.byteLength)
              throw new Error("Attempted to read past end of stream.");
            return e2.data[e2.position++];
          }, this.readBytes = function(t3) {
            for (var n2 = [], i2 = 0; i2 < t3; i2++)
              n2.push(e2.readByte());
            return n2;
          }, this.read = function(t3) {
            for (var n2 = "", i2 = 0; i2 < t3; i2++)
              n2 += String.fromCharCode(e2.readByte());
            return n2;
          }, this.readUnsigned = function() {
            var t3 = e2.readBytes(2);
            return (t3[1] << 8) + t3[0];
          }, this.data = new Uint8Array(t2), this.len = this.data.byteLength, 0 === this.len)
            throw new Error("No data loaded from file");
        }, Jr = function(t2, e2) {
          var n2 = this;
          void 0 === e2 && (e2 = et.Magenta), this._st = null, this._handler = {}, this._transparentColor = null, this.frames = [], this.images = [], this.globalColorTable = [], this.checkBytes = [], this.parseColorTable = function(t3) {
            for (var e3 = [], i2 = 0; i2 < t3; i2++) {
              var r2 = "#" + n2._st.readBytes(3).map(function(t4) {
                var e4 = t4.toString(16);
                return 1 === e4.length ? "0" + e4 : e4;
              }).join("");
              e3.push(r2);
            }
            return e3;
          }, this.readSubBlocks = function() {
            var t3, e3;
            e3 = "";
            do {
              t3 = n2._st.readByte(), e3 += n2._st.read(t3);
            } while (0 !== t3);
            return e3;
          }, this.parseHeader = function() {
            var t3 = { sig: null, ver: null, width: null, height: null, colorRes: null, globalColorTableSize: null, gctFlag: null, sorted: null, globalColorTable: [], bgColor: null, pixelAspectRatio: null };
            if (t3.sig = n2._st.read(3), t3.ver = n2._st.read(3), "GIF" !== t3.sig)
              throw new Error("Not a GIF file.");
            t3.width = n2._st.readUnsigned(), t3.height = n2._st.readUnsigned();
            var e3 = Kr(n2._st.readByte());
            t3.gctFlag = e3.shift(), t3.colorRes = Zr(e3.splice(0, 3)), t3.sorted = e3.shift(), t3.globalColorTableSize = Zr(e3.splice(0, 3)), t3.bgColor = n2._st.readByte(), t3.pixelAspectRatio = n2._st.readByte(), t3.gctFlag && (t3.globalColorTable = n2.parseColorTable(1 << t3.globalColorTableSize + 1), n2.globalColorTable = t3.globalColorTable), n2._handler.hdr && n2._handler.hdr(t3) && n2.checkBytes.push(n2._handler.hdr);
          }, this.parseExt = function(t3) {
            switch (t3.label = n2._st.readByte(), t3.label) {
              case 249:
                t3.extType = "gce", function(t4) {
                  n2.checkBytes.push(n2._st.readByte());
                  var e3 = Kr(n2._st.readByte());
                  t4.reserved = e3.splice(0, 3), t4.disposalMethod = Zr(e3.splice(0, 3)), t4.userInput = e3.shift(), t4.transparencyGiven = e3.shift(), t4.delayTime = n2._st.readUnsigned(), t4.transparencyIndex = n2._st.readByte(), t4.terminator = n2._st.readByte(), n2._handler.gce && n2._handler.gce(t4) && n2.checkBytes.push(n2._handler.gce);
                }(t3);
                break;
              case 254:
                t3.extType = "com", function(t4) {
                  t4.comment = n2.readSubBlocks(), n2._handler.com && n2._handler.com(t4) && n2.checkBytes.push(n2._handler.com);
                }(t3);
                break;
              case 1:
                t3.extType = "pte", function(t4) {
                  n2.checkBytes.push(n2._st.readByte()), t4.ptHeader = n2._st.readBytes(12), t4.ptData = n2.readSubBlocks(), n2._handler.pte && n2._handler.pte(t4) && n2.checkBytes.push(n2._handler.pte);
                }(t3);
                break;
              case 255:
                t3.extType = "app", function(t4) {
                  switch (n2.checkBytes.push(n2._st.readByte()), t4.identifier = n2._st.read(8), t4.authCode = n2._st.read(3), t4.identifier) {
                    case "NETSCAPE":
                      !function(t5) {
                        n2.checkBytes.push(n2._st.readByte()), t5.unknown = n2._st.readByte(), t5.iterations = n2._st.readUnsigned(), t5.terminator = n2._st.readByte(), n2._handler.app && n2._handler.app.NETSCAPE && n2._handler.app.NETSCAPE(t5) && n2.checkBytes.push(n2._handler.app);
                      }(t4);
                      break;
                    default:
                      !function(t5) {
                        t5.appData = n2.readSubBlocks(), n2._handler.app && n2._handler.app[t5.identifier] && n2._handler.app[t5.identifier](t5) && n2.checkBytes.push(n2._handler.app[t5.identifier]);
                      }(t4);
                  }
                }(t3);
                break;
              default:
                t3.extType = "unknown", function(t4) {
                  t4.data = n2.readSubBlocks(), n2._handler.unknown && n2._handler.unknown(t4) && n2.checkBytes.push(n2._handler.unknown);
                }(t3);
            }
          }, this.parseImg = function(t3) {
            t3.leftPos = n2._st.readUnsigned(), t3.topPos = n2._st.readUnsigned(), t3.width = n2._st.readUnsigned(), t3.height = n2._st.readUnsigned();
            var e3 = Kr(n2._st.readByte());
            t3.lctFlag = e3.shift(), t3.interlaced = e3.shift(), t3.sorted = e3.shift(), t3.reserved = e3.splice(0, 2), t3.lctSize = Zr(e3.splice(0, 3)), t3.lctFlag && (t3.lct = n2.parseColorTable(1 << t3.lctSize + 1)), t3.lzwMinCodeSize = n2._st.readByte();
            var i2 = n2.readSubBlocks();
            t3.pixels = function(t4, e4) {
              for (var n3, i3, r2 = 0, o2 = function(t5) {
                for (var n4 = 0, i4 = 0; i4 < t5; i4++)
                  e4.charCodeAt(r2 >> 3) & 1 << (7 & r2) && (n4 |= 1 << i4), r2++;
                return n4;
              }, s2 = [], a2 = 1 << t4, c2 = a2 + 1, h2 = t4 + 1, u2 = [], l2 = function() {
                u2 = [], h2 = t4 + 1;
                for (var e5 = 0; e5 < a2; e5++)
                  u2[e5] = [e5];
                u2[a2] = [], u2[c2] = null;
              }; ; )
                if (i3 = n3, (n3 = o2(h2)) !== a2) {
                  if (n3 === c2)
                    break;
                  if (n3 < u2.length)
                    i3 !== a2 && u2.push(u2[i3].concat(u2[n3][0]));
                  else {
                    if (n3 !== u2.length)
                      throw new Error("Invalid LZW code.");
                    u2.push(u2[i3].concat(u2[i3][0]));
                  }
                  s2.push.apply(s2, u2[n3]), u2.length === 1 << h2 && h2 < 12 && h2++;
                } else
                  l2();
              return s2;
            }(t3.lzwMinCodeSize, i2), t3.interlaced && (t3.pixels = function(t4, e4) {
              for (var n3 = new Array(t4.length), i3 = t4.length / e4, r2 = function(i4, r3) {
                var o3 = t4.slice(r3 * e4, (r3 + 1) * e4);
                n3.splice.apply(n3, [i4 * e4, e4].concat(o3));
              }, o2 = [0, 4, 2, 1], s2 = [8, 8, 4, 2], a2 = 0, c2 = 0; c2 < 4; c2++)
                for (var h2 = o2[c2]; h2 < i3; h2 += s2[c2])
                  r2(h2, a2), a2++;
              return n3;
            }(t3.pixels, t3.width)), n2.frames.push(t3), n2.arrayToImage(t3), n2._handler.img && n2._handler.img(t3) && n2.checkBytes.push(n2._handler);
          }, this.parseBlock = function() {
            var t3 = { sentinel: n2._st.readByte(), type: "" };
            switch (String.fromCharCode(t3.sentinel)) {
              case "!":
                t3.type = "ext", n2.parseExt(t3);
                break;
              case ",":
                t3.type = "img", n2.parseImg(t3);
                break;
              case ";":
                t3.type = "eof", n2._handler.eof && n2._handler.eof(t3) && n2.checkBytes.push(n2._handler.eof);
                break;
              default:
                throw new Error("Unknown block: 0x" + t3.sentinel.toString(16));
            }
            "eof" !== t3.type && n2.parseBlock();
          }, this.arrayToImage = function(t3) {
            var e3 = 0, i2 = document.createElement("canvas");
            i2.id = e3.toString(), i2.width = t3.width, i2.height = t3.height, e3++;
            for (var r2 = i2.getContext("2d"), o2 = 0, s2 = 0, a2 = 0; a2 < t3.pixels.length; a2++)
              s2 % t3.width == 0 && (o2++, s2 = 0), n2.globalColorTable[t3.pixels[a2]] === n2._transparentColor.toHex() ? r2.fillStyle = "rgba(0, 0, 0, 0)" : r2.fillStyle = n2.globalColorTable[t3.pixels[a2]], r2.fillRect(s2, o2, 1, 1), s2++;
            var c2 = new Image();
            c2.src = i2.toDataURL(), n2.images.push(c2);
          }, this._st = t2, this._handler = {}, this._transparentColor = e2, this.parseHeader(), this.parseBlock();
        }, $r = "0.24.5";
        l();
      }]);
    });
  }
});
export default require_excalibur_min();
/*!
 * excalibur - 0.24.5 - 2020-9-8
 * https://github.com/excaliburjs/Excalibur
 * Copyright (c) 2020 Excalibur.js <https://github.com/excaliburjs/Excalibur/graphs/contributors>
 * Licensed BSD-2-Clause
 * @preserve
 */
//# sourceMappingURL=excalibur.js.map
