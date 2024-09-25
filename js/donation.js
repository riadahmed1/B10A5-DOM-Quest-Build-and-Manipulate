let accountBalance = 10500;

function donate(donatedId, inputId) {
  const donationAmount = getInputFieldValueById(inputId);

  if (isNaN(donationAmount)) {
    alert('Please enter a valid Donation amount.');
    return;
  }

  if (!isNaN(donationAmount) && donationAmount > 0) {
    const previousAmount = getTextFieldValueById(donatedId);
    const newAmount = previousAmount + donationAmount;
    document.getElementById(donatedId).innerText = newAmount;

    accountBalance -= donationAmount;
    document.getElementById('accountBalance').innerText = accountBalance;

    // add to History
    const combinedHistory = document.getElementById('combinedHistory');
    const currentDateTime = new Date().toLocaleString();
    const combinedEntry = document.createElement('p');
    combinedEntry.textContent = `{donatedId} received $${donationAmount} on ${currentDateTime}`;
    combinedHistory.appendChild(combinedEntry);

    document.getElementById(inputId).value = '';

    my_modal_5.showModal();
  } else {
    alert('Failed to Donate Money. Please enter a valid Donation amount.');
  }
}

// function openModal() {
//   document.getElementById('thankYouModal').style.display = 'flex';
// }

// function closeModal() {
//   document.getElementById('thankYouModal').style.display = 'none';
// }

// function addDonation(cardNumber) {
//   const inputElement = document.getElementById(`donation-input${cardNumber}`);
//   const totalElement = document.getElementById(
//     `total-donation-card${cardNumber}`
//   );

//   const donationAmount = getInputFieldValueById(inputElement.value);

//   if (isNaN(donationAmount) && donationAmount <= 0) {
//     alert('Please enter a valid donation amount.');
//     return;
//   }
// }

// document
//   .getElementById('btn-donate-money')
//   .addEventListener('click', function (event) {
//     event.preventDefault();
//     // const donateMoney = getInputFieldValueById('input-donate-money');

//     // if (isNaN(donateMoney)) {
//     //   alert('Please enter a valid Donation amount.');
//     //   return;
//     // }

//     if (donationAmount > 0) {
//       my_modal_5.showModal();
//       const card1TotalDonation = getInputFieldValueById('total-donation-card1');
//       my_modal_5.showModal();
//       const newCard1DonationBalance = card1TotalDonation + donationAmount;
//       document.getElementById('total-donation-card1').innerText =
//         newCard1DonationBalance;

//       // add to Donation History
//       const donationTitle = document.getElementById('noakhali-title');
//       const p = document.createElement('p');
//       p.innerText = `${donateMoney} Taka is Donated ${donationTitle.innerText}`;

//       console.log(p);

//       document.getElementById('history-container').appendChild(p);

//       // Clear input field
//       inputElement.value = '';
//     } else {
//       alert('Failed to Donate Money. Kindly Try Again.');
//     }
//   });

// function donate(donatedId) {
//   lastIndex = donatedId.slice(-1);
//   const donationAmount = getInputFieldValueById('donation-input' + donatedId);

//   // alert('Please enter a valid donation amount.');

//   const previousAmount = getTextFieldValueById(donatedId);
//   const newAmount = previousAmount + donationAmount;
//   document.getElementById(donatedId).innerText = newAmount;

//   const accountBalance = getElementById('account-balance');
//   accountBalance -= donationAmount;
//   document.getElementById('accountBalance').innerText = accountBalance;

//   // add to History
//   const historyContainer = document.getElementById('history-container');
//   const currentDateTime = new Date().toLocaleString();
//   const combinedEntry = document.createElement('p');
//   combinedEntry.textContent = `Charity in ${donatedId} received $${donationAmount} on ${currentDateTime}`;
//   historyContainer.appendChild(combinedEntry);

//   // Clear the input field
//   document.getElementById(inputId).value = '';

//   // Open Modal
//   openModal();
// }

// <!-- <div class="card" id="card1">
//             <h2>Charity 1</h2>
//             <p>
//               Donated Till Now: $<span id="donated1" class="donatedAmount"
//                 >1050</span
//               >
//             </p>
//             <input
//               type="number"
//               placeholder="Enter donation amount"
//               id="donationInput1"
//             />
//             <button onclick="donate('donated1', 'donationInput1')">
//               Donate Now
//             </button>
//           </div> -->
