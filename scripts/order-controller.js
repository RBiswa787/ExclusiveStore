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
/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/products
 * response: array of objects of all products
 * @returns a Promise of type product[]
 */
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    console.log(products);
                    return [2 /*return*/, products];
            }
        });
    });
}
/**
 * request type: GET
 * @param id represent id of product requested
 * endpoint: https://fakestoreapi.com/products/${id}
 * response: an Object of type product
 * @returns a Promise of type product
 */
function getSingleProduct(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products/".concat(id))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    product = _a.sent();
                    console.log(product);
                    return [2 /*return*/, product];
            }
        });
    });
}
/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/products/categories
 * response: an array of category strings
 * @returns a Promise of type string[]
 */
function getAllCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var response, categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products/categories")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    categories = _a.sent();
                    console.log(categories);
                    return [2 /*return*/, categories];
            }
        });
    });
}
/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/products/category/${name}
 * response: array of objects of all products
 * @param name represent category name requested
 * @returns a Promise of type product[]
 */
function getInCategory(name) {
    return __awaiter(this, void 0, void 0, function () {
        var response, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products/category/".concat(name))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    console.log(products);
                    return [2 /*return*/, products];
            }
        });
    });
}
/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/users
 * response: array of objects of type user
 * @returns a Promise of type user[]
 */
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    console.log(users);
                    return [2 /*return*/, users];
            }
        });
    });
}
/**
 * request type: GET
 * @param id represents id of user requested
 * endpoint: https://fakestoreapi.com/users/${id}
 * response: object of type user
 * @returns a Promise of type user
 */
function getSingleUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/users/".concat(id))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    user = _a.sent();
                    console.log(user);
                    return [2 /*return*/, user];
            }
        });
    });
}
/**
 * request type: POST
 * endpoint: https://fakestoreapi.com/auth/login
 * payload: {username: string, password: string}
 * response: 200 (authorised) with token | 401 (not authorised) with null token
 * @param username represents username string
 * @param password represents password string
 * @returns a Promise of type {message: string, token: string}
 */
function signIn(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var headersList, bodyContent, response, data, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headersList = {
                        "Accept": "*/*",
                        "Content-Type": "application/json"
                    };
                    bodyContent = JSON.stringify({
                        "username": username,
                        "password": password
                    });
                    return [4 /*yield*/, fetch('https://fakestoreapi.com/auth/login', {
                            method: 'POST',
                            body: bodyContent,
                            headers: headersList
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    data = _a.sent();
                    try {
                        json = JSON.parse(data);
                        console.log({ "message": "success", "token": json['token'] });
                        return [2 /*return*/, { "message": "success", "token": json['token'] }];
                    }
                    catch (err) {
                        console.log({ "message": "failure", "token": null });
                        return [2 /*return*/, { "message": "failure", "token": null }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function populateOrderWall() {
    return __awaiter(this, void 0, void 0, function () {
        var orderWall, orders;
        var _this = this;
        return __generator(this, function (_a) {
            orderWall = document.getElementById("order-wall");
            console.log(orderWall);
            orders = JSON.parse(window.localStorage.getItem("order"));
            Object.keys(orders).forEach(function (key) {
                console.log(key);
                var card = document.createElement("div");
                card.style.display = "flex";
                card.style.flexDirection = "column";
                card.style.width = "100%";
                card.style.height = "auto";
                card.style.justifyContent = "center";
                card.style.alignItems = "center";
                card.style.border = "1px solid grey";
                card.style.marginBottom = "2%";
                card.style.padding = "1%";
                var card_title = document.createElement("div");
                card_title.style.display = "flex";
                card_title.style.width = "100%";
                card_title.style.height = "auto";
                // card_title.style.border = "2px solid red";
                card.appendChild(card_title);
                // card.innerText = key;
                card_title.innerText = "Order ID: " + String(key);
                card_title.style.fontWeight = "bold";
                card_title.style.marginBottom = "1%";
                Object.keys(orders[key]).forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                    var product, card_content, image_holder, productTitle, productPrice, productQuantity;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getSingleProduct(parseInt(item))];
                            case 1:
                                product = _a.sent();
                                card_content = document.createElement("div");
                                card_content.style.display = "flex";
                                card_content.style.width = "100%";
                                card_content.style.height = "auto";
                                // card_content.style.border = "1px solid green";
                                card.append(card_content);
                                image_holder = document.createElement("img");
                                image_holder.style.width = "5em";
                                image_holder.style.aspectRatio = "1/1";
                                image_holder.style.objectFit = "contain";
                                image_holder.src = product.image;
                                card_content.append(image_holder);
                                productTitle = document.createElement("div");
                                productTitle.style.display = "flex";
                                productTitle.style.height = "5em";
                                productTitle.style.width = "25em";
                                productTitle.style.flexWrap = "wrap";
                                productTitle.style.overflow = "auto";
                                // productTitle.style.justifyContent = "center";
                                productTitle.style.alignItems = "center";
                                // productTitle.style.border = "1px solid purple";
                                productTitle.style.paddingLeft = "1%";
                                productTitle.innerText = product.title;
                                card_content.appendChild(productTitle);
                                productPrice = document.createElement("div");
                                productPrice.style.display = "flex";
                                productPrice.style.height = "5em";
                                productPrice.style.width = "7em";
                                productPrice.style.fontFamily = "Poppins";
                                productPrice.style.color = "#db4444";
                                // productPrice.style.border = "1px solid green";
                                productPrice.innerText = "$" + String(product.price);
                                productPrice.style.alignItems = "center";
                                productPrice.style.justifyContent = "center";
                                card_content.appendChild(productPrice);
                                productQuantity = document.createElement("div");
                                productQuantity.style.display = "flex";
                                productQuantity.style.height = "5em";
                                productQuantity.style.width = "7em";
                                // productQuantity.style.border = "1px solid green";
                                productQuantity.innerText = orders[key][item];
                                productQuantity.style.alignItems = "center";
                                productQuantity.style.justifyContent = "center";
                                productQuantity.style.fontFamily = "Poppins";
                                productQuantity.style.fontWeight = "bold";
                                card_content.appendChild(productQuantity);
                                return [2 /*return*/];
                        }
                    });
                }); });
                orderWall.appendChild(card);
            });
            return [2 /*return*/];
        });
    });
}
populateOrderWall();
