document
  .getElementById('btn-donate-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-donate-money');

    if (isNaN(donateMoney)) {
      alert('Please enter a valid Donation amount.');
      return;
    }

    if (donateMoney > 0) {
      my_modal_5.showModal();
      const card1DonationTillNow = getInputFieldValueById(
        'card1-total-donation'
      );
      const newCard1DonationBalance = card1DonationTillNow + donateMoney;
      document.getElementById('card1-total-donation').innerText =
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
  });
