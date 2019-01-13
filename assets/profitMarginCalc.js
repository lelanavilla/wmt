
function getCost(){
    const pricelist = JSON.parse('assets/pricelist.json');
    let item = pricelist.{nameofpart}

    let price = item.value
    return price;
}
//price imported from pricelist.json

function soldPrice(){
    let ebayPrice= document.getElementsByClassName('POSITIVE');
    let soldPrice =  ebayPrice.value
    return soldPrice
}

function profitMargin(price, soldPrice){
    let grossProfit =  soldPrice -  price;
    let margin = grossProfit /soldPrice;
    let profitPercentage = margin * 100;
    let markup = (grossProfit / price)* 100;
    return profitPercentage
    return markup
    }
    
}