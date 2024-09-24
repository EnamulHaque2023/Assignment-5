

// Add eventlistener for calculate Donate button 
const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', function(){

    // main balance js
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    // console.log(mainBalance);



    // donate balance
    const donateBalance = parseFloat(document.getElementById('donate-balance').innerText)
    // console.log(donateBalance);





    // donate input amount 
    const donateAmount = parseFloat(document.getElementById('donate-amount').value);
    // console.log(donateAmount);
    const totalDonate = donateBalance + donateAmount;
    // console.log(totalDonate);

    // total donate balance 
    const totalDonateBalance = document.getElementById('donate-balance');
    totalDonateBalance.innerText = totalDonate.toFixed(2) ;


    // remaining balance
    const remainingBalance = mainBalance -  totalDonate;
    // console.log(remainingBalance);


    // remaining main balance
    const savingBalance = document.getElementById('main-balance');
    savingBalance.innerText = remainingBalance.toFixed(2);
    

})


// history-tab Function

const historyTab = document.getElementById('history-tab');
const donateTab = document.getElementById('donate-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-lime-400');

    donateTab.classList.remove('bg-lime-400');

    document.getElementById('donate-card-a').classList.add('hidden');

    document.getElementById('history-section').classList.remove('hidden')

   


});









