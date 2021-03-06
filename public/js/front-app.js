/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/front_assets/js/app.js":
/*!*************************************************!*\
  !*** ./resources/assets/front_assets/js/app.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var i = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
  }

  var n = {};
  return t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: 'Module'
    }), Object.defineProperty(e, '__esModule', {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && 'object' == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, 'default', {
      enumerable: !0,
      value: e
    }), 2 & n && 'string' != typeof e) for (var i in e) {
      t.d(o, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return o;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e['default'];
    } : function () {
      return e;
    };
    return t.d(n, 'a', n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = '', t(t.s = 0);
})([function (e, t, n) {
  'use strict';

  n.r(t);
  var o = n(1),
      i = n.n(o),
      a = n(5),
      r = n.n(a),
      s = n(6),
      l = n.n(s);
}, function (e, t, n) {
  (function (e, o) {
    o(t, n(2), n(3));
  })(this, function (e, t, n) {
    'use strict';

    function o(e, t) {
      for (var n = 0, o; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    function i(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }

    function a(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function r(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function s(e) {
      for (var t = 1, n; t < arguments.length; t++) {
        n = null == arguments[t] ? {} : arguments[t], t % 2 ? r(Object(n), !0).forEach(function (t) {
          a(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function l(e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
    }

    function d(e) {
      return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function p() {
      return {
        bindType: m,
        delegateType: m,
        handle: function handle(e) {
          return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
        }
      };
    }

    function c(e) {
      var n = this,
          o = !1;
      return t(this).one(h.TRANSITION_END, function () {
        o = !0;
      }), setTimeout(function () {
        o || h.triggerTransitionEnd(n);
      }, e), this;
    }

    function u() {
      t.fn.emulateTransitionEnd = c, t.event.special[h.TRANSITION_END] = p();
    }

    function f(e, t) {
      var n = e.nodeName.toLowerCase();
      if (-1 !== t.indexOf(n)) return -1 === Le.indexOf(n) || !!(e.nodeValue.match(Pe) || e.nodeValue.match(He));

      for (var o = t.filter(function (e) {
        return e instanceof RegExp;
      }), a = 0, i = o.length; a < i; a++) {
        if (n.match(o[a])) return !0;
      }

      return !1;
    }

    function g(e, t, n) {
      if (0 === e.length) return e;
      if (n && 'function' == typeof n) return n(e);

      for (var o = new window.DOMParser(), a = o.parseFromString(e, 'text/html'), r = Object.keys(t), s = [].slice.call(a.body.querySelectorAll('*')), l = function l(e) {
        var n = s[e],
            o = n.nodeName.toLowerCase();
        if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), 'continue';
        var i = [].slice.call(n.attributes),
            a = [].concat(t['*'] || [], t[o] || []);
        i.forEach(function (e) {
          f(e, a) || n.removeAttribute(e.nodeName);
        });
      }, d = 0, i = s.length, p; d < i; d++) {
        p = l(d), 'continue' === p;
      }

      return a.body.innerHTML;
    }

    t = t && t.hasOwnProperty('default') ? t['default'] : t, n = n && n.hasOwnProperty('default') ? n['default'] : n;
    var m = 'transitionend',
        h = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(e) {
        do {
          e += ~~(Math.random() * 1e6);
        } while (document.getElementById(e));

        return e;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var t = e.getAttribute('data-target');

        if (!t || '#' === t) {
          var n = e.getAttribute('href');
          t = n && '#' !== n ? n.trim() : '';
        }

        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
        if (!e) return 0;
        var n = t(e).css('transition-duration'),
            o = t(e).css('transition-delay'),
            i = parseFloat(n),
            a = parseFloat(o);
        return i || a ? (n = n.split(',')[0], o = o.split(',')[0], (parseFloat(n) + parseFloat(o)) * 1e3) : 0;
      },
      reflow: function reflow(e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(e) {
        t(e).trigger(m);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return !!m;
      },
      isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var o in n) {
          if (Object.prototype.hasOwnProperty.call(n, o)) {
            var i = n[o],
                a = t[o],
                r = a && h.isElement(a) ? 'element' : d(a);
            if (!new RegExp(i).test(r)) throw new Error(e.toUpperCase() + ': ' + ('Option "' + o + '" provided type "' + r + '" ') + ('but expected type "' + i + '".'));
          }
        }
      },
      findShadowRoot: function findShadowRoot(e) {
        if (!document.documentElement.attachShadow) return null;

        if ('function' == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }

        return e instanceof ShadowRoot ? e : e.parentNode ? h.findShadowRoot(e.parentNode) : null;
      },
      jQueryDetection: function jQueryDetection() {
        if ('undefined' == typeof t) throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
        var e = t.fn.jquery.split(' ')[0].split('.'),
            n = 9;
        if (e[0] < 2 && e[1] < n || e[0] === 1 && e[1] === n && e[2] < 1 || e[0] >= 4) throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    };
    h.jQueryDetection(), u();

    var y = 'alert',
        _ = 'bs.alert',
        E = '.' + _,
        T = t.fn[y],
        b = {
      CLOSE: 'close' + E,
      CLOSED: 'closed' + E,
      CLICK_DATA_API: 'click' + E + '.data-api'
    },
        v = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
    },
        C = function () {
      function e(e) {
        this._element = e;
      }

      var n = e.prototype;
      return n.close = function (e) {
        var t = this._element;
        e && (t = this._getRootElement(e));

        var n = this._triggerCloseEvent(t);

        n.isDefaultPrevented() || this._removeElement(t);
      }, n.dispose = function () {
        t.removeData(this._element, _), this._element = null;
      }, n._getRootElement = function (e) {
        var n = h.getSelectorFromElement(e),
            o = !1;
        return n && (o = document.querySelector(n)), o || (o = t(e).closest('.' + v.ALERT)[0]), o;
      }, n._triggerCloseEvent = function (e) {
        var n = t.Event(b.CLOSE);
        return t(e).trigger(n), n;
      }, n._removeElement = function (e) {
        var n = this;
        if (t(e).removeClass(v.SHOW), !t(e).hasClass(v.FADE)) return void this._destroyElement(e);
        var o = h.getTransitionDurationFromElement(e);
        t(e).one(h.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(o);
      }, n._destroyElement = function (e) {
        t(e).detach().trigger(b.CLOSED).remove();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this),
              i = o.data(_);
          i || (i = new e(this), o.data(_, i)), 'close' === n && i[n](this);
        });
      }, e._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }]), e;
    }();

    t(document).on(b.CLICK_DATA_API, {
      DISMISS: '[data-dismiss="alert"]'
    }.DISMISS, C._handleDismiss(new C())), t.fn[y] = C._jQueryInterface, t.fn[y].Constructor = C, t.fn[y].noConflict = function () {
      return t.fn[y] = T, C._jQueryInterface;
    };

    var A = 'button',
        S = 'bs.button',
        D = '.' + S,
        N = '.data-api',
        x = t.fn[A],
        I = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    },
        O = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLES: '[data-toggle="buttons"]',
      DATA_TOGGLE: '[data-toggle="button"]',
      DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
      INPUT: 'input:not([type="hidden"])',
      ACTIVE: '.active',
      BUTTON: '.btn'
    },
        w = {
      CLICK_DATA_API: 'click' + D + N,
      FOCUS_BLUR_DATA_API: 'focus' + D + N + ' ' + ('blur' + D + N),
      LOAD_DATA_API: 'load' + D + N
    },
        L = function () {
      function e(e) {
        this._element = e;
      }

      var n = e.prototype;
      return n.toggle = function () {
        var e = !0,
            n = !0,
            o = t(this._element).closest(O.DATA_TOGGLES)[0];

        if (o) {
          var i = this._element.querySelector(O.INPUT);

          if (i) {
            if ('radio' !== i.type) 'checkbox' === i.type ? 'LABEL' === this._element.tagName && i.checked === this._element.classList.contains(I.ACTIVE) && (e = !1) : e = !1;else if (i.checked && this._element.classList.contains(I.ACTIVE)) e = !1;else {
              var a = o.querySelector(O.ACTIVE);
              a && t(a).removeClass(I.ACTIVE);
            }
            e && (i.checked = !this._element.classList.contains(I.ACTIVE), t(i).trigger('change')), i.focus(), n = !1;
          }
        }

        this._element.hasAttribute('disabled') || this._element.classList.contains('disabled') || (n && this._element.setAttribute('aria-pressed', !this._element.classList.contains(I.ACTIVE)), e && t(this._element).toggleClass(I.ACTIVE));
      }, n.dispose = function () {
        t.removeData(this._element, S), this._element = null;
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this).data(S);
          o || (o = new e(this), t(this).data(S, o)), 'toggle' === n && o[n]();
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }]), e;
    }();

    t(document).on(w.CLICK_DATA_API, O.DATA_TOGGLE_CARROT, function (e) {
      var n = e.target;
      if (t(n).hasClass(I.BUTTON) || (n = t(n).closest(O.BUTTON)[0]), !n || n.hasAttribute('disabled') || n.classList.contains('disabled')) e.preventDefault();else {
        var o = n.querySelector(O.INPUT);
        if (o && (o.hasAttribute('disabled') || o.classList.contains('disabled'))) return void e.preventDefault();

        L._jQueryInterface.call(t(n), 'toggle');
      }
    }).on(w.FOCUS_BLUR_DATA_API, O.DATA_TOGGLE_CARROT, function (e) {
      var n = t(e.target).closest(O.BUTTON)[0];
      t(n).toggleClass(I.FOCUS, /^focus(in)?$/.test(e.type));
    }), t(window).on(w.LOAD_DATA_API, function () {
      for (var e = [].slice.call(document.querySelectorAll(O.DATA_TOGGLES_BUTTONS)), t = 0, n = e.length; t < n; t++) {
        var o = e[t],
            i = o.querySelector(O.INPUT);
        i.checked || i.hasAttribute('checked') ? o.classList.add(I.ACTIVE) : o.classList.remove(I.ACTIVE);
      }

      e = [].slice.call(document.querySelectorAll(O.DATA_TOGGLE));

      for (var a = 0, r = e.length, s; a < r; a++) {
        s = e[a], 'true' === s.getAttribute('aria-pressed') ? s.classList.add(I.ACTIVE) : s.classList.remove(I.ACTIVE);
      }
    }), t.fn[A] = L._jQueryInterface, t.fn[A].Constructor = L, t.fn[A].noConflict = function () {
      return t.fn[A] = x, L._jQueryInterface;
    };

    var k = 'carousel',
        P = 'bs.carousel',
        H = '.' + P,
        M = '.data-api',
        R = t.fn[k],
        j = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0
    },
        W = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    },
        q = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    },
        F = {
      SLIDE: 'slide' + H,
      SLID: 'slid' + H,
      KEYDOWN: 'keydown' + H,
      MOUSEENTER: 'mouseenter' + H,
      MOUSELEAVE: 'mouseleave' + H,
      TOUCHSTART: 'touchstart' + H,
      TOUCHMOVE: 'touchmove' + H,
      TOUCHEND: 'touchend' + H,
      POINTERDOWN: 'pointerdown' + H,
      POINTERUP: 'pointerup' + H,
      DRAG_START: 'dragstart' + H,
      LOAD_DATA_API: 'load' + H + M,
      CLICK_DATA_API: 'click' + H + M
    },
        U = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item',
      POINTER_EVENT: 'pointer-event'
    },
        B = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      ITEM_IMG: '.carousel-item img',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
    },
        V = {
      TOUCH: 'touch',
      PEN: 'pen'
    },
        G = function () {
      function e(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(B.INDICATORS), this._touchSupported = 'ontouchstart' in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = !!(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
      }

      var n = e.prototype;
      return n.next = function () {
        this._isSliding || this._slide(q.NEXT);
      }, n.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(':visible') && 'hidden' !== t(this._element).css('visibility') && this.next();
      }, n.prev = function () {
        this._isSliding || this._slide(q.PREV);
      }, n.pause = function (e) {
        e || (this._isPaused = !0), this._element.querySelector(B.NEXT_PREV) && (h.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, n.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, n.to = function (e) {
        var n = this;
        this._activeElement = this._element.querySelector(B.ACTIVE_ITEM);

        var o = this._getItemIndex(this._activeElement);

        if (!(e > this._items.length - 1 || 0 > e)) {
          if (this._isSliding) return void t(this._element).one(F.SLID, function () {
            return n.to(e);
          });
          if (o === e) return this.pause(), void this.cycle();
          var i = e > o ? q.NEXT : q.PREV;

          this._slide(i, this._items[e]);
        }
      }, n.dispose = function () {
        t(this._element).off(H), t.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, n._getConfig = function (e) {
        return e = s({}, j, {}, e), h.typeCheckConfig(k, e, W), e;
      }, n._handleSwipe = function () {
        var e = Math.abs(this.touchDeltaX);

        if (!(e <= 40)) {
          var t = e / this.touchDeltaX;
          this.touchDeltaX = 0, 0 < t && this.prev(), 0 > t && this.next();
        }
      }, n._addEventListeners = function () {
        var e = this;
        this._config.keyboard && t(this._element).on(F.KEYDOWN, function (t) {
          return e._keydown(t);
        }), 'hover' === this._config.pause && t(this._element).on(F.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(F.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), this._config.touch && this._addTouchEventListeners();
      }, n._addTouchEventListeners = function () {
        var e = this;

        if (this._touchSupported) {
          var n = function n(t) {
            e._pointerEvent && V[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : !e._pointerEvent && (e.touchStartX = t.originalEvent.touches[0].clientX);
          },
              o = function o(t) {
            e.touchDeltaX = t.originalEvent.touches && 1 < t.originalEvent.touches.length ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX;
          },
              i = function i(t) {
            e._pointerEvent && V[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), 'hover' === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
              return e.cycle(t);
            }, 500 + e._config.interval));
          };

          t(this._element.querySelectorAll(B.ITEM_IMG)).on(F.DRAG_START, function (t) {
            return t.preventDefault();
          }), this._pointerEvent ? (t(this._element).on(F.POINTERDOWN, function (e) {
            return n(e);
          }), t(this._element).on(F.POINTERUP, function (e) {
            return i(e);
          }), this._element.classList.add(U.POINTER_EVENT)) : (t(this._element).on(F.TOUCHSTART, function (e) {
            return n(e);
          }), t(this._element).on(F.TOUCHMOVE, function (e) {
            return o(e);
          }), t(this._element).on(F.TOUCHEND, function (e) {
            return i(e);
          }));
        }
      }, n._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
          case 37:
            e.preventDefault(), this.prev();
            break;

          case 39:
            e.preventDefault(), this.next();
        }
      }, n._getItemIndex = function (e) {
        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(B.ITEM)) : [], this._items.indexOf(e);
      }, n._getItemByDirection = function (e, t) {
        var n = e === q.NEXT,
            o = e === q.PREV,
            i = this._getItemIndex(t),
            a = this._items.length - 1;

        if ((o && 0 === i || n && i === a) && !this._config.wrap) return t;
        var r = e === q.PREV ? -1 : 1,
            s = (i + r) % this._items.length;
        return -1 == s ? this._items[this._items.length - 1] : this._items[s];
      }, n._triggerSlideEvent = function (e, n) {
        var o = this._getItemIndex(e),
            i = this._getItemIndex(this._element.querySelector(B.ACTIVE_ITEM)),
            a = t.Event(F.SLIDE, {
          relatedTarget: e,
          direction: n,
          from: i,
          to: o
        });

        return t(this._element).trigger(a), a;
      }, n._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          var n = [].slice.call(this._indicatorsElement.querySelectorAll(B.ACTIVE));
          t(n).removeClass(U.ACTIVE);

          var o = this._indicatorsElement.children[this._getItemIndex(e)];

          o && t(o).addClass(U.ACTIVE);
        }
      }, n._slide = function (e, n) {
        var o = this,
            i = this._element.querySelector(B.ACTIVE_ITEM),
            a = this._getItemIndex(i),
            r = n || i && this._getItemByDirection(e, i),
            s = this._getItemIndex(r),
            l = !!this._interval,
            d,
            p,
            c;

        if (e === q.NEXT ? (d = U.LEFT, p = U.NEXT, c = q.LEFT) : (d = U.RIGHT, p = U.PREV, c = q.RIGHT), r && t(r).hasClass(U.ACTIVE)) return void (this._isSliding = !1);

        var u = this._triggerSlideEvent(r, c);

        if (!u.isDefaultPrevented() && i && r) {
          this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r);
          var f = t.Event(F.SLID, {
            relatedTarget: r,
            direction: c,
            from: a,
            to: s
          });

          if (t(this._element).hasClass(U.SLIDE)) {
            t(r).addClass(p), h.reflow(r), t(i).addClass(d), t(r).addClass(d);
            var g = parseInt(r.getAttribute('data-interval'), 10);
            g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval;
            var m = h.getTransitionDurationFromElement(i);
            t(i).one(h.TRANSITION_END, function () {
              t(r).removeClass(d + ' ' + p).addClass(U.ACTIVE), t(i).removeClass(U.ACTIVE + ' ' + p + ' ' + d), o._isSliding = !1, setTimeout(function () {
                return t(o._element).trigger(f);
              }, 0);
            }).emulateTransitionEnd(m);
          } else t(i).removeClass(U.ACTIVE), t(r).addClass(U.ACTIVE), this._isSliding = !1, t(this._element).trigger(f);

          l && this.cycle();
        }
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this).data(P),
              i = s({}, j, {}, t(this).data());
          'object' == _typeof(n) && (i = s({}, i, {}, n));
          var a = 'string' == typeof n ? n : i.slide;
          if (o || (o = new e(this, i), t(this).data(P, o)), 'number' == typeof n) o.to(n);else if ('string' == typeof a) {
            if ('undefined' == typeof o[a]) throw new TypeError('No method named "' + a + '"');
            o[a]();
          } else i.interval && i.ride && (o.pause(), o.cycle());
        });
      }, e._dataApiClickHandler = function (n) {
        var o = h.getSelectorFromElement(this);

        if (o) {
          var i = t(o)[0];

          if (i && t(i).hasClass(U.CAROUSEL)) {
            var a = s({}, t(i).data(), {}, t(this).data()),
                r = this.getAttribute('data-slide-to');
            r && (a.interval = !1), e._jQueryInterface.call(t(i), a), r && t(i).data(P).to(r), n.preventDefault();
          }
        }
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return j;
        }
      }]), e;
    }();

    t(document).on(F.CLICK_DATA_API, B.DATA_SLIDE, G._dataApiClickHandler), t(window).on(F.LOAD_DATA_API, function () {
      for (var e = [].slice.call(document.querySelectorAll(B.DATA_RIDE)), n = 0, o = e.length, i; n < o; n++) {
        i = t(e[n]), G._jQueryInterface.call(i, i.data());
      }
    }), t.fn[k] = G._jQueryInterface, t.fn[k].Constructor = G, t.fn[k].noConflict = function () {
      return t.fn[k] = R, G._jQueryInterface;
    };

    var K = 'collapse',
        Q = 'bs.collapse',
        X = '.' + Q,
        Y = t.fn[K],
        z = {
      toggle: !0,
      parent: ''
    },
        J = {
      toggle: 'boolean',
      parent: '(string|element)'
    },
        Z = {
      SHOW: 'show' + X,
      SHOWN: 'shown' + X,
      HIDE: 'hide' + X,
      HIDDEN: 'hidden' + X,
      CLICK_DATA_API: 'click' + X + '.data-api'
    },
        ee = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    },
        te = {
      WIDTH: 'width',
      HEIGHT: 'height'
    },
        ne = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
        oe = function () {
      function e(e, t) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]')));

        for (var n = [].slice.call(document.querySelectorAll(ne.DATA_TOGGLE)), o = 0, i = n.length; o < i; o++) {
          var a = n[o],
              r = h.getSelectorFromElement(a),
              s = [].slice.call(document.querySelectorAll(r)).filter(function (t) {
            return t === e;
          });
          null !== r && 0 < s.length && (this._selector = r, this._triggerArray.push(a));
        }

        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      var n = e.prototype;
      return n.toggle = function () {
        t(this._element).hasClass(ee.SHOW) ? this.hide() : this.show();
      }, n.show = function () {
        var n = this;

        if (!(this._isTransitioning || t(this._element).hasClass(ee.SHOW))) {
          var o, i;

          if (this._parent && (o = [].slice.call(this._parent.querySelectorAll(ne.ACTIVES)).filter(function (e) {
            return 'string' == typeof n._config.parent ? e.getAttribute('data-parent') === n._config.parent : e.classList.contains(ee.COLLAPSE);
          }), 0 === o.length && (o = null)), !(o && (i = t(o).not(this._selector).data(Q), i && i._isTransitioning))) {
            var a = t.Event(Z.SHOW);

            if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
              o && (e._jQueryInterface.call(t(o).not(this._selector), 'hide'), !i && t(o).data(Q, null));

              var r = this._getDimension();

              t(this._element).removeClass(ee.COLLAPSE).addClass(ee.COLLAPSING), this._element.style[r] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ee.COLLAPSED).attr('aria-expanded', !0), this.setTransitioning(!0);

              var s = function s() {
                t(n._element).removeClass(ee.COLLAPSING).addClass(ee.COLLAPSE).addClass(ee.SHOW), n._element.style[r] = '', n.setTransitioning(!1), t(n._element).trigger(Z.SHOWN);
              },
                  l = r[0].toUpperCase() + r.slice(1),
                  d = h.getTransitionDurationFromElement(this._element);

              t(this._element).one(h.TRANSITION_END, s).emulateTransitionEnd(d), this._element.style[r] = this._element['scroll' + l] + 'px';
            }
          }
        }
      }, n.hide = function () {
        var e = this;

        if (!this._isTransitioning && t(this._element).hasClass(ee.SHOW)) {
          var n = t.Event(Z.HIDE);

          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var o = this._getDimension();

            this._element.style[o] = this._element.getBoundingClientRect()[o] + 'px', h.reflow(this._element), t(this._element).addClass(ee.COLLAPSING).removeClass(ee.COLLAPSE).removeClass(ee.SHOW);
            var a = this._triggerArray.length;
            if (0 < a) for (var r = 0; r < a; r++) {
              var i = this._triggerArray[r],
                  s = h.getSelectorFromElement(i);

              if (null !== s) {
                var l = t([].slice.call(document.querySelectorAll(s)));
                l.hasClass(ee.SHOW) || t(i).addClass(ee.COLLAPSED).attr('aria-expanded', !1);
              }
            }
            this.setTransitioning(!0);

            var d = function d() {
              e.setTransitioning(!1), t(e._element).removeClass(ee.COLLAPSING).addClass(ee.COLLAPSE).trigger(Z.HIDDEN);
            };

            this._element.style[o] = '';
            var p = h.getTransitionDurationFromElement(this._element);
            t(this._element).one(h.TRANSITION_END, d).emulateTransitionEnd(p);
          }
        }
      }, n.setTransitioning = function (e) {
        this._isTransitioning = e;
      }, n.dispose = function () {
        t.removeData(this._element, Q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, n._getConfig = function (e) {
        return e = s({}, z, {}, e), e.toggle = !!e.toggle, h.typeCheckConfig(K, e, J), e;
      }, n._getDimension = function () {
        var e = t(this._element).hasClass(te.WIDTH);
        return e ? te.WIDTH : te.HEIGHT;
      }, n._getParent = function () {
        var n = this,
            o;
        h.isElement(this._config.parent) ? (o = this._config.parent, 'undefined' != typeof this._config.parent.jquery && (o = this._config.parent[0])) : o = document.querySelector(this._config.parent);
        var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            a = [].slice.call(o.querySelectorAll(i));
        return t(a).each(function (t, o) {
          n._addAriaAndCollapsedClass(e._getTargetFromElement(o), [o]);
        }), o;
      }, n._addAriaAndCollapsedClass = function (e, n) {
        var o = t(e).hasClass(ee.SHOW);
        n.length && t(n).toggleClass(ee.COLLAPSED, !o).attr('aria-expanded', o);
      }, e._getTargetFromElement = function (e) {
        var t = h.getSelectorFromElement(e);
        return t ? document.querySelector(t) : null;
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this),
              i = o.data(Q),
              a = s({}, z, {}, o.data(), {}, 'object' == _typeof(n) && n ? n : {});

          if (!i && a.toggle && /show|hide/.test(n) && (a.toggle = !1), i || (i = new e(this, a), o.data(Q, i)), 'string' == typeof n) {
            if ('undefined' == typeof i[n]) throw new TypeError('No method named "' + n + '"');
            i[n]();
          }
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return z;
        }
      }]), e;
    }();

    t(document).on(Z.CLICK_DATA_API, ne.DATA_TOGGLE, function (e) {
      'A' === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
          o = h.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(o));
      t(i).each(function () {
        var e = t(this),
            o = e.data(Q),
            i = o ? 'toggle' : n.data();

        oe._jQueryInterface.call(e, i);
      });
    }), t.fn[K] = oe._jQueryInterface, t.fn[K].Constructor = oe, t.fn[K].noConflict = function () {
      return t.fn[K] = Y, oe._jQueryInterface;
    };

    var ie = 'dropdown',
        ae = 'bs.dropdown',
        re = '.' + ae,
        se = '.data-api',
        le = t.fn[ie],
        de = 27,
        pe = 32,
        ce = 9,
        ue = 38,
        fe = 40,
        ge = /38|40|27/,
        me = {
      HIDE: 'hide' + re,
      HIDDEN: 'hidden' + re,
      SHOW: 'show' + re,
      SHOWN: 'shown' + re,
      CLICK: 'click' + re,
      CLICK_DATA_API: 'click' + re + se,
      KEYDOWN_DATA_API: 'keydown' + re + se,
      KEYUP_DATA_API: 'keyup' + re + se
    },
        he = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    },
        ye = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    },
        _e = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end',
      RIGHT: 'right-start',
      RIGHTEND: 'right-end',
      LEFT: 'left-start',
      LEFTEND: 'left-end'
    },
        Ee = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null
    },
        Te = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
      popperConfig: '(null|object)'
    },
        be = function () {
      function e(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }

      var o = e.prototype;
      return o.toggle = function () {
        if (!(this._element.disabled || t(this._element).hasClass(he.DISABLED))) {
          var n = t(this._menu).hasClass(he.SHOW);
          e._clearMenus(), n || this.show(!0);
        }
      }, o.show = function (o) {
        if (void 0 === o && (o = !1), !(this._element.disabled || t(this._element).hasClass(he.DISABLED) || t(this._menu).hasClass(he.SHOW))) {
          var i = {
            relatedTarget: this._element
          },
              a = t.Event(me.SHOW, i),
              r = e._getParentFromElement(this._element);

          if (t(r).trigger(a), !a.isDefaultPrevented()) {
            if (!this._inNavbar && o) {
              if ('undefined' == typeof n) throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
              var s = this._element;
              'parent' === this._config.reference ? s = r : h.isElement(this._config.reference) && (s = this._config.reference, 'undefined' != typeof this._config.reference.jquery && (s = this._config.reference[0])), 'scrollParent' !== this._config.boundary && t(r).addClass(he.POSITION_STATIC), this._popper = new n(s, this._menu, this._getPopperConfig());
            }

            'ontouchstart' in document.documentElement && 0 === t(r).closest(ye.NAVBAR_NAV).length && t(document.body).children().on('mouseover', null, t.noop), this._element.focus(), this._element.setAttribute('aria-expanded', !0), t(this._menu).toggleClass(he.SHOW), t(r).toggleClass(he.SHOW).trigger(t.Event(me.SHOWN, i));
          }
        }
      }, o.hide = function () {
        if (!(this._element.disabled || t(this._element).hasClass(he.DISABLED) || !t(this._menu).hasClass(he.SHOW))) {
          var n = {
            relatedTarget: this._element
          },
              o = t.Event(me.HIDE, n),
              i = e._getParentFromElement(this._element);

          t(i).trigger(o), o.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(he.SHOW), t(i).toggleClass(he.SHOW).trigger(t.Event(me.HIDDEN, n)));
        }
      }, o.dispose = function () {
        t.removeData(this._element, ae), t(this._element).off(re), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, o.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, o._addEventListeners = function () {
        var e = this;
        t(this._element).on(me.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, o._getConfig = function (e) {
        return e = s({}, this.constructor.Default, {}, t(this._element).data(), {}, e), h.typeCheckConfig(ie, e, this.constructor.DefaultType), e;
      }, o._getMenuElement = function () {
        if (!this._menu) {
          var t = e._getParentFromElement(this._element);

          t && (this._menu = t.querySelector(ye.MENU));
        }

        return this._menu;
      }, o._getPlacement = function () {
        var e = t(this._element.parentNode),
            n = _e.BOTTOM;
        return e.hasClass(he.DROPUP) ? (n = _e.TOP, t(this._menu).hasClass(he.MENURIGHT) && (n = _e.TOPEND)) : e.hasClass(he.DROPRIGHT) ? n = _e.RIGHT : e.hasClass(he.DROPLEFT) ? n = _e.LEFT : t(this._menu).hasClass(he.MENURIGHT) && (n = _e.BOTTOMEND), n;
      }, o._detectNavbar = function () {
        return 0 < t(this._element).closest('.navbar').length;
      }, o._getOffset = function () {
        var e = this,
            t = {};
        return 'function' == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = s({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t;
        } : t.offset = this._config.offset, t;
      }, o._getPopperConfig = function () {
        var e = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return 'static' === this._config.display && (e.modifiers.applyStyle = {
          enabled: !1
        }), s({}, e, {}, this._config.popperConfig);
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this).data(ae),
              i = 'object' == _typeof(n) ? n : null;

          if (o || (o = new e(this, i), t(this).data(ae, o)), 'string' == typeof n) {
            if ('undefined' == typeof o[n]) throw new TypeError('No method named "' + n + '"');
            o[n]();
          }
        });
      }, e._clearMenus = function (n) {
        if (!(n && (n.which === 3 || 'keyup' === n.type && n.which !== ce))) for (var o = [].slice.call(document.querySelectorAll(ye.DATA_TOGGLE)), a = 0, i = o.length; a < i; a++) {
          var r = e._getParentFromElement(o[a]),
              s = t(o[a]).data(ae),
              l = {
            relatedTarget: o[a]
          };

          if (n && 'click' === n.type && (l.clickEvent = n), !!s) {
            var d = s._menu;

            if (t(r).hasClass(he.SHOW) && !(n && ('click' === n.type && /input|textarea/i.test(n.target.tagName) || 'keyup' === n.type && n.which === ce) && t.contains(r, n.target))) {
              var p = t.Event(me.HIDE, l);
              (t(r).trigger(p), !p.isDefaultPrevented()) && ('ontouchstart' in document.documentElement && t(document.body).children().off('mouseover', null, t.noop), o[a].setAttribute('aria-expanded', 'false'), s._popper && s._popper.destroy(), t(d).removeClass(he.SHOW), t(r).removeClass(he.SHOW).trigger(t.Event(me.HIDDEN, l)));
            }
          }
        }
      }, e._getParentFromElement = function (e) {
        var t = h.getSelectorFromElement(e),
            n;
        return t && (n = document.querySelector(t)), n || e.parentNode;
      }, e._dataApiKeydownHandler = function (n) {
        if ((/input|textarea/i.test(n.target.tagName) ? !(n.which === pe || n.which !== de && (n.which !== fe && n.which !== ue || t(n.target).closest(ye.MENU).length)) : !!ge.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !(this.disabled || t(this).hasClass(he.DISABLED)))) {
          var o = e._getParentFromElement(this),
              i = t(o).hasClass(he.SHOW);

          if (i || n.which !== de) {
            if (!i || i && (n.which === de || n.which === pe)) {
              if (n.which === de) {
                var a = o.querySelector(ye.DATA_TOGGLE);
                t(a).trigger('focus');
              }

              return void t(this).trigger('click');
            }

            var r = [].slice.call(o.querySelectorAll(ye.VISIBLE_ITEMS)).filter(function (e) {
              return t(e).is(':visible');
            });

            if (0 !== r.length) {
              var s = r.indexOf(n.target);
              n.which === ue && 0 < s && s--, n.which === fe && s < r.length - 1 && s++, 0 > s && (s = 0), r[s].focus();
            }
          }
        }
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return Ee;
        }
      }, {
        key: 'DefaultType',
        get: function get() {
          return Te;
        }
      }]), e;
    }();

    t(document).on(me.KEYDOWN_DATA_API, ye.DATA_TOGGLE, be._dataApiKeydownHandler).on(me.KEYDOWN_DATA_API, ye.MENU, be._dataApiKeydownHandler).on(me.CLICK_DATA_API + ' ' + me.KEYUP_DATA_API, be._clearMenus).on(me.CLICK_DATA_API, ye.DATA_TOGGLE, function (e) {
      e.preventDefault(), e.stopPropagation(), be._jQueryInterface.call(t(this), 'toggle');
    }).on(me.CLICK_DATA_API, ye.FORM_CHILD, function (t) {
      t.stopPropagation();
    }), t.fn[ie] = be._jQueryInterface, t.fn[ie].Constructor = be, t.fn[ie].noConflict = function () {
      return t.fn[ie] = le, be._jQueryInterface;
    };

    var ve = 'modal',
        Ce = 'bs.modal',
        Ae = '.' + Ce,
        Se = t.fn[ve],
        De = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        Ne = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
        xe = {
      HIDE: 'hide' + Ae,
      HIDE_PREVENTED: 'hidePrevented' + Ae,
      HIDDEN: 'hidden' + Ae,
      SHOW: 'show' + Ae,
      SHOWN: 'shown' + Ae,
      FOCUSIN: 'focusin' + Ae,
      RESIZE: 'resize' + Ae,
      CLICK_DISMISS: 'click.dismiss' + Ae,
      KEYDOWN_DISMISS: 'keydown.dismiss' + Ae,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + Ae,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + Ae,
      CLICK_DATA_API: 'click' + Ae + '.data-api'
    },
        Ie = {
      SCROLLABLE: 'modal-dialog-scrollable',
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show',
      STATIC: 'modal-static'
    },
        Oe = {
      DIALOG: '.modal-dialog',
      MODAL_BODY: '.modal-body',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top'
    },
        we = function () {
      function e(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Oe.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
      }

      var n = e.prototype;
      return n.toggle = function (e) {
        return this._isShown ? this.hide() : this.show(e);
      }, n.show = function (e) {
        var n = this;

        if (!(this._isShown || this._isTransitioning)) {
          t(this._element).hasClass(Ie.FADE) && (this._isTransitioning = !0);
          var o = t.Event(xe.SHOW, {
            relatedTarget: e
          });
          t(this._element).trigger(o), this._isShown || o.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(xe.CLICK_DISMISS, Oe.DATA_DISMISS, function (e) {
            return n.hide(e);
          }), t(this._dialog).on(xe.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(xe.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, n.hide = function (e) {
        var n = this;

        if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
          var o = t.Event(xe.HIDE);

          if (t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented()) {
            this._isShown = !1;
            var i = t(this._element).hasClass(Ie.FADE);

            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(xe.FOCUSIN), t(this._element).removeClass(Ie.SHOW), t(this._element).off(xe.CLICK_DISMISS), t(this._dialog).off(xe.MOUSEDOWN_DISMISS), i) {
              var a = h.getTransitionDurationFromElement(this._element);
              t(this._element).one(h.TRANSITION_END, function (e) {
                return n._hideModal(e);
              }).emulateTransitionEnd(a);
            } else this._hideModal();
          }
        }
      }, n.dispose = function () {
        [window, this._element, this._dialog].forEach(function (e) {
          return t(e).off(Ae);
        }), t(document).off(xe.FOCUSIN), t.removeData(this._element, Ce), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }, n.handleUpdate = function () {
        this._adjustDialog();
      }, n._getConfig = function (e) {
        return e = s({}, De, {}, e), h.typeCheckConfig(ve, e, Ne), e;
      }, n._triggerBackdropTransition = function () {
        var e = this;

        if ('static' === this._config.backdrop) {
          var n = t.Event(xe.HIDE_PREVENTED);
          if (t(this._element).trigger(n), n.defaultPrevented) return;

          this._element.classList.add(Ie.STATIC);

          var o = h.getTransitionDurationFromElement(this._element);
          t(this._element).one(h.TRANSITION_END, function () {
            e._element.classList.remove(Ie.STATIC);
          }).emulateTransitionEnd(o), this._element.focus();
        } else this.hide();
      }, n._showElement = function (e) {
        var n = this,
            o = t(this._element).hasClass(Ie.FADE),
            i = this._dialog ? this._dialog.querySelector(Oe.MODAL_BODY) : null;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = 'block', this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), t(this._dialog).hasClass(Ie.SCROLLABLE) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, o && h.reflow(this._element), t(this._element).addClass(Ie.SHOW), this._config.focus && this._enforceFocus();

        var a = t.Event(xe.SHOWN, {
          relatedTarget: e
        }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(a);
        };

        if (o) {
          var s = h.getTransitionDurationFromElement(this._dialog);
          t(this._dialog).one(h.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      }, n._enforceFocus = function () {
        var e = this;
        t(document).off(xe.FOCUSIN).on(xe.FOCUSIN, function (n) {
          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
        });
      }, n._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? t(this._element).on(xe.KEYDOWN_DISMISS, function (t) {
          t.which === 27 && e._triggerBackdropTransition();
        }) : !this._isShown && t(this._element).off(xe.KEYDOWN_DISMISS);
      }, n._setResizeEvent = function () {
        var e = this;
        this._isShown ? t(window).on(xe.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(xe.RESIZE);
      }, n._hideModal = function () {
        var e = this;
        this._element.style.display = 'none', this._element.setAttribute('aria-hidden', !0), this._element.removeAttribute('aria-modal'), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(Ie.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(xe.HIDDEN);
        });
      }, n._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, n._showBackdrop = function (e) {
        var n = this,
            o = t(this._element).hasClass(Ie.FADE) ? Ie.FADE : '';

        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement('div'), this._backdrop.className = Ie.BACKDROP, o && this._backdrop.classList.add(o), t(this._backdrop).appendTo(document.body), t(this._element).on(xe.CLICK_DISMISS, function (e) {
            return n._ignoreBackdropClick ? void (n._ignoreBackdropClick = !1) : void (e.target !== e.currentTarget || n._triggerBackdropTransition());
          }), o && h.reflow(this._backdrop), t(this._backdrop).addClass(Ie.SHOW), !e) return;
          if (!o) return void e();
          var i = h.getTransitionDurationFromElement(this._backdrop);
          t(this._backdrop).one(h.TRANSITION_END, e).emulateTransitionEnd(i);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(Ie.SHOW);

          var a = function a() {
            n._removeBackdrop(), e && e();
          };

          if (t(this._element).hasClass(Ie.FADE)) {
            var r = h.getTransitionDurationFromElement(this._backdrop);
            t(this._backdrop).one(h.TRANSITION_END, a).emulateTransitionEnd(r);
          } else a();
        } else e && e();
      }, n._adjustDialog = function () {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
      }, n._resetAdjustments = function () {
        this._element.style.paddingLeft = '', this._element.style.paddingRight = '';
      }, n._checkScrollbar = function () {
        var e = document.body.getBoundingClientRect();
        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, n._setScrollbar = function () {
        var e = this;

        if (this._isBodyOverflowing) {
          var n = [].slice.call(document.querySelectorAll(Oe.FIXED_CONTENT)),
              o = [].slice.call(document.querySelectorAll(Oe.STICKY_CONTENT));
          t(n).each(function (n, o) {
            var i = o.style.paddingRight,
                a = t(o).css('padding-right');
            t(o).data('padding-right', i).css('padding-right', parseFloat(a) + e._scrollbarWidth + 'px');
          }), t(o).each(function (n, o) {
            var i = o.style.marginRight,
                a = t(o).css('margin-right');
            t(o).data('margin-right', i).css('margin-right', parseFloat(a) - e._scrollbarWidth + 'px');
          });
          var i = document.body.style.paddingRight,
              a = t(document.body).css('padding-right');
          t(document.body).data('padding-right', i).css('padding-right', parseFloat(a) + this._scrollbarWidth + 'px');
        }

        t(document.body).addClass(Ie.OPEN);
      }, n._resetScrollbar = function () {
        var e = [].slice.call(document.querySelectorAll(Oe.FIXED_CONTENT));
        t(e).each(function (e, n) {
          var o = t(n).data('padding-right');
          t(n).removeData('padding-right'), n.style.paddingRight = o ? o : '';
        });
        var n = [].slice.call(document.querySelectorAll('' + Oe.STICKY_CONTENT));
        t(n).each(function (e, n) {
          var o = t(n).data('margin-right');
          'undefined' != typeof o && t(n).css('margin-right', o).removeData('margin-right');
        });
        var o = t(document.body).data('padding-right');
        t(document.body).removeData('padding-right'), document.body.style.paddingRight = o ? o : '';
      }, n._getScrollbarWidth = function () {
        var e = document.createElement('div');
        e.className = Ie.SCROLLBAR_MEASURER, document.body.appendChild(e);
        var t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), t;
      }, e._jQueryInterface = function (n, o) {
        return this.each(function () {
          var i = t(this).data(Ce),
              a = s({}, De, {}, t(this).data(), {}, 'object' == _typeof(n) && n ? n : {});

          if (i || (i = new e(this, a), t(this).data(Ce, i)), 'string' == typeof n) {
            if ('undefined' == typeof i[n]) throw new TypeError('No method named "' + n + '"');
            i[n](o);
          } else a.show && i.show(o);
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return De;
        }
      }]), e;
    }();

    t(document).on(xe.CLICK_DATA_API, Oe.DATA_TOGGLE, function (e) {
      var n = this,
          o = h.getSelectorFromElement(this),
          i;
      o && (i = document.querySelector(o));
      var a = t(i).data(Ce) ? 'toggle' : s({}, t(i).data(), {}, t(this).data());
      ('A' === this.tagName || 'AREA' === this.tagName) && e.preventDefault();
      var r = t(i).one(xe.SHOW, function (e) {
        e.isDefaultPrevented() || r.one(xe.HIDDEN, function () {
          t(n).is(':visible') && n.focus();
        });
      });

      we._jQueryInterface.call(t(i), a, this);
    }), t.fn[ve] = we._jQueryInterface, t.fn[ve].Constructor = we, t.fn[ve].noConflict = function () {
      return t.fn[ve] = Se, we._jQueryInterface;
    };

    var Le = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
        ke = /^aria-[\w-]*$/i,
        Pe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        He = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        Me = 'tooltip',
        Re = 'bs.tooltip',
        je = '.' + Re,
        We = t.fn[Me],
        qe = /(^|\s)bs-tooltip\S+/g,
        Fe = ['sanitize', 'whiteList', 'sanitizeFn'],
        Ue = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
      popperConfig: '(null|object)'
    },
        Be = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
        Ve = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        "*": ['class', 'dir', 'id', 'lang', 'role', ke],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    },
        Ge = {
      SHOW: 'show',
      OUT: 'out'
    },
        $e = {
      HIDE: 'hide' + je,
      HIDDEN: 'hidden' + je,
      SHOW: 'show' + je,
      SHOWN: 'shown' + je,
      INSERTED: 'inserted' + je,
      CLICK: 'click' + je,
      FOCUSIN: 'focusin' + je,
      FOCUSOUT: 'focusout' + je,
      MOUSEENTER: 'mouseenter' + je,
      MOUSELEAVE: 'mouseleave' + je
    },
        Ke = {
      FADE: 'fade',
      SHOW: 'show'
    },
        Qe = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    },
        Xe = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
    },
        Ye = function () {
      function e(e, t) {
        if ('undefined' == typeof n) throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
        this._isEnabled = !0, this._timeout = 0, this._hoverState = '', this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }

      var o = e.prototype;
      return o.enable = function () {
        this._isEnabled = !0;
      }, o.disable = function () {
        this._isEnabled = !1;
      }, o.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, o.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              o = t(e.currentTarget).data(n);
          o || (o = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, o)), o._activeTrigger.click = !o._activeTrigger.click, o._isWithActiveTrigger() ? o._enter(null, o) : o._leave(null, o);
        } else {
          if (t(this.getTipElement()).hasClass(Ke.SHOW)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, o.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, o.show = function () {
        var e = this;
        if ('none' === t(this.element).css('display')) throw new Error('Please use show on visible elements');
        var o = t.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(o);
          var i = h.findShadowRoot(this.element),
              a = t.contains(null === i ? this.element.ownerDocument.documentElement : i, this.element);
          if (o.isDefaultPrevented() || !a) return;
          var r = this.getTipElement(),
              s = h.getUID(this.constructor.NAME);
          r.setAttribute('id', s), this.element.setAttribute('aria-describedby', s), this.setContent(), this.config.animation && t(r).addClass(Ke.FADE);

          var l = 'function' == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              d = this._getAttachment(l);

          this.addAttachmentClass(d);

          var p = this._getContainer();

          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(p), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, this._getPopperConfig(d)), t(r).addClass(Ke.SHOW), 'ontouchstart' in document.documentElement && t(document.body).children().on('mouseover', null, t.noop);

          var c = function c() {
            e.config.animation && e._fixTransition();
            var n = e._hoverState;
            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === Ge.OUT && e._leave(null, e);
          };

          if (t(this.tip).hasClass(Ke.FADE)) {
            var u = h.getTransitionDurationFromElement(this.tip);
            t(this.tip).one(h.TRANSITION_END, c).emulateTransitionEnd(u);
          } else c();
        }
      }, o.hide = function (e) {
        var n = this,
            o = this.getTipElement(),
            i = t.Event(this.constructor.Event.HIDE),
            a = function a() {
          n._hoverState !== Ge.SHOW && o.parentNode && o.parentNode.removeChild(o), n._cleanTipClass(), n.element.removeAttribute('aria-describedby'), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };

        if (t(this.element).trigger(i), !i.isDefaultPrevented()) {
          if (t(o).removeClass(Ke.SHOW), 'ontouchstart' in document.documentElement && t(document.body).children().off('mouseover', null, t.noop), this._activeTrigger[Xe.CLICK] = !1, this._activeTrigger[Xe.FOCUS] = !1, this._activeTrigger[Xe.HOVER] = !1, t(this.tip).hasClass(Ke.FADE)) {
            var r = h.getTransitionDurationFromElement(o);
            t(o).one(h.TRANSITION_END, a).emulateTransitionEnd(r);
          } else a();

          this._hoverState = '';
        }
      }, o.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, o.isWithContent = function () {
        return !!this.getTitle();
      }, o.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass('bs-tooltip' + '-' + e);
      }, o.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, o.setContent = function () {
        var e = this.getTipElement();
        this.setElementContent(t(e.querySelectorAll(Qe.TOOLTIP_INNER)), this.getTitle()), t(e).removeClass(Ke.FADE + ' ' + Ke.SHOW);
      }, o.setElementContent = function (e, n) {
        return 'object' == _typeof(n) && (n.nodeType || n.jquery) ? void (this.config.html ? !t(n).parent().is(e) && e.empty().append(n) : e.text(t(n).text())) : void (this.config.html ? (this.config.sanitize && (n = g(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n));
      }, o.getTitle = function () {
        var e = this.element.getAttribute('data-original-title');
        return e || (e = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, o._getPopperConfig = function (e) {
        var t = this,
            n = {
          placement: e,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Qe.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          },
          onUpdate: function onUpdate(e) {
            return t._handlePopperPlacementChange(e);
          }
        };
        return s({}, n, {}, this.config.popperConfig);
      }, o._getOffset = function () {
        var e = this,
            t = {};
        return 'function' == typeof this.config.offset ? t.fn = function (t) {
          return t.offsets = s({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t;
        } : t.offset = this.config.offset, t;
      }, o._getContainer = function () {
        return !1 === this.config.container ? document.body : h.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container);
      }, o._getAttachment = function (e) {
        return Be[e.toUpperCase()];
      }, o._setListeners = function () {
        var e = this,
            n = this.config.trigger.split(' ');
        n.forEach(function (n) {
          if ('click' === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== Xe.MANUAL) {
            var o = n === Xe.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                i = n === Xe.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            t(e.element).on(o, e.config.selector, function (t) {
              return e._enter(t);
            }).on(i, e.config.selector, function (t) {
              return e._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          e.element && e.hide();
        }, t(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
          trigger: 'manual',
          selector: ''
        }) : this._fixTitle();
      }, o._fixTitle = function () {
        var e = _typeof(this.element.getAttribute('data-original-title'));

        (this.element.getAttribute('title') || 'string' != e) && (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', ''));
      }, o._enter = function (e, n) {
        var o = this.constructor.DATA_KEY;
        return (n = n || t(e.currentTarget).data(o), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(o, n)), e && (n._activeTrigger['focusin' === e.type ? Xe.FOCUS : Xe.HOVER] = !0), t(n.getTipElement()).hasClass(Ke.SHOW) || n._hoverState === Ge.SHOW) ? void (n._hoverState = Ge.SHOW) : (clearTimeout(n._timeout), n._hoverState = Ge.SHOW, n.config.delay && n.config.delay.show ? void (n._timeout = setTimeout(function () {
          n._hoverState === Ge.SHOW && n.show();
        }, n.config.delay.show)) : void n.show());
      }, o._leave = function (e, n) {
        var o = this.constructor.DATA_KEY;
        if (n = n || t(e.currentTarget).data(o), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(o, n)), e && (n._activeTrigger['focusout' === e.type ? Xe.FOCUS : Xe.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = Ge.OUT, n.config.delay && n.config.delay.hide ? void (n._timeout = setTimeout(function () {
          n._hoverState === Ge.OUT && n.hide();
        }, n.config.delay.hide)) : void n.hide();
      }, o._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }

        return !1;
      }, o._getConfig = function (e) {
        var n = t(this.element).data();
        return Object.keys(n).forEach(function (e) {
          -1 !== Fe.indexOf(e) && delete n[e];
        }), e = s({}, this.constructor.Default, {}, n, {}, 'object' == _typeof(e) && e ? e : {}), 'number' == typeof e.delay && (e.delay = {
          show: e.delay,
          hide: e.delay
        }), 'number' == typeof e.title && (e.title = e.title.toString()), 'number' == typeof e.content && (e.content = e.content.toString()), h.typeCheckConfig(Me, e, this.constructor.DefaultType), e.sanitize && (e.template = g(e.template, e.whiteList, e.sanitizeFn)), e;
      }, o._getDelegateConfig = function () {
        var e = {};
        if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }
        return e;
      }, o._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr('class').match(qe);
        null !== n && n.length && e.removeClass(n.join(''));
      }, o._handlePopperPlacementChange = function (e) {
        var t = e.instance;
        this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, o._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;
        null !== e.getAttribute('x-placement') || (t(e).removeClass(Ke.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this).data(Re);

          if ((o || !/dispose|hide/.test(n)) && (o || (o = new e(this, 'object' == _typeof(n) && n), t(this).data(Re, o)), 'string' == typeof n)) {
            if ('undefined' == typeof o[n]) throw new TypeError('No method named "' + n + '"');
            o[n]();
          }
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return Ve;
        }
      }, {
        key: 'NAME',
        get: function get() {
          return Me;
        }
      }, {
        key: 'DATA_KEY',
        get: function get() {
          return Re;
        }
      }, {
        key: 'Event',
        get: function get() {
          return $e;
        }
      }, {
        key: 'EVENT_KEY',
        get: function get() {
          return je;
        }
      }, {
        key: 'DefaultType',
        get: function get() {
          return Ue;
        }
      }]), e;
    }();

    t.fn[Me] = Ye._jQueryInterface, t.fn[Me].Constructor = Ye, t.fn[Me].noConflict = function () {
      return t.fn[Me] = We, Ye._jQueryInterface;
    };

    var ze = 'popover',
        Je = 'bs.popover',
        Ze = '.' + Je,
        et = t.fn[ze],
        tt = /(^|\s)bs-popover\S+/g,
        nt = s({}, Ye.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
        ot = s({}, Ye.DefaultType, {
      content: '(string|element|function)'
    }),
        it = {
      FADE: 'fade',
      SHOW: 'show'
    },
        at = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    },
        rt = {
      HIDE: 'hide' + Ze,
      HIDDEN: 'hidden' + Ze,
      SHOW: 'show' + Ze,
      SHOWN: 'shown' + Ze,
      INSERTED: 'inserted' + Ze,
      CLICK: 'click' + Ze,
      FOCUSIN: 'focusin' + Ze,
      FOCUSOUT: 'focusout' + Ze,
      MOUSEENTER: 'mouseenter' + Ze,
      MOUSELEAVE: 'mouseleave' + Ze
    },
        st = function (e) {
      function n() {
        return e.apply(this, arguments) || this;
      }

      l(n, e);
      var o = n.prototype;
      return o.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, o.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass('bs-popover' + '-' + e);
      }, o.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, o.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(at.TITLE), this.getTitle());

        var n = this._getContent();

        'function' == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(at.CONTENT), n), e.removeClass(it.FADE + ' ' + it.SHOW);
      }, o._getContent = function () {
        return this.element.getAttribute('data-content') || this.config.content;
      }, o._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr('class').match(tt);
        null !== n && 0 < n.length && e.removeClass(n.join(''));
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var o = t(this).data(Je),
              i = 'object' == _typeof(e) ? e : null;

          if ((o || !/dispose|hide/.test(e)) && (o || (o = new n(this, i), t(this).data(Je, o)), 'string' == typeof e)) {
            if ('undefined' == typeof o[e]) throw new TypeError('No method named "' + e + '"');
            o[e]();
          }
        });
      }, i(n, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return nt;
        }
      }, {
        key: 'NAME',
        get: function get() {
          return ze;
        }
      }, {
        key: 'DATA_KEY',
        get: function get() {
          return Je;
        }
      }, {
        key: 'Event',
        get: function get() {
          return rt;
        }
      }, {
        key: 'EVENT_KEY',
        get: function get() {
          return Ze;
        }
      }, {
        key: 'DefaultType',
        get: function get() {
          return ot;
        }
      }]), n;
    }(Ye);

    t.fn[ze] = st._jQueryInterface, t.fn[ze].Constructor = st, t.fn[ze].noConflict = function () {
      return t.fn[ze] = et, st._jQueryInterface;
    };

    var lt = 'scrollspy',
        dt = 'bs.scrollspy',
        pt = '.' + dt,
        ct = t.fn[lt],
        ut = {
      offset: 10,
      method: 'auto',
      target: ''
    },
        ft = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    },
        gt = {
      ACTIVATE: 'activate' + pt,
      SCROLL: 'scroll' + pt,
      LOAD_DATA_API: 'load' + pt + '.data-api'
    },
        mt = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    },
        ht = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    },
        yt = {
      OFFSET: 'offset',
      POSITION: 'position'
    },
        _t = function () {
      function e(e, n) {
        var o = this;
        this._element = e, this._scrollElement = 'BODY' === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + ' ' + ht.NAV_LINKS + ',' + (this._config.target + ' ' + ht.LIST_ITEMS + ',') + (this._config.target + ' ' + ht.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(gt.SCROLL, function (e) {
          return o._process(e);
        }), this.refresh(), this._process();
      }

      var n = e.prototype;
      return n.refresh = function () {
        var e = this,
            n = this._scrollElement === this._scrollElement.window ? yt.OFFSET : yt.POSITION,
            o = 'auto' === this._config.method ? n : this._config.method,
            i = o === yt.POSITION ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
        var a = [].slice.call(document.querySelectorAll(this._selector));
        a.map(function (e) {
          var n = h.getSelectorFromElement(e),
              a;

          if (n && (a = document.querySelector(n)), a) {
            var r = a.getBoundingClientRect();
            if (r.width || r.height) return [t(a)[o]().top + i, n];
          }

          return null;
        }).filter(function (e) {
          return e;
        }).sort(function (e, t) {
          return e[0] - t[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, n.dispose = function () {
        t.removeData(this._element, dt), t(this._scrollElement).off(pt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, n._getConfig = function (e) {
        if (e = s({}, ut, {}, 'object' == _typeof(e) && e ? e : {}), 'string' != typeof e.target) {
          var n = t(e.target).attr('id');
          n || (n = h.getUID(lt), t(e.target).attr('id', n)), e.target = '#' + n;
        }

        return h.typeCheckConfig(lt, e, ft), e;
      }, n._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, n._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, n._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, n._process = function () {
        var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();

        if (this._scrollHeight !== t && this.refresh(), e >= n) {
          var o = this._targets[this._targets.length - 1];
          return void (this._activeTarget !== o && this._activate(o));
        }

        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var a = this._offsets.length, r = a, i; r--;) {
          i = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ('undefined' == typeof this._offsets[r + 1] || e < this._offsets[r + 1]), i && this._activate(this._targets[r]);
        }
      }, n._activate = function (e) {
        this._activeTarget = e, this._clear();

        var n = this._selector.split(',').map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        }),
            o = t([].slice.call(document.querySelectorAll(n.join(','))));

        o.hasClass(mt.DROPDOWN_ITEM) ? (o.closest(ht.DROPDOWN).find(ht.DROPDOWN_TOGGLE).addClass(mt.ACTIVE), o.addClass(mt.ACTIVE)) : (o.addClass(mt.ACTIVE), o.parents(ht.NAV_LIST_GROUP).prev(ht.NAV_LINKS + ', ' + ht.LIST_ITEMS).addClass(mt.ACTIVE), o.parents(ht.NAV_LIST_GROUP).prev(ht.NAV_ITEMS).children(ht.NAV_LINKS).addClass(mt.ACTIVE)), t(this._scrollElement).trigger(gt.ACTIVATE, {
          relatedTarget: e
        });
      }, n._clear = function () {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
          return e.classList.contains(mt.ACTIVE);
        }).forEach(function (e) {
          return e.classList.remove(mt.ACTIVE);
        });
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this).data(dt);

          if (o || (o = new e(this, 'object' == _typeof(n) && n), t(this).data(dt, o)), 'string' == typeof n) {
            if ('undefined' == typeof o[n]) throw new TypeError('No method named "' + n + '"');
            o[n]();
          }
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'Default',
        get: function get() {
          return ut;
        }
      }]), e;
    }();

    t(window).on(gt.LOAD_DATA_API, function () {
      for (var e = [].slice.call(document.querySelectorAll(ht.DATA_SPY)), n = e.length, o = n, i; o--;) {
        i = t(e[o]), _t._jQueryInterface.call(i, i.data());
      }
    }), t.fn[lt] = _t._jQueryInterface, t.fn[lt].Constructor = _t, t.fn[lt].noConflict = function () {
      return t.fn[lt] = ct, _t._jQueryInterface;
    };

    var Et = 'tab',
        Tt = 'bs.tab',
        bt = '.' + Tt,
        vt = t.fn[Et],
        Ct = {
      HIDE: 'hide' + bt,
      HIDDEN: 'hidden' + bt,
      SHOW: 'show' + bt,
      SHOWN: 'shown' + bt,
      CLICK_DATA_API: 'click' + bt + '.data-api'
    },
        At = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    },
        St = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    },
        Dt = function () {
      function e(e) {
        this._element = e;
      }

      var n = e.prototype;
      return n.show = function () {
        var e = this;

        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(At.ACTIVE) || t(this._element).hasClass(At.DISABLED))) {
          var n = t(this._element).closest(St.NAV_LIST_GROUP)[0],
              o = h.getSelectorFromElement(this._element),
              i,
              a;

          if (n) {
            var r = 'UL' === n.nodeName || 'OL' === n.nodeName ? St.ACTIVE_UL : St.ACTIVE;
            a = t.makeArray(t(n).find(r)), a = a[a.length - 1];
          }

          var s = t.Event(Ct.HIDE, {
            relatedTarget: this._element
          }),
              l = t.Event(Ct.SHOW, {
            relatedTarget: a
          });

          if (a && t(a).trigger(s), t(this._element).trigger(l), !(l.isDefaultPrevented() || s.isDefaultPrevented())) {
            o && (i = document.querySelector(o)), this._activate(this._element, n);

            var d = function d() {
              var n = t.Event(Ct.HIDDEN, {
                relatedTarget: e._element
              }),
                  o = t.Event(Ct.SHOWN, {
                relatedTarget: a
              });
              t(a).trigger(n), t(e._element).trigger(o);
            };

            i ? this._activate(i, i.parentNode, d) : d();
          }
        }
      }, n.dispose = function () {
        t.removeData(this._element, Tt), this._element = null;
      }, n._activate = function (e, n, o) {
        var i = this,
            a = n && ('UL' === n.nodeName || 'OL' === n.nodeName) ? t(n).find(St.ACTIVE_UL) : t(n).children(St.ACTIVE),
            r = a[0],
            s = o && r && t(r).hasClass(At.FADE),
            l = function l() {
          return i._transitionComplete(e, r, o);
        };

        if (r && s) {
          var d = h.getTransitionDurationFromElement(r);
          t(r).removeClass(At.SHOW).one(h.TRANSITION_END, l).emulateTransitionEnd(d);
        } else l();
      }, n._transitionComplete = function (e, n, o) {
        if (n) {
          t(n).removeClass(At.ACTIVE);
          var i = t(n.parentNode).find(St.DROPDOWN_ACTIVE_CHILD)[0];
          i && t(i).removeClass(At.ACTIVE), 'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1);
        }

        if (t(e).addClass(At.ACTIVE), 'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0), h.reflow(e), e.classList.contains(At.FADE) && e.classList.add(At.SHOW), e.parentNode && t(e.parentNode).hasClass(At.DROPDOWN_MENU)) {
          var a = t(e).closest(St.DROPDOWN)[0];

          if (a) {
            var r = [].slice.call(a.querySelectorAll(St.DROPDOWN_TOGGLE));
            t(r).addClass(At.ACTIVE);
          }

          e.setAttribute('aria-expanded', !0);
        }

        o && o();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this),
              i = o.data(Tt);

          if (i || (i = new e(this), o.data(Tt, i)), 'string' == typeof n) {
            if ('undefined' == typeof i[n]) throw new TypeError('No method named "' + n + '"');
            i[n]();
          }
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }]), e;
    }();

    t(document).on(Ct.CLICK_DATA_API, St.DATA_TOGGLE, function (e) {
      e.preventDefault(), Dt._jQueryInterface.call(t(this), 'show');
    }), t.fn[Et] = Dt._jQueryInterface, t.fn[Et].Constructor = Dt, t.fn[Et].noConflict = function () {
      return t.fn[Et] = vt, Dt._jQueryInterface;
    };

    var Nt = 'toast',
        xt = 'bs.toast',
        It = '.' + xt,
        Ot = t.fn[Nt],
        wt = {
      CLICK_DISMISS: 'click.dismiss' + It,
      HIDE: 'hide' + It,
      HIDDEN: 'hidden' + It,
      SHOW: 'show' + It,
      SHOWN: 'shown' + It
    },
        Lt = {
      FADE: 'fade',
      HIDE: 'hide',
      SHOW: 'show',
      SHOWING: 'showing'
    },
        kt = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    },
        Pt = {
      animation: !0,
      autohide: !0,
      delay: 500
    },
        Ht = {
      DATA_DISMISS: '[data-dismiss="toast"]'
    },
        Mt = function () {
      function e(e, t) {
        this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
      }

      var n = e.prototype;
      return n.show = function () {
        var e = this,
            n = t.Event(wt.SHOW);

        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
          this._config.animation && this._element.classList.add(Lt.FADE);

          var o = function o() {
            e._element.classList.remove(Lt.SHOWING), e._element.classList.add(Lt.SHOW), t(e._element).trigger(wt.SHOWN), e._config.autohide && (e._timeout = setTimeout(function () {
              e.hide();
            }, e._config.delay));
          };

          if (this._element.classList.remove(Lt.HIDE), h.reflow(this._element), this._element.classList.add(Lt.SHOWING), this._config.animation) {
            var i = h.getTransitionDurationFromElement(this._element);
            t(this._element).one(h.TRANSITION_END, o).emulateTransitionEnd(i);
          } else o();
        }
      }, n.hide = function () {
        if (this._element.classList.contains(Lt.SHOW)) {
          var e = t.Event(wt.HIDE);
          t(this._element).trigger(e), e.isDefaultPrevented() || this._close();
        }
      }, n.dispose = function () {
        clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Lt.SHOW) && this._element.classList.remove(Lt.SHOW), t(this._element).off(wt.CLICK_DISMISS), t.removeData(this._element, xt), this._element = null, this._config = null;
      }, n._getConfig = function (e) {
        return e = s({}, Pt, {}, t(this._element).data(), {}, 'object' == _typeof(e) && e ? e : {}), h.typeCheckConfig(Nt, e, this.constructor.DefaultType), e;
      }, n._setListeners = function () {
        var e = this;
        t(this._element).on(wt.CLICK_DISMISS, Ht.DATA_DISMISS, function () {
          return e.hide();
        });
      }, n._close = function () {
        var e = this,
            n = function n() {
          e._element.classList.add(Lt.HIDE), t(e._element).trigger(wt.HIDDEN);
        };

        if (this._element.classList.remove(Lt.SHOW), this._config.animation) {
          var o = h.getTransitionDurationFromElement(this._element);
          t(this._element).one(h.TRANSITION_END, n).emulateTransitionEnd(o);
        } else n();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var o = t(this),
              i = o.data(xt);

          if (i || (i = new e(this, 'object' == _typeof(n) && n), o.data(xt, i)), 'string' == typeof n) {
            if ('undefined' == typeof i[n]) throw new TypeError('No method named "' + n + '"');
            i[n](this);
          }
        });
      }, i(e, null, [{
        key: 'VERSION',
        get: function get() {
          return '4.4.1';
        }
      }, {
        key: 'DefaultType',
        get: function get() {
          return kt;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Pt;
        }
      }]), e;
    }();

    t.fn[Nt] = Mt._jQueryInterface, t.fn[Nt].Constructor = Mt, t.fn[Nt].noConflict = function () {
      return t.fn[Nt] = Ot, Mt._jQueryInterface;
    }, e.Alert = C, e.Button = L, e.Carousel = G, e.Collapse = oe, e.Dropdown = be, e.Modal = we, e.Popover = st, e.Scrollspy = _t, e.Tab = Dt, e.Toast = Mt, e.Tooltip = Ye, e.Util = h, Object.defineProperty(e, '__esModule', {
      value: !0
    });
  });
}, function (e, t) {
  var n = Math.max,
      o,
      i;
  /*!
  * jQuery JavaScript Library v3.4.1
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright JS Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2019-05-01T21:04Z
  */

  (function (t, n) {
    'use strict';

    'object' == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error('jQuery requires a window with a document');
      return n(e);
    } : n(t);
  })('undefined' == typeof window ? this : window, function (a, r) {
    'use strict';

    function s(e, t, n) {
      n = n || me;
      var o = n.createElement('script'),
          a,
          i;
      if (o.text = e, t) for (a in Ie) {
        i = t[a] || t.getAttribute && t.getAttribute(a), i && o.setAttribute(a, i);
      }
      n.head.appendChild(o).parentNode.removeChild(o);
    }

    function d(e) {
      return null == e ? e + '' : 'object' == _typeof(e) || 'function' == typeof e ? be[ve.call(e)] || 'object' : _typeof(e);
    }

    function l(e) {
      var t = !!e && 'length' in e && e.length,
          n = d(e);
      return !(Ne(e) || xe(e)) && ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e);
    }

    function p(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    function c(e, t, n) {
      return Ne(t) ? we.grep(e, function (e, o) {
        return !!t.call(e, o, e) !== n;
      }) : t.nodeType ? we.grep(e, function (e) {
        return e === t !== n;
      }) : 'string' == typeof t ? we.filter(t, e, n) : we.grep(e, function (e) {
        return -1 < Te.call(t, e) !== n;
      });
    }

    function u(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    function f(e) {
      var t = {};
      return we.each(e.match(Be) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }

    function g(e) {
      return e;
    }

    function m(e) {
      throw e;
    }

    function h(e, t, n, o) {
      var i;

      try {
        e && Ne(i = e.promise) ? i.call(e).done(t).fail(n) : e && Ne(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    function y() {
      me.removeEventListener('DOMContentLoaded', y), a.removeEventListener('load', y), we.ready();
    }

    function _(e, t) {
      return t.toUpperCase();
    }

    function E(e) {
      return e.replace(Ke, 'ms-').replace(Qe, _);
    }

    function T() {
      this.expando = we.expando + T.uid++;
    }

    function b(e) {
      return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : Je.test(e) ? JSON.parse(e) : e);
    }

    function v(e, t, n) {
      var o;
      if (void 0 === n && 1 === e.nodeType) if (o = 'data-' + t.replace(Ze, '-$&').toLowerCase(), n = e.getAttribute(o), 'string' == typeof n) {
        try {
          n = b(n);
        } catch (t) {}

        ze.set(e, t, n);
      } else n = void 0;
      return n;
    }

    function C(e, t, n, o) {
      var i = 20,
          a = o ? function () {
        return o.cur();
      } : function () {
        return we.css(e, t, '');
      },
          r = a(),
          s = n && n[3] || (we.cssNumber[t] ? '' : 'px'),
          l = e.nodeType && (we.cssNumber[t] || 'px' !== s && +r) && tt.exec(we.css(e, t)),
          d,
          p;

      if (l && l[3] !== s) {
        for (r /= 2, s = s || l[3], l = +r || 1; i--;) {
          we.style(e, t, l + s), 0 >= (1 - p) * (1 - (p = a() / r || .5)) && (i = 0), l /= p;
        }

        l *= 2, we.style(e, t, l + s), n = n || [];
      }

      return n && (l = +l || +r || 0, d = n[1] ? l + (n[1] + 1) * n[2] : +n[2], o && (o.unit = s, o.start = l, o.end = d)), d;
    }

    function A(e) {
      var t = e.ownerDocument,
          n = e.nodeName,
          o = lt[n],
          i;
      return o ? o : (i = t.body.appendChild(t.createElement(n)), o = we.css(i, 'display'), i.parentNode.removeChild(i), 'none' === o && (o = 'block'), lt[n] = o, o);
    }

    function S(e, t) {
      for (var n = [], o = 0, i = e.length, a, r; o < i; o++) {
        (r = e[o], !!r.style) && (a = r.style.display, t ? ('none' === a && (n[o] = Ye.get(r, 'display') || null, !n[o] && (r.style.display = '')), '' === r.style.display && rt(r) && (n[o] = A(r))) : 'none' !== a && (n[o] = 'none', Ye.set(r, 'display', a)));
      }

      for (o = 0; o < i; o++) {
        null != n[o] && (e[o].style.display = n[o]);
      }

      return e;
    }

    function D(e, t) {
      var n;
      return n = 'undefined' == typeof e.getElementsByTagName ? 'undefined' == typeof e.querySelectorAll ? [] : e.querySelectorAll(t || '*') : e.getElementsByTagName(t || '*'), void 0 === t || t && p(e, t) ? we.merge([e], n) : n;
    }

    function N(e, t) {
      for (var n = 0, o = e.length; n < o; n++) {
        Ye.set(e[n], 'globalEval', !t || Ye.get(t[n], 'globalEval'));
      }
    }

    function x(e, t, n, o, a) {
      for (var r = t.createDocumentFragment(), s = [], p = 0, i = e.length, l, c, u, f, g, m; p < i; p++) {
        if (l = e[p], l || 0 === l) if ('object' === d(l)) we.merge(s, l.nodeType ? [l] : l);else if (!ft.test(l)) s.push(t.createTextNode(l));else {
          for (c = c || r.appendChild(t.createElement('div')), u = (pt.exec(l) || ['', ''])[1].toLowerCase(), f = ut[u] || ut._default, c.innerHTML = f[1] + we.htmlPrefilter(l) + f[2], m = f[0]; m--;) {
            c = c.lastChild;
          }

          we.merge(s, c.childNodes), c = r.firstChild, c.textContent = '';
        }
      }

      for (r.textContent = '', p = 0; l = s[p++];) {
        if (o && -1 < we.inArray(l, o)) {
          a && a.push(l);
          continue;
        }

        if (g = it(l), c = D(r.appendChild(l), 'script'), g && N(c), n) for (m = 0; l = c[m++];) {
          ct.test(l.type || '') && n.push(l);
        }
      }

      return r;
    }

    function I() {
      return !0;
    }

    function O() {
      return !1;
    }

    function w(e, t) {
      return e === L() == ('focus' === t);
    }

    function L() {
      try {
        return me.activeElement;
      } catch (e) {}
    }

    function k(e, t, n, o, i, a) {
      var r, s;

      if ('object' == _typeof(t)) {
        for (s in 'string' != typeof n && (o = o || n, n = void 0), t) {
          k(e, s, n, o, t[s], a);
        }

        return e;
      }

      if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ('string' == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = O;else if (!i) return e;
      return 1 === a && (r = i, i = function i(e) {
        return we().off(e), r.apply(this, arguments);
      }, i.guid = r.guid || (r.guid = we.guid++)), e.each(function () {
        we.event.add(this, t, i, o, n);
      });
    }

    function P(e, t, n) {
      return n ? void (Ye.set(e, t, !1), we.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var o = Ye.get(this, t),
              i,
              a;
          if (!(1 & e.isTrigger && this[t])) o.length && (Ye.set(this, t, {
            value: we.event.trigger(we.extend(o[0], we.Event.prototype), o.slice(1), this)
          }), e.stopImmediatePropagation());else if (!!o.length) (we.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = ye.call(arguments), Ye.set(this, t, o), i = n(this, t), this[t](), a = Ye.get(this, t), o !== a || i ? Ye.set(this, t, !1) : a = {}, o !== a) return e.stopImmediatePropagation(), e.preventDefault(), a.value;
        }
      })) : void (void 0 === Ye.get(e, t) && we.event.add(e, t, I));
    }

    function H(e, t) {
      return p(e, 'table') && p(11 === t.nodeType ? t.firstChild : t, 'tr') ? we(e).children('tbody')[0] || e : e;
    }

    function M(e) {
      return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
    }

    function R(e) {
      return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), e;
    }

    function j(e, t) {
      var n, o, i, a, r, s, l, d;

      if (1 === t.nodeType) {
        if (Ye.hasData(e) && (a = Ye.access(e), r = Ye.set(t, a), d = a.events, d)) for (i in delete r.handle, r.events = {}, d) {
          for (n = 0, o = d[i].length; n < o; n++) {
            we.event.add(t, i, d[i][n]);
          }
        }
        ze.hasData(e) && (s = ze.access(e), l = we.extend({}, s), ze.set(t, l));
      }
    }

    function W(e, t) {
      var n = t.nodeName.toLowerCase();
      'input' === n && dt.test(e.type) ? t.checked = e.checked : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
    }

    function q(e, t, n, o) {
      t = _e.apply([], t);
      var a = 0,
          i = e.length,
          r = t[0],
          l = Ne(r),
          d,
          p,
          c,
          u,
          f,
          g;
      if (l || 1 < i && 'string' == typeof r && !De.checkClone && Et.test(r)) return e.each(function (i) {
        var a = e.eq(i);
        l && (t[0] = r.call(this, i, a.html())), q(a, t, n, o);
      });

      if (i && (d = x(t, e[0].ownerDocument, !1, e, o), p = d.firstChild, 1 === d.childNodes.length && (d = p), p || o)) {
        for (c = we.map(D(d, 'script'), M), u = c.length; a < i; a++) {
          f = d, a != i - 1 && (f = we.clone(f, !0, !0), u && we.merge(c, D(f, 'script'))), n.call(e[a], f, a);
        }

        if (u) for (g = c[c.length - 1].ownerDocument, we.map(c, R), a = 0; a < u; a++) {
          f = c[a], ct.test(f.type || '') && !Ye.access(f, 'globalEval') && we.contains(g, f) && (f.src && 'module' !== (f.type || '').toLowerCase() ? we._evalUrl && !f.noModule && we._evalUrl(f.src, {
            nonce: f.nonce || f.getAttribute('nonce')
          }) : s(f.textContent.replace(Tt, ''), f, g));
        }
      }

      return e;
    }

    function F(e, t, n) {
      for (var o = t ? we.filter(t, e) : e, a = 0, i; null != (i = o[a]); a++) {
        n || 1 !== i.nodeType || we.cleanData(D(i)), i.parentNode && (n && it(i) && N(D(i, 'script')), i.parentNode.removeChild(i));
      }

      return e;
    }

    function U(e, t, n) {
      var o = e.style,
          i,
          a,
          r,
          s;
      return n = n || vt(e), n && (s = n.getPropertyValue(t) || n[t], '' === s && !it(e) && (s = we.style(e, t)), !De.pixelBoxStyles() && bt.test(s) && Ct.test(t) && (i = o.width, a = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = a, o.maxWidth = r)), void 0 === s ? s : s + '';
    }

    function B(e, t) {
      return {
        get: function get() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments);
        }
      };
    }

    function V(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = At.length; n--;) {
        if (e = At[n] + t, e in St) return e;
      }
    }

    function G(e) {
      var t = we.cssProps[e] || Dt[e];
      return t ? t : e in St ? e : Dt[e] = V(e) || e;
    }

    function K(e, t, o) {
      var i = tt.exec(t);
      return i ? n(0, i[2] - (o || 0)) + (i[3] || 'px') : t;
    }

    function Q(e, t, o, a, r, s) {
      var l = 'width' === t ? 1 : 0,
          i = 0,
          d = 0;
      if (o === (a ? 'border' : 'content')) return 0;

      for (; 4 > l; l += 2) {
        'margin' === o && (d += we.css(e, o + nt[l], !0, r)), a ? ('content' === o && (d -= we.css(e, 'padding' + nt[l], !0, r)), 'margin' !== o && (d -= we.css(e, 'border' + nt[l] + 'Width', !0, r))) : (d += we.css(e, 'padding' + nt[l], !0, r), 'padding' === o ? i += we.css(e, 'border' + nt[l] + 'Width', !0, r) : d += we.css(e, 'border' + nt[l] + 'Width', !0, r));
      }

      return !a && 0 <= s && (d += n(0, fe(e['offset' + t[0].toUpperCase() + t.slice(1)] - s - d - i - .5)) || 0), d;
    }

    function X(e, t, n) {
      var o = vt(e),
          i = !De.boxSizingReliable() || n,
          a = i && 'border-box' === we.css(e, 'boxSizing', !1, o),
          r = a,
          s = U(e, t, o),
          l = 'offset' + t[0].toUpperCase() + t.slice(1);

      if (bt.test(s)) {
        if (!n) return s;
        s = 'auto';
      }

      return (!De.boxSizingReliable() && a || 'auto' === s || !parseFloat(s) && 'inline' === we.css(e, 'display', !1, o)) && e.getClientRects().length && (a = 'border-box' === we.css(e, 'boxSizing', !1, o), r = l in e, r && (s = e[l])), s = parseFloat(s) || 0, s + Q(e, t, n || (a ? 'border' : 'content'), r, o, s) + 'px';
    }

    function Y(e, t, n, o, i) {
      return new Y.prototype.init(e, t, n, o, i);
    }

    function z() {
      Pt && (!1 === me.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(z) : a.setTimeout(z, we.fx.interval), we.fx.tick());
    }

    function J() {
      return a.setTimeout(function () {
        kt = void 0;
      }), kt = Date.now();
    }

    function Z(e, t) {
      var n = 0,
          o = {
        height: e
      },
          i;

      for (t = t ? 1 : 0; 4 > n; n += 2 - t) {
        i = nt[n], o['margin' + i] = o['padding' + i] = e;
      }

      return t && (o.opacity = o.width = e), o;
    }

    function ee(e, t, n) {
      for (var o = (oe.tweeners[t] || []).concat(oe.tweeners['*']), i = 0, a = o.length, r; i < a; i++) {
        if (r = o[i].call(n, t, e)) return r;
      }
    }

    function te(e, t, n) {
      var o = 'width' in t || 'height' in t,
          i = this,
          a = {},
          r = e.style,
          s = e.nodeType && rt(e),
          l = Ye.get(e, 'fxshow'),
          d,
          p,
          c,
          u,
          f,
          g,
          m,
          h;

      for (d in n.queue || (u = we._queueHooks(e, 'fx'), null == u.unqueued && (u.unqueued = 0, f = u.empty.fire, u.empty.fire = function () {
        u.unqueued || f();
      }), u.unqueued++, i.always(function () {
        i.always(function () {
          u.unqueued--, we.queue(e, 'fx').length || u.empty.fire();
        });
      })), t) {
        if (p = t[d], wt.test(p)) {
          if (delete t[d], c = c || 'toggle' === p, p === (s ? 'hide' : 'show')) if ('show' === p && l && void 0 !== l[d]) s = !0;else continue;
          a[d] = l && l[d] || we.style(e, d);
        }
      }

      if (g = !we.isEmptyObject(t), g || !we.isEmptyObject(a)) for (d in o && 1 === e.nodeType && (n.overflow = [r.overflow, r.overflowX, r.overflowY], m = l && l.display, null == m && (m = Ye.get(e, 'display')), h = we.css(e, 'display'), 'none' === h && (m ? h = m : (S([e], !0), m = e.style.display || m, h = we.css(e, 'display'), S([e]))), ('inline' === h || 'inline-block' === h && null != m) && 'none' === we.css(e, 'float') && (!g && (i.done(function () {
        r.display = m;
      }), null == m && (h = r.display, m = 'none' === h ? '' : h)), r.display = 'inline-block')), n.overflow && (r.overflow = 'hidden', i.always(function () {
        r.overflow = n.overflow[0], r.overflowX = n.overflow[1], r.overflowY = n.overflow[2];
      })), g = !1, a) {
        g || (l ? 'hidden' in l && (s = l.hidden) : l = Ye.access(e, 'fxshow', {
          display: m
        }), c && (l.hidden = !s), s && S([e], !0), i.done(function () {
          for (d in s || S([e]), Ye.remove(e, 'fxshow'), a) {
            we.style(e, d, a[d]);
          }
        })), g = ee(s ? l[d] : 0, d, i), d in l || (l[d] = g.start, s && (g.end = g.start, g.start = 0));
      }
    }

    function ne(e, t) {
      var n, o, i, a, r;

      for (n in e) {
        if (o = E(n), i = t[o], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n != o && (e[o] = a, delete e[n]), r = we.cssHooks[o], r && 'expand' in r) for (n in a = r.expand(a), delete e[o], a) {
          n in e || (e[n] = a[n], t[n] = i);
        } else t[o] = i;
      }
    }

    function oe(e, t, o) {
      var i = 0,
          a = oe.prefilters.length,
          r = we.Deferred().always(function () {
        delete s.elem;
      }),
          s = function s() {
        if (c) return !1;

        for (var t = kt || J(), o = n(0, l.startTime + l.duration - t), i = o / l.duration || 0, a = 1 - i, s = 0, d = l.tweens.length; s < d; s++) {
          l.tweens[s].run(a);
        }

        return (r.notifyWith(e, [l, a, o]), 1 > a && d) ? o : (d || r.notifyWith(e, [l, 1, 0]), r.resolveWith(e, [l]), !1);
      },
          l = r.promise({
        elem: e,
        props: we.extend({}, t),
        opts: we.extend(!0, {
          specialEasing: {},
          easing: we.easing._default
        }, o),
        originalProperties: t,
        originalOptions: o,
        startTime: kt || J(),
        duration: o.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var o = we.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(o), o;
        },
        stop: function stop(t) {
          var n = 0,
              o = t ? l.tweens.length : 0;
          if (c) return this;

          for (c = !0; n < o; n++) {
            l.tweens[n].run(1);
          }

          return t ? (r.notifyWith(e, [l, 1, 0]), r.resolveWith(e, [l, t])) : r.rejectWith(e, [l, t]), this;
        }
      }),
          d = l.props,
          p,
          c;

      for (ne(d, l.opts.specialEasing); i < a; i++) {
        if (p = oe.prefilters[i].call(l, e, d, l.opts), p) return Ne(p.stop) && (we._queueHooks(l.elem, l.opts.queue).stop = p.stop.bind(p)), p;
      }

      return we.map(d, ee, l), Ne(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), we.fx.timer(we.extend(s, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l;
    }

    function ie(e) {
      var t = e.match(Be) || [];
      return t.join(' ');
    }

    function ae(e) {
      return e.getAttribute && e.getAttribute('class') || '';
    }

    function re(e) {
      return Array.isArray(e) ? e : 'string' == typeof e ? e.match(Be) || [] : [];
    }

    function se(e, t, n, o) {
      if (Array.isArray(t)) we.each(t, function (t, i) {
        n || Gt.test(e) ? o(e, i) : se(e + '[' + ('object' == _typeof(i) && null != i ? t : '') + ']', i, n, o);
      });else if (!n && 'object' === d(t)) for (var i in t) {
        se(e + '[' + i + ']', t[i], n, o);
      } else o(e, t);
    }

    function le(e) {
      return function (t, n) {
        'string' != typeof t && (n = t, t = '*');
        var o = 0,
            i = t.toLowerCase().match(Be) || [],
            a;
        if (Ne(n)) for (; a = i[o++];) {
          '+' === a[0] ? (a = a.slice(1) || '*', (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n);
        }
      };
    }

    function de(e, t, n, o) {
      function i(s) {
        var l;
        return a[s] = !0, we.each(e[s] || [], function (e, s) {
          var d = s(t, n, o);
          return 'string' != typeof d || r || a[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), i(d), !1);
        }), l;
      }

      var a = {},
          r = e === on;
      return i(t.dataTypes[0]) || !a['*'] && i('*');
    }

    function pe(e, t) {
      var n = we.ajaxSettings.flatOptions || {},
          o,
          i;

      for (o in t) {
        void 0 !== t[o] && ((n[o] ? e : i || (i = {}))[o] = t[o]);
      }

      return i && we.extend(!0, e, i), e;
    }

    function ce(e, t, n) {
      for (var o = e.contents, i = e.dataTypes, a, r, s, l; '*' === i[0];) {
        i.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader('Content-Type'));
      }

      if (a) for (r in o) {
        if (o[r] && o[r].test(a)) {
          i.unshift(r);
          break;
        }
      }
      if (i[0] in n) s = i[0];else {
        for (r in n) {
          if (!i[0] || e.converters[r + ' ' + i[0]]) {
            s = r;
            break;
          }

          l || (l = r);
        }

        s = s || l;
      }
      return s ? (s !== i[0] && i.unshift(s), n[s]) : void 0;
    }

    function ue(e, t, n, o) {
      var i = {},
          a = e.dataTypes.slice(),
          r,
          s,
          l,
          d,
          p;
      if (a[1]) for (l in e.converters) {
        i[l.toLowerCase()] = e.converters[l];
      }

      for (s = a.shift(); s;) {
        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !p && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), p = s, s = a.shift(), s) if ('*' === s) s = p;else if ('*' !== p && p != s) {
          if (l = i[p + ' ' + s] || i['* ' + s], !l) for (r in i) {
            if (d = r.split(' '), d[1] === s && (l = i[p + ' ' + d[0]] || i['* ' + d[0]], l)) {
              !0 === l ? l = i[r] : !0 !== i[r] && (s = d[0], a.unshift(d[1]));
              break;
            }
          }
          if (!0 !== l) if (l && e["throws"]) t = l(t);else try {
            t = l(t);
          } catch (t) {
            return {
              state: 'parsererror',
              error: l ? t : 'No conversion from ' + p + ' to ' + s
            };
          }
        }
      }

      return {
        state: 'success',
        data: t
      };
    }

    var fe = Math.ceil,
        ge = [],
        me = a.document,
        he = Object.getPrototypeOf,
        ye = ge.slice,
        _e = ge.concat,
        Ee = ge.push,
        Te = ge.indexOf,
        be = {},
        ve = be.toString,
        Ce = be.hasOwnProperty,
        Ae = Ce.toString,
        Se = Ae.call(Object),
        De = {},
        Ne = function Ne(e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
        xe = function xe(e) {
      return null != e && e === e.window;
    },
        Ie = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    },
        Oe = '3.4.1',
        we = function we(e, t) {
      return new we.fn.init(e, t);
    },
        Le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    we.fn = we.prototype = {
      jquery: Oe,
      constructor: we,
      length: 0,
      toArray: function toArray() {
        return ye.call(this);
      },
      get: function get(e) {
        return null == e ? ye.call(this) : 0 > e ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = we.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return we.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(we.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(ye.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (0 > e ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: Ee,
      sort: ge.sort,
      splice: ge.splice
    }, we.extend = we.fn.extend = function () {
      var e = arguments[0] || {},
          t = 1,
          n = arguments.length,
          o = !1,
          i,
          a,
          r,
          s,
          l,
          d;

      for ('boolean' == typeof e && (o = e, e = arguments[t] || {}, t++), 'object' == _typeof(e) || Ne(e) || (e = {}), t === n && (e = this, t--); t < n; t++) {
        if (null != (i = arguments[t])) for (a in i) {
          (s = i[a], '__proto__' !== a && e !== s) && (o && s && (we.isPlainObject(s) || (l = Array.isArray(s))) ? (r = e[a], d = l && !Array.isArray(r) ? [] : l || we.isPlainObject(r) ? r : {}, l = !1, e[a] = we.extend(o, d, s)) : void 0 !== s && (e[a] = s));
        }
      }

      return e;
    }, we.extend({
      expando: 'jQuery' + (Oe + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !!(e && '[object Object]' === ve.call(e)) && ((t = he(e), !!!t) || (n = Ce.call(t, 'constructor') && t.constructor, 'function' == typeof n && Ae.call(n) === Se));
      },
      isEmptyObject: function isEmptyObject(e) {
        for (var t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t) {
        s(e, {
          nonce: t && t.nonce
        });
      },
      each: function each(e, t) {
        var n = 0,
            o;
        if (l(e)) for (o = e.length; n < o && !1 !== t.call(e[n], n, e[n]); n++) {
          ;
        } else for (n in e) {
          if (!1 === t.call(e[n], n, e[n])) break;
        }
        return e;
      },
      trim: function trim(e) {
        return null == e ? '' : (e + '').replace(Le, '');
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (l(Object(e)) ? we.merge(n, 'string' == typeof e ? [e] : e) : Ee.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : Te.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, o = 0, a = e.length; o < n; o++) {
          e[a++] = t[o];
        }

        return e.length = a, e;
      },
      grep: function grep(e, t, n) {
        for (var o = [], a = 0, i = e.length, r; a < i; a++) {
          r = !t(e[a], a), r !== !n && o.push(e[a]);
        }

        return o;
      },
      map: function map(e, t, n) {
        var o = 0,
            i = [],
            a,
            r;
        if (l(e)) for (a = e.length; o < a; o++) {
          r = t(e[o], o, n), null != r && i.push(r);
        } else for (o in e) {
          r = t(e[o], o, n), null != r && i.push(r);
        }
        return _e.apply([], i);
      },
      guid: 1,
      support: De
    }), 'function' == typeof Symbol && (we.fn[Symbol.iterator] = ge[Symbol.iterator]), we.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'], function (e, t) {
      be['[object ' + t + ']'] = t.toLowerCase();
    });

    var ke =
    /*!
    * Sizzle CSS Selector Engine v2.3.4
    * https://sizzlejs.com/
    *
    * Copyright JS Foundation and other contributors
    * Released under the MIT license
    * https://js.foundation/
    *
    * Date: 2019-04-08
    */
    function (e) {
      function t(e, t, n, o) {
        var a = t && t.ownerDocument,
            r = t ? t.nodeType : 9,
            s,
            l,
            i,
            d,
            p,
            c,
            f;
        if (n = n || [], 'string' != typeof e || !e || 1 !== r && 9 !== r && 11 !== r) return n;

        if (!o && ((t ? t.ownerDocument || t : C) !== Ee && _e(t), t = t || Ee, be)) {
          if (11 !== r && (p = ee.exec(e))) if (!(s = p[1])) {
            if (p[2]) return H.apply(n, t.getElementsByTagName(e)), n;
            if ((s = p[3]) && de.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(s)), n;
          } else if (9 === r) {
            if (!(i = t.getElementById(s))) return n;
            if (i.id === s) return n.push(i), n;
          } else if (a && (i = a.getElementById(s)) && Se(t, i) && i.id === s) return n.push(i), n;

          if (de.qsa && !I[e + ' '] && (!ve || !ve.test(e)) && (1 !== r || 'object' !== t.nodeName.toLowerCase())) {
            if (f = e, a = t, 1 === r && G.test(e)) {
              for ((d = t.getAttribute('id')) ? d = d.replace(ie, ae) : t.setAttribute('id', d = v), c = ue(e), l = c.length; l--;) {
                c[l] = '#' + d + ' ' + g(c[l]);
              }

              f = c.join(','), a = te.test(e) && u(t.parentNode) || t;
            }

            try {
              return H.apply(n, a.querySelectorAll(f)), n;
            } catch (t) {
              I(e, !0);
            } finally {
              d === v && t.removeAttribute('id');
            }
          }
        }

        return ge(e.replace(U, '$1'), t, n, o);
      }

      function n() {
        function e(n, o) {
          return t.push(n + ' ') > pe.cacheLength && delete e[t.shift()], e[n + ' '] = o;
        }

        var t = [];
        return e;
      }

      function o(e) {
        return e[v] = !0, e;
      }

      function a(e) {
        var t = Ee.createElement('fieldset');

        try {
          return !!e(t);
        } catch (t) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function r(e, t) {
        for (var n = e.split('|'), o = n.length; o--;) {
          pe.attrHandle[n[o]] = t;
        }
      }

      function s(e, t) {
        var n = t && e,
            o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (o) return o;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return 'input' === n && t.type === e;
        };
      }

      function d(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && t.type === e;
        };
      }

      function p(e) {
        return function (t) {
          return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : !!('label' in t) && t.disabled === e;
        };
      }

      function c(e) {
        return o(function (t) {
          return t = +t, o(function (n, o) {
            for (var a = e([], n.length, t), r = a.length, i; r--;) {
              n[i = a[r]] && (n[i] = !(o[i] = n[i]));
            }
          });
        });
      }

      function u(e) {
        return e && 'undefined' != typeof e.getElementsByTagName && e;
      }

      function f() {}

      function g(e) {
        for (var t = 0, n = e.length, o = ''; t < n; t++) {
          o += e[t].value;
        }

        return o;
      }

      function m(e, t, n) {
        var o = t.dir,
            i = t.next,
            a = i || o,
            r = n && 'parentNode' === a,
            s = S++;
        return t.first ? function (t, n, i) {
          for (; t = t[o];) {
            if (1 === t.nodeType || r) return e(t, n, i);
          }

          return !1;
        } : function (t, n, l) {
          var d = [A, s],
              p,
              c,
              u;

          if (l) {
            for (; t = t[o];) {
              if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
            }
          } else for (; t = t[o];) {
            if (1 === t.nodeType || r) if (u = t[v] || (t[v] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[o] || t;else {
              if ((p = c[a]) && p[0] === A && p[1] === s) return d[2] = p[2];
              if (c[a] = d, d[2] = e(t, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function h(e) {
        return 1 < e.length ? function (t, n, o) {
          for (var a = e.length; a--;) {
            if (!e[a](t, n, o)) return !1;
          }

          return !0;
        } : e[0];
      }

      function y(e, n, o) {
        for (var a = 0, i = n.length; a < i; a++) {
          t(e, n[a], o);
        }

        return o;
      }

      function _(e, t, n, o, a) {
        for (var r = [], s = 0, i = e.length, l; s < i; s++) {
          (l = e[s]) && (!n || n(l, o, a)) && (r.push(l), null != t && t.push(s));
        }

        return r;
      }

      function E(e, t, n, a, r, i) {
        return a && !a[v] && (a = E(a)), r && !r[v] && (r = E(r, i)), o(function (o, s, l, d) {
          var p = [],
              c = [],
              u = s.length,
              f = o || y(t || '*', l.nodeType ? [l] : l, []),
              g = e && (o || !t) ? _(f, p, e, l, d) : f,
              m = n ? r || (o ? e : u || a) ? [] : s : g,
              h,
              E,
              i;
          if (n && n(g, m, l, d), a) for (h = _(m, c), a(h, [], l, d), E = h.length; E--;) {
            (i = h[E]) && (m[c[E]] = !(g[c[E]] = i));
          }
          if (!o) m = _(m === s ? m.splice(u, m.length) : m), r ? r(null, s, m, d) : H.apply(s, m);else if (r || e) {
            if (r) {
              for (h = [], E = m.length; E--;) {
                (i = m[E]) && h.push(g[E] = i);
              }

              r(null, m = [], h, d);
            }

            for (E = m.length; E--;) {
              (i = m[E]) && -1 < (h = r ? R(o, i) : p[E]) && (o[h] = !(s[h] = i));
            }
          }
        });
      }

      function T(e) {
        for (var t = e.length, n = pe.relative[e[0].type], o = n || pe.relative[' '], a = n ? 1 : 0, i = m(function (e) {
          return e === l;
        }, o, !0), r = m(function (e) {
          return -1 < R(l, e);
        }, o, !0), s = [function (e, t, o) {
          var a = !n && (o || t !== me) || ((l = t).nodeType ? i(e, t, o) : r(e, t, o));
          return l = null, a;
        }], l, d, p; a < t; a++) {
          if (d = pe.relative[e[a].type]) s = [m(h(s), d)];else {
            if (d = pe.filter[e[a].type].apply(null, e[a].matches), d[v]) {
              for (p = ++a; p < t && !pe.relative[e[p].type]; p++) {
                ;
              }

              return E(1 < a && h(s), 1 < a && g(e.slice(0, a - 1).concat({
                value: ' ' === e[a - 2].type ? '*' : ''
              })).replace(U, '$1'), d, a < p && T(e.slice(a, p)), p < t && T(e = e.slice(p)), p < t && g(e));
            }

            s.push(d);
          }
        }

        return h(s);
      }

      function b(e, n) {
        var a = 0 < n.length,
            r = 0 < e.length,
            i = function i(o, s, l, d, p) {
          var c = 0,
              u = '0',
              i = o && [],
              f = [],
              g = me,
              m = o || r && pe.find.TAG('*', p),
              h = A += null == g ? 1 : Math.random() || .1,
              y = m.length,
              E,
              T,
              b;

          for (p && (me = s === Ee || s || p); u !== y && null != (E = m[u]); u++) {
            if (r && E) {
              for (T = 0, s || E.ownerDocument === Ee || (_e(E), l = !be); b = e[T++];) {
                if (b(E, s || Ee, l)) {
                  d.push(E);
                  break;
                }
              }

              p && (A = h);
            }

            a && ((E = !b && E) && c--, o && i.push(E));
          }

          if (c += u, a && u !== c) {
            for (T = 0; b = n[T++];) {
              b(i, f, s, l);
            }

            if (o) {
              if (0 < c) for (; u--;) {
                i[u] || f[u] || (f[u] = k.call(d));
              }
              f = _(f);
            }

            H.apply(d, f), p && !o && 0 < f.length && 1 < c + n.length && t.uniqueSort(d);
          }

          return p && (A = h, me = g), i;
        };

        return a ? o(i) : i;
      }

      var v = 'sizzle' + 1 * new Date(),
          C = e.document,
          A = 0,
          S = 0,
          D = n(),
          N = n(),
          x = n(),
          I = n(),
          O = function O(e, t) {
        return e === t && (ye = !0), 0;
      },
          w = {}.hasOwnProperty,
          L = [],
          k = L.pop,
          P = L.push,
          H = L.push,
          M = L.slice,
          R = function R(e, t) {
        for (var n = 0, o = e.length; n < o; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          j = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          W = '[\\x20\\t\\r\\n\\f]',
          q = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
          F = /[\x20\t\r\n\f]+/g,
          U = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
          B = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
          V = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
          G = /[\x20\t\r\n\f]|>/,
          K = /:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          Q = /^(?:\\.|[\w-]|[^\0-\xa0])+$/,
          X = {
        ID: /^#((?:\\.|[\w-]|[^\0-\xa0])+)/,
        CLASS: /^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,
        TAG: /^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,
        ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,
        PSEUDO: /^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
        needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
      },
          Y = /HTML$/i,
          z = /^(?:input|select|textarea|button)$/i,
          J = /^h\d$/i,
          Z = /^[^{]+\{\s*\[native \w/,
          ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          te = /[+~]/,
          ne = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
          oe = function oe(e, t, n) {
        var o = String.fromCharCode,
            i = '0x' + t - 65536;
        return i != i || n ? t : 0 > i ? o(i + 65536) : o(55296 | i >> 10, 56320 | 1023 & i);
      },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ae = function ae(e, t) {
        return t ? '\0' === e ? "\uFFFD" : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
      },
          re = function re() {
        _e();
      },
          se = m(function (e) {
        return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
      }, {
        dir: 'parentNode',
        next: 'legend'
      }),
          le,
          de,
          pe,
          ce,
          i,
          ue,
          fe,
          ge,
          me,
          he,
          ye,
          _e,
          Ee,
          Te,
          be,
          ve,
          Ce,
          Ae,
          Se;

      try {
        H.apply(L = M.call(C.childNodes), C.childNodes), L[C.childNodes.length].nodeType;
      } catch (t) {
        H = {
          apply: L.length ? function (e, t) {
            P.apply(e, M.call(t));
          } : function (e, t) {
            for (var n = e.length, o = 0; e[n++] = t[o++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      for (le in de = t.support = {}, i = t.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || 'HTML');
      }, _e = t.setDocument = function (e) {
        var t = e ? e.ownerDocument || e : C,
            n,
            o;
        return t !== Ee && 9 === t.nodeType && t.documentElement ? (Ee = t, Te = Ee.documentElement, be = !i(Ee), C !== Ee && (o = Ee.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener('unload', re, !1) : o.attachEvent && o.attachEvent('onunload', re)), de.attributes = a(function (e) {
          return e.className = 'i', !e.getAttribute('className');
        }), de.getElementsByTagName = a(function (e) {
          return e.appendChild(Ee.createComment('')), !e.getElementsByTagName('*').length;
        }), de.getElementsByClassName = Z.test(Ee.getElementsByClassName), de.getById = a(function (e) {
          return Te.appendChild(e).id = v, !Ee.getElementsByName || !Ee.getElementsByName(v).length;
        }), de.getById ? (pe.filter.ID = function (e) {
          var t = e.replace(ne, oe);
          return function (e) {
            return e.getAttribute('id') === t;
          };
        }, pe.find.ID = function (e, t) {
          if ('undefined' != typeof t.getElementById && be) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (pe.filter.ID = function (e) {
          var t = e.replace(ne, oe);
          return function (e) {
            var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
            return n && n.value === t;
          };
        }, pe.find.ID = function (e, t) {
          if ('undefined' != typeof t.getElementById && be) {
            var n = t.getElementById(e),
                o,
                a,
                i;

            if (n) {
              if (o = n.getAttributeNode('id'), o && o.value === e) return [n];

              for (i = t.getElementsByName(e), a = 0; n = i[a++];) {
                if (o = n.getAttributeNode('id'), o && o.value === e) return [n];
              }
            }

            return [];
          }
        }), pe.find.TAG = de.getElementsByTagName ? function (e, t) {
          return 'undefined' == typeof t.getElementsByTagName ? de.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e);
        } : function (e, t) {
          var n = [],
              o = 0,
              i = t.getElementsByTagName(e),
              a;

          if ('*' === e) {
            for (; a = i[o++];) {
              1 === a.nodeType && n.push(a);
            }

            return n;
          }

          return i;
        }, pe.find.CLASS = de.getElementsByClassName && function (e, t) {
          if ('undefined' != typeof t.getElementsByClassName && be) return t.getElementsByClassName(e);
        }, Ce = [], ve = [], (de.qsa = Z.test(Ee.querySelectorAll)) && (a(function (e) {
          Te.appendChild(e).innerHTML = '<a id=\'' + v + '\'></a><select id=\'' + v + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && ve.push('[*^$]=' + W + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || ve.push('\\[' + W + '*(?:value|' + j + ')'), e.querySelectorAll('[id~=' + v + '-]').length || ve.push('~='), e.querySelectorAll(':checked').length || ve.push(':checked'), e.querySelectorAll('a#' + v + '+*').length || ve.push('.#.+[+~]');
        }), a(function (e) {
          e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
          var t = Ee.createElement('input');
          t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && ve.push('name' + W + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && ve.push(':enabled', ':disabled'), Te.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && ve.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), ve.push(',.*:');
        })), (de.matchesSelector = Z.test(Ae = Te.matches || Te.webkitMatchesSelector || Te.mozMatchesSelector || Te.oMatchesSelector || Te.msMatchesSelector)) && a(function (e) {
          de.disconnectedMatch = Ae.call(e, '*'), Ae.call(e, '[s!=\'\']:x'), Ce.push('!=', ':(' + q + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ('\\[' + W + '*(' + q + ')(?:' + W + '*([*^$|!~]?=)' + W + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + q + '))|)' + W + '*\\]') + ')*)|.*)\\)|)');
        }), ve = ve.length && new RegExp(ve.join('|')), Ce = Ce.length && new RegExp(Ce.join('|')), n = Z.test(Te.compareDocumentPosition), Se = n || Z.test(Te.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              o = t && t.parentNode;
          return e === o || !!(o && 1 === o.nodeType && (n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, O = n ? function (e, t) {
          if (e === t) return ye = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !de.sortDetached && t.compareDocumentPosition(e) === n ? e === Ee || e.ownerDocument === C && Se(C, e) ? -1 : t === Ee || t.ownerDocument === C && Se(C, t) ? 1 : he ? R(he, e) - R(he, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return ye = !0, 0;
          var n = 0,
              o = e.parentNode,
              i = t.parentNode,
              a = [e],
              r = [t],
              l;
          if (!o || !i) return e === Ee ? -1 : t === Ee ? 1 : o ? -1 : i ? 1 : he ? R(he, e) - R(he, t) : 0;
          if (o === i) return s(e, t);

          for (l = e; l = l.parentNode;) {
            a.unshift(l);
          }

          for (l = t; l = l.parentNode;) {
            r.unshift(l);
          }

          for (; a[n] === r[n];) {
            n++;
          }

          return n ? s(a[n], r[n]) : a[n] === C ? -1 : r[n] === C ? 1 : 0;
        }, Ee) : Ee;
      }, t.matches = function (e, n) {
        return t(e, null, null, n);
      }, t.matchesSelector = function (e, n) {
        if ((e.ownerDocument || e) !== Ee && _e(e), de.matchesSelector && be && !I[n + ' '] && (!Ce || !Ce.test(n)) && (!ve || !ve.test(n))) try {
          var o = Ae.call(e, n);
          if (o || de.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o;
        } catch (t) {
          I(n, !0);
        }
        return 0 < t(n, Ee, null, [e]).length;
      }, t.contains = function (e, t) {
        return (e.ownerDocument || e) !== Ee && _e(e), Se(e, t);
      }, t.attr = function (e, t) {
        (e.ownerDocument || e) !== Ee && _e(e);
        var n = pe.attrHandle[t.toLowerCase()],
            o = n && w.call(pe.attrHandle, t.toLowerCase()) ? n(e, t, !be) : void 0;
        return void 0 === o ? de.attributes || !be ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
      }, t.escape = function (e) {
        return (e + '').replace(ie, ae);
      }, t.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }, t.uniqueSort = function (e) {
        var t = [],
            n = 0,
            o = 0,
            i;

        if (ye = !de.detectDuplicates, he = !de.sortStable && e.slice(0), e.sort(O), ye) {
          for (; i = e[o++];) {
            i === e[o] && (n = t.push(o));
          }

          for (; n--;) {
            e.splice(t[n], 1);
          }
        }

        return he = null, e;
      }, ce = t.getText = function (e) {
        var t = '',
            n = 0,
            o = e.nodeType,
            i;
        if (!o) for (; i = e[n++];) {
          t += ce(i);
        } else if (1 === o || 9 === o || 11 === o) {
          if ('string' == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            t += ce(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
        return t;
      }, pe = t.selectors = {
        cacheLength: 50,
        createPseudo: o,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: 'parentNode',
            first: !0
          },
          " ": {
            dir: 'parentNode'
          },
          "+": {
            dir: 'previousSibling',
            first: !0
          },
          "~": {
            dir: 'previousSibling'
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(ne, oe), e[3] = (e[3] || e[4] || e[5] || '').replace(ne, oe), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t = !e[6] && e[2],
                n;
            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : t && K.test(t) && (n = ue(t, !0)) && (n = t.indexOf(')', t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(ne, oe).toLowerCase();
            return '*' === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = D[e + ' '];
            return t || (t = new RegExp('(^|' + W + ')' + e + '(' + W + '|$)')) && D(e, function (e) {
              return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '');
            });
          },
          ATTR: function ATTR(e, n, o) {
            return function (i) {
              var a = t.attr(i, e);
              return null == a ? '!=' === n : !n || (a += '', '=' === n ? a === o : '!=' === n ? a !== o : '^=' === n ? o && 0 === a.indexOf(o) : '*=' === n ? o && -1 < a.indexOf(o) : '$=' === n ? o && a.slice(-o.length) === o : '~=' === n ? -1 < (' ' + a.replace(F, ' ') + ' ').indexOf(o) : '|=' == n && (a === o || a.slice(0, o.length + 1) === o + '-'));
            };
          },
          CHILD: function CHILD(e, t, n, o, i) {
            var a = 'nth' !== e.slice(0, 3),
                r = 'last' !== e.slice(-4),
                s = 'of-type' === t;
            return 1 === o && 0 === i ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var d = a == r ? 'previousSibling' : 'nextSibling',
                  p = t.parentNode,
                  c = s && t.nodeName.toLowerCase(),
                  u = !l && !s,
                  f = !1,
                  g,
                  m,
                  h,
                  y,
                  _,
                  E;

              if (p) {
                if (a) {
                  for (; d;) {
                    for (y = t; y = y[d];) {
                      if (s ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) return !1;
                    }

                    E = d = 'only' === e && !E && 'nextSibling';
                  }

                  return !0;
                }

                if (E = [r ? p.firstChild : p.lastChild], r && u) {
                  for (y = p, h = y[v] || (y[v] = {}), m = h[y.uniqueID] || (h[y.uniqueID] = {}), g = m[e] || [], _ = g[0] === A && g[1], f = _ && g[2], y = _ && p.childNodes[_]; y = ++_ && y && y[d] || (f = _ = 0) || E.pop();) {
                    if (1 === y.nodeType && ++f && y === t) {
                      m[e] = [A, _, f];
                      break;
                    }
                  }
                } else if (u && (y = t, h = y[v] || (y[v] = {}), m = h[y.uniqueID] || (h[y.uniqueID] = {}), g = m[e] || [], _ = g[0] === A && g[1], f = _), !1 === f) for (; (y = ++_ && y && y[d] || (f = _ = 0) || E.pop()) && !((s ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) && ++f && (u && (h = y[v] || (y[v] = {}), m = h[y.uniqueID] || (h[y.uniqueID] = {}), m[e] = [A, f]), y === t));) {
                  ;
                }

                return f -= i, f === o || 0 == f % o && 0 <= f / o;
              }
            };
          },
          PSEUDO: function PSEUDO(e, n) {
            var a = pe.pseudos[e] || pe.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e),
                i;
            return a[v] ? a(n) : 1 < a.length ? (i = [e, e, '', n], pe.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, t) {
              for (var o = a(e, n), r = o.length, i; r--;) {
                i = R(e, o[r]), e[i] = !(t[i] = o[r]);
              }
            }) : function (e) {
              return a(e, 0, i);
            }) : a;
          }
        },
        pseudos: {
          not: o(function (e) {
            var t = [],
                n = [],
                a = fe(e.replace(U, '$1'));
            return a[v] ? o(function (e, t, n, o) {
              for (var r = a(e, null, o, []), s = e.length, i; s--;) {
                (i = r[s]) && (e[s] = !(t[s] = i));
              }
            }) : function (e, o, i) {
              return t[0] = e, a(t, null, i, n), t[0] = null, !n.pop();
            };
          }),
          has: o(function (e) {
            return function (n) {
              return 0 < t(e, n).length;
            };
          }),
          contains: o(function (e) {
            return e = e.replace(ne, oe), function (t) {
              return -1 < (t.textContent || ce(t)).indexOf(e);
            };
          }),
          lang: o(function (e) {
            return Q.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ne, oe).toLowerCase(), function (t) {
              var n;

              do {
                if (n = be ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === Te;
          },
          focus: function focus(e) {
            return e === Ee.activeElement && (!Ee.hasFocus || Ee.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: p(!1),
          disabled: p(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (6 > e.nodeType) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !pe.pseudos.empty(e);
          },
          header: function header(e) {
            return J.test(e.nodeName);
          },
          input: function input(e) {
            return z.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return 'input' === t && 'button' === e.type || 'button' === t;
          },
          text: function text(e) {
            var t;
            return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
          },
          first: c(function () {
            return [0];
          }),
          last: c(function (e, t) {
            return [t - 1];
          }),
          eq: c(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: c(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: c(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: c(function (e, t, n) {
            for (var o = 0 > n ? n + t : n > t ? t : n; 0 <= --o;) {
              e.push(o);
            }

            return e;
          }),
          gt: c(function (e, t, n) {
            for (var o = 0 > n ? n + t : n; ++o < t;) {
              e.push(o);
            }

            return e;
          })
        }
      }, pe.pseudos.nth = pe.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        pe.pseudos[le] = l(le);
      }

      for (le in {
        submit: !0,
        reset: !0
      }) {
        pe.pseudos[le] = d(le);
      }

      return f.prototype = pe.filters = pe.pseudos, pe.setFilters = new f(), ue = t.tokenize = function (e, n) {
        var o = N[e + ' '],
            i,
            a,
            r,
            s,
            l,
            d,
            p;
        if (o) return n ? 0 : o.slice(0);

        for (l = e, d = [], p = pe.preFilter; l;) {
          for (s in (!i || (a = B.exec(l))) && (a && (l = l.slice(a[0].length) || l), d.push(r = [])), i = !1, (a = V.exec(l)) && (i = a.shift(), r.push({
            value: i,
            type: a[0].replace(U, ' ')
          }), l = l.slice(i.length)), pe.filter) {
            (a = X[s].exec(l)) && (!p[s] || (a = p[s](a))) && (i = a.shift(), r.push({
              value: i,
              type: s,
              matches: a
            }), l = l.slice(i.length));
          }

          if (!i) break;
        }

        return n ? l.length : l ? t.error(e) : N(e, d).slice(0);
      }, fe = t.compile = function (e, t) {
        var n = [],
            o = [],
            a = x[e + ' '],
            r;

        if (!a) {
          for (t || (t = ue(e)), r = t.length; r--;) {
            a = T(t[r]), a[v] ? n.push(a) : o.push(a);
          }

          a = x(e, b(o, n)), a.selector = e;
        }

        return a;
      }, ge = t.select = function (e, t, n, o) {
        var a = 'function' == typeof e && e,
            r = !o && ue(e = a.selector || e),
            s,
            i,
            l,
            d,
            p;

        if (n = n || [], 1 === r.length) {
          if (i = r[0] = r[0].slice(0), 2 < i.length && 'ID' === (l = i[0]).type && 9 === t.nodeType && be && pe.relative[i[1].type]) {
            if (t = (pe.find.ID(l.matches[0].replace(ne, oe), t) || [])[0], !t) return n;
            a && (t = t.parentNode), e = e.slice(i.shift().value.length);
          }

          for (s = X.needsContext.test(e) ? 0 : i.length; s-- && (l = i[s], !pe.relative[d = l.type]);) {
            if ((p = pe.find[d]) && (o = p(l.matches[0].replace(ne, oe), te.test(i[0].type) && u(t.parentNode) || t))) {
              if (i.splice(s, 1), e = o.length && g(i), !e) return H.apply(n, o), n;
              break;
            }
          }
        }

        return (a || fe(e, r))(o, t, !be, n, !t || te.test(e) && u(t.parentNode) || t), n;
      }, de.sortStable = v.split('').sort(O).join('') === v, de.detectDuplicates = !!ye, _e(), de.sortDetached = a(function (e) {
        return 1 & e.compareDocumentPosition(Ee.createElement('fieldset'));
      }), a(function (e) {
        return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
      }) || r('type|href|height|width', function (e, t, n) {
        if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
      }), de.attributes && a(function (e) {
        return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
      }) || r('value', function (e, t, n) {
        if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
      }), a(function (e) {
        return null == e.getAttribute('disabled');
      }) || r(j, function (e, t, n) {
        var o;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
      }), t;
    }(a);

    we.find = ke, we.expr = ke.selectors, we.expr[':'] = we.expr.pseudos, we.uniqueSort = we.unique = ke.uniqueSort, we.text = ke.getText, we.isXMLDoc = ke.isXML, we.contains = ke.contains, we.escapeSelector = ke.escape;

    var Pe = function Pe(e, t, n) {
      for (var o = []; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (void 0 !== n && we(e).is(n)) break;
          o.push(e);
        }
      }

      return o;
    },
        He = function He(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        Me = we.expr.match.needsContext,
        Re = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    we.filter = function (e, t, n) {
      var o = t[0];
      return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === o.nodeType ? we.find.matchesSelector(o, e) ? [o] : [] : we.find.matches(e, we.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, we.fn.extend({
      find: function find(e) {
        var t = this.length,
            n = this,
            o,
            i;
        if ('string' != typeof e) return this.pushStack(we(e).filter(function () {
          for (o = 0; o < t; o++) {
            if (we.contains(n[o], this)) return !0;
          }
        }));

        for (i = this.pushStack([]), o = 0; o < t; o++) {
          we.find(e, n[o], i);
        }

        return 1 < t ? we.uniqueSort(i) : i;
      },
      filter: function filter(e) {
        return this.pushStack(c(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(c(this, e || [], !0));
      },
      is: function is(e) {
        return !!c(this, 'string' == typeof e && Me.test(e) ? we(e) : e || [], !1).length;
      }
    });

    var je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        We = we.fn.init = function (e, t, n) {
      var o, i;
      if (!e) return this;

      if (n = n || qe, 'string' == typeof e) {
        if (o = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : je.exec(e), o && (o[1] || !t)) {
          if (o[1]) {
            if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : me, !0)), Re.test(o[1]) && we.isPlainObject(t)) for (o in t) {
              Ne(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            }
            return this;
          }

          return i = me.getElementById(o[2]), i && (this[0] = i, this.length = 1), this;
        }

        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : Ne(e) ? void 0 === n.ready ? e(we) : n.ready(e) : we.makeArray(e, this);
    },
        qe;

    We.prototype = we.fn, qe = we(me);
    var Fe = /^(?:parents|prev(?:Until|All))/,
        Ue = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    we.fn.extend({
      has: function has(e) {
        var t = we(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (we.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n = 0,
            o = this.length,
            i = [],
            a = 'string' != typeof e && we(e),
            r;
        if (!Me.test(e)) for (; n < o; n++) {
          for (r = this[n]; r && r !== t; r = r.parentNode) {
            if (11 > r.nodeType && (a ? -1 < a.index(r) : 1 === r.nodeType && we.find.matchesSelector(r, e))) {
              i.push(r);
              break;
            }
          }
        }
        return this.pushStack(1 < i.length ? we.uniqueSort(i) : i);
      },
      index: function index(e) {
        return e ? 'string' == typeof e ? Te.call(we(e), this[0]) : Te.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), we.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return Pe(e, 'parentNode');
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return Pe(e, 'parentNode', n);
      },
      next: function next(e) {
        return u(e, 'nextSibling');
      },
      prev: function prev(e) {
        return u(e, 'previousSibling');
      },
      nextAll: function nextAll(e) {
        return Pe(e, 'nextSibling');
      },
      prevAll: function prevAll(e) {
        return Pe(e, 'previousSibling');
      },
      nextUntil: function nextUntil(e, t, n) {
        return Pe(e, 'nextSibling', n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return Pe(e, 'previousSibling', n);
      },
      siblings: function siblings(e) {
        return He((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return He(e.firstChild);
      },
      contents: function contents(e) {
        return 'undefined' == typeof e.contentDocument ? (p(e, 'template') && (e = e.content || e), we.merge([], e.childNodes)) : e.contentDocument;
      }
    }, function (e, t) {
      we.fn[e] = function (n, o) {
        var i = we.map(this, t, n);
        return 'Until' !== e.slice(-5) && (o = n), o && 'string' == typeof o && (i = we.filter(o, i)), 1 < this.length && (!Ue[e] && we.uniqueSort(i), Fe.test(e) && i.reverse()), this.pushStack(i);
      };
    });
    var Be = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function (e) {
      e = 'string' == typeof e ? f(e) : we.extend({}, e);

      var t = [],
          n = [],
          o = -1,
          i = function i() {
        for (p = p || e.once, l = r = !0; n.length; o = -1) {
          for (s = n.shift(); ++o < t.length;) {
            !1 === t[o].apply(s[0], s[1]) && e.stopOnFalse && (o = t.length, s = !1);
          }
        }

        e.memory || (s = !1), r = !1, p && (s ? t = [] : t = '');
      },
          a = {
        add: function add() {
          return t && (s && !r && (o = t.length - 1, n.push(s)), function n(o) {
            we.each(o, function (o, i) {
              Ne(i) ? (!e.unique || !a.has(i)) && t.push(i) : i && i.length && 'string' !== d(i) && n(i);
            });
          }(arguments), s && !r && i()), this;
        },
        remove: function remove() {
          return we.each(arguments, function (e, n) {
            for (var i; -1 < (i = we.inArray(n, t, i));) {
              t.splice(i, 1), i <= o && o--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? -1 < we.inArray(e, t) : 0 < t.length;
        },
        empty: function empty() {
          return t && (t = []), this;
        },
        disable: function disable() {
          return p = n = [], t = s = '', this;
        },
        disabled: function disabled() {
          return !t;
        },
        lock: function lock() {
          return p = n = [], s || r || (t = s = ''), this;
        },
        locked: function locked() {
          return !!p;
        },
        fireWith: function fireWith(e, t) {
          return p || (t = t || [], t = [e, t.slice ? t.slice() : t], n.push(t), !r && i()), this;
        },
        fire: function fire() {
          return a.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!l;
        }
      },
          r,
          s,
          l,
          p;

      return a;
    }, we.extend({
      Deferred: function Deferred(e) {
        var t = [['notify', 'progress', we.Callbacks('memory'), we.Callbacks('memory'), 2], ['resolve', 'done', we.Callbacks('once memory'), we.Callbacks('once memory'), 0, 'resolved'], ['reject', 'fail', we.Callbacks('once memory'), we.Callbacks('once memory'), 1, 'rejected']],
            n = 'pending',
            o = {
          state: function state() {
            return n;
          },
          always: function always() {
            return r.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return o.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return we.Deferred(function (n) {
              we.each(t, function (t, o) {
                var i = Ne(e[o[4]]) && e[o[4]];
                r[o[1]](function () {
                  var e = i && i.apply(this, arguments);
                  e && Ne(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + 'With'](this, i ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, n, o) {
            function i(t, n, o, e) {
              return function () {
                var s = this,
                    l = arguments,
                    d = function d() {
                  var a, d;

                  if (!(t < r)) {
                    if (a = o.apply(s, l), a === n.promise()) throw new TypeError('Thenable self-resolution');
                    d = a && ('object' == _typeof(a) || 'function' == typeof a) && a.then, Ne(d) ? e ? d.call(a, i(r, n, g, e), i(r, n, m, e)) : (r++, d.call(a, i(r, n, g, e), i(r, n, m, e), i(r, n, g, n.notifyWith))) : (o !== g && (s = void 0, l = [a]), (e || n.resolveWith)(s, l));
                  }
                },
                    p = e ? d : function () {
                  try {
                    d();
                  } catch (i) {
                    we.Deferred.exceptionHook && we.Deferred.exceptionHook(i, p.stackTrace), t + 1 >= r && (o !== m && (s = void 0, l = [i]), n.rejectWith(s, l));
                  }
                };

                t ? p() : (we.Deferred.getStackHook && (p.stackTrace = we.Deferred.getStackHook()), a.setTimeout(p));
              };
            }

            var r = 0;
            return we.Deferred(function (a) {
              t[0][3].add(i(0, a, Ne(o) ? o : g, a.notifyWith)), t[1][3].add(i(0, a, Ne(e) ? e : g)), t[2][3].add(i(0, a, Ne(n) ? n : m));
            }).promise();
          },
          promise: function promise(e) {
            return null == e ? o : we.extend(e, o);
          }
        },
            r = {};
        return we.each(t, function (e, i) {
          var a = i[2],
              s = i[5];
          o[i[1]] = a.add, s && a.add(function () {
            n = s;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(i[3].fire), r[i[0]] = function () {
            return r[i[0] + 'With'](this === r ? void 0 : this, arguments), this;
          }, r[i[0] + 'With'] = a.fireWith;
        }), o.promise(r), e && e.call(r, r), r;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            o = Array(n),
            a = ye.call(arguments),
            r = we.Deferred(),
            i = function i(e) {
          return function (n) {
            o[e] = this, a[e] = 1 < arguments.length ? ye.call(arguments) : n, --t || r.resolveWith(o, a);
          };
        };

        if (1 >= t && (h(e, r.done(i(n)).resolve, r.reject, !t), 'pending' === r.state() || Ne(a[n] && a[n].then))) return r.then();

        for (; n--;) {
          h(a[n], i(n), r.reject);
        }

        return r.promise();
      }
    });
    var Ve = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function (e, t) {
      a.console && a.console.warn && e && Ve.test(e.name) && a.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
    }, we.readyException = function (e) {
      a.setTimeout(function () {
        throw e;
      });
    };
    var Ge = we.Deferred();
    we.fn.ready = function (e) {
      return Ge.then(e)["catch"](function (e) {
        we.readyException(e);
      }), this;
    }, we.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? ! --we.readyWait : !we.isReady) && (we.isReady = !0, !0 !== e && 0 < --we.readyWait || Ge.resolveWith(me, [we]));
      }
    }), we.ready.then = Ge.then, 'complete' !== me.readyState && ('loading' === me.readyState || me.documentElement.doScroll) ? (me.addEventListener('DOMContentLoaded', y), a.addEventListener('load', y)) : a.setTimeout(we.ready);

    var $e = function $e(e, t, n, o, a, r, s) {
      var l = 0,
          i = e.length,
          p = null == n;
      if ('object' === d(n)) for (l in a = !0, n) {
        $e(e, t, l, n[l], !0, r, s);
      } else if (void 0 !== o && (a = !0, Ne(o) || (s = !0), p && (s ? (t.call(e, o), t = null) : (p = t, t = function t(e, _t2, n) {
        return p.call(we(e), n);
      })), t)) for (; l < i; l++) {
        t(e[l], n, s ? o : o.call(e[l], l, t(e[l], n)));
      }
      return a ? e : p ? t.call(e) : i ? t(e[0], n) : r;
    },
        Ke = /^-ms-/,
        Qe = /-([a-z])/g,
        Xe = function Xe(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    T.uid = 1, T.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, Xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var o = this.cache(e),
            i;
        if ('string' == typeof t) o[E(t)] = n;else for (i in t) {
          o[E(i)] = t[i];
        }
        return o;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][E(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 === n ? t : n);
      },
      remove: function remove(e, t) {
        var n = e[this.expando],
            o;

        if (void 0 !== n) {
          if (void 0 !== t) for (Array.isArray(t) ? t = t.map(E) : (t = E(t), t = (t in n) ? [t] : t.match(Be) || []), o = t.length; o--;) {
            delete n[t[o]];
          }
          (void 0 === t || we.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !we.isEmptyObject(t);
      }
    };
    var Ye = new T(),
        ze = new T(),
        Je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ze = /[A-Z]/g;
    we.extend({
      hasData: function hasData(e) {
        return ze.hasData(e) || Ye.hasData(e);
      },
      data: function data(e, t, n) {
        return ze.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        ze.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return Ye.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        Ye.remove(e, t);
      }
    }), we.fn.extend({
      data: function data(e, t) {
        var n = this[0],
            o = n && n.attributes,
            a,
            i,
            r;

        if (void 0 === e) {
          if (this.length && (r = ze.get(n), 1 === n.nodeType && !Ye.get(n, 'hasDataAttrs'))) {
            for (a = o.length; a--;) {
              o[a] && (i = o[a].name, 0 === i.indexOf('data-') && (i = E(i.slice(5)), v(n, i, r[i])));
            }

            Ye.set(n, 'hasDataAttrs', !0);
          }

          return r;
        }

        return 'object' == _typeof(e) ? this.each(function () {
          ze.set(this, e);
        }) : $e(this, function (t) {
          var o;
          return n && void 0 === t ? (o = ze.get(n, e), void 0 !== o) ? o : (o = v(n, e), void 0 === o ? void 0 : o) : void this.each(function () {
            ze.set(this, e, t);
          });
        }, null, t, 1 < arguments.length, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          ze.remove(this, e);
        });
      }
    }), we.extend({
      queue: function queue(e, t, n) {
        var o;
        if (e) return t = (t || 'fx') + 'queue', o = Ye.get(e, t), n && (!o || Array.isArray(n) ? o = Ye.access(e, t, we.makeArray(n)) : o.push(n)), o || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || 'fx';

        var n = we.queue(e, t),
            o = n.length,
            i = n.shift(),
            a = we._queueHooks(e, t),
            r = function r() {
          we.dequeue(e, t);
        };

        'inprogress' === i && (i = n.shift(), o--), i && ('fx' === t && n.unshift('inprogress'), delete a.stop, i.call(e, r, a)), !o && a && a.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + 'queueHooks';
        return Ye.get(e, n) || Ye.access(e, n, {
          empty: we.Callbacks('once memory').add(function () {
            Ye.remove(e, [t + 'queue', n]);
          })
        });
      }
    }), we.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? we.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = we.queue(this, e, t);
          we._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && we.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          we.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || 'fx', []);
      },
      promise: function promise(e, t) {
        var n = 1,
            o = we.Deferred(),
            a = this,
            r = this.length,
            i = function i() {
          --n || o.resolveWith(a, [a]);
        },
            s;

        for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; r--;) {
          s = Ye.get(a[r], e + 'queueHooks'), s && s.empty && (n++, s.empty.add(i));
        }

        return i(), o.promise(t);
      }
    });

    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        tt = new RegExp('^(?:([+-])=|)(' + et + ')([a-z%]*)$', 'i'),
        nt = ['Top', 'Right', 'Bottom', 'Left'],
        ot = me.documentElement,
        it = function it(e) {
      return we.contains(e.ownerDocument, e);
    },
        at = {
      composed: !0
    };

    ot.getRootNode && (it = function it(e) {
      return we.contains(e.ownerDocument, e) || e.getRootNode(at) === e.ownerDocument;
    });

    var rt = function rt(e, t) {
      return e = t || e, 'none' === e.style.display || '' === e.style.display && it(e) && 'none' === we.css(e, 'display');
    },
        st = function st(e, t, n, o) {
      var i = {},
          a,
          r;

      for (r in t) {
        i[r] = e.style[r], e.style[r] = t[r];
      }

      for (r in a = n.apply(e, o || []), t) {
        e.style[r] = i[r];
      }

      return a;
    },
        lt = {};

    we.fn.extend({
      show: function show() {
        return S(this, !0);
      },
      hide: function hide() {
        return S(this);
      },
      toggle: function toggle(e) {
        return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          rt(this) ? we(this).show() : we(this).hide();
        });
      }
    });
    var dt = /^(?:checkbox|radio)$/i,
        pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ct = /^$|^module$|\/(?:java|ecma)script/i,
        ut = {
      option: [1, '<select multiple=\'multiple\'>', '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
    ut.optgroup = ut.option, ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead, ut.th = ut.td;
    var ft = /<|&#?\w+;/;

    (function () {
      var e = me.createDocumentFragment(),
          t = e.appendChild(me.createElement('div')),
          n = me.createElement('input');
      n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), t.appendChild(n), De.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = '<textarea>x</textarea>', De.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    })();

    var gt = /^key/,
        mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ht = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
      global: {},
      add: function add(n, e, o, i, a) {
        var r = Ye.get(n),
            s,
            l,
            d,
            p,
            c,
            t,
            u,
            f,
            g,
            m,
            h;
        if (r) for (o.handler && (s = o, o = s.handler, a = s.selector), a && we.find.matchesSelector(ot, a), o.guid || (o.guid = we.guid++), (p = r.events) || (p = r.events = {}), (l = r.handle) || (l = r.handle = function (t) {
          return 'undefined' != typeof we && we.event.triggered !== t.type ? we.event.dispatch.apply(n, arguments) : void 0;
        }), e = (e || '').match(Be) || [''], c = e.length; c--;) {
          (d = ht.exec(e[c]) || [], g = h = d[1], m = (d[2] || '').split('.').sort(), !!g) && (u = we.event.special[g] || {}, g = (a ? u.delegateType : u.bindType) || g, u = we.event.special[g] || {}, t = we.extend({
            type: g,
            origType: h,
            data: i,
            handler: o,
            guid: o.guid,
            selector: a,
            needsContext: a && we.expr.match.needsContext.test(a),
            namespace: m.join('.')
          }, s), (f = p[g]) || (f = p[g] = [], f.delegateCount = 0, (!u.setup || !1 === u.setup.call(n, i, m, l)) && n.addEventListener && n.addEventListener(g, l)), u.add && (u.add.call(n, t), !t.handler.guid && (t.handler.guid = o.guid)), a ? f.splice(f.delegateCount++, 0, t) : f.push(t), we.event.global[g] = !0);
        }
      },
      remove: function remove(e, n, o, i, a) {
        var r = Ye.hasData(e) && Ye.get(e),
            s,
            l,
            d,
            p,
            c,
            t,
            u,
            f,
            g,
            m,
            h;

        if (r && (p = r.events)) {
          for (n = (n || '').match(Be) || [''], c = n.length; c--;) {
            if (d = ht.exec(n[c]) || [], g = h = d[1], m = (d[2] || '').split('.').sort(), !g) {
              for (g in p) {
                we.event.remove(e, g + n[c], o, i, !0);
              }

              continue;
            }

            for (u = we.event.special[g] || {}, g = (i ? u.delegateType : u.bindType) || g, f = p[g] || [], d = d[2] && new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)'), l = s = f.length; s--;) {
              t = f[s], (a || h === t.origType) && (!o || o.guid === t.guid) && (!d || d.test(t.namespace)) && (!i || i === t.selector || '**' === i && t.selector) && (f.splice(s, 1), t.selector && f.delegateCount--, u.remove && u.remove.call(e, t));
            }

            l && !f.length && ((!u.teardown || !1 === u.teardown.call(e, m, r.handle)) && we.removeEvent(e, g, r.handle), delete p[g]);
          }

          we.isEmptyObject(p) && Ye.remove(e, 'handle events');
        }
      },
      dispatch: function dispatch(e) {
        var t = we.event.fix(e),
            n = Array(arguments.length),
            o = (Ye.get(this, 'events') || {})[t.type] || [],
            a = we.event.special[t.type] || {},
            r,
            i,
            s,
            l,
            d,
            p;

        for (n[0] = t, r = 1; r < arguments.length; r++) {
          n[r] = arguments[r];
        }

        if (t.delegateTarget = this, !(a.preDispatch && !1 === a.preDispatch.call(this, t))) {
          for (p = we.event.handlers.call(this, t, o), r = 0; (l = p[r++]) && !t.isPropagationStopped();) {
            for (t.currentTarget = l.elem, i = 0; (d = l.handlers[i++]) && !t.isImmediatePropagationStopped();) {
              (!t.rnamespace || !1 === d.namespace || t.rnamespace.test(d.namespace)) && (t.handleObj = d, t.data = d.data, s = ((we.event.special[d.origType] || {}).handle || d.handler).apply(l.elem, n), void 0 !== s && !1 === (t.result = s) && (t.preventDefault(), t.stopPropagation()));
            }
          }

          return a.postDispatch && a.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function handlers(e, t) {
        var n = [],
            o = t.delegateCount,
            a = e.target,
            r,
            i,
            s,
            l,
            d;
        if (o && a.nodeType && !('click' === e.type && 1 <= e.button)) for (; a !== this; a = a.parentNode || this) {
          if (1 === a.nodeType && ('click' !== e.type || !0 !== a.disabled)) {
            for (l = [], d = {}, r = 0; r < o; r++) {
              i = t[r], s = i.selector + ' ', void 0 === d[s] && (d[s] = i.needsContext ? -1 < we(s, this).index(a) : we.find(s, this, null, [a]).length), d[s] && l.push(i);
            }

            l.length && n.push({
              elem: a,
              handlers: l
            });
          }
        }
        return a = this, o < t.length && n.push({
          elem: a,
          handlers: t.slice(o)
        }), n;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(we.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: Ne(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[we.expando] ? e : new we.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return dt.test(t.type) && t.click && p(t, 'input') && P(t, 'click', I), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return dt.test(t.type) && t.click && p(t, 'input') && P(t, 'click'), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return dt.test(t.type) && t.click && p(t, 'input') && Ye.get(t, 'click') || p(t, 'a');
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, we.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, we.Event = function (e, t) {
      return this instanceof we.Event ? void (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? I : O, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && we.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[we.expando] = !0) : new we.Event(e, t);
    }, we.Event.prototype = {
      constructor: we.Event,
      isDefaultPrevented: O,
      isPropagationStopped: O,
      isImmediatePropagationStopped: O,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var t = this.originalEvent;
        this.isDefaultPrevented = I, t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var t = this.originalEvent;
        this.isPropagationStopped = I, t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = I, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
      }
    }, we.each({
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
      "char": !0,
      code: !0,
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
      which: function which(e) {
        var t = e.button;
        return null == e.which && gt.test(e.type) ? null == e.charCode ? e.keyCode : e.charCode : !e.which && void 0 !== t && mt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, we.event.addProp), we.each({
      focus: 'focusin',
      blur: 'focusout'
    }, function (e, t) {
      we.event.special[e] = {
        setup: function setup() {
          return P(this, e, w), !1;
        },
        trigger: function trigger() {
          return P(this, e), !0;
        },
        delegateType: t
      };
    }), we.each({
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      pointerenter: 'pointerover',
      pointerleave: 'pointerout'
    }, function (e, t) {
      we.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n = this,
              o = e.relatedTarget,
              i = e.handleObj,
              a;
          return o && (o === n || we.contains(n, o)) || (e.type = i.origType, a = i.handler.apply(this, arguments), e.type = t), a;
        }
      };
    }), we.fn.extend({
      on: function on(e, t, n, o) {
        return k(this, e, t, n, o);
      },
      one: function one(e, t, n, o) {
        return k(this, e, t, n, o, 1);
      },
      off: function off(e, t, n) {
        var o, i;
        if (e && e.preventDefault && e.handleObj) return o = e.handleObj, we(e.delegateTarget).off(o.namespace ? o.origType + '.' + o.namespace : o.origType, o.selector, o.handler), this;

        if ('object' == _typeof(e)) {
          for (i in e) {
            this.off(i, t, e[i]);
          }

          return this;
        }

        return (!1 === t || 'function' == typeof t) && (n = t, t = void 0), !1 === n && (n = O), this.each(function () {
          we.event.remove(this, e, n, t);
        });
      }
    });
    var yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        _t = /<script|<style|<link/i,
        Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(yt, '<$1></$2>');
      },
      clone: function clone(e, t, n) {
        var o = e.cloneNode(!0),
            a = it(e),
            r,
            i,
            s,
            l;
        if (!De.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !we.isXMLDoc(e)) for (l = D(o), s = D(e), (r = 0, i = s.length); r < i; r++) {
          W(s[r], l[r]);
        }
        if (t) if (n) for (s = s || D(e), l = l || D(o), (r = 0, i = s.length); r < i; r++) {
          j(s[r], l[r]);
        } else j(e, o);
        return l = D(o, 'script'), 0 < l.length && N(l, !a && D(e, 'script')), o;
      },
      cleanData: function cleanData(e) {
        for (var t = we.event.special, n = 0, o, i, a; void 0 !== (i = e[n]); n++) {
          if (Xe(i)) {
            if (o = i[Ye.expando]) {
              if (o.events) for (a in o.events) {
                t[a] ? we.event.remove(i, a) : we.removeEvent(i, a, o.handle);
              }
              i[Ye.expando] = void 0;
            }

            i[ze.expando] && (i[ze.expando] = void 0);
          }
        }
      }
    }), we.fn.extend({
      detach: function detach(e) {
        return F(this, e, !0);
      },
      remove: function remove(e) {
        return F(this, e);
      },
      text: function text(e) {
        return $e(this, function (e) {
          return void 0 === e ? we.text(this) : this.empty().each(function () {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return q(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = H(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function prepend() {
        return q(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = H(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return q(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return q(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e = 0, t; null != (t = this[e]); e++) {
          1 === t.nodeType && (we.cleanData(D(t, !1)), t.textContent = '');
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return we.clone(this, e, t);
        });
      },
      html: function html(e) {
        return $e(this, function (e) {
          var t = this[0] || {},
              n = 0,
              o = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ('string' == typeof e && !_t.test(e) && !ut[(pt.exec(e) || ['', ''])[1].toLowerCase()]) {
            e = we.htmlPrefilter(e);

            try {
              for (; n < o; n++) {
                t = this[n] || {}, 1 === t.nodeType && (we.cleanData(D(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (t) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return q(this, arguments, function (t) {
          var n = this.parentNode;
          0 > we.inArray(this, e) && (we.cleanData(D(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), we.each({
      appendTo: 'append',
      prependTo: 'prepend',
      insertBefore: 'before',
      insertAfter: 'after',
      replaceAll: 'replaceWith'
    }, function (e, t) {
      we.fn[e] = function (e) {
        for (var n = [], o = we(e), a = o.length - 1, r = 0, i; r <= a; r++) {
          i = r === a ? this : this.clone(!0), we(o[r])[t](i), Ee.apply(n, i.get());
        }

        return this.pushStack(n);
      };
    });

    var bt = new RegExp('^(' + et + ')(?!px)[a-z%]+$', 'i'),
        vt = function vt(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = a), t.getComputedStyle(e);
    },
        Ct = new RegExp(nt.join('|'), 'i');

    (function () {
      function e() {
        if (o) {
          n.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', o.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', ot.appendChild(n).appendChild(o);
          var e = a.getComputedStyle(o);
          i = '1%' !== e.top, d = 12 === t(e.marginLeft), o.style.right = '60%', l = 36 === t(e.right), r = 36 === t(e.width), o.style.position = 'absolute', s = 12 === t(o.offsetWidth / 3), ot.removeChild(n), o = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var n = me.createElement('div'),
          o = me.createElement('div'),
          i,
          r,
          s,
          l,
          d;
      o.style && (o.style.backgroundClip = 'content-box', o.cloneNode(!0).style.backgroundClip = '', De.clearCloneStyle = 'content-box' === o.style.backgroundClip, we.extend(De, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), r;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), l;
        },
        pixelPosition: function pixelPosition() {
          return e(), i;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), d;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), s;
        }
      }));
    })();

    var At = ['Webkit', 'Moz', 'ms'],
        St = me.createElement('div').style,
        Dt = {},
        Nt = /^(none|table(?!-c[ea]).+)/,
        xt = /^--/,
        It = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    },
        Ot = {
      letterSpacing: '0',
      fontWeight: '400'
    };
    we.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = U(e, 'opacity');
              return '' === n ? '1' : n;
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
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, o) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i = E(t),
              a = xt.test(t),
              r = e.style,
              s,
              l,
              d;

          if (a || (t = G(i)), d = we.cssHooks[t] || we.cssHooks[i], void 0 !== n) {
            if (l = _typeof(n), 'string' === l && (s = tt.exec(n)) && s[1] && (n = C(e, t, s), l = 'number'), null == n || n !== n) return;
            'number' !== l || a || (n += s && s[3] || (we.cssNumber[i] ? '' : 'px')), De.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (r[t] = 'inherit'), d && 'set' in d && void 0 === (n = d.set(e, n, o)) || (a ? r.setProperty(t, n) : r[t] = n);
          } else return d && 'get' in d && void 0 !== (s = d.get(e, !1, o)) ? s : r[t];
        }
      },
      css: function css(e, t, n, o) {
        var i = E(t),
            a = xt.test(t),
            r,
            s,
            l;
        return a || (t = G(i)), l = we.cssHooks[t] || we.cssHooks[i], l && 'get' in l && (r = l.get(e, !0, n)), void 0 === r && (r = U(e, t, o)), 'normal' === r && t in Ot && (r = Ot[t]), '' === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r;
      }
    }), we.each(['height', 'width'], function (e, t) {
      we.cssHooks[t] = {
        get: function get(e, n, o) {
          if (n) return !Nt.test(we.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? X(e, t, o) : st(e, It, function () {
            return X(e, t, o);
          });
        },
        set: function set(e, n, o) {
          var i = vt(e),
              a = !De.scrollboxSize() && 'absolute' === i.position,
              r = (a || o) && 'border-box' === we.css(e, 'boxSizing', !1, i),
              s = o ? Q(e, t, o, r, i) : 0,
              l;
          return r && a && (s -= fe(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Q(e, t, 'border', !1, i) - .5)), s && (l = tt.exec(n)) && 'px' !== (l[3] || 'px') && (e.style[t] = n, n = we.css(e, t)), K(e, n, s);
        }
      };
    }), we.cssHooks.marginLeft = B(De.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(U(e, 'marginLeft')) || e.getBoundingClientRect().left - st(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + 'px';
    }), we.each({
      margin: '',
      padding: '',
      border: 'Width'
    }, function (e, t) {
      we.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var o = 0, i = {}, a = 'string' == typeof n ? n.split(' ') : [n]; 4 > o; o++) {
            i[e + nt[o] + t] = a[o] || a[o - 2] || a[0];
          }

          return i;
        }
      }, 'margin' !== e && (we.cssHooks[e + t].set = K);
    }), we.fn.extend({
      css: function css(e, t) {
        return $e(this, function (e, t, n) {
          var o = {},
              a = 0,
              i,
              r;

          if (Array.isArray(t)) {
            for (i = vt(e), r = t.length; a < r; a++) {
              o[t[a]] = we.css(e, t[a], !1, i);
            }

            return o;
          }

          return void 0 === n ? we.css(e, t) : we.style(e, t, n);
        }, e, t, 1 < arguments.length);
      }
    }), we.Tween = Y, Y.prototype = {
      constructor: Y,
      init: function init(e, t, n, o, i, a) {
        this.elem = e, this.prop = n, this.easing = i || we.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = a || (we.cssNumber[n] ? '' : 'px');
      },
      cur: function cur() {
        var e = Y.propHooks[this.prop];
        return e && e.get ? e.get(this) : Y.propHooks._default.get(this);
      },
      run: function run(e) {
        var t = Y.propHooks[this.prop],
            n;
        return this.pos = this.options.duration ? n = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : Y.propHooks._default.set(this), this;
      }
    }, Y.prototype.init.prototype = Y.prototype, Y.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0);
        },
        set: function set(e) {
          we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 === e.elem.nodeType && (we.cssHooks[e.prop] || null != e.elem.style[G(e.prop)]) ? we.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
        }
      }
    }, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, we.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }, we.fx = Y.prototype.init, we.fx.step = {};
    var wt = /^(?:toggle|show|hide)$/,
        Lt = /queueHooks$/,
        kt,
        Pt;
    we.Animation = we.extend(oe, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return C(n.elem, e, tt.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        Ne(e) ? (t = e, e = ['*']) : e = e.match(Be);

        for (var n = 0, o = e.length, i; n < o; n++) {
          i = e[n], oe.tweeners[i] = oe.tweeners[i] || [], oe.tweeners[i].unshift(t);
        }
      },
      prefilters: [te],
      prefilter: function prefilter(e, t) {
        t ? oe.prefilters.unshift(e) : oe.prefilters.push(e);
      }
    }), we.speed = function (e, t, n) {
      var o = e && 'object' == _typeof(e) ? we.extend({}, e) : {
        complete: n || !n && t || Ne(e) && e,
        duration: e,
        easing: n && t || t && !Ne(t) && t
      };
      return we.fx.off ? o.duration = 0 : 'number' != typeof o.duration && (o.duration in we.fx.speeds ? o.duration = we.fx.speeds[o.duration] : o.duration = we.fx.speeds._default), (null == o.queue || !0 === o.queue) && (o.queue = 'fx'), o.old = o.complete, o.complete = function () {
        Ne(o.old) && o.old.call(this), o.queue && we.dequeue(this, o.queue);
      }, o;
    }, we.fn.extend({
      fadeTo: function fadeTo(e, t, n, o) {
        return this.filter(rt).css('opacity', 0).show().end().animate({
          opacity: t
        }, e, n, o);
      },
      animate: function animate(e, t, n, o) {
        var i = we.isEmptyObject(e),
            a = we.speed(t, n, o),
            r = function r() {
          var t = oe(this, we.extend({}, e), a);
          (i || Ye.get(this, 'finish')) && t.stop(!0);
        };

        return r.finish = r, i || !1 === a.queue ? this.each(r) : this.queue(a.queue, r);
      },
      stop: function stop(e, t, n) {
        var o = function o(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
          var t = !0,
              i = null != e && e + 'queueHooks',
              a = we.timers,
              r = Ye.get(this);
          if (i) r[i] && r[i].stop && o(r[i]);else for (i in r) {
            r[i] && r[i].stop && Lt.test(i) && o(r[i]);
          }

          for (i = a.length; i--;) {
            a[i].elem === this && (null == e || a[i].queue === e) && (a[i].anim.stop(n), t = !1, a.splice(i, 1));
          }

          (t || !n) && we.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || 'fx'), this.each(function () {
          var t = Ye.get(this),
              n = t[e + 'queue'],
              o = t[e + 'queueHooks'],
              i = we.timers,
              a = n ? n.length : 0,
              r;

          for (t.finish = !0, we.queue(this, e, []), o && o.stop && o.stop.call(this, !0), r = i.length; r--;) {
            i[r].elem === this && i[r].queue === e && (i[r].anim.stop(!0), i.splice(r, 1));
          }

          for (r = 0; r < a; r++) {
            n[r] && n[r].finish && n[r].finish.call(this);
          }

          delete t.finish;
        });
      }
    }), we.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = we.fn[t];

      we.fn[t] = function (e, o, i) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(Z(t, !0), e, o, i);
      };
    }), we.each({
      slideDown: Z('show'),
      slideUp: Z('hide'),
      slideToggle: Z('toggle'),
      fadeIn: {
        opacity: 'show'
      },
      fadeOut: {
        opacity: 'hide'
      },
      fadeToggle: {
        opacity: 'toggle'
      }
    }, function (e, t) {
      we.fn[e] = function (e, n, o) {
        return this.animate(t, e, n, o);
      };
    }), we.timers = [], we.fx.tick = function () {
      var e = 0,
          t = we.timers,
          n;

      for (kt = Date.now(); e < t.length; e++) {
        n = t[e], n() || t[e] !== n || t.splice(e--, 1);
      }

      t.length || we.fx.stop(), kt = void 0;
    }, we.fx.timer = function (e) {
      we.timers.push(e), we.fx.start();
    }, we.fx.interval = 13, we.fx.start = function () {
      Pt || (Pt = !0, z());
    }, we.fx.stop = function () {
      Pt = null;
    }, we.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, we.fn.delay = function (e, t) {
      return e = we.fx ? we.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var o = a.setTimeout(t, e);

        n.stop = function () {
          a.clearTimeout(o);
        };
      });
    }, function () {
      var e = me.createElement('input'),
          t = me.createElement('select'),
          n = t.appendChild(me.createElement('option'));
      e.type = 'checkbox', De.checkOn = '' !== e.value, De.optSelected = n.selected, e = me.createElement('input'), e.value = 't', e.type = 'radio', De.radioValue = 't' === e.value;
    }();
    var Ht = we.expr.attrHandle,
        Mt;
    we.fn.extend({
      attr: function attr(e, t) {
        return $e(this, we.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          we.removeAttr(this, e);
        });
      }
    }), we.extend({
      attr: function attr(e, t, n) {
        var o = e.nodeType,
            i,
            a;
        if (3 !== o && 8 !== o && 2 !== o) return 'undefined' == typeof e.getAttribute ? we.prop(e, t, n) : (1 === o && we.isXMLDoc(e) || (a = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? Mt : void 0)), void 0 !== n) ? null === n ? void we.removeAttr(e, t) : a && 'set' in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ''), n) : a && 'get' in a && null !== (i = a.get(e, t)) ? i : (i = we.find.attr(e, t), null == i ? void 0 : i);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!De.radioValue && 'radio' === t && p(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n = 0,
            o = t && t.match(Be),
            i;
        if (o && 1 === e.nodeType) for (; i = o[n++];) {
          e.removeAttribute(i);
        }
      }
    }), Mt = {
      set: function set(e, t, n) {
        return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, we.each(we.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Ht[t] || we.find.attr;

      Ht[t] = function (e, t, o) {
        var i = t.toLowerCase(),
            a,
            r;
        return o || (r = Ht[i], Ht[i] = a, a = null == n(e, t, o) ? null : i, Ht[i] = r), a;
      };
    });
    var Rt = /^(?:input|select|textarea|button)$/i,
        jt = /^(?:a|area)$/i;
    we.fn.extend({
      prop: function prop(e, t) {
        return $e(this, we.prop, e, t, 1 < arguments.length);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[we.propFix[e] || e];
        });
      }
    }), we.extend({
      prop: function prop(e, t, n) {
        var o = e.nodeType,
            i,
            a;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && we.isXMLDoc(e) || (t = we.propFix[t] || t, a = we.propHooks[t]), void 0 === n ? a && 'get' in a && null !== (i = a.get(e, t)) ? i : e[t] : a && 'set' in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n;
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = we.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : Rt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": 'htmlFor',
        "class": 'className'
      }
    }), De.optSelected || (we.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), we.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
      we.propFix[this.toLowerCase()] = this;
    }), we.fn.extend({
      addClass: function addClass(e) {
        var t = 0,
            n,
            o,
            i,
            a,
            r,
            s,
            l;
        if (Ne(e)) return this.each(function (t) {
          we(this).addClass(e.call(this, t, ae(this)));
        });
        if (n = re(e), n.length) for (; o = this[t++];) {
          if (a = ae(o), i = 1 === o.nodeType && ' ' + ie(a) + ' ', i) {
            for (s = 0; r = n[s++];) {
              0 > i.indexOf(' ' + r + ' ') && (i += r + ' ');
            }

            l = ie(i), a !== l && o.setAttribute('class', l);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t = 0,
            n,
            o,
            i,
            a,
            r,
            s,
            l;
        if (Ne(e)) return this.each(function (t) {
          we(this).removeClass(e.call(this, t, ae(this)));
        });
        if (!arguments.length) return this.attr('class', '');
        if (n = re(e), n.length) for (; o = this[t++];) {
          if (a = ae(o), i = 1 === o.nodeType && ' ' + ie(a) + ' ', i) {
            for (s = 0; r = n[s++];) {
              for (; -1 < i.indexOf(' ' + r + ' ');) {
                i = i.replace(' ' + r + ' ', ' ');
              }
            }

            l = ie(i), a !== l && o.setAttribute('class', l);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            o = 'string' == n || Array.isArray(e);

        return 'boolean' == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : Ne(e) ? this.each(function (n) {
          we(this).toggleClass(e.call(this, n, ae(this), t), t);
        }) : this.each(function () {
          var t, a, i, r;
          if (o) for (a = 0, i = we(this), r = re(e); t = r[a++];) {
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          } else (void 0 === e || 'boolean' == n) && (t = ae(this), t && Ye.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : Ye.get(this, '__className__') || ''));
        });
      },
      hasClass: function hasClass(e) {
        var t = 0,
            n,
            o;

        for (n = ' ' + e + ' '; o = this[t++];) {
          if (1 === o.nodeType && -1 < (' ' + ie(ae(o)) + ' ').indexOf(n)) return !0;
        }

        return !1;
      }
    });
    var Wt = /\r/g;
    we.fn.extend({
      val: function val(e) {
        var t = this[0],
            n,
            o,
            a;
        return arguments.length ? (a = Ne(e), this.each(function (t) {
          var o;
          1 !== this.nodeType || (o = a ? e.call(this, t, we(this).val()) : e, null == o ? o = '' : 'number' == typeof o ? o += '' : Array.isArray(o) && (o = we.map(o, function (e) {
            return null == e ? '' : e + '';
          })), n = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()], (!n || !('set' in n) || void 0 === n.set(this, o, 'value')) && (this.value = o));
        })) : t ? (n = we.valHooks[t.type] || we.valHooks[t.nodeName.toLowerCase()], n && 'get' in n && void 0 !== (o = n.get(t, 'value'))) ? o : (o = t.value, 'string' == typeof o ? o.replace(Wt, '') : null == o ? '' : o) : void 0;
      }
    }), we.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = we.find.attr(e, 'value');
            return null == t ? ie(we.text(e)) : t;
          }
        },
        select: {
          get: function get(e) {
            var t = e.options,
                n = e.selectedIndex,
                o = 'select-one' === e.type,
                a = o ? null : [],
                r = o ? n + 1 : t.length,
                s,
                l,
                d;

            for (d = 0 > n ? r : o ? n : 0; d < r; d++) {
              if (l = t[d], (l.selected || d === n) && !l.disabled && (!l.parentNode.disabled || !p(l.parentNode, 'optgroup'))) {
                if (s = we(l).val(), o) return s;
                a.push(s);
              }
            }

            return a;
          },
          set: function set(e, t) {
            for (var n = e.options, o = we.makeArray(t), a = n.length, i, r; a--;) {
              r = n[a], (r.selected = -1 < we.inArray(we.valHooks.option.get(r), o)) && (i = !0);
            }

            return i || (e.selectedIndex = -1), o;
          }
        }
      }
    }), we.each(['radio', 'checkbox'], function () {
      we.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = -1 < we.inArray(we(e).val(), t);
        }
      }, De.checkOn || (we.valHooks[this].get = function (e) {
        return null === e.getAttribute('value') ? 'on' : e.value;
      });
    }), De.focusin = 'onfocusin' in a;

    var qt = /^(?:focusinfocus|focusoutblur)$/,
        Ft = function Ft(t) {
      t.stopPropagation();
    };

    we.extend(we.event, {
      trigger: function trigger(e, t, n, o) {
        var r = [n || me],
            s = Ce.call(e, 'type') ? e.type : e,
            l = Ce.call(e, 'namespace') ? e.namespace.split('.') : [],
            d,
            i,
            p,
            c,
            u,
            f,
            g,
            m;

        if ((i = m = p = n = n || me, 3 !== n.nodeType && 8 !== n.nodeType) && !qt.test(s + we.event.triggered) && (-1 < s.indexOf('.') && (l = s.split('.'), s = l.shift(), l.sort()), u = 0 > s.indexOf(':') && 'on' + s, e = e[we.expando] ? e : new we.Event(s, 'object' == _typeof(e) && e), e.isTrigger = o ? 2 : 3, e.namespace = l.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + l.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : we.makeArray(t, [e]), g = we.event.special[s] || {}, o || !g.trigger || !1 !== g.trigger.apply(n, t))) {
          if (!o && !g.noBubble && !xe(n)) {
            for (c = g.delegateType || s, qt.test(c + s) || (i = i.parentNode); i; i = i.parentNode) {
              r.push(i), p = i;
            }

            p === (n.ownerDocument || me) && r.push(p.defaultView || p.parentWindow || a);
          }

          for (d = 0; (i = r[d++]) && !e.isPropagationStopped();) {
            m = i, e.type = 1 < d ? c : g.bindType || s, f = (Ye.get(i, 'events') || {})[e.type] && Ye.get(i, 'handle'), f && f.apply(i, t), f = u && i[u], f && f.apply && Xe(i) && (e.result = f.apply(i, t), !1 === e.result && e.preventDefault());
          }

          return e.type = s, o || e.isDefaultPrevented() || g._default && !1 !== g._default.apply(r.pop(), t) || !Xe(n) || !u || !Ne(n[s]) || xe(n) || (p = n[u], p && (n[u] = null), we.event.triggered = s, e.isPropagationStopped() && m.addEventListener(s, Ft), n[s](), e.isPropagationStopped() && m.removeEventListener(s, Ft), we.event.triggered = void 0, p && (n[u] = p)), e.result;
        }
      },
      simulate: function simulate(t, n, o) {
        var i = we.extend(new we.Event(), o, {
          type: t,
          isSimulated: !0
        });
        we.event.trigger(i, null, n);
      }
    }), we.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          we.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return we.event.trigger(e, t, n, !0);
      }
    }), De.focusin || we.each({
      focus: 'focusin',
      blur: 'focusout'
    }, function (e, t) {
      var n = function n(e) {
        we.event.simulate(t, e.target, we.event.fix(e));
      };

      we.event.special[t] = {
        setup: function setup() {
          var o = this.ownerDocument || this,
              i = Ye.access(o, t);
          i || o.addEventListener(e, n, !0), Ye.access(o, t, (i || 0) + 1);
        },
        teardown: function teardown() {
          var o = this.ownerDocument || this,
              i = Ye.access(o, t) - 1;
          i ? Ye.access(o, t, i) : (o.removeEventListener(e, n, !0), Ye.remove(o, t));
        }
      };
    });
    var Ut = a.location,
        Bt = Date.now(),
        Vt = /\?/;

    we.parseXML = function (e) {
      var t;
      if (!e || 'string' != typeof e) return null;

      try {
        t = new a.DOMParser().parseFromString(e, 'text/xml');
      } catch (n) {
        t = void 0;
      }

      return (!t || t.getElementsByTagName('parsererror').length) && we.error('Invalid XML: ' + e), t;
    };

    var Gt = /\[\]$/,
        $t = /\r?\n/g,
        Kt = /^(?:submit|button|image|reset|file)$/i,
        Qt = /^(?:input|select|textarea|keygen)/i;
    we.param = function (e, t) {
      var n = [],
          o = function o(e, t) {
        var o = Ne(t) ? t() : t;
        n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == o ? '' : o);
      },
          i;

      if (null == e) return '';
      if (Array.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function () {
        o(this.name, this.value);
      });else for (i in e) {
        se(i, e[i], t, o);
      }
      return n.join('&');
    }, we.fn.extend({
      serialize: function serialize() {
        return we.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = we.prop(this, 'elements');
          return e ? we.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !we(this).is(':disabled') && Qt.test(this.nodeName) && !Kt.test(e) && (this.checked || !dt.test(e));
        }).map(function (e, t) {
          var n = we(this).val();
          return null == n ? null : Array.isArray(n) ? we.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace($t, '\r\n')
            };
          }) : {
            name: t.name,
            value: n.replace($t, '\r\n')
          };
        }).get();
      }
    });
    var Xt = /%20/g,
        Yt = /#.*$/,
        zt = /([?&])_=[^&]*/,
        Jt = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        Zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        en = /^(?:GET|HEAD)$/,
        tn = /^\/\//,
        nn = {},
        on = {},
        an = '*/'.concat('*'),
        rn = me.createElement('a');
    rn.href = Ut.href, we.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ut.href,
        type: 'GET',
        isLocal: Zt.test(Ut.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          "*": an,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON'
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": we.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? pe(pe(e, we.ajaxSettings), t) : pe(we.ajaxSettings, e);
      },
      ajaxPrefilter: le(nn),
      ajaxTransport: le(on),
      ajax: function ajax(e, t) {
        function n(e, t, n, i) {
          var c = t,
              u,
              f,
              _,
              T,
              C;

          b || (b = !0, E && a.clearTimeout(E), m = void 0, y = i || '', g.readyState = 0 < e ? 4 : 0, u = 200 <= e && 300 > e || 304 === e, n && (T = ce(o, g, n)), T = ue(o, T, g, u), u ? (o.ifModified && (C = g.getResponseHeader('Last-Modified'), C && (we.lastModified[h] = C), C = g.getResponseHeader('etag'), C && (we.etag[h] = C)), 204 === e || 'HEAD' === o.type ? c = 'nocontent' : 304 === e ? c = 'notmodified' : (c = T.state, f = T.data, _ = T.error, u = !_)) : (_ = c, (e || !c) && (c = 'error', 0 > e && (e = 0))), g.status = e, g.statusText = (t || c) + '', u ? l.resolveWith(r, [f, c, g]) : l.rejectWith(r, [g, c, _]), g.statusCode(p), p = void 0, v && s.trigger(u ? 'ajaxSuccess' : 'ajaxError', [g, o, u ? f : _]), d.fireWith(r, [g, c]), v && (s.trigger('ajaxComplete', [g, o]), ! --we.active && we.event.trigger('ajaxStop')));
        }

        'object' == _typeof(e) && (t = e, e = void 0), t = t || {};

        var o = we.ajaxSetup({}, t),
            r = o.context || o,
            s = o.context && (r.nodeType || r.jquery) ? we(r) : we.event,
            l = we.Deferred(),
            d = we.Callbacks('once memory'),
            p = o.statusCode || {},
            c = {},
            u = {},
            f = 'canceled',
            g = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (b) {
              if (!_) for (_ = {}; t = Jt.exec(y);) {
                _[t[1].toLowerCase() + ' '] = (_[t[1].toLowerCase() + ' '] || []).concat(t[2]);
              }
              t = _[e.toLowerCase() + ' '];
            }

            return null == t ? null : t.join(', ');
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return b ? y : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == b && (e = u[e.toLowerCase()] = u[e.toLowerCase()] || e, c[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == b && (o.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            if (e) if (b) g.always(e[g.status]);else for (var t in e) {
              p[t] = [p[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || f;
            return m && m.abort(t), n(0, t), this;
          }
        },
            m,
            h,
            y,
            _,
            E,
            T,
            b,
            v,
            C,
            i;

        if (l.promise(g), o.url = ((e || o.url || Ut.href) + '').replace(tn, Ut.protocol + '//'), o.type = t.method || t.type || o.method || o.type, o.dataTypes = (o.dataType || '*').toLowerCase().match(Be) || [''], null == o.crossDomain) {
          T = me.createElement('a');

          try {
            T.href = o.url, T.href = T.href, o.crossDomain = rn.protocol + '//' + rn.host != T.protocol + '//' + T.host;
          } catch (t) {
            o.crossDomain = !0;
          }
        }

        if (o.data && o.processData && 'string' != typeof o.data && (o.data = we.param(o.data, o.traditional)), de(nn, o, t, g), b) return g;

        for (C in v = we.event && o.global, v && 0 == we.active++ && we.event.trigger('ajaxStart'), o.type = o.type.toUpperCase(), o.hasContent = !en.test(o.type), h = o.url.replace(Yt, ''), o.hasContent ? o.data && o.processData && 0 === (o.contentType || '').indexOf('application/x-www-form-urlencoded') && (o.data = o.data.replace(Xt, '+')) : (i = o.url.slice(h.length), o.data && (o.processData || 'string' == typeof o.data) && (h += (Vt.test(h) ? '&' : '?') + o.data, delete o.data), !1 === o.cache && (h = h.replace(zt, '$1'), i = (Vt.test(h) ? '&' : '?') + '_=' + Bt++ + i), o.url = h + i), o.ifModified && (we.lastModified[h] && g.setRequestHeader('If-Modified-Since', we.lastModified[h]), we.etag[h] && g.setRequestHeader('If-None-Match', we.etag[h])), (o.data && o.hasContent && !1 !== o.contentType || t.contentType) && g.setRequestHeader('Content-Type', o.contentType), g.setRequestHeader('Accept', o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ('*' === o.dataTypes[0] ? '' : ', ' + an + '; q=0.01') : o.accepts['*']), o.headers) {
          g.setRequestHeader(C, o.headers[C]);
        }

        if (o.beforeSend && (!1 === o.beforeSend.call(r, g, o) || b)) return g.abort();
        if (f = 'abort', d.add(o.complete), g.done(o.success), g.fail(o.error), m = de(on, o, t, g), !m) n(-1, 'No Transport');else {
          if (g.readyState = 1, v && s.trigger('ajaxSend', [g, o]), b) return g;
          o.async && 0 < o.timeout && (E = a.setTimeout(function () {
            g.abort('timeout');
          }, o.timeout));

          try {
            b = !1, m.send(c, n);
          } catch (t) {
            if (b) throw t;
            n(-1, t);
          }
        }
        return g;
      },
      getJSON: function getJSON(e, t, n) {
        return we.get(e, t, n, 'json');
      },
      getScript: function getScript(e, t) {
        return we.get(e, void 0, t, 'script');
      }
    }), we.each(['get', 'post'], function (e, t) {
      we[t] = function (e, n, o, i) {
        return Ne(n) && (i = i || o, o = n, n = void 0), we.ajax(we.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: o
        }, we.isPlainObject(e) && e));
      };
    }), we._evalUrl = function (e, t) {
      return we.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          we.globalEval(e, t);
        }
      });
    }, we.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (Ne(e) && (e = e.call(this[0])), t = we(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return Ne(e) ? this.each(function (t) {
          we(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = we(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = Ne(e);
        return this.each(function (n) {
          we(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not('body').each(function () {
          we(this).replaceWith(this.childNodes);
        }), this;
      }
    }), we.expr.pseudos.hidden = function (e) {
      return !we.expr.pseudos.visible(e);
    }, we.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, we.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (t) {}
    };
    var sn = {
      0: 200,
      1223: 204
    },
        ln = we.ajaxSettings.xhr();
    De.cors = !!ln && 'withCredentials' in ln, De.ajax = ln = !!ln, we.ajaxTransport(function (e) {
      var _t3, n;

      if (De.cors || ln && !e.crossDomain) return {
        send: function send(o, r) {
          var s = e.xhr(),
              l;
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (l in e.xhrFields) {
            s[l] = e.xhrFields[l];
          }

          for (l in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'), o) {
            s.setRequestHeader(l, o[l]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' == typeof s.status ? r(s.status, s.statusText) : r(0, 'error') : r(sn[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()));
            };
          }, s.onload = _t3(), n = s.onerror = s.ontimeout = _t3('error'), void 0 === s.onabort ? s.onreadystatechange = function () {
            4 === s.readyState && a.setTimeout(function () {
              _t3 && n();
            });
          } : s.onabort = n, _t3 = _t3('abort');

          try {
            s.send(e.hasContent && e.data || null);
          } catch (n) {
            if (_t3) throw n;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), we.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), we.ajaxSetup({
      accepts: {
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return we.globalEval(e), e;
        }
      }
    }), we.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }), we.ajaxTransport('script', function (e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, _n;

        return {
          send: function send(o, i) {
            t = we('<script>').attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on('load error', _n = function n(e) {
              t.remove(), _n = null, e && i('error' === e.type ? 404 : 200, e.type);
            }), me.head.appendChild(t[0]);
          },
          abort: function abort() {
            _n && _n();
          }
        };
      }
    });
    var dn = [],
        pn = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function jsonpCallback() {
        var e = dn.pop() || we.expando + '_' + Bt++;
        return this[e] = !0, e;
      }
    }), we.ajaxPrefilter('json jsonp', function (e, t, n) {
      var o = !1 !== e.jsonp && (pn.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && pn.test(e.data) && 'data'),
          i,
          r,
          s;
      if (o || 'jsonp' === e.dataTypes[0]) return i = e.jsonpCallback = Ne(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(pn, '$1' + i) : !1 !== e.jsonp && (e.url += (Vt.test(e.url) ? '&' : '?') + e.jsonp + '=' + i), e.converters['script json'] = function () {
        return s || we.error(i + ' was not called'), s[0];
      }, e.dataTypes[0] = 'json', r = a[i], a[i] = function () {
        s = arguments;
      }, n.always(function () {
        void 0 === r ? we(a).removeProp(i) : a[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, dn.push(i)), s && Ne(r) && r(s[0]), s = r = void 0;
      }), 'script';
    }), De.createHTMLDocument = function () {
      var e = me.implementation.createHTMLDocument('').body;
      return e.innerHTML = '<form></form><form></form>', 2 === e.childNodes.length;
    }(), we.parseHTML = function (e, t, n) {
      if ('string' != typeof e) return [];
      'boolean' == typeof t && (n = t, t = !1);
      var o, i, a;
      return (t || (De.createHTMLDocument ? (t = me.implementation.createHTMLDocument(''), o = t.createElement('base'), o.href = me.location.href, t.head.appendChild(o)) : t = me), i = Re.exec(e), a = !n && [], i) ? [t.createElement(i[1])] : (i = x([e], t, a), a && a.length && we(a).remove(), we.merge([], i.childNodes));
    }, we.fn.load = function (e, t, n) {
      var o = this,
          i = e.indexOf(' '),
          a,
          r,
          s;
      return -1 < i && (a = ie(e.slice(i)), e = e.slice(0, i)), Ne(t) ? (n = t, t = void 0) : t && 'object' == _typeof(t) && (r = 'POST'), 0 < o.length && we.ajax({
        url: e,
        type: r || 'GET',
        dataType: 'html',
        data: t
      }).done(function (e) {
        s = arguments, o.html(a ? we('<div>').append(we.parseHTML(e)).find(a) : e);
      }).always(n && function (e, t) {
        o.each(function () {
          n.apply(this, s || [e.responseText, t, e]);
        });
      }), this;
    }, we.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      we.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), we.expr.pseudos.animated = function (e) {
      return we.grep(we.timers, function (t) {
        return e === t.elem;
      }).length;
    }, we.offset = {
      setOffset: function setOffset(e, t, n) {
        var o = we.css(e, 'position'),
            i = we(e),
            a = {},
            r,
            s,
            l,
            d,
            p,
            c,
            u;
        'static' === o && (e.style.position = 'relative'), p = i.offset(), l = we.css(e, 'top'), c = we.css(e, 'left'), u = ('absolute' === o || 'fixed' === o) && -1 < (l + c).indexOf('auto'), u ? (r = i.position(), d = r.top, s = r.left) : (d = parseFloat(l) || 0, s = parseFloat(c) || 0), Ne(t) && (t = t.call(e, n, we.extend({}, p))), null != t.top && (a.top = t.top - p.top + d), null != t.left && (a.left = t.left - p.left + s), 'using' in t ? t.using.call(e, a) : i.css(a);
      }
    }, we.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          we.offset.setOffset(this, e, t);
        });
        var t = this[0],
            n,
            o;
        if (t) return t.getClientRects().length ? (n = t.getBoundingClientRect(), o = t.ownerDocument.defaultView, {
          top: n.top + o.pageYOffset,
          left: n.left + o.pageXOffset
        }) : {
          top: 0,
          left: 0
        };
      },
      position: function position() {
        if (this[0]) {
          var e = this[0],
              t = {
            top: 0,
            left: 0
          },
              n,
              o,
              i;
          if ('fixed' === we.css(e, 'position')) o = e.getBoundingClientRect();else {
            for (o = this.offset(), i = e.ownerDocument, n = e.offsetParent || i.documentElement; n && (n === i.body || n === i.documentElement) && 'static' === we.css(n, 'position');) {
              n = n.parentNode;
            }

            n && n !== e && 1 === n.nodeType && (t = we(n).offset(), t.top += we.css(n, 'borderTopWidth', !0), t.left += we.css(n, 'borderLeftWidth', !0));
          }
          return {
            top: o.top - t.top - we.css(e, 'marginTop', !0),
            left: o.left - t.left - we.css(e, 'marginLeft', !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && 'static' === we.css(e, 'position');) {
            e = e.offsetParent;
          }

          return e || ot;
        });
      }
    }), we.each({
      scrollLeft: 'pageXOffset',
      scrollTop: 'pageYOffset'
    }, function (e, t) {
      var n = 'pageYOffset' === t;

      we.fn[e] = function (o) {
        return $e(this, function (e, o, i) {
          var a;
          return xe(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === i ? a ? a[t] : e[o] : void (a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[o] = i);
        }, e, o, arguments.length);
      };
    }), we.each(['top', 'left'], function (e, t) {
      we.cssHooks[t] = B(De.pixelPosition, function (e, n) {
        if (n) return n = U(e, t), bt.test(n) ? we(e).position()[t] + 'px' : n;
      });
    }), we.each({
      Height: 'height',
      Width: 'width'
    }, function (e, t) {
      we.each({
        padding: 'inner' + e,
        content: t,
        "": 'outer' + e
      }, function (o, i) {
        we.fn[i] = function (a, r) {
          var s = arguments.length && (o || 'boolean' != typeof a),
              l = o || (!0 === a || !0 === r ? 'margin' : 'border');
          return $e(this, function (t, o, a) {
            var r;
            return xe(t) ? 0 === i.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (r = t.documentElement, n(t.body['scroll' + e], r['scroll' + e], t.body['offset' + e], r['offset' + e], r['client' + e])) : void 0 === a ? we.css(t, o, l) : we.style(t, o, a, l);
          }, t, s ? a : void 0, s);
        };
      });
    }), we.each(['blur', 'focus', 'focusin', 'focusout', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu'], function (e, t) {
      we.fn[t] = function (e, n) {
        return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), we.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), we.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, o) {
        return this.on(t, e, n, o);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      }
    }), we.proxy = function (e, t) {
      var n, o, i;
      if ('string' == typeof t && (n = e[t], t = e, e = n), !!Ne(e)) return o = ye.call(arguments, 2), i = function i() {
        return e.apply(t || this, o.concat(ye.call(arguments)));
      }, i.guid = e.guid = e.guid || we.guid++, i;
    }, we.holdReady = function (e) {
      e ? we.readyWait++ : we.ready(!0);
    }, we.isArray = Array.isArray, we.parseJSON = JSON.parse, we.nodeName = p, we.isFunction = Ne, we.isWindow = xe, we.camelCase = E, we.type = d, we.now = Date.now, we.isNumeric = function (e) {
      var t = we.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }, o = [], i = function () {
      return we;
    }.apply(t, o), !(void 0 !== i && (e.exports = i));
    var cn = a.jQuery,
        un = a.$;
    return we.noConflict = function (e) {
      return a.$ === we && (a.$ = un), e && a.jQuery === we && (a.jQuery = cn), we;
    }, r || (a.jQuery = a.$ = we), we;
  });
}, function (e, t, n) {
  'use strict';

  var o = Math.round,
      i = Math.max;
  n.r(t), function (e) {
    function n(e) {
      return e && '[object Function]' === {}.toString.call(e);
    }

    function a(e, t) {
      if (1 !== e.nodeType) return [];
      var n = e.ownerDocument.defaultView,
          o = n.getComputedStyle(e, null);
      return t ? o[t] : o;
    }

    function r(e) {
      return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }

    function s(e) {
      if (!e) return document.body;

      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;

        case '#document':
          return e.body;
      }

      var t = a(e),
          n = t.overflow,
          o = t.overflowX,
          i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + o) ? e : s(r(e));
    }

    function l(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }

    function d(e) {
      return 11 === e ? le : 10 === e ? de : le || de;
    }

    function p(e) {
      if (!e) return document.documentElement;

      for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) {
        n = (e = e.nextElementSibling).offsetParent;
      }

      var o = n && n.nodeName;
      return o && 'BODY' !== o && 'HTML' !== o ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === a(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
    }

    function c(e) {
      var t = e.nodeName;
      return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
    }

    function u(e) {
      return null === e.parentNode ? e : u(e.parentNode);
    }

    function f(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          o = n ? e : t,
          i = n ? t : e,
          a = document.createRange();
      a.setStart(o, 0), a.setEnd(i, 0);
      var r = a.commonAncestorContainer;
      if (e !== r && t !== r || o.contains(i)) return c(r) ? r : p(r);
      var s = u(e);
      return s.host ? f(s.host, t) : f(e, u(t).host);
    }

    function g(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 'top',
          n = 'top' === t ? 'scrollTop' : 'scrollLeft',
          o = e.nodeName;

      if ('BODY' === o || 'HTML' === o) {
        var i = e.ownerDocument.documentElement,
            a = e.ownerDocument.scrollingElement || i;
        return a[n];
      }

      return e[n];
    }

    function m(e, t) {
      var n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
          o = g(t, 'top'),
          i = g(t, 'left'),
          a = n ? -1 : 1;
      return e.top += o * a, e.bottom += o * a, e.left += i * a, e.right += i * a, e;
    }

    function h(e, t) {
      var n = 'x' === t ? 'Left' : 'Top',
          o = 'Left' === n ? 'Right' : 'Bottom';
      return parseFloat(e['border' + n + 'Width'], 10) + parseFloat(e['border' + o + 'Width'], 10);
    }

    function y(e, t, n, o) {
      return i(t['offset' + e], t['scroll' + e], n['client' + e], n['offset' + e], n['scroll' + e], d(10) ? parseInt(n['offset' + e]) + parseInt(o['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(o['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
    }

    function _(e) {
      var t = e.body,
          n = e.documentElement,
          o = d(10) && getComputedStyle(n);
      return {
        height: y('Height', t, n, o),
        width: y('Width', t, n, o)
      };
    }

    function E(e) {
      return fe({}, e, {
        right: e.left + e.width,
        bottom: e.top + e.height
      });
    }

    function T(e) {
      var t = {};

      try {
        if (d(10)) {
          t = e.getBoundingClientRect();
          var n = g(e, 'top'),
              o = g(e, 'left');
          t.top += n, t.left += o, t.bottom += n, t.right += o;
        } else t = e.getBoundingClientRect();
      } catch (t) {}

      var i = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top
      },
          r = 'HTML' === e.nodeName ? _(e.ownerDocument) : {},
          s = r.width || e.clientWidth || i.width,
          l = r.height || e.clientHeight || i.height,
          p = e.offsetWidth - s,
          c = e.offsetHeight - l;

      if (p || c) {
        var u = a(e);
        p -= h(u, 'x'), c -= h(u, 'y'), i.width -= p, i.height -= c;
      }

      return E(i);
    }

    function b(e, t) {
      var n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
          o = d(10),
          r = 'HTML' === t.nodeName,
          l = T(e),
          p = T(t),
          c = s(e),
          u = a(t),
          f = parseFloat(u.borderTopWidth, 10),
          g = parseFloat(u.borderLeftWidth, 10);
      n && r && (p.top = i(p.top, 0), p.left = i(p.left, 0));
      var h = E({
        top: l.top - p.top - f,
        left: l.left - p.left - g,
        width: l.width,
        height: l.height
      });

      if (h.marginTop = 0, h.marginLeft = 0, !o && r) {
        var y = parseFloat(u.marginTop, 10),
            _ = parseFloat(u.marginLeft, 10);

        h.top -= f - y, h.bottom -= f - y, h.left -= g - _, h.right -= g - _, h.marginTop = y, h.marginLeft = _;
      }

      return (o && !n ? t.contains(c) : t === c && 'BODY' !== c.nodeName) && (h = m(h, t)), h;
    }

    function v(e) {
      var t = !!(1 < arguments.length && arguments[1] !== void 0) && arguments[1],
          n = e.ownerDocument.documentElement,
          o = b(e, n),
          a = i(n.clientWidth, window.innerWidth || 0),
          r = i(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : g(n),
          l = t ? 0 : g(n, 'left'),
          d = {
        top: s - o.top + o.marginTop,
        left: l - o.left + o.marginLeft,
        width: a,
        height: r
      };
      return E(d);
    }

    function C(e) {
      var t = e.nodeName;
      if ('BODY' === t || 'HTML' === t) return !1;
      if ('fixed' === a(e, 'position')) return !0;
      var n = r(e);
      return !!n && C(n);
    }

    function A(e) {
      if (!e || !e.parentElement || d()) return document.documentElement;

      for (var t = e.parentElement; t && 'none' === a(t, 'transform');) {
        t = t.parentElement;
      }

      return t || document.documentElement;
    }

    function S(e, t, n, o) {
      var i = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
          a = {
        top: 0,
        left: 0
      },
          d = i ? A(e) : f(e, l(t));
      if ('viewport' === o) a = v(d, i);else {
        var p;
        'scrollParent' === o ? (p = s(r(t)), 'BODY' === p.nodeName && (p = e.ownerDocument.documentElement)) : 'window' === o ? p = e.ownerDocument.documentElement : p = o;
        var c = b(p, d, i);

        if ('HTML' === p.nodeName && !C(d)) {
          var u = _(e.ownerDocument),
              g = u.height,
              m = u.width;

          a.top += c.top - c.marginTop, a.bottom = g + c.top, a.left += c.left - c.marginLeft, a.right = m + c.left;
        } else a = c;
      }
      n = n || 0;
      var h = 'number' == typeof n;
      return a.left += h ? n : n.left || 0, a.top += h ? n : n.top || 0, a.right -= h ? n : n.right || 0, a.bottom -= h ? n : n.bottom || 0, a;
    }

    function D(e) {
      var t = e.width,
          n = e.height;
      return t * n;
    }

    function N(e, t, n, o, i) {
      var a = 5 < arguments.length && arguments[5] !== void 0 ? arguments[5] : 0;
      if (-1 === e.indexOf('auto')) return e;
      var r = S(n, o, a, i),
          s = {
        top: {
          width: r.width,
          height: t.top - r.top
        },
        right: {
          width: r.right - t.right,
          height: r.height
        },
        bottom: {
          width: r.width,
          height: r.bottom - t.bottom
        },
        left: {
          width: t.left - r.left,
          height: r.height
        }
      },
          l = Object.keys(s).map(function (e) {
        return fe({
          key: e
        }, s[e], {
          area: D(s[e])
        });
      }).sort(function (e, t) {
        return t.area - e.area;
      }),
          d = l.filter(function (e) {
        var t = e.width,
            o = e.height;
        return t >= n.clientWidth && o >= n.clientHeight;
      }),
          p = 0 < d.length ? d[0].key : l[0].key,
          c = e.split('-')[1];
      return p + (c ? '-' + c : '');
    }

    function x(e, t, n) {
      var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null,
          i = o ? A(t) : f(t, l(n));
      return b(n, i, o);
    }

    function I(e) {
      var t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e),
          o = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
          i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
          a = {
        width: e.offsetWidth + i,
        height: e.offsetHeight + o
      };
      return a;
    }

    function O(e) {
      var t = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }

    function w(e, t, n) {
      n = n.split('-')[0];
      var o = I(e),
          i = {
        width: o.width,
        height: o.height
      },
          a = -1 !== ['right', 'left'].indexOf(n),
          r = a ? 'top' : 'left',
          s = a ? 'left' : 'top',
          l = a ? 'height' : 'width',
          d = a ? 'width' : 'height';
      return i[r] = t[r] + t[l] / 2 - o[l] / 2, i[s] = n === s ? t[s] - o[d] : t[O(s)], i;
    }

    function L(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }

    function k(e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var o = L(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(o);
    }

    function P(e, t, o) {
      var i = void 0 === o ? e : e.slice(0, k(e, 'name', o));
      return i.forEach(function (e) {
        e['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var o = e['function'] || e.fn;
        e.enabled && n(o) && (t.offsets.popper = E(t.offsets.popper), t.offsets.reference = E(t.offsets.reference), t = o(t, e));
      }), t;
    }

    function H() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {}
        };
        e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = N(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = w(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
      }
    }

    function M(e, t) {
      return e.some(function (e) {
        var n = e.name,
            o = e.enabled;
        return o && n === t;
      });
    }

    function R(e) {
      for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
        var i = t[o],
            a = i ? '' + i + n : e;
        if ('undefined' != typeof document.body.style[a]) return a;
      }

      return null;
    }

    function j() {
      return this.state.isDestroyed = !0, M(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[R('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }

    function W(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }

    function q(e, t, n, o) {
      var i = 'BODY' === e.nodeName,
          a = i ? e.ownerDocument.defaultView : e;
      a.addEventListener(t, n, {
        passive: !0
      }), i || q(s(a.parentNode), t, n, o), o.push(a);
    }

    function F(e, t, n, o) {
      n.updateBound = o, W(e).addEventListener('resize', n.updateBound, {
        passive: !0
      });
      var i = s(e);
      return q(i, 'scroll', n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
    }

    function U() {
      this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
    }

    function B(e, t) {
      return W(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
        e.removeEventListener('scroll', t.updateBound);
      }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }

    function V() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = B(this.reference, this.state));
    }

    function G(e) {
      return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }

    function K(e, t) {
      Object.keys(t).forEach(function (n) {
        var o = '';
        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && G(t[n]) && (o = 'px'), e.style[n] = t[n] + o;
      });
    }

    function Q(e, t) {
      Object.keys(t).forEach(function (n) {
        var o = t[n];
        !1 === o ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
      });
    }

    function X(e, t) {
      var n = e.offsets,
          i = n.popper,
          a = n.reference,
          r = o,
          s = function s(e) {
        return e;
      },
          l = r(a.width),
          d = r(i.width),
          p = -1 !== ['left', 'right'].indexOf(e.placement),
          c = -1 !== e.placement.indexOf('-'),
          u = t ? p || c || l % 2 == d % 2 ? r : oe : s,
          f = t ? r : s;

      return {
        left: u(1 == l % 2 && 1 == d % 2 && !c && t ? i.left - 1 : i.left),
        top: f(i.top),
        bottom: f(i.bottom),
        right: u(i.right)
      };
    }

    function Y(e, t, n) {
      var o = L(e, function (e) {
        var n = e.name;
        return n === t;
      }),
          i = !!o && e.some(function (e) {
        return e.name === n && e.enabled && e.order < o.order;
      });

      if (!i) {
        var a = '`' + t + '`';
        console.warn('`' + n + '`' + ' modifier is required by ' + a + ' modifier in order to work, be sure to include it before ' + a + '!');
      }

      return i;
    }

    function z(e) {
      if ('end' === e) return 'start';
      return 'start' === e ? 'end' : e;
    }

    function J(e) {
      var t = !!(1 < arguments.length && arguments[1] !== void 0) && arguments[1],
          n = he.indexOf(e),
          o = he.slice(n + 1).concat(he.slice(0, n));
      return t ? o.reverse() : o;
    }

    function Z(e, t, n, o) {
      var a = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
          r = +a[1],
          s = a[2];
      if (!r) return e;

      if (0 === s.indexOf('%')) {
        var l;

        switch (s) {
          case '%p':
            l = n;
            break;

          case '%':
          case '%r':
          default:
            l = o;
        }

        var d = E(l);
        return d[t] / 100 * r;
      }

      if ('vh' === s || 'vw' === s) {
        var p;
        return p = 'vh' === s ? i(document.documentElement.clientHeight, window.innerHeight || 0) : i(document.documentElement.clientWidth, window.innerWidth || 0), p / 100 * r;
      }

      return r;
    }

    function ee(e, t, n, o) {
      var i = [0, 0],
          a = -1 !== ['right', 'left'].indexOf(o),
          r = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
          s = r.indexOf(L(r, function (e) {
        return -1 !== e.search(/,|\s/);
      }));
      r[s] && -1 === r[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
      var l = /\s*,\s*|\s+/,
          d = -1 === s ? [r] : [r.slice(0, s).concat([r[s].split(l)[0]]), [r[s].split(l)[1]].concat(r.slice(s + 1))];
      return d = d.map(function (e, o) {
        var i = (1 === o ? !a : a) ? 'height' : 'width',
            r = !1;
        return e.reduce(function (e, t) {
          return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, r = !0, e) : r ? (e[e.length - 1] += t, r = !1, e) : e.concat(t);
        }, []).map(function (e) {
          return Z(e, i, t, n);
        });
      }), d.forEach(function (e, t) {
        e.forEach(function (n, o) {
          G(n) && (i[t] += n * ('-' === e[o - 1] ? -1 : 1));
        });
      }), i;
    }

    function te(e, t) {
      var n = t.offset,
          o = e.placement,
          i = e.offsets,
          a = i.popper,
          r = i.reference,
          s = o.split('-')[0],
          l = void 0;
      return l = G(+n) ? [+n, 0] : ee(n, a, r, s), 'left' === s ? (a.top += l[0], a.left -= l[1]) : 'right' === s ? (a.top += l[0], a.left += l[1]) : 'top' === s ? (a.left += l[0], a.top -= l[1]) : 'bottom' === s && (a.left += l[0], a.top += l[1]), e.popper = a, e;
    }

    var ne = Math.min,
        oe = Math.floor,
        ie = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
        ae = function () {
      for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1) {
        if (ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
      }

      return 0;
    }(),
        re = ie && window.Promise,
        se = re ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e();
        }));
      };
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e();
        }, ae));
      };
    },
        le = ie && !!(window.MSInputMethodContext && document.documentMode),
        de = ie && /MSIE 10/.test(navigator.userAgent),
        pe = function pe(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
        ce = function () {
      function e(e, t) {
        for (var n = 0, o; n < t.length; n++) {
          o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        ue = function ue(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    },
        fe = Object.assign || function (e) {
      for (var t = 1, n; t < arguments.length; t++) {
        for (var o in n = arguments[t], n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    },
        ge = ie && /Firefox/i.test(navigator.userAgent),
        me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        he = me.slice(3),
        ye = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
        _e = function () {
      function e(t, o) {
        var i = this,
            a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        pe(this, e), this.scheduleUpdate = function () {
          return requestAnimationFrame(i.update);
        }, this.update = se(this.update.bind(this)), this.options = fe({}, e.Defaults, a), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = t && t.jquery ? t[0] : t, this.popper = o && o.jquery ? o[0] : o, this.options.modifiers = {}, Object.keys(fe({}, e.Defaults.modifiers, a.modifiers)).forEach(function (t) {
          i.options.modifiers[t] = fe({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return fe({
            name: e
          }, i.options.modifiers[e]);
        }).sort(function (e, t) {
          return e.order - t.order;
        }), this.modifiers.forEach(function (e) {
          e.enabled && n(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r;
      }

      return ce(e, [{
        key: 'update',
        value: function value() {
          return H.call(this);
        }
      }, {
        key: 'destroy',
        value: function value() {
          return j.call(this);
        }
      }, {
        key: 'enableEventListeners',
        value: function value() {
          return U.call(this);
        }
      }, {
        key: 'disableEventListeners',
        value: function value() {
          return V.call(this);
        }
      }]), e;
    }();
    /**!
    * @fileOverview Kickass library to create and place poppers near their reference elements.
    * @version 1.16.0
    * @license
    * Copyright (c) 2016 Federico Zivolo and contributors
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in all
    * copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    * SOFTWARE.
    */


    _e.Utils = ('undefined' == typeof window ? e : window).PopperUtils, _e.placements = me, _e.Defaults = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function onCreate() {},
      onUpdate: function onUpdate() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function fn(e) {
            var t = e.placement,
                n = t.split('-')[0],
                o = t.split('-')[1];

            if (o) {
              var i = e.offsets,
                  a = i.reference,
                  r = i.popper,
                  s = -1 !== ['bottom', 'top'].indexOf(n),
                  l = s ? 'left' : 'top',
                  d = s ? 'width' : 'height',
                  p = {
                start: ue({}, l, a[l]),
                end: ue({}, l, a[l] + a[d] - r[d])
              };
              e.offsets.popper = fe({}, r, p[o]);
            }

            return e;
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: te,
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function fn(e, t) {
            var n = t.boundariesElement || p(e.instance.popper);
            e.instance.reference === n && (n = p(n));
            var o = R('transform'),
                a = e.instance.popper.style,
                r = a.top,
                s = a.left,
                l = a[o];
            a.top = '', a.left = '', a[o] = '';
            var d = S(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
            a.top = r, a.left = s, a[o] = l, t.boundaries = d;
            var c = t.priority,
                u = e.offsets.popper,
                f = {
              primary: function primary(e) {
                var n = u[e];
                return u[e] < d[e] && !t.escapeWithReference && (n = i(u[e], d[e])), ue({}, e, n);
              },
              secondary: function secondary(e) {
                var n = 'right' === e ? 'left' : 'top',
                    o = u[n];
                return u[e] > d[e] && !t.escapeWithReference && (o = ne(u[n], d[e] - ('right' === e ? u.width : u.height))), ue({}, n, o);
              }
            };
            return c.forEach(function (e) {
              var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
              u = fe({}, u, f[t](e));
            }), e.offsets.popper = u, e;
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent'
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function fn(e) {
            var t = e.offsets,
                n = t.popper,
                o = t.reference,
                i = e.placement.split('-')[0],
                a = oe,
                r = -1 !== ['top', 'bottom'].indexOf(i),
                s = r ? 'right' : 'bottom',
                l = r ? 'left' : 'top',
                d = r ? 'width' : 'height';
            return n[s] < a(o[l]) && (e.offsets.popper[l] = a(o[l]) - n[d]), n[l] > a(o[s]) && (e.offsets.popper[l] = a(o[s])), e;
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function fn(e, t) {
            var n;
            if (!Y(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
            var r = t.element;

            if ('string' == typeof r) {
              if (r = e.instance.popper.querySelector(r), !r) return e;
            } else if (!e.instance.popper.contains(r)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

            var s = e.placement.split('-')[0],
                l = e.offsets,
                d = l.popper,
                p = l.reference,
                c = -1 !== ['left', 'right'].indexOf(s),
                u = c ? 'height' : 'width',
                f = c ? 'Top' : 'Left',
                g = f.toLowerCase(),
                m = c ? 'left' : 'top',
                h = c ? 'bottom' : 'right',
                y = I(r)[u];
            p[h] - y < d[g] && (e.offsets.popper[g] -= d[g] - (p[h] - y)), p[g] + y > d[h] && (e.offsets.popper[g] += p[g] + y - d[h]), e.offsets.popper = E(e.offsets.popper);

            var _ = p[g] + p[u] / 2 - y / 2,
                T = a(e.instance.popper),
                b = parseFloat(T['margin' + f], 10),
                v = parseFloat(T['border' + f + 'Width'], 10),
                C = _ - e.offsets.popper[g] - b - v;

            return C = i(ne(d[u] - y, C), 0), e.arrowElement = r, e.offsets.arrow = (n = {}, ue(n, g, o(C)), ue(n, m, ''), n), e;
          },
          element: '[x-arrow]'
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function fn(e, t) {
            if (M(e.instance.modifiers, 'inner')) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                o = e.placement.split('-')[0],
                i = O(o),
                a = e.placement.split('-')[1] || '',
                r = [];

            switch (t.behavior) {
              case ye.FLIP:
                r = [o, i];
                break;

              case ye.CLOCKWISE:
                r = J(o);
                break;

              case ye.COUNTERCLOCKWISE:
                r = J(o, !0);
                break;

              default:
                r = t.behavior;
            }

            return r.forEach(function (s, l) {
              if (o !== s || r.length === l + 1) return e;
              o = e.placement.split('-')[0], i = O(o);

              var d = e.offsets.popper,
                  p = e.offsets.reference,
                  c = oe,
                  u = 'left' === o && c(d.right) > c(p.left) || 'right' === o && c(d.left) < c(p.right) || 'top' === o && c(d.bottom) > c(p.top) || 'bottom' === o && c(d.top) < c(p.bottom),
                  f = c(d.left) < c(n.left),
                  g = c(d.right) > c(n.right),
                  m = c(d.top) < c(n.top),
                  h = c(d.bottom) > c(n.bottom),
                  y = 'left' === o && f || 'right' === o && g || 'top' === o && m || 'bottom' === o && h,
                  _ = -1 !== ['top', 'bottom'].indexOf(o),
                  E = !!t.flipVariations && (_ && 'start' === a && f || _ && 'end' === a && g || !_ && 'start' === a && m || !_ && 'end' === a && h),
                  T = !!t.flipVariationsByContent && (_ && 'start' === a && g || _ && 'end' === a && f || !_ && 'start' === a && h || !_ && 'end' === a && m),
                  b = E || T;

              (u || y || b) && (e.flipped = !0, (u || y) && (o = r[l + 1]), b && (a = z(a)), e.placement = o + (a ? '-' + a : ''), e.offsets.popper = fe({}, e.offsets.popper, w(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
            }), e;
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function fn(e) {
            var t = e.placement,
                n = t.split('-')[0],
                o = e.offsets,
                i = o.popper,
                a = o.reference,
                r = -1 !== ['left', 'right'].indexOf(n),
                s = -1 === ['top', 'left'].indexOf(n);
            return i[r ? 'left' : 'top'] = a[n] - (s ? i[r ? 'width' : 'height'] : 0), e.placement = O(t), e.offsets.popper = E(i), e;
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function fn(e) {
            if (!Y(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
            var t = e.offsets.reference,
                n = L(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name;
            }).boundaries;

            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
              if (!0 === e.hide) return e;
              e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
            } else {
              if (!1 === e.hide) return e;
              e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
            }

            return e;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function fn(e, t) {
            var n = t.x,
                o = t.y,
                i = e.offsets.popper,
                a = L(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name;
            }).gpuAcceleration;
            void 0 !== a && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
            var r = void 0 === a ? t.gpuAcceleration : a,
                s = p(e.instance.popper),
                l = T(s),
                d = {
              position: i.position
            },
                c = X(e, 2 > window.devicePixelRatio || !ge),
                u = 'bottom' === n ? 'top' : 'bottom',
                f = 'right' === o ? 'left' : 'right',
                g = R('transform'),
                m = void 0,
                h = void 0;
            if (h = 'bottom' == u ? 'HTML' === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom : c.top, m = 'right' == f ? 'HTML' === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right : c.left, r && g) d[g] = 'translate3d(' + m + 'px, ' + h + 'px, 0)', d[u] = 0, d[f] = 0, d.willChange = 'transform';else {
              var y = 'bottom' == u ? -1 : 1,
                  _ = 'right' == f ? -1 : 1;

              d[u] = h * y, d[f] = m * _, d.willChange = u + ', ' + f;
            }
            var E = {
              "x-placement": e.placement
            };
            return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, d, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e;
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right'
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function fn(e) {
            return K(e.instance.popper, e.styles), Q(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && K(e.arrowElement, e.arrowStyles), e;
          },
          onLoad: function onLoad(e, t, n, o, i) {
            var a = x(i, t, e, n.positionFixed),
                r = N(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
            return t.setAttribute('x-placement', r), K(t, {
              position: n.positionFixed ? 'fixed' : 'absolute'
            }), n;
          },
          gpuAcceleration: void 0
        }
      }
    }, t['default'] = _e;
  }.call(this, n(4));
}, function (e) {
  var t = function () {
    return this;
  }();

  try {
    t = t || new Function('return this')();
  } catch (n) {
    'object' == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (t = window);
  }

  e.exports = t;
}, function () {}, function () {
  $(document).ready(function () {
    $('.count').prop('disabled', !0), $(document).on('click', '.plus', function () {
      $('.count').val(parseInt($('.count').val()) + 1);
    }), $(document).on('click', '.minus', function () {
      $('.count').val(parseInt($('.count').val()) - 1), 0 == $('.count').val() && $('.count').val(1);
    });
  });
}]);

/***/ }),

/***/ "./resources/js/front-app.js":
/*!***********************************!*\
  !*** ./resources/js/front-app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./mijnScript */ "./resources/js/mijnScript.js");

__webpack_require__(/*! ../assets/front_assets/js/app */ "./resources/assets/front_assets/js/app.js");

/***/ }),

/***/ "./resources/js/mijnScript.js":
/*!************************************!*\
  !*** ./resources/js/mijnScript.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Paypal
paypal.Buttons({
  createOrder: function createOrder(data, actions) {
    // This function sets up the details of the transaction, including the amount and line item details.
    var totaalPrijs = document.getElementById("totaalPrijs").innerHTML;
    var firstName = document.forms["formOrders"]["first_name"].value;
    var lastName = document.forms["formOrders"]["last_name"].value;
    var email = document.forms["formOrders"]["email"].value;
    console.log(firstName);

    if (firstName) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: totaalPrijs
          }
        }]
      });
    } else {
      alert('Vul de lege verplichte velden in');
    }
  },
  onApprove: function onApprove(data, actions) {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to your buyer.
      //location.replace("http://laraveleind.test/");
      document.getElementById("formOrder").submit();
    });
  },
  onCancel: function onCancel(data) {
    // Show a cancel page, or return to cart
    alert('Payment cancelled');
  }
}).render('#paypal-button-container');

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/front-app.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\laraveleind\resources\js\front-app.js */"./resources/js/front-app.js");


/***/ })

/******/ });