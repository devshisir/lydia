/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/assets/webpack-entry.js","vendor-static"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/javascripts/events-map.js":
/*!**********************************************!*\
  !*** ./app/assets/javascripts/events-map.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mapboxgl = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");

var _default =
/*#__PURE__*/
function () {
  /**
   * Events Map - Partner Network
   * 
   * @param HTMLElement elem - the wrapper element for the map and search containers
   * @param Object mapData - {title: string, info: string, url: string, img_url: sting, location: int[] LAT,LNG }
   */
  function _default(elem) {
    var mapData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, _default);

    if (mapData === null || !(typeof mapData === 'array' || _typeof(mapData) === 'object')) {
      // remove map here
      throw 'A valid data object is required to initialize the events map';
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmxhc2thIiwiYSI6ImNqdTFuZWdoODAzajE0M21tODJucmJvcTIifQ.ozst-Qkv54Wv7L9uJEwTZA';
    this.elementRef = elem;
    this.map = null;
    this.mapItems = mapData;
    this.searchableItems = [];
    this.config = {
      mapElement: document.getElementById(this.elementRef.dataset.mapElement),
      searchInputElement: this.elementRef.querySelector('[data-init="events-map-search"]'),
      searchItemsContainerElement: this.elementRef.querySelector('[data-content="map-items"]'),
      mapStyleUrl: 'mapbox://styles/blaska/cju2rt2vk2hpi1fmjge79maiq',
      disableScrollZoom: true
    };
    this.initMapbox();
    this.appendMapItemMarkup();

    if (this.config.searchInputElement) {
      this.initMapItemSearch();
    }
  }

  _createClass(_default, [{
    key: "initMapbox",
    value: function initMapbox() {
      this.map = new mapboxgl.Map({
        container: this.config.mapElement,
        style: this.config.mapStyleUrl,
        center: [-77.2657704, 38.9165047],
        // DXC Headquarters - Tyson, VA - NOTE: google geo codes as LATLNG, mapbox expects LNGLAT
        zoom: 2
      }); // Additional map configuration here

      if (this.config.disableScrollZoom) {
        this.map.scrollZoom.disable();
        this.map.addControl(new mapboxgl.NavigationControl());
      }

      this.plotMapItemMarkers();
      this.fitMapToMarkerBounds();
    }
  }, {
    key: "fitMapToMarkerBounds",
    value: function fitMapToMarkerBounds() {
      var bounds = [],
          buffer = 20; // this math is WRONG but it kinda does the job

      bounds.push(this.mapItems.reduce(function (t, c) {
        return [Math.min(c.location[0], t[0]), Math.min(c.location[1], t[1])];
      }, [10e6, 10e6]).map(function (el) {
        return el -= buffer;
      }));
      bounds.push(this.mapItems.reduce(function (t, c) {
        return [Math.max(c.location[0], t[0]), Math.max(c.location[1], t[1])];
      }, [-10e6, -10e6]).map(function (el) {
        return el += buffer;
      }));
      this.map.fitBounds(bounds);
    }
  }, {
    key: "plotMapItemMarkers",
    value: function plotMapItemMarkers() {
      var _this = this;

      Array.from(this.mapItems).forEach(function (item, index) {
        var markerElement = document.createElement('div');
        markerElement.className = 'map-marker';
        markerElement.dataset.index = index;
        markerElement.addEventListener('click', function (e) {
          document.querySelectorAll('.map-marker').forEach(function (marker) {
            return marker.classList.remove('active');
          });
          this.classList.add('active');
        });

        var popupHTML = _this.getPopupHTML(item); //console.log(item.location);


        new mapboxgl.Marker(markerElement).setLngLat(item.location).setPopup(new mapboxgl.Popup({
          offset: 25
        }).setHTML(popupHTML)).addTo(_this.map);
      });
    }
  }, {
    key: "initMapItemSearch",
    value: function initMapItemSearch() {
      var searchInput = this.config.searchInputElement,
          searchableItems = this.searchableItems;
      searchInput.addEventListener('keyup', function (e) {
        var query = searchInput.value.toLowerCase();
        searchableItems.forEach(function (item) {
          //console.log(item);
          if (query.length === 0) {
            item.classList.remove('d-none');
          } else {
            if (item.dataset.searchString.indexOf(query) > -1) {
              item.classList.remove('d-none');
            } else {
              item.classList.add('d-none');
            }
          }
        });
      });
    }
  }, {
    key: "appendMapItemMarkup",
    value: function appendMapItemMarkup() {
      var _this2 = this;

      Array.from(this.mapItems).forEach(function (item, index) {
        var mapItemElement = document.createElement('div');
        mapItemElement.className = 'map-search-item';
        mapItemElement.dataset.searchString = "".concat(item.title.toLowerCase(), " ").concat(item.info.toLowerCase());
        mapItemElement.dataset.index = index;
        mapItemElement.innerHTML = _this2.getSearchItemHTML(item);
        var mapMarker = document.querySelector(".map-marker[data-index=\"".concat(index, "\"]"));
        mapItemElement.addEventListener('mouseenter', function (e) {
          mapMarker.classList.add('active');
        });
        mapItemElement.addEventListener('mouseleave', function (e) {
          mapMarker.classList.remove('active');
        });
        mapItemElement.addEventListener('click', function (e) {
          this.removeOpenPopups();
          var html = this.getPopupHTML(item);
          var popup = new mapboxgl.Popup({
            offset: 25,
            className: 'map-popup-solo'
          }).setLngLat(item.location).setHTML(html);
          this.map.flyTo({
            center: item.location
          });

          var _timeout = setTimeout(function () {
            popup.addTo(this.map);
            clearTimeout(_timeout);
          }.bind(this), 200);
        }.bind(_this2));

        _this2.config.searchItemsContainerElement.appendChild(mapItemElement);
      });
      this.searchableItems = this.config.searchItemsContainerElement.querySelectorAll('.map-search-item');
    }
  }, {
    key: "removeOpenPopups",
    value: function removeOpenPopups() {
      document.querySelectorAll('.map-popup-solo').forEach(function (popup) {
        popup.remove();
      });
    }
  }, {
    key: "getSearchItemHTML",
    value: function getSearchItemHTML(item) {
      return "<div class=\"row align-items-center\">\n            <div class=\"col-12 col-md-3 search-item-image\" style=\"background-image:url(".concat(item.img_url, ")\"></div>\n            <div class=\"col-12 col-md-9 search-item-content\">\n                <p class=\"search-item-title\"><span>").concat(item.title, "</span></p>\n                <p class=\"search-item-info\">").concat(item.info, "</p>\n                <a href=\"").concat(item.url, "\" class=\"search-item-link\">View Event Details ></a>\n            </div>\n        </div>");
    }
  }, {
    key: "getPopupHTML",
    value: function getPopupHTML(item) {
      return "<div class=\"map-popup-wrapper\">\n            <p class=\"map-popup-title\">".concat(item.title, "</p>\n            <p class=\"map-popup-info\">").concat(item.info, "</p>\n            <a href=\"").concat(item.url, "\" class=\"btn btn-dark btn-block\">View Event Details</a>\n        </div>");
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./app/assets/javascripts/main.js":
/*!****************************************!*\
  !*** ./app/assets/javascripts/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _momentum_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./momentum-scroll */ "./app/assets/javascripts/momentum-scroll.js");
/* harmony import */ var _events_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-map */ "./app/assets/javascripts/events-map.js");
var _this = undefined;

// Array Polyfills for IE11
 // @boot

;

(function (window) {
  window.addEventListener('DOMContentLoaded', function () {
    initNavbarScrollWatcher();
    bindHomeHero();
    bindStickyfill();
    bindScrollSpy();
    bindGlideCarousels();
    bindSidebarImageTracking();
  });
})(window);

window.initNavbarScrollWatcher = function () {
  var nav = document.getElementById('main-nav');
  var internalNav = document.getElementById('page-sticky-nav');
  var previousScrollTop = 0,
      previousDirection = 'up',
      isActiveAnimation = false; // Only bind navigation hider when internal nav is present

  if (internalNav) {
    document.addEventListener('scroll', function (e) {
      var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      currentScrollTop = currentScrollTop < 0 ? 0 : currentScrollTop;

      if (!isActiveAnimation) {
        if (currentScrollTop > previousScrollTop && previousDirection === 'up') {
          // down
          nav.classList.add('scroll-hide');
          previousDirection = 'down';
        } else if (currentScrollTop < previousScrollTop && previousDirection === 'down') {
          // up
          nav.classList.remove('scroll-hide');
          previousDirection = 'up';
        }

        isActiveAnimation = true;
        setTimeout(function () {
          isActiveAnimation = false;
        }, 500);
      }

      previousScrollTop = currentScrollTop === 0 ? 0 : currentScrollTop;
    });
  }
}; // @hompeage hero


window.bindHomeHero = function () {
  var nextButton = $('.home-hero .slide-navigation .next');
  var prevButton = $('.home-hero .slide-navigation .prev');
  var ctas = $('.home-hero .slide-content .btn');
  var videoHovers = $('.home-hero .slide-content .btn, .home-hero .slide-hover');
  var slideCount = $('.home-hero .slide-content').length;
  var contentWrapper = $('.home-hero .slide-content-wrapper');
  var backgroundWrapper = $('.home-hero .slide-background-wrapper');
  var hoverWrapper = $('.home-hero .slide-hover-wrapper');
  var currentSlideContent = $('.home-hero .slide-content').first();
  var currentSlideBackground = $('.home-hero .slide-background').first();
  var currentSlideHover = $('.home-hero .slide-hover').first();
  var currentIndex = currentSlideContent.data('slideIndex');
  var nextSlideContent, nextSlideBackground, nextSlideHover;
  var transitionTime = '300'; // initialize timer

  var slideTime = 1000 * 10; // 10 seconds

  var timer = new Timer(function () {
    nextSlide();
  }, slideTime);
  var circleAnimation = anime({
    targets: '.home-hero .slide-navigation .timer .status .circle',
    strokeDashoffset: [69, 0],
    easing: 'linear',
    duration: 10000,
    autoplay: false,
    loop: true
  });
  timer.restart();
  setNextDirections(); // setup next/prev

  nextButton.on('click', function () {
    timer.restart();
    nextSlide();
  });
  prevButton.on('click', function () {
    timer.restart();
    prevSlide();
  }); // setup hover pause

  videoHovers.on('mouseenter', function () {
    toggleVideo(true);
  });
  videoHovers.on('mouseout', function () {
    toggleVideo(false);
  });

  function nextSlide() {
    currentIndex++;

    if (currentIndex == slideCount) {
      currentIndex = 0;
    }

    showSlide('down');
  }

  function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = slideCount - 1;
    }

    showSlide('up');
  }

  function showSlide(direction) {
    // get next slide
    nextSlideContent = $(contentWrapper.children()[currentIndex]);
    nextSlideBackground = $(backgroundWrapper.children('.slide-background')[currentIndex]);
    nextSlideHover = $(hoverWrapper.children('.slide-hover')[currentIndex]); // transition content

    currentSlideContent.removeClass('in').addClass(direction);
    nextSlideContent.removeClass(direction == 'up' ? 'down' : 'up').addClass('in'); // transition background

    currentSlideBackground.children('.slide-background-mask').addClass('in');
    currentSlideBackground.children('.slide-background-image').removeClass('in').addClass('out');
    nextSlideBackground.children('.slide-background-mask').removeClass('in');
    nextSlideBackground.children('.slide-background-image').removeClass('out').addClass('in');
    nextSlideBackground.children('.slide-background-mask').removeClass('in');
    nextSlideBackground.children('.slide-background-image').removeClass('out').addClass('in'); // transition hover area

    currentSlideHover.removeClass('in');
    nextSlideHover.addClass('in'); // set current slides

    currentSlideContent = nextSlideContent;
    currentSlideBackground = nextSlideBackground;
    currentSlideHover = nextSlideHover; // update prev next

    setTimeout(function () {
      setNextDirections();
    }, transitionTime);
  }

  var showVideoTimeout;

  function toggleVideo(show) {
    var slideBackground = $(backgroundWrapper.children('.slide-background')[currentIndex]);

    if (!show) {
      ctas.removeClass('active');
      timer.resume();
      clearTimeout(showVideoTimeout);
      slideBackground.children('.slide-background-mask').removeClass('out');
      slideBackground.children('.slide-background-video').removeClass('in');
      slideBackground.children('.slide-background-image').removeClass('out');
    } else {
      ctas.addClass('active');
      timer.pause();
      slideBackground.children('.slide-background-mask').addClass('out');
      showVideoTimeout = setTimeout(function () {
        slideBackground.children('.slide-background-video').addClass('in');
        slideBackground.children('.slide-background-image').addClass('out');
      }, 500);
    }
  }

  function Timer(callback, delay) {
    var timerId,
        start,
        remaining = delay;
    var $this = this;

    this.pause = function () {
      circleAnimation.pause();
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
    };

    this.resume = function () {
      circleAnimation.play();
      start = new Date();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(function () {
        remaining = delay;
        $this.resume();
        callback();
      }, remaining);
    };

    this.restart = function () {
      circleAnimation.restart();
      remaining = delay;
      $this.resume();
    };
  }

  function setNextDirections() {
    contentWrapper.children().removeClass('down').removeClass('up');

    if (currentIndex == slideCount - 1) {
      $(contentWrapper.children()[currentIndex]).prev().addClass('down');
      contentWrapper.children().first().addClass('up');
    } else if (currentIndex == 0) {
      contentWrapper.children().last().addClass('down');
      $(contentWrapper.children()[currentIndex]).next().addClass('up');
    } else {
      $(contentWrapper.children()[currentIndex]).prev().addClass('down');
      $(contentWrapper.children()[currentIndex]).next().addClass('up');
    }
  }
}; // @ie11 sticky fix


window.bindStickyfill = function () {
  Stickyfill.add($('.position-sticky, .position-lg-sticky, .map-element-wrapper'));
  var scrollers = Stickyfill.add($('.scroll .content-col'));
  $.each(scrollers, function (index, scroller) {
    // This fixes multiple scrolls with the header
    if (scroller._active) {
      scroller._node.style.top = "0";
      scroller._offsetToParent.top = "0";
    }
  });
}; // @services listing scroll functionality


window.bindScrollSpy = function () {
  // @DEVNOTE: using querySelector to only get the first instance... one per page
  var element = document.querySelector('[data-spy-init="scroll"]');

  if (!element) {
    return;
  }

  var nav = document.getElementById('main-nav'),
      target = document.getElementById(element.dataset.target.slice(1)),
      height = window.innerHeight - nav.clientHeight - target.clientHeight,
      // @DEVNOTE: this is relative to a sticky nav, tweak on changes
  navScrollOffset = target.children[0].offsetLeft; // @register scrollSpy on body

  $('body').scrollspy({
    target: element.dataset.target,
    offset: height * .35
  }); // @DEVNOTE: horizontal scroll tracking on associated nav is done via attribute data-spy-follow

  if (element.dataset.spyFollow) {
    window.addNavHorizontalScroller(target, navScrollOffset);
  } // @nav-item-click


  $(target).find('a').each(function (i, el) {
    $(el).on('click', function (e) {
      e.preventDefault();
      var wrapper = document.getElementById($(el).attr('href').slice(1));
      var scrollPos = wrapper.offsetTop + 60;
      $('body, html').animate({
        scrollTop: scrollPos
      }, 500);
    });
  });
}; // @nav-horizontal-scroll


window.addNavHorizontalScroller = function (target, navScrollOffset) {
  return $(window).on('activate.bs.scrollspy', function (e) {
    $(target).stop(true);
    $(target).animate({
      scrollLeft: $(target).find('.active')[0].offsetLeft - navScrollOffset
    }, 200);
  });
}; // @video modal


window.showVideoModal = function () {
  var modalControl = $('#global-modal-video'),
      modalContent = document.getElementById('global-modal-video-content');
  modalControl.on('hidden.bs.modal', function () {
    modalContent.innerHTML = '';
  }); // @DEVNOTE: FOR DXC TEAM!  This will need to be replaced with your functionality to replace the HTML of the modal popup.

  modalContent.innerHTML = '<iframe id="global-modal-video-iframe" src="https://www.youtube.com/embed/3WT6eL2NRck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  modalControl.modal('show');
}; // @DEVNOTE: convert to API, add resize functionality


window.bindGlideCarousels = function () {
  var carousels = Array.from(document.querySelectorAll('[data-glide]'));

  if (carousels.length > 0) {
    carousels.forEach(function (carousel) {
      new Glide(carousel, {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        slideWidth: 20,
        gap: 30,
        hoverpause: true,
        autoplay: false,
        dir: document.body.dir ? document.body.dir : 'ltr',
        breakpoints: {
          992: {
            perView: 2 // gap: 16

          },
          576: {
            perView: 1 // gap: 16

          }
        }
      }).mount();
      var slides = carousel.querySelector('.glide__slides');
      slides.style.height = slides.clientHeight + 'px';
    });
  }
};

window.bindSidebarImageTracking = function () {
  var elements = document.querySelectorAll('[data-track="sidebar"]');

  if (elements.length) {
    elements.forEach(function (element) {
      var imgWrapper = element.querySelector('.sidebar-img-wrapper'),
          elStart = element.querySelector('[data-track-start="sidebar"]'),
          elStop = element.querySelector('[data-track-stop="sidebar"]'),
          elExtra = element.querySelector('[data-track-extra="sidebar"]'),
          sidebar = element.querySelector('.sidebar'),
          sidebarimg = element.querySelector('.sidebar-img');

      if (imgWrapper && elStart && elStop) {
        imgWrapper.style.paddingTop = window.getOffsetTop(elStop) - window.getOffsetTop(elStart) + 'px';
        imgWrapper.nextElementSibling.style.height = 'calc(100% - ' + (window.getOffsetTop(elStop) - window.getOffsetTop(elStart)) + 'px)';
        sidebarimg.style.height = window.getOffsetTop(elStop) - window.getOffsetTop(elStart) + 'px';

        if (element.dataset.fitMarginTop) {
          sidebar.style.marginTop = -1 * (window.getOffsetTop(elStop) - window.getOffsetTop(elStart)) - (elExtra ? elExtra.offsetHeight : 0) + 'px';
        }
      }
    });
  }
};

window.getOffsetTop = function (elem) {
  var offsetTop = 0;

  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while (elem = elem.offsetParent);

  return offsetTop;
};

window.debounce = function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = _this,
        args = func.arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}; // Partner Network - Scroll Functionality



