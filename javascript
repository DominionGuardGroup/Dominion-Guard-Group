var cart = [];

function addToCart(name, price){
    cart.push(name + " $" + price);
    document.getElementById("cart").innerHTML = cart.join("<br>");
}

function bookNow(){
    alert("Booking Request Sent");
}
