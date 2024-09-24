document
  .getElementById('btn-donate-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-donate-money');

    if (isNaN(donateMoney)) {
      alert('Failed to Donate Money, Kindly input number');
      return;
    }

    if (donateMoney > 0) {
      const card1DonationTillNow = getInputFieldValueById(
        'card1-donation-till-now'
      );
      const newCard1DonationBalance = card1DonationTillNow + donateMoney;

      document.getElementById('card1-donation-till-now').innerText =
        newCard1DonationBalance;

      // add to Donation to History
      const donationTitle = document.getElementById('noakhali-title');
      const p = document.createElement('p');
      p.innerText = `${donateMoney} Taka is Donated ${donationTitle.innerText}`;
      console.log(p);

      document.getElementById('history-container').appendChild(p);
    } else {
      alert('Failed to Donate Money. Kindly Try Again.');
    }
  });
