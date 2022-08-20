function getTextByID(elementId) {
    const phnTotalElement = document.getElementById(elementId);
    const currentTotalPrizeStirng = phnTotalElement.innerText;
    const currentTotalPrize = parseInt(currentTotalPrizeStirng);
    return currentTotalPrize;

}



function calculateSubTotal() {
    // Calculate
    const currentPhnTotal = getTextByID('mobile-prize');
    const currentCaseTotal = getTextByID('case-prize');

    const subTotal = currentPhnTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = subTotal;


    // Tax Amount
    const taxAmountstrign = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstrign);
    const taxAmountNew = document.getElementById('tax-total');
    taxAmountNew.innerText = taxAmount;



    // Final Total
    const finalTotal = subTotal + taxAmount;
    const totalFinalBill = document.getElementById('final-total');
    totalFinalBill.innerText = finalTotal;



}