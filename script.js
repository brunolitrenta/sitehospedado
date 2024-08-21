function newElement() {

    const input = document.getElementById("input");
    const inputValue = input.value;

    const addedSection = document.getElementById("added");
    const createdSection = document.createElement("section");
    const createdParagraph = document.createElement("p");

    createdParagraph.innerHTML = inputValue;

    createdSection.appendChild(createdParagraph);
    addedSection.appendChild(createdSection);
    input.value = null;
}