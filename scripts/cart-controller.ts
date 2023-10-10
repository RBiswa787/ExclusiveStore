let Razorpay: any;

interface product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        count: number,
        rate: number
    }
    title: string;
}

interface user {
    id:1,
    email: string,
    username: string,
    password: string,
    name:{
            firstname: string,
            lastname: string
        },
    address:{
            city: string,
            street: string,
            number: number,
            zipcode: string,
            geolocation:{
                lat: string,
                long: string
            }
        },
    phone: string
}

interface auth {
    token: string
}


/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/products
 * response: array of objects of all products
 * @returns a Promise of type product[]
 */
async function getAllProducts() : Promise<product[]> {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    return products;
}

/**
 * request type: GET
 * @param id represent id of product requested
 * endpoint: https://fakestoreapi.com/products/${id}
 * response: an Object of type product
 * @returns a Promise of type product
 */
async function getSingleProduct(id: number) : Promise<product> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    console.log(product);
    return product;
}

/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/products/categories
 * response: an array of category strings
 * @returns a Promise of type string[]
 */
async function getAllCategories() : Promise<string[]> {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await response.json();
    console.log(categories);
    return categories;
}

/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/products/category/${name}
 * response: array of objects of all products
 * @param name represent category name requested
 * @returns a Promise of type product[]
 */
async function getInCategory(name: string) : Promise<product[]> { 
    const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
    const products = await response.json();
    console.log(products);
    return products;
}

/**
 * request type: GET
 * endpoint: https://fakestoreapi.com/users
 * response: array of objects of type user
 * @returns a Promise of type user[]
 */
async function getAllUsers() : Promise<user[]> {
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();
    console.log(users);
    return users;
}

/**
 * request type: GET
 * @param id represents id of user requested
 * endpoint: https://fakestoreapi.com/users/${id}
 * response: object of type user
 * @returns a Promise of type user 
 */
async function getSingleUser(id: number) : Promise<user> {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    const user = await response.json();
    console.log(user);
    return user;
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
async function signIn(username: string, password: string) {
    
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }

    let bodyContent = JSON.stringify({
        "username": username,
        "password": password
      });

    const response = await fetch('https://fakestoreapi.com/auth/login',{
        method: 'POST',
        body: bodyContent,
        headers: headersList
    });

    let data = await response.text();
    try{
        let json = JSON.parse(data);
        console.log({"message" : "success", "token": json['token']});
        return {"message" : "success", "token": json['token']};
    }
    catch(err){
        console.log({"message": "failure", "token": null});
        return {"message": "failure", "token": null};
    }
}

function updateBill(bill_val : number) {
        const tot = document.getElementById("bill-val");
        tot.innerText = "$" + String((bill_val).toFixed(2));
        const shipping = document.getElementById("del-val");
        shipping.innerText = "FREE";
        const net = document.getElementById("net-val");
        net.innerText = "$" + String((bill_val).toFixed(2));
        console.log("updated");
}

