let decreaseBtn = document.querySelector('#quantity-down')
let increaseBtn = document.querySelector('#quantity-up')
let removeBtn = document.querySelector('.remove')

function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.total-quantity')
        quantity.innerHTML = displayQuantity
}

let quantity = 1

decreaseBtn.addEventListener('click', function(e){
    if(quantity > 0){
        quantity--
    } else {
        window.alert("Nothing in cart")
    }
    updateQuantity(`Quantity: ${quantity}`)
})
increaseBtn.addEventListener('click', function(e){
        quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

function removeItem(){
    let removedItem = document.querySelector('.cart-item')
        removedItem.remove()
}

removeBtn.addEventListener('click', function(e){
    removeItem()
})