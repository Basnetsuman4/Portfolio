(function () {
	const A = document.createElement("link").relList;
	if (A && A.supports && A.supports("modulepreload")) return;
	for (const D of document.querySelectorAll('link[rel="modulepreload"]')) d(D);
	new MutationObserver((D) => {
		for (const Y of D)
			if (Y.type === "childList")
				for (const P of Y.addedNodes)
					P.tagName === "LINK" && P.rel === "modulepreload" && d(P);
	}).observe(document, { childList: !0, subtree: !0 });
	function N(D) {
		const Y = {};
		return (
			D.integrity && (Y.integrity = D.integrity),
			D.referrerPolicy && (Y.referrerPolicy = D.referrerPolicy),
			D.crossOrigin === "use-credentials"
				? (Y.credentials = "include")
				: D.crossOrigin === "anonymous"
					? (Y.credentials = "omit")
					: (Y.credentials = "same-origin"),
			Y
		);
	}
	function d(D) {
		if (D.ep) return;
		D.ep = !0;
		const Y = N(D);
		fetch(D.href, Y);
	}
})();
function jd(v) {
	return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default")
		? v.default
		: v;
}
var ff = { exports: {} },
	pu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd;
function ch() {
	if (bd) return pu;
	bd = 1;
	var v = Symbol.for("react.transitional.element"),
		A = Symbol.for("react.fragment");
	function N(d, D, Y) {
		var P = null;
		if (
			(Y !== void 0 && (P = "" + Y),
			D.key !== void 0 && (P = "" + D.key),
			"key" in D)
		) {
			Y = {};
			for (var dt in D) dt !== "key" && (Y[dt] = D[dt]);
		} else Y = D;
		return (
			(D = Y.ref),
			{ $$typeof: v, type: d, key: P, ref: D !== void 0 ? D : null, props: Y }
		);
	}
	return ((pu.Fragment = A), (pu.jsx = N), (pu.jsxs = N), pu);
}
var Sd;
function fh() {
	return (Sd || ((Sd = 1), (ff.exports = ch())), ff.exports);
}
var m = fh(),
	sf = { exports: {} },
	G = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function sh() {
	if (xd) return G;
	xd = 1;
	var v = Symbol.for("react.transitional.element"),
		A = Symbol.for("react.portal"),
		N = Symbol.for("react.fragment"),
		d = Symbol.for("react.strict_mode"),
		D = Symbol.for("react.profiler"),
		Y = Symbol.for("react.consumer"),
		P = Symbol.for("react.context"),
		dt = Symbol.for("react.forward_ref"),
		M = Symbol.for("react.suspense"),
		E = Symbol.for("react.memo"),
		Z = Symbol.for("react.lazy"),
		R = Symbol.for("react.activity"),
		ut = Symbol.iterator;
	function Ht(o) {
		return o === null || typeof o != "object"
			? null
			: ((o = (ut && o[ut]) || o["@@iterator"]),
				typeof o == "function" ? o : null);
	}
	var Rt = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		qt = Object.assign,
		Ml = {};
	function Ft(o, T, j) {
		((this.props = o),
			(this.context = T),
			(this.refs = Ml),
			(this.updater = j || Rt));
	}
	((Ft.prototype.isReactComponent = {}),
		(Ft.prototype.setState = function (o, T) {
			if (typeof o != "object" && typeof o != "function" && o != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, o, T, "setState");
		}),
		(Ft.prototype.forceUpdate = function (o) {
			this.updater.enqueueForceUpdate(this, o, "forceUpdate");
		}));
	function Fl() {}
	Fl.prototype = Ft.prototype;
	function Ct(o, T, j) {
		((this.props = o),
			(this.context = T),
			(this.refs = Ml),
			(this.updater = j || Rt));
	}
	var cl = (Ct.prototype = new Fl());
	((cl.constructor = Ct), qt(cl, Ft.prototype), (cl.isPureReactComponent = !0));
	var zl = Array.isArray;
	function Xt() {}
	var W = { H: null, A: null, T: null, S: null },
		Qt = Object.prototype.hasOwnProperty;
	function Tl(o, T, j) {
		var U = j.ref;
		return {
			$$typeof: v,
			type: o,
			key: T,
			ref: U !== void 0 ? U : null,
			props: j,
		};
	}
	function Ze(o, T) {
		return Tl(o.type, T, o.props);
	}
	function El(o) {
		return typeof o == "object" && o !== null && o.$$typeof === v;
	}
	function Lt(o) {
		var T = { "=": "=0", ":": "=2" };
		return (
			"$" +
			o.replace(/[=:]/g, function (j) {
				return T[j];
			})
		);
	}
	var ze = /\/+/g;
	function Ol(o, T) {
		return typeof o == "object" && o !== null && o.key != null
			? Lt("" + o.key)
			: T.toString(36);
	}
	function bl(o) {
		switch (o.status) {
			case "fulfilled":
				return o.value;
			case "rejected":
				throw o.reason;
			default:
				switch (
					(typeof o.status == "string"
						? o.then(Xt, Xt)
						: ((o.status = "pending"),
							o.then(
								function (T) {
									o.status === "pending" &&
										((o.status = "fulfilled"), (o.value = T));
								},
								function (T) {
									o.status === "pending" &&
										((o.status = "rejected"), (o.reason = T));
								},
							)),
					o.status)
				) {
					case "fulfilled":
						return o.value;
					case "rejected":
						throw o.reason;
				}
		}
		throw o;
	}
	function x(o, T, j, U, X) {
		var V = typeof o;
		(V === "undefined" || V === "boolean") && (o = null);
		var lt = !1;
		if (o === null) lt = !0;
		else
			switch (V) {
				case "bigint":
				case "string":
				case "number":
					lt = !0;
					break;
				case "object":
					switch (o.$$typeof) {
						case v:
						case A:
							lt = !0;
							break;
						case Z:
							return ((lt = o._init), x(lt(o._payload), T, j, U, X));
					}
			}
		if (lt)
			return (
				(X = X(o)),
				(lt = U === "" ? "." + Ol(o, 0) : U),
				zl(X)
					? ((j = ""),
						lt != null && (j = lt.replace(ze, "$&/") + "/"),
						x(X, T, j, "", function (ja) {
							return ja;
						}))
					: X != null &&
						(El(X) &&
							(X = Ze(
								X,
								j +
									(X.key == null || (o && o.key === X.key)
										? ""
										: ("" + X.key).replace(ze, "$&/") + "/") +
									lt,
							)),
						T.push(X)),
				1
			);
		lt = 0;
		var Yt = U === "" ? "." : U + ":";
		if (zl(o))
			for (var gt = 0; gt < o.length; gt++)
				((U = o[gt]), (V = Yt + Ol(U, gt)), (lt += x(U, T, j, V, X)));
		else if (((gt = Ht(o)), typeof gt == "function"))
			for (o = gt.call(o), gt = 0; !(U = o.next()).done; )
				((U = U.value), (V = Yt + Ol(U, gt++)), (lt += x(U, T, j, V, X)));
		else if (V === "object") {
			if (typeof o.then == "function") return x(bl(o), T, j, U, X);
			throw (
				(T = String(o)),
				Error(
					"Objects are not valid as a React child (found: " +
						(T === "[object Object]"
							? "object with keys {" + Object.keys(o).join(", ") + "}"
							: T) +
						"). If you meant to render a collection of children, use an array instead.",
				)
			);
		}
		return lt;
	}
	function _(o, T, j) {
		if (o == null) return o;
		var U = [],
			X = 0;
		return (
			x(o, U, "", "", function (V) {
				return T.call(j, V, X++);
			}),
			U
		);
	}
	function q(o) {
		if (o._status === -1) {
			var T = o._result;
			((T = T()),
				T.then(
					function (j) {
						(o._status === 0 || o._status === -1) &&
							((o._status = 1), (o._result = j));
					},
					function (j) {
						(o._status === 0 || o._status === -1) &&
							((o._status = 2), (o._result = j));
					},
				),
				o._status === -1 && ((o._status = 0), (o._result = T)));
		}
		if (o._status === 1) return o._result.default;
		throw o._result;
	}
	var nt =
			typeof reportError == "function"
				? reportError
				: function (o) {
						if (
							typeof window == "object" &&
							typeof window.ErrorEvent == "function"
						) {
							var T = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									typeof o == "object" &&
									o !== null &&
									typeof o.message == "string"
										? String(o.message)
										: String(o),
								error: o,
							});
							if (!window.dispatchEvent(T)) return;
						} else if (
							typeof process == "object" &&
							typeof process.emit == "function"
						) {
							process.emit("uncaughtException", o);
							return;
						}
						console.error(o);
					},
		st = {
			map: _,
			forEach: function (o, T, j) {
				_(
					o,
					function () {
						T.apply(this, arguments);
					},
					j,
				);
			},
			count: function (o) {
				var T = 0;
				return (
					_(o, function () {
						T++;
					}),
					T
				);
			},
			toArray: function (o) {
				return (
					_(o, function (T) {
						return T;
					}) || []
				);
			},
			only: function (o) {
				if (!El(o))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return o;
			},
		};
	return (
		(G.Activity = R),
		(G.Children = st),
		(G.Component = Ft),
		(G.Fragment = N),
		(G.Profiler = D),
		(G.PureComponent = Ct),
		(G.StrictMode = d),
		(G.Suspense = M),
		(G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
		(G.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (o) {
				return W.H.useMemoCache(o);
			},
		}),
		(G.cache = function (o) {
			return function () {
				return o.apply(null, arguments);
			};
		}),
		(G.cacheSignal = function () {
			return null;
		}),
		(G.cloneElement = function (o, T, j) {
			if (o == null)
				throw Error(
					"The argument must be a React element, but you passed " + o + ".",
				);
			var U = qt({}, o.props),
				X = o.key;
			if (T != null)
				for (V in (T.key !== void 0 && (X = "" + T.key), T))
					!Qt.call(T, V) ||
						V === "key" ||
						V === "__self" ||
						V === "__source" ||
						(V === "ref" && T.ref === void 0) ||
						(U[V] = T[V]);
			var V = arguments.length - 2;
			if (V === 1) U.children = j;
			else if (1 < V) {
				for (var lt = Array(V), Yt = 0; Yt < V; Yt++)
					lt[Yt] = arguments[Yt + 2];
				U.children = lt;
			}
			return Tl(o.type, X, U);
		}),
		(G.createContext = function (o) {
			return (
				(o = {
					$$typeof: P,
					_currentValue: o,
					_currentValue2: o,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(o.Provider = o),
				(o.Consumer = { $$typeof: Y, _context: o }),
				o
			);
		}),
		(G.createElement = function (o, T, j) {
			var U,
				X = {},
				V = null;
			if (T != null)
				for (U in (T.key !== void 0 && (V = "" + T.key), T))
					Qt.call(T, U) &&
						U !== "key" &&
						U !== "__self" &&
						U !== "__source" &&
						(X[U] = T[U]);
			var lt = arguments.length - 2;
			if (lt === 1) X.children = j;
			else if (1 < lt) {
				for (var Yt = Array(lt), gt = 0; gt < lt; gt++)
					Yt[gt] = arguments[gt + 2];
				X.children = Yt;
			}
			if (o && o.defaultProps)
				for (U in ((lt = o.defaultProps), lt))
					X[U] === void 0 && (X[U] = lt[U]);
			return Tl(o, V, X);
		}),
		(G.createRef = function () {
			return { current: null };
		}),
		(G.forwardRef = function (o) {
			return { $$typeof: dt, render: o };
		}),
		(G.isValidElement = El),
		(G.lazy = function (o) {
			return { $$typeof: Z, _payload: { _status: -1, _result: o }, _init: q };
		}),
		(G.memo = function (o, T) {
			return { $$typeof: E, type: o, compare: T === void 0 ? null : T };
		}),
		(G.startTransition = function (o) {
			var T = W.T,
				j = {};
			W.T = j;
			try {
				var U = o(),
					X = W.S;
				(X !== null && X(j, U),
					typeof U == "object" &&
						U !== null &&
						typeof U.then == "function" &&
						U.then(Xt, nt));
			} catch (V) {
				nt(V);
			} finally {
				(T !== null && j.types !== null && (T.types = j.types), (W.T = T));
			}
		}),
		(G.unstable_useCacheRefresh = function () {
			return W.H.useCacheRefresh();
		}),
		(G.use = function (o) {
			return W.H.use(o);
		}),
		(G.useActionState = function (o, T, j) {
			return W.H.useActionState(o, T, j);
		}),
		(G.useCallback = function (o, T) {
			return W.H.useCallback(o, T);
		}),
		(G.useContext = function (o) {
			return W.H.useContext(o);
		}),
		(G.useDebugValue = function () {}),
		(G.useDeferredValue = function (o, T) {
			return W.H.useDeferredValue(o, T);
		}),
		(G.useEffect = function (o, T) {
			return W.H.useEffect(o, T);
		}),
		(G.useEffectEvent = function (o) {
			return W.H.useEffectEvent(o);
		}),
		(G.useId = function () {
			return W.H.useId();
		}),
		(G.useImperativeHandle = function (o, T, j) {
			return W.H.useImperativeHandle(o, T, j);
		}),
		(G.useInsertionEffect = function (o, T) {
			return W.H.useInsertionEffect(o, T);
		}),
		(G.useLayoutEffect = function (o, T) {
			return W.H.useLayoutEffect(o, T);
		}),
		(G.useMemo = function (o, T) {
			return W.H.useMemo(o, T);
		}),
		(G.useOptimistic = function (o, T) {
			return W.H.useOptimistic(o, T);
		}),
		(G.useReducer = function (o, T, j) {
			return W.H.useReducer(o, T, j);
		}),
		(G.useRef = function (o) {
			return W.H.useRef(o);
		}),
		(G.useState = function (o) {
			return W.H.useState(o);
		}),
		(G.useSyncExternalStore = function (o, T, j) {
			return W.H.useSyncExternalStore(o, T, j);
		}),
		(G.useTransition = function () {
			return W.H.useTransition();
		}),
		(G.version = "19.2.4"),
		G
	);
}
var pd;
function hf() {
	return (pd || ((pd = 1), (sf.exports = sh())), sf.exports);
}
var Wl = hf();
const oh = jd(Wl);
var of = { exports: {} },
	zu = {},
	df = { exports: {} },
	rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function dh() {
	return (
		zd ||
			((zd = 1),
			(function (v) {
				function A(x, _) {
					var q = x.length;
					x.push(_);
					t: for (; 0 < q; ) {
						var nt = (q - 1) >>> 1,
							st = x[nt];
						if (0 < D(st, _)) ((x[nt] = _), (x[q] = st), (q = nt));
						else break t;
					}
				}
				function N(x) {
					return x.length === 0 ? null : x[0];
				}
				function d(x) {
					if (x.length === 0) return null;
					var _ = x[0],
						q = x.pop();
					if (q !== _) {
						x[0] = q;
						t: for (var nt = 0, st = x.length, o = st >>> 1; nt < o; ) {
							var T = 2 * (nt + 1) - 1,
								j = x[T],
								U = T + 1,
								X = x[U];
							if (0 > D(j, q))
								U < st && 0 > D(X, j)
									? ((x[nt] = X), (x[U] = q), (nt = U))
									: ((x[nt] = j), (x[T] = q), (nt = T));
							else if (U < st && 0 > D(X, q))
								((x[nt] = X), (x[U] = q), (nt = U));
							else break t;
						}
					}
					return _;
				}
				function D(x, _) {
					var q = x.sortIndex - _.sortIndex;
					return q !== 0 ? q : x.id - _.id;
				}
				if (
					((v.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var Y = performance;
					v.unstable_now = function () {
						return Y.now();
					};
				} else {
					var P = Date,
						dt = P.now();
					v.unstable_now = function () {
						return P.now() - dt;
					};
				}
				var M = [],
					E = [],
					Z = 1,
					R = null,
					ut = 3,
					Ht = !1,
					Rt = !1,
					qt = !1,
					Ml = !1,
					Ft = typeof setTimeout == "function" ? setTimeout : null,
					Fl = typeof clearTimeout == "function" ? clearTimeout : null,
					Ct = typeof setImmediate < "u" ? setImmediate : null;
				function cl(x) {
					for (var _ = N(E); _ !== null; ) {
						if (_.callback === null) d(E);
						else if (_.startTime <= x)
							(d(E), (_.sortIndex = _.expirationTime), A(M, _));
						else break;
						_ = N(E);
					}
				}
				function zl(x) {
					if (((qt = !1), cl(x), !Rt))
						if (N(M) !== null) ((Rt = !0), Xt || ((Xt = !0), Lt()));
						else {
							var _ = N(E);
							_ !== null && bl(zl, _.startTime - x);
						}
				}
				var Xt = !1,
					W = -1,
					Qt = 5,
					Tl = -1;
				function Ze() {
					return Ml ? !0 : !(v.unstable_now() - Tl < Qt);
				}
				function El() {
					if (((Ml = !1), Xt)) {
						var x = v.unstable_now();
						Tl = x;
						var _ = !0;
						try {
							t: {
								((Rt = !1), qt && ((qt = !1), Fl(W), (W = -1)), (Ht = !0));
								var q = ut;
								try {
									l: {
										for (
											cl(x), R = N(M);
											R !== null && !(R.expirationTime > x && Ze());
										) {
											var nt = R.callback;
											if (typeof nt == "function") {
												((R.callback = null), (ut = R.priorityLevel));
												var st = nt(R.expirationTime <= x);
												if (((x = v.unstable_now()), typeof st == "function")) {
													((R.callback = st), cl(x), (_ = !0));
													break l;
												}
												(R === N(M) && d(M), cl(x));
											} else d(M);
											R = N(M);
										}
										if (R !== null) _ = !0;
										else {
											var o = N(E);
											(o !== null && bl(zl, o.startTime - x), (_ = !1));
										}
									}
									break t;
								} finally {
									((R = null), (ut = q), (Ht = !1));
								}
								_ = void 0;
							}
						} finally {
							_ ? Lt() : (Xt = !1);
						}
					}
				}
				var Lt;
				if (typeof Ct == "function")
					Lt = function () {
						Ct(El);
					};
				else if (typeof MessageChannel < "u") {
					var ze = new MessageChannel(),
						Ol = ze.port2;
					((ze.port1.onmessage = El),
						(Lt = function () {
							Ol.postMessage(null);
						}));
				} else
					Lt = function () {
						Ft(El, 0);
					};
				function bl(x, _) {
					W = Ft(function () {
						x(v.unstable_now());
					}, _);
				}
				((v.unstable_IdlePriority = 5),
					(v.unstable_ImmediatePriority = 1),
					(v.unstable_LowPriority = 4),
					(v.unstable_NormalPriority = 3),
					(v.unstable_Profiling = null),
					(v.unstable_UserBlockingPriority = 2),
					(v.unstable_cancelCallback = function (x) {
						x.callback = null;
					}),
					(v.unstable_forceFrameRate = function (x) {
						0 > x || 125 < x
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (Qt = 0 < x ? Math.floor(1e3 / x) : 5);
					}),
					(v.unstable_getCurrentPriorityLevel = function () {
						return ut;
					}),
					(v.unstable_next = function (x) {
						switch (ut) {
							case 1:
							case 2:
							case 3:
								var _ = 3;
								break;
							default:
								_ = ut;
						}
						var q = ut;
						ut = _;
						try {
							return x();
						} finally {
							ut = q;
						}
					}),
					(v.unstable_requestPaint = function () {
						Ml = !0;
					}),
					(v.unstable_runWithPriority = function (x, _) {
						switch (x) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								x = 3;
						}
						var q = ut;
						ut = x;
						try {
							return _();
						} finally {
							ut = q;
						}
					}),
					(v.unstable_scheduleCallback = function (x, _, q) {
						var nt = v.unstable_now();
						switch (
							(typeof q == "object" && q !== null
								? ((q = q.delay),
									(q = typeof q == "number" && 0 < q ? nt + q : nt))
								: (q = nt),
							x)
						) {
							case 1:
								var st = -1;
								break;
							case 2:
								st = 250;
								break;
							case 5:
								st = 1073741823;
								break;
							case 4:
								st = 1e4;
								break;
							default:
								st = 5e3;
						}
						return (
							(st = q + st),
							(x = {
								id: Z++,
								callback: _,
								priorityLevel: x,
								startTime: q,
								expirationTime: st,
								sortIndex: -1,
							}),
							q > nt
								? ((x.sortIndex = q),
									A(E, x),
									N(M) === null &&
										x === N(E) &&
										(qt ? (Fl(W), (W = -1)) : (qt = !0), bl(zl, q - nt)))
								: ((x.sortIndex = st),
									A(M, x),
									Rt || Ht || ((Rt = !0), Xt || ((Xt = !0), Lt()))),
							x
						);
					}),
					(v.unstable_shouldYield = Ze),
					(v.unstable_wrapCallback = function (x) {
						var _ = ut;
						return function () {
							var q = ut;
							ut = _;
							try {
								return x.apply(this, arguments);
							} finally {
								ut = q;
							}
						};
					}));
			})(rf)),
		rf
	);
}
var Td;
function rh() {
	return (Td || ((Td = 1), (df.exports = dh())), df.exports);
}
var mf = { exports: {} },
	Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function mh() {
	if (Ed) return Bt;
	Ed = 1;
	var v = hf();
	function A(M) {
		var E = "https://react.dev/errors/" + M;
		if (1 < arguments.length) {
			E += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var Z = 2; Z < arguments.length; Z++)
				E += "&args[]=" + encodeURIComponent(arguments[Z]);
		}
		return (
			"Minified React error #" +
			M +
			"; visit " +
			E +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function N() {}
	var d = {
			d: {
				f: N,
				r: function () {
					throw Error(A(522));
				},
				D: N,
				C: N,
				L: N,
				m: N,
				X: N,
				S: N,
				M: N,
			},
			p: 0,
			findDOMNode: null,
		},
		D = Symbol.for("react.portal");
	function Y(M, E, Z) {
		var R =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: D,
			key: R == null ? null : "" + R,
			children: M,
			containerInfo: E,
			implementation: Z,
		};
	}
	var P = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function dt(M, E) {
		if (M === "font") return "";
		if (typeof E == "string") return E === "use-credentials" ? E : "";
	}
	return (
		(Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
		(Bt.createPortal = function (M, E) {
			var Z =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
				throw Error(A(299));
			return Y(M, E, null, Z);
		}),
		(Bt.flushSync = function (M) {
			var E = P.T,
				Z = d.p;
			try {
				if (((P.T = null), (d.p = 2), M)) return M();
			} finally {
				((P.T = E), (d.p = Z), d.d.f());
			}
		}),
		(Bt.preconnect = function (M, E) {
			typeof M == "string" &&
				(E
					? ((E = E.crossOrigin),
						(E =
							typeof E == "string"
								? E === "use-credentials"
									? E
									: ""
								: void 0))
					: (E = null),
				d.d.C(M, E));
		}),
		(Bt.prefetchDNS = function (M) {
			typeof M == "string" && d.d.D(M);
		}),
		(Bt.preinit = function (M, E) {
			if (typeof M == "string" && E && typeof E.as == "string") {
				var Z = E.as,
					R = dt(Z, E.crossOrigin),
					ut = typeof E.integrity == "string" ? E.integrity : void 0,
					Ht = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
				Z === "style"
					? d.d.S(M, typeof E.precedence == "string" ? E.precedence : void 0, {
							crossOrigin: R,
							integrity: ut,
							fetchPriority: Ht,
						})
					: Z === "script" &&
						d.d.X(M, {
							crossOrigin: R,
							integrity: ut,
							fetchPriority: Ht,
							nonce: typeof E.nonce == "string" ? E.nonce : void 0,
						});
			}
		}),
		(Bt.preinitModule = function (M, E) {
			if (typeof M == "string")
				if (typeof E == "object" && E !== null) {
					if (E.as == null || E.as === "script") {
						var Z = dt(E.as, E.crossOrigin);
						d.d.M(M, {
							crossOrigin: Z,
							integrity: typeof E.integrity == "string" ? E.integrity : void 0,
							nonce: typeof E.nonce == "string" ? E.nonce : void 0,
						});
					}
				} else E == null && d.d.M(M);
		}),
		(Bt.preload = function (M, E) {
			if (
				typeof M == "string" &&
				typeof E == "object" &&
				E !== null &&
				typeof E.as == "string"
			) {
				var Z = E.as,
					R = dt(Z, E.crossOrigin);
				d.d.L(M, Z, {
					crossOrigin: R,
					integrity: typeof E.integrity == "string" ? E.integrity : void 0,
					nonce: typeof E.nonce == "string" ? E.nonce : void 0,
					type: typeof E.type == "string" ? E.type : void 0,
					fetchPriority:
						typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
					referrerPolicy:
						typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
					imageSrcSet:
						typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
					imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
					media: typeof E.media == "string" ? E.media : void 0,
				});
			}
		}),
		(Bt.preloadModule = function (M, E) {
			if (typeof M == "string")
				if (E) {
					var Z = dt(E.as, E.crossOrigin);
					d.d.m(M, {
						as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
						crossOrigin: Z,
						integrity: typeof E.integrity == "string" ? E.integrity : void 0,
					});
				} else d.d.m(M);
		}),
		(Bt.requestFormReset = function (M) {
			d.d.r(M);
		}),
		(Bt.unstable_batchedUpdates = function (M, E) {
			return M(E);
		}),
		(Bt.useFormState = function (M, E, Z) {
			return P.H.useFormState(M, E, Z);
		}),
		(Bt.useFormStatus = function () {
			return P.H.useHostTransitionStatus();
		}),
		(Bt.version = "19.2.4"),
		Bt
	);
}
var Ad;
function hh() {
	if (Ad) return mf.exports;
	Ad = 1;
	function v() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
			} catch (A) {
				console.error(A);
			}
	}
	return (v(), (mf.exports = mh()), mf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function vh() {
	if (Nd) return zu;
	Nd = 1;
	var v = rh(),
		A = hf(),
		N = hh();
	function d(t) {
		var l = "https://react.dev/errors/" + t;
		if (1 < arguments.length) {
			l += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var e = 2; e < arguments.length; e++)
				l += "&args[]=" + encodeURIComponent(arguments[e]);
		}
		return (
			"Minified React error #" +
			t +
			"; visit " +
			l +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function D(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function Y(t) {
		var l = t,
			e = t;
		if (t.alternate) for (; l.return; ) l = l.return;
		else {
			t = l;
			do ((l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return));
			while (t);
		}
		return l.tag === 3 ? e : null;
	}
	function P(t) {
		if (t.tag === 13) {
			var l = t.memoizedState;
			if (
				(l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
				l !== null)
			)
				return l.dehydrated;
		}
		return null;
	}
	function dt(t) {
		if (t.tag === 31) {
			var l = t.memoizedState;
			if (
				(l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
				l !== null)
			)
				return l.dehydrated;
		}
		return null;
	}
	function M(t) {
		if (Y(t) !== t) throw Error(d(188));
	}
	function E(t) {
		var l = t.alternate;
		if (!l) {
			if (((l = Y(t)), l === null)) throw Error(d(188));
			return l !== t ? null : t;
		}
		for (var e = t, a = l; ; ) {
			var u = e.return;
			if (u === null) break;
			var n = u.alternate;
			if (n === null) {
				if (((a = u.return), a !== null)) {
					e = a;
					continue;
				}
				break;
			}
			if (u.child === n.child) {
				for (n = u.child; n; ) {
					if (n === e) return (M(u), t);
					if (n === a) return (M(u), l);
					n = n.sibling;
				}
				throw Error(d(188));
			}
			if (e.return !== a.return) ((e = u), (a = n));
			else {
				for (var i = !1, c = u.child; c; ) {
					if (c === e) {
						((i = !0), (e = u), (a = n));
						break;
					}
					if (c === a) {
						((i = !0), (a = u), (e = n));
						break;
					}
					c = c.sibling;
				}
				if (!i) {
					for (c = n.child; c; ) {
						if (c === e) {
							((i = !0), (e = n), (a = u));
							break;
						}
						if (c === a) {
							((i = !0), (a = n), (e = u));
							break;
						}
						c = c.sibling;
					}
					if (!i) throw Error(d(189));
				}
			}
			if (e.alternate !== a) throw Error(d(190));
		}
		if (e.tag !== 3) throw Error(d(188));
		return e.stateNode.current === e ? t : l;
	}
	function Z(t) {
		var l = t.tag;
		if (l === 5 || l === 26 || l === 27 || l === 6) return t;
		for (t = t.child; t !== null; ) {
			if (((l = Z(t)), l !== null)) return l;
			t = t.sibling;
		}
		return null;
	}
	var R = Object.assign,
		ut = Symbol.for("react.element"),
		Ht = Symbol.for("react.transitional.element"),
		Rt = Symbol.for("react.portal"),
		qt = Symbol.for("react.fragment"),
		Ml = Symbol.for("react.strict_mode"),
		Ft = Symbol.for("react.profiler"),
		Fl = Symbol.for("react.consumer"),
		Ct = Symbol.for("react.context"),
		cl = Symbol.for("react.forward_ref"),
		zl = Symbol.for("react.suspense"),
		Xt = Symbol.for("react.suspense_list"),
		W = Symbol.for("react.memo"),
		Qt = Symbol.for("react.lazy"),
		Tl = Symbol.for("react.activity"),
		Ze = Symbol.for("react.memo_cache_sentinel"),
		El = Symbol.iterator;
	function Lt(t) {
		return t === null || typeof t != "object"
			? null
			: ((t = (El && t[El]) || t["@@iterator"]),
				typeof t == "function" ? t : null);
	}
	var ze = Symbol.for("react.client.reference");
	function Ol(t) {
		if (t == null) return null;
		if (typeof t == "function")
			return t.$$typeof === ze ? null : t.displayName || t.name || null;
		if (typeof t == "string") return t;
		switch (t) {
			case qt:
				return "Fragment";
			case Ft:
				return "Profiler";
			case Ml:
				return "StrictMode";
			case zl:
				return "Suspense";
			case Xt:
				return "SuspenseList";
			case Tl:
				return "Activity";
		}
		if (typeof t == "object")
			switch (t.$$typeof) {
				case Rt:
					return "Portal";
				case Ct:
					return t.displayName || "Context";
				case Fl:
					return (t._context.displayName || "Context") + ".Consumer";
				case cl:
					var l = t.render;
					return (
						(t = t.displayName),
						t ||
							((t = l.displayName || l.name || ""),
							(t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
						t
					);
				case W:
					return (
						(l = t.displayName || null),
						l !== null ? l : Ol(t.type) || "Memo"
					);
				case Qt:
					((l = t._payload), (t = t._init));
					try {
						return Ol(t(l));
					} catch {}
			}
		return null;
	}
	var bl = Array.isArray,
		x = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		_ = N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		q = { pending: !1, data: null, method: null, action: null },
		nt = [],
		st = -1;
	function o(t) {
		return { current: t };
	}
	function T(t) {
		0 > st || ((t.current = nt[st]), (nt[st] = null), st--);
	}
	function j(t, l) {
		(st++, (nt[st] = t.current), (t.current = l));
	}
	var U = o(null),
		X = o(null),
		V = o(null),
		lt = o(null);
	function Yt(t, l) {
		switch ((j(V, l), j(X, t), j(U, null), l.nodeType)) {
			case 9:
			case 11:
				t = (t = l.documentElement) && (t = t.namespaceURI) ? Q0(t) : 0;
				break;
			default:
				if (((t = l.tagName), (l = l.namespaceURI)))
					((l = Q0(l)), (t = L0(l, t)));
				else
					switch (t) {
						case "svg":
							t = 1;
							break;
						case "math":
							t = 2;
							break;
						default:
							t = 0;
					}
		}
		(T(U), j(U, t));
	}
	function gt() {
		(T(U), T(X), T(V));
	}
	function ja(t) {
		t.memoizedState !== null && j(lt, t);
		var l = U.current,
			e = L0(l, t.type);
		l !== e && (j(X, t), j(U, e));
	}
	function Eu(t) {
		(X.current === t && (T(U), T(X)),
			lt.current === t && (T(lt), (gu._currentValue = q)));
	}
	var Zn, yf;
	function Te(t) {
		if (Zn === void 0)
			try {
				throw Error();
			} catch (e) {
				var l = e.stack.trim().match(/\n( *(at )?)/);
				((Zn = (l && l[1]) || ""),
					(yf =
						-1 <
						e.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < e.stack.indexOf("@")
								? "@unknown:0:0"
								: ""));
			}
		return (
			`
` +
			Zn +
			t +
			yf
		);
	}
	var Vn = !1;
	function Kn(t, l) {
		if (!t || Vn) return "";
		Vn = !0;
		var e = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (l) {
							var z = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(z.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(z, []);
								} catch (b) {
									var g = b;
								}
								Reflect.construct(t, [], z);
							} else {
								try {
									z.call();
								} catch (b) {
									g = b;
								}
								t.call(z.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (b) {
								g = b;
							}
							(z = t()) &&
								typeof z.catch == "function" &&
								z.catch(function () {});
						}
					} catch (b) {
						if (b && g && typeof b.stack == "string") return [b.stack, g.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name",
			);
			u &&
				u.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = a.DetermineComponentFrameRoot(),
				i = n[0],
				c = n[1];
			if (i && c) {
				var f = i.split(`
`),
					y = c.split(`
`);
				for (
					u = a = 0;
					a < f.length && !f[a].includes("DetermineComponentFrameRoot");
				)
					a++;
				for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
					u++;
				if (a === f.length || u === y.length)
					for (
						a = f.length - 1, u = y.length - 1;
						1 <= a && 0 <= u && f[a] !== y[u];
					)
						u--;
				for (; 1 <= a && 0 <= u; a--, u--)
					if (f[a] !== y[u]) {
						if (a !== 1 || u !== 1)
							do
								if ((a--, u--, 0 > u || f[a] !== y[u])) {
									var S =
										`
` + f[a].replace(" at new ", " at ");
									return (
										t.displayName &&
											S.includes("<anonymous>") &&
											(S = S.replace("<anonymous>", t.displayName)),
										S
									);
								}
							while (1 <= a && 0 <= u);
						break;
					}
			}
		} finally {
			((Vn = !1), (Error.prepareStackTrace = e));
		}
		return (e = t ? t.displayName || t.name : "") ? Te(e) : "";
	}
	function Yd(t, l) {
		switch (t.tag) {
			case 26:
			case 27:
			case 5:
				return Te(t.type);
			case 16:
				return Te("Lazy");
			case 13:
				return t.child !== l && l !== null
					? Te("Suspense Fallback")
					: Te("Suspense");
			case 19:
				return Te("SuspenseList");
			case 0:
			case 15:
				return Kn(t.type, !1);
			case 11:
				return Kn(t.type.render, !1);
			case 1:
				return Kn(t.type, !0);
			case 31:
				return Te("Activity");
			default:
				return "";
		}
	}
	function gf(t) {
		try {
			var l = "",
				e = null;
			do ((l += Yd(t, e)), (e = t), (t = t.return));
			while (t);
			return l;
		} catch (a) {
			return (
				`
Error generating stack: ` +
				a.message +
				`
` +
				a.stack
			);
		}
	}
	var wn = Object.prototype.hasOwnProperty,
		Jn = v.unstable_scheduleCallback,
		kn = v.unstable_cancelCallback,
		Gd = v.unstable_shouldYield,
		Xd = v.unstable_requestPaint,
		$t = v.unstable_now,
		Qd = v.unstable_getCurrentPriorityLevel,
		bf = v.unstable_ImmediatePriority,
		Sf = v.unstable_UserBlockingPriority,
		Au = v.unstable_NormalPriority,
		Ld = v.unstable_LowPriority,
		xf = v.unstable_IdlePriority,
		Zd = v.log,
		Vd = v.unstable_setDisableYieldValue,
		Ma = null,
		It = null;
	function $l(t) {
		if (
			(typeof Zd == "function" && Vd(t),
			It && typeof It.setStrictMode == "function")
		)
			try {
				It.setStrictMode(Ma, t);
			} catch {}
	}
	var Pt = Math.clz32 ? Math.clz32 : Jd,
		Kd = Math.log,
		wd = Math.LN2;
	function Jd(t) {
		return ((t >>>= 0), t === 0 ? 32 : (31 - ((Kd(t) / wd) | 0)) | 0);
	}
	var Nu = 256,
		_u = 262144,
		ju = 4194304;
	function Ee(t) {
		var l = t & 42;
		if (l !== 0) return l;
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
				return t & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return t & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return t;
		}
	}
	function Mu(t, l, e) {
		var a = t.pendingLanes;
		if (a === 0) return 0;
		var u = 0,
			n = t.suspendedLanes,
			i = t.pingedLanes;
		t = t.warmLanes;
		var c = a & 134217727;
		return (
			c !== 0
				? ((a = c & ~n),
					a !== 0
						? (u = Ee(a))
						: ((i &= c),
							i !== 0
								? (u = Ee(i))
								: e || ((e = c & ~t), e !== 0 && (u = Ee(e)))))
				: ((c = a & ~n),
					c !== 0
						? (u = Ee(c))
						: i !== 0
							? (u = Ee(i))
							: e || ((e = a & ~t), e !== 0 && (u = Ee(e)))),
			u === 0
				? 0
				: l !== 0 &&
					  l !== u &&
					  (l & n) === 0 &&
					  ((n = u & -u),
					  (e = l & -l),
					  n >= e || (n === 32 && (e & 4194048) !== 0))
					? l
					: u
		);
	}
	function Oa(t, l) {
		return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
	}
	function kd(t, l) {
		switch (t) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return l + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return l + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function pf() {
		var t = ju;
		return ((ju <<= 1), (ju & 62914560) === 0 && (ju = 4194304), t);
	}
	function Wn(t) {
		for (var l = [], e = 0; 31 > e; e++) l.push(t);
		return l;
	}
	function Da(t, l) {
		((t.pendingLanes |= l),
			l !== 268435456 &&
				((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
	}
	function Wd(t, l, e, a, u, n) {
		var i = t.pendingLanes;
		((t.pendingLanes = e),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.warmLanes = 0),
			(t.expiredLanes &= e),
			(t.entangledLanes &= e),
			(t.errorRecoveryDisabledLanes &= e),
			(t.shellSuspendCounter = 0));
		var c = t.entanglements,
			f = t.expirationTimes,
			y = t.hiddenUpdates;
		for (e = i & ~e; 0 < e; ) {
			var S = 31 - Pt(e),
				z = 1 << S;
			((c[S] = 0), (f[S] = -1));
			var g = y[S];
			if (g !== null)
				for (y[S] = null, S = 0; S < g.length; S++) {
					var b = g[S];
					b !== null && (b.lane &= -536870913);
				}
			e &= ~z;
		}
		(a !== 0 && zf(t, a, 0),
			n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l)));
	}
	function zf(t, l, e) {
		((t.pendingLanes |= l), (t.suspendedLanes &= ~l));
		var a = 31 - Pt(l);
		((t.entangledLanes |= l),
			(t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 261930)));
	}
	function Tf(t, l) {
		var e = (t.entangledLanes |= l);
		for (t = t.entanglements; e; ) {
			var a = 31 - Pt(e),
				u = 1 << a;
			((u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u));
		}
	}
	function Ef(t, l) {
		var e = l & -l;
		return (
			(e = (e & 42) !== 0 ? 1 : Fn(e)),
			(e & (t.suspendedLanes | l)) !== 0 ? 0 : e
		);
	}
	function Fn(t) {
		switch (t) {
			case 2:
				t = 1;
				break;
			case 8:
				t = 4;
				break;
			case 32:
				t = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				t = 128;
				break;
			case 268435456:
				t = 134217728;
				break;
			default:
				t = 0;
		}
		return t;
	}
	function $n(t) {
		return (
			(t &= -t),
			2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function Af() {
		var t = _.p;
		return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : dd(t.type));
	}
	function Nf(t, l) {
		var e = _.p;
		try {
			return ((_.p = t), l());
		} finally {
			_.p = e;
		}
	}
	var Il = Math.random().toString(36).slice(2),
		_t = "__reactFiber$" + Il,
		Zt = "__reactProps$" + Il,
		Ve = "__reactContainer$" + Il,
		In = "__reactEvents$" + Il,
		Fd = "__reactListeners$" + Il,
		$d = "__reactHandles$" + Il,
		_f = "__reactResources$" + Il,
		Ua = "__reactMarker$" + Il;
	function Pn(t) {
		(delete t[_t], delete t[Zt], delete t[In], delete t[Fd], delete t[$d]);
	}
	function Ke(t) {
		var l = t[_t];
		if (l) return l;
		for (var e = t.parentNode; e; ) {
			if ((l = e[Ve] || e[_t])) {
				if (
					((e = l.alternate),
					l.child !== null || (e !== null && e.child !== null))
				)
					for (t = W0(t); t !== null; ) {
						if ((e = t[_t])) return e;
						t = W0(t);
					}
				return l;
			}
			((t = e), (e = t.parentNode));
		}
		return null;
	}
	function we(t) {
		if ((t = t[_t] || t[Ve])) {
			var l = t.tag;
			if (
				l === 5 ||
				l === 6 ||
				l === 13 ||
				l === 31 ||
				l === 26 ||
				l === 27 ||
				l === 3
			)
				return t;
		}
		return null;
	}
	function Ha(t) {
		var l = t.tag;
		if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
		throw Error(d(33));
	}
	function Je(t) {
		var l = t[_f];
		return (
			l ||
				(l = t[_f] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			l
		);
	}
	function At(t) {
		t[Ua] = !0;
	}
	var jf = new Set(),
		Mf = {};
	function Ae(t, l) {
		(ke(t, l), ke(t + "Capture", l));
	}
	function ke(t, l) {
		for (Mf[t] = l, t = 0; t < l.length; t++) jf.add(l[t]);
	}
	var Id = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		Of = {},
		Df = {};
	function Pd(t) {
		return wn.call(Df, t)
			? !0
			: wn.call(Of, t)
				? !1
				: Id.test(t)
					? (Df[t] = !0)
					: ((Of[t] = !0), !1);
	}
	function Ou(t, l, e) {
		if (Pd(l))
			if (e === null) t.removeAttribute(l);
			else {
				switch (typeof e) {
					case "undefined":
					case "function":
					case "symbol":
						t.removeAttribute(l);
						return;
					case "boolean":
						var a = l.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							t.removeAttribute(l);
							return;
						}
				}
				t.setAttribute(l, "" + e);
			}
	}
	function Du(t, l, e) {
		if (e === null) t.removeAttribute(l);
		else {
			switch (typeof e) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(l);
					return;
			}
			t.setAttribute(l, "" + e);
		}
	}
	function Dl(t, l, e, a) {
		if (a === null) t.removeAttribute(e);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(e);
					return;
			}
			t.setAttributeNS(l, e, "" + a);
		}
	}
	function fl(t) {
		switch (typeof t) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return "";
		}
	}
	function Uf(t) {
		var l = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === "input" &&
			(l === "checkbox" || l === "radio")
		);
	}
	function tr(t, l, e) {
		var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
		if (
			!t.hasOwnProperty(l) &&
			typeof a < "u" &&
			typeof a.get == "function" &&
			typeof a.set == "function"
		) {
			var u = a.get,
				n = a.set;
			return (
				Object.defineProperty(t, l, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (i) {
						((e = "" + i), n.call(this, i));
					},
				}),
				Object.defineProperty(t, l, { enumerable: a.enumerable }),
				{
					getValue: function () {
						return e;
					},
					setValue: function (i) {
						e = "" + i;
					},
					stopTracking: function () {
						((t._valueTracker = null), delete t[l]);
					},
				}
			);
		}
	}
	function ti(t) {
		if (!t._valueTracker) {
			var l = Uf(t) ? "checked" : "value";
			t._valueTracker = tr(t, l, "" + t[l]);
		}
	}
	function Hf(t) {
		if (!t) return !1;
		var l = t._valueTracker;
		if (!l) return !0;
		var e = l.getValue(),
			a = "";
		return (
			t && (a = Uf(t) ? (t.checked ? "true" : "false") : t.value),
			(t = a),
			t !== e ? (l.setValue(t), !0) : !1
		);
	}
	function Uu(t) {
		if (
			((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
		)
			return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	var lr = /[\n"\\]/g;
	function sl(t) {
		return t.replace(lr, function (l) {
			return "\\" + l.charCodeAt(0).toString(16) + " ";
		});
	}
	function li(t, l, e, a, u, n, i, c) {
		((t.name = ""),
			i != null &&
			typeof i != "function" &&
			typeof i != "symbol" &&
			typeof i != "boolean"
				? (t.type = i)
				: t.removeAttribute("type"),
			l != null
				? i === "number"
					? ((l === 0 && t.value === "") || t.value != l) &&
						(t.value = "" + fl(l))
					: t.value !== "" + fl(l) && (t.value = "" + fl(l))
				: (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
			l != null
				? ei(t, i, fl(l))
				: e != null
					? ei(t, i, fl(e))
					: a != null && t.removeAttribute("value"),
			u == null && n != null && (t.defaultChecked = !!n),
			u != null &&
				(t.checked = u && typeof u != "function" && typeof u != "symbol"),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (t.name = "" + fl(c))
				: t.removeAttribute("name"));
	}
	function Rf(t, l, e, a, u, n, i, c) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(t.type = n),
			l != null || e != null)
		) {
			if (!((n !== "submit" && n !== "reset") || l != null)) {
				ti(t);
				return;
			}
			((e = e != null ? "" + fl(e) : ""),
				(l = l != null ? "" + fl(l) : e),
				c || l === t.value || (t.value = l),
				(t.defaultValue = l));
		}
		((a = a ?? u),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(t.checked = c ? t.checked : !!a),
			(t.defaultChecked = !!a),
			i != null &&
				typeof i != "function" &&
				typeof i != "symbol" &&
				typeof i != "boolean" &&
				(t.name = i),
			ti(t));
	}
	function ei(t, l, e) {
		(l === "number" && Uu(t.ownerDocument) === t) ||
			t.defaultValue === "" + e ||
			(t.defaultValue = "" + e);
	}
	function We(t, l, e, a) {
		if (((t = t.options), l)) {
			l = {};
			for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
			for (e = 0; e < t.length; e++)
				((u = l.hasOwnProperty("$" + t[e].value)),
					t[e].selected !== u && (t[e].selected = u),
					u && a && (t[e].defaultSelected = !0));
		} else {
			for (e = "" + fl(e), l = null, u = 0; u < t.length; u++) {
				if (t[u].value === e) {
					((t[u].selected = !0), a && (t[u].defaultSelected = !0));
					return;
				}
				l !== null || t[u].disabled || (l = t[u]);
			}
			l !== null && (l.selected = !0);
		}
	}
	function Cf(t, l, e) {
		if (
			l != null &&
			((l = "" + fl(l)), l !== t.value && (t.value = l), e == null)
		) {
			t.defaultValue !== l && (t.defaultValue = l);
			return;
		}
		t.defaultValue = e != null ? "" + fl(e) : "";
	}
	function Bf(t, l, e, a) {
		if (l == null) {
			if (a != null) {
				if (e != null) throw Error(d(92));
				if (bl(a)) {
					if (1 < a.length) throw Error(d(93));
					a = a[0];
				}
				e = a;
			}
			(e == null && (e = ""), (l = e));
		}
		((e = fl(l)),
			(t.defaultValue = e),
			(a = t.textContent),
			a === e && a !== "" && a !== null && (t.value = a),
			ti(t));
	}
	function Fe(t, l) {
		if (l) {
			var e = t.firstChild;
			if (e && e === t.lastChild && e.nodeType === 3) {
				e.nodeValue = l;
				return;
			}
		}
		t.textContent = l;
	}
	var er = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function qf(t, l, e) {
		var a = l.indexOf("--") === 0;
		e == null || typeof e == "boolean" || e === ""
			? a
				? t.setProperty(l, "")
				: l === "float"
					? (t.cssFloat = "")
					: (t[l] = "")
			: a
				? t.setProperty(l, e)
				: typeof e != "number" || e === 0 || er.has(l)
					? l === "float"
						? (t.cssFloat = e)
						: (t[l] = ("" + e).trim())
					: (t[l] = e + "px");
	}
	function Yf(t, l, e) {
		if (l != null && typeof l != "object") throw Error(d(62));
		if (((t = t.style), e != null)) {
			for (var a in e)
				!e.hasOwnProperty(a) ||
					(l != null && l.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? t.setProperty(a, "")
						: a === "float"
							? (t.cssFloat = "")
							: (t[a] = ""));
			for (var u in l)
				((a = l[u]), l.hasOwnProperty(u) && e[u] !== a && qf(t, u, a));
		} else for (var n in l) l.hasOwnProperty(n) && qf(t, n, l[n]);
	}
	function ai(t) {
		if (t.indexOf("-") === -1) return !1;
		switch (t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var ar = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		ur =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Hu(t) {
		return ur.test("" + t)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: t;
	}
	function Ul() {}
	var ui = null;
	function ni(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var $e = null,
		Ie = null;
	function Gf(t) {
		var l = we(t);
		if (l && (t = l.stateNode)) {
			var e = t[Zt] || null;
			t: switch (((t = l.stateNode), l.type)) {
				case "input":
					if (
						(li(
							t,
							e.value,
							e.defaultValue,
							e.defaultValue,
							e.checked,
							e.defaultChecked,
							e.type,
							e.name,
						),
						(l = e.name),
						e.type === "radio" && l != null)
					) {
						for (e = t; e.parentNode; ) e = e.parentNode;
						for (
							e = e.querySelectorAll(
								'input[name="' + sl("" + l) + '"][type="radio"]',
							),
								l = 0;
							l < e.length;
							l++
						) {
							var a = e[l];
							if (a !== t && a.form === t.form) {
								var u = a[Zt] || null;
								if (!u) throw Error(d(90));
								li(
									a,
									u.value,
									u.defaultValue,
									u.defaultValue,
									u.checked,
									u.defaultChecked,
									u.type,
									u.name,
								);
							}
						}
						for (l = 0; l < e.length; l++)
							((a = e[l]), a.form === t.form && Hf(a));
					}
					break t;
				case "textarea":
					Cf(t, e.value, e.defaultValue);
					break t;
				case "select":
					((l = e.value), l != null && We(t, !!e.multiple, l, !1));
			}
		}
	}
	var ii = !1;
	function Xf(t, l, e) {
		if (ii) return t(l, e);
		ii = !0;
		try {
			var a = t(l);
			return a;
		} finally {
			if (
				((ii = !1),
				($e !== null || Ie !== null) &&
					(pn(), $e && ((l = $e), (t = Ie), (Ie = $e = null), Gf(l), t)))
			)
				for (l = 0; l < t.length; l++) Gf(t[l]);
		}
	}
	function Ra(t, l) {
		var e = t.stateNode;
		if (e === null) return null;
		var a = e[Zt] || null;
		if (a === null) return null;
		e = a[l];
		t: switch (l) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				((a = !a.disabled) ||
					((t = t.type),
					(a = !(
						t === "button" ||
						t === "input" ||
						t === "select" ||
						t === "textarea"
					))),
					(t = !a));
				break t;
			default:
				t = !1;
		}
		if (t) return null;
		if (e && typeof e != "function") throw Error(d(231, l, typeof e));
		return e;
	}
	var Hl = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		ci = !1;
	if (Hl)
		try {
			var Ca = {};
			(Object.defineProperty(Ca, "passive", {
				get: function () {
					ci = !0;
				},
			}),
				window.addEventListener("test", Ca, Ca),
				window.removeEventListener("test", Ca, Ca));
		} catch {
			ci = !1;
		}
	var Pl = null,
		fi = null,
		Ru = null;
	function Qf() {
		if (Ru) return Ru;
		var t,
			l = fi,
			e = l.length,
			a,
			u = "value" in Pl ? Pl.value : Pl.textContent,
			n = u.length;
		for (t = 0; t < e && l[t] === u[t]; t++);
		var i = e - t;
		for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
		return (Ru = u.slice(t, 1 < a ? 1 - a : void 0));
	}
	function Cu(t) {
		var l = t.keyCode;
		return (
			"charCode" in t
				? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
				: (t = l),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function Bu() {
		return !0;
	}
	function Lf() {
		return !1;
	}
	function Vt(t) {
		function l(e, a, u, n, i) {
			((this._reactName = e),
				(this._targetInst = u),
				(this.type = a),
				(this.nativeEvent = n),
				(this.target = i),
				(this.currentTarget = null));
			for (var c in t)
				t.hasOwnProperty(c) && ((e = t[c]), (this[c] = e ? e(n) : n[c]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
				)
					? Bu
					: Lf),
				(this.isPropagationStopped = Lf),
				this
			);
		}
		return (
			R(l.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e &&
						(e.preventDefault
							? e.preventDefault()
							: typeof e.returnValue != "unknown" && (e.returnValue = !1),
						(this.isDefaultPrevented = Bu));
				},
				stopPropagation: function () {
					var e = this.nativeEvent;
					e &&
						(e.stopPropagation
							? e.stopPropagation()
							: typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
						(this.isPropagationStopped = Bu));
				},
				persist: function () {},
				isPersistent: Bu,
			}),
			l
		);
	}
	var Ne = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		qu = Vt(Ne),
		Ba = R({}, Ne, { view: 0, detail: 0 }),
		nr = Vt(Ba),
		si,
		oi,
		qa,
		Yu = R({}, Ba, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: ri,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return "movementX" in t
					? t.movementX
					: (t !== qa &&
							(qa && t.type === "mousemove"
								? ((si = t.screenX - qa.screenX), (oi = t.screenY - qa.screenY))
								: (oi = si = 0),
							(qa = t)),
						si);
			},
			movementY: function (t) {
				return "movementY" in t ? t.movementY : oi;
			},
		}),
		Zf = Vt(Yu),
		ir = R({}, Yu, { dataTransfer: 0 }),
		cr = Vt(ir),
		fr = R({}, Ba, { relatedTarget: 0 }),
		di = Vt(fr),
		sr = R({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		or = Vt(sr),
		dr = R({}, Ne, {
			clipboardData: function (t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData;
			},
		}),
		rr = Vt(dr),
		mr = R({}, Ne, { data: 0 }),
		Vf = Vt(mr),
		hr = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		vr = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		yr = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function gr(t) {
		var l = this.nativeEvent;
		return l.getModifierState
			? l.getModifierState(t)
			: (t = yr[t])
				? !!l[t]
				: !1;
	}
	function ri() {
		return gr;
	}
	var br = R({}, Ba, {
			key: function (t) {
				if (t.key) {
					var l = hr[t.key] || t.key;
					if (l !== "Unidentified") return l;
				}
				return t.type === "keypress"
					? ((t = Cu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
					: t.type === "keydown" || t.type === "keyup"
						? vr[t.keyCode] || "Unidentified"
						: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: ri,
			charCode: function (t) {
				return t.type === "keypress" ? Cu(t) : 0;
			},
			keyCode: function (t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === "keypress"
					? Cu(t)
					: t.type === "keydown" || t.type === "keyup"
						? t.keyCode
						: 0;
			},
		}),
		Sr = Vt(br),
		xr = R({}, Yu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Kf = Vt(xr),
		pr = R({}, Ba, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: ri,
		}),
		zr = Vt(pr),
		Tr = R({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Er = Vt(Tr),
		Ar = R({}, Yu, {
			deltaX: function (t) {
				return "deltaX" in t
					? t.deltaX
					: "wheelDeltaX" in t
						? -t.wheelDeltaX
						: 0;
			},
			deltaY: function (t) {
				return "deltaY" in t
					? t.deltaY
					: "wheelDeltaY" in t
						? -t.wheelDeltaY
						: "wheelDelta" in t
							? -t.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Nr = Vt(Ar),
		_r = R({}, Ne, { newState: 0, oldState: 0 }),
		jr = Vt(_r),
		Mr = [9, 13, 27, 32],
		mi = Hl && "CompositionEvent" in window,
		Ya = null;
	Hl && "documentMode" in document && (Ya = document.documentMode);
	var Or = Hl && "TextEvent" in window && !Ya,
		wf = Hl && (!mi || (Ya && 8 < Ya && 11 >= Ya)),
		Jf = " ",
		kf = !1;
	function Wf(t, l) {
		switch (t) {
			case "keyup":
				return Mr.indexOf(l.keyCode) !== -1;
			case "keydown":
				return l.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Ff(t) {
		return (
			(t = t.detail),
			typeof t == "object" && "data" in t ? t.data : null
		);
	}
	var Pe = !1;
	function Dr(t, l) {
		switch (t) {
			case "compositionend":
				return Ff(l);
			case "keypress":
				return l.which !== 32 ? null : ((kf = !0), Jf);
			case "textInput":
				return ((t = l.data), t === Jf && kf ? null : t);
			default:
				return null;
		}
	}
	function Ur(t, l) {
		if (Pe)
			return t === "compositionend" || (!mi && Wf(t, l))
				? ((t = Qf()), (Ru = fi = Pl = null), (Pe = !1), t)
				: null;
		switch (t) {
			case "paste":
				return null;
			case "keypress":
				if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
					if (l.char && 1 < l.char.length) return l.char;
					if (l.which) return String.fromCharCode(l.which);
				}
				return null;
			case "compositionend":
				return wf && l.locale !== "ko" ? null : l.data;
			default:
				return null;
		}
	}
	var Hr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function $f(t) {
		var l = t && t.nodeName && t.nodeName.toLowerCase();
		return l === "input" ? !!Hr[t.type] : l === "textarea";
	}
	function If(t, l, e, a) {
		($e ? (Ie ? Ie.push(a) : (Ie = [a])) : ($e = a),
			(l = jn(l, "onChange")),
			0 < l.length &&
				((e = new qu("onChange", "change", null, e, a)),
				t.push({ event: e, listeners: l })));
	}
	var Ga = null,
		Xa = null;
	function Rr(t) {
		C0(t, 0);
	}
	function Gu(t) {
		var l = Ha(t);
		if (Hf(l)) return t;
	}
	function Pf(t, l) {
		if (t === "change") return l;
	}
	var ts = !1;
	if (Hl) {
		var hi;
		if (Hl) {
			var vi = "oninput" in document;
			if (!vi) {
				var ls = document.createElement("div");
				(ls.setAttribute("oninput", "return;"),
					(vi = typeof ls.oninput == "function"));
			}
			hi = vi;
		} else hi = !1;
		ts = hi && (!document.documentMode || 9 < document.documentMode);
	}
	function es() {
		Ga && (Ga.detachEvent("onpropertychange", as), (Xa = Ga = null));
	}
	function as(t) {
		if (t.propertyName === "value" && Gu(Xa)) {
			var l = [];
			(If(l, Xa, t, ni(t)), Xf(Rr, l));
		}
	}
	function Cr(t, l, e) {
		t === "focusin"
			? (es(), (Ga = l), (Xa = e), Ga.attachEvent("onpropertychange", as))
			: t === "focusout" && es();
	}
	function Br(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown")
			return Gu(Xa);
	}
	function qr(t, l) {
		if (t === "click") return Gu(l);
	}
	function Yr(t, l) {
		if (t === "input" || t === "change") return Gu(l);
	}
	function Gr(t, l) {
		return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
	}
	var tl = typeof Object.is == "function" ? Object.is : Gr;
	function Qa(t, l) {
		if (tl(t, l)) return !0;
		if (
			typeof t != "object" ||
			t === null ||
			typeof l != "object" ||
			l === null
		)
			return !1;
		var e = Object.keys(t),
			a = Object.keys(l);
		if (e.length !== a.length) return !1;
		for (a = 0; a < e.length; a++) {
			var u = e[a];
			if (!wn.call(l, u) || !tl(t[u], l[u])) return !1;
		}
		return !0;
	}
	function us(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function ns(t, l) {
		var e = us(t);
		t = 0;
		for (var a; e; ) {
			if (e.nodeType === 3) {
				if (((a = t + e.textContent.length), t <= l && a >= l))
					return { node: e, offset: l - t };
				t = a;
			}
			t: {
				for (; e; ) {
					if (e.nextSibling) {
						e = e.nextSibling;
						break t;
					}
					e = e.parentNode;
				}
				e = void 0;
			}
			e = us(e);
		}
	}
	function is(t, l) {
		return t && l
			? t === l
				? !0
				: t && t.nodeType === 3
					? !1
					: l && l.nodeType === 3
						? is(t, l.parentNode)
						: "contains" in t
							? t.contains(l)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(l) & 16)
								: !1
			: !1;
	}
	function cs(t) {
		t =
			t != null &&
			t.ownerDocument != null &&
			t.ownerDocument.defaultView != null
				? t.ownerDocument.defaultView
				: window;
		for (var l = Uu(t.document); l instanceof t.HTMLIFrameElement; ) {
			try {
				var e = typeof l.contentWindow.location.href == "string";
			} catch {
				e = !1;
			}
			if (e) t = l.contentWindow;
			else break;
			l = Uu(t.document);
		}
		return l;
	}
	function yi(t) {
		var l = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			l &&
			((l === "input" &&
				(t.type === "text" ||
					t.type === "search" ||
					t.type === "tel" ||
					t.type === "url" ||
					t.type === "password")) ||
				l === "textarea" ||
				t.contentEditable === "true")
		);
	}
	var Xr = Hl && "documentMode" in document && 11 >= document.documentMode,
		ta = null,
		gi = null,
		La = null,
		bi = !1;
	function fs(t, l, e) {
		var a =
			e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
		bi ||
			ta == null ||
			ta !== Uu(a) ||
			((a = ta),
			"selectionStart" in a && yi(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
					})),
			(La && Qa(La, a)) ||
				((La = a),
				(a = jn(gi, "onSelect")),
				0 < a.length &&
					((l = new qu("onSelect", "select", null, l, e)),
					t.push({ event: l, listeners: a }),
					(l.target = ta))));
	}
	function _e(t, l) {
		var e = {};
		return (
			(e[t.toLowerCase()] = l.toLowerCase()),
			(e["Webkit" + t] = "webkit" + l),
			(e["Moz" + t] = "moz" + l),
			e
		);
	}
	var la = {
			animationend: _e("Animation", "AnimationEnd"),
			animationiteration: _e("Animation", "AnimationIteration"),
			animationstart: _e("Animation", "AnimationStart"),
			transitionrun: _e("Transition", "TransitionRun"),
			transitionstart: _e("Transition", "TransitionStart"),
			transitioncancel: _e("Transition", "TransitionCancel"),
			transitionend: _e("Transition", "TransitionEnd"),
		},
		Si = {},
		ss = {};
	Hl &&
		((ss = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete la.animationend.animation,
			delete la.animationiteration.animation,
			delete la.animationstart.animation),
		"TransitionEvent" in window || delete la.transitionend.transition);
	function je(t) {
		if (Si[t]) return Si[t];
		if (!la[t]) return t;
		var l = la[t],
			e;
		for (e in l) if (l.hasOwnProperty(e) && e in ss) return (Si[t] = l[e]);
		return t;
	}
	var os = je("animationend"),
		ds = je("animationiteration"),
		rs = je("animationstart"),
		Qr = je("transitionrun"),
		Lr = je("transitionstart"),
		Zr = je("transitioncancel"),
		ms = je("transitionend"),
		hs = new Map(),
		xi =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	xi.push("scrollEnd");
	function Sl(t, l) {
		(hs.set(t, l), Ae(l, [t]));
	}
	var Xu =
			typeof reportError == "function"
				? reportError
				: function (t) {
						if (
							typeof window == "object" &&
							typeof window.ErrorEvent == "function"
						) {
							var l = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									typeof t == "object" &&
									t !== null &&
									typeof t.message == "string"
										? String(t.message)
										: String(t),
								error: t,
							});
							if (!window.dispatchEvent(l)) return;
						} else if (
							typeof process == "object" &&
							typeof process.emit == "function"
						) {
							process.emit("uncaughtException", t);
							return;
						}
						console.error(t);
					},
		ol = [],
		ea = 0,
		pi = 0;
	function Qu() {
		for (var t = ea, l = (pi = ea = 0); l < t; ) {
			var e = ol[l];
			ol[l++] = null;
			var a = ol[l];
			ol[l++] = null;
			var u = ol[l];
			ol[l++] = null;
			var n = ol[l];
			if (((ol[l++] = null), a !== null && u !== null)) {
				var i = a.pending;
				(i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
					(a.pending = u));
			}
			n !== 0 && vs(e, u, n);
		}
	}
	function Lu(t, l, e, a) {
		((ol[ea++] = t),
			(ol[ea++] = l),
			(ol[ea++] = e),
			(ol[ea++] = a),
			(pi |= a),
			(t.lanes |= a),
			(t = t.alternate),
			t !== null && (t.lanes |= a));
	}
	function zi(t, l, e, a) {
		return (Lu(t, l, e, a), Zu(t));
	}
	function Me(t, l) {
		return (Lu(t, null, null, l), Zu(t));
	}
	function vs(t, l, e) {
		t.lanes |= e;
		var a = t.alternate;
		a !== null && (a.lanes |= e);
		for (var u = !1, n = t.return; n !== null; )
			((n.childLanes |= e),
				(a = n.alternate),
				a !== null && (a.childLanes |= e),
				n.tag === 22 &&
					((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
				(t = n),
				(n = n.return));
		return t.tag === 3
			? ((n = t.stateNode),
				u &&
					l !== null &&
					((u = 31 - Pt(e)),
					(t = n.hiddenUpdates),
					(a = t[u]),
					a === null ? (t[u] = [l]) : a.push(l),
					(l.lane = e | 536870912)),
				n)
			: null;
	}
	function Zu(t) {
		if (50 < ou) throw ((ou = 0), (Dc = null), Error(d(185)));
		for (var l = t.return; l !== null; ) ((t = l), (l = t.return));
		return t.tag === 3 ? t.stateNode : null;
	}
	var aa = {};
	function Vr(t, l, e, a) {
		((this.tag = t),
			(this.key = e),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = l),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null));
	}
	function ll(t, l, e, a) {
		return new Vr(t, l, e, a);
	}
	function Ti(t) {
		return ((t = t.prototype), !(!t || !t.isReactComponent));
	}
	function Rl(t, l) {
		var e = t.alternate;
		return (
			e === null
				? ((e = ll(t.tag, l, t.key, t.mode)),
					(e.elementType = t.elementType),
					(e.type = t.type),
					(e.stateNode = t.stateNode),
					(e.alternate = t),
					(t.alternate = e))
				: ((e.pendingProps = l),
					(e.type = t.type),
					(e.flags = 0),
					(e.subtreeFlags = 0),
					(e.deletions = null)),
			(e.flags = t.flags & 65011712),
			(e.childLanes = t.childLanes),
			(e.lanes = t.lanes),
			(e.child = t.child),
			(e.memoizedProps = t.memoizedProps),
			(e.memoizedState = t.memoizedState),
			(e.updateQueue = t.updateQueue),
			(l = t.dependencies),
			(e.dependencies =
				l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
			(e.sibling = t.sibling),
			(e.index = t.index),
			(e.ref = t.ref),
			(e.refCleanup = t.refCleanup),
			e
		);
	}
	function ys(t, l) {
		t.flags &= 65011714;
		var e = t.alternate;
		return (
			e === null
				? ((t.childLanes = 0),
					(t.lanes = l),
					(t.child = null),
					(t.subtreeFlags = 0),
					(t.memoizedProps = null),
					(t.memoizedState = null),
					(t.updateQueue = null),
					(t.dependencies = null),
					(t.stateNode = null))
				: ((t.childLanes = e.childLanes),
					(t.lanes = e.lanes),
					(t.child = e.child),
					(t.subtreeFlags = 0),
					(t.deletions = null),
					(t.memoizedProps = e.memoizedProps),
					(t.memoizedState = e.memoizedState),
					(t.updateQueue = e.updateQueue),
					(t.type = e.type),
					(l = e.dependencies),
					(t.dependencies =
						l === null
							? null
							: { lanes: l.lanes, firstContext: l.firstContext })),
			t
		);
	}
	function Vu(t, l, e, a, u, n) {
		var i = 0;
		if (((a = t), typeof t == "function")) Ti(t) && (i = 1);
		else if (typeof t == "string")
			i = Wm(t, e, U.current)
				? 26
				: t === "html" || t === "head" || t === "body"
					? 27
					: 5;
		else
			t: switch (t) {
				case Tl:
					return (
						(t = ll(31, e, l, u)),
						(t.elementType = Tl),
						(t.lanes = n),
						t
					);
				case qt:
					return Oe(e.children, u, n, l);
				case Ml:
					((i = 8), (u |= 24));
					break;
				case Ft:
					return (
						(t = ll(12, e, l, u | 2)),
						(t.elementType = Ft),
						(t.lanes = n),
						t
					);
				case zl:
					return (
						(t = ll(13, e, l, u)),
						(t.elementType = zl),
						(t.lanes = n),
						t
					);
				case Xt:
					return (
						(t = ll(19, e, l, u)),
						(t.elementType = Xt),
						(t.lanes = n),
						t
					);
				default:
					if (typeof t == "object" && t !== null)
						switch (t.$$typeof) {
							case Ct:
								i = 10;
								break t;
							case Fl:
								i = 9;
								break t;
							case cl:
								i = 11;
								break t;
							case W:
								i = 14;
								break t;
							case Qt:
								((i = 16), (a = null));
								break t;
						}
					((i = 29),
						(e = Error(d(130, t === null ? "null" : typeof t, ""))),
						(a = null));
			}
		return (
			(l = ll(i, e, l, u)),
			(l.elementType = t),
			(l.type = a),
			(l.lanes = n),
			l
		);
	}
	function Oe(t, l, e, a) {
		return ((t = ll(7, t, a, l)), (t.lanes = e), t);
	}
	function Ei(t, l, e) {
		return ((t = ll(6, t, null, l)), (t.lanes = e), t);
	}
	function gs(t) {
		var l = ll(18, null, null, 0);
		return ((l.stateNode = t), l);
	}
	function Ai(t, l, e) {
		return (
			(l = ll(4, t.children !== null ? t.children : [], t.key, l)),
			(l.lanes = e),
			(l.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation,
			}),
			l
		);
	}
	var bs = new WeakMap();
	function dl(t, l) {
		if (typeof t == "object" && t !== null) {
			var e = bs.get(t);
			return e !== void 0
				? e
				: ((l = { value: t, source: l, stack: gf(l) }), bs.set(t, l), l);
		}
		return { value: t, source: l, stack: gf(l) };
	}
	var ua = [],
		na = 0,
		Ku = null,
		Za = 0,
		rl = [],
		ml = 0,
		te = null,
		Al = 1,
		Nl = "";
	function Cl(t, l) {
		((ua[na++] = Za), (ua[na++] = Ku), (Ku = t), (Za = l));
	}
	function Ss(t, l, e) {
		((rl[ml++] = Al), (rl[ml++] = Nl), (rl[ml++] = te), (te = t));
		var a = Al;
		t = Nl;
		var u = 32 - Pt(a) - 1;
		((a &= ~(1 << u)), (e += 1));
		var n = 32 - Pt(l) + u;
		if (30 < n) {
			var i = u - (u % 5);
			((n = (a & ((1 << i) - 1)).toString(32)),
				(a >>= i),
				(u -= i),
				(Al = (1 << (32 - Pt(l) + u)) | (e << u) | a),
				(Nl = n + t));
		} else ((Al = (1 << n) | (e << u) | a), (Nl = t));
	}
	function Ni(t) {
		t.return !== null && (Cl(t, 1), Ss(t, 1, 0));
	}
	function _i(t) {
		for (; t === Ku; )
			((Ku = ua[--na]), (ua[na] = null), (Za = ua[--na]), (ua[na] = null));
		for (; t === te; )
			((te = rl[--ml]),
				(rl[ml] = null),
				(Nl = rl[--ml]),
				(rl[ml] = null),
				(Al = rl[--ml]),
				(rl[ml] = null));
	}
	function xs(t, l) {
		((rl[ml++] = Al),
			(rl[ml++] = Nl),
			(rl[ml++] = te),
			(Al = l.id),
			(Nl = l.overflow),
			(te = t));
	}
	var jt = null,
		rt = null,
		F = !1,
		le = null,
		hl = !1,
		ji = Error(d(519));
	function ee(t) {
		var l = Error(
			d(
				418,
				1 < arguments.length && arguments[1] !== void 0 && arguments[1]
					? "text"
					: "HTML",
				"",
			),
		);
		throw (Va(dl(l, t)), ji);
	}
	function ps(t) {
		var l = t.stateNode,
			e = t.type,
			a = t.memoizedProps;
		switch (((l[_t] = t), (l[Zt] = a), e)) {
			case "dialog":
				(w("cancel", l), w("close", l));
				break;
			case "iframe":
			case "object":
			case "embed":
				w("load", l);
				break;
			case "video":
			case "audio":
				for (e = 0; e < ru.length; e++) w(ru[e], l);
				break;
			case "source":
				w("error", l);
				break;
			case "img":
			case "image":
			case "link":
				(w("error", l), w("load", l));
				break;
			case "details":
				w("toggle", l);
				break;
			case "input":
				(w("invalid", l),
					Rf(
						l,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					));
				break;
			case "select":
				w("invalid", l);
				break;
			case "textarea":
				(w("invalid", l), Bf(l, a.value, a.defaultValue, a.children));
		}
		((e = a.children),
			(typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
			l.textContent === "" + e ||
			a.suppressHydrationWarning === !0 ||
			G0(l.textContent, e)
				? (a.popover != null && (w("beforetoggle", l), w("toggle", l)),
					a.onScroll != null && w("scroll", l),
					a.onScrollEnd != null && w("scrollend", l),
					a.onClick != null && (l.onclick = Ul),
					(l = !0))
				: (l = !1),
			l || ee(t, !0));
	}
	function zs(t) {
		for (jt = t.return; jt; )
			switch (jt.tag) {
				case 5:
				case 31:
				case 13:
					hl = !1;
					return;
				case 27:
				case 3:
					hl = !0;
					return;
				default:
					jt = jt.return;
			}
	}
	function ia(t) {
		if (t !== jt) return !1;
		if (!F) return (zs(t), (F = !0), !1);
		var l = t.tag,
			e;
		if (
			((e = l !== 3 && l !== 27) &&
				((e = l === 5) &&
					((e = t.type),
					(e =
						!(e !== "form" && e !== "button") || wc(t.type, t.memoizedProps))),
				(e = !e)),
			e && rt && ee(t),
			zs(t),
			l === 13)
		) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(d(317));
			rt = k0(t);
		} else if (l === 31) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(d(317));
			rt = k0(t);
		} else
			l === 27
				? ((l = rt), ye(t.type) ? ((t = $c), ($c = null), (rt = t)) : (rt = l))
				: (rt = jt ? yl(t.stateNode.nextSibling) : null);
		return !0;
	}
	function De() {
		((rt = jt = null), (F = !1));
	}
	function Mi() {
		var t = le;
		return (
			t !== null &&
				(kt === null ? (kt = t) : kt.push.apply(kt, t), (le = null)),
			t
		);
	}
	function Va(t) {
		le === null ? (le = [t]) : le.push(t);
	}
	var Oi = o(null),
		Ue = null,
		Bl = null;
	function ae(t, l, e) {
		(j(Oi, l._currentValue), (l._currentValue = e));
	}
	function ql(t) {
		((t._currentValue = Oi.current), T(Oi));
	}
	function Di(t, l, e) {
		for (; t !== null; ) {
			var a = t.alternate;
			if (
				((t.childLanes & l) !== l
					? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
					: a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
				t === e)
			)
				break;
			t = t.return;
		}
	}
	function Ui(t, l, e, a) {
		var u = t.child;
		for (u !== null && (u.return = t); u !== null; ) {
			var n = u.dependencies;
			if (n !== null) {
				var i = u.child;
				n = n.firstContext;
				t: for (; n !== null; ) {
					var c = n;
					n = u;
					for (var f = 0; f < l.length; f++)
						if (c.context === l[f]) {
							((n.lanes |= e),
								(c = n.alternate),
								c !== null && (c.lanes |= e),
								Di(n.return, e, t),
								a || (i = null));
							break t;
						}
					n = c.next;
				}
			} else if (u.tag === 18) {
				if (((i = u.return), i === null)) throw Error(d(341));
				((i.lanes |= e),
					(n = i.alternate),
					n !== null && (n.lanes |= e),
					Di(i, e, t),
					(i = null));
			} else i = u.child;
			if (i !== null) i.return = u;
			else
				for (i = u; i !== null; ) {
					if (i === t) {
						i = null;
						break;
					}
					if (((u = i.sibling), u !== null)) {
						((u.return = i.return), (i = u));
						break;
					}
					i = i.return;
				}
			u = i;
		}
	}
	function ca(t, l, e, a) {
		t = null;
		for (var u = l, n = !1; u !== null; ) {
			if (!n) {
				if ((u.flags & 524288) !== 0) n = !0;
				else if ((u.flags & 262144) !== 0) break;
			}
			if (u.tag === 10) {
				var i = u.alternate;
				if (i === null) throw Error(d(387));
				if (((i = i.memoizedProps), i !== null)) {
					var c = u.type;
					tl(u.pendingProps.value, i.value) ||
						(t !== null ? t.push(c) : (t = [c]));
				}
			} else if (u === lt.current) {
				if (((i = u.alternate), i === null)) throw Error(d(387));
				i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
					(t !== null ? t.push(gu) : (t = [gu]));
			}
			u = u.return;
		}
		(t !== null && Ui(l, t, e, a), (l.flags |= 262144));
	}
	function wu(t) {
		for (t = t.firstContext; t !== null; ) {
			if (!tl(t.context._currentValue, t.memoizedValue)) return !0;
			t = t.next;
		}
		return !1;
	}
	function He(t) {
		((Ue = t),
			(Bl = null),
			(t = t.dependencies),
			t !== null && (t.firstContext = null));
	}
	function Mt(t) {
		return Ts(Ue, t);
	}
	function Ju(t, l) {
		return (Ue === null && He(t), Ts(t, l));
	}
	function Ts(t, l) {
		var e = l._currentValue;
		if (((l = { context: l, memoizedValue: e, next: null }), Bl === null)) {
			if (t === null) throw Error(d(308));
			((Bl = l),
				(t.dependencies = { lanes: 0, firstContext: l }),
				(t.flags |= 524288));
		} else Bl = Bl.next = l;
		return e;
	}
	var Kr =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var t = [],
							l = (this.signal = {
								aborted: !1,
								addEventListener: function (e, a) {
									t.push(a);
								},
							});
						this.abort = function () {
							((l.aborted = !0),
								t.forEach(function (e) {
									return e();
								}));
						};
					},
		wr = v.unstable_scheduleCallback,
		Jr = v.unstable_NormalPriority,
		xt = {
			$$typeof: Ct,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Hi() {
		return { controller: new Kr(), data: new Map(), refCount: 0 };
	}
	function Ka(t) {
		(t.refCount--,
			t.refCount === 0 &&
				wr(Jr, function () {
					t.controller.abort();
				}));
	}
	var wa = null,
		Ri = 0,
		fa = 0,
		sa = null;
	function kr(t, l) {
		if (wa === null) {
			var e = (wa = []);
			((Ri = 0),
				(fa = qc()),
				(sa = {
					status: "pending",
					value: void 0,
					then: function (a) {
						e.push(a);
					},
				}));
		}
		return (Ri++, l.then(Es, Es), l);
	}
	function Es() {
		if (--Ri === 0 && wa !== null) {
			sa !== null && (sa.status = "fulfilled");
			var t = wa;
			((wa = null), (fa = 0), (sa = null));
			for (var l = 0; l < t.length; l++) (0, t[l])();
		}
	}
	function Wr(t, l) {
		var e = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					e.push(u);
				},
			};
		return (
			t.then(
				function () {
					((a.status = "fulfilled"), (a.value = l));
					for (var u = 0; u < e.length; u++) (0, e[u])(l);
				},
				function (u) {
					for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
						(0, e[u])(void 0);
				},
			),
			a
		);
	}
	var As = x.S;
	x.S = function (t, l) {
		((s0 = $t()),
			typeof l == "object" &&
				l !== null &&
				typeof l.then == "function" &&
				kr(t, l),
			As !== null && As(t, l));
	};
	var Re = o(null);
	function Ci() {
		var t = Re.current;
		return t !== null ? t : ot.pooledCache;
	}
	function ku(t, l) {
		l === null ? j(Re, Re.current) : j(Re, l.pool);
	}
	function Ns() {
		var t = Ci();
		return t === null ? null : { parent: xt._currentValue, pool: t };
	}
	var oa = Error(d(460)),
		Bi = Error(d(474)),
		Wu = Error(d(542)),
		Fu = { then: function () {} };
	function _s(t) {
		return ((t = t.status), t === "fulfilled" || t === "rejected");
	}
	function js(t, l, e) {
		switch (
			((e = t[e]),
			e === void 0 ? t.push(l) : e !== l && (l.then(Ul, Ul), (l = e)),
			l.status)
		) {
			case "fulfilled":
				return l.value;
			case "rejected":
				throw ((t = l.reason), Os(t), t);
			default:
				if (typeof l.status == "string") l.then(Ul, Ul);
				else {
					if (((t = ot), t !== null && 100 < t.shellSuspendCounter))
						throw Error(d(482));
					((t = l),
						(t.status = "pending"),
						t.then(
							function (a) {
								if (l.status === "pending") {
									var u = l;
									((u.status = "fulfilled"), (u.value = a));
								}
							},
							function (a) {
								if (l.status === "pending") {
									var u = l;
									((u.status = "rejected"), (u.reason = a));
								}
							},
						));
				}
				switch (l.status) {
					case "fulfilled":
						return l.value;
					case "rejected":
						throw ((t = l.reason), Os(t), t);
				}
				throw ((Be = l), oa);
		}
	}
	function Ce(t) {
		try {
			var l = t._init;
			return l(t._payload);
		} catch (e) {
			throw e !== null && typeof e == "object" && typeof e.then == "function"
				? ((Be = e), oa)
				: e;
		}
	}
	var Be = null;
	function Ms() {
		if (Be === null) throw Error(d(459));
		var t = Be;
		return ((Be = null), t);
	}
	function Os(t) {
		if (t === oa || t === Wu) throw Error(d(483));
	}
	var da = null,
		Ja = 0;
	function $u(t) {
		var l = Ja;
		return ((Ja += 1), da === null && (da = []), js(da, t, l));
	}
	function ka(t, l) {
		((l = l.props.ref), (t.ref = l !== void 0 ? l : null));
	}
	function Iu(t, l) {
		throw l.$$typeof === ut
			? Error(d(525))
			: ((t = Object.prototype.toString.call(l)),
				Error(
					d(
						31,
						t === "[object Object]"
							? "object with keys {" + Object.keys(l).join(", ") + "}"
							: t,
					),
				));
	}
	function Ds(t) {
		function l(r, s) {
			if (t) {
				var h = r.deletions;
				h === null ? ((r.deletions = [s]), (r.flags |= 16)) : h.push(s);
			}
		}
		function e(r, s) {
			if (!t) return null;
			for (; s !== null; ) (l(r, s), (s = s.sibling));
			return null;
		}
		function a(r) {
			for (var s = new Map(); r !== null; )
				(r.key !== null ? s.set(r.key, r) : s.set(r.index, r), (r = r.sibling));
			return s;
		}
		function u(r, s) {
			return ((r = Rl(r, s)), (r.index = 0), (r.sibling = null), r);
		}
		function n(r, s, h) {
			return (
				(r.index = h),
				t
					? ((h = r.alternate),
						h !== null
							? ((h = h.index), h < s ? ((r.flags |= 67108866), s) : h)
							: ((r.flags |= 67108866), s))
					: ((r.flags |= 1048576), s)
			);
		}
		function i(r) {
			return (t && r.alternate === null && (r.flags |= 67108866), r);
		}
		function c(r, s, h, p) {
			return s === null || s.tag !== 6
				? ((s = Ei(h, r.mode, p)), (s.return = r), s)
				: ((s = u(s, h)), (s.return = r), s);
		}
		function f(r, s, h, p) {
			var C = h.type;
			return C === qt
				? S(r, s, h.props.children, p, h.key)
				: s !== null &&
					  (s.elementType === C ||
							(typeof C == "object" &&
								C !== null &&
								C.$$typeof === Qt &&
								Ce(C) === s.type))
					? ((s = u(s, h.props)), ka(s, h), (s.return = r), s)
					: ((s = Vu(h.type, h.key, h.props, null, r.mode, p)),
						ka(s, h),
						(s.return = r),
						s);
		}
		function y(r, s, h, p) {
			return s === null ||
				s.tag !== 4 ||
				s.stateNode.containerInfo !== h.containerInfo ||
				s.stateNode.implementation !== h.implementation
				? ((s = Ai(h, r.mode, p)), (s.return = r), s)
				: ((s = u(s, h.children || [])), (s.return = r), s);
		}
		function S(r, s, h, p, C) {
			return s === null || s.tag !== 7
				? ((s = Oe(h, r.mode, p, C)), (s.return = r), s)
				: ((s = u(s, h)), (s.return = r), s);
		}
		function z(r, s, h) {
			if (
				(typeof s == "string" && s !== "") ||
				typeof s == "number" ||
				typeof s == "bigint"
			)
				return ((s = Ei("" + s, r.mode, h)), (s.return = r), s);
			if (typeof s == "object" && s !== null) {
				switch (s.$$typeof) {
					case Ht:
						return (
							(h = Vu(s.type, s.key, s.props, null, r.mode, h)),
							ka(h, s),
							(h.return = r),
							h
						);
					case Rt:
						return ((s = Ai(s, r.mode, h)), (s.return = r), s);
					case Qt:
						return ((s = Ce(s)), z(r, s, h));
				}
				if (bl(s) || Lt(s))
					return ((s = Oe(s, r.mode, h, null)), (s.return = r), s);
				if (typeof s.then == "function") return z(r, $u(s), h);
				if (s.$$typeof === Ct) return z(r, Ju(r, s), h);
				Iu(r, s);
			}
			return null;
		}
		function g(r, s, h, p) {
			var C = s !== null ? s.key : null;
			if (
				(typeof h == "string" && h !== "") ||
				typeof h == "number" ||
				typeof h == "bigint"
			)
				return C !== null ? null : c(r, s, "" + h, p);
			if (typeof h == "object" && h !== null) {
				switch (h.$$typeof) {
					case Ht:
						return h.key === C ? f(r, s, h, p) : null;
					case Rt:
						return h.key === C ? y(r, s, h, p) : null;
					case Qt:
						return ((h = Ce(h)), g(r, s, h, p));
				}
				if (bl(h) || Lt(h)) return C !== null ? null : S(r, s, h, p, null);
				if (typeof h.then == "function") return g(r, s, $u(h), p);
				if (h.$$typeof === Ct) return g(r, s, Ju(r, h), p);
				Iu(r, h);
			}
			return null;
		}
		function b(r, s, h, p, C) {
			if (
				(typeof p == "string" && p !== "") ||
				typeof p == "number" ||
				typeof p == "bigint"
			)
				return ((r = r.get(h) || null), c(s, r, "" + p, C));
			if (typeof p == "object" && p !== null) {
				switch (p.$$typeof) {
					case Ht:
						return (
							(r = r.get(p.key === null ? h : p.key) || null),
							f(s, r, p, C)
						);
					case Rt:
						return (
							(r = r.get(p.key === null ? h : p.key) || null),
							y(s, r, p, C)
						);
					case Qt:
						return ((p = Ce(p)), b(r, s, h, p, C));
				}
				if (bl(p) || Lt(p))
					return ((r = r.get(h) || null), S(s, r, p, C, null));
				if (typeof p.then == "function") return b(r, s, h, $u(p), C);
				if (p.$$typeof === Ct) return b(r, s, h, Ju(s, p), C);
				Iu(s, p);
			}
			return null;
		}
		function O(r, s, h, p) {
			for (
				var C = null, $ = null, H = s, L = (s = 0), k = null;
				H !== null && L < h.length;
				L++
			) {
				H.index > L ? ((k = H), (H = null)) : (k = H.sibling);
				var I = g(r, H, h[L], p);
				if (I === null) {
					H === null && (H = k);
					break;
				}
				(t && H && I.alternate === null && l(r, H),
					(s = n(I, s, L)),
					$ === null ? (C = I) : ($.sibling = I),
					($ = I),
					(H = k));
			}
			if (L === h.length) return (e(r, H), F && Cl(r, L), C);
			if (H === null) {
				for (; L < h.length; L++)
					((H = z(r, h[L], p)),
						H !== null &&
							((s = n(H, s, L)),
							$ === null ? (C = H) : ($.sibling = H),
							($ = H)));
				return (F && Cl(r, L), C);
			}
			for (H = a(H); L < h.length; L++)
				((k = b(H, r, L, h[L], p)),
					k !== null &&
						(t && k.alternate !== null && H.delete(k.key === null ? L : k.key),
						(s = n(k, s, L)),
						$ === null ? (C = k) : ($.sibling = k),
						($ = k)));
			return (
				t &&
					H.forEach(function (pe) {
						return l(r, pe);
					}),
				F && Cl(r, L),
				C
			);
		}
		function B(r, s, h, p) {
			if (h == null) throw Error(d(151));
			for (
				var C = null, $ = null, H = s, L = (s = 0), k = null, I = h.next();
				H !== null && !I.done;
				L++, I = h.next()
			) {
				H.index > L ? ((k = H), (H = null)) : (k = H.sibling);
				var pe = g(r, H, I.value, p);
				if (pe === null) {
					H === null && (H = k);
					break;
				}
				(t && H && pe.alternate === null && l(r, H),
					(s = n(pe, s, L)),
					$ === null ? (C = pe) : ($.sibling = pe),
					($ = pe),
					(H = k));
			}
			if (I.done) return (e(r, H), F && Cl(r, L), C);
			if (H === null) {
				for (; !I.done; L++, I = h.next())
					((I = z(r, I.value, p)),
						I !== null &&
							((s = n(I, s, L)),
							$ === null ? (C = I) : ($.sibling = I),
							($ = I)));
				return (F && Cl(r, L), C);
			}
			for (H = a(H); !I.done; L++, I = h.next())
				((I = b(H, r, L, I.value, p)),
					I !== null &&
						(t && I.alternate !== null && H.delete(I.key === null ? L : I.key),
						(s = n(I, s, L)),
						$ === null ? (C = I) : ($.sibling = I),
						($ = I)));
			return (
				t &&
					H.forEach(function (ih) {
						return l(r, ih);
					}),
				F && Cl(r, L),
				C
			);
		}
		function ft(r, s, h, p) {
			if (
				(typeof h == "object" &&
					h !== null &&
					h.type === qt &&
					h.key === null &&
					(h = h.props.children),
				typeof h == "object" && h !== null)
			) {
				switch (h.$$typeof) {
					case Ht:
						t: {
							for (var C = h.key; s !== null; ) {
								if (s.key === C) {
									if (((C = h.type), C === qt)) {
										if (s.tag === 7) {
											(e(r, s.sibling),
												(p = u(s, h.props.children)),
												(p.return = r),
												(r = p));
											break t;
										}
									} else if (
										s.elementType === C ||
										(typeof C == "object" &&
											C !== null &&
											C.$$typeof === Qt &&
											Ce(C) === s.type)
									) {
										(e(r, s.sibling),
											(p = u(s, h.props)),
											ka(p, h),
											(p.return = r),
											(r = p));
										break t;
									}
									e(r, s);
									break;
								} else l(r, s);
								s = s.sibling;
							}
							h.type === qt
								? ((p = Oe(h.props.children, r.mode, p, h.key)),
									(p.return = r),
									(r = p))
								: ((p = Vu(h.type, h.key, h.props, null, r.mode, p)),
									ka(p, h),
									(p.return = r),
									(r = p));
						}
						return i(r);
					case Rt:
						t: {
							for (C = h.key; s !== null; ) {
								if (s.key === C)
									if (
										s.tag === 4 &&
										s.stateNode.containerInfo === h.containerInfo &&
										s.stateNode.implementation === h.implementation
									) {
										(e(r, s.sibling),
											(p = u(s, h.children || [])),
											(p.return = r),
											(r = p));
										break t;
									} else {
										e(r, s);
										break;
									}
								else l(r, s);
								s = s.sibling;
							}
							((p = Ai(h, r.mode, p)), (p.return = r), (r = p));
						}
						return i(r);
					case Qt:
						return ((h = Ce(h)), ft(r, s, h, p));
				}
				if (bl(h)) return O(r, s, h, p);
				if (Lt(h)) {
					if (((C = Lt(h)), typeof C != "function")) throw Error(d(150));
					return ((h = C.call(h)), B(r, s, h, p));
				}
				if (typeof h.then == "function") return ft(r, s, $u(h), p);
				if (h.$$typeof === Ct) return ft(r, s, Ju(r, h), p);
				Iu(r, h);
			}
			return (typeof h == "string" && h !== "") ||
				typeof h == "number" ||
				typeof h == "bigint"
				? ((h = "" + h),
					s !== null && s.tag === 6
						? (e(r, s.sibling), (p = u(s, h)), (p.return = r), (r = p))
						: (e(r, s), (p = Ei(h, r.mode, p)), (p.return = r), (r = p)),
					i(r))
				: e(r, s);
		}
		return function (r, s, h, p) {
			try {
				Ja = 0;
				var C = ft(r, s, h, p);
				return ((da = null), C);
			} catch (H) {
				if (H === oa || H === Wu) throw H;
				var $ = ll(29, H, null, r.mode);
				return (($.lanes = p), ($.return = r), $);
			} finally {
			}
		};
	}
	var qe = Ds(!0),
		Us = Ds(!1),
		ue = !1;
	function qi(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Yi(t, l) {
		((t = t.updateQueue),
			l.updateQueue === t &&
				(l.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null,
				}));
	}
	function ne(t) {
		return { lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function ie(t, l, e) {
		var a = t.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (tt & 2) !== 0)) {
			var u = a.pending;
			return (
				u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
				(a.pending = l),
				(l = Zu(t)),
				vs(t, null, e),
				l
			);
		}
		return (Lu(t, a, l, e), Zu(t));
	}
	function Wa(t, l, e) {
		if (
			((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
		) {
			var a = l.lanes;
			((a &= t.pendingLanes), (e |= a), (l.lanes = e), Tf(t, e));
		}
	}
	function Gi(t, l) {
		var e = t.updateQueue,
			a = t.alternate;
		if (a !== null && ((a = a.updateQueue), e === a)) {
			var u = null,
				n = null;
			if (((e = e.firstBaseUpdate), e !== null)) {
				do {
					var i = {
						lane: e.lane,
						tag: e.tag,
						payload: e.payload,
						callback: null,
						next: null,
					};
					(n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
				} while (e !== null);
				n === null ? (u = n = l) : (n = n.next = l);
			} else u = n = l;
			((e = {
				baseState: a.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: n,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(t.updateQueue = e));
			return;
		}
		((t = e.lastBaseUpdate),
			t === null ? (e.firstBaseUpdate = l) : (t.next = l),
			(e.lastBaseUpdate = l));
	}
	var Xi = !1;
	function Fa() {
		if (Xi) {
			var t = sa;
			if (t !== null) throw t;
		}
	}
	function $a(t, l, e, a) {
		Xi = !1;
		var u = t.updateQueue;
		ue = !1;
		var n = u.firstBaseUpdate,
			i = u.lastBaseUpdate,
			c = u.shared.pending;
		if (c !== null) {
			u.shared.pending = null;
			var f = c,
				y = f.next;
			((f.next = null), i === null ? (n = y) : (i.next = y), (i = f));
			var S = t.alternate;
			S !== null &&
				((S = S.updateQueue),
				(c = S.lastBaseUpdate),
				c !== i &&
					(c === null ? (S.firstBaseUpdate = y) : (c.next = y),
					(S.lastBaseUpdate = f)));
		}
		if (n !== null) {
			var z = u.baseState;
			((i = 0), (S = y = f = null), (c = n));
			do {
				var g = c.lane & -536870913,
					b = g !== c.lane;
				if (b ? (J & g) === g : (a & g) === g) {
					(g !== 0 && g === fa && (Xi = !0),
						S !== null &&
							(S = S.next =
								{
									lane: 0,
									tag: c.tag,
									payload: c.payload,
									callback: null,
									next: null,
								}));
					t: {
						var O = t,
							B = c;
						g = l;
						var ft = e;
						switch (B.tag) {
							case 1:
								if (((O = B.payload), typeof O == "function")) {
									z = O.call(ft, z, g);
									break t;
								}
								z = O;
								break t;
							case 3:
								O.flags = (O.flags & -65537) | 128;
							case 0:
								if (
									((O = B.payload),
									(g = typeof O == "function" ? O.call(ft, z, g) : O),
									g == null)
								)
									break t;
								z = R({}, z, g);
								break t;
							case 2:
								ue = !0;
						}
					}
					((g = c.callback),
						g !== null &&
							((t.flags |= 64),
							b && (t.flags |= 8192),
							(b = u.callbacks),
							b === null ? (u.callbacks = [g]) : b.push(g)));
				} else
					((b = {
						lane: g,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null,
					}),
						S === null ? ((y = S = b), (f = z)) : (S = S.next = b),
						(i |= g));
				if (((c = c.next), c === null)) {
					if (((c = u.shared.pending), c === null)) break;
					((b = c),
						(c = b.next),
						(b.next = null),
						(u.lastBaseUpdate = b),
						(u.shared.pending = null));
				}
			} while (!0);
			(S === null && (f = z),
				(u.baseState = f),
				(u.firstBaseUpdate = y),
				(u.lastBaseUpdate = S),
				n === null && (u.shared.lanes = 0),
				(de |= i),
				(t.lanes = i),
				(t.memoizedState = z));
		}
	}
	function Hs(t, l) {
		if (typeof t != "function") throw Error(d(191, t));
		t.call(l);
	}
	function Rs(t, l) {
		var e = t.callbacks;
		if (e !== null)
			for (t.callbacks = null, t = 0; t < e.length; t++) Hs(e[t], l);
	}
	var ra = o(null),
		Pu = o(0);
	function Cs(t, l) {
		((t = wl), j(Pu, t), j(ra, l), (wl = t | l.baseLanes));
	}
	function Qi() {
		(j(Pu, wl), j(ra, ra.current));
	}
	function Li() {
		((wl = Pu.current), T(ra), T(Pu));
	}
	var el = o(null),
		vl = null;
	function ce(t) {
		var l = t.alternate;
		(j(bt, bt.current & 1),
			j(el, t),
			vl === null &&
				(l === null || ra.current !== null || l.memoizedState !== null) &&
				(vl = t));
	}
	function Zi(t) {
		(j(bt, bt.current), j(el, t), vl === null && (vl = t));
	}
	function Bs(t) {
		t.tag === 22
			? (j(bt, bt.current), j(el, t), vl === null && (vl = t))
			: fe();
	}
	function fe() {
		(j(bt, bt.current), j(el, el.current));
	}
	function al(t) {
		(T(el), vl === t && (vl = null), T(bt));
	}
	var bt = o(0);
	function tn(t) {
		for (var l = t; l !== null; ) {
			if (l.tag === 13) {
				var e = l.memoizedState;
				if (e !== null && ((e = e.dehydrated), e === null || Wc(e) || Fc(e)))
					return l;
			} else if (
				l.tag === 19 &&
				(l.memoizedProps.revealOrder === "forwards" ||
					l.memoizedProps.revealOrder === "backwards" ||
					l.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
					l.memoizedProps.revealOrder === "together")
			) {
				if ((l.flags & 128) !== 0) return l;
			} else if (l.child !== null) {
				((l.child.return = l), (l = l.child));
				continue;
			}
			if (l === t) break;
			for (; l.sibling === null; ) {
				if (l.return === null || l.return === t) return null;
				l = l.return;
			}
			((l.sibling.return = l.return), (l = l.sibling));
		}
		return null;
	}
	var Yl = 0,
		Q = null,
		it = null,
		pt = null,
		ln = !1,
		ma = !1,
		Ye = !1,
		en = 0,
		Ia = 0,
		ha = null,
		Fr = 0;
	function vt() {
		throw Error(d(321));
	}
	function Vi(t, l) {
		if (l === null) return !1;
		for (var e = 0; e < l.length && e < t.length; e++)
			if (!tl(t[e], l[e])) return !1;
		return !0;
	}
	function Ki(t, l, e, a, u, n) {
		return (
			(Yl = n),
			(Q = l),
			(l.memoizedState = null),
			(l.updateQueue = null),
			(l.lanes = 0),
			(x.H = t === null || t.memoizedState === null ? xo : ic),
			(Ye = !1),
			(n = e(a, u)),
			(Ye = !1),
			ma && (n = Ys(l, e, a, u)),
			qs(t),
			n
		);
	}
	function qs(t) {
		x.H = lu;
		var l = it !== null && it.next !== null;
		if (((Yl = 0), (pt = it = Q = null), (ln = !1), (Ia = 0), (ha = null), l))
			throw Error(d(300));
		t === null ||
			zt ||
			((t = t.dependencies), t !== null && wu(t) && (zt = !0));
	}
	function Ys(t, l, e, a) {
		Q = t;
		var u = 0;
		do {
			if ((ma && (ha = null), (Ia = 0), (ma = !1), 25 <= u))
				throw Error(d(301));
			if (((u += 1), (pt = it = null), t.updateQueue != null)) {
				var n = t.updateQueue;
				((n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0));
			}
			((x.H = po), (n = l(e, a)));
		} while (ma);
		return n;
	}
	function $r() {
		var t = x.H,
			l = t.useState()[0];
		return (
			(l = typeof l.then == "function" ? Pa(l) : l),
			(t = t.useState()[0]),
			(it !== null ? it.memoizedState : null) !== t && (Q.flags |= 1024),
			l
		);
	}
	function wi() {
		var t = en !== 0;
		return ((en = 0), t);
	}
	function Ji(t, l, e) {
		((l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e));
	}
	function ki(t) {
		if (ln) {
			for (t = t.memoizedState; t !== null; ) {
				var l = t.queue;
				(l !== null && (l.pending = null), (t = t.next));
			}
			ln = !1;
		}
		((Yl = 0), (pt = it = Q = null), (ma = !1), (Ia = en = 0), (ha = null));
	}
	function Gt() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (pt === null ? (Q.memoizedState = pt = t) : (pt = pt.next = t), pt);
	}
	function St() {
		if (it === null) {
			var t = Q.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = it.next;
		var l = pt === null ? Q.memoizedState : pt.next;
		if (l !== null) ((pt = l), (it = t));
		else {
			if (t === null)
				throw Q.alternate === null ? Error(d(467)) : Error(d(310));
			((it = t),
				(t = {
					memoizedState: it.memoizedState,
					baseState: it.baseState,
					baseQueue: it.baseQueue,
					queue: it.queue,
					next: null,
				}),
				pt === null ? (Q.memoizedState = pt = t) : (pt = pt.next = t));
		}
		return pt;
	}
	function an() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Pa(t) {
		var l = Ia;
		return (
			(Ia += 1),
			ha === null && (ha = []),
			(t = js(ha, t, l)),
			(l = Q),
			(pt === null ? l.memoizedState : pt.next) === null &&
				((l = l.alternate),
				(x.H = l === null || l.memoizedState === null ? xo : ic)),
			t
		);
	}
	function un(t) {
		if (t !== null && typeof t == "object") {
			if (typeof t.then == "function") return Pa(t);
			if (t.$$typeof === Ct) return Mt(t);
		}
		throw Error(d(438, String(t)));
	}
	function Wi(t) {
		var l = null,
			e = Q.updateQueue;
		if ((e !== null && (l = e.memoCache), l == null)) {
			var a = Q.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(l = {
							data: a.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(l == null && (l = { data: [], index: 0 }),
			e === null && ((e = an()), (Q.updateQueue = e)),
			(e.memoCache = l),
			(e = l.data[l.index]),
			e === void 0)
		)
			for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Ze;
		return (l.index++, e);
	}
	function Gl(t, l) {
		return typeof l == "function" ? l(t) : l;
	}
	function nn(t) {
		var l = St();
		return Fi(l, it, t);
	}
	function Fi(t, l, e) {
		var a = t.queue;
		if (a === null) throw Error(d(311));
		a.lastRenderedReducer = e;
		var u = t.baseQueue,
			n = a.pending;
		if (n !== null) {
			if (u !== null) {
				var i = u.next;
				((u.next = n.next), (n.next = i));
			}
			((l.baseQueue = u = n), (a.pending = null));
		}
		if (((n = t.baseState), u === null)) t.memoizedState = n;
		else {
			l = u.next;
			var c = (i = null),
				f = null,
				y = l,
				S = !1;
			do {
				var z = y.lane & -536870913;
				if (z !== y.lane ? (J & z) === z : (Yl & z) === z) {
					var g = y.revertLane;
					if (g === 0)
						(f !== null &&
							(f = f.next =
								{
									lane: 0,
									revertLane: 0,
									gesture: null,
									action: y.action,
									hasEagerState: y.hasEagerState,
									eagerState: y.eagerState,
									next: null,
								}),
							z === fa && (S = !0));
					else if ((Yl & g) === g) {
						((y = y.next), g === fa && (S = !0));
						continue;
					} else
						((z = {
							lane: 0,
							revertLane: y.revertLane,
							gesture: null,
							action: y.action,
							hasEagerState: y.hasEagerState,
							eagerState: y.eagerState,
							next: null,
						}),
							f === null ? ((c = f = z), (i = n)) : (f = f.next = z),
							(Q.lanes |= g),
							(de |= g));
					((z = y.action),
						Ye && e(n, z),
						(n = y.hasEagerState ? y.eagerState : e(n, z)));
				} else
					((g = {
						lane: z,
						revertLane: y.revertLane,
						gesture: y.gesture,
						action: y.action,
						hasEagerState: y.hasEagerState,
						eagerState: y.eagerState,
						next: null,
					}),
						f === null ? ((c = f = g), (i = n)) : (f = f.next = g),
						(Q.lanes |= z),
						(de |= z));
				y = y.next;
			} while (y !== null && y !== l);
			if (
				(f === null ? (i = n) : (f.next = c),
				!tl(n, t.memoizedState) && ((zt = !0), S && ((e = sa), e !== null)))
			)
				throw e;
			((t.memoizedState = n),
				(t.baseState = i),
				(t.baseQueue = f),
				(a.lastRenderedState = n));
		}
		return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
	}
	function $i(t) {
		var l = St(),
			e = l.queue;
		if (e === null) throw Error(d(311));
		e.lastRenderedReducer = t;
		var a = e.dispatch,
			u = e.pending,
			n = l.memoizedState;
		if (u !== null) {
			e.pending = null;
			var i = (u = u.next);
			do ((n = t(n, i.action)), (i = i.next));
			while (i !== u);
			(tl(n, l.memoizedState) || (zt = !0),
				(l.memoizedState = n),
				l.baseQueue === null && (l.baseState = n),
				(e.lastRenderedState = n));
		}
		return [n, a];
	}
	function Gs(t, l, e) {
		var a = Q,
			u = St(),
			n = F;
		if (n) {
			if (e === void 0) throw Error(d(407));
			e = e();
		} else e = l();
		var i = !tl((it || u).memoizedState, e);
		if (
			(i && ((u.memoizedState = e), (zt = !0)),
			(u = u.queue),
			tc(Ls.bind(null, a, u, t), [t]),
			u.getSnapshot !== l || i || (pt !== null && pt.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				va(9, { destroy: void 0 }, Qs.bind(null, a, u, e, l), null),
				ot === null)
			)
				throw Error(d(349));
			n || (Yl & 127) !== 0 || Xs(a, l, e);
		}
		return e;
	}
	function Xs(t, l, e) {
		((t.flags |= 16384),
			(t = { getSnapshot: l, value: e }),
			(l = Q.updateQueue),
			l === null
				? ((l = an()), (Q.updateQueue = l), (l.stores = [t]))
				: ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t)));
	}
	function Qs(t, l, e, a) {
		((l.value = e), (l.getSnapshot = a), Zs(l) && Vs(t));
	}
	function Ls(t, l, e) {
		return e(function () {
			Zs(l) && Vs(t);
		});
	}
	function Zs(t) {
		var l = t.getSnapshot;
		t = t.value;
		try {
			var e = l();
			return !tl(t, e);
		} catch {
			return !0;
		}
	}
	function Vs(t) {
		var l = Me(t, 2);
		l !== null && Wt(l, t, 2);
	}
	function Ii(t) {
		var l = Gt();
		if (typeof t == "function") {
			var e = t;
			if (((t = e()), Ye)) {
				$l(!0);
				try {
					e();
				} finally {
					$l(!1);
				}
			}
		}
		return (
			(l.memoizedState = l.baseState = t),
			(l.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Gl,
				lastRenderedState: t,
			}),
			l
		);
	}
	function Ks(t, l, e, a) {
		return ((t.baseState = e), Fi(t, it, typeof a == "function" ? a : Gl));
	}
	function Ir(t, l, e, a, u) {
		if (sn(t)) throw Error(d(485));
		if (((t = l.action), t !== null)) {
			var n = {
				payload: u,
				action: t,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (i) {
					n.listeners.push(i);
				},
			};
			(x.T !== null ? e(!0) : (n.isTransition = !1),
				a(n),
				(e = l.pending),
				e === null
					? ((n.next = l.pending = n), ws(l, n))
					: ((n.next = e.next), (l.pending = e.next = n)));
		}
	}
	function ws(t, l) {
		var e = l.action,
			a = l.payload,
			u = t.state;
		if (l.isTransition) {
			var n = x.T,
				i = {};
			x.T = i;
			try {
				var c = e(u, a),
					f = x.S;
				(f !== null && f(i, c), Js(t, l, c));
			} catch (y) {
				Pi(t, l, y);
			} finally {
				(n !== null && i.types !== null && (n.types = i.types), (x.T = n));
			}
		} else
			try {
				((n = e(u, a)), Js(t, l, n));
			} catch (y) {
				Pi(t, l, y);
			}
	}
	function Js(t, l, e) {
		e !== null && typeof e == "object" && typeof e.then == "function"
			? e.then(
					function (a) {
						ks(t, l, a);
					},
					function (a) {
						return Pi(t, l, a);
					},
				)
			: ks(t, l, e);
	}
	function ks(t, l, e) {
		((l.status = "fulfilled"),
			(l.value = e),
			Ws(l),
			(t.state = e),
			(l = t.pending),
			l !== null &&
				((e = l.next),
				e === l ? (t.pending = null) : ((e = e.next), (l.next = e), ws(t, e))));
	}
	function Pi(t, l, e) {
		var a = t.pending;
		if (((t.pending = null), a !== null)) {
			a = a.next;
			do ((l.status = "rejected"), (l.reason = e), Ws(l), (l = l.next));
			while (l !== a);
		}
		t.action = null;
	}
	function Ws(t) {
		t = t.listeners;
		for (var l = 0; l < t.length; l++) (0, t[l])();
	}
	function Fs(t, l) {
		return l;
	}
	function $s(t, l) {
		if (F) {
			var e = ot.formState;
			if (e !== null) {
				t: {
					var a = Q;
					if (F) {
						if (rt) {
							l: {
								for (var u = rt, n = hl; u.nodeType !== 8; ) {
									if (!n) {
										u = null;
										break l;
									}
									if (((u = yl(u.nextSibling)), u === null)) {
										u = null;
										break l;
									}
								}
								((n = u.data), (u = n === "F!" || n === "F" ? u : null));
							}
							if (u) {
								((rt = yl(u.nextSibling)), (a = u.data === "F!"));
								break t;
							}
						}
						ee(a);
					}
					a = !1;
				}
				a && (l = e[0]);
			}
		}
		return (
			(e = Gt()),
			(e.memoizedState = e.baseState = l),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Fs,
				lastRenderedState: l,
			}),
			(e.queue = a),
			(e = go.bind(null, Q, a)),
			(a.dispatch = e),
			(a = Ii(!1)),
			(n = nc.bind(null, Q, !1, a.queue)),
			(a = Gt()),
			(u = { state: l, dispatch: null, action: t, pending: null }),
			(a.queue = u),
			(e = Ir.bind(null, Q, u, n, e)),
			(u.dispatch = e),
			(a.memoizedState = t),
			[l, e, !1]
		);
	}
	function Is(t) {
		var l = St();
		return Ps(l, it, t);
	}
	function Ps(t, l, e) {
		if (
			((l = Fi(t, l, Fs)[0]),
			(t = nn(Gl)[0]),
			typeof l == "object" && l !== null && typeof l.then == "function")
		)
			try {
				var a = Pa(l);
			} catch (i) {
				throw i === oa ? Wu : i;
			}
		else a = l;
		l = St();
		var u = l.queue,
			n = u.dispatch;
		return (
			e !== l.memoizedState &&
				((Q.flags |= 2048),
				va(9, { destroy: void 0 }, Pr.bind(null, u, e), null)),
			[a, n, t]
		);
	}
	function Pr(t, l) {
		t.action = l;
	}
	function to(t) {
		var l = St(),
			e = it;
		if (e !== null) return Ps(l, e, t);
		(St(), (l = l.memoizedState), (e = St()));
		var a = e.queue.dispatch;
		return ((e.memoizedState = t), [l, a, !1]);
	}
	function va(t, l, e, a) {
		return (
			(t = { tag: t, create: e, deps: a, inst: l, next: null }),
			(l = Q.updateQueue),
			l === null && ((l = an()), (Q.updateQueue = l)),
			(e = l.lastEffect),
			e === null
				? (l.lastEffect = t.next = t)
				: ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
			t
		);
	}
	function lo() {
		return St().memoizedState;
	}
	function cn(t, l, e, a) {
		var u = Gt();
		((Q.flags |= t),
			(u.memoizedState = va(
				1 | l,
				{ destroy: void 0 },
				e,
				a === void 0 ? null : a,
			)));
	}
	function fn(t, l, e, a) {
		var u = St();
		a = a === void 0 ? null : a;
		var n = u.memoizedState.inst;
		it !== null && a !== null && Vi(a, it.memoizedState.deps)
			? (u.memoizedState = va(l, n, e, a))
			: ((Q.flags |= t), (u.memoizedState = va(1 | l, n, e, a)));
	}
	function eo(t, l) {
		cn(8390656, 8, t, l);
	}
	function tc(t, l) {
		fn(2048, 8, t, l);
	}
	function tm(t) {
		Q.flags |= 4;
		var l = Q.updateQueue;
		if (l === null) ((l = an()), (Q.updateQueue = l), (l.events = [t]));
		else {
			var e = l.events;
			e === null ? (l.events = [t]) : e.push(t);
		}
	}
	function ao(t) {
		var l = St().memoizedState;
		return (
			tm({ ref: l, nextImpl: t }),
			function () {
				if ((tt & 2) !== 0) throw Error(d(440));
				return l.impl.apply(void 0, arguments);
			}
		);
	}
	function uo(t, l) {
		return fn(4, 2, t, l);
	}
	function no(t, l) {
		return fn(4, 4, t, l);
	}
	function io(t, l) {
		if (typeof l == "function") {
			t = t();
			var e = l(t);
			return function () {
				typeof e == "function" ? e() : l(null);
			};
		}
		if (l != null)
			return (
				(t = t()),
				(l.current = t),
				function () {
					l.current = null;
				}
			);
	}
	function co(t, l, e) {
		((e = e != null ? e.concat([t]) : null), fn(4, 4, io.bind(null, l, t), e));
	}
	function lc() {}
	function fo(t, l) {
		var e = St();
		l = l === void 0 ? null : l;
		var a = e.memoizedState;
		return l !== null && Vi(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
	}
	function so(t, l) {
		var e = St();
		l = l === void 0 ? null : l;
		var a = e.memoizedState;
		if (l !== null && Vi(l, a[1])) return a[0];
		if (((a = t()), Ye)) {
			$l(!0);
			try {
				t();
			} finally {
				$l(!1);
			}
		}
		return ((e.memoizedState = [a, l]), a);
	}
	function ec(t, l, e) {
		return e === void 0 || ((Yl & 1073741824) !== 0 && (J & 261930) === 0)
			? (t.memoizedState = l)
			: ((t.memoizedState = e), (t = d0()), (Q.lanes |= t), (de |= t), e);
	}
	function oo(t, l, e, a) {
		return tl(e, l)
			? e
			: ra.current !== null
				? ((t = ec(t, e, a)), tl(t, l) || (zt = !0), t)
				: (Yl & 42) === 0 || ((Yl & 1073741824) !== 0 && (J & 261930) === 0)
					? ((zt = !0), (t.memoizedState = e))
					: ((t = d0()), (Q.lanes |= t), (de |= t), l);
	}
	function ro(t, l, e, a, u) {
		var n = _.p;
		_.p = n !== 0 && 8 > n ? n : 8;
		var i = x.T,
			c = {};
		((x.T = c), nc(t, !1, l, e));
		try {
			var f = u(),
				y = x.S;
			if (
				(y !== null && y(c, f),
				f !== null && typeof f == "object" && typeof f.then == "function")
			) {
				var S = Wr(f, a);
				tu(t, l, S, il(t));
			} else tu(t, l, a, il(t));
		} catch (z) {
			tu(t, l, { then: function () {}, status: "rejected", reason: z }, il());
		} finally {
			((_.p = n),
				i !== null && c.types !== null && (i.types = c.types),
				(x.T = i));
		}
	}
	function lm() {}
	function ac(t, l, e, a) {
		if (t.tag !== 5) throw Error(d(476));
		var u = mo(t).queue;
		ro(
			t,
			u,
			l,
			q,
			e === null
				? lm
				: function () {
						return (ho(t), e(a));
					},
		);
	}
	function mo(t) {
		var l = t.memoizedState;
		if (l !== null) return l;
		l = {
			memoizedState: q,
			baseState: q,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Gl,
				lastRenderedState: q,
			},
			next: null,
		};
		var e = {};
		return (
			(l.next = {
				memoizedState: e,
				baseState: e,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Gl,
					lastRenderedState: e,
				},
				next: null,
			}),
			(t.memoizedState = l),
			(t = t.alternate),
			t !== null && (t.memoizedState = l),
			l
		);
	}
	function ho(t) {
		var l = mo(t);
		(l.next === null && (l = t.alternate.memoizedState),
			tu(t, l.next.queue, {}, il()));
	}
	function uc() {
		return Mt(gu);
	}
	function vo() {
		return St().memoizedState;
	}
	function yo() {
		return St().memoizedState;
	}
	function em(t) {
		for (var l = t.return; l !== null; ) {
			switch (l.tag) {
				case 24:
				case 3:
					var e = il();
					t = ne(e);
					var a = ie(l, t, e);
					(a !== null && (Wt(a, l, e), Wa(a, l, e)),
						(l = { cache: Hi() }),
						(t.payload = l));
					return;
			}
			l = l.return;
		}
	}
	function am(t, l, e) {
		var a = il();
		((e = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: e,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			sn(t)
				? bo(l, e)
				: ((e = zi(t, l, e, a)), e !== null && (Wt(e, t, a), So(e, l, a))));
	}
	function go(t, l, e) {
		var a = il();
		tu(t, l, e, a);
	}
	function tu(t, l, e, a) {
		var u = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: e,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (sn(t)) bo(l, u);
		else {
			var n = t.alternate;
			if (
				t.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = l.lastRenderedReducer), n !== null)
			)
				try {
					var i = l.lastRenderedState,
						c = n(i, e);
					if (((u.hasEagerState = !0), (u.eagerState = c), tl(c, i)))
						return (Lu(t, l, u, 0), ot === null && Qu(), !1);
				} catch {
				} finally {
				}
			if (((e = zi(t, l, u, a)), e !== null))
				return (Wt(e, t, a), So(e, l, a), !0);
		}
		return !1;
	}
	function nc(t, l, e, a) {
		if (
			((a = {
				lane: 2,
				revertLane: qc(),
				gesture: null,
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			sn(t))
		) {
			if (l) throw Error(d(479));
		} else ((l = zi(t, e, a, 2)), l !== null && Wt(l, t, 2));
	}
	function sn(t) {
		var l = t.alternate;
		return t === Q || (l !== null && l === Q);
	}
	function bo(t, l) {
		ma = ln = !0;
		var e = t.pending;
		(e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
			(t.pending = l));
	}
	function So(t, l, e) {
		if ((e & 4194048) !== 0) {
			var a = l.lanes;
			((a &= t.pendingLanes), (e |= a), (l.lanes = e), Tf(t, e));
		}
	}
	var lu = {
		readContext: Mt,
		use: un,
		useCallback: vt,
		useContext: vt,
		useEffect: vt,
		useImperativeHandle: vt,
		useLayoutEffect: vt,
		useInsertionEffect: vt,
		useMemo: vt,
		useReducer: vt,
		useRef: vt,
		useState: vt,
		useDebugValue: vt,
		useDeferredValue: vt,
		useTransition: vt,
		useSyncExternalStore: vt,
		useId: vt,
		useHostTransitionStatus: vt,
		useFormState: vt,
		useActionState: vt,
		useOptimistic: vt,
		useMemoCache: vt,
		useCacheRefresh: vt,
	};
	lu.useEffectEvent = vt;
	var xo = {
			readContext: Mt,
			use: un,
			useCallback: function (t, l) {
				return ((Gt().memoizedState = [t, l === void 0 ? null : l]), t);
			},
			useContext: Mt,
			useEffect: eo,
			useImperativeHandle: function (t, l, e) {
				((e = e != null ? e.concat([t]) : null),
					cn(4194308, 4, io.bind(null, l, t), e));
			},
			useLayoutEffect: function (t, l) {
				return cn(4194308, 4, t, l);
			},
			useInsertionEffect: function (t, l) {
				cn(4, 2, t, l);
			},
			useMemo: function (t, l) {
				var e = Gt();
				l = l === void 0 ? null : l;
				var a = t();
				if (Ye) {
					$l(!0);
					try {
						t();
					} finally {
						$l(!1);
					}
				}
				return ((e.memoizedState = [a, l]), a);
			},
			useReducer: function (t, l, e) {
				var a = Gt();
				if (e !== void 0) {
					var u = e(l);
					if (Ye) {
						$l(!0);
						try {
							e(l);
						} finally {
							$l(!1);
						}
					}
				} else u = l;
				return (
					(a.memoizedState = a.baseState = u),
					(t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: u,
					}),
					(a.queue = t),
					(t = t.dispatch = am.bind(null, Q, t)),
					[a.memoizedState, t]
				);
			},
			useRef: function (t) {
				var l = Gt();
				return ((t = { current: t }), (l.memoizedState = t));
			},
			useState: function (t) {
				t = Ii(t);
				var l = t.queue,
					e = go.bind(null, Q, l);
				return ((l.dispatch = e), [t.memoizedState, e]);
			},
			useDebugValue: lc,
			useDeferredValue: function (t, l) {
				var e = Gt();
				return ec(e, t, l);
			},
			useTransition: function () {
				var t = Ii(!1);
				return (
					(t = ro.bind(null, Q, t.queue, !0, !1)),
					(Gt().memoizedState = t),
					[!1, t]
				);
			},
			useSyncExternalStore: function (t, l, e) {
				var a = Q,
					u = Gt();
				if (F) {
					if (e === void 0) throw Error(d(407));
					e = e();
				} else {
					if (((e = l()), ot === null)) throw Error(d(349));
					(J & 127) !== 0 || Xs(a, l, e);
				}
				u.memoizedState = e;
				var n = { value: e, getSnapshot: l };
				return (
					(u.queue = n),
					eo(Ls.bind(null, a, n, t), [t]),
					(a.flags |= 2048),
					va(9, { destroy: void 0 }, Qs.bind(null, a, n, e, l), null),
					e
				);
			},
			useId: function () {
				var t = Gt(),
					l = ot.identifierPrefix;
				if (F) {
					var e = Nl,
						a = Al;
					((e = (a & ~(1 << (32 - Pt(a) - 1))).toString(32) + e),
						(l = "_" + l + "R_" + e),
						(e = en++),
						0 < e && (l += "H" + e.toString(32)),
						(l += "_"));
				} else ((e = Fr++), (l = "_" + l + "r_" + e.toString(32) + "_"));
				return (t.memoizedState = l);
			},
			useHostTransitionStatus: uc,
			useFormState: $s,
			useActionState: $s,
			useOptimistic: function (t) {
				var l = Gt();
				l.memoizedState = l.baseState = t;
				var e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(l.queue = e),
					(l = nc.bind(null, Q, !0, e)),
					(e.dispatch = l),
					[t, l]
				);
			},
			useMemoCache: Wi,
			useCacheRefresh: function () {
				return (Gt().memoizedState = em.bind(null, Q));
			},
			useEffectEvent: function (t) {
				var l = Gt(),
					e = { impl: t };
				return (
					(l.memoizedState = e),
					function () {
						if ((tt & 2) !== 0) throw Error(d(440));
						return e.impl.apply(void 0, arguments);
					}
				);
			},
		},
		ic = {
			readContext: Mt,
			use: un,
			useCallback: fo,
			useContext: Mt,
			useEffect: tc,
			useImperativeHandle: co,
			useInsertionEffect: uo,
			useLayoutEffect: no,
			useMemo: so,
			useReducer: nn,
			useRef: lo,
			useState: function () {
				return nn(Gl);
			},
			useDebugValue: lc,
			useDeferredValue: function (t, l) {
				var e = St();
				return oo(e, it.memoizedState, t, l);
			},
			useTransition: function () {
				var t = nn(Gl)[0],
					l = St().memoizedState;
				return [typeof t == "boolean" ? t : Pa(t), l];
			},
			useSyncExternalStore: Gs,
			useId: vo,
			useHostTransitionStatus: uc,
			useFormState: Is,
			useActionState: Is,
			useOptimistic: function (t, l) {
				var e = St();
				return Ks(e, it, t, l);
			},
			useMemoCache: Wi,
			useCacheRefresh: yo,
		};
	ic.useEffectEvent = ao;
	var po = {
		readContext: Mt,
		use: un,
		useCallback: fo,
		useContext: Mt,
		useEffect: tc,
		useImperativeHandle: co,
		useInsertionEffect: uo,
		useLayoutEffect: no,
		useMemo: so,
		useReducer: $i,
		useRef: lo,
		useState: function () {
			return $i(Gl);
		},
		useDebugValue: lc,
		useDeferredValue: function (t, l) {
			var e = St();
			return it === null ? ec(e, t, l) : oo(e, it.memoizedState, t, l);
		},
		useTransition: function () {
			var t = $i(Gl)[0],
				l = St().memoizedState;
			return [typeof t == "boolean" ? t : Pa(t), l];
		},
		useSyncExternalStore: Gs,
		useId: vo,
		useHostTransitionStatus: uc,
		useFormState: to,
		useActionState: to,
		useOptimistic: function (t, l) {
			var e = St();
			return it !== null
				? Ks(e, it, t, l)
				: ((e.baseState = t), [t, e.queue.dispatch]);
		},
		useMemoCache: Wi,
		useCacheRefresh: yo,
	};
	po.useEffectEvent = ao;
	function cc(t, l, e, a) {
		((l = t.memoizedState),
			(e = e(a, l)),
			(e = e == null ? l : R({}, l, e)),
			(t.memoizedState = e),
			t.lanes === 0 && (t.updateQueue.baseState = e));
	}
	var fc = {
		enqueueSetState: function (t, l, e) {
			t = t._reactInternals;
			var a = il(),
				u = ne(a);
			((u.payload = l),
				e != null && (u.callback = e),
				(l = ie(t, u, a)),
				l !== null && (Wt(l, t, a), Wa(l, t, a)));
		},
		enqueueReplaceState: function (t, l, e) {
			t = t._reactInternals;
			var a = il(),
				u = ne(a);
			((u.tag = 1),
				(u.payload = l),
				e != null && (u.callback = e),
				(l = ie(t, u, a)),
				l !== null && (Wt(l, t, a), Wa(l, t, a)));
		},
		enqueueForceUpdate: function (t, l) {
			t = t._reactInternals;
			var e = il(),
				a = ne(e);
			((a.tag = 2),
				l != null && (a.callback = l),
				(l = ie(t, a, e)),
				l !== null && (Wt(l, t, e), Wa(l, t, e)));
		},
	};
	function zo(t, l, e, a, u, n, i) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == "function"
				? t.shouldComponentUpdate(a, n, i)
				: l.prototype && l.prototype.isPureReactComponent
					? !Qa(e, a) || !Qa(u, n)
					: !0
		);
	}
	function To(t, l, e, a) {
		((t = l.state),
			typeof l.componentWillReceiveProps == "function" &&
				l.componentWillReceiveProps(e, a),
			typeof l.UNSAFE_componentWillReceiveProps == "function" &&
				l.UNSAFE_componentWillReceiveProps(e, a),
			l.state !== t && fc.enqueueReplaceState(l, l.state, null));
	}
	function Ge(t, l) {
		var e = l;
		if ("ref" in l) {
			e = {};
			for (var a in l) a !== "ref" && (e[a] = l[a]);
		}
		if ((t = t.defaultProps)) {
			e === l && (e = R({}, e));
			for (var u in t) e[u] === void 0 && (e[u] = t[u]);
		}
		return e;
	}
	function Eo(t) {
		Xu(t);
	}
	function Ao(t) {
		console.error(t);
	}
	function No(t) {
		Xu(t);
	}
	function on(t, l) {
		try {
			var e = t.onUncaughtError;
			e(l.value, { componentStack: l.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function _o(t, l, e) {
		try {
			var a = t.onCaughtError;
			a(e.value, {
				componentStack: e.stack,
				errorBoundary: l.tag === 1 ? l.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function sc(t, l, e) {
		return (
			(e = ne(e)),
			(e.tag = 3),
			(e.payload = { element: null }),
			(e.callback = function () {
				on(t, l);
			}),
			e
		);
	}
	function jo(t) {
		return ((t = ne(t)), (t.tag = 3), t);
	}
	function Mo(t, l, e, a) {
		var u = e.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = a.value;
			((t.payload = function () {
				return u(n);
			}),
				(t.callback = function () {
					_o(l, e, a);
				}));
		}
		var i = e.stateNode;
		i !== null &&
			typeof i.componentDidCatch == "function" &&
			(t.callback = function () {
				(_o(l, e, a),
					typeof u != "function" &&
						(re === null ? (re = new Set([this])) : re.add(this)));
				var c = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: c !== null ? c : "",
				});
			});
	}
	function um(t, l, e, a, u) {
		if (
			((e.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((l = e.alternate),
				l !== null && ca(l, e, u, !0),
				(e = el.current),
				e !== null)
			) {
				switch (e.tag) {
					case 31:
					case 13:
						return (
							vl === null ? zn() : e.alternate === null && yt === 0 && (yt = 3),
							(e.flags &= -257),
							(e.flags |= 65536),
							(e.lanes = u),
							a === Fu
								? (e.flags |= 16384)
								: ((l = e.updateQueue),
									l === null ? (e.updateQueue = new Set([a])) : l.add(a),
									Rc(t, a, u)),
							!1
						);
					case 22:
						return (
							(e.flags |= 65536),
							a === Fu
								? (e.flags |= 16384)
								: ((l = e.updateQueue),
									l === null
										? ((l = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
											}),
											(e.updateQueue = l))
										: ((e = l.retryQueue),
											e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
									Rc(t, a, u)),
							!1
						);
				}
				throw Error(d(435, e.tag));
			}
			return (Rc(t, a, u), zn(), !1);
		}
		if (F)
			return (
				(l = el.current),
				l !== null
					? ((l.flags & 65536) === 0 && (l.flags |= 256),
						(l.flags |= 65536),
						(l.lanes = u),
						a !== ji && ((t = Error(d(422), { cause: a })), Va(dl(t, e))))
					: (a !== ji && ((l = Error(d(423), { cause: a })), Va(dl(l, e))),
						(t = t.current.alternate),
						(t.flags |= 65536),
						(u &= -u),
						(t.lanes |= u),
						(a = dl(a, e)),
						(u = sc(t.stateNode, a, u)),
						Gi(t, u),
						yt !== 4 && (yt = 2)),
				!1
			);
		var n = Error(d(520), { cause: a });
		if (
			((n = dl(n, e)),
			su === null ? (su = [n]) : su.push(n),
			yt !== 4 && (yt = 2),
			l === null)
		)
			return !0;
		((a = dl(a, e)), (e = l));
		do {
			switch (e.tag) {
				case 3:
					return (
						(e.flags |= 65536),
						(t = u & -u),
						(e.lanes |= t),
						(t = sc(e.stateNode, a, t)),
						Gi(e, t),
						!1
					);
				case 1:
					if (
						((l = e.type),
						(n = e.stateNode),
						(e.flags & 128) === 0 &&
							(typeof l.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(re === null || !re.has(n)))))
					)
						return (
							(e.flags |= 65536),
							(u &= -u),
							(e.lanes |= u),
							(u = jo(u)),
							Mo(u, t, e, a),
							Gi(e, u),
							!1
						);
			}
			e = e.return;
		} while (e !== null);
		return !1;
	}
	var oc = Error(d(461)),
		zt = !1;
	function Ot(t, l, e, a) {
		l.child = t === null ? Us(l, null, e, a) : qe(l, t.child, e, a);
	}
	function Oo(t, l, e, a, u) {
		e = e.render;
		var n = l.ref;
		if ("ref" in a) {
			var i = {};
			for (var c in a) c !== "ref" && (i[c] = a[c]);
		} else i = a;
		return (
			He(l),
			(a = Ki(t, l, e, i, n, u)),
			(c = wi()),
			t !== null && !zt
				? (Ji(t, l, u), Xl(t, l, u))
				: (F && c && Ni(l), (l.flags |= 1), Ot(t, l, a, u), l.child)
		);
	}
	function Do(t, l, e, a, u) {
		if (t === null) {
			var n = e.type;
			return typeof n == "function" &&
				!Ti(n) &&
				n.defaultProps === void 0 &&
				e.compare === null
				? ((l.tag = 15), (l.type = n), Uo(t, l, n, a, u))
				: ((t = Vu(e.type, null, a, l, l.mode, u)),
					(t.ref = l.ref),
					(t.return = l),
					(l.child = t));
		}
		if (((n = t.child), !bc(t, u))) {
			var i = n.memoizedProps;
			if (
				((e = e.compare), (e = e !== null ? e : Qa), e(i, a) && t.ref === l.ref)
			)
				return Xl(t, l, u);
		}
		return (
			(l.flags |= 1),
			(t = Rl(n, a)),
			(t.ref = l.ref),
			(t.return = l),
			(l.child = t)
		);
	}
	function Uo(t, l, e, a, u) {
		if (t !== null) {
			var n = t.memoizedProps;
			if (Qa(n, a) && t.ref === l.ref)
				if (((zt = !1), (l.pendingProps = a = n), bc(t, u)))
					(t.flags & 131072) !== 0 && (zt = !0);
				else return ((l.lanes = t.lanes), Xl(t, l, u));
		}
		return dc(t, l, e, a, u);
	}
	function Ho(t, l, e, a) {
		var u = a.children,
			n = t !== null ? t.memoizedState : null;
		if (
			(t === null &&
				l.stateNode === null &&
				(l.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			a.mode === "hidden")
		) {
			if ((l.flags & 128) !== 0) {
				if (((n = n !== null ? n.baseLanes | e : e), t !== null)) {
					for (a = l.child = t.child, u = 0; a !== null; )
						((u = u | a.lanes | a.childLanes), (a = a.sibling));
					a = u & ~n;
				} else ((a = 0), (l.child = null));
				return Ro(t, l, n, e, a);
			}
			if ((e & 536870912) !== 0)
				((l.memoizedState = { baseLanes: 0, cachePool: null }),
					t !== null && ku(l, n !== null ? n.cachePool : null),
					n !== null ? Cs(l, n) : Qi(),
					Bs(l));
			else
				return (
					(a = l.lanes = 536870912),
					Ro(t, l, n !== null ? n.baseLanes | e : e, e, a)
				);
		} else
			n !== null
				? (ku(l, n.cachePool), Cs(l, n), fe(), (l.memoizedState = null))
				: (t !== null && ku(l, null), Qi(), fe());
		return (Ot(t, l, u, e), l.child);
	}
	function eu(t, l) {
		return (
			(t !== null && t.tag === 22) ||
				l.stateNode !== null ||
				(l.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			l.sibling
		);
	}
	function Ro(t, l, e, a, u) {
		var n = Ci();
		return (
			(n = n === null ? null : { parent: xt._currentValue, pool: n }),
			(l.memoizedState = { baseLanes: e, cachePool: n }),
			t !== null && ku(l, null),
			Qi(),
			Bs(l),
			t !== null && ca(t, l, a, !0),
			(l.childLanes = u),
			null
		);
	}
	function dn(t, l) {
		return (
			(l = mn({ mode: l.mode, children: l.children }, t.mode)),
			(l.ref = t.ref),
			(t.child = l),
			(l.return = t),
			l
		);
	}
	function Co(t, l, e) {
		return (
			qe(l, t.child, null, e),
			(t = dn(l, l.pendingProps)),
			(t.flags |= 2),
			al(l),
			(l.memoizedState = null),
			t
		);
	}
	function nm(t, l, e) {
		var a = l.pendingProps,
			u = (l.flags & 128) !== 0;
		if (((l.flags &= -129), t === null)) {
			if (F) {
				if (a.mode === "hidden")
					return ((t = dn(l, a)), (l.lanes = 536870912), eu(null, t));
				if (
					(Zi(l),
					(t = rt)
						? ((t = J0(t, hl)),
							(t = t !== null && t.data === "&" ? t : null),
							t !== null &&
								((l.memoizedState = {
									dehydrated: t,
									treeContext: te !== null ? { id: Al, overflow: Nl } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(e = gs(t)),
								(e.return = l),
								(l.child = e),
								(jt = l),
								(rt = null)))
						: (t = null),
					t === null)
				)
					throw ee(l);
				return ((l.lanes = 536870912), null);
			}
			return dn(l, a);
		}
		var n = t.memoizedState;
		if (n !== null) {
			var i = n.dehydrated;
			if ((Zi(l), u))
				if (l.flags & 256) ((l.flags &= -257), (l = Co(t, l, e)));
				else if (l.memoizedState !== null)
					((l.child = t.child), (l.flags |= 128), (l = null));
				else throw Error(d(558));
			else if (
				(zt || ca(t, l, e, !1), (u = (e & t.childLanes) !== 0), zt || u)
			) {
				if (
					((a = ot),
					a !== null && ((i = Ef(a, e)), i !== 0 && i !== n.retryLane))
				)
					throw ((n.retryLane = i), Me(t, i), Wt(a, t, i), oc);
				(zn(), (l = Co(t, l, e)));
			} else
				((t = n.treeContext),
					(rt = yl(i.nextSibling)),
					(jt = l),
					(F = !0),
					(le = null),
					(hl = !1),
					t !== null && xs(l, t),
					(l = dn(l, a)),
					(l.flags |= 4096));
			return l;
		}
		return (
			(t = Rl(t.child, { mode: a.mode, children: a.children })),
			(t.ref = l.ref),
			(l.child = t),
			(t.return = l),
			t
		);
	}
	function rn(t, l) {
		var e = l.ref;
		if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
		else {
			if (typeof e != "function" && typeof e != "object") throw Error(d(284));
			(t === null || t.ref !== e) && (l.flags |= 4194816);
		}
	}
	function dc(t, l, e, a, u) {
		return (
			He(l),
			(e = Ki(t, l, e, a, void 0, u)),
			(a = wi()),
			t !== null && !zt
				? (Ji(t, l, u), Xl(t, l, u))
				: (F && a && Ni(l), (l.flags |= 1), Ot(t, l, e, u), l.child)
		);
	}
	function Bo(t, l, e, a, u, n) {
		return (
			He(l),
			(l.updateQueue = null),
			(e = Ys(l, a, e, u)),
			qs(t),
			(a = wi()),
			t !== null && !zt
				? (Ji(t, l, n), Xl(t, l, n))
				: (F && a && Ni(l), (l.flags |= 1), Ot(t, l, e, n), l.child)
		);
	}
	function qo(t, l, e, a, u) {
		if ((He(l), l.stateNode === null)) {
			var n = aa,
				i = e.contextType;
			(typeof i == "object" && i !== null && (n = Mt(i)),
				(n = new e(a, n)),
				(l.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = fc),
				(l.stateNode = n),
				(n._reactInternals = l),
				(n = l.stateNode),
				(n.props = a),
				(n.state = l.memoizedState),
				(n.refs = {}),
				qi(l),
				(i = e.contextType),
				(n.context = typeof i == "object" && i !== null ? Mt(i) : aa),
				(n.state = l.memoizedState),
				(i = e.getDerivedStateFromProps),
				typeof i == "function" && (cc(l, e, i, a), (n.state = l.memoizedState)),
				typeof e.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((i = n.state),
					typeof n.componentWillMount == "function" && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					i !== n.state && fc.enqueueReplaceState(n, n.state, null),
					$a(l, a, n, u),
					Fa(),
					(n.state = l.memoizedState)),
				typeof n.componentDidMount == "function" && (l.flags |= 4194308),
				(a = !0));
		} else if (t === null) {
			n = l.stateNode;
			var c = l.memoizedProps,
				f = Ge(e, c);
			n.props = f;
			var y = n.context,
				S = e.contextType;
			((i = aa), typeof S == "object" && S !== null && (i = Mt(S)));
			var z = e.getDerivedStateFromProps;
			((S =
				typeof z == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(c = l.pendingProps !== c),
				S ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c || y !== i) && To(l, n, a, i)),
				(ue = !1));
			var g = l.memoizedState;
			((n.state = g),
				$a(l, a, n, u),
				Fa(),
				(y = l.memoizedState),
				c || g !== y || ue
					? (typeof z == "function" && (cc(l, e, z, a), (y = l.memoizedState)),
						(f = ue || zo(l, e, f, a, g, y, i))
							? (S ||
									(typeof n.UNSAFE_componentWillMount != "function" &&
										typeof n.componentWillMount != "function") ||
									(typeof n.componentWillMount == "function" &&
										n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount == "function" &&
										n.UNSAFE_componentWillMount()),
								typeof n.componentDidMount == "function" &&
									(l.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(l.flags |= 4194308),
								(l.memoizedProps = a),
								(l.memoizedState = y)),
						(n.props = a),
						(n.state = y),
						(n.context = i),
						(a = f))
					: (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
						(a = !1)));
		} else {
			((n = l.stateNode),
				Yi(t, l),
				(i = l.memoizedProps),
				(S = Ge(e, i)),
				(n.props = S),
				(z = l.pendingProps),
				(g = n.context),
				(y = e.contextType),
				(f = aa),
				typeof y == "object" && y !== null && (f = Mt(y)),
				(c = e.getDerivedStateFromProps),
				(y =
					typeof c == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((i !== z || g !== f) && To(l, n, a, f)),
				(ue = !1),
				(g = l.memoizedState),
				(n.state = g),
				$a(l, a, n, u),
				Fa());
			var b = l.memoizedState;
			i !== z ||
			g !== b ||
			ue ||
			(t !== null && t.dependencies !== null && wu(t.dependencies))
				? (typeof c == "function" && (cc(l, e, c, a), (b = l.memoizedState)),
					(S =
						ue ||
						zo(l, e, S, a, g, b, f) ||
						(t !== null && t.dependencies !== null && wu(t.dependencies)))
						? (y ||
								(typeof n.UNSAFE_componentWillUpdate != "function" &&
									typeof n.componentWillUpdate != "function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(a, b, f),
								typeof n.UNSAFE_componentWillUpdate == "function" &&
									n.UNSAFE_componentWillUpdate(a, b, f)),
							typeof n.componentDidUpdate == "function" && (l.flags |= 4),
							typeof n.getSnapshotBeforeUpdate == "function" &&
								(l.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(i === t.memoizedProps && g === t.memoizedState) ||
								(l.flags |= 4),
							typeof n.getSnapshotBeforeUpdate != "function" ||
								(i === t.memoizedProps && g === t.memoizedState) ||
								(l.flags |= 1024),
							(l.memoizedProps = a),
							(l.memoizedState = b)),
					(n.props = a),
					(n.state = b),
					(n.context = f),
					(a = S))
				: (typeof n.componentDidUpdate != "function" ||
						(i === t.memoizedProps && g === t.memoizedState) ||
						(l.flags |= 4),
					typeof n.getSnapshotBeforeUpdate != "function" ||
						(i === t.memoizedProps && g === t.memoizedState) ||
						(l.flags |= 1024),
					(a = !1));
		}
		return (
			(n = a),
			rn(t, l),
			(a = (l.flags & 128) !== 0),
			n || a
				? ((n = l.stateNode),
					(e =
						a && typeof e.getDerivedStateFromError != "function"
							? null
							: n.render()),
					(l.flags |= 1),
					t !== null && a
						? ((l.child = qe(l, t.child, null, u)),
							(l.child = qe(l, null, e, u)))
						: Ot(t, l, e, u),
					(l.memoizedState = n.state),
					(t = l.child))
				: (t = Xl(t, l, u)),
			t
		);
	}
	function Yo(t, l, e, a) {
		return (De(), (l.flags |= 256), Ot(t, l, e, a), l.child);
	}
	var rc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function mc(t) {
		return { baseLanes: t, cachePool: Ns() };
	}
	function hc(t, l, e) {
		return ((t = t !== null ? t.childLanes & ~e : 0), l && (t |= nl), t);
	}
	function Go(t, l, e) {
		var a = l.pendingProps,
			u = !1,
			n = (l.flags & 128) !== 0,
			i;
		if (
			((i = n) ||
				(i =
					t !== null && t.memoizedState === null ? !1 : (bt.current & 2) !== 0),
			i && ((u = !0), (l.flags &= -129)),
			(i = (l.flags & 32) !== 0),
			(l.flags &= -33),
			t === null)
		) {
			if (F) {
				if (
					(u ? ce(l) : fe(),
					(t = rt)
						? ((t = J0(t, hl)),
							(t = t !== null && t.data !== "&" ? t : null),
							t !== null &&
								((l.memoizedState = {
									dehydrated: t,
									treeContext: te !== null ? { id: Al, overflow: Nl } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(e = gs(t)),
								(e.return = l),
								(l.child = e),
								(jt = l),
								(rt = null)))
						: (t = null),
					t === null)
				)
					throw ee(l);
				return (Fc(t) ? (l.lanes = 32) : (l.lanes = 536870912), null);
			}
			var c = a.children;
			return (
				(a = a.fallback),
				u
					? (fe(),
						(u = l.mode),
						(c = mn({ mode: "hidden", children: c }, u)),
						(a = Oe(a, u, e, null)),
						(c.return = l),
						(a.return = l),
						(c.sibling = a),
						(l.child = c),
						(a = l.child),
						(a.memoizedState = mc(e)),
						(a.childLanes = hc(t, i, e)),
						(l.memoizedState = rc),
						eu(null, a))
					: (ce(l), vc(l, c))
			);
		}
		var f = t.memoizedState;
		if (f !== null && ((c = f.dehydrated), c !== null)) {
			if (n)
				l.flags & 256
					? (ce(l), (l.flags &= -257), (l = yc(t, l, e)))
					: l.memoizedState !== null
						? (fe(), (l.child = t.child), (l.flags |= 128), (l = null))
						: (fe(),
							(c = a.fallback),
							(u = l.mode),
							(a = mn({ mode: "visible", children: a.children }, u)),
							(c = Oe(c, u, e, null)),
							(c.flags |= 2),
							(a.return = l),
							(c.return = l),
							(a.sibling = c),
							(l.child = a),
							qe(l, t.child, null, e),
							(a = l.child),
							(a.memoizedState = mc(e)),
							(a.childLanes = hc(t, i, e)),
							(l.memoizedState = rc),
							(l = eu(null, a)));
			else if ((ce(l), Fc(c))) {
				if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
				((i = y),
					(a = Error(d(419))),
					(a.stack = ""),
					(a.digest = i),
					Va({ value: a, source: null, stack: null }),
					(l = yc(t, l, e)));
			} else if (
				(zt || ca(t, l, e, !1), (i = (e & t.childLanes) !== 0), zt || i)
			) {
				if (
					((i = ot),
					i !== null && ((a = Ef(i, e)), a !== 0 && a !== f.retryLane))
				)
					throw ((f.retryLane = a), Me(t, a), Wt(i, t, a), oc);
				(Wc(c) || zn(), (l = yc(t, l, e)));
			} else
				Wc(c)
					? ((l.flags |= 192), (l.child = t.child), (l = null))
					: ((t = f.treeContext),
						(rt = yl(c.nextSibling)),
						(jt = l),
						(F = !0),
						(le = null),
						(hl = !1),
						t !== null && xs(l, t),
						(l = vc(l, a.children)),
						(l.flags |= 4096));
			return l;
		}
		return u
			? (fe(),
				(c = a.fallback),
				(u = l.mode),
				(f = t.child),
				(y = f.sibling),
				(a = Rl(f, { mode: "hidden", children: a.children })),
				(a.subtreeFlags = f.subtreeFlags & 65011712),
				y !== null ? (c = Rl(y, c)) : ((c = Oe(c, u, e, null)), (c.flags |= 2)),
				(c.return = l),
				(a.return = l),
				(a.sibling = c),
				(l.child = a),
				eu(null, a),
				(a = l.child),
				(c = t.child.memoizedState),
				c === null
					? (c = mc(e))
					: ((u = c.cachePool),
						u !== null
							? ((f = xt._currentValue),
								(u = u.parent !== f ? { parent: f, pool: f } : u))
							: (u = Ns()),
						(c = { baseLanes: c.baseLanes | e, cachePool: u })),
				(a.memoizedState = c),
				(a.childLanes = hc(t, i, e)),
				(l.memoizedState = rc),
				eu(t.child, a))
			: (ce(l),
				(e = t.child),
				(t = e.sibling),
				(e = Rl(e, { mode: "visible", children: a.children })),
				(e.return = l),
				(e.sibling = null),
				t !== null &&
					((i = l.deletions),
					i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
				(l.child = e),
				(l.memoizedState = null),
				e);
	}
	function vc(t, l) {
		return (
			(l = mn({ mode: "visible", children: l }, t.mode)),
			(l.return = t),
			(t.child = l)
		);
	}
	function mn(t, l) {
		return ((t = ll(22, t, null, l)), (t.lanes = 0), t);
	}
	function yc(t, l, e) {
		return (
			qe(l, t.child, null, e),
			(t = vc(l, l.pendingProps.children)),
			(t.flags |= 2),
			(l.memoizedState = null),
			t
		);
	}
	function Xo(t, l, e) {
		t.lanes |= l;
		var a = t.alternate;
		(a !== null && (a.lanes |= l), Di(t.return, l, e));
	}
	function gc(t, l, e, a, u, n) {
		var i = t.memoizedState;
		i === null
			? (t.memoizedState = {
					isBackwards: l,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: e,
					tailMode: u,
					treeForkCount: n,
				})
			: ((i.isBackwards = l),
				(i.rendering = null),
				(i.renderingStartTime = 0),
				(i.last = a),
				(i.tail = e),
				(i.tailMode = u),
				(i.treeForkCount = n));
	}
	function Qo(t, l, e) {
		var a = l.pendingProps,
			u = a.revealOrder,
			n = a.tail;
		a = a.children;
		var i = bt.current,
			c = (i & 2) !== 0;
		if (
			(c ? ((i = (i & 1) | 2), (l.flags |= 128)) : (i &= 1),
			j(bt, i),
			Ot(t, l, a, e),
			(a = F ? Za : 0),
			!c && t !== null && (t.flags & 128) !== 0)
		)
			t: for (t = l.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Xo(t, e, l);
				else if (t.tag === 19) Xo(t, e, l);
				else if (t.child !== null) {
					((t.child.return = t), (t = t.child));
					continue;
				}
				if (t === l) break t;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === l) break t;
					t = t.return;
				}
				((t.sibling.return = t.return), (t = t.sibling));
			}
		switch (u) {
			case "forwards":
				for (e = l.child, u = null; e !== null; )
					((t = e.alternate),
						t !== null && tn(t) === null && (u = e),
						(e = e.sibling));
				((e = u),
					e === null
						? ((u = l.child), (l.child = null))
						: ((u = e.sibling), (e.sibling = null)),
					gc(l, !1, u, e, n, a));
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (e = null, u = l.child, l.child = null; u !== null; ) {
					if (((t = u.alternate), t !== null && tn(t) === null)) {
						l.child = u;
						break;
					}
					((t = u.sibling), (u.sibling = e), (e = u), (u = t));
				}
				gc(l, !0, e, null, n, a);
				break;
			case "together":
				gc(l, !1, null, null, void 0, a);
				break;
			default:
				l.memoizedState = null;
		}
		return l.child;
	}
	function Xl(t, l, e) {
		if (
			(t !== null && (l.dependencies = t.dependencies),
			(de |= l.lanes),
			(e & l.childLanes) === 0)
		)
			if (t !== null) {
				if ((ca(t, l, e, !1), (e & l.childLanes) === 0)) return null;
			} else return null;
		if (t !== null && l.child !== t.child) throw Error(d(153));
		if (l.child !== null) {
			for (
				t = l.child, e = Rl(t, t.pendingProps), l.child = e, e.return = l;
				t.sibling !== null;
			)
				((t = t.sibling),
					(e = e.sibling = Rl(t, t.pendingProps)),
					(e.return = l));
			e.sibling = null;
		}
		return l.child;
	}
	function bc(t, l) {
		return (t.lanes & l) !== 0
			? !0
			: ((t = t.dependencies), !!(t !== null && wu(t)));
	}
	function im(t, l, e) {
		switch (l.tag) {
			case 3:
				(Yt(l, l.stateNode.containerInfo),
					ae(l, xt, t.memoizedState.cache),
					De());
				break;
			case 27:
			case 5:
				ja(l);
				break;
			case 4:
				Yt(l, l.stateNode.containerInfo);
				break;
			case 10:
				ae(l, l.type, l.memoizedProps.value);
				break;
			case 31:
				if (l.memoizedState !== null) return ((l.flags |= 128), Zi(l), null);
				break;
			case 13:
				var a = l.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (ce(l), (l.flags |= 128), null)
						: (e & l.child.childLanes) !== 0
							? Go(t, l, e)
							: (ce(l), (t = Xl(t, l, e)), t !== null ? t.sibling : null);
				ce(l);
				break;
			case 19:
				var u = (t.flags & 128) !== 0;
				if (
					((a = (e & l.childLanes) !== 0),
					a || (ca(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
					u)
				) {
					if (a) return Qo(t, l, e);
					l.flags |= 128;
				}
				if (
					((u = l.memoizedState),
					u !== null &&
						((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
					j(bt, bt.current),
					a)
				)
					break;
				return null;
			case 22:
				return ((l.lanes = 0), Ho(t, l, e, l.pendingProps));
			case 24:
				ae(l, xt, t.memoizedState.cache);
		}
		return Xl(t, l, e);
	}
	function Lo(t, l, e) {
		if (t !== null)
			if (t.memoizedProps !== l.pendingProps) zt = !0;
			else {
				if (!bc(t, e) && (l.flags & 128) === 0) return ((zt = !1), im(t, l, e));
				zt = (t.flags & 131072) !== 0;
			}
		else ((zt = !1), F && (l.flags & 1048576) !== 0 && Ss(l, Za, l.index));
		switch (((l.lanes = 0), l.tag)) {
			case 16:
				t: {
					var a = l.pendingProps;
					if (((t = Ce(l.elementType)), (l.type = t), typeof t == "function"))
						Ti(t)
							? ((a = Ge(t, a)), (l.tag = 1), (l = qo(null, l, t, a, e)))
							: ((l.tag = 0), (l = dc(null, l, t, a, e)));
					else {
						if (t != null) {
							var u = t.$$typeof;
							if (u === cl) {
								((l.tag = 11), (l = Oo(null, l, t, a, e)));
								break t;
							} else if (u === W) {
								((l.tag = 14), (l = Do(null, l, t, a, e)));
								break t;
							}
						}
						throw ((l = Ol(t) || t), Error(d(306, l, "")));
					}
				}
				return l;
			case 0:
				return dc(t, l, l.type, l.pendingProps, e);
			case 1:
				return ((a = l.type), (u = Ge(a, l.pendingProps)), qo(t, l, a, u, e));
			case 3:
				t: {
					if ((Yt(l, l.stateNode.containerInfo), t === null))
						throw Error(d(387));
					a = l.pendingProps;
					var n = l.memoizedState;
					((u = n.element), Yi(t, l), $a(l, a, null, e));
					var i = l.memoizedState;
					if (
						((a = i.cache),
						ae(l, xt, a),
						a !== n.cache && Ui(l, [xt], e, !0),
						Fa(),
						(a = i.element),
						n.isDehydrated)
					)
						if (
							((n = { element: a, isDehydrated: !1, cache: i.cache }),
							(l.updateQueue.baseState = n),
							(l.memoizedState = n),
							l.flags & 256)
						) {
							l = Yo(t, l, a, e);
							break t;
						} else if (a !== u) {
							((u = dl(Error(d(424)), l)), Va(u), (l = Yo(t, l, a, e)));
							break t;
						} else {
							switch (((t = l.stateNode.containerInfo), t.nodeType)) {
								case 9:
									t = t.body;
									break;
								default:
									t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
							}
							for (
								rt = yl(t.firstChild),
									jt = l,
									F = !0,
									le = null,
									hl = !0,
									e = Us(l, null, a, e),
									l.child = e;
								e;
							)
								((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
						}
					else {
						if ((De(), a === u)) {
							l = Xl(t, l, e);
							break t;
						}
						Ot(t, l, a, e);
					}
					l = l.child;
				}
				return l;
			case 26:
				return (
					rn(t, l),
					t === null
						? (e = P0(l.type, null, l.pendingProps, null))
							? (l.memoizedState = e)
							: F ||
								((e = l.type),
								(t = l.pendingProps),
								(a = Mn(V.current).createElement(e)),
								(a[_t] = l),
								(a[Zt] = t),
								Dt(a, e, t),
								At(a),
								(l.stateNode = a))
						: (l.memoizedState = P0(
								l.type,
								t.memoizedProps,
								l.pendingProps,
								t.memoizedState,
							)),
					null
				);
			case 27:
				return (
					ja(l),
					t === null &&
						F &&
						((a = l.stateNode = F0(l.type, l.pendingProps, V.current)),
						(jt = l),
						(hl = !0),
						(u = rt),
						ye(l.type) ? (($c = u), (rt = yl(a.firstChild))) : (rt = u)),
					Ot(t, l, l.pendingProps.children, e),
					rn(t, l),
					t === null && (l.flags |= 4194304),
					l.child
				);
			case 5:
				return (
					t === null &&
						F &&
						((u = a = rt) &&
							((a = Bm(a, l.type, l.pendingProps, hl)),
							a !== null
								? ((l.stateNode = a),
									(jt = l),
									(rt = yl(a.firstChild)),
									(hl = !1),
									(u = !0))
								: (u = !1)),
						u || ee(l)),
					ja(l),
					(u = l.type),
					(n = l.pendingProps),
					(i = t !== null ? t.memoizedProps : null),
					(a = n.children),
					wc(u, n) ? (a = null) : i !== null && wc(u, i) && (l.flags |= 32),
					l.memoizedState !== null &&
						((u = Ki(t, l, $r, null, null, e)), (gu._currentValue = u)),
					rn(t, l),
					Ot(t, l, a, e),
					l.child
				);
			case 6:
				return (
					t === null &&
						F &&
						((t = e = rt) &&
							((e = qm(e, l.pendingProps, hl)),
							e !== null
								? ((l.stateNode = e), (jt = l), (rt = null), (t = !0))
								: (t = !1)),
						t || ee(l)),
					null
				);
			case 13:
				return Go(t, l, e);
			case 4:
				return (
					Yt(l, l.stateNode.containerInfo),
					(a = l.pendingProps),
					t === null ? (l.child = qe(l, null, a, e)) : Ot(t, l, a, e),
					l.child
				);
			case 11:
				return Oo(t, l, l.type, l.pendingProps, e);
			case 7:
				return (Ot(t, l, l.pendingProps, e), l.child);
			case 8:
				return (Ot(t, l, l.pendingProps.children, e), l.child);
			case 12:
				return (Ot(t, l, l.pendingProps.children, e), l.child);
			case 10:
				return (
					(a = l.pendingProps),
					ae(l, l.type, a.value),
					Ot(t, l, a.children, e),
					l.child
				);
			case 9:
				return (
					(u = l.type._context),
					(a = l.pendingProps.children),
					He(l),
					(u = Mt(u)),
					(a = a(u)),
					(l.flags |= 1),
					Ot(t, l, a, e),
					l.child
				);
			case 14:
				return Do(t, l, l.type, l.pendingProps, e);
			case 15:
				return Uo(t, l, l.type, l.pendingProps, e);
			case 19:
				return Qo(t, l, e);
			case 31:
				return nm(t, l, e);
			case 22:
				return Ho(t, l, e, l.pendingProps);
			case 24:
				return (
					He(l),
					(a = Mt(xt)),
					t === null
						? ((u = Ci()),
							u === null &&
								((u = ot),
								(n = Hi()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= e),
								(u = n)),
							(l.memoizedState = { parent: a, cache: u }),
							qi(l),
							ae(l, xt, u))
						: ((t.lanes & e) !== 0 && (Yi(t, l), $a(l, null, null, e), Fa()),
							(u = t.memoizedState),
							(n = l.memoizedState),
							u.parent !== a
								? ((u = { parent: a, cache: a }),
									(l.memoizedState = u),
									l.lanes === 0 &&
										(l.memoizedState = l.updateQueue.baseState = u),
									ae(l, xt, a))
								: ((a = n.cache),
									ae(l, xt, a),
									a !== u.cache && Ui(l, [xt], e, !0))),
					Ot(t, l, l.pendingProps.children, e),
					l.child
				);
			case 29:
				throw l.pendingProps;
		}
		throw Error(d(156, l.tag));
	}
	function Ql(t) {
		t.flags |= 4;
	}
	function Sc(t, l, e, a, u) {
		if (((l = (t.mode & 32) !== 0) && (l = !1), l)) {
			if (((t.flags |= 16777216), (u & 335544128) === u))
				if (t.stateNode.complete) t.flags |= 8192;
				else if (v0()) t.flags |= 8192;
				else throw ((Be = Fu), Bi);
		} else t.flags &= -16777217;
	}
	function Zo(t, l) {
		if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
			t.flags &= -16777217;
		else if (((t.flags |= 16777216), !ud(l)))
			if (v0()) t.flags |= 8192;
			else throw ((Be = Fu), Bi);
	}
	function hn(t, l) {
		(l !== null && (t.flags |= 4),
			t.flags & 16384 &&
				((l = t.tag !== 22 ? pf() : 536870912), (t.lanes |= l), (Sa |= l)));
	}
	function au(t, l) {
		if (!F)
			switch (t.tailMode) {
				case "hidden":
					l = t.tail;
					for (var e = null; l !== null; )
						(l.alternate !== null && (e = l), (l = l.sibling));
					e === null ? (t.tail = null) : (e.sibling = null);
					break;
				case "collapsed":
					e = t.tail;
					for (var a = null; e !== null; )
						(e.alternate !== null && (a = e), (e = e.sibling));
					a === null
						? l || t.tail === null
							? (t.tail = null)
							: (t.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function mt(t) {
		var l = t.alternate !== null && t.alternate.child === t.child,
			e = 0,
			a = 0;
		if (l)
			for (var u = t.child; u !== null; )
				((e |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags & 65011712),
					(a |= u.flags & 65011712),
					(u.return = t),
					(u = u.sibling));
		else
			for (u = t.child; u !== null; )
				((e |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags),
					(a |= u.flags),
					(u.return = t),
					(u = u.sibling));
		return ((t.subtreeFlags |= a), (t.childLanes = e), l);
	}
	function cm(t, l, e) {
		var a = l.pendingProps;
		switch ((_i(l), l.tag)) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return (mt(l), null);
			case 1:
				return (mt(l), null);
			case 3:
				return (
					(e = l.stateNode),
					(a = null),
					t !== null && (a = t.memoizedState.cache),
					l.memoizedState.cache !== a && (l.flags |= 2048),
					ql(xt),
					gt(),
					e.pendingContext &&
						((e.context = e.pendingContext), (e.pendingContext = null)),
					(t === null || t.child === null) &&
						(ia(l)
							? Ql(l)
							: t === null ||
								(t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
								((l.flags |= 1024), Mi())),
					mt(l),
					null
				);
			case 26:
				var u = l.type,
					n = l.memoizedState;
				return (
					t === null
						? (Ql(l),
							n !== null ? (mt(l), Zo(l, n)) : (mt(l), Sc(l, u, null, a, e)))
						: n
							? n !== t.memoizedState
								? (Ql(l), mt(l), Zo(l, n))
								: (mt(l), (l.flags &= -16777217))
							: ((t = t.memoizedProps),
								t !== a && Ql(l),
								mt(l),
								Sc(l, u, t, a, e)),
					null
				);
			case 27:
				if (
					(Eu(l),
					(e = V.current),
					(u = l.type),
					t !== null && l.stateNode != null)
				)
					t.memoizedProps !== a && Ql(l);
				else {
					if (!a) {
						if (l.stateNode === null) throw Error(d(166));
						return (mt(l), null);
					}
					((t = U.current),
						ia(l) ? ps(l) : ((t = F0(u, a, e)), (l.stateNode = t), Ql(l)));
				}
				return (mt(l), null);
			case 5:
				if ((Eu(l), (u = l.type), t !== null && l.stateNode != null))
					t.memoizedProps !== a && Ql(l);
				else {
					if (!a) {
						if (l.stateNode === null) throw Error(d(166));
						return (mt(l), null);
					}
					if (((n = U.current), ia(l))) ps(l);
					else {
						var i = Mn(V.current);
						switch (n) {
							case 1:
								n = i.createElementNS("http://www.w3.org/2000/svg", u);
								break;
							case 2:
								n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
								break;
							default:
								switch (u) {
									case "svg":
										n = i.createElementNS("http://www.w3.org/2000/svg", u);
										break;
									case "math":
										n = i.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											u,
										);
										break;
									case "script":
										((n = i.createElement("div")),
											(n.innerHTML = "<script><\/script>"),
											(n = n.removeChild(n.firstChild)));
										break;
									case "select":
										((n =
											typeof a.is == "string"
												? i.createElement("select", { is: a.is })
												: i.createElement("select")),
											a.multiple
												? (n.multiple = !0)
												: a.size && (n.size = a.size));
										break;
									default:
										n =
											typeof a.is == "string"
												? i.createElement(u, { is: a.is })
												: i.createElement(u);
								}
						}
						((n[_t] = l), (n[Zt] = a));
						t: for (i = l.child; i !== null; ) {
							if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
							else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
								((i.child.return = i), (i = i.child));
								continue;
							}
							if (i === l) break t;
							for (; i.sibling === null; ) {
								if (i.return === null || i.return === l) break t;
								i = i.return;
							}
							((i.sibling.return = i.return), (i = i.sibling));
						}
						l.stateNode = n;
						t: switch ((Dt(n, u, a), u)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								a = !!a.autoFocus;
								break t;
							case "img":
								a = !0;
								break t;
							default:
								a = !1;
						}
						a && Ql(l);
					}
				}
				return (
					mt(l),
					Sc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e),
					null
				);
			case 6:
				if (t && l.stateNode != null) t.memoizedProps !== a && Ql(l);
				else {
					if (typeof a != "string" && l.stateNode === null) throw Error(d(166));
					if (((t = V.current), ia(l))) {
						if (
							((t = l.stateNode),
							(e = l.memoizedProps),
							(a = null),
							(u = jt),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									a = u.memoizedProps;
							}
						((t[_t] = l),
							(t = !!(
								t.nodeValue === e ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								G0(t.nodeValue, e)
							)),
							t || ee(l, !0));
					} else
						((t = Mn(t).createTextNode(a)), (t[_t] = l), (l.stateNode = t));
				}
				return (mt(l), null);
			case 31:
				if (((e = l.memoizedState), t === null || t.memoizedState !== null)) {
					if (((a = ia(l)), e !== null)) {
						if (t === null) {
							if (!a) throw Error(d(318));
							if (
								((t = l.memoizedState),
								(t = t !== null ? t.dehydrated : null),
								!t)
							)
								throw Error(d(557));
							t[_t] = l;
						} else
							(De(),
								(l.flags & 128) === 0 && (l.memoizedState = null),
								(l.flags |= 4));
						(mt(l), (t = !1));
					} else
						((e = Mi()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = e),
							(t = !0));
					if (!t) return l.flags & 256 ? (al(l), l) : (al(l), null);
					if ((l.flags & 128) !== 0) throw Error(d(558));
				}
				return (mt(l), null);
			case 13:
				if (
					((a = l.memoizedState),
					t === null ||
						(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (((u = ia(l)), a !== null && a.dehydrated !== null)) {
						if (t === null) {
							if (!u) throw Error(d(318));
							if (
								((u = l.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(d(317));
							u[_t] = l;
						} else
							(De(),
								(l.flags & 128) === 0 && (l.memoizedState = null),
								(l.flags |= 4));
						(mt(l), (u = !1));
					} else
						((u = Mi()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = u),
							(u = !0));
					if (!u) return l.flags & 256 ? (al(l), l) : (al(l), null);
				}
				return (
					al(l),
					(l.flags & 128) !== 0
						? ((l.lanes = e), l)
						: ((e = a !== null),
							(t = t !== null && t.memoizedState !== null),
							e &&
								((a = l.child),
								(u = null),
								a.alternate !== null &&
									a.alternate.memoizedState !== null &&
									a.alternate.memoizedState.cachePool !== null &&
									(u = a.alternate.memoizedState.cachePool.pool),
								(n = null),
								a.memoizedState !== null &&
									a.memoizedState.cachePool !== null &&
									(n = a.memoizedState.cachePool.pool),
								n !== u && (a.flags |= 2048)),
							e !== t && e && (l.child.flags |= 8192),
							hn(l, l.updateQueue),
							mt(l),
							null)
				);
			case 4:
				return (gt(), t === null && Qc(l.stateNode.containerInfo), mt(l), null);
			case 10:
				return (ql(l.type), mt(l), null);
			case 19:
				if ((T(bt), (a = l.memoizedState), a === null)) return (mt(l), null);
				if (((u = (l.flags & 128) !== 0), (n = a.rendering), n === null))
					if (u) au(a, !1);
					else {
						if (yt !== 0 || (t !== null && (t.flags & 128) !== 0))
							for (t = l.child; t !== null; ) {
								if (((n = tn(t)), n !== null)) {
									for (
										l.flags |= 128,
											au(a, !1),
											t = n.updateQueue,
											l.updateQueue = t,
											hn(l, t),
											l.subtreeFlags = 0,
											t = e,
											e = l.child;
										e !== null;
									)
										(ys(e, t), (e = e.sibling));
									return (
										j(bt, (bt.current & 1) | 2),
										F && Cl(l, a.treeForkCount),
										l.child
									);
								}
								t = t.sibling;
							}
						a.tail !== null &&
							$t() > Sn &&
							((l.flags |= 128), (u = !0), au(a, !1), (l.lanes = 4194304));
					}
				else {
					if (!u)
						if (((t = tn(n)), t !== null)) {
							if (
								((l.flags |= 128),
								(u = !0),
								(t = t.updateQueue),
								(l.updateQueue = t),
								hn(l, t),
								au(a, !0),
								a.tail === null &&
									a.tailMode === "hidden" &&
									!n.alternate &&
									!F)
							)
								return (mt(l), null);
						} else
							2 * $t() - a.renderingStartTime > Sn &&
								e !== 536870912 &&
								((l.flags |= 128), (u = !0), au(a, !1), (l.lanes = 4194304));
					a.isBackwards
						? ((n.sibling = l.child), (l.child = n))
						: ((t = a.last),
							t !== null ? (t.sibling = n) : (l.child = n),
							(a.last = n));
				}
				return a.tail !== null
					? ((t = a.tail),
						(a.rendering = t),
						(a.tail = t.sibling),
						(a.renderingStartTime = $t()),
						(t.sibling = null),
						(e = bt.current),
						j(bt, u ? (e & 1) | 2 : e & 1),
						F && Cl(l, a.treeForkCount),
						t)
					: (mt(l), null);
			case 22:
			case 23:
				return (
					al(l),
					Li(),
					(a = l.memoizedState !== null),
					t !== null
						? (t.memoizedState !== null) !== a && (l.flags |= 8192)
						: a && (l.flags |= 8192),
					a
						? (e & 536870912) !== 0 &&
							(l.flags & 128) === 0 &&
							(mt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
						: mt(l),
					(e = l.updateQueue),
					e !== null && hn(l, e.retryQueue),
					(e = null),
					t !== null &&
						t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(e = t.memoizedState.cachePool.pool),
					(a = null),
					l.memoizedState !== null &&
						l.memoizedState.cachePool !== null &&
						(a = l.memoizedState.cachePool.pool),
					a !== e && (l.flags |= 2048),
					t !== null && T(Re),
					null
				);
			case 24:
				return (
					(e = null),
					t !== null && (e = t.memoizedState.cache),
					l.memoizedState.cache !== e && (l.flags |= 2048),
					ql(xt),
					mt(l),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(d(156, l.tag));
	}
	function fm(t, l) {
		switch ((_i(l), l.tag)) {
			case 1:
				return (
					(t = l.flags),
					t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
				);
			case 3:
				return (
					ql(xt),
					gt(),
					(t = l.flags),
					(t & 65536) !== 0 && (t & 128) === 0
						? ((l.flags = (t & -65537) | 128), l)
						: null
				);
			case 26:
			case 27:
			case 5:
				return (Eu(l), null);
			case 31:
				if (l.memoizedState !== null) {
					if ((al(l), l.alternate === null)) throw Error(d(340));
					De();
				}
				return (
					(t = l.flags),
					t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
				);
			case 13:
				if (
					(al(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
				) {
					if (l.alternate === null) throw Error(d(340));
					De();
				}
				return (
					(t = l.flags),
					t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
				);
			case 19:
				return (T(bt), null);
			case 4:
				return (gt(), null);
			case 10:
				return (ql(l.type), null);
			case 22:
			case 23:
				return (
					al(l),
					Li(),
					t !== null && T(Re),
					(t = l.flags),
					t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
				);
			case 24:
				return (ql(xt), null);
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Vo(t, l) {
		switch ((_i(l), l.tag)) {
			case 3:
				(ql(xt), gt());
				break;
			case 26:
			case 27:
			case 5:
				Eu(l);
				break;
			case 4:
				gt();
				break;
			case 31:
				l.memoizedState !== null && al(l);
				break;
			case 13:
				al(l);
				break;
			case 19:
				T(bt);
				break;
			case 10:
				ql(l.type);
				break;
			case 22:
			case 23:
				(al(l), Li(), t !== null && T(Re));
				break;
			case 24:
				ql(xt);
		}
	}
	function uu(t, l) {
		try {
			var e = l.updateQueue,
				a = e !== null ? e.lastEffect : null;
			if (a !== null) {
				var u = a.next;
				e = u;
				do {
					if ((e.tag & t) === t) {
						a = void 0;
						var n = e.create,
							i = e.inst;
						((a = n()), (i.destroy = a));
					}
					e = e.next;
				} while (e !== u);
			}
		} catch (c) {
			at(l, l.return, c);
		}
	}
	function se(t, l, e) {
		try {
			var a = l.updateQueue,
				u = a !== null ? a.lastEffect : null;
			if (u !== null) {
				var n = u.next;
				a = n;
				do {
					if ((a.tag & t) === t) {
						var i = a.inst,
							c = i.destroy;
						if (c !== void 0) {
							((i.destroy = void 0), (u = l));
							var f = e,
								y = c;
							try {
								y();
							} catch (S) {
								at(u, f, S);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (S) {
			at(l, l.return, S);
		}
	}
	function Ko(t) {
		var l = t.updateQueue;
		if (l !== null) {
			var e = t.stateNode;
			try {
				Rs(l, e);
			} catch (a) {
				at(t, t.return, a);
			}
		}
	}
	function wo(t, l, e) {
		((e.props = Ge(t.type, t.memoizedProps)), (e.state = t.memoizedState));
		try {
			e.componentWillUnmount();
		} catch (a) {
			at(t, l, a);
		}
	}
	function nu(t, l) {
		try {
			var e = t.ref;
			if (e !== null) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5:
						var a = t.stateNode;
						break;
					case 30:
						a = t.stateNode;
						break;
					default:
						a = t.stateNode;
				}
				typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
			}
		} catch (u) {
			at(t, l, u);
		}
	}
	function _l(t, l) {
		var e = t.ref,
			a = t.refCleanup;
		if (e !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (u) {
					at(t, l, u);
				} finally {
					((t.refCleanup = null),
						(t = t.alternate),
						t != null && (t.refCleanup = null));
				}
			else if (typeof e == "function")
				try {
					e(null);
				} catch (u) {
					at(t, l, u);
				}
			else e.current = null;
	}
	function Jo(t) {
		var l = t.type,
			e = t.memoizedProps,
			a = t.stateNode;
		try {
			t: switch (l) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					e.autoFocus && a.focus();
					break t;
				case "img":
					e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
			}
		} catch (u) {
			at(t, t.return, u);
		}
	}
	function xc(t, l, e) {
		try {
			var a = t.stateNode;
			(Om(a, t.type, e, l), (a[Zt] = l));
		} catch (u) {
			at(t, t.return, u);
		}
	}
	function ko(t) {
		return (
			t.tag === 5 ||
			t.tag === 3 ||
			t.tag === 26 ||
			(t.tag === 27 && ye(t.type)) ||
			t.tag === 4
		);
	}
	function pc(t) {
		t: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || ko(t.return)) return null;
				t = t.return;
			}
			for (
				t.sibling.return = t.return, t = t.sibling;
				t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
			) {
				if (
					(t.tag === 27 && ye(t.type)) ||
					t.flags & 2 ||
					t.child === null ||
					t.tag === 4
				)
					continue t;
				((t.child.return = t), (t = t.child));
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function zc(t, l, e) {
		var a = t.tag;
		if (a === 5 || a === 6)
			((t = t.stateNode),
				l
					? (e.nodeType === 9
							? e.body
							: e.nodeName === "HTML"
								? e.ownerDocument.body
								: e
						).insertBefore(t, l)
					: ((l =
							e.nodeType === 9
								? e.body
								: e.nodeName === "HTML"
									? e.ownerDocument.body
									: e),
						l.appendChild(t),
						(e = e._reactRootContainer),
						e != null || l.onclick !== null || (l.onclick = Ul)));
		else if (
			a !== 4 &&
			(a === 27 && ye(t.type) && ((e = t.stateNode), (l = null)),
			(t = t.child),
			t !== null)
		)
			for (zc(t, l, e), t = t.sibling; t !== null; )
				(zc(t, l, e), (t = t.sibling));
	}
	function vn(t, l, e) {
		var a = t.tag;
		if (a === 5 || a === 6)
			((t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t));
		else if (
			a !== 4 &&
			(a === 27 && ye(t.type) && (e = t.stateNode), (t = t.child), t !== null)
		)
			for (vn(t, l, e), t = t.sibling; t !== null; )
				(vn(t, l, e), (t = t.sibling));
	}
	function Wo(t) {
		var l = t.stateNode,
			e = t.memoizedProps;
		try {
			for (var a = t.type, u = l.attributes; u.length; )
				l.removeAttributeNode(u[0]);
			(Dt(l, a, e), (l[_t] = t), (l[Zt] = e));
		} catch (n) {
			at(t, t.return, n);
		}
	}
	var Ll = !1,
		Tt = !1,
		Tc = !1,
		Fo = typeof WeakSet == "function" ? WeakSet : Set,
		Nt = null;
	function sm(t, l) {
		if (((t = t.containerInfo), (Vc = Bn), (t = cs(t)), yi(t))) {
			if ("selectionStart" in t)
				var e = { start: t.selectionStart, end: t.selectionEnd };
			else
				t: {
					e = ((e = t.ownerDocument) && e.defaultView) || window;
					var a = e.getSelection && e.getSelection();
					if (a && a.rangeCount !== 0) {
						e = a.anchorNode;
						var u = a.anchorOffset,
							n = a.focusNode;
						a = a.focusOffset;
						try {
							(e.nodeType, n.nodeType);
						} catch {
							e = null;
							break t;
						}
						var i = 0,
							c = -1,
							f = -1,
							y = 0,
							S = 0,
							z = t,
							g = null;
						l: for (;;) {
							for (
								var b;
								z !== e || (u !== 0 && z.nodeType !== 3) || (c = i + u),
									z !== n || (a !== 0 && z.nodeType !== 3) || (f = i + a),
									z.nodeType === 3 && (i += z.nodeValue.length),
									(b = z.firstChild) !== null;
							)
								((g = z), (z = b));
							for (;;) {
								if (z === t) break l;
								if (
									(g === e && ++y === u && (c = i),
									g === n && ++S === a && (f = i),
									(b = z.nextSibling) !== null)
								)
									break;
								((z = g), (g = z.parentNode));
							}
							z = b;
						}
						e = c === -1 || f === -1 ? null : { start: c, end: f };
					} else e = null;
				}
			e = e || { start: 0, end: 0 };
		} else e = null;
		for (
			Kc = { focusedElem: t, selectionRange: e }, Bn = !1, Nt = l;
			Nt !== null;
		)
			if (
				((l = Nt), (t = l.child), (l.subtreeFlags & 1028) !== 0 && t !== null)
			)
				((t.return = l), (Nt = t));
			else
				for (; Nt !== null; ) {
					switch (((l = Nt), (n = l.alternate), (t = l.flags), l.tag)) {
						case 0:
							if (
								(t & 4) !== 0 &&
								((t = l.updateQueue),
								(t = t !== null ? t.events : null),
								t !== null)
							)
								for (e = 0; e < t.length; e++)
									((u = t[e]), (u.ref.impl = u.nextImpl));
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((t & 1024) !== 0 && n !== null) {
								((t = void 0),
									(e = l),
									(u = n.memoizedProps),
									(n = n.memoizedState),
									(a = e.stateNode));
								try {
									var O = Ge(e.type, u);
									((t = a.getSnapshotBeforeUpdate(O, n)),
										(a.__reactInternalSnapshotBeforeUpdate = t));
								} catch (B) {
									at(e, e.return, B);
								}
							}
							break;
						case 3:
							if ((t & 1024) !== 0) {
								if (
									((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
								)
									kc(t);
								else if (e === 1)
									switch (t.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											kc(t);
											break;
										default:
											t.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((t & 1024) !== 0) throw Error(d(163));
					}
					if (((t = l.sibling), t !== null)) {
						((t.return = l.return), (Nt = t));
						break;
					}
					Nt = l.return;
				}
	}
	function $o(t, l, e) {
		var a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				(Vl(t, e), a & 4 && uu(5, e));
				break;
			case 1:
				if ((Vl(t, e), a & 4))
					if (((t = e.stateNode), l === null))
						try {
							t.componentDidMount();
						} catch (i) {
							at(e, e.return, i);
						}
					else {
						var u = Ge(e.type, l.memoizedProps);
						l = l.memoizedState;
						try {
							t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
						} catch (i) {
							at(e, e.return, i);
						}
					}
				(a & 64 && Ko(e), a & 512 && nu(e, e.return));
				break;
			case 3:
				if ((Vl(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
					if (((l = null), e.child !== null))
						switch (e.child.tag) {
							case 27:
							case 5:
								l = e.child.stateNode;
								break;
							case 1:
								l = e.child.stateNode;
						}
					try {
						Rs(t, l);
					} catch (i) {
						at(e, e.return, i);
					}
				}
				break;
			case 27:
				l === null && a & 4 && Wo(e);
			case 26:
			case 5:
				(Vl(t, e), l === null && a & 4 && Jo(e), a & 512 && nu(e, e.return));
				break;
			case 12:
				Vl(t, e);
				break;
			case 31:
				(Vl(t, e), a & 4 && t0(t, e));
				break;
			case 13:
				(Vl(t, e),
					a & 4 && l0(t, e),
					a & 64 &&
						((t = e.memoizedState),
						t !== null &&
							((t = t.dehydrated),
							t !== null && ((e = bm.bind(null, e)), Ym(t, e)))));
				break;
			case 22:
				if (((a = e.memoizedState !== null || Ll), !a)) {
					((l = (l !== null && l.memoizedState !== null) || Tt), (u = Ll));
					var n = Tt;
					((Ll = a),
						(Tt = l) && !n ? Kl(t, e, (e.subtreeFlags & 8772) !== 0) : Vl(t, e),
						(Ll = u),
						(Tt = n));
				}
				break;
			case 30:
				break;
			default:
				Vl(t, e);
		}
	}
	function Io(t) {
		var l = t.alternate;
		(l !== null && ((t.alternate = null), Io(l)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 && ((l = t.stateNode), l !== null && Pn(l)),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null));
	}
	var ht = null,
		Kt = !1;
	function Zl(t, l, e) {
		for (e = e.child; e !== null; ) (Po(t, l, e), (e = e.sibling));
	}
	function Po(t, l, e) {
		if (It && typeof It.onCommitFiberUnmount == "function")
			try {
				It.onCommitFiberUnmount(Ma, e);
			} catch {}
		switch (e.tag) {
			case 26:
				(Tt || _l(e, l),
					Zl(t, l, e),
					e.memoizedState
						? e.memoizedState.count--
						: e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
				break;
			case 27:
				Tt || _l(e, l);
				var a = ht,
					u = Kt;
				(ye(e.type) && ((ht = e.stateNode), (Kt = !1)),
					Zl(t, l, e),
					hu(e.stateNode),
					(ht = a),
					(Kt = u));
				break;
			case 5:
				Tt || _l(e, l);
			case 6:
				if (
					((a = ht),
					(u = Kt),
					(ht = null),
					Zl(t, l, e),
					(ht = a),
					(Kt = u),
					ht !== null)
				)
					if (Kt)
						try {
							(ht.nodeType === 9
								? ht.body
								: ht.nodeName === "HTML"
									? ht.ownerDocument.body
									: ht
							).removeChild(e.stateNode);
						} catch (n) {
							at(e, l, n);
						}
					else
						try {
							ht.removeChild(e.stateNode);
						} catch (n) {
							at(e, l, n);
						}
				break;
			case 18:
				ht !== null &&
					(Kt
						? ((t = ht),
							K0(
								t.nodeType === 9
									? t.body
									: t.nodeName === "HTML"
										? t.ownerDocument.body
										: t,
								e.stateNode,
							),
							_a(t))
						: K0(ht, e.stateNode));
				break;
			case 4:
				((a = ht),
					(u = Kt),
					(ht = e.stateNode.containerInfo),
					(Kt = !0),
					Zl(t, l, e),
					(ht = a),
					(Kt = u));
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				(se(2, e, l), Tt || se(4, e, l), Zl(t, l, e));
				break;
			case 1:
				(Tt ||
					(_l(e, l),
					(a = e.stateNode),
					typeof a.componentWillUnmount == "function" && wo(e, l, a)),
					Zl(t, l, e));
				break;
			case 21:
				Zl(t, l, e);
				break;
			case 22:
				((Tt = (a = Tt) || e.memoizedState !== null), Zl(t, l, e), (Tt = a));
				break;
			default:
				Zl(t, l, e);
		}
	}
	function t0(t, l) {
		if (
			l.memoizedState === null &&
			((t = l.alternate), t !== null && ((t = t.memoizedState), t !== null))
		) {
			t = t.dehydrated;
			try {
				_a(t);
			} catch (e) {
				at(l, l.return, e);
			}
		}
	}
	function l0(t, l) {
		if (
			l.memoizedState === null &&
			((t = l.alternate),
			t !== null &&
				((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
		)
			try {
				_a(t);
			} catch (e) {
				at(l, l.return, e);
			}
	}
	function om(t) {
		switch (t.tag) {
			case 31:
			case 13:
			case 19:
				var l = t.stateNode;
				return (l === null && (l = t.stateNode = new Fo()), l);
			case 22:
				return (
					(t = t.stateNode),
					(l = t._retryCache),
					l === null && (l = t._retryCache = new Fo()),
					l
				);
			default:
				throw Error(d(435, t.tag));
		}
	}
	function yn(t, l) {
		var e = om(t);
		l.forEach(function (a) {
			if (!e.has(a)) {
				e.add(a);
				var u = Sm.bind(null, t, a);
				a.then(u, u);
			}
		});
	}
	function wt(t, l) {
		var e = l.deletions;
		if (e !== null)
			for (var a = 0; a < e.length; a++) {
				var u = e[a],
					n = t,
					i = l,
					c = i;
				t: for (; c !== null; ) {
					switch (c.tag) {
						case 27:
							if (ye(c.type)) {
								((ht = c.stateNode), (Kt = !1));
								break t;
							}
							break;
						case 5:
							((ht = c.stateNode), (Kt = !1));
							break t;
						case 3:
						case 4:
							((ht = c.stateNode.containerInfo), (Kt = !0));
							break t;
					}
					c = c.return;
				}
				if (ht === null) throw Error(d(160));
				(Po(n, i, u),
					(ht = null),
					(Kt = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null));
			}
		if (l.subtreeFlags & 13886)
			for (l = l.child; l !== null; ) (e0(l, t), (l = l.sibling));
	}
	var xl = null;
	function e0(t, l) {
		var e = t.alternate,
			a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				(wt(l, t),
					Jt(t),
					a & 4 && (se(3, t, t.return), uu(3, t), se(5, t, t.return)));
				break;
			case 1:
				(wt(l, t),
					Jt(t),
					a & 512 && (Tt || e === null || _l(e, e.return)),
					a & 64 &&
						Ll &&
						((t = t.updateQueue),
						t !== null &&
							((a = t.callbacks),
							a !== null &&
								((e = t.shared.hiddenCallbacks),
								(t.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
				break;
			case 26:
				var u = xl;
				if (
					(wt(l, t),
					Jt(t),
					a & 512 && (Tt || e === null || _l(e, e.return)),
					a & 4)
				) {
					var n = e !== null ? e.memoizedState : null;
					if (((a = t.memoizedState), e === null))
						if (a === null)
							if (t.stateNode === null) {
								t: {
									((a = t.type),
										(e = t.memoizedProps),
										(u = u.ownerDocument || u));
									l: switch (a) {
										case "title":
											((n = u.getElementsByTagName("title")[0]),
												(!n ||
													n[Ua] ||
													n[_t] ||
													n.namespaceURI === "http://www.w3.org/2000/svg" ||
													n.hasAttribute("itemprop")) &&
													((n = u.createElement(a)),
													u.head.insertBefore(
														n,
														u.querySelector("head > title"),
													)),
												Dt(n, a, e),
												(n[_t] = t),
												At(n),
												(a = n));
											break t;
										case "link":
											var i = ed("link", "href", u).get(a + (e.href || ""));
											if (i) {
												for (var c = 0; c < i.length; c++)
													if (
														((n = i[c]),
														n.getAttribute("href") ===
															(e.href == null || e.href === ""
																? null
																: e.href) &&
															n.getAttribute("rel") ===
																(e.rel == null ? null : e.rel) &&
															n.getAttribute("title") ===
																(e.title == null ? null : e.title) &&
															n.getAttribute("crossorigin") ===
																(e.crossOrigin == null ? null : e.crossOrigin))
													) {
														i.splice(c, 1);
														break l;
													}
											}
											((n = u.createElement(a)),
												Dt(n, a, e),
												u.head.appendChild(n));
											break;
										case "meta":
											if (
												(i = ed("meta", "content", u).get(
													a + (e.content || ""),
												))
											) {
												for (c = 0; c < i.length; c++)
													if (
														((n = i[c]),
														n.getAttribute("content") ===
															(e.content == null ? null : "" + e.content) &&
															n.getAttribute("name") ===
																(e.name == null ? null : e.name) &&
															n.getAttribute("property") ===
																(e.property == null ? null : e.property) &&
															n.getAttribute("http-equiv") ===
																(e.httpEquiv == null ? null : e.httpEquiv) &&
															n.getAttribute("charset") ===
																(e.charSet == null ? null : e.charSet))
													) {
														i.splice(c, 1);
														break l;
													}
											}
											((n = u.createElement(a)),
												Dt(n, a, e),
												u.head.appendChild(n));
											break;
										default:
											throw Error(d(468, a));
									}
									((n[_t] = t), At(n), (a = n));
								}
								t.stateNode = a;
							} else ad(u, t.type, t.stateNode);
						else t.stateNode = ld(u, a, t.memoizedProps);
					else
						n !== a
							? (n === null
									? e.stateNode !== null &&
										((e = e.stateNode), e.parentNode.removeChild(e))
									: n.count--,
								a === null
									? ad(u, t.type, t.stateNode)
									: ld(u, a, t.memoizedProps))
							: a === null &&
								t.stateNode !== null &&
								xc(t, t.memoizedProps, e.memoizedProps);
				}
				break;
			case 27:
				(wt(l, t),
					Jt(t),
					a & 512 && (Tt || e === null || _l(e, e.return)),
					e !== null && a & 4 && xc(t, t.memoizedProps, e.memoizedProps));
				break;
			case 5:
				if (
					(wt(l, t),
					Jt(t),
					a & 512 && (Tt || e === null || _l(e, e.return)),
					t.flags & 32)
				) {
					u = t.stateNode;
					try {
						Fe(u, "");
					} catch (O) {
						at(t, t.return, O);
					}
				}
				(a & 4 &&
					t.stateNode != null &&
					((u = t.memoizedProps), xc(t, u, e !== null ? e.memoizedProps : u)),
					a & 1024 && (Tc = !0));
				break;
			case 6:
				if ((wt(l, t), Jt(t), a & 4)) {
					if (t.stateNode === null) throw Error(d(162));
					((a = t.memoizedProps), (e = t.stateNode));
					try {
						e.nodeValue = a;
					} catch (O) {
						at(t, t.return, O);
					}
				}
				break;
			case 3:
				if (
					((Un = null),
					(u = xl),
					(xl = On(l.containerInfo)),
					wt(l, t),
					(xl = u),
					Jt(t),
					a & 4 && e !== null && e.memoizedState.isDehydrated)
				)
					try {
						_a(l.containerInfo);
					} catch (O) {
						at(t, t.return, O);
					}
				Tc && ((Tc = !1), a0(t));
				break;
			case 4:
				((a = xl),
					(xl = On(t.stateNode.containerInfo)),
					wt(l, t),
					Jt(t),
					(xl = a));
				break;
			case 12:
				(wt(l, t), Jt(t));
				break;
			case 31:
				(wt(l, t),
					Jt(t),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), yn(t, a))));
				break;
			case 13:
				(wt(l, t),
					Jt(t),
					t.child.flags & 8192 &&
						(t.memoizedState !== null) !=
							(e !== null && e.memoizedState !== null) &&
						(bn = $t()),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), yn(t, a))));
				break;
			case 22:
				u = t.memoizedState !== null;
				var f = e !== null && e.memoizedState !== null,
					y = Ll,
					S = Tt;
				if (
					((Ll = y || u),
					(Tt = S || f),
					wt(l, t),
					(Tt = S),
					(Ll = y),
					Jt(t),
					a & 8192)
				)
					t: for (
						l = t.stateNode,
							l._visibility = u ? l._visibility & -2 : l._visibility | 1,
							u && (e === null || f || Ll || Tt || Xe(t)),
							e = null,
							l = t;
						;
					) {
						if (l.tag === 5 || l.tag === 26) {
							if (e === null) {
								f = e = l;
								try {
									if (((n = f.stateNode), u))
										((i = n.style),
											typeof i.setProperty == "function"
												? i.setProperty("display", "none", "important")
												: (i.display = "none"));
									else {
										c = f.stateNode;
										var z = f.memoizedProps.style,
											g =
												z != null && z.hasOwnProperty("display")
													? z.display
													: null;
										c.style.display =
											g == null || typeof g == "boolean" ? "" : ("" + g).trim();
									}
								} catch (O) {
									at(f, f.return, O);
								}
							}
						} else if (l.tag === 6) {
							if (e === null) {
								f = l;
								try {
									f.stateNode.nodeValue = u ? "" : f.memoizedProps;
								} catch (O) {
									at(f, f.return, O);
								}
							}
						} else if (l.tag === 18) {
							if (e === null) {
								f = l;
								try {
									var b = f.stateNode;
									u ? w0(b, !0) : w0(f.stateNode, !1);
								} catch (O) {
									at(f, f.return, O);
								}
							}
						} else if (
							((l.tag !== 22 && l.tag !== 23) ||
								l.memoizedState === null ||
								l === t) &&
							l.child !== null
						) {
							((l.child.return = l), (l = l.child));
							continue;
						}
						if (l === t) break t;
						for (; l.sibling === null; ) {
							if (l.return === null || l.return === t) break t;
							(e === l && (e = null), (l = l.return));
						}
						(e === l && (e = null),
							(l.sibling.return = l.return),
							(l = l.sibling));
					}
				a & 4 &&
					((a = t.updateQueue),
					a !== null &&
						((e = a.retryQueue),
						e !== null && ((a.retryQueue = null), yn(t, e))));
				break;
			case 19:
				(wt(l, t),
					Jt(t),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), yn(t, a))));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				(wt(l, t), Jt(t));
		}
	}
	function Jt(t) {
		var l = t.flags;
		if (l & 2) {
			try {
				for (var e, a = t.return; a !== null; ) {
					if (ko(a)) {
						e = a;
						break;
					}
					a = a.return;
				}
				if (e == null) throw Error(d(160));
				switch (e.tag) {
					case 27:
						var u = e.stateNode,
							n = pc(t);
						vn(t, n, u);
						break;
					case 5:
						var i = e.stateNode;
						e.flags & 32 && (Fe(i, ""), (e.flags &= -33));
						var c = pc(t);
						vn(t, c, i);
						break;
					case 3:
					case 4:
						var f = e.stateNode.containerInfo,
							y = pc(t);
						zc(t, y, f);
						break;
					default:
						throw Error(d(161));
				}
			} catch (S) {
				at(t, t.return, S);
			}
			t.flags &= -3;
		}
		l & 4096 && (t.flags &= -4097);
	}
	function a0(t) {
		if (t.subtreeFlags & 1024)
			for (t = t.child; t !== null; ) {
				var l = t;
				(a0(l),
					l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
					(t = t.sibling));
			}
	}
	function Vl(t, l) {
		if (l.subtreeFlags & 8772)
			for (l = l.child; l !== null; ) ($o(t, l.alternate, l), (l = l.sibling));
	}
	function Xe(t) {
		for (t = t.child; t !== null; ) {
			var l = t;
			switch (l.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					(se(4, l, l.return), Xe(l));
					break;
				case 1:
					_l(l, l.return);
					var e = l.stateNode;
					(typeof e.componentWillUnmount == "function" && wo(l, l.return, e),
						Xe(l));
					break;
				case 27:
					hu(l.stateNode);
				case 26:
				case 5:
					(_l(l, l.return), Xe(l));
					break;
				case 22:
					l.memoizedState === null && Xe(l);
					break;
				case 30:
					Xe(l);
					break;
				default:
					Xe(l);
			}
			t = t.sibling;
		}
	}
	function Kl(t, l, e) {
		for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
			var a = l.alternate,
				u = t,
				n = l,
				i = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					(Kl(u, n, e), uu(4, n));
					break;
				case 1:
					if (
						(Kl(u, n, e),
						(a = n),
						(u = a.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (y) {
							at(a, a.return, y);
						}
					if (((a = n), (u = a.updateQueue), u !== null)) {
						var c = a.stateNode;
						try {
							var f = u.shared.hiddenCallbacks;
							if (f !== null)
								for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
									Hs(f[u], c);
						} catch (y) {
							at(a, a.return, y);
						}
					}
					(e && i & 64 && Ko(n), nu(n, n.return));
					break;
				case 27:
					Wo(n);
				case 26:
				case 5:
					(Kl(u, n, e), e && a === null && i & 4 && Jo(n), nu(n, n.return));
					break;
				case 12:
					Kl(u, n, e);
					break;
				case 31:
					(Kl(u, n, e), e && i & 4 && t0(u, n));
					break;
				case 13:
					(Kl(u, n, e), e && i & 4 && l0(u, n));
					break;
				case 22:
					(n.memoizedState === null && Kl(u, n, e), nu(n, n.return));
					break;
				case 30:
					break;
				default:
					Kl(u, n, e);
			}
			l = l.sibling;
		}
	}
	function Ec(t, l) {
		var e = null;
		(t !== null &&
			t.memoizedState !== null &&
			t.memoizedState.cachePool !== null &&
			(e = t.memoizedState.cachePool.pool),
			(t = null),
			l.memoizedState !== null &&
				l.memoizedState.cachePool !== null &&
				(t = l.memoizedState.cachePool.pool),
			t !== e && (t != null && t.refCount++, e != null && Ka(e)));
	}
	function Ac(t, l) {
		((t = null),
			l.alternate !== null && (t = l.alternate.memoizedState.cache),
			(l = l.memoizedState.cache),
			l !== t && (l.refCount++, t != null && Ka(t)));
	}
	function pl(t, l, e, a) {
		if (l.subtreeFlags & 10256)
			for (l = l.child; l !== null; ) (u0(t, l, e, a), (l = l.sibling));
	}
	function u0(t, l, e, a) {
		var u = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				(pl(t, l, e, a), u & 2048 && uu(9, l));
				break;
			case 1:
				pl(t, l, e, a);
				break;
			case 3:
				(pl(t, l, e, a),
					u & 2048 &&
						((t = null),
						l.alternate !== null && (t = l.alternate.memoizedState.cache),
						(l = l.memoizedState.cache),
						l !== t && (l.refCount++, t != null && Ka(t))));
				break;
			case 12:
				if (u & 2048) {
					(pl(t, l, e, a), (t = l.stateNode));
					try {
						var n = l.memoizedProps,
							i = n.id,
							c = n.onPostCommit;
						typeof c == "function" &&
							c(
								i,
								l.alternate === null ? "mount" : "update",
								t.passiveEffectDuration,
								-0,
							);
					} catch (f) {
						at(l, l.return, f);
					}
				} else pl(t, l, e, a);
				break;
			case 31:
				pl(t, l, e, a);
				break;
			case 13:
				pl(t, l, e, a);
				break;
			case 23:
				break;
			case 22:
				((n = l.stateNode),
					(i = l.alternate),
					l.memoizedState !== null
						? n._visibility & 2
							? pl(t, l, e, a)
							: iu(t, l)
						: n._visibility & 2
							? pl(t, l, e, a)
							: ((n._visibility |= 2),
								ya(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || !1)),
					u & 2048 && Ec(i, l));
				break;
			case 24:
				(pl(t, l, e, a), u & 2048 && Ac(l.alternate, l));
				break;
			default:
				pl(t, l, e, a);
		}
	}
	function ya(t, l, e, a, u) {
		for (
			u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child;
			l !== null;
		) {
			var n = t,
				i = l,
				c = e,
				f = a,
				y = i.flags;
			switch (i.tag) {
				case 0:
				case 11:
				case 15:
					(ya(n, i, c, f, u), uu(8, i));
					break;
				case 23:
					break;
				case 22:
					var S = i.stateNode;
					(i.memoizedState !== null
						? S._visibility & 2
							? ya(n, i, c, f, u)
							: iu(n, i)
						: ((S._visibility |= 2), ya(n, i, c, f, u)),
						u && y & 2048 && Ec(i.alternate, i));
					break;
				case 24:
					(ya(n, i, c, f, u), u && y & 2048 && Ac(i.alternate, i));
					break;
				default:
					ya(n, i, c, f, u);
			}
			l = l.sibling;
		}
	}
	function iu(t, l) {
		if (l.subtreeFlags & 10256)
			for (l = l.child; l !== null; ) {
				var e = t,
					a = l,
					u = a.flags;
				switch (a.tag) {
					case 22:
						(iu(e, a), u & 2048 && Ec(a.alternate, a));
						break;
					case 24:
						(iu(e, a), u & 2048 && Ac(a.alternate, a));
						break;
					default:
						iu(e, a);
				}
				l = l.sibling;
			}
	}
	var cu = 8192;
	function ga(t, l, e) {
		if (t.subtreeFlags & cu)
			for (t = t.child; t !== null; ) (n0(t, l, e), (t = t.sibling));
	}
	function n0(t, l, e) {
		switch (t.tag) {
			case 26:
				(ga(t, l, e),
					t.flags & cu &&
						t.memoizedState !== null &&
						Fm(e, xl, t.memoizedState, t.memoizedProps));
				break;
			case 5:
				ga(t, l, e);
				break;
			case 3:
			case 4:
				var a = xl;
				((xl = On(t.stateNode.containerInfo)), ga(t, l, e), (xl = a));
				break;
			case 22:
				t.memoizedState === null &&
					((a = t.alternate),
					a !== null && a.memoizedState !== null
						? ((a = cu), (cu = 16777216), ga(t, l, e), (cu = a))
						: ga(t, l, e));
				break;
			default:
				ga(t, l, e);
		}
	}
	function i0(t) {
		var l = t.alternate;
		if (l !== null && ((t = l.child), t !== null)) {
			l.child = null;
			do ((l = t.sibling), (t.sibling = null), (t = l));
			while (t !== null);
		}
	}
	function fu(t) {
		var l = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (l !== null)
				for (var e = 0; e < l.length; e++) {
					var a = l[e];
					((Nt = a), f0(a, t));
				}
			i0(t);
		}
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) (c0(t), (t = t.sibling));
	}
	function c0(t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				(fu(t), t.flags & 2048 && se(9, t, t.return));
				break;
			case 3:
				fu(t);
				break;
			case 12:
				fu(t);
				break;
			case 22:
				var l = t.stateNode;
				t.memoizedState !== null &&
				l._visibility & 2 &&
				(t.return === null || t.return.tag !== 13)
					? ((l._visibility &= -3), gn(t))
					: fu(t);
				break;
			default:
				fu(t);
		}
	}
	function gn(t) {
		var l = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (l !== null)
				for (var e = 0; e < l.length; e++) {
					var a = l[e];
					((Nt = a), f0(a, t));
				}
			i0(t);
		}
		for (t = t.child; t !== null; ) {
			switch (((l = t), l.tag)) {
				case 0:
				case 11:
				case 15:
					(se(8, l, l.return), gn(l));
					break;
				case 22:
					((e = l.stateNode),
						e._visibility & 2 && ((e._visibility &= -3), gn(l)));
					break;
				default:
					gn(l);
			}
			t = t.sibling;
		}
	}
	function f0(t, l) {
		for (; Nt !== null; ) {
			var e = Nt;
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					se(8, e, l);
					break;
				case 23:
				case 22:
					if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
						var a = e.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					Ka(e.memoizedState.cache);
			}
			if (((a = e.child), a !== null)) ((a.return = e), (Nt = a));
			else
				t: for (e = t; Nt !== null; ) {
					a = Nt;
					var u = a.sibling,
						n = a.return;
					if ((Io(a), a === e)) {
						Nt = null;
						break t;
					}
					if (u !== null) {
						((u.return = n), (Nt = u));
						break t;
					}
					Nt = n;
				}
		}
	}
	var dm = {
			getCacheForType: function (t) {
				var l = Mt(xt),
					e = l.data.get(t);
				return (e === void 0 && ((e = t()), l.data.set(t, e)), e);
			},
			cacheSignal: function () {
				return Mt(xt).controller.signal;
			},
		},
		rm = typeof WeakMap == "function" ? WeakMap : Map,
		tt = 0,
		ot = null,
		K = null,
		J = 0,
		et = 0,
		ul = null,
		oe = !1,
		ba = !1,
		Nc = !1,
		wl = 0,
		yt = 0,
		de = 0,
		Qe = 0,
		_c = 0,
		nl = 0,
		Sa = 0,
		su = null,
		kt = null,
		jc = !1,
		bn = 0,
		s0 = 0,
		Sn = 1 / 0,
		xn = null,
		re = null,
		Et = 0,
		me = null,
		xa = null,
		Jl = 0,
		Mc = 0,
		Oc = null,
		o0 = null,
		ou = 0,
		Dc = null;
	function il() {
		return (tt & 2) !== 0 && J !== 0 ? J & -J : x.T !== null ? qc() : Af();
	}
	function d0() {
		if (nl === 0)
			if ((J & 536870912) === 0 || F) {
				var t = _u;
				((_u <<= 1), (_u & 3932160) === 0 && (_u = 262144), (nl = t));
			} else nl = 536870912;
		return ((t = el.current), t !== null && (t.flags |= 32), nl);
	}
	function Wt(t, l, e) {
		(((t === ot && (et === 2 || et === 9)) || t.cancelPendingCommit !== null) &&
			(pa(t, 0), he(t, J, nl, !1)),
			Da(t, e),
			((tt & 2) === 0 || t !== ot) &&
				(t === ot &&
					((tt & 2) === 0 && (Qe |= e), yt === 4 && he(t, J, nl, !1)),
				jl(t)));
	}
	function r0(t, l, e) {
		if ((tt & 6) !== 0) throw Error(d(327));
		var a = (!e && (l & 127) === 0 && (l & t.expiredLanes) === 0) || Oa(t, l),
			u = a ? vm(t, l) : Hc(t, l, !0),
			n = a;
		do {
			if (u === 0) {
				ba && !a && he(t, l, 0, !1);
				break;
			} else {
				if (((e = t.current.alternate), n && !mm(e))) {
					((u = Hc(t, l, !1)), (n = !1));
					continue;
				}
				if (u === 2) {
					if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
					else
						((i = t.pendingLanes & -536870913),
							(i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
					if (i !== 0) {
						l = i;
						t: {
							var c = t;
							u = su;
							var f = c.current.memoizedState.isDehydrated;
							if ((f && (pa(c, i).flags |= 256), (i = Hc(c, i, !1)), i !== 2)) {
								if (Nc && !f) {
									((c.errorRecoveryDisabledLanes |= n), (Qe |= n), (u = 4));
									break t;
								}
								((n = kt),
									(kt = u),
									n !== null &&
										(kt === null ? (kt = n) : kt.push.apply(kt, n)));
							}
							u = i;
						}
						if (((n = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					(pa(t, 0), he(t, l, 0, !0));
					break;
				}
				t: {
					switch (((a = t), (n = u), n)) {
						case 0:
						case 1:
							throw Error(d(345));
						case 4:
							if ((l & 4194048) !== l) break;
						case 6:
							he(a, l, nl, !oe);
							break t;
						case 2:
							kt = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(d(329));
					}
					if ((l & 62914560) === l && ((u = bn + 300 - $t()), 10 < u)) {
						if ((he(a, l, nl, !oe), Mu(a, 0, !0) !== 0)) break t;
						((Jl = l),
							(a.timeoutHandle = Z0(
								m0.bind(
									null,
									a,
									e,
									kt,
									xn,
									jc,
									l,
									nl,
									Qe,
									Sa,
									oe,
									n,
									"Throttled",
									-0,
									0,
								),
								u,
							)));
						break t;
					}
					m0(a, e, kt, xn, jc, l, nl, Qe, Sa, oe, n, null, -0, 0);
				}
			}
			break;
		} while (!0);
		jl(t);
	}
	function m0(t, l, e, a, u, n, i, c, f, y, S, z, g, b) {
		if (
			((t.timeoutHandle = -1),
			(z = l.subtreeFlags),
			z & 8192 || (z & 16785408) === 16785408)
		) {
			((z = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Ul,
			}),
				n0(l, n, z));
			var O =
				(n & 62914560) === n ? bn - $t() : (n & 4194048) === n ? s0 - $t() : 0;
			if (((O = $m(z, O)), O !== null)) {
				((Jl = n),
					(t.cancelPendingCommit = O(
						p0.bind(null, t, l, n, e, a, u, i, c, f, S, z, null, g, b),
					)),
					he(t, n, i, !y));
				return;
			}
		}
		p0(t, l, n, e, a, u, i, c, f);
	}
	function mm(t) {
		for (var l = t; ; ) {
			var e = l.tag;
			if (
				(e === 0 || e === 11 || e === 15) &&
				l.flags & 16384 &&
				((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
			)
				for (var a = 0; a < e.length; a++) {
					var u = e[a],
						n = u.getSnapshot;
					u = u.value;
					try {
						if (!tl(n(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
				((e.return = l), (l = e));
			else {
				if (l === t) break;
				for (; l.sibling === null; ) {
					if (l.return === null || l.return === t) return !0;
					l = l.return;
				}
				((l.sibling.return = l.return), (l = l.sibling));
			}
		}
		return !0;
	}
	function he(t, l, e, a) {
		((l &= ~_c),
			(l &= ~Qe),
			(t.suspendedLanes |= l),
			(t.pingedLanes &= ~l),
			a && (t.warmLanes |= l),
			(a = t.expirationTimes));
		for (var u = l; 0 < u; ) {
			var n = 31 - Pt(u),
				i = 1 << n;
			((a[n] = -1), (u &= ~i));
		}
		e !== 0 && zf(t, e, l);
	}
	function pn() {
		return (tt & 6) === 0 ? (du(0), !1) : !0;
	}
	function Uc() {
		if (K !== null) {
			if (et === 0) var t = K.return;
			else ((t = K), (Bl = Ue = null), ki(t), (da = null), (Ja = 0), (t = K));
			for (; t !== null; ) (Vo(t.alternate, t), (t = t.return));
			K = null;
		}
	}
	function pa(t, l) {
		var e = t.timeoutHandle;
		(e !== -1 && ((t.timeoutHandle = -1), Hm(e)),
			(e = t.cancelPendingCommit),
			e !== null && ((t.cancelPendingCommit = null), e()),
			(Jl = 0),
			Uc(),
			(ot = t),
			(K = e = Rl(t.current, null)),
			(J = l),
			(et = 0),
			(ul = null),
			(oe = !1),
			(ba = Oa(t, l)),
			(Nc = !1),
			(Sa = nl = _c = Qe = de = yt = 0),
			(kt = su = null),
			(jc = !1),
			(l & 8) !== 0 && (l |= l & 32));
		var a = t.entangledLanes;
		if (a !== 0)
			for (t = t.entanglements, a &= l; 0 < a; ) {
				var u = 31 - Pt(a),
					n = 1 << u;
				((l |= t[u]), (a &= ~n));
			}
		return ((wl = l), Qu(), e);
	}
	function h0(t, l) {
		((Q = null),
			(x.H = lu),
			l === oa || l === Wu
				? ((l = Ms()), (et = 3))
				: l === Bi
					? ((l = Ms()), (et = 4))
					: (et =
							l === oc
								? 8
								: l !== null &&
									  typeof l == "object" &&
									  typeof l.then == "function"
									? 6
									: 1),
			(ul = l),
			K === null && ((yt = 1), on(t, dl(l, t.current))));
	}
	function v0() {
		var t = el.current;
		return t === null
			? !0
			: (J & 4194048) === J
				? vl === null
				: (J & 62914560) === J || (J & 536870912) !== 0
					? t === vl
					: !1;
	}
	function y0() {
		var t = x.H;
		return ((x.H = lu), t === null ? lu : t);
	}
	function g0() {
		var t = x.A;
		return ((x.A = dm), t);
	}
	function zn() {
		((yt = 4),
			oe || ((J & 4194048) !== J && el.current !== null) || (ba = !0),
			((de & 134217727) === 0 && (Qe & 134217727) === 0) ||
				ot === null ||
				he(ot, J, nl, !1));
	}
	function Hc(t, l, e) {
		var a = tt;
		tt |= 2;
		var u = y0(),
			n = g0();
		((ot !== t || J !== l) && ((xn = null), pa(t, l)), (l = !1));
		var i = yt;
		t: do
			try {
				if (et !== 0 && K !== null) {
					var c = K,
						f = ul;
					switch (et) {
						case 8:
							(Uc(), (i = 6));
							break t;
						case 3:
						case 2:
						case 9:
						case 6:
							el.current === null && (l = !0);
							var y = et;
							if (((et = 0), (ul = null), za(t, c, f, y), e && ba)) {
								i = 0;
								break t;
							}
							break;
						default:
							((y = et), (et = 0), (ul = null), za(t, c, f, y));
					}
				}
				(hm(), (i = yt));
				break;
			} catch (S) {
				h0(t, S);
			}
		while (!0);
		return (
			l && t.shellSuspendCounter++,
			(Bl = Ue = null),
			(tt = a),
			(x.H = u),
			(x.A = n),
			K === null && ((ot = null), (J = 0), Qu()),
			i
		);
	}
	function hm() {
		for (; K !== null; ) b0(K);
	}
	function vm(t, l) {
		var e = tt;
		tt |= 2;
		var a = y0(),
			u = g0();
		ot !== t || J !== l
			? ((xn = null), (Sn = $t() + 500), pa(t, l))
			: (ba = Oa(t, l));
		t: do
			try {
				if (et !== 0 && K !== null) {
					l = K;
					var n = ul;
					l: switch (et) {
						case 1:
							((et = 0), (ul = null), za(t, l, n, 1));
							break;
						case 2:
						case 9:
							if (_s(n)) {
								((et = 0), (ul = null), S0(l));
								break;
							}
							((l = function () {
								((et !== 2 && et !== 9) || ot !== t || (et = 7), jl(t));
							}),
								n.then(l, l));
							break t;
						case 3:
							et = 7;
							break t;
						case 4:
							et = 5;
							break t;
						case 7:
							_s(n)
								? ((et = 0), (ul = null), S0(l))
								: ((et = 0), (ul = null), za(t, l, n, 7));
							break;
						case 5:
							var i = null;
							switch (K.tag) {
								case 26:
									i = K.memoizedState;
								case 5:
								case 27:
									var c = K;
									if (i ? ud(i) : c.stateNode.complete) {
										((et = 0), (ul = null));
										var f = c.sibling;
										if (f !== null) K = f;
										else {
											var y = c.return;
											y !== null ? ((K = y), Tn(y)) : (K = null);
										}
										break l;
									}
							}
							((et = 0), (ul = null), za(t, l, n, 5));
							break;
						case 6:
							((et = 0), (ul = null), za(t, l, n, 6));
							break;
						case 8:
							(Uc(), (yt = 6));
							break t;
						default:
							throw Error(d(462));
					}
				}
				ym();
				break;
			} catch (S) {
				h0(t, S);
			}
		while (!0);
		return (
			(Bl = Ue = null),
			(x.H = a),
			(x.A = u),
			(tt = e),
			K !== null ? 0 : ((ot = null), (J = 0), Qu(), yt)
		);
	}
	function ym() {
		for (; K !== null && !Gd(); ) b0(K);
	}
	function b0(t) {
		var l = Lo(t.alternate, t, wl);
		((t.memoizedProps = t.pendingProps), l === null ? Tn(t) : (K = l));
	}
	function S0(t) {
		var l = t,
			e = l.alternate;
		switch (l.tag) {
			case 15:
			case 0:
				l = Bo(e, l, l.pendingProps, l.type, void 0, J);
				break;
			case 11:
				l = Bo(e, l, l.pendingProps, l.type.render, l.ref, J);
				break;
			case 5:
				ki(l);
			default:
				(Vo(e, l), (l = K = ys(l, wl)), (l = Lo(e, l, wl)));
		}
		((t.memoizedProps = t.pendingProps), l === null ? Tn(t) : (K = l));
	}
	function za(t, l, e, a) {
		((Bl = Ue = null), ki(l), (da = null), (Ja = 0));
		var u = l.return;
		try {
			if (um(t, u, l, e, J)) {
				((yt = 1), on(t, dl(e, t.current)), (K = null));
				return;
			}
		} catch (n) {
			if (u !== null) throw ((K = u), n);
			((yt = 1), on(t, dl(e, t.current)), (K = null));
			return;
		}
		l.flags & 32768
			? (F || a === 1
					? (t = !0)
					: ba || (J & 536870912) !== 0
						? (t = !1)
						: ((oe = t = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = el.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				x0(l, t))
			: Tn(l);
	}
	function Tn(t) {
		var l = t;
		do {
			if ((l.flags & 32768) !== 0) {
				x0(l, oe);
				return;
			}
			t = l.return;
			var e = cm(l.alternate, l, wl);
			if (e !== null) {
				K = e;
				return;
			}
			if (((l = l.sibling), l !== null)) {
				K = l;
				return;
			}
			K = l = t;
		} while (l !== null);
		yt === 0 && (yt = 5);
	}
	function x0(t, l) {
		do {
			var e = fm(t.alternate, t);
			if (e !== null) {
				((e.flags &= 32767), (K = e));
				return;
			}
			if (
				((e = t.return),
				e !== null &&
					((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
				!l && ((t = t.sibling), t !== null))
			) {
				K = t;
				return;
			}
			K = t = e;
		} while (t !== null);
		((yt = 6), (K = null));
	}
	function p0(t, l, e, a, u, n, i, c, f) {
		t.cancelPendingCommit = null;
		do En();
		while (Et !== 0);
		if ((tt & 6) !== 0) throw Error(d(327));
		if (l !== null) {
			if (l === t.current) throw Error(d(177));
			if (
				((n = l.lanes | l.childLanes),
				(n |= pi),
				Wd(t, e, n, i, c, f),
				t === ot && ((K = ot = null), (J = 0)),
				(xa = l),
				(me = t),
				(Jl = e),
				(Mc = n),
				(Oc = u),
				(o0 = a),
				(l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
					? ((t.callbackNode = null),
						(t.callbackPriority = 0),
						xm(Au, function () {
							return (N0(), null);
						}))
					: ((t.callbackNode = null), (t.callbackPriority = 0)),
				(a = (l.flags & 13878) !== 0),
				(l.subtreeFlags & 13878) !== 0 || a)
			) {
				((a = x.T), (x.T = null), (u = _.p), (_.p = 2), (i = tt), (tt |= 4));
				try {
					sm(t, l, e);
				} finally {
					((tt = i), (_.p = u), (x.T = a));
				}
			}
			((Et = 1), z0(), T0(), E0());
		}
	}
	function z0() {
		if (Et === 1) {
			Et = 0;
			var t = me,
				l = xa,
				e = (l.flags & 13878) !== 0;
			if ((l.subtreeFlags & 13878) !== 0 || e) {
				((e = x.T), (x.T = null));
				var a = _.p;
				_.p = 2;
				var u = tt;
				tt |= 4;
				try {
					e0(l, t);
					var n = Kc,
						i = cs(t.containerInfo),
						c = n.focusedElem,
						f = n.selectionRange;
					if (
						i !== c &&
						c &&
						c.ownerDocument &&
						is(c.ownerDocument.documentElement, c)
					) {
						if (f !== null && yi(c)) {
							var y = f.start,
								S = f.end;
							if ((S === void 0 && (S = y), "selectionStart" in c))
								((c.selectionStart = y),
									(c.selectionEnd = Math.min(S, c.value.length)));
							else {
								var z = c.ownerDocument || document,
									g = (z && z.defaultView) || window;
								if (g.getSelection) {
									var b = g.getSelection(),
										O = c.textContent.length,
										B = Math.min(f.start, O),
										ft = f.end === void 0 ? B : Math.min(f.end, O);
									!b.extend && B > ft && ((i = ft), (ft = B), (B = i));
									var r = ns(c, B),
										s = ns(c, ft);
									if (
										r &&
										s &&
										(b.rangeCount !== 1 ||
											b.anchorNode !== r.node ||
											b.anchorOffset !== r.offset ||
											b.focusNode !== s.node ||
											b.focusOffset !== s.offset)
									) {
										var h = z.createRange();
										(h.setStart(r.node, r.offset),
											b.removeAllRanges(),
											B > ft
												? (b.addRange(h), b.extend(s.node, s.offset))
												: (h.setEnd(s.node, s.offset), b.addRange(h)));
									}
								}
							}
						}
						for (z = [], b = c; (b = b.parentNode); )
							b.nodeType === 1 &&
								z.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
						for (
							typeof c.focus == "function" && c.focus(), c = 0;
							c < z.length;
							c++
						) {
							var p = z[c];
							((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
						}
					}
					((Bn = !!Vc), (Kc = Vc = null));
				} finally {
					((tt = u), (_.p = a), (x.T = e));
				}
			}
			((t.current = l), (Et = 2));
		}
	}
	function T0() {
		if (Et === 2) {
			Et = 0;
			var t = me,
				l = xa,
				e = (l.flags & 8772) !== 0;
			if ((l.subtreeFlags & 8772) !== 0 || e) {
				((e = x.T), (x.T = null));
				var a = _.p;
				_.p = 2;
				var u = tt;
				tt |= 4;
				try {
					$o(t, l.alternate, l);
				} finally {
					((tt = u), (_.p = a), (x.T = e));
				}
			}
			Et = 3;
		}
	}
	function E0() {
		if (Et === 4 || Et === 3) {
			((Et = 0), Xd());
			var t = me,
				l = xa,
				e = Jl,
				a = o0;
			(l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
				? (Et = 5)
				: ((Et = 0), (xa = me = null), A0(t, t.pendingLanes));
			var u = t.pendingLanes;
			if (
				(u === 0 && (re = null),
				$n(e),
				(l = l.stateNode),
				It && typeof It.onCommitFiberRoot == "function")
			)
				try {
					It.onCommitFiberRoot(Ma, l, void 0, (l.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				((l = x.T), (u = _.p), (_.p = 2), (x.T = null));
				try {
					for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
						var c = a[i];
						n(c.value, { componentStack: c.stack });
					}
				} finally {
					((x.T = l), (_.p = u));
				}
			}
			((Jl & 3) !== 0 && En(),
				jl(t),
				(u = t.pendingLanes),
				(e & 261930) !== 0 && (u & 42) !== 0
					? t === Dc
						? ou++
						: ((ou = 0), (Dc = t))
					: (ou = 0),
				du(0));
		}
	}
	function A0(t, l) {
		(t.pooledCacheLanes &= l) === 0 &&
			((l = t.pooledCache), l != null && ((t.pooledCache = null), Ka(l)));
	}
	function En() {
		return (z0(), T0(), E0(), N0());
	}
	function N0() {
		if (Et !== 5) return !1;
		var t = me,
			l = Mc;
		Mc = 0;
		var e = $n(Jl),
			a = x.T,
			u = _.p;
		try {
			((_.p = 32 > e ? 32 : e), (x.T = null), (e = Oc), (Oc = null));
			var n = me,
				i = Jl;
			if (((Et = 0), (xa = me = null), (Jl = 0), (tt & 6) !== 0))
				throw Error(d(331));
			var c = tt;
			if (
				((tt |= 4),
				c0(n.current),
				u0(n, n.current, i, e),
				(tt = c),
				du(0, !1),
				It && typeof It.onPostCommitFiberRoot == "function")
			)
				try {
					It.onPostCommitFiberRoot(Ma, n);
				} catch {}
			return !0;
		} finally {
			((_.p = u), (x.T = a), A0(t, l));
		}
	}
	function _0(t, l, e) {
		((l = dl(e, l)),
			(l = sc(t.stateNode, l, 2)),
			(t = ie(t, l, 2)),
			t !== null && (Da(t, 2), jl(t)));
	}
	function at(t, l, e) {
		if (t.tag === 3) _0(t, t, e);
		else
			for (; l !== null; ) {
				if (l.tag === 3) {
					_0(l, t, e);
					break;
				} else if (l.tag === 1) {
					var a = l.stateNode;
					if (
						typeof l.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(re === null || !re.has(a)))
					) {
						((t = dl(e, t)),
							(e = jo(2)),
							(a = ie(l, e, 2)),
							a !== null && (Mo(e, a, l, t), Da(a, 2), jl(a)));
						break;
					}
				}
				l = l.return;
			}
	}
	function Rc(t, l, e) {
		var a = t.pingCache;
		if (a === null) {
			a = t.pingCache = new rm();
			var u = new Set();
			a.set(l, u);
		} else ((u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u)));
		u.has(e) ||
			((Nc = !0), u.add(e), (t = gm.bind(null, t, l, e)), l.then(t, t));
	}
	function gm(t, l, e) {
		var a = t.pingCache;
		(a !== null && a.delete(l),
			(t.pingedLanes |= t.suspendedLanes & e),
			(t.warmLanes &= ~e),
			ot === t &&
				(J & e) === e &&
				(yt === 4 || (yt === 3 && (J & 62914560) === J && 300 > $t() - bn)
					? (tt & 2) === 0 && pa(t, 0)
					: (_c |= e),
				Sa === J && (Sa = 0)),
			jl(t));
	}
	function j0(t, l) {
		(l === 0 && (l = pf()), (t = Me(t, l)), t !== null && (Da(t, l), jl(t)));
	}
	function bm(t) {
		var l = t.memoizedState,
			e = 0;
		(l !== null && (e = l.retryLane), j0(t, e));
	}
	function Sm(t, l) {
		var e = 0;
		switch (t.tag) {
			case 31:
			case 13:
				var a = t.stateNode,
					u = t.memoizedState;
				u !== null && (e = u.retryLane);
				break;
			case 19:
				a = t.stateNode;
				break;
			case 22:
				a = t.stateNode._retryCache;
				break;
			default:
				throw Error(d(314));
		}
		(a !== null && a.delete(l), j0(t, e));
	}
	function xm(t, l) {
		return Jn(t, l);
	}
	var An = null,
		Ta = null,
		Cc = !1,
		Nn = !1,
		Bc = !1,
		ve = 0;
	function jl(t) {
		(t !== Ta &&
			t.next === null &&
			(Ta === null ? (An = Ta = t) : (Ta = Ta.next = t)),
			(Nn = !0),
			Cc || ((Cc = !0), zm()));
	}
	function du(t, l) {
		if (!Bc && Nn) {
			Bc = !0;
			do
				for (var e = !1, a = An; a !== null; ) {
					if (t !== 0) {
						var u = a.pendingLanes;
						if (u === 0) var n = 0;
						else {
							var i = a.suspendedLanes,
								c = a.pingedLanes;
							((n = (1 << (31 - Pt(42 | t) + 1)) - 1),
								(n &= u & ~(i & ~c)),
								(n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
						}
						n !== 0 && ((e = !0), U0(a, n));
					} else
						((n = J),
							(n = Mu(
								a,
								a === ot ? n : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							(n & 3) === 0 || Oa(a, n) || ((e = !0), U0(a, n)));
					a = a.next;
				}
			while (e);
			Bc = !1;
		}
	}
	function pm() {
		M0();
	}
	function M0() {
		Nn = Cc = !1;
		var t = 0;
		ve !== 0 && Um() && (t = ve);
		for (var l = $t(), e = null, a = An; a !== null; ) {
			var u = a.next,
				n = O0(a, l);
			(n === 0
				? ((a.next = null),
					e === null ? (An = u) : (e.next = u),
					u === null && (Ta = e))
				: ((e = a), (t !== 0 || (n & 3) !== 0) && (Nn = !0)),
				(a = u));
		}
		((Et !== 0 && Et !== 5) || du(t), ve !== 0 && (ve = 0));
	}
	function O0(t, l) {
		for (
			var e = t.suspendedLanes,
				a = t.pingedLanes,
				u = t.expirationTimes,
				n = t.pendingLanes & -62914561;
			0 < n;
		) {
			var i = 31 - Pt(n),
				c = 1 << i,
				f = u[i];
			(f === -1
				? ((c & e) === 0 || (c & a) !== 0) && (u[i] = kd(c, l))
				: f <= l && (t.expiredLanes |= c),
				(n &= ~c));
		}
		if (
			((l = ot),
			(e = J),
			(e = Mu(
				t,
				t === l ? e : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			(a = t.callbackNode),
			e === 0 ||
				(t === l && (et === 2 || et === 9)) ||
				t.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && kn(a),
				(t.callbackNode = null),
				(t.callbackPriority = 0)
			);
		if ((e & 3) === 0 || Oa(t, e)) {
			if (((l = e & -e), l === t.callbackPriority)) return l;
			switch ((a !== null && kn(a), $n(e))) {
				case 2:
				case 8:
					e = Sf;
					break;
				case 32:
					e = Au;
					break;
				case 268435456:
					e = xf;
					break;
				default:
					e = Au;
			}
			return (
				(a = D0.bind(null, t)),
				(e = Jn(e, a)),
				(t.callbackPriority = l),
				(t.callbackNode = e),
				l
			);
		}
		return (
			a !== null && a !== null && kn(a),
			(t.callbackPriority = 2),
			(t.callbackNode = null),
			2
		);
	}
	function D0(t, l) {
		if (Et !== 0 && Et !== 5)
			return ((t.callbackNode = null), (t.callbackPriority = 0), null);
		var e = t.callbackNode;
		if (En() && t.callbackNode !== e) return null;
		var a = J;
		return (
			(a = Mu(
				t,
				t === ot ? a : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (r0(t, a, l),
					O0(t, $t()),
					t.callbackNode != null && t.callbackNode === e
						? D0.bind(null, t)
						: null)
		);
	}
	function U0(t, l) {
		if (En()) return null;
		r0(t, l, !0);
	}
	function zm() {
		Rm(function () {
			(tt & 6) !== 0 ? Jn(bf, pm) : M0();
		});
	}
	function qc() {
		if (ve === 0) {
			var t = fa;
			(t === 0 && ((t = Nu), (Nu <<= 1), (Nu & 261888) === 0 && (Nu = 256)),
				(ve = t));
		}
		return ve;
	}
	function H0(t) {
		return t == null || typeof t == "symbol" || typeof t == "boolean"
			? null
			: typeof t == "function"
				? t
				: Hu("" + t);
	}
	function R0(t, l) {
		var e = l.ownerDocument.createElement("input");
		return (
			(e.name = l.name),
			(e.value = l.value),
			t.id && e.setAttribute("form", t.id),
			l.parentNode.insertBefore(e, l),
			(t = new FormData(t)),
			e.parentNode.removeChild(e),
			t
		);
	}
	function Tm(t, l, e, a, u) {
		if (l === "submit" && e && e.stateNode === u) {
			var n = H0((u[Zt] || null).action),
				i = a.submitter;
			i &&
				((l = (l = i[Zt] || null)
					? H0(l.formAction)
					: i.getAttribute("formAction")),
				l !== null && ((n = l), (i = null)));
			var c = new qu("action", "action", null, a, u);
			t.push({
				event: c,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (ve !== 0) {
									var f = i ? R0(u, i) : new FormData(u);
									ac(
										e,
										{ pending: !0, data: f, method: u.method, action: n },
										null,
										f,
									);
								}
							} else
								typeof n == "function" &&
									(c.preventDefault(),
									(f = i ? R0(u, i) : new FormData(u)),
									ac(
										e,
										{ pending: !0, data: f, method: u.method, action: n },
										n,
										f,
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var Yc = 0; Yc < xi.length; Yc++) {
		var Gc = xi[Yc],
			Em = Gc.toLowerCase(),
			Am = Gc[0].toUpperCase() + Gc.slice(1);
		Sl(Em, "on" + Am);
	}
	(Sl(os, "onAnimationEnd"),
		Sl(ds, "onAnimationIteration"),
		Sl(rs, "onAnimationStart"),
		Sl("dblclick", "onDoubleClick"),
		Sl("focusin", "onFocus"),
		Sl("focusout", "onBlur"),
		Sl(Qr, "onTransitionRun"),
		Sl(Lr, "onTransitionStart"),
		Sl(Zr, "onTransitionCancel"),
		Sl(ms, "onTransitionEnd"),
		ke("onMouseEnter", ["mouseout", "mouseover"]),
		ke("onMouseLeave", ["mouseout", "mouseover"]),
		ke("onPointerEnter", ["pointerout", "pointerover"]),
		ke("onPointerLeave", ["pointerout", "pointerover"]),
		Ae(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		Ae(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		Ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		Ae(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		Ae(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		Ae(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		));
	var ru =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Nm = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(ru),
		);
	function C0(t, l) {
		l = (l & 4) !== 0;
		for (var e = 0; e < t.length; e++) {
			var a = t[e],
				u = a.event;
			a = a.listeners;
			t: {
				var n = void 0;
				if (l)
					for (var i = a.length - 1; 0 <= i; i--) {
						var c = a[i],
							f = c.instance,
							y = c.currentTarget;
						if (((c = c.listener), f !== n && u.isPropagationStopped()))
							break t;
						((n = c), (u.currentTarget = y));
						try {
							n(u);
						} catch (S) {
							Xu(S);
						}
						((u.currentTarget = null), (n = f));
					}
				else
					for (i = 0; i < a.length; i++) {
						if (
							((c = a[i]),
							(f = c.instance),
							(y = c.currentTarget),
							(c = c.listener),
							f !== n && u.isPropagationStopped())
						)
							break t;
						((n = c), (u.currentTarget = y));
						try {
							n(u);
						} catch (S) {
							Xu(S);
						}
						((u.currentTarget = null), (n = f));
					}
			}
		}
	}
	function w(t, l) {
		var e = l[In];
		e === void 0 && (e = l[In] = new Set());
		var a = t + "__bubble";
		e.has(a) || (B0(l, t, 2, !1), e.add(a));
	}
	function Xc(t, l, e) {
		var a = 0;
		(l && (a |= 4), B0(e, t, a, l));
	}
	var _n = "_reactListening" + Math.random().toString(36).slice(2);
	function Qc(t) {
		if (!t[_n]) {
			((t[_n] = !0),
				jf.forEach(function (e) {
					e !== "selectionchange" && (Nm.has(e) || Xc(e, !1, t), Xc(e, !0, t));
				}));
			var l = t.nodeType === 9 ? t : t.ownerDocument;
			l === null || l[_n] || ((l[_n] = !0), Xc("selectionchange", !1, l));
		}
	}
	function B0(t, l, e, a) {
		switch (dd(l)) {
			case 2:
				var u = th;
				break;
			case 8:
				u = lh;
				break;
			default:
				u = ef;
		}
		((e = u.bind(null, l, e, t)),
			(u = void 0),
			!ci ||
				(l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
				(u = !0),
			a
				? u !== void 0
					? t.addEventListener(l, e, { capture: !0, passive: u })
					: t.addEventListener(l, e, !0)
				: u !== void 0
					? t.addEventListener(l, e, { passive: u })
					: t.addEventListener(l, e, !1));
	}
	function Lc(t, l, e, a, u) {
		var n = a;
		if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
			t: for (;;) {
				if (a === null) return;
				var i = a.tag;
				if (i === 3 || i === 4) {
					var c = a.stateNode.containerInfo;
					if (c === u) break;
					if (i === 4)
						for (i = a.return; i !== null; ) {
							var f = i.tag;
							if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
								return;
							i = i.return;
						}
					for (; c !== null; ) {
						if (((i = Ke(c)), i === null)) return;
						if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
							a = n = i;
							continue t;
						}
						c = c.parentNode;
					}
				}
				a = a.return;
			}
		Xf(function () {
			var y = n,
				S = ni(e),
				z = [];
			t: {
				var g = hs.get(t);
				if (g !== void 0) {
					var b = qu,
						O = t;
					switch (t) {
						case "keypress":
							if (Cu(e) === 0) break t;
						case "keydown":
						case "keyup":
							b = Sr;
							break;
						case "focusin":
							((O = "focus"), (b = di));
							break;
						case "focusout":
							((O = "blur"), (b = di));
							break;
						case "beforeblur":
						case "afterblur":
							b = di;
							break;
						case "click":
							if (e.button === 2) break t;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							b = Zf;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							b = cr;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							b = zr;
							break;
						case os:
						case ds:
						case rs:
							b = or;
							break;
						case ms:
							b = Er;
							break;
						case "scroll":
						case "scrollend":
							b = nr;
							break;
						case "wheel":
							b = Nr;
							break;
						case "copy":
						case "cut":
						case "paste":
							b = rr;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							b = Kf;
							break;
						case "toggle":
						case "beforetoggle":
							b = jr;
					}
					var B = (l & 4) !== 0,
						ft = !B && (t === "scroll" || t === "scrollend"),
						r = B ? (g !== null ? g + "Capture" : null) : g;
					B = [];
					for (var s = y, h; s !== null; ) {
						var p = s;
						if (
							((h = p.stateNode),
							(p = p.tag),
							(p !== 5 && p !== 26 && p !== 27) ||
								h === null ||
								r === null ||
								((p = Ra(s, r)), p != null && B.push(mu(s, p, h))),
							ft)
						)
							break;
						s = s.return;
					}
					0 < B.length &&
						((g = new b(g, O, null, e, S)), z.push({ event: g, listeners: B }));
				}
			}
			if ((l & 7) === 0) {
				t: {
					if (
						((g = t === "mouseover" || t === "pointerover"),
						(b = t === "mouseout" || t === "pointerout"),
						g &&
							e !== ui &&
							(O = e.relatedTarget || e.fromElement) &&
							(Ke(O) || O[Ve]))
					)
						break t;
					if (
						(b || g) &&
						((g =
							S.window === S
								? S
								: (g = S.ownerDocument)
									? g.defaultView || g.parentWindow
									: window),
						b
							? ((O = e.relatedTarget || e.toElement),
								(b = y),
								(O = O ? Ke(O) : null),
								O !== null &&
									((ft = Y(O)),
									(B = O.tag),
									O !== ft || (B !== 5 && B !== 27 && B !== 6)) &&
									(O = null))
							: ((b = null), (O = y)),
						b !== O)
					) {
						if (
							((B = Zf),
							(p = "onMouseLeave"),
							(r = "onMouseEnter"),
							(s = "mouse"),
							(t === "pointerout" || t === "pointerover") &&
								((B = Kf),
								(p = "onPointerLeave"),
								(r = "onPointerEnter"),
								(s = "pointer")),
							(ft = b == null ? g : Ha(b)),
							(h = O == null ? g : Ha(O)),
							(g = new B(p, s + "leave", b, e, S)),
							(g.target = ft),
							(g.relatedTarget = h),
							(p = null),
							Ke(S) === y &&
								((B = new B(r, s + "enter", O, e, S)),
								(B.target = h),
								(B.relatedTarget = ft),
								(p = B)),
							(ft = p),
							b && O)
						)
							l: {
								for (B = _m, r = b, s = O, h = 0, p = r; p; p = B(p)) h++;
								p = 0;
								for (var C = s; C; C = B(C)) p++;
								for (; 0 < h - p; ) ((r = B(r)), h--);
								for (; 0 < p - h; ) ((s = B(s)), p--);
								for (; h--; ) {
									if (r === s || (s !== null && r === s.alternate)) {
										B = r;
										break l;
									}
									((r = B(r)), (s = B(s)));
								}
								B = null;
							}
						else B = null;
						(b !== null && q0(z, g, b, B, !1),
							O !== null && ft !== null && q0(z, ft, O, B, !0));
					}
				}
				t: {
					if (
						((g = y ? Ha(y) : window),
						(b = g.nodeName && g.nodeName.toLowerCase()),
						b === "select" || (b === "input" && g.type === "file"))
					)
						var $ = Pf;
					else if ($f(g))
						if (ts) $ = Yr;
						else {
							$ = Br;
							var H = Cr;
						}
					else
						((b = g.nodeName),
							!b ||
							b.toLowerCase() !== "input" ||
							(g.type !== "checkbox" && g.type !== "radio")
								? y && ai(y.elementType) && ($ = Pf)
								: ($ = qr));
					if ($ && ($ = $(t, y))) {
						If(z, $, e, S);
						break t;
					}
					(H && H(t, g, y),
						t === "focusout" &&
							y &&
							g.type === "number" &&
							y.memoizedProps.value != null &&
							ei(g, "number", g.value));
				}
				switch (((H = y ? Ha(y) : window), t)) {
					case "focusin":
						($f(H) || H.contentEditable === "true") &&
							((ta = H), (gi = y), (La = null));
						break;
					case "focusout":
						La = gi = ta = null;
						break;
					case "mousedown":
						bi = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						((bi = !1), fs(z, e, S));
						break;
					case "selectionchange":
						if (Xr) break;
					case "keydown":
					case "keyup":
						fs(z, e, S);
				}
				var L;
				if (mi)
					t: {
						switch (t) {
							case "compositionstart":
								var k = "onCompositionStart";
								break t;
							case "compositionend":
								k = "onCompositionEnd";
								break t;
							case "compositionupdate":
								k = "onCompositionUpdate";
								break t;
						}
						k = void 0;
					}
				else
					Pe
						? Wf(t, e) && (k = "onCompositionEnd")
						: t === "keydown" &&
							e.keyCode === 229 &&
							(k = "onCompositionStart");
				(k &&
					(wf &&
						e.locale !== "ko" &&
						(Pe || k !== "onCompositionStart"
							? k === "onCompositionEnd" && Pe && (L = Qf())
							: ((Pl = S),
								(fi = "value" in Pl ? Pl.value : Pl.textContent),
								(Pe = !0))),
					(H = jn(y, k)),
					0 < H.length &&
						((k = new Vf(k, t, null, e, S)),
						z.push({ event: k, listeners: H }),
						L ? (k.data = L) : ((L = Ff(e)), L !== null && (k.data = L)))),
					(L = Or ? Dr(t, e) : Ur(t, e)) &&
						((k = jn(y, "onBeforeInput")),
						0 < k.length &&
							((H = new Vf("onBeforeInput", "beforeinput", null, e, S)),
							z.push({ event: H, listeners: k }),
							(H.data = L))),
					Tm(z, t, y, e, S));
			}
			C0(z, l);
		});
	}
	function mu(t, l, e) {
		return { instance: t, listener: l, currentTarget: e };
	}
	function jn(t, l) {
		for (var e = l + "Capture", a = []; t !== null; ) {
			var u = t,
				n = u.stateNode;
			if (
				((u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					n === null ||
					((u = Ra(t, e)),
					u != null && a.unshift(mu(t, u, n)),
					(u = Ra(t, l)),
					u != null && a.push(mu(t, u, n))),
				t.tag === 3)
			)
				return a;
			t = t.return;
		}
		return [];
	}
	function _m(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5 && t.tag !== 27);
		return t || null;
	}
	function q0(t, l, e, a, u) {
		for (var n = l._reactName, i = []; e !== null && e !== a; ) {
			var c = e,
				f = c.alternate,
				y = c.stateNode;
			if (((c = c.tag), f !== null && f === a)) break;
			((c !== 5 && c !== 26 && c !== 27) ||
				y === null ||
				((f = y),
				u
					? ((y = Ra(e, n)), y != null && i.unshift(mu(e, y, f)))
					: u || ((y = Ra(e, n)), y != null && i.push(mu(e, y, f)))),
				(e = e.return));
		}
		i.length !== 0 && t.push({ event: l, listeners: i });
	}
	var jm = /\r\n?/g,
		Mm = /\u0000|\uFFFD/g;
	function Y0(t) {
		return (typeof t == "string" ? t : "" + t)
			.replace(
				jm,
				`
`,
			)
			.replace(Mm, "");
	}
	function G0(t, l) {
		return ((l = Y0(l)), Y0(t) === l);
	}
	function ct(t, l, e, a, u, n) {
		switch (e) {
			case "children":
				typeof a == "string"
					? l === "body" || (l === "textarea" && a === "") || Fe(t, a)
					: (typeof a == "number" || typeof a == "bigint") &&
						l !== "body" &&
						Fe(t, "" + a);
				break;
			case "className":
				Du(t, "class", a);
				break;
			case "tabIndex":
				Du(t, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Du(t, e, a);
				break;
			case "style":
				Yf(t, a, n);
				break;
			case "data":
				if (l !== "object") {
					Du(t, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (l !== "a" || e !== "href")) {
					t.removeAttribute(e);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					t.removeAttribute(e);
					break;
				}
				((a = Hu("" + a)), t.setAttribute(e, a));
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					t.setAttribute(
						e,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof n == "function" &&
						(e === "formAction"
							? (l !== "input" && ct(t, l, "name", u.name, u, null),
								ct(t, l, "formEncType", u.formEncType, u, null),
								ct(t, l, "formMethod", u.formMethod, u, null),
								ct(t, l, "formTarget", u.formTarget, u, null))
							: (ct(t, l, "encType", u.encType, u, null),
								ct(t, l, "method", u.method, u, null),
								ct(t, l, "target", u.target, u, null)));
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					t.removeAttribute(e);
					break;
				}
				((a = Hu("" + a)), t.setAttribute(e, a));
				break;
			case "onClick":
				a != null && (t.onclick = Ul);
				break;
			case "onScroll":
				a != null && w("scroll", t);
				break;
			case "onScrollEnd":
				a != null && w("scrollend", t);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
					if (((e = a.__html), e != null)) {
						if (u.children != null) throw Error(d(60));
						t.innerHTML = e;
					}
				}
				break;
			case "multiple":
				t.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				t.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					t.removeAttribute("xlink:href");
					break;
				}
				((e = Hu("" + a)),
					t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? t.setAttribute(e, "" + a)
					: t.removeAttribute(e);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? t.setAttribute(e, "")
					: t.removeAttribute(e);
				break;
			case "capture":
			case "download":
				a === !0
					? t.setAttribute(e, "")
					: a !== !1 &&
						  a != null &&
						  typeof a != "function" &&
						  typeof a != "symbol"
						? t.setAttribute(e, a)
						: t.removeAttribute(e);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? t.setAttribute(e, a)
					: t.removeAttribute(e);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
					? t.removeAttribute(e)
					: t.setAttribute(e, a);
				break;
			case "popover":
				(w("beforetoggle", t), w("toggle", t), Ou(t, "popover", a));
				break;
			case "xlinkActuate":
				Dl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Dl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Dl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Dl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Dl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Dl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Dl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Dl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Dl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Ou(t, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < e.length) ||
					(e[0] !== "o" && e[0] !== "O") ||
					(e[1] !== "n" && e[1] !== "N")) &&
					((e = ar.get(e) || e), Ou(t, e, a));
		}
	}
	function Zc(t, l, e, a, u, n) {
		switch (e) {
			case "style":
				Yf(t, a, n);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
					if (((e = a.__html), e != null)) {
						if (u.children != null) throw Error(d(60));
						t.innerHTML = e;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? Fe(t, a)
					: (typeof a == "number" || typeof a == "bigint") && Fe(t, "" + a);
				break;
			case "onScroll":
				a != null && w("scroll", t);
				break;
			case "onScrollEnd":
				a != null && w("scrollend", t);
				break;
			case "onClick":
				a != null && (t.onclick = Ul);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Mf.hasOwnProperty(e))
					t: {
						if (
							e[0] === "o" &&
							e[1] === "n" &&
							((u = e.endsWith("Capture")),
							(l = e.slice(2, u ? e.length - 7 : void 0)),
							(n = t[Zt] || null),
							(n = n != null ? n[e] : null),
							typeof n == "function" && t.removeEventListener(l, n, u),
							typeof a == "function")
						) {
							(typeof n != "function" &&
								n !== null &&
								(e in t
									? (t[e] = null)
									: t.hasAttribute(e) && t.removeAttribute(e)),
								t.addEventListener(l, a, u));
							break t;
						}
						e in t
							? (t[e] = a)
							: a === !0
								? t.setAttribute(e, "")
								: Ou(t, e, a);
					}
		}
	}
	function Dt(t, l, e) {
		switch (l) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				(w("error", t), w("load", t));
				var a = !1,
					u = !1,
					n;
				for (n in e)
					if (e.hasOwnProperty(n)) {
						var i = e[n];
						if (i != null)
							switch (n) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(d(137, l));
								default:
									ct(t, l, n, i, e, null);
							}
					}
				(u && ct(t, l, "srcSet", e.srcSet, e, null),
					a && ct(t, l, "src", e.src, e, null));
				return;
			case "input":
				w("invalid", t);
				var c = (n = i = u = null),
					f = null,
					y = null;
				for (a in e)
					if (e.hasOwnProperty(a)) {
						var S = e[a];
						if (S != null)
							switch (a) {
								case "name":
									u = S;
									break;
								case "type":
									i = S;
									break;
								case "checked":
									f = S;
									break;
								case "defaultChecked":
									y = S;
									break;
								case "value":
									n = S;
									break;
								case "defaultValue":
									c = S;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (S != null) throw Error(d(137, l));
									break;
								default:
									ct(t, l, a, S, e, null);
							}
					}
				Rf(t, n, c, f, y, i, u, !1);
				return;
			case "select":
				(w("invalid", t), (a = i = n = null));
				for (u in e)
					if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
						switch (u) {
							case "value":
								n = c;
								break;
							case "defaultValue":
								i = c;
								break;
							case "multiple":
								a = c;
							default:
								ct(t, l, u, c, e, null);
						}
				((l = n),
					(e = i),
					(t.multiple = !!a),
					l != null ? We(t, !!a, l, !1) : e != null && We(t, !!a, e, !0));
				return;
			case "textarea":
				(w("invalid", t), (n = u = a = null));
				for (i in e)
					if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
						switch (i) {
							case "value":
								a = c;
								break;
							case "defaultValue":
								u = c;
								break;
							case "children":
								n = c;
								break;
							case "dangerouslySetInnerHTML":
								if (c != null) throw Error(d(91));
								break;
							default:
								ct(t, l, i, c, e, null);
						}
				Bf(t, a, u, n);
				return;
			case "option":
				for (f in e)
					if (e.hasOwnProperty(f) && ((a = e[f]), a != null))
						switch (f) {
							case "selected":
								t.selected =
									a && typeof a != "function" && typeof a != "symbol";
								break;
							default:
								ct(t, l, f, a, e, null);
						}
				return;
			case "dialog":
				(w("beforetoggle", t), w("toggle", t), w("cancel", t), w("close", t));
				break;
			case "iframe":
			case "object":
				w("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < ru.length; a++) w(ru[a], t);
				break;
			case "image":
				(w("error", t), w("load", t));
				break;
			case "details":
				w("toggle", t);
				break;
			case "embed":
			case "source":
			case "link":
				(w("error", t), w("load", t));
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (y in e)
					if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
						switch (y) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(d(137, l));
							default:
								ct(t, l, y, a, e, null);
						}
				return;
			default:
				if (ai(l)) {
					for (S in e)
						e.hasOwnProperty(S) &&
							((a = e[S]), a !== void 0 && Zc(t, l, S, a, e, void 0));
					return;
				}
		}
		for (c in e)
			e.hasOwnProperty(c) && ((a = e[c]), a != null && ct(t, l, c, a, e, null));
	}
	function Om(t, l, e, a) {
		switch (l) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var u = null,
					n = null,
					i = null,
					c = null,
					f = null,
					y = null,
					S = null;
				for (b in e) {
					var z = e[b];
					if (e.hasOwnProperty(b) && z != null)
						switch (b) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								f = z;
							default:
								a.hasOwnProperty(b) || ct(t, l, b, null, a, z);
						}
				}
				for (var g in a) {
					var b = a[g];
					if (((z = e[g]), a.hasOwnProperty(g) && (b != null || z != null)))
						switch (g) {
							case "type":
								n = b;
								break;
							case "name":
								u = b;
								break;
							case "checked":
								y = b;
								break;
							case "defaultChecked":
								S = b;
								break;
							case "value":
								i = b;
								break;
							case "defaultValue":
								c = b;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (b != null) throw Error(d(137, l));
								break;
							default:
								b !== z && ct(t, l, g, b, a, z);
						}
				}
				li(t, i, c, f, y, S, n, u);
				return;
			case "select":
				b = i = c = g = null;
				for (n in e)
					if (((f = e[n]), e.hasOwnProperty(n) && f != null))
						switch (n) {
							case "value":
								break;
							case "multiple":
								b = f;
							default:
								a.hasOwnProperty(n) || ct(t, l, n, null, a, f);
						}
				for (u in a)
					if (
						((n = a[u]),
						(f = e[u]),
						a.hasOwnProperty(u) && (n != null || f != null))
					)
						switch (u) {
							case "value":
								g = n;
								break;
							case "defaultValue":
								c = n;
								break;
							case "multiple":
								i = n;
							default:
								n !== f && ct(t, l, u, n, a, f);
						}
				((l = c),
					(e = i),
					(a = b),
					g != null
						? We(t, !!e, g, !1)
						: !!a != !!e &&
							(l != null ? We(t, !!e, l, !0) : We(t, !!e, e ? [] : "", !1)));
				return;
			case "textarea":
				b = g = null;
				for (c in e)
					if (
						((u = e[c]),
						e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
					)
						switch (c) {
							case "value":
								break;
							case "children":
								break;
							default:
								ct(t, l, c, null, a, u);
						}
				for (i in a)
					if (
						((u = a[i]),
						(n = e[i]),
						a.hasOwnProperty(i) && (u != null || n != null))
					)
						switch (i) {
							case "value":
								g = u;
								break;
							case "defaultValue":
								b = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(d(91));
								break;
							default:
								u !== n && ct(t, l, i, u, a, n);
						}
				Cf(t, g, b);
				return;
			case "option":
				for (var O in e)
					if (
						((g = e[O]),
						e.hasOwnProperty(O) && g != null && !a.hasOwnProperty(O))
					)
						switch (O) {
							case "selected":
								t.selected = !1;
								break;
							default:
								ct(t, l, O, null, a, g);
						}
				for (f in a)
					if (
						((g = a[f]),
						(b = e[f]),
						a.hasOwnProperty(f) && g !== b && (g != null || b != null))
					)
						switch (f) {
							case "selected":
								t.selected =
									g && typeof g != "function" && typeof g != "symbol";
								break;
							default:
								ct(t, l, f, g, a, b);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var B in e)
					((g = e[B]),
						e.hasOwnProperty(B) &&
							g != null &&
							!a.hasOwnProperty(B) &&
							ct(t, l, B, null, a, g));
				for (y in a)
					if (
						((g = a[y]),
						(b = e[y]),
						a.hasOwnProperty(y) && g !== b && (g != null || b != null))
					)
						switch (y) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (g != null) throw Error(d(137, l));
								break;
							default:
								ct(t, l, y, g, a, b);
						}
				return;
			default:
				if (ai(l)) {
					for (var ft in e)
						((g = e[ft]),
							e.hasOwnProperty(ft) &&
								g !== void 0 &&
								!a.hasOwnProperty(ft) &&
								Zc(t, l, ft, void 0, a, g));
					for (S in a)
						((g = a[S]),
							(b = e[S]),
							!a.hasOwnProperty(S) ||
								g === b ||
								(g === void 0 && b === void 0) ||
								Zc(t, l, S, g, a, b));
					return;
				}
		}
		for (var r in e)
			((g = e[r]),
				e.hasOwnProperty(r) &&
					g != null &&
					!a.hasOwnProperty(r) &&
					ct(t, l, r, null, a, g));
		for (z in a)
			((g = a[z]),
				(b = e[z]),
				!a.hasOwnProperty(z) ||
					g === b ||
					(g == null && b == null) ||
					ct(t, l, z, g, a, b));
	}
	function X0(t) {
		switch (t) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1;
		}
	}
	function Dm() {
		if (typeof performance.getEntriesByType == "function") {
			for (
				var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0;
				a < e.length;
				a++
			) {
				var u = e[a],
					n = u.transferSize,
					i = u.initiatorType,
					c = u.duration;
				if (n && c && X0(i)) {
					for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
						var f = e[a],
							y = f.startTime;
						if (y > c) break;
						var S = f.transferSize,
							z = f.initiatorType;
						S &&
							X0(z) &&
							((f = f.responseEnd), (i += S * (f < c ? 1 : (c - y) / (f - y))));
					}
					if ((--a, (l += (8 * (n + i)) / (u.duration / 1e3)), t++, 10 < t))
						break;
				}
			}
			if (0 < t) return l / t / 1e6;
		}
		return navigator.connection &&
			((t = navigator.connection.downlink), typeof t == "number")
			? t
			: 5;
	}
	var Vc = null,
		Kc = null;
	function Mn(t) {
		return t.nodeType === 9 ? t : t.ownerDocument;
	}
	function Q0(t) {
		switch (t) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function L0(t, l) {
		if (t === 0)
			switch (l) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return t === 1 && l === "foreignObject" ? 0 : t;
	}
	function wc(t, l) {
		return (
			t === "textarea" ||
			t === "noscript" ||
			typeof l.children == "string" ||
			typeof l.children == "number" ||
			typeof l.children == "bigint" ||
			(typeof l.dangerouslySetInnerHTML == "object" &&
				l.dangerouslySetInnerHTML !== null &&
				l.dangerouslySetInnerHTML.__html != null)
		);
	}
	var Jc = null;
	function Um() {
		var t = window.event;
		return t && t.type === "popstate"
			? t === Jc
				? !1
				: ((Jc = t), !0)
			: ((Jc = null), !1);
	}
	var Z0 = typeof setTimeout == "function" ? setTimeout : void 0,
		Hm = typeof clearTimeout == "function" ? clearTimeout : void 0,
		V0 = typeof Promise == "function" ? Promise : void 0,
		Rm =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof V0 < "u"
					? function (t) {
							return V0.resolve(null).then(t).catch(Cm);
						}
					: Z0;
	function Cm(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function ye(t) {
		return t === "head";
	}
	function K0(t, l) {
		var e = l,
			a = 0;
		do {
			var u = e.nextSibling;
			if ((t.removeChild(e), u && u.nodeType === 8))
				if (((e = u.data), e === "/$" || e === "/&")) {
					if (a === 0) {
						(t.removeChild(u), _a(l));
						return;
					}
					a--;
				} else if (
					e === "$" ||
					e === "$?" ||
					e === "$~" ||
					e === "$!" ||
					e === "&"
				)
					a++;
				else if (e === "html") hu(t.ownerDocument.documentElement);
				else if (e === "head") {
					((e = t.ownerDocument.head), hu(e));
					for (var n = e.firstChild; n; ) {
						var i = n.nextSibling,
							c = n.nodeName;
						(n[Ua] ||
							c === "SCRIPT" ||
							c === "STYLE" ||
							(c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
							e.removeChild(n),
							(n = i));
					}
				} else e === "body" && hu(t.ownerDocument.body);
			e = u;
		} while (e);
		_a(l);
	}
	function w0(t, l) {
		var e = t;
		t = 0;
		do {
			var a = e.nextSibling;
			if (
				(e.nodeType === 1
					? l
						? ((e._stashedDisplay = e.style.display),
							(e.style.display = "none"))
						: ((e.style.display = e._stashedDisplay || ""),
							e.getAttribute("style") === "" && e.removeAttribute("style"))
					: e.nodeType === 3 &&
						(l
							? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
							: (e.nodeValue = e._stashedText || "")),
				a && a.nodeType === 8)
			)
				if (((e = a.data), e === "/$")) {
					if (t === 0) break;
					t--;
				} else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || t++;
			e = a;
		} while (e);
	}
	function kc(t) {
		var l = t.firstChild;
		for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
			var e = l;
			switch (((l = l.nextSibling), e.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					(kc(e), Pn(e));
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (e.rel.toLowerCase() === "stylesheet") continue;
			}
			t.removeChild(e);
		}
	}
	function Bm(t, l, e, a) {
		for (; t.nodeType === 1; ) {
			var u = e;
			if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
				if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
			} else if (a) {
				if (!t[Ua])
					switch (l) {
						case "meta":
							if (!t.hasAttribute("itemprop")) break;
							return t;
						case "link":
							if (
								((n = t.getAttribute("rel")),
								n === "stylesheet" && t.hasAttribute("data-precedence"))
							)
								break;
							if (
								n !== u.rel ||
								t.getAttribute("href") !==
									(u.href == null || u.href === "" ? null : u.href) ||
								t.getAttribute("crossorigin") !==
									(u.crossOrigin == null ? null : u.crossOrigin) ||
								t.getAttribute("title") !== (u.title == null ? null : u.title)
							)
								break;
							return t;
						case "style":
							if (t.hasAttribute("data-precedence")) break;
							return t;
						case "script":
							if (
								((n = t.getAttribute("src")),
								(n !== (u.src == null ? null : u.src) ||
									t.getAttribute("type") !== (u.type == null ? null : u.type) ||
									t.getAttribute("crossorigin") !==
										(u.crossOrigin == null ? null : u.crossOrigin)) &&
									n &&
									t.hasAttribute("async") &&
									!t.hasAttribute("itemprop"))
							)
								break;
							return t;
						default:
							return t;
					}
			} else if (l === "input" && t.type === "hidden") {
				var n = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && t.getAttribute("name") === n) return t;
			} else return t;
			if (((t = yl(t.nextSibling)), t === null)) break;
		}
		return null;
	}
	function qm(t, l, e) {
		if (l === "") return null;
		for (; t.nodeType !== 3; )
			if (
				((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
					!e) ||
				((t = yl(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function J0(t, l) {
		for (; t.nodeType !== 8; )
			if (
				((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
					!l) ||
				((t = yl(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function Wc(t) {
		return t.data === "$?" || t.data === "$~";
	}
	function Fc(t) {
		return (
			t.data === "$!" ||
			(t.data === "$?" && t.ownerDocument.readyState !== "loading")
		);
	}
	function Ym(t, l) {
		var e = t.ownerDocument;
		if (t.data === "$~") t._reactRetry = l;
		else if (t.data !== "$?" || e.readyState !== "loading") l();
		else {
			var a = function () {
				(l(), e.removeEventListener("DOMContentLoaded", a));
			};
			(e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
		}
	}
	function yl(t) {
		for (; t != null; t = t.nextSibling) {
			var l = t.nodeType;
			if (l === 1 || l === 3) break;
			if (l === 8) {
				if (
					((l = t.data),
					l === "$" ||
						l === "$!" ||
						l === "$?" ||
						l === "$~" ||
						l === "&" ||
						l === "F!" ||
						l === "F")
				)
					break;
				if (l === "/$" || l === "/&") return null;
			}
		}
		return t;
	}
	var $c = null;
	function k0(t) {
		t = t.nextSibling;
		for (var l = 0; t; ) {
			if (t.nodeType === 8) {
				var e = t.data;
				if (e === "/$" || e === "/&") {
					if (l === 0) return yl(t.nextSibling);
					l--;
				} else
					(e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
						l++;
			}
			t = t.nextSibling;
		}
		return null;
	}
	function W0(t) {
		t = t.previousSibling;
		for (var l = 0; t; ) {
			if (t.nodeType === 8) {
				var e = t.data;
				if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
					if (l === 0) return t;
					l--;
				} else (e !== "/$" && e !== "/&") || l++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	function F0(t, l, e) {
		switch (((l = Mn(e)), t)) {
			case "html":
				if (((t = l.documentElement), !t)) throw Error(d(452));
				return t;
			case "head":
				if (((t = l.head), !t)) throw Error(d(453));
				return t;
			case "body":
				if (((t = l.body), !t)) throw Error(d(454));
				return t;
			default:
				throw Error(d(451));
		}
	}
	function hu(t) {
		for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
		Pn(t);
	}
	var gl = new Map(),
		$0 = new Set();
	function On(t) {
		return typeof t.getRootNode == "function"
			? t.getRootNode()
			: t.nodeType === 9
				? t
				: t.ownerDocument;
	}
	var kl = _.d;
	_.d = { f: Gm, r: Xm, D: Qm, C: Lm, L: Zm, m: Vm, X: wm, S: Km, M: Jm };
	function Gm() {
		var t = kl.f(),
			l = pn();
		return t || l;
	}
	function Xm(t) {
		var l = we(t);
		l !== null && l.tag === 5 && l.type === "form" ? ho(l) : kl.r(t);
	}
	var Ea = typeof document > "u" ? null : document;
	function I0(t, l, e) {
		var a = Ea;
		if (a && typeof l == "string" && l) {
			var u = sl(l);
			((u = 'link[rel="' + t + '"][href="' + u + '"]'),
				typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
				$0.has(u) ||
					($0.add(u),
					(t = { rel: t, crossOrigin: e, href: l }),
					a.querySelector(u) === null &&
						((l = a.createElement("link")),
						Dt(l, "link", t),
						At(l),
						a.head.appendChild(l))));
		}
	}
	function Qm(t) {
		(kl.D(t), I0("dns-prefetch", t, null));
	}
	function Lm(t, l) {
		(kl.C(t, l), I0("preconnect", t, l));
	}
	function Zm(t, l, e) {
		kl.L(t, l, e);
		var a = Ea;
		if (a && t && l) {
			var u = 'link[rel="preload"][as="' + sl(l) + '"]';
			l === "image" && e && e.imageSrcSet
				? ((u += '[imagesrcset="' + sl(e.imageSrcSet) + '"]'),
					typeof e.imageSizes == "string" &&
						(u += '[imagesizes="' + sl(e.imageSizes) + '"]'))
				: (u += '[href="' + sl(t) + '"]');
			var n = u;
			switch (l) {
				case "style":
					n = Aa(t);
					break;
				case "script":
					n = Na(t);
			}
			gl.has(n) ||
				((t = R(
					{
						rel: "preload",
						href: l === "image" && e && e.imageSrcSet ? void 0 : t,
						as: l,
					},
					e,
				)),
				gl.set(n, t),
				a.querySelector(u) !== null ||
					(l === "style" && a.querySelector(vu(n))) ||
					(l === "script" && a.querySelector(yu(n))) ||
					((l = a.createElement("link")),
					Dt(l, "link", t),
					At(l),
					a.head.appendChild(l)));
		}
	}
	function Vm(t, l) {
		kl.m(t, l);
		var e = Ea;
		if (e && t) {
			var a = l && typeof l.as == "string" ? l.as : "script",
				u =
					'link[rel="modulepreload"][as="' + sl(a) + '"][href="' + sl(t) + '"]',
				n = u;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = Na(t);
			}
			if (
				!gl.has(n) &&
				((t = R({ rel: "modulepreload", href: t }, l)),
				gl.set(n, t),
				e.querySelector(u) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (e.querySelector(yu(n))) return;
				}
				((a = e.createElement("link")),
					Dt(a, "link", t),
					At(a),
					e.head.appendChild(a));
			}
		}
	}
	function Km(t, l, e) {
		kl.S(t, l, e);
		var a = Ea;
		if (a && t) {
			var u = Je(a).hoistableStyles,
				n = Aa(t);
			l = l || "default";
			var i = u.get(n);
			if (!i) {
				var c = { loading: 0, preload: null };
				if ((i = a.querySelector(vu(n)))) c.loading = 5;
				else {
					((t = R({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
						(e = gl.get(n)) && Ic(t, e));
					var f = (i = a.createElement("link"));
					(At(f),
						Dt(f, "link", t),
						(f._p = new Promise(function (y, S) {
							((f.onload = y), (f.onerror = S));
						})),
						f.addEventListener("load", function () {
							c.loading |= 1;
						}),
						f.addEventListener("error", function () {
							c.loading |= 2;
						}),
						(c.loading |= 4),
						Dn(i, l, a));
				}
				((i = { type: "stylesheet", instance: i, count: 1, state: c }),
					u.set(n, i));
			}
		}
	}
	function wm(t, l) {
		kl.X(t, l);
		var e = Ea;
		if (e && t) {
			var a = Je(e).hoistableScripts,
				u = Na(t),
				n = a.get(u);
			n ||
				((n = e.querySelector(yu(u))),
				n ||
					((t = R({ src: t, async: !0 }, l)),
					(l = gl.get(u)) && Pc(t, l),
					(n = e.createElement("script")),
					At(n),
					Dt(n, "link", t),
					e.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function Jm(t, l) {
		kl.M(t, l);
		var e = Ea;
		if (e && t) {
			var a = Je(e).hoistableScripts,
				u = Na(t),
				n = a.get(u);
			n ||
				((n = e.querySelector(yu(u))),
				n ||
					((t = R({ src: t, async: !0, type: "module" }, l)),
					(l = gl.get(u)) && Pc(t, l),
					(n = e.createElement("script")),
					At(n),
					Dt(n, "link", t),
					e.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function P0(t, l, e, a) {
		var u = (u = V.current) ? On(u) : null;
		if (!u) throw Error(d(446));
		switch (t) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof e.precedence == "string" && typeof e.href == "string"
					? ((l = Aa(e.href)),
						(e = Je(u).hoistableStyles),
						(a = e.get(l)),
						a ||
							((a = { type: "style", instance: null, count: 0, state: null }),
							e.set(l, a)),
						a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					e.rel === "stylesheet" &&
					typeof e.href == "string" &&
					typeof e.precedence == "string"
				) {
					t = Aa(e.href);
					var n = Je(u).hoistableStyles,
						i = n.get(t);
					if (
						(i ||
							((u = u.ownerDocument || u),
							(i = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(t, i),
							(n = u.querySelector(vu(t))) &&
								!n._p &&
								((i.instance = n), (i.state.loading = 5)),
							gl.has(t) ||
								((e = {
									rel: "preload",
									as: "style",
									href: e.href,
									crossOrigin: e.crossOrigin,
									integrity: e.integrity,
									media: e.media,
									hrefLang: e.hrefLang,
									referrerPolicy: e.referrerPolicy,
								}),
								gl.set(t, e),
								n || km(u, t, e, i.state))),
						l && a === null)
					)
						throw Error(d(528, ""));
					return i;
				}
				if (l && a !== null) throw Error(d(529, ""));
				return null;
			case "script":
				return (
					(l = e.async),
					(e = e.src),
					typeof e == "string" &&
					l &&
					typeof l != "function" &&
					typeof l != "symbol"
						? ((l = Na(e)),
							(e = Je(u).hoistableScripts),
							(a = e.get(l)),
							a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								e.set(l, a)),
							a)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(d(444, t));
		}
	}
	function Aa(t) {
		return 'href="' + sl(t) + '"';
	}
	function vu(t) {
		return 'link[rel="stylesheet"][' + t + "]";
	}
	function td(t) {
		return R({}, t, { "data-precedence": t.precedence, precedence: null });
	}
	function km(t, l, e, a) {
		t.querySelector('link[rel="preload"][as="style"][' + l + "]")
			? (a.loading = 1)
			: ((l = t.createElement("link")),
				(a.preload = l),
				l.addEventListener("load", function () {
					return (a.loading |= 1);
				}),
				l.addEventListener("error", function () {
					return (a.loading |= 2);
				}),
				Dt(l, "link", e),
				At(l),
				t.head.appendChild(l));
	}
	function Na(t) {
		return '[src="' + sl(t) + '"]';
	}
	function yu(t) {
		return "script[async]" + t;
	}
	function ld(t, l, e) {
		if ((l.count++, l.instance === null))
			switch (l.type) {
				case "style":
					var a = t.querySelector('style[data-href~="' + sl(e.href) + '"]');
					if (a) return ((l.instance = a), At(a), a);
					var u = R({}, e, {
						"data-href": e.href,
						"data-precedence": e.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (t.ownerDocument || t).createElement("style")),
						At(a),
						Dt(a, "style", u),
						Dn(a, e.precedence, t),
						(l.instance = a)
					);
				case "stylesheet":
					u = Aa(e.href);
					var n = t.querySelector(vu(u));
					if (n) return ((l.state.loading |= 4), (l.instance = n), At(n), n);
					((a = td(e)),
						(u = gl.get(u)) && Ic(a, u),
						(n = (t.ownerDocument || t).createElement("link")),
						At(n));
					var i = n;
					return (
						(i._p = new Promise(function (c, f) {
							((i.onload = c), (i.onerror = f));
						})),
						Dt(n, "link", a),
						(l.state.loading |= 4),
						Dn(n, e.precedence, t),
						(l.instance = n)
					);
				case "script":
					return (
						(n = Na(e.src)),
						(u = t.querySelector(yu(n)))
							? ((l.instance = u), At(u), u)
							: ((a = e),
								(u = gl.get(n)) && ((a = R({}, e)), Pc(a, u)),
								(t = t.ownerDocument || t),
								(u = t.createElement("script")),
								At(u),
								Dt(u, "link", a),
								t.head.appendChild(u),
								(l.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(d(443, l.type));
			}
		else
			l.type === "stylesheet" &&
				(l.state.loading & 4) === 0 &&
				((a = l.instance), (l.state.loading |= 4), Dn(a, e.precedence, t));
		return l.instance;
	}
	function Dn(t, l, e) {
		for (
			var a = e.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				u = a.length ? a[a.length - 1] : null,
				n = u,
				i = 0;
			i < a.length;
			i++
		) {
			var c = a[i];
			if (c.dataset.precedence === l) n = c;
			else if (n !== u) break;
		}
		n
			? n.parentNode.insertBefore(t, n.nextSibling)
			: ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
	}
	function Ic(t, l) {
		(t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
			t.title == null && (t.title = l.title));
	}
	function Pc(t, l) {
		(t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
			t.integrity == null && (t.integrity = l.integrity));
	}
	var Un = null;
	function ed(t, l, e) {
		if (Un === null) {
			var a = new Map(),
				u = (Un = new Map());
			u.set(e, a);
		} else ((u = Un), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
		if (a.has(t)) return a;
		for (
			a.set(t, null), e = e.getElementsByTagName(t), u = 0;
			u < e.length;
			u++
		) {
			var n = e[u];
			if (
				!(
					n[Ua] ||
					n[_t] ||
					(t === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var i = n.getAttribute(l) || "";
				i = t + i;
				var c = a.get(i);
				c ? c.push(n) : a.set(i, [n]);
			}
		}
		return a;
	}
	function ad(t, l, e) {
		((t = t.ownerDocument || t),
			t.head.insertBefore(
				e,
				l === "title" ? t.querySelector("head > title") : null,
			));
	}
	function Wm(t, l, e) {
		if (e === 1 || l.itemProp != null) return !1;
		switch (t) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof l.precedence != "string" ||
					typeof l.href != "string" ||
					l.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof l.rel != "string" ||
					typeof l.href != "string" ||
					l.href === "" ||
					l.onLoad ||
					l.onError
				)
					break;
				switch (l.rel) {
					case "stylesheet":
						return (
							(t = l.disabled),
							typeof l.precedence == "string" && t == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					l.async &&
					typeof l.async != "function" &&
					typeof l.async != "symbol" &&
					!l.onLoad &&
					!l.onError &&
					l.src &&
					typeof l.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function ud(t) {
		return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
	}
	function Fm(t, l, e, a) {
		if (
			e.type === "stylesheet" &&
			(typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
			(e.state.loading & 4) === 0
		) {
			if (e.instance === null) {
				var u = Aa(a.href),
					n = l.querySelector(vu(u));
				if (n) {
					((l = n._p),
						l !== null &&
							typeof l == "object" &&
							typeof l.then == "function" &&
							(t.count++, (t = Hn.bind(t)), l.then(t, t)),
						(e.state.loading |= 4),
						(e.instance = n),
						At(n));
					return;
				}
				((n = l.ownerDocument || l),
					(a = td(a)),
					(u = gl.get(u)) && Ic(a, u),
					(n = n.createElement("link")),
					At(n));
				var i = n;
				((i._p = new Promise(function (c, f) {
					((i.onload = c), (i.onerror = f));
				})),
					Dt(n, "link", a),
					(e.instance = n));
			}
			(t.stylesheets === null && (t.stylesheets = new Map()),
				t.stylesheets.set(e, l),
				(l = e.state.preload) &&
					(e.state.loading & 3) === 0 &&
					(t.count++,
					(e = Hn.bind(t)),
					l.addEventListener("load", e),
					l.addEventListener("error", e)));
		}
	}
	var tf = 0;
	function $m(t, l) {
		return (
			t.stylesheets && t.count === 0 && Cn(t, t.stylesheets),
			0 < t.count || 0 < t.imgCount
				? function (e) {
						var a = setTimeout(function () {
							if ((t.stylesheets && Cn(t, t.stylesheets), t.unsuspend)) {
								var n = t.unsuspend;
								((t.unsuspend = null), n());
							}
						}, 6e4 + l);
						0 < t.imgBytes && tf === 0 && (tf = 62500 * Dm());
						var u = setTimeout(
							function () {
								if (
									((t.waitingForImages = !1),
									t.count === 0 &&
										(t.stylesheets && Cn(t, t.stylesheets), t.unsuspend))
								) {
									var n = t.unsuspend;
									((t.unsuspend = null), n());
								}
							},
							(t.imgBytes > tf ? 50 : 800) + l,
						);
						return (
							(t.unsuspend = e),
							function () {
								((t.unsuspend = null), clearTimeout(a), clearTimeout(u));
							}
						);
					}
				: null
		);
	}
	function Hn() {
		if (
			(this.count--,
			this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
		) {
			if (this.stylesheets) Cn(this, this.stylesheets);
			else if (this.unsuspend) {
				var t = this.unsuspend;
				((this.unsuspend = null), t());
			}
		}
	}
	var Rn = null;
	function Cn(t, l) {
		((t.stylesheets = null),
			t.unsuspend !== null &&
				(t.count++,
				(Rn = new Map()),
				l.forEach(Im, t),
				(Rn = null),
				Hn.call(t)));
	}
	function Im(t, l) {
		if (!(l.state.loading & 4)) {
			var e = Rn.get(t);
			if (e) var a = e.get(null);
			else {
				((e = new Map()), Rn.set(t, e));
				for (
					var u = t.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						n = 0;
					n < u.length;
					n++
				) {
					var i = u[n];
					(i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
						(e.set(i.dataset.precedence, i), (a = i));
				}
				a && e.set(null, a);
			}
			((u = l.instance),
				(i = u.getAttribute("data-precedence")),
				(n = e.get(i) || a),
				n === a && e.set(null, u),
				e.set(i, u),
				this.count++,
				(a = Hn.bind(this)),
				u.addEventListener("load", a),
				u.addEventListener("error", a),
				n
					? n.parentNode.insertBefore(u, n.nextSibling)
					: ((t = t.nodeType === 9 ? t.head : t),
						t.insertBefore(u, t.firstChild)),
				(l.state.loading |= 4));
		}
	}
	var gu = {
		$$typeof: Ct,
		Provider: null,
		Consumer: null,
		_currentValue: q,
		_currentValue2: q,
		_threadCount: 0,
	};
	function Pm(t, l, e, a, u, n, i, c, f) {
		((this.tag = 1),
			(this.containerInfo = t),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Wn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Wn(0)),
			(this.hiddenUpdates = Wn(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = i),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = f),
			(this.incompleteTransitions = new Map()));
	}
	function nd(t, l, e, a, u, n, i, c, f, y, S, z) {
		return (
			(t = new Pm(t, l, e, i, f, y, S, z, c)),
			(l = 1),
			n === !0 && (l |= 24),
			(n = ll(3, null, null, l)),
			(t.current = n),
			(n.stateNode = t),
			(l = Hi()),
			l.refCount++,
			(t.pooledCache = l),
			l.refCount++,
			(n.memoizedState = { element: a, isDehydrated: e, cache: l }),
			qi(n),
			t
		);
	}
	function id(t) {
		return t ? ((t = aa), t) : aa;
	}
	function cd(t, l, e, a, u, n) {
		((u = id(u)),
			a.context === null ? (a.context = u) : (a.pendingContext = u),
			(a = ne(l)),
			(a.payload = { element: e }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(e = ie(t, a, l)),
			e !== null && (Wt(e, t, l), Wa(e, t, l)));
	}
	function fd(t, l) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var e = t.retryLane;
			t.retryLane = e !== 0 && e < l ? e : l;
		}
	}
	function lf(t, l) {
		(fd(t, l), (t = t.alternate) && fd(t, l));
	}
	function sd(t) {
		if (t.tag === 13 || t.tag === 31) {
			var l = Me(t, 67108864);
			(l !== null && Wt(l, t, 67108864), lf(t, 67108864));
		}
	}
	function od(t) {
		if (t.tag === 13 || t.tag === 31) {
			var l = il();
			l = Fn(l);
			var e = Me(t, l);
			(e !== null && Wt(e, t, l), lf(t, l));
		}
	}
	var Bn = !0;
	function th(t, l, e, a) {
		var u = x.T;
		x.T = null;
		var n = _.p;
		try {
			((_.p = 2), ef(t, l, e, a));
		} finally {
			((_.p = n), (x.T = u));
		}
	}
	function lh(t, l, e, a) {
		var u = x.T;
		x.T = null;
		var n = _.p;
		try {
			((_.p = 8), ef(t, l, e, a));
		} finally {
			((_.p = n), (x.T = u));
		}
	}
	function ef(t, l, e, a) {
		if (Bn) {
			var u = af(a);
			if (u === null) (Lc(t, l, a, qn, e), rd(t, a));
			else if (ah(u, t, l, e, a)) a.stopPropagation();
			else if ((rd(t, a), l & 4 && -1 < eh.indexOf(t))) {
				for (; u !== null; ) {
					var n = we(u);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
									var i = Ee(n.pendingLanes);
									if (i !== 0) {
										var c = n;
										for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
											var f = 1 << (31 - Pt(i));
											((c.entanglements[1] |= f), (i &= ~f));
										}
										(jl(n), (tt & 6) === 0 && ((Sn = $t() + 500), du(0)));
									}
								}
								break;
							case 31:
							case 13:
								((c = Me(n, 2)), c !== null && Wt(c, n, 2), pn(), lf(n, 2));
						}
					if (((n = af(a)), n === null && Lc(t, l, a, qn, e), n === u)) break;
					u = n;
				}
				u !== null && a.stopPropagation();
			} else Lc(t, l, a, null, e);
		}
	}
	function af(t) {
		return ((t = ni(t)), uf(t));
	}
	var qn = null;
	function uf(t) {
		if (((qn = null), (t = Ke(t)), t !== null)) {
			var l = Y(t);
			if (l === null) t = null;
			else {
				var e = l.tag;
				if (e === 13) {
					if (((t = P(l)), t !== null)) return t;
					t = null;
				} else if (e === 31) {
					if (((t = dt(l)), t !== null)) return t;
					t = null;
				} else if (e === 3) {
					if (l.stateNode.current.memoizedState.isDehydrated)
						return l.tag === 3 ? l.stateNode.containerInfo : null;
					t = null;
				} else l !== t && (t = null);
			}
		}
		return ((qn = t), null);
	}
	function dd(t) {
		switch (t) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (Qd()) {
					case bf:
						return 2;
					case Sf:
						return 8;
					case Au:
					case Ld:
						return 32;
					case xf:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var nf = !1,
		ge = null,
		be = null,
		Se = null,
		bu = new Map(),
		Su = new Map(),
		xe = [],
		eh =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function rd(t, l) {
		switch (t) {
			case "focusin":
			case "focusout":
				ge = null;
				break;
			case "dragenter":
			case "dragleave":
				be = null;
				break;
			case "mouseover":
			case "mouseout":
				Se = null;
				break;
			case "pointerover":
			case "pointerout":
				bu.delete(l.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Su.delete(l.pointerId);
		}
	}
	function xu(t, l, e, a, u, n) {
		return t === null || t.nativeEvent !== n
			? ((t = {
					blockedOn: l,
					domEventName: e,
					eventSystemFlags: a,
					nativeEvent: n,
					targetContainers: [u],
				}),
				l !== null && ((l = we(l)), l !== null && sd(l)),
				t)
			: ((t.eventSystemFlags |= a),
				(l = t.targetContainers),
				u !== null && l.indexOf(u) === -1 && l.push(u),
				t);
	}
	function ah(t, l, e, a, u) {
		switch (l) {
			case "focusin":
				return ((ge = xu(ge, t, l, e, a, u)), !0);
			case "dragenter":
				return ((be = xu(be, t, l, e, a, u)), !0);
			case "mouseover":
				return ((Se = xu(Se, t, l, e, a, u)), !0);
			case "pointerover":
				var n = u.pointerId;
				return (bu.set(n, xu(bu.get(n) || null, t, l, e, a, u)), !0);
			case "gotpointercapture":
				return (
					(n = u.pointerId),
					Su.set(n, xu(Su.get(n) || null, t, l, e, a, u)),
					!0
				);
		}
		return !1;
	}
	function md(t) {
		var l = Ke(t.target);
		if (l !== null) {
			var e = Y(l);
			if (e !== null) {
				if (((l = e.tag), l === 13)) {
					if (((l = P(e)), l !== null)) {
						((t.blockedOn = l),
							Nf(t.priority, function () {
								od(e);
							}));
						return;
					}
				} else if (l === 31) {
					if (((l = dt(e)), l !== null)) {
						((t.blockedOn = l),
							Nf(t.priority, function () {
								od(e);
							}));
						return;
					}
				} else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function Yn(t) {
		if (t.blockedOn !== null) return !1;
		for (var l = t.targetContainers; 0 < l.length; ) {
			var e = af(t.nativeEvent);
			if (e === null) {
				e = t.nativeEvent;
				var a = new e.constructor(e.type, e);
				((ui = a), e.target.dispatchEvent(a), (ui = null));
			} else return ((l = we(e)), l !== null && sd(l), (t.blockedOn = e), !1);
			l.shift();
		}
		return !0;
	}
	function hd(t, l, e) {
		Yn(t) && e.delete(l);
	}
	function uh() {
		((nf = !1),
			ge !== null && Yn(ge) && (ge = null),
			be !== null && Yn(be) && (be = null),
			Se !== null && Yn(Se) && (Se = null),
			bu.forEach(hd),
			Su.forEach(hd));
	}
	function Gn(t, l) {
		t.blockedOn === l &&
			((t.blockedOn = null),
			nf ||
				((nf = !0),
				v.unstable_scheduleCallback(v.unstable_NormalPriority, uh)));
	}
	var Xn = null;
	function vd(t) {
		Xn !== t &&
			((Xn = t),
			v.unstable_scheduleCallback(v.unstable_NormalPriority, function () {
				Xn === t && (Xn = null);
				for (var l = 0; l < t.length; l += 3) {
					var e = t[l],
						a = t[l + 1],
						u = t[l + 2];
					if (typeof a != "function") {
						if (uf(a || e) === null) continue;
						break;
					}
					var n = we(e);
					n !== null &&
						(t.splice(l, 3),
						(l -= 3),
						ac(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
				}
			}));
	}
	function _a(t) {
		function l(f) {
			return Gn(f, t);
		}
		(ge !== null && Gn(ge, t),
			be !== null && Gn(be, t),
			Se !== null && Gn(Se, t),
			bu.forEach(l),
			Su.forEach(l));
		for (var e = 0; e < xe.length; e++) {
			var a = xe[e];
			a.blockedOn === t && (a.blockedOn = null);
		}
		for (; 0 < xe.length && ((e = xe[0]), e.blockedOn === null); )
			(md(e), e.blockedOn === null && xe.shift());
		if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
			for (a = 0; a < e.length; a += 3) {
				var u = e[a],
					n = e[a + 1],
					i = u[Zt] || null;
				if (typeof n == "function") i || vd(e);
				else if (i) {
					var c = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (i = n[Zt] || null))) c = i.formAction;
						else if (uf(u) !== null) continue;
					} else c = i.action;
					(typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
						vd(e));
				}
			}
	}
	function yd() {
		function t(n) {
			n.canIntercept &&
				n.info === "react-transition" &&
				n.intercept({
					handler: function () {
						return new Promise(function (i) {
							return (u = i);
						});
					},
					focusReset: "manual",
					scroll: "manual",
				});
		}
		function l() {
			(u !== null && (u(), (u = null)), a || setTimeout(e, 20));
		}
		function e() {
			if (!a && !navigation.transition) {
				var n = navigation.currentEntry;
				n &&
					n.url != null &&
					navigation.navigate(n.url, {
						state: n.getState(),
						info: "react-transition",
						history: "replace",
					});
			}
		}
		if (typeof navigation == "object") {
			var a = !1,
				u = null;
			return (
				navigation.addEventListener("navigate", t),
				navigation.addEventListener("navigatesuccess", l),
				navigation.addEventListener("navigateerror", l),
				setTimeout(e, 100),
				function () {
					((a = !0),
						navigation.removeEventListener("navigate", t),
						navigation.removeEventListener("navigatesuccess", l),
						navigation.removeEventListener("navigateerror", l),
						u !== null && (u(), (u = null)));
				}
			);
		}
	}
	function cf(t) {
		this._internalRoot = t;
	}
	((Qn.prototype.render = cf.prototype.render =
		function (t) {
			var l = this._internalRoot;
			if (l === null) throw Error(d(409));
			var e = l.current,
				a = il();
			cd(e, a, t, l, null, null);
		}),
		(Qn.prototype.unmount = cf.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var l = t.containerInfo;
					(cd(t.current, 2, null, t, null, null), pn(), (l[Ve] = null));
				}
			}));
	function Qn(t) {
		this._internalRoot = t;
	}
	Qn.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var l = Af();
			t = { blockedOn: null, target: t, priority: l };
			for (var e = 0; e < xe.length && l !== 0 && l < xe[e].priority; e++);
			(xe.splice(e, 0, t), e === 0 && md(t));
		}
	};
	var gd = A.version;
	if (gd !== "19.2.4") throw Error(d(527, gd, "19.2.4"));
	_.findDOMNode = function (t) {
		var l = t._reactInternals;
		if (l === void 0)
			throw typeof t.render == "function"
				? Error(d(188))
				: ((t = Object.keys(t).join(",")), Error(d(268, t)));
		return (
			(t = E(l)),
			(t = t !== null ? Z(t) : null),
			(t = t === null ? null : t.stateNode),
			t
		);
	};
	var nh = {
		bundleType: 0,
		version: "19.2.4",
		rendererPackageName: "react-dom",
		currentDispatcherRef: x,
		reconcilerVersion: "19.2.4",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Ln = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Ln.isDisabled && Ln.supportsFiber)
			try {
				((Ma = Ln.inject(nh)), (It = Ln));
			} catch {}
	}
	return (
		(zu.createRoot = function (t, l) {
			if (!D(t)) throw Error(d(299));
			var e = !1,
				a = "",
				u = Eo,
				n = Ao,
				i = No;
			return (
				l != null &&
					(l.unstable_strictMode === !0 && (e = !0),
					l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
					l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
					l.onCaughtError !== void 0 && (n = l.onCaughtError),
					l.onRecoverableError !== void 0 && (i = l.onRecoverableError)),
				(l = nd(t, 1, !1, null, null, e, a, null, u, n, i, yd)),
				(t[Ve] = l.current),
				Qc(t),
				new cf(l)
			);
		}),
		(zu.hydrateRoot = function (t, l, e) {
			if (!D(t)) throw Error(d(299));
			var a = !1,
				u = "",
				n = Eo,
				i = Ao,
				c = No,
				f = null;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (a = !0),
					e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
					e.onCaughtError !== void 0 && (i = e.onCaughtError),
					e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
					e.formState !== void 0 && (f = e.formState)),
				(l = nd(t, 1, !0, l, e ?? null, a, u, f, n, i, c, yd)),
				(l.context = id(null)),
				(e = l.current),
				(a = il()),
				(a = Fn(a)),
				(u = ne(a)),
				(u.callback = null),
				ie(e, u, a),
				(e = a),
				(l.current.lanes = e),
				Da(l, e),
				jl(l),
				(t[Ve] = l.current),
				Qc(t),
				new Qn(l)
			);
		}),
		(zu.version = "19.2.4"),
		zu
	);
}
var _d;
function yh() {
	if (_d) return of.exports;
	_d = 1;
	function v() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
			} catch (A) {
				console.error(A);
			}
	}
	return (v(), (of.exports = vh()), of.exports);
}
var gh = yh();
const bh = jd(gh),
	Sh = ({ activeSection: v, toggleTheme: A, theme: N }) => {
		const d = [
			{ name: "Home", href: "#home" },
			{ name: "About", href: "#about" },
			{ name: "Work", href: "#experience" },
			{ name: "Projects", href: "#projects" },
			{ name: "Skills", href: "#skills" },
			{ name: "Contact", href: "#contact" },
		];
		return m.jsxs("nav", {
			className:
				"fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto flex items-center gap-3",
			children: [
				m.jsx("div", {
					className:
						"glass px-2 py-2 rounded-2xl shadow-xl shadow-stone-200/40 dark:shadow-black/20 flex items-center justify-center gap-1 md:gap-2 overflow-x-auto no-scrollbar",
					children: d.map((D) =>
						m.jsx(
							"a",
							{
								href: D.href,
								className: `px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium whitespace-nowrap ${v === D.href.slice(1) ? "bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 shadow-md" : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/50 dark:hover:bg-white/5"}`,
								children: D.name,
							},
							D.name,
						),
					),
				}),
				m.jsx("button", {
					onClick: A,
					className:
						"p-3 rounded-2xl glass shadow-xl shadow-stone-200/40 dark:shadow-black/20 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-all duration-300",
					"aria-label": "Toggle Theme",
					children:
						N === "light"
							? m.jsx("svg", {
									className: "w-5 h-5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									children: m.jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2,
										d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
									}),
								})
							: m.jsx("svg", {
									className: "w-5 h-5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									children: m.jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2,
										d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
									}),
								}),
				}),
			],
		});
	},
	Le = {
		name: "Suman Basnet",
		title: "Next.js & React Developer",
		email: "sumanbasnet054@gmail.com",
		github: "https://github.com/Suman-Basnet",
		linkedin: "https://linkedin.com/in/Suman-Basnet",
		about:
			"A forward-thinking Next.js Developer specialized in building high-performance, SEO-optimized web applications. I bridge the gap between complex backend logic and fluid frontend experiences using the modern React ecosystem, including React Native for cross-platform mobile solutions. I leverage advanced AI agents and LLMs to drastically increase development velocity and maintain high code quality.",
	},
	xh = [
		{
			id: "exp-1",
			role: "Frontend Developer",
			company: "Intosoft Pvt Ltd",
			duration: "Feb 2024 - Present",
			responsibilities: [
				"Architecting scalable frontend solutions using Next.js App Router and Server Components.",
				"Optimizing Core Web Vitals and implementing advanced SEO strategies for SaaS products.",
				"Integrating AI-driven features to enhance user interactions and automate workflows.",
				"Mentoring junior interns on modern Next.js patterns and AI-assisted development.",
			],
		},
		{
			id: "exp-2",
			role: "Frontend Developer Intern",
			company: "Intosoft Pvt Ltd",
			duration: "Nov 2023 - Feb 2024",
			responsibilities: [
				"Assisted in building responsive dashboards using React and Styled Components.",
				"Integrated REST APIs and managed application state using Redux.",
				"Participated in agile ceremonies and code reviews.",
				"Contributed to bug fixes and UI enhancements across multiple client projects.",
			],
		},
	],
	ph = [
		{
			id: "p-1",
			title: "Escape Plan",
			category: "Industrial",
			description:
				"Developed user-friendly interfaces for a SaaS platform enabling clients to upload building drawings and manage fire escape plans. Implemented multi-user roles, job listings, and Stripe integration.",
			tags: ["Next.js", "Styled Components", "Redux", "Formik", "Stripe"],
		},
		{
			id: "p-2",
			title: "Energy Fix",
			category: "Industrial",
			description:
				"Designed dynamic user interfaces for managing home energy retrofit projects. Enhanced form functionality for SEAI grant funding applications with robust validation.",
			tags: ["Next.js", "Redux", "Formik", "Yup", "Axios"],
		},
		{
			id: "p-3",
			title: "House Build",
			category: "Industrial",
			description:
				"Built intuitive interfaces for homeowners and professionals to manage construction projects, mortgages, and insurance. Integrated product discovery and professional service booking.",
			tags: ["React", "Styled Components", "Redux", "Formik"],
		},
		{
			id: "p-4",
			title: "Student Easypay",
			category: "College",
			description:
				"A secure platform for easy payment processing of college fees and result analysis, helping students track academic performance through insightful visualizations.",
			tags: ["Next.js", "Node.js", "Chart.js", "Express"],
		},
		{
			id: "p-5",
			title: "GEOMEDLINK",
			category: "College",
			description:
				"Mobile application for booking ambulances and locating nearby health institutes. Includes real-time tracking via Firebase and a social feed for health updates.",
			tags: ["React Native", "Firebase", "Google Maps API"],
		},
	],
	zh = [
		{
			name: "Frameworks & Core",
			skills: [
				"Next.js (App Router)",
				"React",
				"React Native",
				"TypeScript",
				"Tailwind CSS",
			],
		},
		{
			name: "AI & Development Velocity",
			skills: [
				"AI Agent Workflows",
				"Prompt Engineering",
				"Cursor / v0 Expertise",
				"Copilot Optimization",
				"Rapid Prototyping",
			],
		},
		{
			name: "Tools & Libraries",
			skills: [
				"Redux Toolkit",
				"React Query",
				"Formik / Yup",
				"Axios",
				"Git",
				"Figma",
			],
		},
		{
			name: "Soft Skills",
			skills: [
				"Problem Solving",
				"Team Collaboration",
				"Communication",
				"Time Management",
			],
		},
	],
	Th = [
		{
			institution: "Lalitpur Engineering College",
			degree: "Bachelor of Computer Engineering",
			duration: "2019 - 2024",
			location: "Chakupat, Patan, Lalitpur",
		},
		{
			institution: "Triton International College",
			degree: "High School (Science)",
			duration: "2016 - 2019",
			location: "Subhidhanagar, Tinkune",
		},
	],
	Eh = () =>
		m.jsx("section", {
			id: "home",
			className:
				"min-h-screen flex flex-col justify-center items-center text-center section-padding",
			children: m.jsxs("div", {
				className:
					"space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000",
				children: [
					m.jsx("div", {
						className:
							"inline-block px-4 py-1.5 bg-stone-200/50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 rounded-full text-xs font-bold uppercase tracking-widest border border-stone-300/30 dark:border-stone-700/30",
						children: "Next.js & React Specialist",
					}),
					m.jsxs("h1", {
						className:
							"text-6xl md:text-8xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1]",
						children: [
							"I'm ",
							m.jsx("span", { className: "text-gradient", children: Le.name }),
						],
					}),
					m.jsxs("p", {
						className:
							"text-xl md:text-2xl font-light text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto",
						children: [
							"Building high-velocity digital products with ",
							m.jsx("span", {
								className:
									"text-stone-800 dark:text-stone-200 font-medium italic",
								children: "Next.js",
							}),
							", ",
							m.jsx("span", {
								className:
									"text-stone-800 dark:text-stone-200 font-medium italic",
								children: "React Native",
							}),
							", and ",
							m.jsx("span", {
								className:
									"text-stone-800 dark:text-stone-200 font-medium italic",
								children: "AI-driven workflows",
							}),
							".",
						],
					}),
					m.jsxs("div", {
						className:
							"flex flex-col sm:flex-row items-center justify-center gap-5 pt-10",
						children: [
							m.jsx("a", {
								href: "#projects",
								className:
									"px-10 py-4 bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 rounded-full font-bold shadow-lg shadow-stone-400/20 dark:shadow-black/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95",
								children: "Explore Projects",
							}),
							m.jsx("a", {
								href: "#contact",
								className:
									"px-10 py-4 bg-[#faf9f6] dark:bg-stone-800/40 text-stone-900 dark:text-stone-200 border border-stone-200 dark:border-stone-700/50 rounded-full font-bold hover:bg-white dark:hover:bg-stone-800/60 hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300",
								children: "Start Conversation",
							}),
						],
					}),
				],
			}),
		}),
	Ah = () =>
		m.jsx("section", {
			id: "about",
			className: "section-padding",
			children: m.jsxs("div", {
				className: "grid lg:grid-cols-2 gap-16 lg:gap-32 items-center",
				children: [
					m.jsxs("div", {
						className: "space-y-8",
						children: [
							m.jsxs("div", {
								className: "space-y-2",
								children: [
									m.jsx("span", {
										className:
											"text-xs font-bold text-stone-400 uppercase tracking-[0.2em]",
										children: "The Professional",
									}),
									m.jsx("h2", {
										className:
											"text-4xl font-bold text-stone-900 dark:text-stone-50",
										children: "My Philosophy",
									}),
								],
							}),
							m.jsx("p", {
								className:
									"text-xl text-stone-500 dark:text-stone-400 leading-relaxed font-light",
								children: Le.about,
							}),
							m.jsxs("div", {
								className: "flex items-center gap-10 pt-4",
								children: [
									m.jsxs("div", {
										children: [
											m.jsx("span", {
												className:
													"block text-4xl font-bold text-stone-900 dark:text-stone-50",
												children: "1.5+",
											}),
											m.jsx("span", {
												className:
													"text-xs font-bold text-stone-400 uppercase tracking-widest mt-1 block",
												children: "Years of Craft",
											}),
										],
									}),
									m.jsx("div", {
										className: "w-[1px] h-14 bg-stone-200 dark:bg-stone-800",
									}),
									m.jsxs("div", {
										children: [
											m.jsx("span", {
												className:
													"block text-4xl font-bold text-stone-900 dark:text-stone-50",
												children: "5+",
											}),
											m.jsx("span", {
												className:
													"text-xs font-bold text-stone-400 uppercase tracking-widest mt-1 block",
												children: "Impactful Projects",
											}),
										],
									}),
								],
							}),
						],
					}),
					m.jsxs("div", {
						className:
							"bg-[#faf9f6] dark:bg-stone-800/40 rounded-[2.5rem] p-10 lg:p-12 border border-stone-200/60 dark:border-stone-700/30 shadow-xl shadow-stone-200/40 dark:shadow-black/20 space-y-10",
						children: [
							m.jsx("h3", {
								className:
									"text-xl font-bold text-stone-800 dark:text-stone-200 border-b border-stone-100 dark:border-stone-700 pb-6",
								children: "Academic Foundation",
							}),
							m.jsx("div", {
								className: "space-y-10",
								children: Th.map((v, A) =>
									m.jsxs(
										"div",
										{
											className:
												"relative pl-8 border-l border-stone-200 dark:border-stone-700 last:border-0 pb-2",
											children: [
												m.jsx("div", {
													className:
														"absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600",
												}),
												m.jsx("h4", {
													className:
														"font-bold text-stone-900 dark:text-stone-100 text-lg",
													children: v.degree,
												}),
												m.jsx("p", {
													className: "text-stone-500 dark:text-stone-400 mt-1",
													children: v.institution,
												}),
												m.jsx("div", {
													className: "flex justify-between items-center mt-3",
													children: m.jsx("span", {
														className:
															"text-xs text-stone-400 dark:text-stone-500 italic font-light",
														children: v.location,
													}),
												}),
											],
										},
										A,
									),
								),
							}),
						],
					}),
				],
			}),
		}),
	Nh = () =>
		m.jsx("section", {
			id: "experience",
			className: "section-padding",
			children: m.jsxs("div", {
				className: "max-w-4xl mx-auto space-y-16",
				children: [
					m.jsxs("div", {
						className: "text-center space-y-4",
						children: [
							m.jsx("span", {
								className:
									"text-xs font-bold text-stone-400 uppercase tracking-[0.2em]",
								children: "Career Timeline",
							}),
							m.jsx("h2", {
								className:
									"text-4xl font-bold text-stone-900 dark:text-stone-50",
								children: "Professional Experience",
							}),
							m.jsx("p", {
								className:
									"text-stone-500 dark:text-stone-400 text-lg font-light",
								children: "My evolution in the software development industry.",
							}),
						],
					}),
					m.jsx("div", {
						className: "space-y-10",
						children: xh.map((v) =>
							m.jsxs(
								"div",
								{
									className:
										"bg-[#faf9f6] dark:bg-stone-800/40 rounded-[2.5rem] p-8 md:p-12 border border-stone-200/60 dark:border-stone-700/30 shadow-lg shadow-stone-200/30 dark:shadow-black/20 hover:shadow-xl hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-500 group",
									children: [
										m.jsxs("div", {
											className:
												"flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8",
											children: [
												m.jsxs("div", {
													children: [
														m.jsx("h3", {
															className:
																"text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2",
															children: v.role,
														}),
														m.jsxs("div", {
															className: "flex items-center gap-3",
															children: [
																m.jsx("span", {
																	className:
																		"text-stone-600 dark:text-stone-300 font-semibold",
																	children: v.company,
																}),
																m.jsx("span", {
																	className:
																		"w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600",
																}),
																m.jsx("span", {
																	className:
																		"text-stone-400 dark:text-stone-500 font-medium text-sm",
																	children: v.duration,
																}),
															],
														}),
													],
												}),
												m.jsx("div", {
													className:
														"px-4 py-1.5 bg-[#f2f0ea] dark:bg-stone-900/50 text-stone-500 dark:text-stone-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-stone-200/50 dark:border-stone-700/50",
													children: "Engineering",
												}),
											],
										}),
										m.jsx("ul", {
											className: "grid gap-4",
											children: v.responsibilities.map((A, N) =>
												m.jsxs(
													"li",
													{
														className:
															"flex items-start gap-4 text-stone-500 dark:text-stone-400 leading-relaxed text-lg font-light",
														children: [
															m.jsx("span", {
																className:
																	"mt-2.5 w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600 flex-shrink-0 group-hover:bg-stone-500 dark:group-hover:bg-stone-300 transition-colors",
															}),
															A,
														],
													},
													N,
												),
											),
										}),
									],
								},
								v.id,
							),
						),
					}),
				],
			}),
		}),
	_h = () => {
		const [v, A] = Wl.useState("All"),
			N = ph.filter((d) => v === "All" || d.category === v);
		return m.jsx("section", {
			id: "projects",
			className: "section-padding",
			children: m.jsxs("div", {
				className: "space-y-16",
				children: [
					m.jsxs("div", {
						className:
							"flex flex-col md:flex-row md:items-end justify-between gap-8",
						children: [
							m.jsxs("div", {
								className: "space-y-3",
								children: [
									m.jsx("span", {
										className:
											"text-xs font-bold text-stone-400 uppercase tracking-[0.2em]",
										children: "Portfolio",
									}),
									m.jsx("h2", {
										className:
											"text-4xl font-bold text-stone-900 dark:text-stone-50",
										children: "Featured Creations",
									}),
									m.jsx("p", {
										className:
											"text-stone-500 dark:text-stone-400 text-lg font-light",
										children:
											"A bridge between industrial efficiency and academic curiosity.",
									}),
								],
							}),
							m.jsx("div", {
								className:
									"flex bg-stone-200/50 dark:bg-stone-800/50 p-1.5 rounded-2xl w-fit",
								children: ["All", "Industrial", "College"].map((d) =>
									m.jsx(
										"button",
										{
											onClick: () => A(d),
											className: `px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${v === d ? "bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 shadow-md" : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"}`,
											children: d,
										},
										d,
									),
								),
							}),
						],
					}),
					m.jsx("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: N.map((d) =>
							m.jsxs(
								"div",
								{
									className:
										"group bg-[#faf9f6] dark:bg-stone-800/40 rounded-[2rem] p-8 border border-stone-200/60 dark:border-stone-700/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full",
									children: [
										m.jsxs("div", {
											className: "mb-6 flex items-center justify-between",
											children: [
												m.jsx("span", {
													className: `px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${d.category === "Industrial" ? "bg-[#e3e8d8] dark:bg-emerald-900/20 text-[#4d5b3d] dark:text-emerald-400 border-[#4d5b3d]/10" : "bg-[#f5e6d3] dark:bg-amber-900/20 text-[#8c6b4d] dark:text-amber-400 border-[#8c6b4d]/10"}`,
													children: d.category,
												}),
												m.jsx("div", {
													className:
														"w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-[#2d2d2a] dark:group-hover:bg-stone-100",
													children: m.jsx("svg", {
														className:
															"w-5 h-5 text-stone-400 dark:text-stone-500 group-hover:text-white dark:group-hover:text-stone-900 transition-colors",
														fill: "none",
														viewBox: "0 0 24 24",
														stroke: "currentColor",
														children: m.jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M14 5l7 7m0 0l-7 7m7-7H3",
														}),
													}),
												}),
											],
										}),
										m.jsx("h3", {
											className:
												"text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors leading-snug",
											children: d.title,
										}),
										m.jsx("p", {
											className:
												"text-stone-500 dark:text-stone-400 text-base leading-relaxed font-light mb-8 flex-grow",
											children: d.description,
										}),
										m.jsx("div", {
											className: "flex flex-wrap gap-2 mt-auto",
											children: d.tags.map((D) =>
												m.jsx(
													"span",
													{
														className:
															"px-3 py-1 bg-[#f2f0ea] dark:bg-stone-900/50 text-stone-500 dark:text-stone-400 text-[11px] rounded-lg font-bold border border-stone-200/50 dark:border-stone-700/50 uppercase tracking-wider",
														children: D,
													},
													D,
												),
											),
										}),
									],
								},
								d.id,
							),
						),
					}),
				],
			}),
		});
	},
	jh = () =>
		m.jsx("section", {
			id: "skills",
			className: "section-padding",
			children: m.jsxs("div", {
				className: "max-w-5xl mx-auto space-y-16",
				children: [
					m.jsxs("div", {
						className: "text-center space-y-4",
						children: [
							m.jsx("span", {
								className:
									"text-xs font-bold text-stone-400 uppercase tracking-[0.2em]",
								children: "Competencies",
							}),
							m.jsx("h2", {
								className:
									"text-4xl font-bold text-stone-900 dark:text-stone-50",
								children: "Technical Arsenal",
							}),
							m.jsx("p", {
								className:
									"text-stone-500 dark:text-stone-400 text-lg font-light",
								children:
									"Specialized tools and languages I leverage to solve complex problems.",
							}),
						],
					}),
					m.jsx("div", {
						className: "grid sm:grid-cols-2 gap-10",
						children: zh.map((v) =>
							m.jsxs(
								"div",
								{
									className:
										"space-y-6 p-10 rounded-[2.5rem] bg-[#faf9f6] dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-700/30 shadow-lg shadow-stone-200/20 dark:shadow-black/20",
									children: [
										m.jsx("h3", {
											className:
												"text-xs font-bold text-stone-400 uppercase tracking-[0.2em]",
											children: v.name,
										}),
										m.jsx("div", {
											className: "flex flex-wrap gap-4",
											children: v.skills.map((A) =>
												m.jsxs(
													"div",
													{
														className:
															"px-5 py-2.5 bg-[#f2f0ea] dark:bg-stone-900/50 hover:bg-[#2d2d2a] dark:hover:bg-stone-100 text-stone-700 dark:text-stone-300 hover:text-[#f2f0ea] dark:hover:text-stone-900 rounded-2xl text-sm font-bold border border-stone-200 dark:border-stone-700 transition-all duration-300 flex items-center gap-3 group",
														children: [
															m.jsx("span", {
																className:
																	"w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600 group-hover:bg-stone-500 dark:group-hover:bg-stone-400 transition-colors",
															}),
															A,
														],
													},
													A,
												),
											),
										}),
									],
								},
								v.name,
							),
						),
					}),
				],
			}),
		});
class Tu {
	constructor(A = 0, N = "Network Error") {
		((this.status = A), (this.text = N));
	}
}
const Mh = () => {
		if (!(typeof localStorage > "u"))
			return {
				get: (v) => Promise.resolve(localStorage.getItem(v)),
				set: (v, A) => Promise.resolve(localStorage.setItem(v, A)),
				remove: (v) => Promise.resolve(localStorage.removeItem(v)),
			};
	},
	Ut = {
		origin: "https://api.emailjs.com",
		blockHeadless: !1,
		storageProvider: Mh(),
	},
	vf = (v) =>
		v
			? typeof v == "string"
				? { publicKey: v }
				: v.toString() === "[object Object]"
					? v
					: {}
			: {},
	Oh = (v, A = "https://api.emailjs.com") => {
		if (!v) return;
		const N = vf(v);
		((Ut.publicKey = N.publicKey),
			(Ut.blockHeadless = N.blockHeadless),
			(Ut.storageProvider = N.storageProvider),
			(Ut.blockList = N.blockList),
			(Ut.limitRate = N.limitRate),
			(Ut.origin = N.origin || A));
	},
	Md = async (v, A, N = {}) => {
		const d = await fetch(Ut.origin + v, {
				method: "POST",
				headers: N,
				body: A,
			}),
			D = await d.text(),
			Y = new Tu(d.status, D);
		if (d.ok) return Y;
		throw Y;
	},
	Od = (v, A, N) => {
		if (!v || typeof v != "string")
			throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
		if (!A || typeof A != "string")
			throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
		if (!N || typeof N != "string")
			throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
	},
	Dh = (v) => {
		if (v && v.toString() !== "[object Object]")
			throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
	},
	Dd = (v) => v.webdriver || !v.languages || v.languages.length === 0,
	Ud = () => new Tu(451, "Unavailable For Headless Browser"),
	Uh = (v, A) => {
		if (!Array.isArray(v)) throw "The BlockList list has to be an array";
		if (typeof A != "string")
			throw "The BlockList watchVariable has to be a string";
	},
	Hh = (v) => {
		var A;
		return !((A = v.list) != null && A.length) || !v.watchVariable;
	},
	Rh = (v, A) => (v instanceof FormData ? v.get(A) : v[A]),
	Hd = (v, A) => {
		if (Hh(v)) return !1;
		Uh(v.list, v.watchVariable);
		const N = Rh(A, v.watchVariable);
		return typeof N != "string" ? !1 : v.list.includes(N);
	},
	Rd = () => new Tu(403, "Forbidden"),
	Ch = (v, A) => {
		if (typeof v != "number" || v < 0)
			throw "The LimitRate throttle has to be a positive number";
		if (A && typeof A != "string")
			throw "The LimitRate ID has to be a non-empty string";
	},
	Bh = async (v, A, N) => {
		const d = Number((await N.get(v)) || 0);
		return A - Date.now() + d;
	},
	Cd = async (v, A, N) => {
		if (!A.throttle || !N) return !1;
		Ch(A.throttle, A.id);
		const d = A.id || v;
		return (await Bh(d, A.throttle, N)) > 0
			? !0
			: (await N.set(d, Date.now().toString()), !1);
	},
	Bd = () => new Tu(429, "Too Many Requests"),
	qh = async (v, A, N, d) => {
		const D = vf(d),
			Y = D.publicKey || Ut.publicKey,
			P = D.blockHeadless || Ut.blockHeadless,
			dt = D.storageProvider || Ut.storageProvider,
			M = { ...Ut.blockList, ...D.blockList },
			E = { ...Ut.limitRate, ...D.limitRate };
		return P && Dd(navigator)
			? Promise.reject(Ud())
			: (Od(Y, v, A),
				Dh(N),
				N && Hd(M, N)
					? Promise.reject(Rd())
					: (await Cd(location.pathname, E, dt))
						? Promise.reject(Bd())
						: Md(
								"/api/v1.0/email/send",
								JSON.stringify({
									lib_version: "4.4.1",
									user_id: Y,
									service_id: v,
									template_id: A,
									template_params: N,
								}),
								{ "Content-type": "application/json" },
							));
	},
	Yh = (v) => {
		if (!v || v.nodeName !== "FORM")
			throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
	},
	Gh = (v) => (typeof v == "string" ? document.querySelector(v) : v),
	Xh = async (v, A, N, d) => {
		const D = vf(d),
			Y = D.publicKey || Ut.publicKey,
			P = D.blockHeadless || Ut.blockHeadless,
			dt = Ut.storageProvider || D.storageProvider,
			M = { ...Ut.blockList, ...D.blockList },
			E = { ...Ut.limitRate, ...D.limitRate };
		if (P && Dd(navigator)) return Promise.reject(Ud());
		const Z = Gh(N);
		(Od(Y, v, A), Yh(Z));
		const R = new FormData(Z);
		return Hd(M, R)
			? Promise.reject(Rd())
			: (await Cd(location.pathname, E, dt))
				? Promise.reject(Bd())
				: (R.append("lib_version", "4.4.1"),
					R.append("service_id", v),
					R.append("template_id", A),
					R.append("user_id", Y),
					Md("/api/v1.0/email/send-form", R));
	},
	Qh = { init: Oh, send: qh, sendForm: Xh, EmailJSResponseStatus: Tu },
	Lh = () => {
		const [v, A] = Wl.useState({ name: "", email: "", message: "" }),
			[N, d] = Wl.useState("idle"),
			D = async (P) => {
				if ((P.preventDefault(), N !== "sending")) {
					d("sending");
					try {
						if (
							(
								await Qh.send(
									"YOUR_SERVICE_ID",
									"YOUR_TEMPLATE_ID",
									{
										from_name: v.name,
										from_email: v.email,
										message: v.message,
										to_email: Le.email,
									},
									"YOUR_PUBLIC_KEY",
								)
							).status === 200
						)
							(d("success"),
								A({ name: "", email: "", message: "" }),
								setTimeout(() => d("idle"), 5e3));
						else throw new Error("Failed to send");
					} catch (dt) {
						(console.error("EmailJS Error:", dt),
							d("error"),
							setTimeout(() => d("idle"), 5e3));
					}
				}
			},
			Y = (P) => {
				const { name: dt, value: M } = P.target;
				A((E) => ({ ...E, [dt]: M }));
			};
		return m.jsx("section", {
			id: "contact",
			className: "section-padding",
			children: m.jsx("div", {
				className:
					"max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-300/40 dark:shadow-black/40 relative",
				children: m.jsxs("div", {
					className: "grid md:grid-cols-2 items-stretch",
					children: [
						m.jsxs("div", {
							className:
								"p-12 md:p-16 space-y-10 bg-[#2d2d2a] dark:bg-stone-900 text-[#f2f0ea] dark:text-stone-100 flex flex-col justify-center",
							children: [
								m.jsxs("div", {
									className: "space-y-4",
									children: [
										m.jsx("span", {
											className:
												"text-xs font-bold text-stone-500 uppercase tracking-[0.2em]",
											children: "Inquiries",
										}),
										m.jsx("h2", {
											className: "text-5xl font-bold leading-tight",
											children: "Let's craft something.",
										}),
										m.jsx("p", {
											className:
												"text-stone-400 dark:text-stone-400 font-light text-xl leading-relaxed",
											children:
												"Whether it's a new venture or a technical challenge, my door is always open.",
										}),
									],
								}),
								m.jsx("div", {
									className: "space-y-8 pt-6",
									children: m.jsxs("div", {
										className: "flex items-center gap-5 group",
										children: [
											m.jsx("div", {
												className:
													"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/5",
												children: m.jsx("svg", {
													className: "w-7 h-7 text-stone-300",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													children: m.jsx("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 1,
														d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
													}),
												}),
											}),
											m.jsxs("div", {
												children: [
													m.jsx("span", {
														className:
															"block text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1",
														children: "Email",
													}),
													m.jsx("span", {
														className:
															"text-lg font-medium group-hover:text-stone-300 transition-colors break-all",
														children: Le.email,
													}),
												],
											}),
										],
									}),
								}),
								m.jsxs("div", {
									className: "flex gap-5 pt-10",
									children: [
										m.jsxs("a", {
											href: Le.linkedin,
											target: "_blank",
											rel: "noopener noreferrer",
											className:
												"w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-stone-100/10 transition-all border border-white/5",
											children: [
												m.jsx("span", {
													className: "sr-only",
													children: "LinkedIn",
												}),
												m.jsx("svg", {
													className: "w-6 h-6 fill-current text-stone-300",
													viewBox: "0 0 24 24",
													children: m.jsx("path", {
														d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
													}),
												}),
											],
										}),
										m.jsxs("a", {
											href: Le.github,
											target: "_blank",
											rel: "noopener noreferrer",
											className:
												"w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-stone-100/10 transition-all border border-white/5",
											children: [
												m.jsx("span", {
													className: "sr-only",
													children: "GitHub",
												}),
												m.jsx("svg", {
													className: "w-6 h-6 fill-current text-stone-300",
													viewBox: "0 0 24 24",
													children: m.jsx("path", {
														d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
						m.jsxs("div", {
							className:
								"p-12 md:p-16 space-y-10 bg-[#faf9f6]/80 dark:bg-stone-800/80 backdrop-blur-xl relative",
							children: [
								m.jsx("h3", {
									className:
										"text-3xl font-bold text-stone-900 dark:text-stone-100",
									children: "Message",
								}),
								m.jsxs("form", {
									className: "space-y-6",
									onSubmit: D,
									children: [
										m.jsxs("div", {
											className: "space-y-2",
											children: [
												m.jsx("label", {
													className:
														"text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] ml-1",
													children: "Full Name",
												}),
												m.jsx("input", {
													type: "text",
													name: "name",
													required: !0,
													value: v.name,
													onChange: Y,
													placeholder: "Elias Thorne",
													className:
														"w-full px-6 py-4 rounded-2xl bg-[#f2f0ea]/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200/20 dark:focus:ring-stone-700/20 focus:border-stone-400 dark:focus:border-stone-500 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-600 font-medium text-stone-900 dark:text-stone-100",
												}),
											],
										}),
										m.jsxs("div", {
											className: "space-y-2",
											children: [
												m.jsx("label", {
													className:
														"text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] ml-1",
													children: "Work Email",
												}),
												m.jsx("input", {
													type: "email",
													name: "email",
													required: !0,
													value: v.email,
													onChange: Y,
													placeholder: "elias@studio.com",
													className:
														"w-full px-6 py-4 rounded-2xl bg-[#f2f0ea]/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200/20 dark:focus:ring-stone-700/20 focus:border-stone-400 dark:focus:border-stone-500 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-600 font-medium text-stone-900 dark:text-stone-100",
												}),
											],
										}),
										m.jsxs("div", {
											className: "space-y-2",
											children: [
												m.jsx("label", {
													className:
														"text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] ml-1",
													children: "Brief Project Overview",
												}),
												m.jsx("textarea", {
													name: "message",
													required: !0,
													rows: 4,
													value: v.message,
													onChange: Y,
													placeholder: "Tell me about your vision...",
													className:
														"w-full px-6 py-4 rounded-2xl bg-[#f2f0ea]/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200/20 dark:focus:ring-stone-700/20 focus:border-stone-400 dark:focus:border-stone-500 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-600 resize-none font-medium text-stone-900 dark:text-stone-100",
												}),
											],
										}),
										N === "success" &&
											m.jsxs("div", {
												className:
													"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-6 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-3 animate-in fade-in duration-300",
												children: [
													m.jsx("svg", {
														className: "w-5 h-5",
														fill: "none",
														viewBox: "0 0 24 24",
														stroke: "currentColor",
														children: m.jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M5 13l4 4L19 7",
														}),
													}),
													m.jsx("span", {
														className: "text-sm font-bold",
														children: "Message delivered successfully!",
													}),
												],
											}),
										N === "error" &&
											m.jsxs("div", {
												className:
													"bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-6 py-4 rounded-2xl border border-rose-200 dark:border-rose-800 flex items-center gap-3 animate-in fade-in duration-300",
												children: [
													m.jsx("svg", {
														className: "w-5 h-5",
														fill: "none",
														viewBox: "0 0 24 24",
														stroke: "currentColor",
														children: m.jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M6 18L18 6M6 6l12 12",
														}),
													}),
													m.jsx("span", {
														className: "text-sm font-bold",
														children: "Something went wrong. Please try again.",
													}),
												],
											}),
										m.jsx("button", {
											type: "submit",
											disabled: N === "sending",
											className:
												"w-full py-5 bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 rounded-2xl font-bold hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-xl shadow-stone-200/50 dark:shadow-black/40 active:scale-[0.98] text-lg disabled:opacity-70 disabled:cursor-not-allowed",
											children:
												N === "sending"
													? m.jsxs("span", {
															className:
																"flex items-center justify-center gap-3",
															children: [
																m.jsxs("svg", {
																	className:
																		"animate-spin h-5 w-5 text-current",
																	xmlns: "http://www.w3.org/2000/svg",
																	fill: "none",
																	viewBox: "0 0 24 24",
																	children: [
																		m.jsx("circle", {
																			className: "opacity-25",
																			cx: "12",
																			cy: "12",
																			r: "10",
																			stroke: "currentColor",
																			strokeWidth: "4",
																		}),
																		m.jsx("path", {
																			className: "opacity-75",
																			fill: "currentColor",
																			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
																		}),
																	],
																}),
																"Sending...",
															],
														})
													: "Send Message",
										}),
									],
								}),
							],
						}),
					],
				}),
			}),
		});
	},
	Zh = () => {
		const v = new Date().getFullYear();
		return m.jsx("footer", {
			className:
				"py-16 border-t border-stone-200/60 dark:border-stone-800/60 mt-20",
			children: m.jsxs("div", {
				className:
					"max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10",
				children: [
					m.jsxs("div", {
						className: "flex flex-col items-center md:items-start space-y-2",
						children: [
							m.jsxs("span", {
								className:
									"text-2xl font-bold text-stone-900 dark:text-stone-50 tracking-tight",
								children: [
									"Suman ",
									m.jsx("span", {
										className:
											"text-stone-400 dark:text-stone-600 font-light italic",
										children: "Basnet",
									}),
								],
							}),
							m.jsxs("p", {
								className:
									"text-stone-400 dark:text-stone-600 text-xs font-bold uppercase tracking-widest",
								children: ["© ", v, " • Crafting Digital Landscapes"],
							}),
						],
					}),
					m.jsxs("div", {
						className: "flex items-center gap-10",
						children: [
							m.jsx("a", {
								href: "#about",
								className:
									"text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest",
								children: "Bio",
							}),
							m.jsx("a", {
								href: "#projects",
								className:
									"text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest",
								children: "Works",
							}),
							m.jsx("a", {
								href: "#skills",
								className:
									"text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest",
								children: "Tools",
							}),
							m.jsx("a", {
								href: Le.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className:
									"text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-xs font-bold uppercase tracking-widest",
								children: "Connect",
							}),
						],
					}),
					m.jsx("div", {
						className: "flex items-center gap-4",
						children: m.jsx("button", {
							onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
							className:
								"p-4 rounded-full bg-[#faf9f6] dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white dark:hover:bg-stone-800 transition-all group shadow-sm",
							children: m.jsx("svg", {
								className:
									"w-5 h-5 group-hover:-translate-y-1 transition-transform",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								children: m.jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M5 10l7-7m0 0l7 7m-7-7v18",
								}),
							}),
						}),
					}),
				],
			}),
		});
	},
	Vh = () => {
		const [v, A] = Wl.useState("home"),
			[N, d] = Wl.useState(() => {
				if (typeof window < "u") {
					const M = localStorage.getItem("theme");
					return M === "dark" || M === "light"
						? M
						: window.matchMedia("(prefers-color-scheme: dark)").matches
							? "dark"
							: "light";
				}
				return "light";
			}),
			[D, Y] = Wl.useState(!1);
		(Wl.useEffect(() => {
			const M = window.document.documentElement;
			(N === "dark" ? M.classList.add("dark") : M.classList.remove("dark"),
				localStorage.setItem("theme", N));
		}, [N]),
			Wl.useEffect(() => {
				const M = () => {
					const E = [
							"home",
							"about",
							"experience",
							"projects",
							"skills",
							"contact",
						],
						Z = window.scrollY + 100;
					for (const R of E) {
						const ut = document.getElementById(R);
						if (ut) {
							const Ht = ut.offsetTop,
								Rt = ut.offsetHeight;
							Z >= Ht && Z < Ht + Rt && A(R);
						}
					}
					Y(window.scrollY > 400);
				};
				return (
					window.addEventListener("scroll", M),
					() => window.removeEventListener("scroll", M)
				);
			}, []));
		const P = () => {
				d((M) => (M === "light" ? "dark" : "light"));
			},
			dt = () => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			};
		return m.jsxs("div", {
			className:
				"min-h-screen relative overflow-x-hidden selection:bg-stone-200 dark:selection:bg-stone-700 selection:text-stone-900 dark:selection:text-stone-100 transition-colors duration-500",
			children: [
				m.jsx("div", {
					className:
						"fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#f5e6d3] dark:bg-stone-800/30 rounded-full blur-[120px] -z-10 opacity-60",
				}),
				m.jsx("div", {
					className:
						"fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#e3e8d8] dark:bg-stone-900/40 rounded-full blur-[120px] -z-10 opacity-60",
				}),
				m.jsx(Sh, { activeSection: v, toggleTheme: P, theme: N }),
				m.jsxs("main", {
					className: "max-w-6xl mx-auto px-6",
					children: [
						m.jsx(Eh, {}),
						m.jsx(Ah, {}),
						m.jsx(Nh, {}),
						m.jsx(_h, {}),
						m.jsx(jh, {}),
						m.jsx(Lh, {}),
					],
				}),
				m.jsx(Zh, {}),
				m.jsx("button", {
					onClick: dt,
					className: `fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shadow-2xl transition-all duration-300 transform ${D ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"} hover:scale-110 active:scale-95`,
					"aria-label": "Scroll to top",
					children: m.jsx("svg", {
						className: "w-6 h-6",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						children: m.jsx("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2.5,
							d: "M5 15l7-7 7 7",
						}),
					}),
				}),
			],
		});
	},
	qd = document.getElementById("root");
if (!qd) throw new Error("Could not find root element to mount to");
const Kh = bh.createRoot(qd);
Kh.render(m.jsx(oh.StrictMode, { children: m.jsx(Vh, {}) }));
