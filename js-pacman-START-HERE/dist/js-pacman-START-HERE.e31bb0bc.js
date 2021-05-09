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
})({"setup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEVEL = exports.CLASS_LIST = exports.OBJECT_TYPE = exports.DIRECTIONS = exports.CELL_SIZE = exports.GRID_SIZE = void 0;
var GRID_SIZE = 20;
exports.GRID_SIZE = GRID_SIZE;
var CELL_SIZE = 20;
exports.CELL_SIZE = CELL_SIZE;
var DIRECTIONS = {
  ArrowLeft: {
    code: 37,
    movement: -1,
    rotation: 180
  },
  ArrowUp: {
    code: 38,
    movement: -GRID_SIZE,
    rotation: 270
  },
  ArrowRight: {
    code: 39,
    movement: 1,
    rotation: 0
  },
  ArrowDown: {
    code: 40,
    movement: GRID_SIZE,
    rotation: 90
  }
};
exports.DIRECTIONS = DIRECTIONS;
var OBJECT_TYPE = {
  BLANK: 'blank',
  WALL: 'wall',
  DOT: 'dot',
  BLINKY: 'blinky',
  PINKY: 'pinky',
  INKY: 'inky',
  CLYDE: 'clyde',
  PILL: 'pill',
  PACMAN: 'pacman',
  GHOST: 'ghost',
  SCARED: 'scared',
  GHOSTLAIR: 'lair'
}; // Lookup array for classes

exports.OBJECT_TYPE = OBJECT_TYPE;
var CLASS_LIST = [OBJECT_TYPE.BLANK, OBJECT_TYPE.WALL, OBJECT_TYPE.DOT, OBJECT_TYPE.BLINKY, OBJECT_TYPE.PINKY, OBJECT_TYPE.INKY, OBJECT_TYPE.CLYDE, OBJECT_TYPE.PILL, OBJECT_TYPE.PACMAN, OBJECT_TYPE.GHOSTLAIR]; // prettier-ignore

exports.CLASS_LIST = CLASS_LIST;
var LEVEL = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 0, 0, 0, 1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
exports.LEVEL = LEVEL;
},{}],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],"node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread":"node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"GameBoard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _setup = require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameBoard = /*#__PURE__*/function () {
  function GameBoard(DOMGrid) {
    (0, _classCallCheck2.default)(this, GameBoard);
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  (0, _createClass2.default)(GameBoard, [{
    key: "showGameStatus",
    value: function showGameStatus(gameWin) {
      // Create and show game win or game over
      var div = document.createElement('div');
      div.classList.add('game-status');
      div.innerHTML = "".concat(gameWin ? 'WIN!' : 'GAME OVER!');
      this.DOMGrid.appendChild(div);
    }
  }, {
    key: "createGrid",
    value: function createGrid(level) {
      var _this = this;

      this.dotCount = 0;
      this.grid = [];
      this.DOMGrid.innerHTML = ''; // First set correct amount of columns based on Grid Size and Cell Size

      this.DOMGrid.style.cssText = "grid-template-columns: repeat(".concat(_setup.GRID_SIZE, ", ").concat(_setup.CELL_SIZE, "px);");
      level.forEach(function (square) {
        var div = document.createElement('div');
        div.classList.add('square', _setup.CLASS_LIST[square]);
        div.style.cssText = "width: ".concat(_setup.CELL_SIZE, "px; height: ").concat(_setup.CELL_SIZE, "px;");

        _this.DOMGrid.appendChild(div);

        _this.grid.push(div); // Add dots


        if (_setup.CLASS_LIST[square] === _setup.OBJECT_TYPE.DOT) _this.dotCount++;
      });
    }
  }, {
    key: "addObject",
    value: function addObject(pos, classes) {
      var _this$grid$pos$classL;

      (_this$grid$pos$classL = this.grid[pos].classList).add.apply(_this$grid$pos$classL, (0, _toConsumableArray2.default)(classes));
    }
  }, {
    key: "removeObject",
    value: function removeObject(pos, classes) {
      var _this$grid$pos$classL2;

      (_this$grid$pos$classL2 = this.grid[pos].classList).remove.apply(_this$grid$pos$classL2, (0, _toConsumableArray2.default)(classes));
    } // Can have an arrow function here cause of this binding

  }, {
    key: "objectExists",
    value: function objectExists(pos, object) {
      return this.grid[pos].classList.contains(object);
    }
  }, {
    key: "rotateDiv",
    value: function rotateDiv(pos, deg) {
      this.grid[pos].style.transform = "rotate(".concat(deg, "deg)");
    }
  }, {
    key: "moveCharacter",
    value: function moveCharacter(character) {
      if (character.shouldMove()) {
        var _character$getNextMov = character.getNextMove(this.objectExists),
            nextMovePos = _character$getNextMov.nextMovePos,
            direction = _character$getNextMov.direction;

        var _character$makeMove = character.makeMove(),
            classesToRemove = _character$makeMove.classesToRemove,
            classesToAdd = _character$makeMove.classesToAdd;

        if (character.rotation && nextMovePos !== character.pos) {
          // Rotate
          this.rotateDiv(nextMovePos, character.dir.rotation); // Rotate the previous div back

          this.rotateDiv(character.pos, 0);
        }

        this.removeObject(character.pos, classesToRemove);
        this.addObject(nextMovePos, classesToAdd);
        character.setNewPos(nextMovePos, direction);
      }
    }
  }], [{
    key: "createGameBoard",
    value: function createGameBoard(DOMGrid, level) {
      var board = new this(DOMGrid);
      board.createGrid(level);
      return board;
    }
  }]);
  return GameBoard;
}();

var _default = GameBoard;
exports.default = _default;
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","./setup":"setup.js"}],"node_modules/@babel/runtime/helpers/defineProperty.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],"Pacman.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _setup = require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pacman = /*#__PURE__*/function () {
  function Pacman(speed, startPos) {
    var _this = this;

    (0, _classCallCheck2.default)(this, Pacman);
    (0, _defineProperty2.default)(this, "handleKeyInput", function (e, objectExists) {
      var dir;

      if (e.keyCode >= 37 && e.keyCode <= 40) {
        dir = _setup.DIRECTIONS[e.key];
      } else {
        return;
      }

      var nextMovePos = _this.pos + dir.movement;
      if (objectExists(nextMovePos, _setup.OBJECT_TYPE.WALL) || objectExists(nextMovePos, _setup.OBJECT_TYPE.GHOSTLAIR)) return;
      _this.dir = dir;
    });
    this.pos = startPos;
    this.speed = speed;
    this.dir = null;
    this.timer = 0;
    this.powerPill = false;
    this.rotation = true;
  }

  (0, _createClass2.default)(Pacman, [{
    key: "shouldMove",
    value: function shouldMove() {
      if (!this.dir) return;

      if (this.timer === this.speed) {
        this.timer = 0;
        return true;
      }

      this.timer++;
    }
  }, {
    key: "getNextMove",
    value: function getNextMove(objectExists) {
      var nextMovePos = this.pos + this.dir.movement;

      if (objectExists(nextMovePos, _setup.OBJECT_TYPE.WALL) || objectExists(nextMovePos, _setup.OBJECT_TYPE.GHOSTLAIR)) {
        nextMovePos = this.pos;
      }

      return {
        nextMovePos: nextMovePos,
        direction: this.dir
      };
    }
  }, {
    key: "makeMove",
    value: function makeMove() {
      var classesToRemove = [_setup.OBJECT_TYPE.PACMAN];
      var classesToAdd = [_setup.OBJECT_TYPE.PACMAN];
      return {
        classesToRemove: classesToRemove,
        classesToAdd: classesToAdd
      };
    }
  }, {
    key: "setNewPos",
    value: function setNewPos(nextMovePos) {
      this.pos = nextMovePos;
    }
  }]);
  return Pacman;
}();

