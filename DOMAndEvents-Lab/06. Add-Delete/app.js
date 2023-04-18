function addItem() {
    const ulList = document.getElementById('items');
    const inputField = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputField.value;
    ulList.appendChild(newLiElement);
    inputField.value = '';

    let newAnchor = document.createElement('a');
    newAnchor.textContent = '[Delete]';
    newAnchor.href = '#';
    newLiElement.appendChild(newAnchor);

    newAnchor.addEventListener('click', removeLiElement);

    function removeLiElement(e) {
        e.currentTarget.parentElement.remove();
    }
}