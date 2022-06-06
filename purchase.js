var products = JSON.parse(localStorage.getItem("purchase"));
let Amount = JSON.parse(localStorage.getItem("user")) || []



Amount.map(function(el,index){
    var box = document.createElement("div")

    let wallet = document.createElement("h3");
    wallet.innerText = el.wallet;

    box.append(wallet);
    document.querySelector("#wallet_balance").append(box)
})


products.map(function(el,index){
    var box = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;
    img.style.width = "200px";
    img.style.height = "200px";

    let h = document.createElement("h3")
    h.innerText = el.name;

    let p = document.createElement("p")
    p.innerText = el.price;

    box.append(img,h,p);
    document.querySelector("#purchased_voouchers").append(box);
})