var textResponce;
var factVerificationStatus;
 
async function buttonFunction() {
    await getCatImage()
    await getCatFactTrue()
    while (true) {
        if (factVerificationStatus === true) {
            break;
        } else {
            await getCatFactTrue()
        }
    }
 
}
 
 
async function getCatImage() {
    var response = await fetch('https://cataas.com/cat?json=true')
    var data1 = await response.json()
    document.getElementById("apiResponceImage").src = "https://cataas.com" + data1.url;
 
}
 
async function getCatFactTrue() {
    var response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    data = await response.json()
    console.log(data.status.verified)
    factVerificationStatus = data.status.verified
    console.log(data.text)
    textResponce = data.text
    document.getElementById("textToBechanged").innerHTML = textResponce;
}
