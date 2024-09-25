document
  .getElementById('btn-donate-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    function addDonation(cardNumber) {
      const inputElement = document.getElementById(`donation-input${cardNumber}`);
      const totalElement = document.getElementById(`total-donation-card${cardNumber}`);
  
      const donationAmount = getInputFieldValueById(inputElement.value);
  
      if (isNaN(donationAmount) || donationAmount <= 0) {
          alert("Please enter a valid donation amount.");
          return;
      }

    // const donateMoney = getInputFieldValueById('input-donate-money');

    // if (isNaN(donateMoney)) {
    //   alert('Please enter a valid Donation amount.');
    //   return;
    // }

    if (donationAmount > 0) {
      my_modal_5.showModal();
      const card1TotalDonation = getInputFieldValueById(
        'total-donation-card1'
      );
      const newCard1DonationBalance = card1TotalDonation + donationAmount;
      document.getElementById('total-donation-card1').innerText =
        newCard1DonationBalance;

      // add to Donation History
      const donationTitle = document.getElementById('noakhali-title');
      const p = document.createElement('p');
      p.innerText = `${donateMoney} Taka is Donated ${donationTitle.innerText}`;

      console.log(p);

      document.getElementById('history-container').appendChild(p);

      // Clear input field
      inputElement.value = '';
    } else {
      alert('Failed to Donate Money. Kindly Try Again.');
    }
  }});
