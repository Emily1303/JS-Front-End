function colorize() {
    const trElements = document.getElementsByTagName('tr');

    for (let i = 0; i < trElements.length; i++) {
        if (i % 2 !== 0) {
            trElements[i].style.backgroundColor = 'Teal';
        }
    }
}