var _default = Pacman;
exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","./setup":"setup.js"}],"ghostMoves.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomMovement = randomMovement;

var _setup = require("./setup");

function randomMovement(position, direction, objectExists) {
  var dir = direction;
  var nextMovePos = position + dir.movement; //array of possible random movements

  var keys = Object.keys(_setup.DIRECTIONS);

  while (objectExists(nextMovePos, _setup.OBJECT_TYPE.WALL) || objectExists(nextMovePos, _setup.OBJECT_TYPE.GHOST)) {
    var key = keys[Math.floor(Math.random() * keys.length)];
    dir = _setup.DIRECTIONS[key];
    nextMovePos = position + dir.movement;
  }

  return {
    nextMovePos: nextMovePos,
    direction: dir
  };
}
},{"./setup":"setup.js"}],"Ghost.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _setup = require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ghost = /*#__PURE__*/function () {
  function Ghost() {
    var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var startPos = arguments.length > 1 ? arguments[1] : undefined;
    var movement = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;
    (0, _classCallCheck2.default)(this, Ghost);
    this.name = name;
    this.movement = movement;
    this.startPos = startPos;
    this.pos = startPos;
    this.dir = _setup.DIRECTIONS.ArrowRight;
    this.speed = speed;
    this.timer = 0;
    this.isScared = false;
    this.rotation = false;
  }

  (0, _createClass2.default)(Ghost, [{
    key: "shouldMove",
    value: function shouldMove() {
      if (this.timer === this.speed) {
        this.timer = 0;
        return true;
      }

      this.timer++;
      return false;
    }
  }, {
    key: "getNextmove",
    value: function getNextmove(objectExists) {
      var _this$movement = this.movement(this.pos, this.dir, objectExists),
          nextMovePos = _this$movement.nextMovePos,
          direction = _this$movement.direction;

      return {
        nextMovePos: nextMovePos,
        direction: direction
      };
    }
  }, {
    key: "makeMove",
    value: function makeMove() {
      var classesToRemove = [_setup.OBJECT_TYPE.GHOST, _setup.OBJECT_TYPE.SCARED, this.name];
      var classesToAdd = [_setup.OBJECT_TYPE.GHOST, this.name];
      if (this.isScared) classesToAdd = [].concat((0, _toConsumableArray2.default)(classesToAdd), [_setup.OBJECT_TYPE.SCARED]);
      return {
        classesToRemove: classesToRemove,
        classesToAdd: classesToAdd
      };
    }
  }, {
    key: "setNewPos",
    value: function setNewPos(nextMovePos, direction) {
      this.pos = nextMovePos, this.dir = direction;
    }
  }]);
  return Ghost;
}();

