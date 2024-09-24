

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


    const historyItem = document.createElement('div');
    historyItem.className = 'bg-gray p-3 rounded-md border-1-2 border-indigo-300';
    historyItem.innerHTML =`
    <p class="text-xs text-black-500 font-bold " >${donateAmount.toFixed(2)} Donate for Flood at Noakhali, Bangladesh</p>
    <p class="text-xs text-black-500 ">${new Date().toLocaleDateString() }</p>

    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild )







    

});


// history-tab Function

const historyTab = document.getElementById('history-tab');
const donateTab = document.getElementById('donate-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-lime-400');

    donateTab.classList.remove('bg-lime-400');

    document.getElementById('donate-card-a').classList.add('hidden');

    document.getElementById('history-section').classList.remove('hidden')

   


});









