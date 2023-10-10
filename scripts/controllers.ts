
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

let categoryIcons = {
    'electronics' : "../assets/smartphone.png",
    "jewelery": "../assets/bracelet.png",
    "men's clothing": "../assets/fashion.png",
    "women's clothing": "../assets/women-vest.png"
};

let categoryName = {
    'electronics' : "Electronics",
    "jewelery": "Jewelery",
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing"
};

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
async function getAllUsers() : Promise<user[]>  {
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



async function populateLandingCarousel() {
    var products = await getAllProducts();
    const landingCarousel = document.getElementById("flow");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card card-block mx-2";
        card.style.display = "flex";
        card.style.height = "100%";
        card.style.minWidth = "15rem";
        card.style.paddingTop = "2%";
        card.style.justifyContent = "space-between";
        card.style.flexDirection = "column";
        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = product.image;
        img.style.width = "10rem";
        img.style.height = "10rem";
        img.style.objectFit = "contain";
        img.style.alignSelf = "center";
        card.appendChild(img);
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.style.flexDirection = "column";
        const addToCart = document.createElement("button");
        addToCart.innerText = "Add to cart";
        addToCart.addEventListener("click",() => {
            location.href = "./views/item.html";
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
        card.addEventListener("mouseover",() => {
            addToCart.style.display = "block";
        });
        card.addEventListener("mouseleave",() => {
            addToCart.style.display = "none";
        });
        addToCart.addEventListener("click", () => {
            window.localStorage.setItem("current_item",String(product.id));
            window.localStorage.setItem("current_cat",String(product.category));
        });
        cardBody.appendChild(addToCart);
        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title"
        cardTitle.style.fontFamily = "Inter";
        cardTitle.style.fontWeight = "600";
        cardTitle.innerText = product.title;
        cardBody.appendChild(cardTitle);
        const cardSubTitle = document.createElement("p");
        cardSubTitle.className = "card-subtitle";
        cardSubTitle.innerText = "$" + String(product.price);
        cardSubTitle.style.marginTop = "2%";
        cardSubTitle.style.fontFamily = "Poppins";
        cardSubTitle.style.color = "#db4444";
        const strikePrice = document.createElement("span");
        strikePrice.innerText = "$" + String((1.25*product.price).toFixed(2));
        strikePrice.style.fontFamily = "Poppins";
        strikePrice.style.color = "grey";
        strikePrice.style.textDecoration = "line-through";
        strikePrice.style.marginLeft = "5%";
        cardSubTitle.appendChild(strikePrice);
        const ratingDiv = document.createElement("p");
        
        for(let i=1;i<=5;i++){
            if(i < product.rating.rate){
                const rate = document.createElement("i");
                rate.style.color = "orange";
                rate.className = "fa fa-star checked";
                ratingDiv.appendChild(rate);
            }
            else{
                const rate = document.createElement("i");
                rate.style.color = "grey";
                rate.className = "fa fa-star";
                ratingDiv.appendChild(rate);
            }
        }
        const count = document.createElement("span");
        count.style.fontFamily = "Poppins";
        count.style.color = "grey";
        count.innerText = "(" + String(product.rating.count) + ")"
        count.style.marginLeft = "3%";
        ratingDiv.appendChild(count);
        cardSubTitle.appendChild(ratingDiv);
        cardBody.appendChild(cardSubTitle);
        
        card.appendChild(cardBody);
        landingCarousel.appendChild(card);
    });
    console.log(products);
  }

  async function populateLandingCategories() {
    var categories = await getAllCategories();
    const landingCategoryCarousel = document.getElementById("flow-category");
    categories.forEach(category => {
        const link = document.createElement("a");
        link.href = "./views/category.html";
        link.style.textDecoration = "none";
        link.style.color = "black";
        const card = document.createElement("div");
        card.addEventListener("click",() => {
            // console.log(category);
            window.localStorage.setItem("current_cat",category);
        });
        card.className = "card card-block mx-2";
        card.style.display = "flex";
        card.style.height = "100%";
        card.style.minWidth = "15rem";
        card.style.paddingTop = "5%";
        card.style.justifyContent = "space-between";
        card.style.flexDirection = "column";
        // card.innerText = category;
        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = categoryIcons[category];
        img.style.width = "5rem";
        img.style.height = "5rem";
        img.style.objectFit = "contain";
        img.style.alignSelf = "center";
        card.appendChild(img);
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.style.flexDirection = "column";
        cardBody.style.textAlign = "center";
        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title"
        cardTitle.style.fontFamily = "Inter";
        cardTitle.style.fontWeight = "400";
        card.style.color = "grey";
        cardTitle.innerText = categoryName[category];
        cardBody.appendChild(cardTitle);
        link.appendChild(card);
        link.addEventListener("mouseover",()=>{
            card.style.border = "1px solid #db4444";
            cardTitle.style.color = "#db4444";
        });
        link.addEventListener("mouseleave",()=>{
            card.style.border = "1px solid lightgrey";
            cardTitle.style.color = "grey";
        });
        card.appendChild(cardBody);
        landingCategoryCarousel.appendChild(link);

    });
  }
  
  window.onload = function init(){
    //refresh cart
    console.log("init");
    if(window.localStorage.getItem("cart") === null){
        window.localStorage.setItem("cart",JSON.stringify({}));
    }
    if(window.localStorage.getItem("order") === null){
        window.localStorage.setItem("order",JSON.stringify({}));
    }
    
  }

  const top_category1 = document.getElementById("top_category1");
  top_category1.addEventListener("click",() => {
    window.localStorage.setItem("current_cat","women's clothing");
  });
  const top_category2 = document.getElementById("top_category2");
  top_category2.addEventListener("click",() => {
    window.localStorage.setItem("current_cat","men's clothing");
  });
  const top_category3 = document.getElementById("top_category3");
  top_category2.addEventListener("click",() => {
    window.localStorage.setItem("current_cat","jewelery");
  });
  const top_category4 = document.getElementById("top_category4");
  top_category4.addEventListener("click",() => {
    window.localStorage.setItem("current_cat","electronics");
  });

  populateLandingCarousel();
  populateLandingCategories();