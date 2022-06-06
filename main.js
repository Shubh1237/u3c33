

let Arr = JSON.parse(localStorage.getItem("user")) || [];

function submit() {

    detailobj = {
         name :document.querySelector("#name").value,
         email : document.querySelector("#email").value,
         address : document.querySelector("#address").value,
         wallet : document.querySelector("#amount").value,
    }
    // let name = document.getElementById("name").value;
    // let email = document.getElementById("email").value;
    // let address = document.getElementById("address").value;
    // let number = document.getElementById("amount").value;
    Arr.push(detailobj )
    localStorage.setItem("user", JSON.stringify(Arr))
}