var searchVal="apple"

const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchVal}`,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "0a7687307fmsh8dc33f3270d3bcep16a24cjsn92f6ae799110",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
    }
};

var cartList=[]

$.ajax(settings).done(function (response) {
	console.log(response.hints);
    var products = response.hints
    
    const container = document.getElementById("products")
  
    var array = ''
    
    products.forEach(element => {
        array = array + 
        `<div class="mySlides fade">
        <h2>${element.food.label}</h2>
        <img src="${element.food.image}" style="width:100%">
        <button class="shop-item-button" data-name="${element.food.label}">ADD TO CART</button>
    
        </div>`
    });
    container.innerHTML=array

    let buttons = document.querySelectorAll(".shop-item-button")
    console.log(buttons)
    buttons.forEach(element => {
        element.addEventListener('click', (e)=>{
            console.log(cartList)
            cartList.push(e.target.dataset.name)
            updateCart()
        }) 
    });


 
});

const updateCart = ()=>{
    var details = ''

    const table = document.querySelector('#cartDetails')
    console.log(table)
    cartList.forEach(element => {
        details=details + `<tr>
        <td>${element}</td>
        <td><input type="number"value="1"></td>
        <td>$10</td>
        </tr>`
    });
    
    console.log(details)
    table.innerHTML = details
    console.log(cartList.length)
    document.querySelector('#totalPrice').innerHTML='$'+cartList.length*10

}

$( "#searchID" ).change(function() {
    // Check input( $( this ).val() ) for validity here
    searchVal=$( this ).val()
    console.log(searchVal)

    
const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchVal}`,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "0a7687307fmsh8dc33f3270d3bcep16a24cjsn92f6ae799110",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
    }
};


$.ajax(settings).done(function (response) {
	console.log(response.hints);
    var products = response.hints
    
    const container = document.getElementById("products")
  
    var array = ''
    
    products.forEach(element => {
        array = array + 
        `<div class="mySlides fade">
        <h2>${element.food.label}</h2>
        <img src="${element.food.image}" style="width:100%">
        <button class="shop-item-button" data-name="${element.food.label}">ADD TO CART</button>
        </div>`
    });
    container.innerHTML=array

    let buttons = document.querySelectorAll(".shop-item-button")
    console.log(buttons)
    buttons.forEach(element => {
        element.addEventListener('click', (e)=>{
            console.log(cartList)
            cartList.push(e.target.dataset.name)
            updateCart()
        }) 
    });

 
});
  });
  
  var counter = 0;
  const likesCounter = document.querySelector("#like-count");
  const likesButton = document.querySelector("#like-button");
  likesButton.addEventListener("click", function () {
      counter += 1;
      likesCounter.innerHTML = counter + " likes";
  });

// Cart functionality

var itemAddButtons = []

//purhase button

const purchaseButton = document.querySelector('#purchase')

purchaseButton.addEventListener('click', ()=>{
    alert('Your purchase order has been confirmed!')
    setTimeout(()=>{
        location.href='./index.html'
        location.reload
    },500)
})
