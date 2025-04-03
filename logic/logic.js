//ở đây ứng viên chỉ dùng kiến thức đang có, tức là biết gì dùng đó
//có lẽ AI sẽ có các cách giải khác hiệu quả hơn, nhưng đó là ứng dụng trong công việc thực tế, không phải bài test
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
function processWithDelayV1(numbers, delay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!numbers)
                throw new Error("Không hợp lệ");
            if (!Array.isArray(numbers))
                throw new Error("Không phải array");
            if (numbers.length == 0)
                return [2 /*return*/, Promise.resolve()];
            if (numbers.some(function (el) { return !Number.isInteger(el); }))
                throw new Error("Mảng không hợp lệ");
            setTimeout(function () {
                var first = numbers.shift();
                if (!first)
                    return;
                console.log(first);
                processWithDelayV1(numbers, delay);
            }, delay);
            return [2 /*return*/];
        });
    });
}
var coreProcess = {
    pause: false,
    isCancel: false,
    rest: [],
    callback: function (value) { },
    timeout: null,
    processWithDelayV2: function (numbers, delay) {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, index, state_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!numbers)
                            throw new Error("Không hợp lệ");
                        if (!Array.isArray(numbers))
                            throw new Error("Không phải array");
                        if (numbers.length == 0)
                            return [2 /*return*/, Promise.resolve()];
                        if (numbers.some(function (el) { return !Number.isInteger(el); }))
                            throw new Error("Mảng không hợp lệ");
                        console.log(coreProcess.isCancel);
                        _loop_1 = function (index) {
                            var num, pros, result;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (coreProcess.isCancel)
                                            return [2 /*return*/, "break"];
                                        num = numbers[index];
                                        if (!Number.isInteger(num))
                                            throw new Error("Mảng không hợp lệ");
                                        if (!coreProcess.pause) return [3 /*break*/, 1];
                                        coreProcess.rest = numbers.slice(index);
                                        return [2 /*return*/, "break"];
                                    case 1:
                                        pros = new Promise(function (resolve) {
                                            coreProcess.timeout = setTimeout(function () {
                                                resolve(num);
                                            }, delay);
                                        });
                                        return [4 /*yield*/, pros];
                                    case 2:
                                        result = _c.sent();
                                        (_a = coreProcess.callback) === null || _a === void 0 ? void 0 : _a.call(coreProcess, result);
                                        _c.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        index = 0;
                        _b.label = 1;
                    case 1:
                        if (!(index < numbers.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(index)];
                    case 2:
                        state_1 = _b.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _b.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    resume: function (delay) {
        console.log(coreProcess.rest, coreProcess.callback);
        coreProcess.processWithDelayV2(coreProcess.rest, delay);
    },
    setPause: function (state) {
        console.log(state);
        coreProcess.pause = state;
    },
    cancel: function () {
        if (coreProcess.timeout) {
            coreProcess.isCancel = true;
            clearTimeout(coreProcess.timeout);
        }
    }
};
