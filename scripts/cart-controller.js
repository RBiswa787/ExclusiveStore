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
var Razorpay;
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
function updateBill(bill_val) {
    var tot = document.getElementById("bill-val");
    tot.innerText = "$" + String((bill_val).toFixed(2));
    var shipping = document.getElementById("del-val");
    shipping.innerText = "FREE";
    var net = document.getElementById("net-val");
    net.innerText = "$" + String((bill_val).toFixed(2));
    console.log("updated");
}
function populateCart() {
    return __awaiter(this, void 0, void 0, function () {
        var cart, cart, bill_val, checkout, pay;
        var _this = this;
        return __generator(this, function (_a) {
            cart = JSON.parse(window.localStorage.getItem("cart"));
            cart = JSON.parse(window.localStorage.getItem("cart"));
            bill_val = 0;
            Object.keys(cart).forEach(function getProduct(id) {
                return __awaiter(this, void 0, void 0, function () {
                    var table, product, tr, item, imgHolder, titleHolder, td_title, td_price, td_quantity, quant_holder, sub, add, countHolder, td_subtot;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                table = document.getElementById("table");
                                return [4 /*yield*/, getSingleProduct(parseInt(id))];
                            case 1:
                                product = _a.sent();
                                tr = table.insertRow();
                                item = document.createElement("div");
                                item.style.display = "flex";
                                item.style.height = "auto";
                                item.style.width = "30rem";
                                item.style.gap = "1rem";
                                // item.style.justifyContent = "space-between";
                                item.style.alignItems = "center";
                                imgHolder = document.createElement("img");
                                imgHolder.style.display = "flex";
                                imgHolder.style.height = "5rem";
                                imgHolder.style.aspectRatio = "1/1";
                                // imgHolder.style.border = "1px solid blue";
                                imgHolder.style.objectFit = "contain";
                                imgHolder.src = product.image;
                                item.appendChild(imgHolder);
                                titleHolder = document.createElement("div");
                                titleHolder.style.display = "flex";
                                titleHolder.style.height = "5rem";
                                // titleHolder.style.width = "40rem";
                                // titleHolder.style.justifyContent = "center";
                                titleHolder.style.alignItems = "center";
                                // titleHolder.style.border = "1px solid blue";
                                titleHolder.innerText = product.title;
                                item.appendChild(titleHolder);
                                td_title = tr.insertCell();
                                td_title.appendChild(item);
                                td_price = tr.insertCell();
                                td_price.innerText = "$" + String(product.price);
                                td_price.style.width = "5rem";
                                td_quantity = tr.insertCell();
                                quant_holder = document.createElement("div");
                                quant_holder.style.display = "flex";
                                quant_holder.style.height = "5rem";
                                quant_holder.style.width = "8rem";
                                quant_holder.style.justifyContent = "center";
                                quant_holder.style.alignItems = "center";
                                sub = document.createElement("button");
                                sub.type = "button";
                                sub.className = "btn btn-danger";
                                sub.innerText = "-";
                                sub.style.width = "25%";
                                sub.style.aspectRatio = "1/1";
                                sub.style.backgroundColor = "white";
                                sub.style.color = "red";
                                sub.style.borderTopRightRadius = "0";
                                sub.style.borderBottomRightRadius = "0";
                                add = document.createElement("button");
                                add.type = "button";
                                add.className = "btn btn-danger";
                                add.innerText = "+";
                                add.style.width = "25%";
                                add.style.aspectRatio = "1/1";
                                add.style.borderTopLeftRadius = "0";
                                add.style.borderBottomLeftRadius = "0";
                                countHolder = document.createElement("div");
                                countHolder.style.display = "flex";
                                countHolder.style.width = "50%";
                                countHolder.style.height = "2.5rem";
                                countHolder.style.justifyContent = "center";
                                countHolder.style.alignItems = "center";
                                // countHolder.style.border = "1px solid black";
                                quant_holder.appendChild(sub);
                                quant_holder.appendChild(countHolder);
                                quant_holder.appendChild(add);
                                td_quantity.appendChild(quant_holder);
                                td_subtot = tr.insertCell();
                                td_subtot.innerText = "$" + String(product.price * cart[id]);
                                td_subtot.style.display = "flex";
                                td_subtot.style.height = "5em";
                                td_subtot.style.justifyContent = "center";
                                td_subtot.style.alignItems = "center";
                                bill_val += product.price * cart[id];
                                if (!cart.hasOwnProperty(id)) {
                                    console.log(0);
                                    countHolder.innerText = String(0);
                                }
                                else {
                                    countHolder.innerText = String(cart[id]);
                                }
                                add.addEventListener("click", function () {
                                    if (!cart.hasOwnProperty(id)) {
                                        cart[id] = 1;
                                        window.localStorage.setItem("cart", JSON.stringify(cart));
                                        cart = JSON.parse(window.localStorage.getItem("cart"));
                                        countHolder.innerText = String(cart[id]);
                                        bill_val += product.price;
                                    }
                                    else {
                                        cart[id] = cart[id] + 1;
                                        window.localStorage.setItem("cart", JSON.stringify(cart));
                                        cart = JSON.parse(window.localStorage.getItem("cart"));
                                        countHolder.innerText = String(cart[id]);
                                        bill_val += product.price;
                                    }
                                    td_subtot.innerText = "$" + String(product.price * cart[id]);
                                    updateBill(bill_val);
                                });
                                sub.addEventListener("click", function () {
                                    if (!cart.hasOwnProperty(id)) {
                                    }
                                    else {
                                        cart[id] = cart[id] - 1;
                                        if (cart[id] == 0) {
                                            delete cart[id];
                                            window.localStorage.setItem("cart", JSON.stringify(cart));
                                            cart = JSON.parse(window.localStorage.getItem("cart"));
                                            countHolder.innerText = String(0);
                                            window.location.reload();
                                        }
                                        else {
                                            window.localStorage.setItem("cart", JSON.stringify(cart));
                                            cart = JSON.parse(window.localStorage.getItem("cart"));
                                            countHolder.innerText = String(cart[id]);
                                            td_subtot.innerText = "$" + String(product.price * cart[id]);
                                            bill_val -= product.price;
                                        }
                                        updateBill(bill_val);
                                    }
                                });
                                updateBill(bill_val);
                                return [2 /*return*/];
                        }
                    });
                });
            });
            checkout = document.getElementById("order");
            checkout.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var headersList, bodyContent, response, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            headersList = {
                                "Content-Type": "application/json",
                                "Authorization": "Basic cnpwX3Rlc3RfczlQTEJUT2xQaVltWXc6NndxUnVEVENQSncycFZSR0dJSlhjTE5X"
                            };
                            bodyContent = JSON.stringify({
                                "amount": bill_val,
                                "currency": "INR",
                                "receipt": "qwsaq1"
                            });
                            return [4 /*yield*/, fetch("https://api.razorpay.com/v1/orders", {
                                    method: "POST",
                                    body: bodyContent,
                                    headers: headersList
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            window.localStorage.setItem("orderId", String(data.id));
                            return [2 /*return*/];
                    }
                });
            }); });
            pay = document.getElementById("pay");
            pay.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var options, rzp1;
                return __generator(this, function (_a) {
                    console.log(bill_val);
                    options = {
                        "key": "rzp_test_s9PLBTOlPiYmYw",
                        "amount": bill_val * 100,
                        "currency": "INR",
                        "name": "Exclusive",
                        "description": "Test Transaction",
                        "image": "https://example.com/your_logo",
                        "order_id": window.localStorage.getItem("orderid"),
                        "handler": function (response) {
                            // alert(response.razorpay_payment_id);
                            // alert(response.razorpay_order_id);
                            // alert(response.razorpay_signature)
                            var orders = JSON.parse(window.localStorage.getItem("order"));
                            orders[response.razorpay_payment_id] = cart;
                            window.localStorage.setItem("order", JSON.stringify(orders));
                            cart = {};
                            window.localStorage.setItem("cart", JSON.stringify(cart));
                            window.location.href = "./order.html";
                            // const modal = document.querySelector("#paymentModal");
                            // modal.ariaHidden = fa;
                        },
                        "prefill": {
                            "name": "Biswadeep Ray",
                            "email": "biswadeep.ray@example.com",
                            "contact": "9000090000"
                        },
                        "notes": {
                            "address": "Razorpay Corporate Office"
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };
                    rzp1 = new Razorpay(options);
                    rzp1.on('payment.failed', function (response) {
                        // alert(response.error.code);
                        // alert(response.error.description);
                        // alert(response.error.source);
                        // alert(response.error.step);
                        // alert(response.error.reason);
                        // alert(response.error.metadata.order_id);
                        // alert(response.error.metadata.payment_id);
                    });
                    rzp1.open();
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    });
}
populateCart();
