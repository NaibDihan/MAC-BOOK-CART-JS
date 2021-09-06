function updateMemory(input,price){
    
   document.getElementById(input).innerText = price;
   updateAllCost();
}

function updateAllCost(){
     const bestPrice = document.getElementById('best-price').innerText;
     const memoryTotal = document.getElementById('update-memorycost').innerText;
     const storageTotal = document.getElementById('update-storagecost').innerText;
     const deliveryTotal = document.getElementById('update-deliverycost').innerText;
     const totalAmount = parseFloat(bestPrice)+parseFloat(memoryTotal)+parseFloat(storageTotal)+parseFloat(deliveryTotal);
     const totalPrice=document.getElementById('total-cost');
     const finalTotal=document.getElementById('total-costpromo');
     totalPrice.innerText =totalAmount;
     finalTotal.innerText = totalAmount;
}

    

function memory8(){
    updateMemory('update-memorycost',0);
}

function memory16(){
    updateMemory('update-memorycost',180);
    
}

function storage256GB(){
    updateMemory('update-storagecost',0);
    
}

function storage512GB(){
    updateMemory('update-storagecost',100);
    
}
function storage1TB(){
    updateMemory('update-storagecost', 180);
   
}

function deliveryFree(){
    updateMemory('update-deliverycost', 0);
    
}
function deliveryCharge(){
    updateMemory('update-deliverycost', 20);
    
}
function promoDiscount(promoCode){
    if(promoCode.toLowerCase() == 'naib')
    {
       const totalPrice = document.getElementById('total-cost').innerText;
       const promoDiscount = totalPrice/10;
       const AfterDiscount = totalPrice-promoDiscount;
       document.getElementById('total-costpromo').innerText = AfterDiscount;
       
    }
    else{
        alert('Enter Correct Promo Code. Example - Naib');
    }
    document.getElementById('promo-code').value='';
    
}


document.getElementById('promo-apply').addEventListener('click',function(){
    const promoCode=document.getElementById('promo-code');
    promoDiscount(promoCode.value);
    
});