document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.querySelectorAll('[data-scroll="momentum-pan"]')).forEach(function (elem) {
    new _momentum_scroll__WEBPACK_IMPORTED_MODULE_1__["default"](elem);
  });
}); // Partner Network - Events Map Functionality


window.eventMap = _events_map__WEBPACK_IMPORTED_MODULE_2__["default"]; // Newsroom - RSS Feed population

document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.querySelectorAll('[data-rss-feed]')).forEach(function (el) {
    var $el = $(el);
    var $articleContainer = $el.find('#article-container');
    var articleTemplate = $el.find('#article-template').html();
    $.get("https://www.fullintel.com/api/v1/rss/articles/ZW1haWw9ZHhjc3BjbEBmdWxsaW50ZWwuY29t").done(function (response) {
      $.each($(response).find('item:lt(3)'), function (key, item) {
        var $item = $(item);
        var data = {
          url: $item.find('link').text(),
          date: $item.find('pubDate').text(),
          title: $item.find('title').text(),
          content: $item.find('content\\:encoded').text()
        };
        var articleMarkup = Mustache.render(articleTemplate, data);
        $articleContainer.append(articleMarkup);
      });
    });
  });
}); // Newsroom - Twitter Feed population

document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.querySelectorAll('[data-twitter-feed]')).forEach(function (el) {
    var $el = $(el);
    var $slideContainer = $el.find('#slide-container');
    var slideTemplate = $el.find('#slide-template').html();
    var $buttonContainer = $el.find('#button-container');
    var buttonTemplate = $el.find('#button-template').html();
    var $modalContainer = $el.siblings('#twitter-modal-container');
    var modalTemplate = $el.find('#modal-template').html();
    var slideArray = new Array();
    $.get("/assets/newsroom/twitter_timeline.json").done(function (response) {
      $.each(response, function (key, item) {
        var data = {
          index: key,
          image: '',
          date: moment(new Date(item.created_at)).format('MMM D'),
          content: item.text
        };
        slideArray.push(data);
        var slideMarkup = Mustache.render(slideTemplate, data); // var $slide = $(slideMarkup);
        // $slide.find('a.glide-anchor').data('tweet', data);

        var $slide = $slideContainer.append(slideMarkup);
        var buttonMarkup = Mustache.render(buttonTemplate, data);
        $buttonContainer.append(buttonMarkup);
        var modalMarkup = Mustache.render(modalTemplate, data);
        $modalContainer.append(modalMarkup);
      });
      bindSlider();
      bindModal();
    });

    function bindSlider() {
      var slider = new Glide(el, {
        hoverpause: true,
        autoplay: 50000,
        perView: 3,
        gap: 20,
        peek: window.innerWidth * .15,
        type: 'carousel',
        breakpoints: {
          1200: {
            perView: 2
          },
          768: {
            perView: 1,
            peek: window.innerWidth * .08
          }
        }
      }); // slider.on('mount.after', function() {
      //     var slides = document.getElementById('<%= @glide_id %>').querySelector('.glide__slides');
      //     slides.style.height = slides.clientHeight + 'px';
      // });

      slider.mount();
    }

    var currentIndex = 0;

    function bindModal() {
      var slides = $slideContainer.find('li a.glide-anchor');
      slides.each(function (index, el) {
        $(this).click(function (e) {
          e.preventDefault();
          $('#twitter-modal').modal('show');
          $('#twitter-modal .tweet-nav .next').on('click', function (e) {
            e.preventDefault();
            bindModalData(currentIndex == slideArray.length - 1 ? 0 : currentIndex + 1);
          });
          $('#twitter-modal .tweet-nav .prev').on('click', function (e) {
            e.preventDefault();
            bindModalData(currentIndex == 0 ? slideArray.length - 1 : currentIndex - 1);
          });
          bindModalData(index);
        });
      });
    }

    function bindModalData(index) {
      currentIndex = index;
      $('#twitter-modal .tweet-img').attr('src', slideArray[currentIndex].image);
      $('#twitter-modal .tweet-info .date').text(slideArray[currentIndex].date);
      $('#twitter-modal .text ').html(slideArray[currentIndex].content);
    }
  });
});

