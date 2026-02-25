const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
let cart = [];

document.querySelectorAll(".cart-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
        const card = e.target.closest(".service-card");
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);
        cart.push({name,price});
        updateCart();
    });
});

function updateCart(){
    cartItems.innerHTML="";
    let total=0;
    cart.forEach(item=>{
        const li=document.createElement("li");
        li.textContent=`${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total+=item.price;
    });
    cartTotal.textContent=total.toFixed(2);
}

// Booking modal
const modal=document.getElementById("booking-modal");
const closeBtn=document.querySelector(".close");

document.querySelectorAll(".book-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
        modal.style.display="flex";
        document.querySelector("#booking-form input[name='name']").value=e.target.closest(".service-card").dataset.name;
    });
});

closeBtn.addEventListener("click",()=>modal.style.display="none");
window.addEventListener("click",e=>{ if(e.target==modal) modal.style.display="none"; });
