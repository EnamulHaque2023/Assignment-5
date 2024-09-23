







const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', function(){

    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    // console.log(mainBalance);



    const donateBalance = parseFloat(document.getElementById('donate-balance').innerText)
    // console.log(donateBalance);





    const donateAmount = parseFloat(document.getElementById('donate-amount').value);
    // console.log(donateAmount);
    const totalDonate = donateBalance + donateAmount;
    // console.log(totalDonate);

    const totalDonateBalance = document.getElementById('donate-balance');
    totalDonateBalance.innerText = totalDonate ;

    const remainingBalance = mainBalance -  totalDonate;
    console.log(remainingBalance);

    const savingBalance = document.getElementById('main-balance');
    savingBalance.innerText = remainingBalance;
    
    
 
    

})









