
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
     body = document.querySelector(".change_mode");
     h2 = document.querySelector("h2");
    if (current == 'dark') {
        body.classList.add("dark_mode");
        logo.src = "byui-logo-black.png";
        h2.style.color = "#94cdf3";
    } else {
        body.classList.remove("dark_mode");
        logo.src = "byui-logo-blue.webp";
        h2.style.color = "#006EB6";
    }
}           
                    