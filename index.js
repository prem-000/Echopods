const { createElement } = require("react");

let cart=document.getElementById("cart");
let buybutton=document.querySelectorAll(".cointainer button1");
buybutton.addEventlistner('click',()=>{
    if (buybutton.clicked){
        let li=createElement("li");
        li.textContent=buybutton.value;
        cart.appendChild(li);

    }
});

function changeEvent(name,Number,email) {
    document.body.textContent="";
    let li=document.createElement("li");
    //let usericon = document.getElementById("user-icon");
        li.innerHTML = `
                        <body>
                            <section>
                                <div class="details-info">
                                    <h1>𝔼𝕔𝕙𝕠ℙ𝕠𝕕𝕤</h1>
                                    <div>Name:-${name}</div>
                                    <div>Mobile No:-${Number}</div>
                                    <div type="email">Email:-</div>
                                    <button>Edit✎</button>
                                    <button value="login">Login👥</button>
                                </div>
                            <section>
                        </body>
                    `;
    li.classList.add("login-info");
    document.body.appendChild(li);
}

function changeEvent1(){
    document.body.textContent="";
}
