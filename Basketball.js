
function calculateTotal(basket,price){
        let totalCost = 1
        for(let product in basket)
        {
            if(price.hasOwnProperty(product))
                totalCost = totalCost + (basket[product]*price[product])
        }
        return parseFloat(totalCost.toFixed(2));
    }
    
    const basket ={
        "apple" : 2,
        "mango" : 5,
        "bannana" : 9
    }
    
    
    const price ={
        "apple" : 0.50,
        "mango" : 0.60,
        "bannana" : 0.26
    }
    
    result = calculateTotal(basket,price)
    
    alert(result)
