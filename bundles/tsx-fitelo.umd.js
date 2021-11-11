(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('class-validator'), require('class-transformer')) :
    typeof define === 'function' && define.amd ? define('tsx-fitelo', ['exports', 'class-validator', 'class-transformer'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["tsx-fitelo"] = {}, global.classValidator, global.classTransformer));
})(this, (function (exports, classValidator, classTransformer) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var CreateAdminDto = /** @class */ (function () {
        function CreateAdminDto(password, roleId) {
            this.password = password;
            this.roleId = roleId;
        }
        CreateAdminDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (!this.phone && !this.email)
                                return [2 /*return*/, false];
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateAdminDto;
    }());
    __decorate([
        classValidator.IsEmail(),
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "email", void 0);
    __decorate([
        classValidator.IsPhoneNumber(),
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateAdminDto.prototype, "phone", void 0);
    __decorate([
        classValidator.IsString()
    ], CreateAdminDto.prototype, "password", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "displayName", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "emergencyPhone", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "personalEmail", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "joiningDate", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "reportingManager", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "address", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "experience", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "city", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "code", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "skillSet", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateAdminDto.prototype, "specialSkill", void 0);
    __decorate([
        classValidator.IsNumber()
    ], CreateAdminDto.prototype, "roleId", void 0);

    var UpdateAdminDto = /** @class */ (function () {
        function UpdateAdminDto() {
        }
        UpdateAdminDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateAdminDto;
    }());
    __decorate([
        classValidator.IsEmail(),
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "email", void 0);
    __decorate([
        classValidator.IsPhoneNumber(),
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateAdminDto.prototype, "phone", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "photoURL", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "displayName", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "emergencyPhone", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "personalEmail", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "joiningDate", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "reportingManager", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "address", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "experience", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "city", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "code", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "skillSet", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "specialSkill", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "roleId", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "teamId", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "status", void 0);
    __decorate([
        classValidator.IsOptional()
    ], UpdateAdminDto.prototype, "reportsPinnedBy", void 0);

    var MealDto = /** @class */ (function () {
        function MealDto() {
        }
        return MealDto;
    }());
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], MealDto.prototype, "id", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], MealDto.prototype, "time", void 0);
    __decorate([
        classValidator.IsBoolean(),
        classValidator.IsOptional()
    ], MealDto.prototype, "mealTaken", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], MealDto.prototype, "mealNote", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsOptional()
    ], MealDto.prototype, "recipes", void 0);

    var CreateDailyDietDto = /** @class */ (function () {
        function CreateDailyDietDto() {
        }
        CreateDailyDietDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateDailyDietDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateDailyDietDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber()
    ], CreateDailyDietDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], CreateDailyDietDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateDailyDietDto.prototype, "status", void 0);
    __decorate([
        classValidator.ValidateNested(),
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return MealDto; })
    ], CreateDailyDietDto.prototype, "meals", void 0);

    var UpdateDailyDietDto = /** @class */ (function () {
        function UpdateDailyDietDto() {
        }
        UpdateDailyDietDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateDailyDietDto;
    }());
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateDailyDietDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateDailyDietDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], UpdateDailyDietDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateDailyDietDto.prototype, "status", void 0);
    __decorate([
        classValidator.ValidateNested(),
        classValidator.IsOptional(),
        classValidator.IsArray()
    ], UpdateDailyDietDto.prototype, "meals", void 0);

    var ExerciseDto = /** @class */ (function () {
        function ExerciseDto() {
        }
        ;
        return ExerciseDto;
    }());
    __decorate([
        classValidator.IsOptional()
    ], ExerciseDto.prototype, "id", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], ExerciseDto.prototype, "sets", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], ExerciseDto.prototype, "repsPerSet", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], ExerciseDto.prototype, "duration", void 0);
    var WorkoutDto = /** @class */ (function () {
        function WorkoutDto() {
        }
        return WorkoutDto;
    }());
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], WorkoutDto.prototype, "id", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], WorkoutDto.prototype, "time", void 0);
    __decorate([
        classValidator.IsBoolean(),
        classValidator.IsOptional()
    ], WorkoutDto.prototype, "workoutDone", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested({ each: true }),
        classValidator.IsArray(),
        classTransformer.Type(function () { return ExerciseDto; })
    ], WorkoutDto.prototype, "exercises", void 0);

    var CreateDailyWorkoutDto = /** @class */ (function () {
        function CreateDailyWorkoutDto() {
        }
        CreateDailyWorkoutDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateDailyWorkoutDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateDailyWorkoutDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber()
    ], CreateDailyWorkoutDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], CreateDailyWorkoutDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateDailyWorkoutDto.prototype, "status", void 0);
    __decorate([
        classValidator.ValidateNested(),
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return WorkoutDto; })
    ], CreateDailyWorkoutDto.prototype, "workouts", void 0);

    var UpdateDailyWorkoutDto = /** @class */ (function () {
        function UpdateDailyWorkoutDto() {
        }
        UpdateDailyWorkoutDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateDailyWorkoutDto;
    }());
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateDailyWorkoutDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateDailyWorkoutDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], UpdateDailyWorkoutDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateDailyWorkoutDto.prototype, "status", void 0);
    __decorate([
        classValidator.ValidateNested(),
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return WorkoutDto; })
    ], UpdateDailyWorkoutDto.prototype, "workouts", void 0);

    var CreateExerciseDto = /** @class */ (function () {
        function CreateExerciseDto() {
        }
        CreateExerciseDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateExerciseDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateExerciseDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateExerciseDto.prototype, "videoLink", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateExerciseDto.prototype, "thumbnail", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateExerciseDto.prototype, "duration", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], CreateExerciseDto.prototype, "caloriesBurn", void 0);

    var UpdateExerciseDto = /** @class */ (function () {
        function UpdateExerciseDto() {
        }
        UpdateExerciseDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateExerciseDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateExerciseDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateExerciseDto.prototype, "videoLink", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateExerciseDto.prototype, "thumbnail", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateExerciseDto.prototype, "duration", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], UpdateExerciseDto.prototype, "caloriesBurn", void 0);

    var CreateGroceryDto = /** @class */ (function () {
        function CreateGroceryDto(name, quantity, thumbnail, buyLink) {
            this.name = name;
            this.quantity = quantity;
            this.thumbnail = thumbnail;
            this.buyLink = buyLink;
        }
        CreateGroceryDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateGroceryDto;
    }());
    __decorate([
        classValidator.IsString()
    ], CreateGroceryDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateGroceryDto.prototype, "quantity", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateGroceryDto.prototype, "thumbnail", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateGroceryDto.prototype, "buyLink", void 0);

    var UpdateGroceryDto = /** @class */ (function () {
        function UpdateGroceryDto() {
        }
        UpdateGroceryDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateGroceryDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateGroceryDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateGroceryDto.prototype, "quantity", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateGroceryDto.prototype, "thumbnail", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateGroceryDto.prototype, "buyLink", void 0);

    var Macro = /** @class */ (function () {
        function Macro() {
        }
        return Macro;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], Macro.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], Macro.prototype, "value", void 0);

    var CreateRecipeDto = /** @class */ (function () {
        function CreateRecipeDto() {
        }
        CreateRecipeDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateRecipeDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateRecipeDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsArray()
    ], CreateRecipeDto.prototype, "conditions", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], CreateRecipeDto.prototype, "calories", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateRecipeDto.prototype, "blogLink", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classValidator.IsNumber({}, { each: true })
    ], CreateRecipeDto.prototype, "groceryIds", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classValidator.ValidateNested(),
        classTransformer.Type(function () { return Macro; })
    ], CreateRecipeDto.prototype, "macros", void 0);

    var UpdateRecipeDto = /** @class */ (function () {
        function UpdateRecipeDto() {
        }
        UpdateRecipeDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateRecipeDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateRecipeDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsArray()
    ], UpdateRecipeDto.prototype, "conditions", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateRecipeDto.prototype, "calories", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateRecipeDto.prototype, "blogLink", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classValidator.IsNumber({}, { each: true })
    ], UpdateRecipeDto.prototype, "groceryIds", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsArray(),
        classValidator.ValidateNested(),
        classTransformer.Type(function () { return Macro; })
    ], UpdateRecipeDto.prototype, "macros", void 0);

    var Permission = /** @class */ (function () {
        function Permission(name, menu, view, add, edit, remove) {
            this.name = name;
            this.menu = menu;
            this.view = view;
            this.add = add;
            this.edit = edit;
            this.delete = remove;
        }
        return Permission;
    }());
    var CreateRoleDto = /** @class */ (function () {
        function CreateRoleDto(name, permissions) {
            this.name = name;
            this.permissions = permissions;
        }
        CreateRoleDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateRoleDto;
    }());
    __decorate([
        classValidator.IsString()
    ], CreateRoleDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsArray()
    ], CreateRoleDto.prototype, "permissions", void 0);

    var UpdateRoleDto = /** @class */ (function () {
        function UpdateRoleDto() {
        }
        UpdateRoleDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateRoleDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateRoleDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsOptional()
    ], UpdateRoleDto.prototype, "permissions", void 0);

    var CreateRoutineDto = /** @class */ (function () {
        function CreateRoutineDto(date) {
            this.date = date;
        }
        CreateRoutineDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateRoutineDto;
    }());
    __decorate([
        classValidator.IsDateString()
    ], CreateRoutineDto.prototype, "date", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested({ each: true }),
        classValidator.IsArray(),
        classTransformer.Type(function () { return MealDto; })
    ], CreateRoutineDto.prototype, "meals", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested({ each: true }),
        classValidator.IsArray(),
        classTransformer.Type(function () { return WorkoutDto; })
    ], CreateRoutineDto.prototype, "workouts", void 0);

    var UpdateRoutineDto = /** @class */ (function () {
        function UpdateRoutineDto() {
        }
        UpdateRoutineDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateRoutineDto;
    }());
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested({ each: true }),
        classValidator.IsArray(),
        classTransformer.Type(function () { return MealDto; })
    ], UpdateRoutineDto.prototype, "meals", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested({ each: true }),
        classValidator.IsArray(),
        classTransformer.Type(function () { return WorkoutDto; })
    ], UpdateRoutineDto.prototype, "workouts", void 0);

    var CreateTeamDto = /** @class */ (function () {
        function CreateTeamDto(name, teamLeader, ids) {
            this.name = name;
            this.teamLeader = teamLeader;
            this.memberIds = ids;
        }
        CreateTeamDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateTeamDto;
    }());
    __decorate([
        classValidator.IsString()
    ], CreateTeamDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber()
    ], CreateTeamDto.prototype, "teamLeader", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsNumber({}, { each: true })
    ], CreateTeamDto.prototype, "memberIds", void 0);

    var UpdateTeamDto = /** @class */ (function () {
        function UpdateTeamDto() {
        }
        UpdateTeamDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateTeamDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateTeamDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateTeamDto.prototype, "teamLeader", void 0);

    var AssignedAdmins = /** @class */ (function () {
        function AssignedAdmins() {
        }
        return AssignedAdmins;
    }());
    __decorate([
        classValidator.IsString()
    ], AssignedAdmins.prototype, "dietitian", void 0);
    __decorate([
        classValidator.IsString()
    ], AssignedAdmins.prototype, "sp", void 0);
    __decorate([
        classValidator.IsString()
    ], AssignedAdmins.prototype, "rm", void 0);

    var Counselling = /** @class */ (function () {
        function Counselling() {
        }
        return Counselling;
    }());
    __decorate([
        classValidator.IsDateString()
    ], Counselling.prototype, "date", void 0);
    __decorate([
        classValidator.IsString()
    ], Counselling.prototype, "time", void 0);
    __decorate([
        classValidator.IsString()
    ], Counselling.prototype, "status", void 0);

    var CreateUserDto = /** @class */ (function () {
        function CreateUserDto(password) {
            this.password = password;
        }
        CreateUserDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (!this.phone && !this.email)
                                return [2 /*return*/, false];
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateUserDto;
    }());
    __decorate([
        classValidator.IsEmail(),
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateUserDto.prototype, "email", void 0);
    __decorate([
        classValidator.IsPhoneNumber(),
        classValidator.IsOptional(),
        classValidator.IsString()
    ], CreateUserDto.prototype, "phone", void 0);
    __decorate([
        classValidator.IsString()
    ], CreateUserDto.prototype, "password", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateUserDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateUserDto.prototype, "gender", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsDateString(),
        classValidator.IsOptional()
    ], CreateUserDto.prototype, "dob", void 0);

    var Subscription = /** @class */ (function () {
        function Subscription() {
        }
        return Subscription;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], Subscription.prototype, "planName", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], Subscription.prototype, "discount", void 0);
    __decorate([
        classValidator.IsDateString(),
        classValidator.IsOptional()
    ], Subscription.prototype, "startDate", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], Subscription.prototype, "price", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], Subscription.prototype, "extension", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsOptional()
    ], Subscription.prototype, "pause_history", void 0);
    __decorate([
        classValidator.IsNumber()
    ], Subscription.prototype, "transactionId", void 0);

    var UpdateUserDto = /** @class */ (function () {
        function UpdateUserDto() {
        }
        UpdateUserDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateUserDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsEmail(),
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "email", void 0);
    __decorate([
        classValidator.IsPhoneNumber(),
        classValidator.IsOptional(),
        classValidator.IsString()
    ], UpdateUserDto.prototype, "phone", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "photoURL", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "gender", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "dob", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "country", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "dietitianId", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "salesPersonId", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "relationManagerId", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "subscription_duration", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "subscription_status", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "subscription_endDate", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "subscription_planPauseDate", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "subscription_extensionEndDate", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested()
    ], UpdateUserDto.prototype, "subscription", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "counselling_date", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "counselling_time", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "counselling_status", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsString({ each: true }),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "followup_dt", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsString({ each: true }),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "followup_sp", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsString({ each: true }),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "followup_rm", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsString({ each: true }),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "dietDays", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsNumber({}, { each: true }),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "pinnedBy", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsNumber({}, { each: true }),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "rosterPinnedBy", void 0);
    __decorate([
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "customFields", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "age", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateUserDto.prototype, "height", void 0);

    var DailyDietDto = /** @class */ (function () {
        function DailyDietDto() {
        }
        return DailyDietDto;
    }());
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], DailyDietDto.prototype, "day", void 0);
    __decorate([
        classValidator.ValidateNested(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return MealDto; }),
        classValidator.IsOptional()
    ], DailyDietDto.prototype, "meals", void 0);

    var CreateWeeklydietDto = /** @class */ (function () {
        function CreateWeeklydietDto() {
        }
        CreateWeeklydietDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateWeeklydietDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString({ each: true }),
        classValidator.IsOptional(),
        classValidator.IsArray()
    ], CreateWeeklydietDto.prototype, "conditions", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "dietPreference", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "firstMajorFood", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "secondMajorFood", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "target", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "portionSize", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "residenceType", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], CreateWeeklydietDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklydietDto.prototype, "status", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return DailyDietDto; })
    ], CreateWeeklydietDto.prototype, "dailyDiets", void 0);

    var UpdateWeeklydietDto = /** @class */ (function () {
        function UpdateWeeklydietDto() {
        }
        UpdateWeeklydietDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateWeeklydietDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString({ each: true }),
        classValidator.IsOptional(),
        classValidator.IsArray()
    ], UpdateWeeklydietDto.prototype, "conditions", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "dietPreference", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "firstMajorFood", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "secondMajorFood", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "target", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "portionSize", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "residenceType", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], UpdateWeeklydietDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklydietDto.prototype, "status", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return DailyDietDto; })
    ], UpdateWeeklydietDto.prototype, "dailyDiets", void 0);

    var DailyWorkoutDto = /** @class */ (function () {
        function DailyWorkoutDto() {
        }
        return DailyWorkoutDto;
    }());
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], DailyWorkoutDto.prototype, "day", void 0);
    __decorate([
        classValidator.ValidateNested(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return WorkoutDto; }),
        classValidator.IsOptional()
    ], DailyWorkoutDto.prototype, "workouts", void 0);

    var CreateWeeklyworkoutDto = /** @class */ (function () {
        function CreateWeeklyworkoutDto() {
        }
        CreateWeeklyworkoutDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateWeeklyworkoutDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "bmi", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "level", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "ageGroup", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "target", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "type", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "equipment", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], CreateWeeklyworkoutDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], CreateWeeklyworkoutDto.prototype, "status", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return DailyWorkoutDto; })
    ], CreateWeeklyworkoutDto.prototype, "dailyWorkouts", void 0);

    var UpdateWeeklyworkoutDto = /** @class */ (function () {
        function UpdateWeeklyworkoutDto() {
        }
        UpdateWeeklyworkoutDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UpdateWeeklyworkoutDto;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "name", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "bmi", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "level", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "ageGroup", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "target", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "type", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "equipment", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "submittedBy", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.IsNumber()
    ], UpdateWeeklyworkoutDto.prototype, "approvedBy", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], UpdateWeeklyworkoutDto.prototype, "status", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested(),
        classValidator.IsArray(),
        classTransformer.Type(function () { return DailyWorkoutDto; })
    ], UpdateWeeklyworkoutDto.prototype, "dailyWorkouts", void 0);

    var Query = /** @class */ (function () {
        function Query(select, from, where, orderBy) {
            this.select = select;
            this.from = from;
            this.where = where;
            this.orderBy = orderBy;
        }
        Query.prototype.getCountSql = function () {
            var sql = "SELECT COUNT(*) AS value FROM " + this.from + " ";
            if (this.where)
                sql += "WHERE " + this.where + " ";
            return sql;
        };
        Query.prototype.getSql = function (limit, page) {
            var skip = (page - 1) * limit;
            var sql = "SELECT " + this.select + " FROM " + this.from + " ";
            if (this.where)
                sql += "WHERE " + this.where + " ";
            if (this.orderBy)
                sql += "ORDER BY " + this.orderBy + " ";
            sql += "LIMIT " + skip + ", " + limit;
            return sql;
        };
        return Query;
    }());
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], Query.prototype, "select", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], Query.prototype, "from", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], Query.prototype, "where", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional()
    ], Query.prototype, "orderBy", void 0);
    var Filter = /** @class */ (function () {
        function Filter(field, operator, value) {
            this.field = field;
            this.operator = operator;
            this.value = value;
        }
        return Filter;
    }());
    __decorate([
        classValidator.IsString()
    ], Filter.prototype, "field", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsIn(['IN', 'LIKE', '=', '>=', '<=', 'NOT LIKE', '!='])
    ], Filter.prototype, "operator", void 0);
    var GetResourcesDto = /** @class */ (function () {
        function GetResourcesDto() {
            this.filters = [];
            this.limit = 10;
            this.page = 1;
        }
        GetResourcesDto.prototype.toParamsDict = function () {
            var dict = {};
            if (this.fields)
                dict['fields'] = JSON.stringify(this.fields);
            if (this.sort)
                dict['sort'] = JSON.stringify(this.sort);
            if (this.filters)
                dict['filters'] = JSON.stringify(this.filters);
            if (this.sort)
                dict['sort'] = JSON.stringify(this.sort);
            if (this.page)
                dict['page'] = JSON.stringify(this.page);
            if (this.query)
                dict['query'] = JSON.stringify(this.query);
            if (this.limit)
                dict['limit'] = JSON.stringify(this.limit);
            return dict;
        };
        GetResourcesDto.prototype.fromParamsDict = function (params) {
            var fields = params.fields, sort = params.sort, filters = params.filters, limit = params.limit, page = params.page, query = params.query;
            if (fields)
                this.fields = JSON.parse(fields);
            if (sort)
                this.sort = JSON.parse(sort);
            if (filters)
                this.filters = JSON.parse(filters);
            if (limit)
                this.limit = JSON.parse(limit);
            if (page)
                this.page = JSON.parse(page);
            if (query) {
                var queryDict = JSON.parse(query);
                this.query = new Query(queryDict.select, queryDict.from, queryDict.where, queryDict.orderBy);
            }
        };
        GetResourcesDto.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errors_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, classValidator.validateOrReject(this)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            errors_1 = _a.sent();
                            console.log('Dto Validation Failed. Errors: ', errors_1);
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return GetResourcesDto;
    }());
    __decorate([
        classValidator.IsArray(),
        classValidator.IsOptional()
    ], GetResourcesDto.prototype, "fields", void 0);
    __decorate([
        classValidator.IsString(),
        classValidator.IsOptional(),
        classValidator.Matches(/^[+-].*/, {
            message: "sort must start with '+' or '-'",
            each: true,
        })
    ], GetResourcesDto.prototype, "sort", void 0);
    __decorate([
        classValidator.IsArray(),
        classValidator.IsOptional(),
        classValidator.ValidateNested(),
        classTransformer.Type(function () { return Filter; })
    ], GetResourcesDto.prototype, "filters", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], GetResourcesDto.prototype, "limit", void 0);
    __decorate([
        classValidator.IsNumber(),
        classValidator.IsOptional()
    ], GetResourcesDto.prototype, "page", void 0);
    __decorate([
        classValidator.IsOptional(),
        classValidator.ValidateNested(),
        classTransformer.Type(function () { return Query; })
    ], GetResourcesDto.prototype, "query", void 0);

    var PagingImp = /** @class */ (function () {
        function PagingImp() {
            this.limit = 10;
            this.page = 0;
            this.total = 0;
        }
        return PagingImp;
    }());
    var GetResourcesResponse = /** @class */ (function () {
        function GetResourcesResponse(data, paging, query) {
            this.data = data;
            this.paging = paging;
            this.query = query;
        }
        return GetResourcesResponse;
    }());

    /*
     * Public API Surface of tsx-models
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AssignedAdmins = AssignedAdmins;
    exports.Counselling = Counselling;
    exports.CreateAdminDto = CreateAdminDto;
    exports.CreateDailyDietDto = CreateDailyDietDto;
    exports.CreateDailyWorkoutDto = CreateDailyWorkoutDto;
    exports.CreateExerciseDto = CreateExerciseDto;
    exports.CreateGroceryDto = CreateGroceryDto;
    exports.CreateRecipeDto = CreateRecipeDto;
    exports.CreateRoleDto = CreateRoleDto;
    exports.CreateRoutineDto = CreateRoutineDto;
    exports.CreateTeamDto = CreateTeamDto;
    exports.CreateUserDto = CreateUserDto;
    exports.CreateWeeklydietDto = CreateWeeklydietDto;
    exports.CreateWeeklyworkoutDto = CreateWeeklyworkoutDto;
    exports.DailyDietDto = DailyDietDto;
    exports.DailyWorkoutDto = DailyWorkoutDto;
    exports.ExerciseDto = ExerciseDto;
    exports.Filter = Filter;
    exports.GetResourcesDto = GetResourcesDto;
    exports.GetResourcesResponse = GetResourcesResponse;
    exports.Macro = Macro;
    exports.MealDto = MealDto;
    exports.PagingImp = PagingImp;
    exports.Permission = Permission;
    exports.Query = Query;
    exports.Subscription = Subscription;
    exports.UpdateAdminDto = UpdateAdminDto;
    exports.UpdateDailyDietDto = UpdateDailyDietDto;
    exports.UpdateDailyWorkoutDto = UpdateDailyWorkoutDto;
    exports.UpdateExerciseDto = UpdateExerciseDto;
    exports.UpdateGroceryDto = UpdateGroceryDto;
    exports.UpdateRecipeDto = UpdateRecipeDto;
    exports.UpdateRoleDto = UpdateRoleDto;
    exports.UpdateRoutineDto = UpdateRoutineDto;
    exports.UpdateTeamDto = UpdateTeamDto;
    exports.UpdateUserDto = UpdateUserDto;
    exports.UpdateWeeklydietDto = UpdateWeeklydietDto;
    exports.UpdateWeeklyworkoutDto = UpdateWeeklyworkoutDto;
    exports.WorkoutDto = WorkoutDto;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tsx-fitelo.umd.js.map
