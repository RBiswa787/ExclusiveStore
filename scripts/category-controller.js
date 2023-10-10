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
var categories = {
    'electronics': "Electronics",
    "jewelery": "Jewelery",
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing"
};
function populateCategoryProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, productWall, title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products/category/".concat(window.localStorage.getItem("current_cat")))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    productWall = document.getElementById("product-wall");
                    title = document.getElementById("flash-text");
                    title.innerText = categories[window.localStorage.getItem("current_cat")];
                    products.forEach(function (product) {
                        var card = document.createElement("div");
                        card.className = "card card-block mx-2";
                        card.style.display = "flex";
                        card.style.height = "100%";
                        card.style.width = "15rem";
                        card.style.paddingTop = "2%";
                        card.style.marginBottom = "2%";
                        card.style.justifyContent = "space-between";
                        card.style.flexDirection = "column";
                        var img = document.createElement("img");
                        img.className = "card-img-top";
                        img.src = product.image;
                        img.style.width = "10rem";
                        img.style.height = "10rem";
                        img.style.objectFit = "contain";
                        img.style.alignSelf = "center";
                        card.appendChild(img);
                        var cardBody = document.createElement("div");
                        cardBody.className = "card-body";
                        cardBody.style.flexDirection = "column";
                        var addToCart = document.createElement("button");
                        addToCart.innerText = "Add to cart";
                        addToCart.addEventListener("click", function () {
                            location.href = "./item.html";
                        });
                        // addToCart.style.position = "absolute";
                        // addToCart.style.bottom = "0";
                        // addToCart.style.left = "0";
                        addToCart.style.border = "none";
                        addToCart.style.width = "100%";
                        addToCart.style.backgroundColor = "black";
                        addToCart.style.color = "white";
                        addToCart.style.fontFamily = "Poppins";
                        addToCart.style.margin = "0";
                        addToCart.style.display = "none";
                        card.addEventListener("mouseover", function () {
                            addToCart.style.display = "block";
                        });
                        card.addEventListener("mouseleave", function () {
                            addToCart.style.display = "none";
                        });
                        addToCart.addEventListener("click", function () {
                            window.localStorage.setItem("current_item", String(product.id));
                        });
                        cardBody.appendChild(addToCart);
                        var cardTitle = document.createElement("span");
                        cardTitle.className = "card-title";
                        cardTitle.style.fontFamily = "Inter";
                        cardTitle.style.fontWeight = "600";
                        cardTitle.innerText = product.title;
                        cardBody.appendChild(cardTitle);
                        var cardSubTitle = document.createElement("p");
                        cardSubTitle.className = "card-subtitle";
                        cardSubTitle.innerText = "$" + String(product.price);
                        cardSubTitle.style.marginTop = "2%";
                        cardSubTitle.style.fontFamily = "Poppins";
                        cardSubTitle.style.color = "#db4444";
                        var strikePrice = document.createElement("span");
                        strikePrice.innerText = "$" + String((1.25 * product.price).toFixed(2));
                        strikePrice.style.fontFamily = "Poppins";
                        strikePrice.style.color = "grey";
                        strikePrice.style.textDecoration = "line-through";
                        strikePrice.style.marginLeft = "5%";
                        cardSubTitle.appendChild(strikePrice);
                        var ratingDiv = document.createElement("p");
                        for (var i = 1; i <= 5; i++) {
                            if (i < product.rating.rate) {
                                var rate = document.createElement("span");
                                rate.style.color = "orange";
                                rate.className = "fa fa-star checked";
                                ratingDiv.appendChild(rate);
                            }
                            else {
                                var rate = document.createElement("span");
                                rate.style.color = "grey";
                                rate.className = "fa fa-star";
                                ratingDiv.appendChild(rate);
                            }
                        }
                        var count = document.createElement("span");
                        count.style.fontFamily = "Poppins";
                        count.style.color = "grey";
                        count.innerText = "(" + String(product.rating.count) + ")";
                        count.style.marginLeft = "3%";
                        ratingDiv.appendChild(count);
                        cardSubTitle.appendChild(ratingDiv);
                        cardBody.appendChild(cardSubTitle);
                        card.appendChild(cardBody);
                        productWall.appendChild(card);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
populateCategoryProducts();
