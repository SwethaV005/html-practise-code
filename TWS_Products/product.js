let images=document.getElementById("images")


let productItemsData=[{
    id: 1001,
    name:"RALLY BOARD 65",
    price:"1000",
    img: "images/rally-board-65-graphite-01.webp"
},
{
    id: 1002,
    name: "RALLY AI CAMERA",
    price: "1000",
    img: "images/rally-ai-camera-graphite-front-01.webp"
},
{
    id: 1003,
    name: "RALLY AI CAMERA PRO",
    price: "1000",
    img: "images/rally-ai-camera-pro-graphite-front-01.webp"
},
{
    id: 1004,
    name: "RALLY PLUS",
    price: "1000",
    img: "images/rally-plus-01b.webp"
},
{
    id: 1005,
    name: "RALLY BAR",
    price: "1000",
    img: "images/rally-bar-graphite-01.webp"
},
{
    id: 1006,
    name: "RALLY BAR MINI",
    price: "1000",
    img: "images/rally-bar-mini-taa-gallery-1.webp"
},
{
    id: 1007,
    name: "RALLY BAR HUDDLE",
    price: "1000",
    img: "images/rally-bar-huddle-front-01-new.webp"
},
{
    id: 1008,
    name: "MEETUP 2",
    price: "1000",
    img: "images/meetup-2-graphite-01.webp"
},
{
    id: 1009,
    name: "RALLY CAMERA",
    price: "1000",
    img: "images/meetup-gallery-global-1.webp"
},
{
    id: 1010,
    name: "GROUP",
    price: "1000",
    img: "images/group-gallery-1.webp"
},
{
    id: 1011,
    name: "LOGITECH SIGHT",
    price: "1000",
    img: "images/sight-facing-front-graphite-1.webp"
},
{
    id: 1012,
    name: "CONNECT",
    price: "1000",
    img: "images/connect-gallery-1.webp"
},
{
    id: 1013,
    name: "BCC950",
    price: "1000",
    img: "images/bcc950-gallery-1.webp"
},
{
    id: 1014,
    name: "PTZ PRO 2",
    price: "1000",
    img: "images/ptz-pro-2-gallery-1.webp"
}]



let basket=[]
let generateproduct = () => {
    return (images.innerHTML=productItemsData.map((x)=>{
        return `<div class="product">
           <div class="card"> <img src="${x.img}" alt="${x.name}"></div>
                <div class="product-info">
                <h2>${x.name}</h2>
                <p class="price">$${x.price}</p>
                        <div class="quantity">
                            <button onclick="decrement(${x.id})" class="minus">-</button>
                            <span id=${x.id}>0</span>
                            <button onclick="increment(${x.id})" class="plus">+</button>
                        </div>
                        <button onclick="add_to_cart(${x.id})" class="cart-button">Add to cart</button>
                </div>
            </div>`
    }).join(" ")) 
};

generateproduct()

let increment = (id) => {
    let selectedItem= id;
    let search=basket.find((x)=> x.id===id)
    if(search===undefined)
    {
         basket.push(
        {
            id:id,
            item:1,
        }
    )
    }
    else{
        search.item+=1;
    }

    console.log(basket)
    update(id);
};
let decrement = (id) => {
     let selectedItem= id;
    let search=basket.find((x)=> x.id===id)
    if(search===undefined || search.item<=0) return;
   
    else{
        search.item-=1;
    }
    update(id);
};
let update = (id) => {
    let search=basket.find((x)=> x.id===id)
    console.log(search.item)
    let qty = search ? search.item : 0
    document.getElementById(id).innerHTML=search.item;

 }   

let cart=[];
 

 let add_to_cart = (id) => {
    let selected = basket.find((x) => x.id === id)
    if (!selected || selected.item <= 0) return // nothing selected, don't add

    let inCart = cart.find((x) => x.id === id)
    if (inCart === undefined) {
        cart.push({ id: id, item: selected.item })
    } else {
        inCart.item += selected.item
    }

    updateCartBadge()
}

let updateCartBadge = () => {
    let total = cart.reduce((sum, x) => sum + x.item, 0)
    document.getElementById("cart-count").innerHTML = total
}