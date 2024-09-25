function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  // hide all the sections
  document.getElementById('donate-section').classList.add('hidden');
  document.getElementById('blog-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');

  // show the section with the provided id as parameter
  document.getElementById(id).classList.remove('hidden');
}

// document
//   .getElementById('btn-donate-money')
//   .addEventListener('click', function () {

//     my_modal_5.showModal();
//   });
