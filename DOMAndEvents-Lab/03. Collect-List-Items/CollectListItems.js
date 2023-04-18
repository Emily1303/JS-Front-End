function extractText() {
    const ulList = Array.from(document.getElementsByTagName('li'));
    const textArea = document.getElementById('result');

    for (const element of ulList) {
        let elementValue = element.textContent;
        textArea.value += elementValue;
    }
}