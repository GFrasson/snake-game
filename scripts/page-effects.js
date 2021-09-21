function handleCheckboxes() {
    const checkboxes = document.querySelectorAll("input");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }

            checkbox.checked = true;
        });
    });
}

function animateTitle() {
    const title = document.querySelector('.game-title');
    const titleText = title.innerHTML;
    title.innerHTML = "";

    for (let i = 0; i < titleText.length; i++) {
        title.innerHTML += `<span>${titleText[i]}</span>`;
    }
}

function escope() {
    handleCheckboxes();
    animateTitle();
}

escope();