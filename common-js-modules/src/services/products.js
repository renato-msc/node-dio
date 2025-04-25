async function getFullName(codId, productName) {
    console.log("product: " + codId + "--" + productName);
    return codId + "--" +productName;
}

async function getProductLabel(productName) {
    console.log("product: " + productName);
    return productName;
}


module.exports = {
    getFullName,
    getProductLabel,
}