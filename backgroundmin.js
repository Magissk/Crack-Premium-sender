/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        u = n.indexOf,
        c = {},
        l = c.toString,
        f = c.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        m = function e(t) {
            return null != t && t === t.window
        },
        y = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function v(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in y) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[l.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (c && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            v(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (E(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)(r = !t(e[o], o)) !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (E(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return s.apply([], a)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    }));

    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var S = function(e) {
        var t, n, r, i, o, s, a, u, c, l, f, p, d, h, g, m, y, v, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            E = 0,
            S = se(),
            N = se(),
            A = se(),
            C = function(e, t) {
                return e === t && (f = !0), 0
            },
            _ = {}.hasOwnProperty,
            D = [],
            k = D.pop,
            M = D.push,
            I = D.push,
            L = D.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            q = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            U = new RegExp(P + "+", "g"),
            B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            $ = new RegExp("^" + P + "*," + P + "*"),
            G = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            F = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            W = new RegExp(q),
            Y = new RegExp("^" + R + "$"),
            K = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            z = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            ie = ve((function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(D = L.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: D.length ? function(e, t) {
                    M.apply(e, L.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, a, c, l, f, h, y, v = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = V.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(c = t.getElementById(o))) return r;
                            if (c.id === o) return r.push(c), r
                        } else if (v && (c = v.getElementById(o)) && x(t, c) && c.id === o) return r.push(c), r
                    } else {
                        if (f[2]) return I.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                    if (1 !== T) v = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (l = t.getAttribute("id")) ? l = l.replace(te, ne): t.setAttribute("id", l = b), a = (h = s(e)).length;
                        while (a--) h[a] = "#" + l + " " + ye(h[a]);
                        y = h.join(","), v = Q.test(e) && ge(t.parentNode) || t
                    }
                    if (y) try {
                        return I.apply(r, v.querySelectorAll(y)), r
                    } catch (e) {} finally {
                        l === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function se() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function ae(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return ae((function(t) {
                return t = +t, ae((function(n, r) {
                    var i, o = e([], n.length, t),
                        s = o.length;
                    while (s--) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function(e) {
            var t, i, s = e ? e.ownerDocument || e : w;
            return s !== d && 9 === s.nodeType && s.documentElement ? (d = s, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue((function(e) {
                return e.className = "i", !e.getAttribute("className")
            })), n.getElementsByTagName = ue((function(e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ue((function(e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            })), n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, y = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ue((function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
            })), ue((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            }))), (n.matchesSelector = J.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", q)
            })), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), t = J.test(h.compareDocumentPosition), x = t || J.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, C = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : l ? O(l, e) - O(l, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : l ? O(l, e) - O(l, t) : 0;
                if (i === o) return le(e, t);
                n = e;
                while (n = n.parentNode) s.unshift(n);
                n = t;
                while (n = n.parentNode) a.unshift(n);
                while (s[r] === a[r]) r++;
                return r ? le(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(F, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
                var r = v.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && _.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(C), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return l = null, e
        }, i = oe.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && S(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    }))
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var c, l, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !u && !a,
                            x = !1;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                x = (d = (c = (l = (f = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        l[e] = [T, d, x];
                                        break
                                    }
                            } else if (v && (x = d = (c = (l = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++x && (v && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae((function(e, n) {
                        var r, o = i(e, t),
                            s = o.length;
                        while (s--) e[r = O(e, o[s])] = !(n[r] = o[s])
                    })) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: ae((function(e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(B, "$1"));
                    return r[b] ? ae((function(e, t, n, i) {
                        var o, s = r(e, null, i, []),
                            a = e.length;
                        while (a--)(o = s[a]) && (e[a] = !(t[a] = o))
                    })) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                })),
                has: ae((function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                })),
                contains: ae((function(e) {
                    return e = e.replace(Z, ee),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                })),
                lang: ae((function(e) {
                    return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                })),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return z.test(e.nodeName)
                },
                input: function(e) {
                    return X.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he((function() {
                    return [0]
                })),
                last: he((function(e, t) {
                    return [t - 1]
                })),
                eq: he((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                })),
                even: he((function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                })),
                odd: he((function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                })),
                lt: he((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                })),
                gt: he((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                }))
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function me() {}
        me.prototype = r.filters = r.pseudos, r.setFilters = new me, s = oe.tokenize = function(e, t) {
            var n, i, o, s, a, u, c, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, u = [], c = r.preFilter;
            while (a) {
                n && !(i = $.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = G.exec(a)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), a = a.slice(n.length));
                for (s in r.filter) !(i = K[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: s,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : N(e, u).slice(0)
        };

        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ve(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = E++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || s) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var c, l, f, p = [T, a];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || s)
                            if (f = t[b] || (t[b] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[o]) && c[0] === T && c[1] === a) return p[2] = c[2];
                                if (l[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
            return s
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), ae((function(o, s, a, u) {
                var c, l, f, p = [],
                    d = [],
                    h = s.length,
                    g = o || be(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : we(g, p, e, a, u),
                    y = n ? i || (o ? e : h || r) ? [] : s : m;
                if (n && n(m, y, a, u), r) {
                    c = we(y, d), r(c, [], a, u), l = c.length;
                    while (l--)(f = c[l]) && (y[d[l]] = !(m[d[l]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            c = [], l = y.length;
                            while (l--)(f = y[l]) && c.push(m[l] = f);
                            i(null, y = [], c, u)
                        }
                        l = y.length;
                        while (l--)(f = y[l]) && (c = i ? O(o, f) : p[l]) > -1 && (o[c] = !(s[c] = f))
                    }
                } else y = we(y === s ? y.splice(h, y.length) : y), i ? i(null, s, y, u) : I.apply(s, y)
            }))
        }

        function Ee(e) {
            for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, l = ve((function(e) {
                    return e === t
                }), a, !0), f = ve((function(e) {
                    return O(t, e) > -1
                }), a, !0), p = [function(e, n, r) {
                    var i = !s && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [ve(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ye(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && ye(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Se(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, s, a, u, l) {
                    var f, h, m, y = 0,
                        v = "0",
                        x = o && [],
                        b = [],
                        w = c,
                        E = o || i && r.find.TAG("*", l),
                        S = T += null == w ? 1 : Math.random() || .1,
                        N = E.length;
                    for (l && (c = s === d || s || l); v !== N && null != (f = E[v]); v++) {
                        if (i && f) {
                            h = 0, s || f.ownerDocument === d || (p(f), a = !g);
                            while (m = e[h++])
                                if (m(f, s || d, a)) {
                                    u.push(f);
                                    break
                                } l && (T = S)
                        }
                        n && ((f = !m && f) && y--, o && x.push(f))
                    }
                    if (y += v, n && v !== y) {
                        h = 0;
                        while (m = t[h++]) m(x, b, s, a);
                        if (o) {
                            if (y > 0)
                                while (v--) x[v] || b[v] || (b[v] = k.call(u));
                            b = we(b)
                        }
                        I.apply(u, b), l && !o && b.length > 0 && y + t.length > 1 && oe.uniqueSort(u)
                    }
                    return l && (T = S, c = w), x
                };
            return n ? ae(o) : o
        }
        return a = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = A[e + " "];
            if (!o) {
                t || (t = s(e)), n = t.length;
                while (n--)(o = Ee(t[n]))[b] ? r.push(o) : i.push(o);
                (o = A(e, Se(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, c, l, f, p = "function" == typeof e && e,
                d = !i && s(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = K.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (c = u[o], r.relative[l = c.type]) break;
                    if ((f = r.find[l]) && (i = f(c.matches[0].replace(Z, ee), Q.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ye(u))) return I.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || a(e, d))(i, t, !g, n, !t || Q.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(C).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue((function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        })), ue((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ce("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ue((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ce("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function(e) {
            return null == e.getAttribute("disabled")
        })) || ce(j, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), oe
    }(e);
    w.find = S, w.expr = S.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = S.uniqueSort, w.text = S.getText, w.isXMLDoc = S.isXML, w.contains = S.contains, w.escapeSelector = S.escape;
    var N = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        A = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        C = w.expr.match.needsContext;

    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return g(t) ? w.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        })) : t.nodeType ? w.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? w.grep(e, (function(e) {
            return u.call(t, e) > -1 !== n
        })) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && C.test(e) ? w(e) : e || [], !1).length
        }
    });
    var M, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || M, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, M = w(r);
    var L = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && w(e);
            if (!C.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function j(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return N(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return N(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return N(e, "nextSibling")
        },
        prevAll: function(e) {
            return N(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return N(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return N(e, "previousSibling", n)
        },
        siblings: function(e) {
            return A((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return A(e.firstChild)
        },
        contents: function(e) {
            return _(e, "iframe") ? e.contentDocument : (_(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(P) || [], (function(e, n) {
            t[n] = !0
        })), t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            s = [],
            a = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; s.length; a = -1) {
                    n = s.shift();
                    while (++a < o.length) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        w.each(n, (function(n, r) {
                            g(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        }))
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return w.each(arguments, (function(e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= a && a--
                    })), this
                },
                has: function(e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    };

    function H(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function U(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred((function(t) {
                            w.each(n, (function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]]((function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function s(t, n, r, i) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = r.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? i ? c.call(e, s(o, n, H, i), s(o, n, q, i)) : (o++, c.call(e, s(o, n, H, i), s(o, n, q, i), s(o, n, H, n.notifyWith))) : (r !== H && (a = void 0, u = [e]), (i || n.resolveWith)(a, u))
                                        }
                                    },
                                    l = i ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, l.stackTrace), t + 1 >= o && (r !== q && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? l() : (w.Deferred.getStackHook && (l.stackTrace = w.Deferred.getStackHook()), e.setTimeout(l))
                            }
                        }
                        return w.Deferred((function(e) {
                            n[0][3].add(s(0, e, g(i) ? i : H, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : H)), n[2][3].add(s(0, e, g(r) ? r : q))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, (function(e, t) {
                var s = t[2],
                    a = t[5];
                i[t[1]] = s.add, a && s.add((function() {
                    r = a
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            })), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                s = w.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (U(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(i[n] && i[n].then))) return s.then();
            while (n--) U(i[n], a(n), s.reject);
            return s.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var $ = w.Deferred();
    w.fn.ready = function(e) {
        return $.then(e)["catch"]((function(e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || $.resolveWith(r, [w]))
        }
    }), w.ready.then = $.then;

    function G() {
        r.removeEventListener("DOMContentLoaded", G), e.removeEventListener("load", G), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", G), e.addEventListener("load", G));
    var F = function(e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                c = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (a in n) F(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, g(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(w(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
        },
        W = /^-ms-/,
        Y = /-([a-z])/g;

    function K(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(W, "ms-").replace(Y, K)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function J() {
        this.expando = w.expando + J.uid++
    }
    J.uid = 1, J.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var V = new J,
        Q = new J,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return Q.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    n = s.length;
                    while (n--) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = X(r.slice(5)), ne(o, r, i[r]));
                    V.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            })) : F(this, (function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Q.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each((function() {
                    Q.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = V.get(e, t), n && (!r || Array.isArray(n) ? r = V.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                s = function() {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: w.Callbacks("once memory").add((function() {
                    V.remove(e, [t + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (s--)(n = V.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        ae = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = a(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            l = (w.cssNumber[t] || "px" !== c && +u) && ie.exec(w.css(e, t));
        if (l && l[3] !== c) {
            u /= 2, c = c || l[3], l = +u || 1;
            while (s--) w.style(e, t, l + c), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), l /= o;
            l *= 2, w.style(e, t, l + c), n = n || []
        }
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }
    var ce = {};

    function le(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = ce[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = V.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none", V.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                se(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function me(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && _(e, t) ? w.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    var ve = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, s, a, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
            s = s || f.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[a] || ge._default, s.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], l = u[0];
            while (l--) s = s.lastChild;
            w.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (c = w.contains(o.ownerDocument, o), s = me(f.appendChild(o), "script"), c && ye(s), n) {
            l = 0;
            while (o = s[l++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Se() {
        return !0
    }

    function Ne() {
        return !1
    }

    function Ae() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function Ce(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) Ce(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return w().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = w.guid++)), e.each((function() {
            w.event.add(this, t, i, r, n)
        }))
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, c, l, f, p, d, h, g, m = V.get(e);
            if (m) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(P) || [""]).length;
                while (c--) d = g = (a = Ee.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, l = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, c, l, f, p, d, h, g, m = V.hasData(e) && V.get(e);
            if (m && (u = m.events)) {
                c = (t = (t || "").match(P) || [""]).length;
                while (c--)
                    if (a = Ee.exec(t[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length;
                        while (o--) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || w.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[c], n, r, !0);
                w.isEmptyObject(u) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e),
                n, r, i, o, s, a, u = new Array(arguments.length),
                c = (V.get(this, "events") || {})[t.type] || [],
                l = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                a = w.event.handlers.call(this, t, c), n = 0;
                while ((o = a[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((s = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (i = ((w.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [],
                u = t.delegateCount,
                c = e.target;
            if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? w(i, this).index(c) > -1 : w.find(i, this, null, [c]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, u < t.length && a.push({
                elem: c,
                handlers: t.slice(u)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ae() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ae() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && _(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return _(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), w.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each((function() {
                w.event.remove(this, e, n, t)
            }))
        }
    });
    var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
        return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, r, i, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (o = V.access(e), s = V.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (i in c)
                    for (n = 0, r = c[i].length; n < r; n++) w.event.add(t, i, c[i][n])
            }
            Q.hasData(e) && (a = Q.access(e), u = w.extend({}, a), Q.set(t, u))
        }
    }

    function Pe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = s.apply([], t);
        var i, o, a, u, c, l, f = 0,
            p = e.length,
            d = p - 1,
            m = t[0],
            y = g(m);
        if (y || p > 1 && "string" == typeof m && !h.checkClone && ke.test(m)) return e.each((function(i) {
            var o = e.eq(i);
            y && (t[0] = m.call(this, i, o.html())), Re(o, t, n, r)
        }));
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (a = w.map(me(i, "script"), Le)).length; f < p; f++) c = i, f !== d && (c = w.clone(c, !0, !0), u && w.merge(a, me(c, "script"))), n.call(e[f], c, f);
            if (u)
                for (l = a[a.length - 1].ownerDocument, w.map(a, Oe), f = 0; f < u; f++) c = a[f], he.test(c.type || "") && !V.access(c, "globalEval") && w.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : v(c.textContent.replace(Me, ""), l, c))
        }
        return e
    }

    function He(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ye(me(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(_e, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = me(a), r = 0, i = (o = me(e)).length; r < i; r++) Pe(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || me(e), s = s || me(a), r = 0, i = o.length; r < i; r++) je(o[r], s[r]);
                else je(e, a);
            return (s = me(a, "script")).length > 0 && ye(s, !u && me(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[V.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return F(this, (function(e) {
                return void 0 === e ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Re(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Re(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Re(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return w.clone(this, e, t)
            }))
        },
        html: function(e) {
            return F(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, (function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var qe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Ue = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function() {
        function t() {
            if (l) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(l);
                var t = e.getComputedStyle(l);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), l.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), l.style.position = "absolute", s = 36 === l.offsetWidth || "absolute", be.removeChild(c), l = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, s, a, u, c = r.createElement("div"),
            l = r.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === l.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();

    function $e(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || Ue(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !h.pixelBoxStyles() && qe.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ge(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var Fe = /^(none|table(?!-c[ea]).+)/,
        We = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "Moz", "ms"],
        ze = r.createElement("div").style;

    function Je(e) {
        if (e in ze) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Xe.length;
        while (n--)
            if ((e = Xe[n] + t) in ze) return e
    }

    function Ve(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Je(e) || e), t
    }

    function Qe(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += w.css(e, n + oe[s], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[s], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[s] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[s], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[s] + "Width", !0, i) : a += w.css(e, "border" + oe[s] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5))), u
    }

    function et(e, t, n) {
        var r = Ue(e),
            i = $e(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            s = o;
        if (qe.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return s = s && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = $e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = X(t),
                    u = We.test(t),
                    c = e.style;
                if (u || (t = Ve(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = X(t);
            return We.test(t) || (t = Ve(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = $e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], (function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Fe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ae(e, Ye, (function() {
                    return et(e, t, r)
                }))
            },
            set: function(e, n, r) {
                var i, o = Ue(e),
                    s = "border-box" === w.css(e, "boxSizing", !1, o),
                    a = r && Ze(e, t, r, s, o);
                return s && h.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), a && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Qe(e, n, a)
            }
        }
    })), w.cssHooks.marginLeft = Ge(h.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Qe)
    })), w.fn.extend({
        css: function(e, t) {
            return F(this, (function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = Ue(e), i = t.length; s < i; s++) o[t[s]] = w.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }), e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function st() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick())
    }

    function at() {
        return e.setTimeout((function() {
            nt = void 0
        })), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(e, t, n) {
        var r, i, o, s, a, u, c, l, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && se(e),
            m = V.get(e, "fxshow");
        n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, p.always((function() {
            p.always((function() {
                s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
            }))
        })));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0
                }
                d[r] = m && m[r] || w.style(e, r)
            } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = V.get(e, "display")), "none" === (l = w.css(e, "display")) && (c ? l = c : (fe([e], !0), c = e.style.display || c, l = w.css(e, "display"), fe([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === w.css(e, "float") && (u || (p.done((function() {
                h.display = c
            })), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }))), u = !1;
            for (r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = V.access(e, "fxshow", {
                display: c
            }), o && (m.hidden = !g), g && fe([e], !0), p.done((function() {
                g || fe([e]), V.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            }))), u = ct(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = X(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = w.cssHooks[r]) && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            s = pt.prefilters.length,
            a = w.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (i) return !1;
                for (var t = nt || at(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || at(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            l = c.props;
        for (ft(l, c.opts.specialEasing); o < s; o++)
            if (r = pt.prefilters[o].call(c, e, l, c.opts)) return g(r.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(l, ct, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(P);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [lt],
            prefilter: function(e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    s = function() {
                        var t = pt(this, w.extend({}, e), o);
                        (i || V.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        s = V.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && ot.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = V.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), w.each(["toggle", "show", "hide"], (function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        })), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            w.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), w.timers = [], w.fx.tick = function() {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
            rt || (rt = !0, st())
        }, w.fx.stop = function() {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function(t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, (function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            }))
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return F(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && _(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = ht[s], ht[s] = i, i = null != n(e, t, r) ? s : null, ht[s] = o), i
        }
    }));
    var gt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return F(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    }));

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(P) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (g(e)) return this.each((function(t) {
                w(this).addClass(e.call(this, t, vt(this)))
            }));
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = vt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                        s = 0;
                        while (o = t[s++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = yt(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (g(e)) return this.each((function(t) {
                w(this).removeClass(e.call(this, t, vt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = vt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                        s = 0;
                        while (o = t[s++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (a = yt(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t)
            })) : this.each((function() {
                var t, i, o, s;
                if (r) {
                    i = 0, o = w(this), s = xt(e);
                    while (t = s[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = vt(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + yt(vt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each((function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                }));
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : yt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        s = i.length;
                    while (s--)((r = i[s]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var s, a, u, c, l, p, d, h, y = [i || r],
                v = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(v + w.event.triggered) && (v.indexOf(".") > -1 && (v = (x = v.split(".")).shift(), x.sort()), l = v.indexOf(":") < 0 && "on" + v, t = t[w.expando] ? t : new w.Event(v, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[v] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !m(i)) {
                    for (c = d.delegateType || v, wt.test(c + v) || (a = a.parentNode); a; a = a.parentNode) y.push(a), u = a;
                    u === (i.ownerDocument || r) && y.push(u.defaultView || u.parentWindow || e)
                }
                s = 0;
                while ((a = y[s++]) && !t.isPropagationStopped()) h = a, t.type = s > 1 ? c : d.bindType || v, (p = (V.get(a, "events") || {})[t.type] && V.get(a, "handle")) && p.apply(a, n), (p = l && a[l]) && p.apply && z(a) && (t.result = p.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = v, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), n) || !z(i) || l && g(i[v]) && !m(i) && ((u = i[l]) && (i[l] = null), w.event.triggered = v, t.isPropagationStopped() && h.addEventListener(v, Tt), i[v](), t.isPropagationStopped() && h.removeEventListener(v, Tt), w.event.triggered = void 0, u && (i[l] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = V.access(r, t);
                i || r.addEventListener(e, n, !0), V.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = V.access(r, t) - 1;
                i ? V.access(r, t, i) : (r.removeEventListener(e, n, !0), V.remove(r, t))
            }
        }
    }));
    var Et = e.location,
        St = Date.now(),
        Nt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/,
        Ct = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function kt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, (function(t, i) {
            n || At.test(e) ? r(e, i) : kt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) kt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) kt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !_t.test(e) && (this.checked || !pe.test(e))
            })).map((function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            })).get()
        }
    });
    var Mt = /%20/g,
        It = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Ht = {},
        qt = {},
        Ut = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Et.href;

    function $t(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(P) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Gt(e, t, n, r) {
        var i = {},
            o = e === qt;

        function s(a) {
            var u;
            return i[a] = !0, w.each(e[a] || [], (function(e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            })), u
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function Ft(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Wt(e, t, n) {
        var r, i, o, s, a = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Yt(e, t, n, r) {
        var i, o, s, a, u, c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        o = l.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = c[u + " " + o] || c["* " + o]))
                for (i in c)
                    if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: jt.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
        },
        ajaxPrefilter: $t(Ht),
        ajaxTransport: $t(qt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, c, l, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                y = w.Deferred(),
                v = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                E = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a) {
                                a = {};
                                while (t = Ot.exec(s)) a[t[1].toLowerCase()] = t[2]
                            }
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return l ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l) S.always(e[S.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || E;
                        return i && i.abort(t), N(0, t), this
                    }
                };
            if (y.promise(S), h.url = ((t || h.url || Et.href) + "").replace(Rt, Et.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                c = r.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Gt(Ht, h, n, S), l) return S;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Nt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), d = (Nt.test(o) ? "&" : "?") + "_=" + St++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && S.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && S.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || l)) return S.abort();
            if (E = "abort", v.add(h.complete), S.done(h.success), S.fail(h.error), i = Gt(qt, h, n, S)) {
                if (S.readyState = 1, f && m.trigger("ajaxSend", [S, h]), l) return S;
                h.async && h.timeout > 0 && (u = e.setTimeout((function() {
                    S.abort("timeout")
                }), h.timeout));
                try {
                    l = !1, i.send(b, N)
                } catch (e) {
                    if (l) throw e;
                    N(-1, e)
                }
            } else N(-1, "No Transport");

            function N(t, n, r, a) {
                var c, p, d, b, T, E = n;
                l || (l = !0, u && e.clearTimeout(u), i = void 0, s = a || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (b = Wt(h, S, r)), b = Yt(h, b, S, c), c ? (h.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = S.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = b.state, p = b.data, c = !(d = b.error))) : (d = E, !t && E || (E = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || E) + "", c ? y.resolveWith(g, [p, E, S]) : y.rejectWith(g, [S, E, d]), S.statusCode(x), x = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : d]), v.fireWith(g, [S, E]), f && (m.trigger("ajaxComplete", [S, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    })), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each((function(t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = g(e);
            return this.each((function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Kt = {
            0: 200,
            1223: 204
        },
        Xt = w.ajaxSettings.xhr();
    h.cors = !!Xt && "withCredentials" in Xt, h.ajax = Xt = !!Xt, w.ajaxTransport((function(t) {
        var n, r;
        if (h.cors || Xt && !t.crossDomain) return {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Kt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    }));
    var zt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || w.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (Jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Jt, "$1" + i) : !1 !== t.jsonp && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || w.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always((function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, zt.push(i)), s && g(o) && o(s[0]), s = o = void 0
        })), "script"
    })), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, s;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = D.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function(e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = yt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, (function(t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, c, l = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === l && (e.style.position = "relative"), a = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1) ? (s = (r = f.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return F(this, (function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }), e, r, arguments.length)
        }
    })), w.each(["top", "left"], (function(e, t) {
        w.cssHooks[t] = Ge(h.pixelPosition, (function(e, n) {
            if (n) return n = $e(e, t), qe.test(n) ? w(e).position()[t] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            w.fn[r] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                return F(this, (function(t, n, i) {
                    var o;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, a) : w.style(t, n, i, a)
                }), t, s ? i : void 0, s)
            }
        }))
    })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = _, w.isFunction = g, w.isWindow = m, w.camelCase = X, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }));
    var Vt = e.jQuery,
        Qt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Vt), w
    }, t || (e.jQuery = e.$ = w), w
}));
const e = "popup.js";
const t = "content.js";
const n = "background.js";
const r = "MSG_SEND_MESSAGE";
const i = "MSG_FORWARD_MY_LAST_MST";
const o = "MSG_MESSAGE_RESULTS";
const s = "MSG_RUN_FILTER";
const a = "MSG_PAUSE";
const u = "MSG_RESUME";
const c = "MSG_STOP";
const l = "MSG_CANCEL_OPERATION";
const f = "MSG_SETUP_BATCH";
const p = "MSG_GET_MESSAGE_RESULTS";
const d = "MSG_GET_USER_PHONENUMBER";
const h = "MSG_SHOW_WHATSAPP_TAB";
const g = "MSG_GET_PAGE_URL";
const m = "MSG_SELECT_IMAGE";
const y = "MSG_OPEN_MY_MSG_WINDOW";
const v = "MSG_IS_MY_CHAT_WINDOW";
const x = "MSG_GET_FORWARD_IMAGE_PATH";
const b = "MSG_ADD_PROFILE_PICTURE";
const w = "MSG_GET_IMAGE_COUNT";
const T = "MSG_SET_USER_PHONENUMBER";
const E = "MSG_RELOAD_ATTACHMENT";
const S = "MSG_RELOAD_ATTACHMENT_RESULT";
const N = "MSG_GET_NUMBER_ON_CURRENT_WINDOW";
const A = "MSG_UPDATE_TEMPLATES";
const C = "MSG_REGISTER_WEB_WHATSAPP_TAB";
const _ = "MSG_UNREGISTER_WEB_WHATSAPP_TAB";
const D = "MSG_NEXT_MESSAGE_IN_TIME";
const k = "MSG_VALIDATE_NUMBER";
const M = "MSG_SKIP_LINK_PREVIEW";
const I = "MSG_CLEAR_PROGRESS";
const L = "OPERATION_NONE";
const O = "OPERATION_SEND_MESSAGE";
const j = "OPERATION_FILTER";
const P = "STATUS_SENT";
const R = "STATUS_FAILED";
const H = "STATUS_PENDING";
const q = "SET_ACTIVE_WHATSAPP_TAB";

function U() {
    return new Promise(e => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (function(t) {
            e(t[0].id)
        }))
    })
}

function B(e) {
    return U().then(t => G(e, t))
}

function G(e, t) {
    return new Promise((n, r) => {
        if (t < 0) {
            console.log(`Negetive TAB ID...`)
        } else {
            chrome.tabs.sendMessage(t, e, (function(e) {
                if (chrome.runtime.lastError) {
                    r(chrome.runtime.lastError)
                }
                n(e)
            }))
        }
    })
}

function F(e) {
    return new Promise((t, n) => {
        try {
            chrome.runtime.sendMessage(e, e => {
                t(e)
            })
        } catch (e) {
            n(e)
        }
    })
}

function W(e) {
    chrome.runtime.sendMessage({
        from: "content",
        subject: "load-popup",
        html: e
    })
}

function Y() {
    const e = "https://premiumsender.in/testwa";
    
    const t = `${e}/logLogin`;
    const n = `${e}/logInstalls`;
    const r = `${e}/logRevists`;
    const i = `${e}/logSingleMsgs`;
    const o = `${e}/logBulkMsgs`;
    const s = `${e}/logLoginFailed`;
    const a = `${e}/singlemsg`;
    const u = `${e}/bulkmsg.php`;
    const c = `${e}/clist`;
    const l = `${e}/invite`;
    const f = `${e}/user`;
    const p = `${e}/pro`;
    const d = `${e}/ispro.php`;
    const h = `${e}/templates.php`;
    const g = `${e}/add.php`;   
    
    async function m(e, t, n) {
        await fetch(a, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                message: t,
                phoneNumber: n,
                userid: e
            })
        })
    }
    async function y(e, t, n) {
        await fetch(u, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                message: t,
                phoneNumbers: n,
                userid: e
            })
        })
    }
    async function v(e) {
        await fetch(`${n}?refid=${e}`)
    }
    async function x(e) {
        await fetch(`${r}?userid=${e}`)
    }
    async function b(e) {
        await fetch(`${i}?userid=${e}`)
    }
    async function w(e) {
        await fetch(`${o}?userid=${e}`)
    }
    async function T(e, n, r) {
        await fetch(`${t}?name=${encodeURI(n)}&phonenumber=${encodeURI(e)}&refid=${encodeURI(r)}`)
    }
    async function E(e) {
        await fetch(`${s}?phonenumber=${encodeURI(e)}`)
    }
    async function S(e) {
        const t = await fetch(`${f}?authid=${encodeURI(e)}`);
        const n = await t.json();
        return n
    }
    async function N(e) {
        const t = await fetch(`${p}?authid=${encodeURI(e)}`);
        const n = await t.json();
        return n
    }

    function A(e) {
        return new Promise((t, n) => {
            $.get(`${d}?authid=${encodeURI(e)}`, (function(e) {
                t(e)
            })).fail((function() {
                n()
            }))
        })
    }
    async function C(e, t) {
        await fetch(h, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                templates: t,
                authid: e
            })
        })
    }
    async function _(e) {
        const t = await fetch(`${h}?authid=${encodeURI(e)}`);
        const n = await t.json();
        return n
    }
    async function D(e) {
        const t = await fetch(g, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                authid: e
            })
        });
        return t.json()
    }
    return {
        logInstalls: v,
        logRevisits: x,
        logSingleMsgs: b,
        logBulkMsgs: w,
        logLogin: T,
        logLoginFailed: E,
        logSingleMsgDetail: m,
        logBulkMessageDetail: y,
        getUser: S,
        getUserPro: N,
        getIsPro: A,
        saveTemplates: C,
        getTemplates: _,
        logAdds: D
    }
}
const K = "KEY_AUTHID";
const X = "KEY_ACTIVE_TAB";
const z = "KEY_INSTALL_TIMESTAMP";
const J = "KEY_PHONE_NUMBERS_BULK";
const V = "KEY_CURRENT_MSG_BULK";
const Q = "KEY_AUTH_PHONENUMBER";
const Z = "KEY_AUTH_NAME";
const ee = "KEY_IS_AUTHORIZED";
const te = "KEY_BULK_MSG_COUNTRYCODE";
const ne = "KEY_REF_ID";
const re = "KEY_IS_PRO";
const ie = "KEY_PHONE_CLUMN_NUMBER";
const oe = "KEY_CSV_FILE_DATA";
const se = "KEY_FILE_NAME";
const ae = "KEY_SHEET_NAME";
const ue = "KEY_ACTIVE_SHEET";
const ce = "KEY_EXTRAS";
const le = "KEY_PHONE_COLUMN_NAME";
const fe = "KEY_EXCEL_FILE_DATA";
const pe = "KEY_START_INDEX";
const de = "KEY_FINAL_INDEX";
const he = "KEY_COUNTRY_ISO2_CODE";
const ge = "KEY_DEFAULT_COUNTRY_CODE";
const me = "KEY_INVALID_NUMBER_COUNT";
const ye = "KEY_TEMPLATES";
const ve = "KEY_TEMPLATES_UI_DATA";
const xe = "KEY_SPAM_METER_UI_DATA";
const be = "KEY_LAST_CHAT_DATETIME";
const we = "KEY_SEND_MESSAGE_UI_DATA";
const Te = "KEY_ALERT_UI_DATA";
const Ee = "KEY_NEXT_BATCH_TIMEOUT";
const Se = "KEY_ALL_PHONENUMBERS";
const Ne = "KEY_ALL_MESSAGES";
const Ae = "KEY_IS_ATTACHMENT";
const Ce = "KEY_MSG_GAP";
const _e = "KEY_BATCH_GAP";
const De = "KEY_BATCH_SIZE";
const ke = "KEY_RANDOMIZE_DELAY";
const Me = "KEY_NEXT_BATCH_INDEX";
const Ie = "KEY_NEXT_BATCH_PHONE_NUMBERS";
const Le = "KEY_NEXT_BATCH_MSGS";
const Oe = "KEY_MSG_STATUS";
const je = "KEY_PAUSED_INDEX";
const Pe = "KEY_MSG_GAP_TIMEOUT";
const Re = "KEY_MSG_GAP_RESOLVE";
const He = "KEY_CURRENT_OPRETION";
const qe = "KEY_IS_PAUSED";
const Ue = "KEY_IS_FINISHED";
const Be = "KEY_NEXT_MSG_TIMER";
const $e = "KEY_SKIP_LINK_PREVIEW_FLAG";
const Ge = "KEY_TIME_LEFT_FOR_NEXT_SHOOT";

function Fe() {
    function e(e, t) {
        return new Promise((n, r) => {
//            if(e == "KEY_LAST_CHAT_DATETIME")
//                {
//                    alert("Get call e background : " + e + "\n t: "+t);  
//                }  
            const i = {};
            i[e] = t;
            chrome.storage.local.set(i, (function() {
                n()
            }))
        })
    }

    function t(e) {
        return new Promise((t, n) => {
            chrome.storage.local.get(e, (function(n) {
                t(n[e])
            }))
        })
    }

    function n(t) {
        const n = t ? "true" : "false";
        return e(re, n)
    }
    async function r() {
        const e = await t(re);
        return e === "true" ? true : false
    }

    function i(t) {
        return e(J, JSON.stringify(t))
    }
    async function o() {
        const e = await t(J);
        if (e) {
            return JSON.parse(e)
        } else return []
    }

    function s(t) {
        return e(V, t)
    }
    async function a() {
        let e = "";
        const n = await t(V);
        if (n) {
            e = n
        }
        return e
    }

    function u(t) {
        return e(X, t)
    }

    function c() {
        return t(X)
    }

    function l(t) {
        return e(he, t)
    }

    function f() {
        return t(he)
    }

    function p(t) {
        return e(ge, t)
    }

    function d() {
        return t(ge)
    }

    function h(t) {
        return e(te, t)
    }

    function g() {
        return t(te)
    }

    function m() {
        return e(z, `${Date.now()}`)
    }

    function y() {
        return t(z)
    }

    function v() {
        return t(K)
    }

    function x(t) {
        return e(K, t)
    }

    function b() {
        return t(Q)
    }

    function w(t) {
        return e(Q, t)
    }

    function T() {
        return t(Z)
    }

    function E(t) {
        return e(Z, t)
    }

    function S() {
        return t(ne)
    }

    function N(t) {
        return e(ne, t)
    }
    async function A() {
        let e = null;
        const n = await t(fe);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }

    function C(t) {
        return e(fe, JSON.stringify(t))
    }
    async function _() {
        let e = 0;
        const n = await t(me);
        if (n) {
            e = parseInt(n, 10)
        }
        return e
    }

    function D(t) {
        return e(me, `${t}`)
    }
    async function k() {
        let e = null;
        const n = await t(ce);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }
    async function M() {
        let e = "";
        const n = await t(le);
        if (n) {
            e = n
        }
        return e
    }

    function I(t) {
        return e(le, `${t}`)
    }

    function L() {
        return t(se)
    }

    function O(t) {
        return e(se, t)
    }

    function j() {
        return t(ae)
    }

    function P(t) {
        return e(ae, t)
    }

    function R() {
        return t(ue)
    }

    function H(t) {
        return e(ue, t)
    }

    function q() {
        return t(pe)
    }

    function U(t) {
        return e(pe, t)
    }

    function B() {
        return t(de)
    }

    function $(t) {
        return e(de, t)
    }
    async function G() {
        let e = [];
        const n = await t(ye);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }
    async function F(t) {
        let n = "";
        if (t) {
            n = JSON.stringify(t)
        }
        return e(ye, n)
    }
    async function W(t) {
        let n = "";
        if (t) {
            n = JSON.stringify(t)
        }
        return e(ce, n)
    }
    async function Y() {
        let e = {};
        const n = await t(ve);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }
    async function ee(t) {
        let n = "";
        if (t) {
            n = JSON.stringify(t)
        }
        return e(ve, n)
    }
    async function ie() {
        let e = {};
        const n = await t(xe);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }
    async function oe(t) {
        let n = "";
        if (t) {
            n = JSON.stringify(t)
        }
        return e(xe, n)
    }
    async function Fe(t) {
        return e(be, t)
    }
    async function We() {
        return t(be)
    }
    async function Ye() {
        let e = {};
        const n = await t(we);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }
    async function Ke(t) {
        let n = "";
        if (t) {
            n = JSON.stringify(t)
        }
        return e(we, n)
    }
    async function Xe() {
        //alert("TEST - 1");
        let e = {};
        const n = await t(Te);
        if (n) {
            e = JSON.parse(n)
        }
        return e
    }
    async function ze(t) {
        let n = "";
        if (t) {
            n = JSON.stringify(t)
        }
        return e(Te, n)
    }

    function Je(t) {
        return e(Ee, t)
    }

    function Ve() {
        return t(Ee)
    }

    function Qe(t) {
        return e(Se, t)
    }

    function Ze() {
        return t(Se)
    }

    function et(t) {
        return e(Ne, t)
    }

    function tt() {
        return t(Ne)
    }

    function nt(t) {
        return e(Ae, t)
    }

    function rt() {
        return t(Ae)
    }

    function it(t) {
        return e(Ce, t)
    }

    function ot() {
        return t(Ce)
    }

    function st(t) {
        return e(_e, t)
    }

    function at() {
        return t(_e)
    }

    function ut(t) {
        return e(De, t)
    }

    function ct() {
        return t(De)
    }

    function lt(t) {
        return e(ke, t)
    }

    function ft() {
        return t(ke)
    }

    function pt(t) {
        return e(Me, t)
    }

    function dt() {
        return t(Me)
    }

    function ht(t) {
        return e(Ie, t)
    }

    function gt() {
        return t(Ie)
    }

    function mt(t) {
        return e(Le, t)
    }

    function yt() {
        return t(Le)
    }

    function vt(t) {
        return e(Oe, t)
    }

    function xt() {
        return t(Oe)
    }

    function bt(t) {
        return e(je, t)
    }

    function wt() {
        return t(je)
    }

    function Tt(t) {
        return e(Pe, t)
    }

    function Et() {
        return t(Pe)
    }

    function St(t) {
        return e(Re, t)
    }

    function Nt() {
        return t(Re)
    }

    function At(t) {
        return e(He, t)
    }

    function Ct() {
        return t(He)
    }

    function _t(t) {
        return e(qe, t)
    }

    function Dt() {
        return t(qe)
    }

    function kt(t) {
        return e(Ue, t)
    }

    function Mt() {
        return t(Ue)
    }

    function It(t) {
        return e(Be, t)
    }

    function Lt() {
        return t(Be)
    }

    function Ot(t) {
        return e($e, t)
    }

    function jt() {
        return t($e)
    }

    function Pt(t) {
        return e(Ge, t)
    }

    function Rt() {
        return t(Ge)
    }
    return {
        getPhoneNumbersBulk: o,
        saveCurrentMessageBulk: s,
        savePhoneNumbersBulk: i,
        getCurrentMessageBulk: a,
        getActiveTab: c,
        saveActiveTab: u,
        saveBulkMsgCountryCode: h,
        getBulkMsgCountryCode: g,
        getInstallTimeStamp: y,
        setInstallTimeStamp: m,
        getAuthId: v,
        saveAuthId: x,
        getAuthName: T,
        saveAuthName: E,
        getAuthPhoneNumber: b,
        saveAuthPhoneNumber: w,
        getRefID: S,
        saveRefID: N,
        setIsPro: n,
        getIsPro: r,
        getExcelFileData: A,
        saveExcelFileData: C,
        getPhoneColumnName: M,
        savePhoneColumnName: I,
        getFileName: L,
        saveFileName: O,
        getSheetName: j,
        saveSheetName: P,
        getActiveSheet: R,
        saveActiveSheet: H,
        getStartIndex: q,
        saveStartIndex: U,
        getFinalIndex: B,
        saveFinalIndex: $,
        getExtras: k,
        saveISO2CountryCode: l,
        getISO2CountryCode: f,
        saveDefaultCountryCode: p,
        getDefaultCountryCode: d,
        saveInvalidNumberCount: D,
        getInvalidNumberCount: _,
        getTemplates: G,
        saveTemplates: F,
        getTemplatesUIData: Y,
        saveTemplatesUIData: ee,
        getSpamMeterUIData: ie,
        saveSpamMeterUIData: oe,
        saveAdds: W,
        saveLastChatDateTime: Fe,
        getLastChatDateTime: We,
        getSendMessageUIData: Ye,
        saveSendMessageUIData: Ke,
        getAlertUIData: Xe,
        saveAlertUIData: ze,
        saveNextBatchTimeOut: Je,
        getNextBatchTimeOut: Ve,
        saveAllPhoneNumbers: Qe,
        getAllPhoneNumbers: Ze,
        saveAllMessages: et,
        getAllMessages: tt,
        saveIsAttachment: nt,
        getIsAttachment: rt,
        saveMessageGap: it,
        getMessageGap: ot,
        saveBatchGap: st,
        getBatchGap: at,
        saveBatchSize: ut,
        getBatchSize: ct,
        saveRandomizeDelay: lt,
        getRandomizeDelay: ft,
        saveNextBatchIndex: pt,
        getNextBatchIndex: dt,
        saveNextBatchPhoneNumbers: ht,
        getNextBatchPhoneNumbers: gt,
        saveNextBatchMessages: mt,
        getNextBatchMessages: yt,
        saveMessageStatus: vt,
        getMessageStatus: xt,
        savePausedIndex: bt,
        getPausedIndex: wt,
        saveMessageGapTimeout: Tt,
        getMessageGapTimeout: Et,
        saveMessageGapResolve: St,
        getMessageGapResolve: Nt,
        saveCurrentOperation: At,
        getCurrentOperation: Ct,
        saveIsPaused: _t,
        getIsPaused: Dt,
        saveIsFinished: kt,
        getIsFinished: Mt,
        getIsFinished: Mt,
        saveNextMessageTimer: It,
        getNextMessageTimer: Lt,
        saveSkipLinkPreviewFlag: Ot,
        getSkipLinkPreviewFlag: jt,
        saveTimeLeftForNextShoot: Pt,
        getTimeLeftForNextShoot: Rt
    }
}

function We() {
    const e = "http://ip-api.com/json";
    async function t() {
        try {
            const t = await fetch(e);
            const n = await t.json();
            if (n && n.status == "success" && n.countryCode) {
                return n.countryCode
            }
        } catch (e) {}
    }
    return {
        find: t
    }
}

function Ye() {
    const e = 60 * 1e3;
    let t = [];
    let i = [];
    let s = false;
    let a = 0;
    let u = 0;
    let c = 0;
    let l = false;
    let f = null;
    let p = L;
    let d = false;
    let h = true;
    let g = 0;
    let m = -1;
    let y = [];
    let v = [];
    let x = [];
    let b = re();
    let w = null;
    let T = null;
    let E = false;
    let S;

    function N() {}
    async function A(e, n) {
        _();
        p = n;
        t = e.numbers ? e.numbers : [];
        i = e.messages ? e.messages : t.map(e => "");
        s = e.attachment ? e.attachment : false;
        a = e.messageGap ? e.messageGap : 0;
        l = e.randomizeDelay ? e.randomizeDelay : false;
        u = e.batchGap ? e.batchGap : 0;
        c = e.batchSize ? e.batchSize : t.length;
        x = [];
        t.forEach(e => x.push(H));
        let r = e.startTime ? e.startTime : Date.now();
        N();
        C(r)
    }

    function C(e) {
        if (m < 0) {
            m = 0
        } else {
            m = m + 1
        }
        if (c > 0) {
            y = t.slice(m * c, (m + 1) * c);
            v = i.slice(m * c, (m + 1) * c)
        }
        if (e) {
            e = e - Date.now();
            if (e < 0) {
                e = 0
            }
        } else {
            e = 0
        }
        if (y && y.length > 0) {
            f = setTimeout((function() {
                f = null;
                $()
            }), e)
        } else {
            h = true;
            K();
            b.cancel();
            ne()
        }
    }

    function _() {
        B();
        b.cancel();
        M();
        q();
        U();
        ne()
    }

    function M() {
        t = [];
        i = [];
        x = [];
        s = false;
        a = 0;
        u = 0;
        c = 0;
        d = false;
        h = false;
        p = L;
        E = false
    }

    function q() {
        m = -1;
        y = [];
        v = []
    }

    function U() {
        if (w) {
            clearTimeout(w);
            w = null
        }
        if (T) {
            T();
            T = null
        }
    }

    function B() {
        if (f) {
            clearTimeout(f);
            g = 0
        }
        f = null
    }
    async function $(e = 0, t = 0) {
        g = e;
        for (let n = e; n < y.length; ++n) {
            await W(t);
            t = 0;
            if (Je !== Xe && !d) {
                if (y.length > n) {
                    try {
                        const e = await Y(y[n], v[n], s);
                        e ? x[m * c + n] = P : x[m * c + n] = R
                    } catch (e) {
                        V();
                        break
                    }
                    K();
                    g = n + 1
                }
            } else {
                V();
                break
            }
        }
        if (!d) {
            const e = X();
            b.set(Date.now() + e);
            C(Date.now() + e)
        }
    }

    function W(e) {
        return new Promise((t, n) => {
            let r;
            if (e !== 0) {
                r = e
            } else {
                r = z()
            }
            b.set(Date.now() + r);
            w = setTimeout(() => {
                w = null;
                T = null;
                t()
            }, r);
            T = t
        })
    }

    function Y(e, t, i) {
        b.cancel();
        if (p === O) {
            return G({
                from: n,
                subject: r,
                data: {
                    message: t,
                    number: e,
                    isAttachment: i,
                    skipLinkPreview: E
                }
            }, Je)
        } else if (p === j) {
            return G({
                from: n,
                subject: k,
                data: {
                    number: e
                }
            }, Je)
        }
    }

    function K() {
        F({
            from: n,
            subject: o,
            data: J()
        })
    }

    function X() {
        return u * e
    }

    function z() {
        let e = 0;
        if (l && Math.random() < .5) {
            e = a * 1e3 / 2
        } else {
            e = a * 1e3
        }
        return e
    }

    function J() {
        return {
            isFinished: h,
            operation: p,
            isPaused: d,
            numbers: t,
            messages: i,
            status: x
        }
    }

    function V() {
        if (p !== "OPERATION_NONE" && x.filter(e => e === "STATUS_PENDING").length > 0) {
            if (!d) {
                d = true;
                S = b.getTimeLeftForNextShoot();
                U();
                B();
                K();
                b.cancel();
                b.sendUpdates();
                N()
            }
        }
    }

    function Q() {
        h = true;
        d = true;
        U();
        B();
        K();
        b.cancel();
        b.sendUpdates()
    }

    function Z() {
        if (d) {
            N();
            d = false;
            ne();
            $(g, S)
        }
    }

    function ee() {
        _()
    }

    function te() {
        E = true
    }

    function ne() {
        G({
            from: n,
            subject: I
        }, Je);
        F({
            from: n,
            subject: I
        })
    }
    return {
        init: A,
        getReport: J,
        pause: V,
        resume: Z,
        abort: ee,
        stop: Q,
        skipLinkPreview: te
    };

    function re() {
        const e = 0 * 1e3;
        const t = 1e3;
        let r = null;
        let i = 0;

        function o(n) {
            i = n;
            c();
            if (i - Date.now() > e) {
                r = setInterval(s, t)
            }
        }

        function s() {
            a();
            u()
        }

        function a() {
            F({
                from: n,
                subject: D,
                data: {
                    nextMessageTime: i,
                    operation: p,
                    isPaused: d,
                    isFinished: h
                }
            }, Je)
        }

        function u() {
            G({
                from: n,
                subject: D,
                data: {
                    nextMessageTime: i,
                    operation: p,
                    isPaused: d,
                    isFinished: h
                }
            }, Je)
        }

        function c() {
            if (r) {
                clearInterval(r)
            }
        }

        function l() {
            return i - Date.now()
        }
        return {
            cancel: c,
            set: o,
            sendUpdates: s,
            getTimeLeftForNextShoot: l
        }
    }
}
const Ke = Fe();
const Xe = -1;
const ze = Ye();
let Je = Xe;
chrome.runtime.onInstalled.addListener((async function(e) {
    var t = {
        type: "basic",
        iconUrl: "img/icon128.png",
        title: "Premium Sender Installation Finished.",
        message: "Click on Pr Icon above"
    };
    try {
        chrome.notifications.create(t, (function(e) {}))
    } catch (e) {}
    window.open("https://web.whatsapp.com/", "_blank");
    const n = await We().find();
    if (n) {
        Ke.saveDefaultCountryCode(n)
    }
}));
chrome.runtime.setUninstallURL("https://premiumsender.in/uninstall.php?authid=");
chrome.runtime.onMessage.addListener((async function(e, t, n) {    
    let r = null;
    if (e && e.subject) {
        switch (e.subject) {
            case T: {
                chrome.runtime.setUninstallURL(`https://premiumsender.in/uninstall.php?authid=`+e.data);
                break
            }
            case f: {
                ze.init(e.data, O);
                break
            }
            case p: {
                r = ze.getReport();
                break
            }
            case s: {
                ze.init(e.data, j);
                break
            }
            case a: {
                ze.pause();
                break
            }
            case c: {
                ze.stop();
                break
            }
            case l: {
                ze.abort();
                break
            }
            case u: {
                ze.resume();
                break
            }
            case q: {
                console.log(`activeTabId:${e.data.tabId}`);
                if (e && e.data && e.data.tabId) {
                    Je = e.data.tabId
                }
                break
            }
            case C: {
                let e = Ve(t);
                if (Je !== Xe) {
                    ze.pause()
                }
                Je = e;
                break
            }
            case _: {
                let e = Ve(t);
                if (e === Je) {
                    Je = Xe;
                    ze.pause()
                }
                break
            }
            case M: {
                ze.skipLinkPreview();
                break
            }
        }
    }
    n(r)
}));

function Ve(e) {
    let t = Xe;
    if (e && e.tab && e.tab.id) {
        t = e.tab.id
    }
    return t
}