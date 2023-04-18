function deleteByEmail() {
    const secondTdList = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const inputField = document.querySelector('input[name="email"]');
    const message = document.getElementById('result');

    for (const element of secondTdList) {
        if (element.textContent === inputField.value) {
            message.textContent = 'Deleted.';
            element.parentElement.remove();
        } else {
            message.textContent = 'Not found.';
        }
    }

    inputField.value = '';
}