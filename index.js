import { allProductsArray } from "./data.js";


function getProductData(){
    let productHtml = ''

    allProductsArray.forEach(function(product){
        

        productHtml += `
        <div class="product_tile">
            <img class="product_image" "alt=${product.alt} src=${product.image}>
            <div class="product_text">
            <h3 class="product_name">${product.name}</h3>
            <p class="manufacturer">${product.manufacturer}</p>
            </div>

            <div class="product_price_cart">
            <i class="fa-solid fa-circle-plus" data-add="${product.uuid}"></i>
            <p class="product_price">$${product.price}</p>
            </div>
        </div>
        
        `
       
    })

    return productHtml

  
}



document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        getCartHtml(e.target.dataset.add)
    }

    
})


document.getElementById("fa-lightbulb").addEventListener("click",function(){
    
    const cartContainer = document.getElementById("cart_container");
    if (cartContainer.classList.contains("close")) {
      cartContainer.classList.remove("close");
    } else {
      cartContainer.classList.add("close");
    }
})



let cartArray = [];

function updateCartHtml(cartArray) {
    let cartHtml = ""
    let cartCountHtml = ""
  
    const totalPrice = cartArray.reduce(function(priceTotals, currentItem){
      return priceTotals + (currentItem.price * currentItem.quantity)
    }, 0)

    const totalCount = cartArray.reduce(function(cartTotal, currentCart){
        return cartTotal + (currentCart.quantity)
      }, 0)
  
    cartArray.forEach((item) => {
      const totalItemPrice = item.price * item.quantity
      cartHtml += `
        <div class="cart_text">
          <h3 class="cart_name">${item.name}</h3>
          <p class="cart_manufacturer">${item.manufacturer}</p>
          <p class="cart_product_price">$${totalItemPrice}</p>
          <p>Quantity: ${item.quantity}</p>
        </div>
      `
    })
  
    cartHtml += `<p class="total_cart_price">Total price: $${totalPrice}</p>`
    cartCountHtml += `<p>${totalCount}</p>`

    document.getElementById("cart_container").innerHTML = cartHtml
    document.getElementById("cart_count").innerHTML = cartCountHtml
  }

function getCartHtml(productId) {
  const cartObject = allProductsArray.find((product) => product.uuid === productId)

  if (cartObject) {
    const existingCartItem = cartArray.find((item) => item.name === cartObject.name);
    if (existingCartItem) {
      existingCartItem.quantity++
     existingCartItem.price * existingCartItem.quantity
      
    } else {
      cartArray.push({
        name: cartObject.name,
        manufacturer: cartObject.manufacturer,
        price: cartObject.price,
        quantity: 1,
      });
    }
    updateCartHtml(cartArray);
    
  }
 
}













function render(){
    document.getElementById("product_list").innerHTML = getProductData()
}

render()



