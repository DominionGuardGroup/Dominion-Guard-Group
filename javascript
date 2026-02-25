var total = 0;


function cart(service,price){

total = total + price;

document.getElementById("cartBox").innerHTML =

"Total $" + total;

}



function book(){

alert("Booking Request Sent Successfully");

}
