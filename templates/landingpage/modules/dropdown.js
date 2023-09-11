function createDefaultOption() {
    let select = document.querySelector('.dropdown-select'); // get the select element
    let translation = select.dataset.translation;

    let defaultOption = document.createElement('option'); // create a new option element
    defaultOption.text = translation;
    defaultOption.value = '';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.classList.add('default-option');
    defaultOption.style.color = '#002864';

    select.insertBefore(defaultOption, select.firstChild); // add the new option to the beginning of the select element
}
createDefaultOption();