/***/ }),

/***/ "./app/assets/javascripts/momentum-scroll.js":
/*!***************************************************!*\
  !*** ./app/assets/javascripts/momentum-scroll.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(elem) {
    var _this = this;

    _classCallCheck(this, _default);

    this.elemRef = elem;
    this.scrollRows = elem.querySelectorAll('.scroll-rows')[0];
    this.scrollLeft = elem.querySelectorAll('.glide__arrow--left')[0];
    this.scrollRight = elem.querySelectorAll('.glide__arrow--right')[0];
    this.cloneIndex = 0; // Factors

    this.step = -1;
    this.defaultStep = this.step;
    this.currentScroll = -1; // Container sizing
    // rect is a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
    //this.viewBox = this.elemRef.getBoundingClientRect();
    // Get Rows

    this.rows = Array.from(elem.querySelectorAll('.scroll-row'));
    this.rowItems = [];
    this.rowItemClones1 = [];
    this.rowItemClones2 = [];
    this.rows.forEach(function (row) {
      var items = Array.from(row.querySelectorAll('.scroll-item'));
      var itemsClone1 = items.map(function (a) {
        return a.cloneNode(true);
      });
      var itemsClone2 = items.map(function (a) {
        return a.cloneNode(true);
      });

      _this.rowItems.push(items);

      _this.rowItemClones1.push(itemsClone1);

      _this.rowItemClones2.push(itemsClone2);

      itemsClone1.forEach(function (item) {
        row.prepend(item);
      });
      itemsClone2.forEach(function (item) {
        row.append(item);
      });
    });
    this.itemsLength = this.rowItems[0].length; // Get All Items for Sizing

    this.items = Array.from(elem.querySelectorAll('.scroll-item')); // Child Sizing

    this.initItemSizing(); //this.scrollDistance = this.rows[0].getBoundingClientRect().right + (this.rows[0].scrollWidth - this.rows[0].getBoundingClientRect().width) + (this.itemSize / 2) - window.outerWidth;

    this.scrollLeft.addEventListener("click", function () {
      _this.manualPan('left');
    });
    this.scrollRight.addEventListener("click", function () {
      _this.manualPan('right');
    });
    this.elemRef.addEventListener("mouseover", function () {
      _this.toggleAnimation(false);
    });
    this.elemRef.addEventListener("mouseout", function () {
      _this.toggleAnimation(true);
    });
    this.toggleAnimation(true);
  }

  _createClass(_default, [{
    key: "initItemSizing",
    value: function initItemSizing() {
      var _this2 = this;

      this.itemSize = this.items[0].offsetHeight;
      this.items.forEach(function (item) {
        item.style.width = "".concat(_this2.itemSize, "px");
        item.style.flex = "0 0 ".concat(_this2.itemSize, "px");
      });
      this.rowWidth = (this.itemSize + 32) * this.itemsLength * 3;
      this.currentScroll = -(this.rowWidth / 2);
      this.scrollRows.style.transform = 'translateX(' + this.currentScroll + 'px)';
    }
  }, {
    key: "toggleAnimation",
    value: function toggleAnimation(play) {
      if (play) {
        this.isScrolling = true;
        this.elemRef.classList.remove('allow-css-animation');
        this.animationInverval = setInterval(this.handleScroll.bind(this), 18);
      } else {
        this.isScrolling = false;
        this.elemRef.classList.add('allow-css-animation');
        clearInterval(this.animationInverval);
      }
    }
  }, {
    key: "manualPan",
    value: function manualPan(direction) {
      var _this3 = this;

      if (!this.isPanning) {
        this.isPanning = true;

        if (direction == 'left') {
          this.currentScroll += this.itemSize + 32;
          this.scrollRows.style.transform = 'translateX(' + this.currentScroll + 'px)';
        } else {
          this.currentScroll -= this.itemSize + 32;
          this.scrollRows.style.transform = 'translateX(' + this.currentScroll + 'px)';
        }

        setTimeout(function () {
          _this3.checkInfiniteScroll(direction);
        }, 400);
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      this.currentScroll += this.step;
      this.scrollRows.style.transform = 'translateX(' + this.currentScroll + 'px)'; // if ((this.step == -1 && this.currentScroll <= (this.scrollDistance * -1))
      //     || (this.step == 1 && this.currentScroll > this.itemSize)) {
      //         console.log('switch direction');
      //     this.step *= -1;
      // }

      this.checkInfiniteScroll('right');
    }
  }, {
    key: "checkInfiniteScroll",
    value: function checkInfiniteScroll(direction) {
      var _this4 = this;

      if (direction == 'right' && Math.abs(this.currentScroll) > this.rowWidth * .75) {
        this.elemRef.classList.remove('allow-css-animation');

        switch (this.cloneIndex) {
          case 0:
            this.rows.forEach(function (row, index) {
              _this4.rowItemClones1[index].forEach(function (item) {
                row.append(item);
              });
            });
            this.cloneIndex = 1;
            break;

          case 1:
            this.rows.forEach(function (row, index) {
              _this4.rowItems[index].forEach(function (item) {
                row.append(item);
              });
            });
            this.cloneIndex = 2;
            break;

          case 2:
            this.rows.forEach(function (row, index) {
              _this4.rowItemClones2[index].forEach(function (item) {
                row.append(item);
              });
            });
            this.cloneIndex = 0;
            break;
        }

        this.currentScroll += this.rowWidth / 3;
        this.scrollRows.style.transform = 'translateX(' + this.currentScroll + 'px)';
        if (!this.isScrolling) setTimeout(function () {
          _this4.elemRef.classList.add('allow-css-animation');
        }, 10);
      } else if (direction == 'left' && Math.abs(this.currentScroll) < this.rowWidth * .25) {
        this.elemRef.classList.remove('allow-css-animation');

        switch (this.cloneIndex) {
          case 0:
            this.rows.forEach(function (row, index) {
              _this4.rowItemClones2[index].forEach(function (item) {
                row.prepend(item);
              });
            });
            this.cloneIndex = 1;
            break;

          case 1:
            this.rows.forEach(function (row, index) {
              _this4.rowItems[index].forEach(function (item) {
                row.prepend(item);
              });
            });
            this.cloneIndex = 2;
            break;

          case 2:
            this.rows.forEach(function (row, index) {
              _this4.rowItemClones1[index].forEach(function (item) {
                row.prepend(item);
              });
            });
            this.cloneIndex = 0;
            break;
        }

        this.currentScroll -= this.rowWidth / 3;
        this.scrollRows.style.transform = 'translateX(' + this.currentScroll + 'px)';
        if (!this.isScrolling) setTimeout(function () {
          _this4.elemRef.classList.add('allow-css-animation');
        }, 10);
      }

      this.isPanning = false;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./app/assets/stylesheets/main.scss":
/*!******************************************!*\
  !*** ./app/assets/stylesheets/main.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/webpack-entry.js":
/*!*************************************!*\
  !*** ./app/assets/webpack-entry.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./javascripts/main */ "./app/assets/javascripts/main.js");

__webpack_require__(/*! ./stylesheets/main.scss */ "./app/assets/stylesheets/main.scss");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map