async function populateCart(){
    var cart = JSON.parse(window.localStorage.getItem("cart"));
    
    // async function getProduct(id: number){
    //     var product = await getSingleProduct(id);
    //     const tr = (table as HTMLTableElement).insertRow();
    //     const td_title = (tr as HTMLTableRowElement).insertCell();
    //     td_title.innerText = product.title;
    //     const td_price = (tr as HTMLTableRowElement).insertCell();
    //     td_price.innerText = String(product.price);
    //     const td_quantity = (tr as HTMLTableRowElement).insertCell();
    //     td_quantity.innerText = "TBD";
    //     const td_subtot = (tr as HTMLTableRowElement).insertCell();
    //     td_subtot.innerText = "TBD";
    // };
    var cart = JSON.parse(window.localStorage.getItem("cart"));
    var bill_val = 0;
    Object.keys(cart).forEach(async function getProduct(id){
        const table = document.getElementById("table");
        var product = await getSingleProduct(parseInt(id));
        const tr = (table as HTMLTableElement).insertRow();

        const item = document.createElement("div");
        item.style.display = "flex";
        item.style.height = "auto";
        item.style.width = "30rem";
        item.style.gap = "1rem";
        // item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        // item.style.border = "1px solid red";

        const imgHolder = document.createElement("img");
        imgHolder.style.display = "flex";
        imgHolder.style.height = "5rem";
        imgHolder.style.aspectRatio = "1/1";
        // imgHolder.style.border = "1px solid blue";
        imgHolder.style.objectFit = "contain";
        (imgHolder as HTMLImageElement).src = product.image;

        item.appendChild(imgHolder);
        

        const titleHolder = document.createElement("div");
        titleHolder.style.display = "flex";
        titleHolder.style.height = "5rem";
        // titleHolder.style.width = "40rem";
        // titleHolder.style.justifyContent = "center";
        titleHolder.style.alignItems = "center";
        // titleHolder.style.border = "1px solid blue";
        titleHolder.innerText = product.title;

        item.appendChild(titleHolder);

        const td_title = (tr as HTMLTableRowElement).insertCell();
        td_title.appendChild(item);
        const td_price = (tr as HTMLTableRowElement).insertCell();
        td_price.innerText = "$"+String(product.price);
        td_price.style.width = "5rem";

        const td_quantity = (tr as HTMLTableRowElement).insertCell();

        const quant_holder = document.createElement("div");
        quant_holder.style.display = "flex";
        quant_holder.style.height = "5rem";
        quant_holder.style.width = "8rem";
        quant_holder.style.justifyContent = "center";
        quant_holder.style.alignItems = "center";
        // quant_holder.style.border = "1px solid purple";

        const sub = document.createElement("button");
        sub.type = "button";
        sub.className = "btn btn-danger"
        sub.innerText = "-";
        sub.style.width = "25%";
        sub.style.aspectRatio = "1/1";
        sub.style.backgroundColor = "white";
        sub.style.color = "red";
        sub.style.borderTopRightRadius = "0";
        sub.style.borderBottomRightRadius = "0";

        const add = document.createElement("button");
        add.type = "button";
        add.className = "btn btn-danger"
        add.innerText = "+";
        add.style.width = "25%";
        add.style.aspectRatio = "1/1";
        add.style.borderTopLeftRadius = "0";
        add.style.borderBottomLeftRadius = "0";

        const countHolder = document.createElement("div");
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

       
        const td_subtot = (tr as HTMLTableRowElement).insertCell();
        td_subtot.innerText = "$"+String(product.price*cart[id]);
        td_subtot.style.display= "flex";
        td_subtot.style.height = "5em";
        td_subtot.style.justifyContent = "center";
        td_subtot.style.alignItems= "center";
        bill_val += product.price*cart[id];
        
        if(!cart.hasOwnProperty(id)){
            console.log(0);
            countHolder.innerText = String(0);
        }
        else{
            countHolder.innerText = String(cart[id]);
        }


        add.addEventListener("click",() => {
            if(!cart.hasOwnProperty(id)){
                cart[id] = 1;
                window.localStorage.setItem("cart",JSON.stringify(cart));
                cart = JSON.parse(window.localStorage.getItem("cart"));
                countHolder.innerText = String(cart[id]);
                bill_val += product.price;
            }
            else{
                cart[id] = cart[id] + 1;
                window.localStorage.setItem("cart",JSON.stringify(cart));
                cart = JSON.parse(window.localStorage.getItem("cart"));
                countHolder.innerText = String(cart[id]);
                bill_val += product.price;
            }
            td_subtot.innerText = "$"+String(product.price*cart[id]);
            updateBill(bill_val);
        });

        sub.addEventListener("click", () => {
            if(!cart.hasOwnProperty(id)){
            }
            else{
                cart[id] = cart[id] - 1;
                if(cart[id] == 0){
                    delete cart[id];
                    window.localStorage.setItem("cart",JSON.stringify(cart));
                    cart = JSON.parse(window.localStorage.getItem("cart"));
                    countHolder.innerText = String(0);
                    window.location.reload();
                }
                else{
                    window.localStorage.setItem("cart",JSON.stringify(cart));
                    cart = JSON.parse(window.localStorage.getItem("cart"));
                    countHolder.innerText = String(cart[id]);
                    td_subtot.innerText = "$"+String(product.price*cart[id]);
                    bill_val -= product.price;
                }
                updateBill(bill_val);
                
            }
        });

        updateBill(bill_val);
    });

    const checkout = document.getElementById("order");
    checkout.addEventListener("click",async ()=>{
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": "Basic cnpwX3Rlc3RfczlQTEJUT2xQaVltWXc6NndxUnVEVENQSncycFZSR0dJSlhjTE5X"
       }
       
       let bodyContent = JSON.stringify({
           "amount": bill_val,
           "currency": "INR",
           "receipt": "qwsaq1"
       });
       
       let response = await fetch("https://api.razorpay.com/v1/orders", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       window.localStorage.setItem("orderId",String(data.id));
       
});

     const pay = document.getElementById("pay");
     pay.addEventListener("click",async () => {
        console.log(bill_val);
        var options = {
            "key": "rzp_test_s9PLBTOlPiYmYw", 
            "amount": bill_val*100, 
            "currency": "INR",
            "name": "Exclusive", 
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": window.localStorage.getItem("orderid"), 
            "handler": function (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                var orders = JSON.parse(window.localStorage.getItem("order"));
                orders[response.razorpay_payment_id] = cart;
                window.localStorage.setItem("order",JSON.stringify(orders));
                cart = {};
                window.localStorage.setItem("cart",JSON.stringify(cart));
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

        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
});
         rzp1.open();
     });
}

populateCart();