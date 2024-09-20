document.getElementById('btn_click').addEventListener('click',function(evevt){
    
     evevt.preventDefault();
     const inputNumber = document.getElementById('input-1').value ;

     const addManey = parseFloat(inputNumber)

     const inuptPin = document.getElementById('input-2').value ;
     

     if(inuptPin === '1234'){

          const number = document.getElementById('blalanc').innerText;
          const balanceNumber = parseFloat(number)
          
          const newAddNumber = balanceNumber + addManey;

          const AmountManey = document.getElementById('blalanc').innerText= newAddNumber;
          return AmountManey

     }
     else{
          alert('Worng password')
     }
})