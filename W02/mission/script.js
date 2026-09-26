
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
     body = document.querySelector(".change_mode");
    if (current == 'dark') {
        body.classList.add("dark_mode");
        logo.src = "byui-logo-black.png";
    } else {
        body.classList.remove("dark_mode");
        logo.src = "byui-logo-blue.webp";
    }
}           
                    