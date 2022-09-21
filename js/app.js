function selectPlayers(name, button) {
    const selected = document.getElementById('selected-player-section');
    const li = document.createElement('li');
    li.classList.add('selected');
    li.innerHTML = `${name}`;

    const listLength = document.querySelectorAll('.selected');
    if (listLength.length < 5) {
        selected.appendChild(li);
    } else {
        alert('You can not select more than 5');
        return;
    }
    button.setAttribute('disabled', true);
}

function calculate(){
    
    const playerPrice = getInputValue('player-expense') || 0;

    const list = document.querySelectorAll('.selected');
    const listLength = list.length;

    const totalExpense = document.getElementById('total');
    totalExpense.innerText = playerPrice * listLength;
}

function calculateTotal(){
    const managerFees = getInputValue('manager') || 0;
    const coachFees = getInputValue('coach') || 0;

    const previousTotalElement = document.getElementById('total');
    const previousTotalString = previousTotalElement.innerText;
    const previousTotal = parseFloat(previousTotalString);

    const finalTotal = document.getElementById('finalTotal');
    finalTotal.innerText = managerFees + coachFees + previousTotal;

}