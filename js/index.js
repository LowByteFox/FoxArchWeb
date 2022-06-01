/// <reference path="jquery/index.d.ts" />
/// <reference path="jqueryui/index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var words = ["beginner friendly", "minimal", "powerful", "customizable"];
var wait = true;
function delay(time) {
    // @ts-ignore
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
function fillOut(currentChar) {
    var _this = this;
    if (currentChar === void 0) { currentChar = 0; }
    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
        var ele;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!wait) return [3 /*break*/, 2];
                    return [4 /*yield*/, delay(4000)];
                case 1:
                    _a.sent();
                    wait = false;
                    _a.label = 2;
                case 2:
                    ele = $(".blink-text");
                    ele.text(ele.text() + words[0][currentChar]);
                    if (!(currentChar + 1 < words[0].length)) return [3 /*break*/, 3];
                    return [2 /*return*/, fillOut(currentChar + 1)];
                case 3: return [4 /*yield*/, delay(2000)];
                case 4:
                    _a.sent();
                    clearOut();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); }, 225);
}
function clearOut(currentChar) {
    var _this = this;
    if (currentChar === void 0) { currentChar = 0; }
    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
        var ele, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ele = $(".blink-text");
                    ele.text(ele.text().slice(0, words[0].length - currentChar));
                    if (!(words[0].length - currentChar === 0)) return [3 /*break*/, 2];
                    temp = words.shift();
                    words.push(temp);
                    return [4 /*yield*/, delay(500)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, fillOut()];
                case 2: return [2 /*return*/, clearOut(currentChar + 1)];
            }
        });
    }); }, 100);
}
fillOut();
function DropMenu() {
    $("#drop").slideToggle();
}
// @ts-ignore
$(window).ready(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // @ts-ignore
                disableScroll();
                $(".promo-text").css("height", "".concat($("#promo-bg").height(), "px"));
                $(".cursor").css("height", $("#promo-title").css("font-size"));
                return [4 /*yield*/, delay(4000)];
            case 1:
                _a.sent();
                // @ts-ignore
                enableScroll();
                $(".loading").fadeOut();
                return [2 /*return*/];
        }
    });
}); });
$(window).resize(function () {
    $(".promo-text").css("height", "".concat($("#promo-bg").height(), "px"));
    $(".cursor").css("height", $("#promo-title").css("font-size"));
});
function ConfigMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var configButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configButton = $("#ConfigButton > span").addClass("animate-spin");
                    if (!(configButton !== null)) return [3 /*break*/, 2];
                    configButton.addClass("animate-spin");
                    $("#configDrop").show('slide', { direction: 'down' });
                    return [4 /*yield*/, delay(500)];
                case 1:
                    _a.sent();
                    configButton.removeClass("animate-spin");
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
