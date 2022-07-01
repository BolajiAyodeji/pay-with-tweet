"use strict";
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var twitter_api_sdk_1 = require("twitter-api-sdk");
var express_1 = require("express");
require("dotenv").config();
var client = new twitter_api_sdk_1.Client(process.env.BEARER_TOKEN);
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
function main() {
    var e_1, _a;
    var _b;
    return __awaiter(this, void 0, void 0, function () {
        var rules, stream, stream_1, stream_1_1, tweet, e_1_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, client.tweets.addOrDeleteRules({
                        add: [
                            { value: "cat has:media", tag: "#composablecommerce" },
                            { value: "cat has:media -grumpy", tag: "#commercelayer" },
                            { value: "meme", tag: "funny things" },
                            { value: "meme has:images" },
                        ]
                    })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, client.tweets.getRules()];
                case 2:
                    rules = _c.sent();
                    console.log(rules);
                    stream = client.tweets.searchStream({
                        "tweet.fields": ["author_id", "geo"]
                    });
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 8, 9, 14]);
                    stream_1 = __asyncValues(stream);
                    _c.label = 4;
                case 4: return [4 /*yield*/, stream_1.next()];
                case 5:
                    if (!(stream_1_1 = _c.sent(), !stream_1_1.done)) return [3 /*break*/, 7];
                    tweet = stream_1_1.value;
                    console.log((_b = tweet.data) === null || _b === void 0 ? void 0 : _b.author_id);
                    _c.label = 6;
                case 6: return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _c.trys.push([9, , 12, 13]);
                    if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1["return"]))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _a.call(stream_1)];
                case 10:
                    _c.sent();
                    _c.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    });
}
function findTweet() {
    return __awaiter(this, void 0, void 0, function () {
        var tweet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.tweets.findTweetById("20")];
                case 1:
                    tweet = _a.sent();
                    console.log(tweet.data.text);
                    return [2 /*return*/];
            }
        });
    });
}
// main();
findTweet();
