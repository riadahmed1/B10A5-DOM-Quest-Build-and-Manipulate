document
  .getElementById('show-donation-section')
  .addEventListener('click', function () {
    console.log('show donation section button clicked');
    showSectionById('donate-section');
  });

document
  .getElementById('show-history-section')
  .addEventListener('click', function () {
    console.log('show history section button clicked');
    showSectionById('history-section');
  });
