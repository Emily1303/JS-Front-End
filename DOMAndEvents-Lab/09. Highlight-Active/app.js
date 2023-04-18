function focused() {
  const allInputs = Array.from(document.getElementsByTagName("input"));

  for (let i = 0; i < allInputs.length; i++) {
    let currentElement = allInputs[i];

    currentElement.addEventListener("focus", focusedElement);
    currentElement.addEventListener("blur", blurredElement);

    function focusedElement(e) {
      e.currentTarget.parentElement.classList.add("focused");
    }

    function blurredElement(e) {
      if (e.currentTarget.parentElement.classList.contains("focused")) {
        e.currentTarget.parentElement.classList.remove("focused");
      }
    }
  }
}