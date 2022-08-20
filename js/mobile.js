function phnUpDown(isInceise) {
    const phnElement = document.getElementById('phn-total');
    const previousTotalPhnString = phnElement.value;
    const previousTotalPhn = parseInt(previousTotalPhnString);

    let newPhnNumber;

    if (isInceise === true) {
        newPhnNumber = previousTotalPhn + 1;
    }
    else {
        newPhnNumber = previousTotalPhn - 1;
    }


    phnElement.value = newPhnNumber;
    return newPhnNumber;

}


function mobileBlanceUpDown(newPhnNumber) {

    const phnTotalPrize = newPhnNumber * 1219;
    const mobileTotalElement = document.getElementById('mobile-prize');
    mobileTotalElement.innerText = phnTotalPrize;

}



document.getElementById('mobile-plus-btn').addEventListener('click', function () {

    const newPhnNumber = phnUpDown(true);
    mobileBlanceUpDown(newPhnNumber);


    calculateSubTotal();





})

document.getElementById('mobile-minus-btn').addEventListener('click', function () {
    const newPhnNumber = phnUpDown(false);
    mobileBlanceUpDown(newPhnNumber);

    // const phnTotalPrize = getTextByID('mobile-prize');
    calculateSubTotal();





})