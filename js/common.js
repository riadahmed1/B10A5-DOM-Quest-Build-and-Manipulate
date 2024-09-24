function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}


function showSectionById(id){
    // hide all the sections
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden')
}