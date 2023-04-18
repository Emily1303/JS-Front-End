function addItem() {
    const inputField = document.getElementById('newItemText');
    const liElements = Array.from(document.getElementsByTagName('li'))[0];

    let inputValue = inputField.value;

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputValue;
    liElements.parentElement.appendChild(newLiElement);

    inputField.value = '';
}