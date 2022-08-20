function valueIncresOrDecress(isThisTrue) {
    const defultValue = document.getElementById('value');
    const newValueString = defultValue.value;
    const newValue = parseInt(newValueString);

    let newValueSet;
    if (isThisTrue === true) {
        newValueSet = newValue + 1;
    }
    else {
        newValueSet = newValue - 1;
    }


    defultValue.value = newValueSet;
    return newValueSet;

}


function prizeUpdate(newCaseNumber) {
    const caseTotalPrize = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-prize');
    caseTotalElement.innerText = caseTotalPrize;




}


document.getElementById('plus-btn').addEventListener('click', function () {
    const newCaseNumber = valueIncresOrDecress(true);
    prizeUpdate(newCaseNumber);

    calculateSubTotal();



})


document.getElementById('minus-btn').addEventListener('click', function () {
    const newCaseNumber = valueIncresOrDecress(false);
    prizeUpdate(newCaseNumber);

    calculateSubTotal();


})