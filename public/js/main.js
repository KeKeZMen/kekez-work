"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  "use strict";

  var e = /*#__PURE__*/function () {
    function e(_e, t, s, l, r, o) {
      _classCallCheck(this, e);
      this.marginBetweenElements = l, this.firstControllButtonId = r, this.elementsFromClick = o, this.carousel = document.querySelector(_e), this.firstEl = document.querySelectorAll(t)[0], this.controllButtons = document.querySelectorAll(s);
    }
    _createClass(e, [{
      key: "sliderInit",
      value: function sliderInit() {
        var _this = this;
        var _e2,
          t,
          s = !1;
        this.controllButtons.forEach(function (_e3) {
          return _e3.addEventListener("click", function () {
            var t = _this.firstEl.clientWidth + _this.marginBetweenElements;
            _this.carousel.scrollLeft += _e3.id == "".concat(_this.firstControllButtonId) ? -t * _this.elementsFromClick : t * _this.elementsFromClick;
          });
        }), this.carousel.addEventListener("mousedown", function (l) {
          s = !0, _e2 = l.pageX, t = _this.carousel.scrollLeft;
        }), this.carousel.addEventListener("mousemove", function (l) {
          if (!s) return;
          l.preventDefault(), _this.carousel.classList.add("dragging");
          var r = l.pageX - _e2;
          _this.carousel.scrollLeft = t - r;
        }), this.carousel.addEventListener("mouseup", function (_e4) {
          s = !1, _this.carousel.classList.remove("dragging");
        }), this.carousel.addEventListener("mouseleave", function (_e5) {
          s = !1, _this.carousel.classList.remove("dragging");
        });
      }
    }]);
    return e;
  }();
  new e(".tracing__carousel__line", ".tracing__carousel__line div", ".tracing__carousel button", 24, "tracingCarouselLeft", 1).sliderInit(), new e(".advertising__carousel__line", ".advertising__carousel__line__element", ".advertising__carousel__controll", 0, "advertisingCarouselLeft", 1).sliderInit(), new e(".services__carousel__line", ".services__carousel__line div", ".services__carousel__controll__button", 24, "servicesCarouselLeft", 1).sliderInit(), document.querySelectorAll(".services__carousel__controll__button").forEach(function (e) {
    e.addEventListener("click", function (e) {
      document.querySelectorAll(".services__carousel__controll__button").forEach(function (e) {
        e.classList.remove("active");
      }), e.target.classList.add("active");
    });
  });
  var t = 0;
  document.querySelector(".scrollbtn").addEventListener("click", function () {
    t <= 4878 ? t += 1e3 : t = 0, window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: t
    }), console.log(window.scrollY);
  });
})();