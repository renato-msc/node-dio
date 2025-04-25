const p = require("./services/products");

async function main(params) {
    console.log("Carrinho de compras")
    p.getFullName("408", "mousepad");

}

main();