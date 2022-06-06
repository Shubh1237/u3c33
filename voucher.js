let arr = JSON.parse(localStorage.getItem("purchase")) || []

let Amount = JSON.parse(localStorage.getItem("user")) || []



const value = Amount.map(function (el, index) {
    var box = document.createElement("div")

    let wallet = document.createElement("h3");
    wallet.innerText = el.wallet;

    box.append(wallet);
    document.querySelector("#wallet_balance").append(box)
})







const url = " https://masai-vouchers-api.herokuapp.com/api/vouchers"



async function getdata() {

    try {
        let res = await fetch(url);
        let data = await res.json()
        append(data[0].vouchers)
        console.log(data[0].vouchers)
    }
    catch (err) {
        console.log(err);
    }
}

getdata();

function append(data) {
    const menu = document.getElementById("voucher_list")
    data.forEach(function (el) {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;
        img.style.width = "200px";
        img.style.height = "200px";

        let h = document.createElement("h3")
        h.innerText = el.name;

        let p = document.createElement("p")
        p.innerText = el.price;

        let btn = document.createElement("button")
        btn.innerText = "buy"
        btn.style.color = "blue";
        btn.style.cursor = "pointer";
        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener("click", function () {
            addTobucket(el);
        })
        div.append(img, h, p, btn);
        menu.append(div);
    })
}

function addTobucket(el) {
    console.log(el)
    
    arr.push(el)

    localStorage.setItem("purchase", JSON.stringify(arr));
    window.location.reload()


}