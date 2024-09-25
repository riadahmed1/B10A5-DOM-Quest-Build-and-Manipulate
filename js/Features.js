document
  .getElementById('show-donation-section')
  .addEventListener('click', function () {
    // console.log('show donation section button clicked');
    showSectionById('donate-section');
  });

document
  .getElementById('show-blog-section')
  .addEventListener('click', function () {
    showSectionById('blog-section');
  });

document
  .getElementById('show-history-section')
  .addEventListener('click', function () {
    showSectionById('history-section');
  });
