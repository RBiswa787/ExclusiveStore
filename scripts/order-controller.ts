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

async function populateOrderWall(){
    const orderWall = document.getElementById("order-wall");
    console.log(orderWall);
    const orders = JSON.parse(window.localStorage.getItem("order"));
    Object.keys(orders).forEach((key) => {
        console.log(key);
        const card = document.createElement("div");
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.width= "100%";
        card.style.height = "auto";
        card.style.justifyContent = "center";
        card.style.alignItems = "center";
        card.style.border = "1px solid grey";
        card.style.marginBottom = "2%";
        card.style.padding = "1%";
        const card_title = document.createElement("div");
        card_title.style.display = "flex";
        card_title.style.width = "100%";
        card_title.style.height = "auto";
        // card_title.style.border = "2px solid red";
        card.appendChild(card_title);
        // card.innerText = key;
        card_title.innerText = "Order ID: " + String(key);
        card_title.style.fontWeight = "bold";
        card_title.style.marginBottom = "1%";

        Object.keys(orders[key]).forEach(async (item) => {
        
        const product = await getSingleProduct(parseInt(item));
        const card_content = document.createElement("div");
        card_content.style.display = "flex";
        card_content.style.width = "100%";
        card_content.style.height = "auto";
        // card_content.style.border = "1px solid green";
        card.append(card_content);
        const image_holder = document.createElement("img");
        image_holder.style.width = "5em";
        image_holder.style.aspectRatio = "1/1";
        image_holder.style.objectFit = "contain";
        (image_holder as HTMLImageElement).src = product.image;
        card_content.append(image_holder);

        const productTitle = document.createElement("div");
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
        const productPrice = document.createElement("div");
        productPrice.style.display =  "flex";
        productPrice.style.height = "5em";
        productPrice.style.width = "7em";
        productPrice.style.fontFamily = "Poppins";
        productPrice.style.color = "#db4444";
        // productPrice.style.border = "1px solid green";
        productPrice.innerText = "$" + String(product.price);
        productPrice.style.alignItems = "center";
        productPrice.style.justifyContent = "center";
        card_content.appendChild(productPrice);
        const productQuantity = document.createElement("div");
        productQuantity.style.display =  "flex";
        productQuantity.style.height = "5em";
        productQuantity.style.width = "7em";
        // productQuantity.style.border = "1px solid green";
        productQuantity.innerText = orders[key][item];
        productQuantity.style.alignItems = "center";
        productQuantity.style.justifyContent = "center";
        productQuantity.style.fontFamily = "Poppins";
        productQuantity.style.fontWeight = "bold";
        card_content.appendChild(productQuantity);
        })
        
         

        orderWall.appendChild(card);
    });
}

populateOrderWall();