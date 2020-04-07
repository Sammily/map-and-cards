// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cards = [{
  from: "Madrid",
  to: "Stockholm",
  type: "flight",
  number: "SK455",
  seat: "3A",
  gate: "45B",
  additional: "",
  latitude: 40.4165,
  longitude: -3.7026
}, {
  from: "Apatity",
  to: "Oslo",
  type: "flight",
  number: "",
  seat: "",
  gate: "",
  additional: "",
  latitude: 67.5641,
  longitude: 33.4031
}, {
  from: "Stockholm",
  to: "New York",
  type: "flight",
  number: "SK22",
  seat: "7B",
  gate: "22",
  additional: "",
  latitude: 59.3326,
  longitude: 18.0649
}, {
  from: "Barcelona",
  to: "Madrid",
  type: "the airport bus",
  number: "",
  seat: "",
  gate: "",
  additional: "",
  latitude: 41.3888,
  longitude: 2.159
}, {
  from: "London",
  to: "Dublin",
  type: "train",
  number: "677A",
  seat: "40",
  gate: "",
  additional: "",
  //from
  latitude: 51.51,
  longitude: -0.13,
  //to
  latitude_to: 53.344,
  longitude_to: -6.2672
}, {
  from: "Oslo",
  to: "Berlin",
  type: "flight",
  number: "",
  seat: "15B",
  gate: "",
  additional: "",
  latitude: 59.9127,
  longitude: 10.7461
}, {
  from: "New York",
  to: "Apatity",
  type: "flight",
  number: "",
  seat: "17D",
  gate: "",
  additional: "",
  latitude: 40.7143,
  longitude: -74.006
}, {
  from: "Berlin",
  to: "London",
  type: "train",
  number: "78A",
  seat: "45B",
  gate: "",
  additional: "",
  //from
  latitude: 52.5244,
  longitude: 13.4105,
  //to
  latitude_to: 51.51,
  longitude_to: -0.13
}];
var _default = cards;
exports.default = _default;
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _cards = _interopRequireDefault(require("./cards.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var massLat = []; // Создание экземпляра карты

var chart = am4core.create("chartdiv", am4maps.MapChart); // Установка свойства geodata экземпляра карты

chart.geodata = am4geodata_worldLow; // Установка проекции (типа) карты - Miller

chart.projection = new am4maps.projections.Miller(); // Создание map polygon series. (Зоны карты такие как страны, представлены объектом MapPolygonSeries)

var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries()); // Установка свйства на true, загрузит данные для серии (как названия стран) из GeoJSON

polygonSeries.useGeodata = true; // Настройка серии

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266"); // Можно include или exclude полигоны.  Например удалить Antarctica - AQ. Можно писать через запятую ["PT", "ES"]
//(обозначения из https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

polygonSeries.exclude = ["AQ"]; // Добавление серии линий

var lineSeries = chart.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.strokeWidth = 4;
lineSeries.mapLines.template.stroke = am4core.color("#e03e96");
lineSeries.mapLines.template.nonScalingStroke = true;
var line = lineSeries.mapLines.create(); //самолетик

/*
// Add a map object to line
var bullet = line.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;
bullet.width = 48;
bullet.height = 48;

var plane = bullet.createChild(am4core.Sprite);
plane.scale = 0.15;
plane.horizontalCenter = "middle";
plane.verticalCenter = "middle";
plane.path =
  "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
plane.fill = am4core.color("#3e96e0");
plane.strokeOpacity = 0;

function goPlane() {
  var from = bullet.position,
    to;
  if (from == 0) {
    to = 1;
    plane.rotation = 0;
  } else {
    to = 0;
    plane.rotation = 180;
  }

  var animation = bullet.animate(
    {
      from: from,
      to: to,
      property: "position"
    },
    5000,
    am4core.ease.sinInOut
  );
  animation.events.on("animationended", goPlane);
}

goPlane();
*/
// Создание серии изображений(точки)

var imageSeries = chart.series.push(new am4maps.MapImageSeries()); // Create a circle image in image series template so it gets replicated to all new images

var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#FFFFFF");
circle.stroke = am4core.color("#e03e96");
circle.strokeWidth = 2;
circle.nonScaling = true; //circle.tooltipText = "{title}";
// Set property fields

imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude"; //Собираем в массив все места прибытия

var createMass = function createMass(items, par) {
  var mass = [];

  if (par === "to") {
    items.map(function (item) {
      return mass.push(item.to);
    });
  }

  if (par === "from") {
    items.map(function (item) {
      return mass.push(item.from);
    });
  }

  return mass;
};

var massTo = createMass(_cards.default, "to");
var massFrom = createMass(_cards.default, "from"); //Находим такой from которого нет в to - т.е. это начало пути

function diffMass(mass1, mass2) {
  return _toConsumableArray(diff(mass1, mass2));

  function diff(a, b) {
    return a.filter(function (item) {
      return b.indexOf(item) === -1;
    });
  }
}

var res = diffMass(massFrom, massTo); //console.log(res);
//Получаем индекс элемента начала пути

var indexN = massFrom.findIndex(function (zn) {
  return zn == res;
}); //console.log(indexN);
//Даем обьектам свойство позиция, по которому после отсортируем карточки в цепочку

_cards.default[indexN].position = 1; //console.log(cards);
//Присваиваем каждому обьекту свойство позиции в цепочке

var indexTek = indexN; //индекс текущего элемента, изначально равен индексу первой карточки в цепочке

var i = 2; //номер позиции, изначально 2 т.к. 1 мы уже дали первой карточке в цепочке

var k; //хранит индекс следующего элемента в цепочке

for (var j = 0; j < _cards.default.length; j++) {
  _cards.default.forEach(function (zn) {
    if (zn.from === _cards.default[indexTek].to) {
      k = _cards.default.indexOf(zn);
      return zn.position = i;
    }
  });

  i++;
  indexTek = k;
} //Сортируем карточки в цепочку


var sortStart = function sortStart(items) {
  return items.sort(function (obj1, obj2) {
    if (obj1.position < obj2.position) return -1;
    if (obj1.position > obj2.position) return 1;
    return 0;
  });
}; //Собираем карточки в массив строк


var ArrSt = function ArrSt(items) {
  var str = "";
  var result = [];
  items.map(function (item) {
    str = "".concat(item.position, ". From ").concat(item.from, ", take ").concat(item.type);

    if (item.number !== "") {
      str = str + " ".concat(item.number);
    }

    str = str + " to ".concat(item.to, ".");

    if (item.gate !== "") {
      str = str + " Gate ".concat(item.gate, ".");
    }

    if (item.seat !== "") {
      str = str + " Seat ".concat(item.seat, ".");
    } else {
      str = str + " No seat assignment.";
    }

    if (item.additional !== "") {
      str = str + " ".concat(item.additional, ".");
    }

    result.push(str);
  });
  return result;
}; ///


var createGeoDate = function createGeoDate(items) {
  var mass = [];
  items.map(function (item) {
    return mass.push({
      latitude: item.latitude,
      longitude: item.longitude
    });
  });
  mass.push({
    latitude: items[items.length - 1].latitude_to,
    longitude: items[items.length - 1].longitude_to
  });
  return mass;
};

var resultWay = ArrSt(sortStart(_cards.default));
massLat = createGeoDate(_cards.default); //рисуем линию и точки

line.multiGeoLine = [massLat];
imageSeries.data = massLat; //рисуем готовый путь в html

var way = document.getElementById("way");
way.innerHTML = resultWay.join("<br>");
},{"./cards.js":"cards.js"}],"C:/Users/Sam/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50521" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Sam/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map