var _default = Ghost;
exports.default = _default;
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","./setup":"setup.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _setup = require("./setup");

var _GameBoard = _interopRequireDefault(require("./GameBoard"));

var _Pacman = _interopRequireDefault(require("./Pacman"));

var _ghostMoves = require("./ghostMoves");

var _Ghost = _interopRequireDefault(require("./Ghost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameGrid = document.querySelector('#game');
var scoreTable = document.querySelector('#score');
var startButton = document.querySelector('#start-button');
var POWER_PILL_TIME = 10000;
var GLOBAL_SPEED = 80;

var gameBoard = _GameBoard.default.createGameBoard(gameGrid, _setup.LEVEL);

var score = 0;
var timer = null;
var gameWin = false;
var powerPillActive = false;
var powerPillTimer = null;

function gameOver(pacman, grid) {
  document.removeEventListener('keydown', function (e) {
    return pacman.handleKeyInput(e, gameBoard.objectExists);
  });
  gameBoard.showGameStatus(gameWin);
  clearInterval(timer);
  startButton.classList.remove('hide');
}

function checkCollision(pacman, ghosts) {
  var collidedGhost = ghosts.find(function (ghost) {
    return pacman.pos === ghost.pos;
  });

  if (collidedGhost) {
    if (pacman.powerPill) {
      gameBoard.removeObject(collidedGhost.pos, [_setup.OBJECT_TYPE.GHOST, _setup.OBJECT_TYPE.SCARED, collidedGhost.name]);
      collidedGhost.pos = collidedGhost.startPos;
      score += 100;
    }
  } else {
    gameBoard.removeObject(pacman.pos, [_setup.OBJECT_TYPE.PACMAN]);
    gameBoard.rotateDiv(pacman.pos, 0);
    gameOver(pacman, gameGrid);
  }
}

function gameLoop(pacman, ghosts) {
  gameBoard.moveCharacter(pacman);
  checkCollision(pacman, ghosts);
  ghosts.forEach(function (ghost) {
    return gameBoard.moveCharacter(ghost);
  });
  checkCollision(pacman, ghosts); //DOTS

  if (gameBoard.objectExists(pacman.pos, _setup.OBJECT_TYPE.DOT)) {
    gameBoard.removeObject(pacman.pos, [_setup.OBJECT_TYPE.DOT]);
    gameBoard.dotCount--;
    score += 10;
  } //POWERPILL


  if (gameBoard.objectExists(pacman.pos, _setup.OBJECT_TYPE.PILL)) {
    gameBoard.removeObject(pacman.pos, [_setup.OBJECT_TYPE.PILL]);
    pacman.powerPill = true;
    score += 50;
    clearTimeout(powerPillTimer);
    powerPIllTimer = setTimeout(function () {
      return pacman.powerPill = false;
    }, POWER_PILL_TIME);
  } //Scare ghosts


  if (pacman.powerPill !== powerPillActive) {
    powerPillActive = pacman.powerPill;
    ghost.forEach(function (ghost) {
      return ghost.isScared = pacman.powerPill;
    });
  }
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  startButton.classList.add('hide');
  gameBoard.createGrid(_setup.LEVEL);
  var pacman = new _Pacman.default(2, 287);
  gameBoard.addObject(287, [_setup.OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', function (e) {
    return pacman.handleKeyInput(e, gameBoard.objectExists);
  });
  var ghosts = [new _Ghost.default(3, 188, _ghostMoves.randomMovement, _setup.OBJECT_TYPE.BLINKY), new _Ghost.default(2, 209, _ghostMoves.randomMovement, _setup.OBJECT_TYPE.PINKY), new _Ghost.default(3, 230, _ghostMoves.randomMovement, _setup.OBJECT_TYPE.INKY), new _Ghost.default(2, 251, _ghostMoves.randomMovement, _setup.OBJECT_TYPE.CLYDE)];
  timer = setInterval(function () {
    return gameLoop(pacman, ghosts, GLOBAL_SPEED);
  });
} //Start Game


startButton.addEventListener('click', startGame);
},{"./setup":"setup.js","./GameBoard":"GameBoard.js","./Pacman":"Pacman.js","./ghostMoves":"ghostMoves.js","./Ghost":"Ghost.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59823" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-pacman-START-HERE.e31bb0bc.js.map