import { allProductsArray } from "./data.js";


function getProductData(){
    let product_Html = ''

    allProductsArray.forEach(function(product){
        console.log(product)

        product_Html += `
        <div class="product_tile">
            <img src=>
            <div>
            <h2>${product.manufacturer}<h2>
            <p>${product.name}</p>
            <p>$${product.price}</p>
            </div>
            <a href=""> press me </a>
        </div>
        
        `
        console.log(product_Html)
        
       
    })

    return product_Html

  
}

function render(){
    document.getElementById("product_list").innerHTML = getProductData()
}

render()



