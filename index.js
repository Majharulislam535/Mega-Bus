
function handleChange (product,isIncrease){
    const productInt = document.getElementById(product+'-input');
    const parse = parseInt(productInt.value);
     let count = parse ;
      if(isIncrease==true){
          count = parse +1;
      }
      else if(isIncrease==false && parse > 0){
          count = parse -1;
      }
    productInt.value = count ;
    let subTotal = 0;
    if(product == 'first'){
        subTotal = 150 * count;
    }
    else if(product == 'second'){
        subTotal = 100 * count;
    }
    document.getElementById('amount').innerText = subTotal;
    calculator();
}

function calculator(){
    const firstInt = document.getElementById('first-input');
    const parse = parseInt (firstInt.value);
    const secondInt = document.getElementById('second-input');
    const parse2 =parseInt(secondInt.value);
    const subTotal = parse *150 + parse2 *100 ;
    document.getElementById('amount').innerText = subTotal ;
     const vat = subTotal * 0.1 ;
     const vatFixed = Math.round(vat) ;
     document.getElementById('vat').innerText = vatFixed;
    const total = subTotal + vatFixed ;
    document.getElementById('total').innerText = total;
}